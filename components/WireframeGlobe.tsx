"use client";

import { useRef, useEffect, useCallback, useState } from "react";

const toRad = (d: number) => (d * Math.PI) / 180;
const TEX_W = 720;
const TEX_H = 360;

function decodeTopology(topo: any): [number, number][][] {
    const { scale, translate } = topo.transform;
    const arcs: [number, number][][] = topo.arcs.map((arc: number[][]) => {
        let x = 0, y = 0;
        return arc.map(([dx, dy]: number[]) => {
            x += dx; y += dy;
            return [x * scale[0] + translate[0], y * scale[1] + translate[1]] as [number, number];
        });
    });
    const polys: [number, number][][] = [];
    const land = topo.objects.land;
    const geoms = land.type === "GeometryCollection" ? land.geometries : [land];
    for (const g of geoms) {
        const rings = g.type === "MultiPolygon" ? g.arcs.flat() : (g.arcs || []);
        for (const ring of rings) {
            const coords: [number, number][] = [];
            for (const idx of ring) {
                const a = idx >= 0 ? arcs[idx] : [...arcs[~idx]].reverse();
                const s = coords.length > 0 ? 1 : 0;
                for (let i = s; i < a.length; i++) coords.push(a[i]);
            }
            if (coords.length > 2) polys.push(coords);
        }
    }
    return polys;
}

function buildMask(polys: [number, number][][]): Uint8Array {
    const c = document.createElement("canvas");
    c.width = TEX_W; c.height = TEX_H;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, TEX_W, TEX_H);
    ctx.fillStyle = "#fff";
    for (const poly of polys) {
        ctx.beginPath();
        for (let i = 0; i < poly.length; i++) {
            const x = ((poly[i][0] + 180) / 360) * TEX_W;
            const y = ((90 - poly[i][1]) / 180) * TEX_H;
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
    }
    const img = ctx.getImageData(0, 0, TEX_W, TEX_H);
    const mask = new Uint8Array(TEX_W * TEX_H);
    for (let i = 0; i < mask.length; i++) mask[i] = img.data[i * 4] > 128 ? 1 : 0;
    return mask;
}

// Pre-computed grid point
interface GridPt {
    cosLat: number;
    sinLat: number;
    lonR: number;
    land: boolean;
}

const CITIES: [number, number][] = [
    [59.9, 30.3], [55.75, 37.6], [51.5, -0.1], [48.85, 2.35],
    [40.7, -74], [35.7, 139.7], [19, 72.8], [-33.9, 151.2],
    [52.5, 13.4], [39.9, 116.4], [-23.5, -46.6], [34, -118.2],
    [1.3, 103.8], [-1.3, 36.8],
];
// Pre-compute city trig
const CITY_DATA = CITIES.map(([la, lo]) => ({
    cosLat: Math.cos(toRad(la)),
    sinLat: Math.sin(toRad(la)),
    lonR: toRad(lo),
}));
const CONNS: [number, number][] = [
    [0, 2], [2, 4], [3, 8], [1, 5], [6, 9], [7, 5], [10, 4], [4, 11], [5, 12], [13, 6],
];

interface Props { size?: number }

