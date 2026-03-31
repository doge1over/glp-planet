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

// ── Country markers (22 countries) ──
const MARKERS: { lat: number; lon: number; label: string; offsetX: number; offsetY: number }[] = [
    // Russia
    { lat: 59.94, lon: 30.31, label: "Санкт-Петербург", offsetX: 14, offsetY: -18 },
    { lat: 55.75, lon: 37.62, label: "Москва", offsetX: 14, offsetY: -10 },
    // CIS & Caucasus
    { lat: 53.9, lon: 27.57, label: "Беларусь", offsetX: -14, offsetY: -12 },
    { lat: 40.18, lon: 44.51, label: "Армения", offsetX: 14, offsetY: -10 },
    { lat: 43.00, lon: 41.02, label: "Абхазия", offsetX: -14, offsetY: -10 },
    { lat: 41.72, lon: 44.79, label: "Грузия", offsetX: 14, offsetY: 14 },
    { lat: 51.17, lon: 71.43, label: "Казахстан", offsetX: 14, offsetY: -14 },
    { lat: 41.31, lon: 69.28, label: "Узбекистан", offsetX: 14, offsetY: 14 },
    // Europe
    { lat: 51.51, lon: -0.13, label: "Великобритания", offsetX: -14, offsetY: -18 },
    { lat: 48.86, lon: 2.35, label: "Франция", offsetX: -14, offsetY: 14 },
    { lat: 52.52, lon: 13.41, label: "Германия", offsetX: 14, offsetY: 16 },
    { lat: 50.85, lon: 4.35, label: "Бельгия", offsetX: -14, offsetY: 16 },
    { lat: 55.68, lon: 12.57, label: "Дания", offsetX: -14, offsetY: -16 },
    { lat: 40.42, lon: -3.70, label: "Испания", offsetX: -14, offsetY: -14 },
    { lat: 41.90, lon: 12.50, label: "Италия", offsetX: -14, offsetY: -10 },
    { lat: 46.95, lon: 7.45, label: "Швейцария", offsetX: -14, offsetY: 16 },
    { lat: 44.82, lon: 20.46, label: "Сербия", offsetX: 14, offsetY: 12 },
    // Asia
    { lat: 39.90, lon: 116.40, label: "Китай", offsetX: 14, offsetY: -12 },
    { lat: 28.61, lon: 77.21, label: "Индия", offsetX: 14, offsetY: -12 },
    // Americas
    { lat: 38.91, lon: -77.04, label: "США", offsetX: -14, offsetY: -14 },
    { lat: 23.11, lon: -82.37, label: "Куба", offsetX: -14, offsetY: 12 },
    // Africa
    { lat: -33.93, lon: 18.42, label: "ЮАР", offsetX: 14, offsetY: 14 },
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

        // ── Country markers with labels (nudge to avoid overlap) ──
        const pulse = (Math.sin(rot * 3) + 1) * 0.5;

        // Compute visible markers sorted by depth (front first = priority)
        const visible: { m: typeof MARKER_DATA[0]; px: number; py: number; z: number; alpha: number }[] = [];
        for (let i = 0; i < MARKER_DATA.length; i++) {
            const m = MARKER_DATA[i];
            const lonS = Math.sin(m.lonR) * cosRot + Math.cos(m.lonR) * sinRot;
            const lonC = Math.cos(m.lonR) * cosRot - Math.sin(m.lonR) * sinRot;
            const z = m.cosLat * lonC;
            if (z < 0.15) continue;
            const px = cx + r * m.cosLat * lonS;
            const py = cy - r * m.sinLat;
            const alpha = 0.3 + 0.7 * z;
            visible.push({ m, px, py, z, alpha });
        }
        visible.sort((a, b) => b.z - a.z);

        // Label bounding boxes for nudging
        const placed: { x1: number; y1: number; x2: number; y2: number }[] = [];
        const LBL_H = 14;
        const PAD = 3;

        ctx.font = "500 8px 'Exo 2', sans-serif";

        for (const { m, px, py, alpha } of visible) {
            // Always draw dot + glow
            ctx.fillStyle = `rgba(190,225,255,${0.08 * alpha})`;
            ctx.beginPath();
            ctx.arc(px, py, 8 + pulse * 3, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = `rgba(210,235,255,${0.85 * alpha})`;
            ctx.beginPath();
            ctx.arc(px, py, 2.2 + pulse * 0.3, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = `rgba(240,250,255,${0.7 * alpha})`;
            ctx.beginPath();
            ctx.arc(px, py, 0.9, 0, Math.PI * 2);
            ctx.fill();

            // Compute base label position
            const lineLen = 22;
            const dirX = m.offsetX > 0 ? 1 : -1;
            const dirY = m.offsetY > 0 ? 1 : -1;
            let endX = px + dirX * lineLen;
            let endY = py + dirY * Math.abs(m.offsetY / m.offsetX) * lineLen;
            const dashLen = 12;
            let textX = endX + dirX * (dashLen + 3);
            const textW = ctx.measureText(m.label).width;

            // Build box for this label
            let lx1 = dirX > 0 ? textX - PAD : textX - textW - PAD;
            let lx2 = dirX > 0 ? textX + textW + PAD : textX + PAD;
            let ly1 = endY - LBL_H;
            let ly2 = endY + PAD;

            // Nudge vertically until no overlap (max 8 attempts)
            let nudgeDir = dirY;
            for (let attempt = 0; attempt < 12; attempt++) {
                let hit = false;
                for (const b of placed) {
                    if (lx1 < b.x2 && lx2 > b.x1 && ly1 < b.y2 && ly2 > b.y1) {
                        hit = true;
                        break;
                    }
                }
                if (!hit) break;
                // If going out of bounds, flip direction
                if (ly1 < 8 && nudgeDir < 0) nudgeDir = 1;
                if (ly2 > size - 8 && nudgeDir > 0) nudgeDir = -1;
                const shift = nudgeDir * (LBL_H + 2);
                endY += shift;
                ly1 += shift;
                ly2 += shift;
            }

            // Clamp to canvas bounds
            if (ly1 < 4) { const fix = 4 - ly1; endY += fix; ly1 += fix; ly2 += fix; }
            if (ly2 > size - 4) { const fix = ly2 - (size - 4); endY -= fix; ly1 -= fix; ly2 -= fix; }

            placed.push({ x1: lx1, y1: ly1, x2: lx2, y2: ly2 });

            // Leader line
            ctx.strokeStyle = `rgba(160,210,255,${0.25 * alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(endX, endY);
            ctx.stroke();

            // Dash
            ctx.beginPath();
            ctx.moveTo(endX, endY);
            ctx.lineTo(endX + dirX * dashLen, endY);
            ctx.stroke();

            // Label — white
            ctx.fillStyle = `rgba(255,255,255,${0.75 * alpha})`;
            ctx.textBaseline = "bottom";
            ctx.textAlign = dirX > 0 ? "left" : "right";
            ctx.fillText(m.label, textX, endY - 1);
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