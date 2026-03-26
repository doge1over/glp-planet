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

interface GridPt {
    cosLat: number;
    sinLat: number;
    lonR: number;
    land: boolean;
}

// ── Country markers ──
const MARKERS: { lat: number; lon: number; label: string; offsetX: number; offsetY: number }[] = [
    { lat: 59.94, lon: 30.31, label: "Санкт-Петербург", offsetX: 14, offsetY: -18 },
    { lat: 55.75, lon: 37.62, label: "Москва", offsetX: 14, offsetY: -14 },
    { lat: 53.9, lon: 27.57, label: "Беларусь", offsetX: 14, offsetY: -12 },
    { lat: 40.42, lon: -3.70, label: "Испания", offsetX: -14, offsetY: -14 },
    { lat: 55.68, lon: 12.57, label: "Дания", offsetX: -14, offsetY: -16 },
    { lat: 41.90, lon: 12.50, label: "Италия", offsetX: -14, offsetY: -10 },
    { lat: 40.18, lon: 44.51, label: "Армения", offsetX: 14, offsetY: -10 },
    { lat: 51.17, lon: 71.43, label: "Казахстан", offsetX: 14, offsetY: -14 },
    { lat: 48.86, lon: 2.35, label: "Франция", offsetX: -14, offsetY: -10 },
    { lat: 51.51, lon: -0.13, label: "Великобритания", offsetX: -14, offsetY: -18 },
    { lat: 50.85, lon: 4.35, label: "Бельгия", offsetX: -14, offsetY: 16 },
    { lat: 52.52, lon: 13.41, label: "Германия", offsetX: 14, offsetY: 16 },
    { lat: 38.91, lon: -77.04, label: "США", offsetX: -14, offsetY: -14 },
    { lat: 28.61, lon: 77.21, label: "Индия", offsetX: 14, offsetY: -12 },
];

const MARKER_DATA = MARKERS.map((m) => ({
    cosLat: Math.cos(toRad(m.lat)),
    sinLat: Math.sin(toRad(m.lat)),
    lonR: toRad(m.lon),
    label: m.label,
    offsetX: m.offsetX,
    offsetY: m.offsetY,
}));

interface Props { size?: number }

export default function WireframeGlobe({ size = 440 }: Props) {
    const cvs = useRef<HTMLCanvasElement>(null);
    const raf = useRef(0);
    const ang = useRef(0);
    const gridRef = useRef<GridPt[]>([]);
    const initRef = useRef(false);
    const [ready, setReady] = useState(false);

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

        ctx.clearRect(0, 0, size, size);

        // ── Atmosphere ──
        ctx.fillStyle = "rgba(50,100,200,0.04)";
        ctx.beginPath(); ctx.arc(cx, cy, r * 1.12, 0, Math.PI * 2); ctx.fill();

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

        // ── Dot-matrix: water ──
        const grid = gridRef.current;
        ctx.fillStyle = "rgba(50,90,170,0.035)";
        ctx.beginPath();
        for (let i = 0; i < grid.length; i++) {
            const pt = grid[i];
            const lonS = Math.sin(pt.lonR) * cosRot + Math.cos(pt.lonR) * sinRot;
            const lonC = Math.cos(pt.lonR) * cosRot - Math.sin(pt.lonR) * sinRot;
            const z = pt.cosLat * lonC;
            if (z < 0.02 || pt.land) continue;
            const x = cx + r * pt.cosLat * lonS;
            const y = cy - r * pt.sinLat;
            ctx.rect(x - 0.35, y - 0.35, 0.7, 0.7);
        }
        ctx.fill();

        // ── Dot-matrix: land (3 brightness bands) ──
        const bands: [number, number, string, number][] = [
            [0.02, 0.3, "rgba(90,165,250,0.22)", 1.2],
            [0.3, 0.6, "rgba(100,175,255,0.42)", 1.5],
            [0.6, 1.1, "rgba(120,190,255,0.62)", 1.8],
        ];

        for (const [zMin, zMax, color, dotSize] of bands) {
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

        // ── Country markers with labels ──
        const pulse = (Math.sin(rot * 3) + 1) * 0.5;

        for (let i = 0; i < MARKER_DATA.length; i++) {
            const m = MARKER_DATA[i];
            const lonS = Math.sin(m.lonR) * cosRot + Math.cos(m.lonR) * sinRot;
            const lonC = Math.cos(m.lonR) * cosRot - Math.sin(m.lonR) * sinRot;
            const z = m.cosLat * lonC;
            if (z < 0.15) continue;

            const px = cx + r * m.cosLat * lonS;
            const py = cy - r * m.sinLat;
            const alpha = 0.3 + 0.7 * z;

            // Glow
            ctx.fillStyle = `rgba(190,225,255,${0.08 * alpha})`;
            ctx.beginPath();
            ctx.arc(px, py, 8 + pulse * 3, 0, Math.PI * 2);
            ctx.fill();

            // Dot
            ctx.fillStyle = `rgba(210,235,255,${0.85 * alpha})`;
            ctx.beginPath();
            ctx.arc(px, py, 2.2 + pulse * 0.3, 0, Math.PI * 2);
            ctx.fill();

            // Bright core
            ctx.fillStyle = `rgba(240,250,255,${0.7 * alpha})`;
            ctx.beginPath();
            ctx.arc(px, py, 0.9, 0, Math.PI * 2);
            ctx.fill();

            // Leader line
            const lineLen = 22;
            const dirX = m.offsetX > 0 ? 1 : -1;
            const dirY = m.offsetY > 0 ? 1 : -1;
            const endX = px + dirX * lineLen;
            const endY = py + dirY * Math.abs(m.offsetY / m.offsetX) * lineLen;

            ctx.strokeStyle = `rgba(160,210,255,${0.35 * alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(endX, endY);
            ctx.stroke();

            // Small dash at line end
            const dashLen = 12;
            ctx.beginPath();
            ctx.moveTo(endX, endY);
            ctx.lineTo(endX + dirX * dashLen, endY);
            ctx.stroke();

            // Label text
            ctx.font = "600 9px 'Exo 2', sans-serif";
            ctx.fillStyle = `rgba(230,245,255,${0.92 * alpha})`;
            ctx.textBaseline = "bottom";
            ctx.textAlign = dirX > 0 ? "left" : "right";
            ctx.fillText(m.label, endX + dirX * (dashLen + 3), endY - 1);
        }



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