export default function WireframeGlobe({ size = 440 }: Props) {
    const cvs = useRef<HTMLCanvasElement>(null);
    const raf = useRef(0);
    const ang = useRef(0);
    const gridRef = useRef<GridPt[]>([]);
    const initRef = useRef(false);
    const [ready, setReady] = useState(false);

    // Setup canvas size ONCE
    useEffect(() => {
        const el = cvs.current;
        if (!el || initRef.current) return;
        initRef.current = true;
        const dpr = window.devicePixelRatio || 1;
        el.width = size * dpr;
        el.height = size * dpr;
        el.style.width = size + "px";
        el.style.height = size + "px";
        const ctx = el.getContext("2d")!;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }, [size]);

    // Load map data & build grid ONCE
    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json")
            .then(r => r.json())
            .then(topo => {
                const mask = buildMask(decodeTopology(topo));
                const step = 2.5;
                const pts: GridPt[] = [];
                for (let lat = 88; lat >= -88; lat -= step) {
                    const latR = toRad(lat);
                    const cosLat = Math.cos(latR);
                    const sinLat = Math.sin(latR);
                    const lonStep = step / Math.max(cosLat, 0.2);
                    for (let lon = -180; lon < 180; lon += lonStep) {
                        let lx = Math.floor(((lon + 180) / 360) * TEX_W);
                        if (lx >= TEX_W) lx -= TEX_W;
                        const ly = Math.floor(((90 - lat) / 180) * TEX_H);
                        const land = ly >= 0 && ly < TEX_H && mask[ly * TEX_W + lx] === 1;
                        pts.push({ cosLat, sinLat, lonR: toRad(lon), land });
                    }
                }
                gridRef.current = pts;
                setReady(true);
            })
            .catch(() => setReady(true));
    }, []);

    const draw = useCallback(() => {
        const el = cvs.current;
        if (!el) return;
        const ctx = el.getContext("2d");
        if (!ctx) return;

        const cx = size / 2, cy = size / 2, r = size * 0.42, rot = ang.current;
        const cosRot = Math.cos(rot), sinRot = Math.sin(rot);

        // Clear
        ctx.clearRect(0, 0, size, size);

        // ── Atmosphere (simple, no heavy gradients) ──
        ctx.fillStyle = "rgba(50,100,200,0.04)";
        ctx.beginPath(); ctx.arc(cx, cy, r * 1.12, 0, Math.PI * 2); ctx.fill();

        // Edge glow
        ctx.strokeStyle = "rgba(60,130,240,0.06)";
        ctx.lineWidth = 8;
        ctx.beginPath(); ctx.arc(cx, cy, r * 1.04, 0, Math.PI * 2); ctx.stroke();

        // ── Globe outline ──
        ctx.strokeStyle = "rgba(80,140,230,0.18)";
        ctx.lineWidth = 1.0;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();

        // ── Grid: latitudes ──
        ctx.strokeStyle = "rgba(60,110,200,0.03)";
        ctx.lineWidth = 0.3;
        for (let i = 1; i < 6; i++) {
            const lat = -Math.PI / 2 + (Math.PI * i) / 6;
            const py = cy - r * Math.sin(lat), rx = r * Math.cos(lat);
            ctx.beginPath(); ctx.ellipse(cx, py, rx, rx * 0.06, 0, 0, Math.PI * 2); ctx.stroke();
        }

        // ── Grid: longitudes ──
        for (let i = 0; i < 10; i++) {
            const lon = (i / 10) * Math.PI + rot;
            const sx = Math.abs(Math.cos(lon));
            ctx.strokeStyle = `rgba(60,110,200,${0.01 + 0.03 * sx})`;
            ctx.beginPath(); ctx.ellipse(cx, cy, sx * r, r, 0, 0, Math.PI * 2); ctx.stroke();
        }

        // ── Dot-matrix: batch all water into one path, all land into bands ──
        const grid = gridRef.current;

        // Water dots — single color, single path, use tiny rects
        ctx.fillStyle = "rgba(50,90,170,0.035)";
        ctx.beginPath();
        for (let i = 0; i < grid.length; i++) {
            const pt = grid[i];
            // Inline projection for speed
            const lonS = Math.sin(pt.lonR) * cosRot + Math.cos(pt.lonR) * sinRot;
            const lonC = Math.cos(pt.lonR) * cosRot - Math.sin(pt.lonR) * sinRot;
            const z = pt.cosLat * lonC;
            if (z < 0.02) continue;
            if (pt.land) continue;
            const x = cx + r * pt.cosLat * lonS;
            const y = cy - r * pt.sinLat;
            ctx.rect(x - 0.35, y - 0.35, 0.7, 0.7);
        }
        ctx.fill();

        // Land dots — 3 brightness bands to avoid per-dot style changes
        const bands: [number, number, string, number][] = [
            [0.02, 0.3, "rgba(90,165,250,0.22)", 1.2],
            [0.3, 0.6, "rgba(100,175,255,0.42)", 1.5],
            [0.6, 1.1, "rgba(120,190,255,0.62)", 1.8],
        ];

        for (const [zMin, zMax, color, dotSize] of bands) {
            // Glow layer
            ctx.fillStyle = (color as string).replace(/[\d.]+\)$/, `${(dotSize as number) > 1.5 ? 0.1 : 0.06})`);
            ctx.beginPath();
            for (let i = 0; i < grid.length; i++) {
                const pt = grid[i];
                if (!pt.land) continue;
                const lonS = Math.sin(pt.lonR) * cosRot + Math.cos(pt.lonR) * sinRot;
                const lonC = Math.cos(pt.lonR) * cosRot - Math.sin(pt.lonR) * sinRot;
                const z = pt.cosLat * lonC;
                if (z < zMin || z >= zMax) continue;
                const x = cx + r * pt.cosLat * lonS;
                const y = cy - r * pt.sinLat;
                const s = (dotSize as number) + 1.5;
                ctx.rect(x - s / 2, y - s / 2, s, s);
            }
            ctx.fill();

            // Dot layer
            ctx.fillStyle = color as string;
            ctx.beginPath();
            for (let i = 0; i < grid.length; i++) {
                const pt = grid[i];
                if (!pt.land) continue;
                const lonS = Math.sin(pt.lonR) * cosRot + Math.cos(pt.lonR) * sinRot;
                const lonC = Math.cos(pt.lonR) * cosRot - Math.sin(pt.lonR) * sinRot;
                const z = pt.cosLat * lonC;
                if (z < zMin || z >= zMax) continue;
                const x = cx + r * pt.cosLat * lonS;
                const y = cy - r * pt.sinLat;
                const s = dotSize as number;
                ctx.rect(x - s / 2, y - s / 2, s, s);
            }
            ctx.fill();
        }

        // ── Cities ──
        const pulse = (Math.sin(rot * 3) + 1) * 0.5;
        const cScreen: { x: number; y: number; z: number }[] = [];

        for (let i = 0; i < CITY_DATA.length; i++) {
            const c = CITY_DATA[i];
            const lonS = Math.sin(c.lonR) * cosRot + Math.cos(c.lonR) * sinRot;
            const lonC = Math.cos(c.lonR) * cosRot - Math.sin(c.lonR) * sinRot;
            const z = c.cosLat * lonC;
            const px = cx + r * c.cosLat * lonS;
            const py = cy - r * c.sinLat;
            cScreen.push({ x: px, y: py, z });
        }

        // City glows — batch
        ctx.fillStyle = "rgba(140,210,255,0.08)";
        ctx.beginPath();
        for (const p of cScreen) {
            if (p.z < 0.1) continue;
            const gr = 10 + pulse * 4;
            ctx.moveTo(p.x + gr, p.y);
            ctx.arc(p.x, p.y, gr, 0, Math.PI * 2);
        }
        ctx.fill();

        // City dots
        ctx.fillStyle = "rgba(190,225,255,0.85)";
        ctx.beginPath();
        for (const p of cScreen) {
            if (p.z < 0.1) continue;
            const dr = 2.0 + pulse * 0.4;
            ctx.moveTo(p.x + dr, p.y);
            ctx.arc(p.x, p.y, dr, 0, Math.PI * 2);
        }
        ctx.fill();

        // City bright cores
        ctx.fillStyle = "rgba(230,245,255,0.7)";
        ctx.beginPath();
        for (const p of cScreen) {
            if (p.z < 0.1) continue;
            ctx.moveTo(p.x + 0.8, p.y);
            ctx.arc(p.x, p.y, 0.8, 0, Math.PI * 2);
        }
        ctx.fill();

        // Pulse rings — batch
        ctx.strokeStyle = "rgba(140,210,255,0.04)";
        ctx.lineWidth = 0.4;
        ctx.beginPath();
        for (const p of cScreen) {
            if (p.z < 0.1) continue;
            const rr = 8 + pulse * 8;
            ctx.moveTo(p.x + rr, p.y);
            ctx.arc(p.x, p.y, rr, 0, Math.PI * 2);
        }
        ctx.stroke();

        // ── Connection arcs ──
        ctx.strokeStyle = "rgba(120,185,255,0.09)";
        ctx.lineWidth = 0.5;
        ctx.setLineDash([2, 4]);
        ctx.beginPath();
        for (const [a, b] of CONNS) {
            const pA = cScreen[a], pB = cScreen[b];
            if (pA.z < 0.1 || pB.z < 0.1) continue;
            const dist = Math.hypot(pA.x - pB.x, pA.y - pB.y);
            ctx.moveTo(pA.x, pA.y);
            ctx.quadraticCurveTo(
                (pA.x + pB.x) / 2, (pA.y + pB.y) / 2 - 14 - dist * 0.08,
                pB.x, pB.y
            );
        }
        ctx.stroke();
        ctx.setLineDash([]);

        // ── Orbital ring ──
        const tilt = -0.18 + rot * 0.035;
        ctx.strokeStyle = "rgba(70,120,210,0.04)";
        ctx.lineWidth = 0.4;
        ctx.beginPath(); ctx.ellipse(cx, cy, r * 1.28, r * 0.13, tilt, 0, Math.PI * 2); ctx.stroke();

        // Satellite
        const sA = rot * 1.1;
        const cT = Math.cos(tilt), sT = Math.sin(tilt);
        const sx = cx + r * 1.28 * Math.cos(sA) * cT - r * 0.13 * Math.sin(sA) * sT;
        const sy = cy + r * 1.28 * Math.cos(sA) * sT + r * 0.13 * Math.sin(sA) * cT;
        ctx.fillStyle = "rgba(160,215,255,0.25)";
        ctx.beginPath(); ctx.arc(sx, sy, 4, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = "rgba(200,235,255,0.7)";
        ctx.beginPath(); ctx.arc(sx, sy, 1.2, 0, Math.PI * 2); ctx.fill();

        ang.current += 0.0015;
        raf.current = requestAnimationFrame(draw);
    }, [size]);

    useEffect(() => {
        if (!ready) return;
        raf.current = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(raf.current);
    }, [draw, ready]);

    return (
        <canvas
            ref={cvs}
            style={{
                width: size,
                height: size,
                opacity: ready ? 1 : 0,
                transition: "opacity 0.5s",
            }}
        />
    );
}