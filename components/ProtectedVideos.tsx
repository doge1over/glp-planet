"use client";

import { useState, useEffect } from "react";

interface ProtectedVideo {
    id: string;
    title: string;
    description?: string;
    password: string;
    videoSrc: string;
    fileType?: "video" | "presentation";
    thumbnail?: string;
}

// ────── Редактируйте список и пароли здесь ──────
const VIDEOS: ProtectedVideo[] = [
    {
        id: "video-1",
        title: "Давлианидзе Татьяна Алексеевна",
        description: "Массовое разведение насекомых в лаборатории: от яйца до тест-объекта в исследовании эффективности инсектицидов · младший научный сотрудник Института дезинфектологии ФБУН «ФНЦГ им. Ф.Ф. Эрисмана» Роспотребнадзора",
        password: "glpplanet2026",
        videoSrc: "/videos/SVID_20260605_054509_1.mp4",
    },
    {
        id: "video-2",
        title: "Dasha Fuentes, CENPALAB — Vaxira",
        description: "Conferencia Evento Rusia 2026 preclínica Vaxira · видеодоклад",
        password: "glpplanet2026",
        videoSrc: "/videos/Conferencia Evento Rusia 2026 preclínica Vaxira p.mp4",
    },
];
// ─────────────────────────────────────────────────

const STORAGE_KEY = "glp_unlocked_videos_v1";

export default function ProtectedVideos() {
    const [unlocked, setUnlocked] = useState<Record<string, boolean>>({});
    const [inputs, setInputs] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [activeInput, setActiveInput] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) setUnlocked(JSON.parse(saved));
        } catch { /* ignore */ }
    }, []);

    const handleSubmit = (video: ProtectedVideo) => {
        const input = (inputs[video.id] || "").trim();
        if (input === video.password) {
            const next = { ...unlocked, [video.id]: true };
            setUnlocked(next);
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            } catch { /* ignore */ }
            setActiveInput(null);
            setInputs({ ...inputs, [video.id]: "" });
        } else {
            setErrors({ ...errors, [video.id]: true });
            setTimeout(() => setErrors((e) => ({ ...e, [video.id]: false })), 1200);
        }
    };

    return (
        <section className="pv-section">
            <div className="pv-container">
                <div className="pv-header">
                    <div className="pv-label">Записи</div>
                    <h2 className="pv-title">Видео доклады</h2>
                    <p className="pv-subtitle">
                        Для доступа к каждой записи введите пароль участника
                    </p>
                </div>

                <div className="pv-grid">
                    {VIDEOS.map((v) => {
                        const isUnlocked = mounted && !!unlocked[v.id];
                        const isActive = activeInput === v.id;
                        const hasError = !!errors[v.id];

                        return (
                            <div key={v.id} className="pv-card">
                                <div className="pv-frame">
                                    {isUnlocked && v.fileType === "presentation" ? (
                                        <div className="pv-file">
                                            <div className="pv-file-icon">PPTX</div>
                                            <div className="pv-file-actions">
                                                <a className="pv-file-btn" href={v.videoSrc} target="_blank" rel="noreferrer">
                                                    Открыть презентацию
                                                </a>
                                                <a className="pv-file-link" href={v.videoSrc} download>
                                                    Скачать файл
                                                </a>
                                            </div>
                                        </div>
                                    ) : isUnlocked ? (
                                        <video
                                            src={v.videoSrc}
                                            controls
                                            controlsList="nodownload"
                                            playsInline
                                            className="pv-video"
                                            poster={v.thumbnail}
                                        />
                                    ) : (
                                        <div className="pv-locked">
                                            <div
                                                className="pv-locked-bg"
                                                style={v.thumbnail ? { backgroundImage: `url(${v.thumbnail})` } : {}}
                                            />
                                            <div className="pv-locked-overlay" />

                                            {!isActive ? (
                                                <button
                                                    type="button"
                                                    className="pv-unlock-btn"
                                                    onClick={() => setActiveInput(v.id)}
                                                >
                                                    <div className="pv-lock-icon">
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                                            <rect x="3" y="11" width="18" height="11" rx="2" />
                                                            <path d="M7 11V7a5 5 0 0110 0v4" />
                                                        </svg>
                                                    </div>
                                                    <span className="pv-unlock-text">Введите пароль</span>
                                                </button>
                                            ) : (
                                                <div className="pv-form" onClick={(e) => e.stopPropagation()}>
                                                    <input
                                                        type="password"
                                                        placeholder="Пароль"
                                                        value={inputs[v.id] || ""}
                                                        onChange={(e) => setInputs({ ...inputs, [v.id]: e.target.value })}
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter") handleSubmit(v);
                                                            if (e.key === "Escape") setActiveInput(null);
                                                        }}
                                                        autoFocus
                                                        className={`pv-input ${hasError ? "pv-input-error" : ""}`}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="pv-submit-btn"
                                                        onClick={() => handleSubmit(v)}
                                                    >
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                            <line x1="5" y1="12" x2="19" y2="12" />
                                                            <polyline points="12,5 19,12 12,19" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="pv-info">
                                    <h3 className="pv-card-title">{v.title}</h3>
                                    {v.description && <p className="pv-card-desc">{v.description}</p>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                .pv-section {
                    padding: 60px 48px 100px;
                    background: #141B4D;
                }
                .pv-container { max-width: 1240px; margin: 0 auto; }

                .pv-header { margin-bottom: 40px; }
                .pv-label {
                    font-size: 11px; color: #6B82C4; font-weight: 600;
                    text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;
                }
                .pv-title {
                    font-size: 32px; font-weight: 700; color: #fff;
                    line-height: 1.2; margin: 0 0 12px;
                }
                .pv-subtitle {
                    font-size: 14px; color: rgba(255,255,255,0.5);
                    line-height: 1.6; max-width: 500px; margin: 0;
                }

                .pv-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                .pv-card {
                    background: rgba(8,12,36,0.4);
                    border: 1px solid rgba(107,130,196,0.15);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: border-color 0.3s, transform 0.3s;
                }
                .pv-card:hover {
                    border-color: rgba(107,130,196,0.3);
                    transform: translateY(-3px);
                }

                .pv-frame {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    overflow: hidden;
                    background: #000;
                }
                .pv-video {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    background: #000;
                    display: block;
                }
                .pv-file {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 18px;
                    padding: 22px;
                    background:
                        radial-gradient(circle at 50% 30%, rgba(107,130,196,0.28), transparent 48%),
                        linear-gradient(135deg, #101740 0%, #1b2460 100%);
                }
                .pv-file-icon {
                    width: 78px;
                    height: 78px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.18);
                    color: #fff;
                    font-size: 15px;
                    font-weight: 700;
                    letter-spacing: 1px;
                }
                .pv-file-actions {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .pv-file-btn,
                .pv-file-link {
                    min-height: 40px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 5px;
                    font-family: 'Exo 2', sans-serif;
                    font-size: 13px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: background 0.25s, border-color 0.25s;
                }
                .pv-file-btn {
                    padding: 0 18px;
                    background: var(--secondary, #4964A2);
                    color: #fff;
                }
                .pv-file-btn:hover { background: #6B82C4; }
                .pv-file-link {
                    padding: 0 14px;
                    border: 1px solid rgba(255,255,255,0.18);
                    color: rgba(255,255,255,0.76);
                    background: rgba(255,255,255,0.04);
                }
                .pv-file-link:hover {
                    border-color: rgba(255,255,255,0.34);
                    background: rgba(255,255,255,0.08);
                }

                .pv-locked {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .pv-locked-bg {
                    position: absolute;
                    inset: -10px;
                    background: linear-gradient(135deg, #1a2460 0%, #2a3680 50%, #141B4D 100%);
                    background-size: cover;
                    background-position: center;
                    filter: blur(14px);
                    transform: scale(1.1);
                }
                .pv-locked-overlay {
                    position: absolute;
                    inset: 0;
                    background:
                        radial-gradient(circle at center, transparent 0%, rgba(8,12,36,0.6) 100%),
                        repeating-linear-gradient(45deg, transparent 0 8px, rgba(255,255,255,0.02) 8px 9px);
                }

                .pv-unlock-btn {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    padding: 16px 28px;
                    background: rgba(8,12,36,0.65);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(107,130,196,0.35);
                    border-radius: 8px;
                    color: #fff;
                    cursor: pointer;
                    font-family: 'Exo 2', sans-serif;
                    transition: all 0.3s;
                }
                .pv-unlock-btn:hover {
                    border-color: #6B82C4;
                    background: rgba(20,27,77,0.85);
                    transform: translateY(-2px);
                }
                .pv-lock-icon {
                    width: 44px; height: 44px;
                    border-radius: 50%;
                    background: rgba(107,130,196,0.18);
                    color: #6B82C4;
                    display: flex; align-items: center; justify-content: center;
                }
                .pv-unlock-text {
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.85);
                }

                .pv-form {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    gap: 6px;
                    align-items: center;
                    padding: 8px;
                    background: rgba(8,12,36,0.85);
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    border: 1px solid rgba(107,130,196,0.4);
                    border-radius: 8px;
                    width: min(86%, 320px);
                }
                .pv-input {
                    flex: 1;
                    min-width: 0;
                    padding: 10px 14px;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(107,130,196,0.25);
                    border-radius: 5px;
                    color: #fff;
                    font-family: 'Exo 2', sans-serif;
                    font-size: 14px;
                    outline: none;
                    transition: all 0.25s;
                }
                .pv-input:focus {
                    border-color: #6B82C4;
                    background: rgba(255,255,255,0.08);
                }
                .pv-input::placeholder {
                    color: rgba(255,255,255,0.35);
                }
                .pv-input-error {
                    border-color: #e15a5a !important;
                    animation: pvShake 0.4s;
                }
                @keyframes pvShake {
                    0%, 100% { transform: translateX(0); }
                    20%, 60% { transform: translateX(-4px); }
                    40%, 80% { transform: translateX(4px); }
                }
                .pv-submit-btn {
                    flex-shrink: 0;
                    width: 38px; height: 38px;
                    display: flex; align-items: center; justify-content: center;
                    background: var(--secondary, #4964A2);
                    border: none;
                    border-radius: 5px;
                    color: #fff;
                    cursor: pointer;
                    transition: background 0.25s;
                }
                .pv-submit-btn:hover { background: #6B82C4; }

                .pv-info {
                    padding: 18px 20px 22px;
                }
                .pv-card-title {
                    font-size: 16px;
                    font-weight: 700;
                    color: #fff;
                    margin: 0 0 6px;
                    line-height: 1.35;
                }
                .pv-card-desc {
                    font-size: 13px;
                    color: rgba(255,255,255,0.5);
                    line-height: 1.55;
                    margin: 0;
                }

                @media (max-width: 1024px) {
                    .pv-section { padding: 50px 32px 80px; }
                    .pv-title { font-size: 28px; }
                    .pv-grid { gap: 20px; }
                }
                @media (max-width: 768px) {
                    .pv-grid { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 600px) {
                    .pv-section { padding: 36px 16px 56px; }
                    .pv-header { margin-bottom: 28px; }
                    .pv-title { font-size: 22px; }
                    .pv-subtitle { font-size: 13px; }
                    .pv-grid { grid-template-columns: 1fr; gap: 16px; }
                    .pv-info { padding: 14px 16px 18px; }
                    .pv-card-title { font-size: 15px; }
                    .pv-card-desc { font-size: 12px; }
                    .pv-unlock-btn { padding: 14px 22px; }
                    .pv-lock-icon { width: 38px; height: 38px; }
                    .pv-unlock-text { font-size: 11px; }
                }
            `}</style>
        </section>
    );
}
