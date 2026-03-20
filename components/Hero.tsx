"use client";

import WireframeGlobe from "./WireframeGlobe";
import { IconArrow, IconFile } from "./Icons";

export default function Hero() {
    return (
        <section
            style={{
                position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
                background: "linear-gradient(155deg, #080C24 0%, #141B4D 45%, #192258 100%)",
                overflow: "hidden",
            }}
        >
            <div className="grid-pattern" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

            <div className="hero-grid">
                <div style={{ flex: "1 1 52%", minWidth: 0 }}>
                    <div className="hero-date-badge" style={{ animation: "fadeUp 0.6s ease-out" }}>
                        <div style={{ width: 5, height: 5, borderRadius: 1, background: "#6B82C4" }} />
                        <span>01 — 03 июля 2026 · Санкт-Петербург</span>
                    </div>

                    <h1 className="hero-title-light" style={{ animation: "fadeUp 0.65s ease-out 0.08s both" }}>
                        Конференция
                    </h1>
                    <h1 className="hero-title-bold" style={{ animation: "fadeUp 0.65s ease-out 0.16s both" }}>
                        GLP-PLANET <span style={{ fontWeight: 300, color: "#6B82C4" }}>VII</span>
                    </h1>
                    <p className="hero-subtitle" style={{ animation: "fadeUp 0.65s ease-out 0.24s both" }}>
                        Совместно с Русской ассоциацией специалистов по лабораторным животным Rus-LASA
                    </p>
                    <p className="hero-desc" style={{ animation: "fadeUp 0.65s ease-out 0.28s both" }}>
                        10 тематических сессий, мастер-классы и круглые столы. Очное и онлайн участие.
                    </p>

                    <div className="hero-buttons" style={{ animation: "fadeUp 0.65s ease-out 0.32s both" }}>
                        <a href="https://doclinika.timepad.ru/event/3689916" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: "none" }}>
                            <span>Регистрация</span><IconArrow />
                        </a>
                        <a href="https://glp-planet.com/wp-content/uploads/2026/03/pervoe-informaczionnoe-pismo_sajt.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: "none" }}>
                            <IconFile /><span>Информационное письмо</span>
                        </a>
                    </div>
                </div>

                <div className="hero-globe" style={{ flex: "0 0 auto", position: "relative", animation: "fadeIn 1.2s ease-out 0.5s both" }}>
                    <WireframeGlobe size={440} />
                    <div style={{
                        position: "absolute", bottom: 50, left: 32, padding: "6px 14px",
                        background: "rgba(8,12,36,0.65)", border: "1px solid rgba(107,130,196,0.15)",
                        borderRadius: 2, fontSize: 10, color: "#8B95B5", letterSpacing: 2,
                        textTransform: "uppercase", backdropFilter: "blur(6px)",
                    }}>
                        Good Laboratory Practice
                    </div>
                </div>
            </div>

            <div className="hero-scroll-hint">
                <span>Scroll</span>
                <div style={{ width: 1, height: 32, background: "linear-gradient(#fff, transparent)" }} />
            </div>

            <style>{`
        .hero-grid {
          max-width: 1240px; margin: 0 auto; padding: 110px 48px 80px;
          position: relative; z-index: 2; width: 100%;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .hero-date-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 18px; border: 1px solid rgba(107,130,196,0.2);
          border-radius: 2px; margin-bottom: 32px;
        }
        .hero-date-badge span {
          color: rgba(255,255,255,0.6); font-size: 11px; font-weight: 500;
          letter-spacing: 2.5px; text-transform: uppercase;
        }
        .hero-title-light {
          font-size: 52px; font-weight: 300; color: #fff;
          line-height: 1.12; margin-bottom: 4px; letter-spacing: -0.5px;
        }
        .hero-title-bold {
          font-size: 52px; font-weight: 800; color: #fff;
          line-height: 1.12; margin-bottom: 28px; letter-spacing: 1.5px;
        }
        .hero-subtitle {
          font-size: 15px; color: rgba(255,255,255,0.5); line-height: 1.85;
          max-width: 520px; margin-bottom: 14px;
        }
        .hero-desc {
          font-size: 14px; color: rgba(255,255,255,0.35); line-height: 1.7;
          max-width: 520px; margin-bottom: 40px;
        }
        .hero-buttons { display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-scroll-hint {
          position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 6px; opacity: 0.35;
        }
        .hero-scroll-hint span {
          color: #fff; font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .hero-grid { padding: 100px 32px 60px; }
          .hero-title-light, .hero-title-bold { font-size: 42px; }
          .hero-globe { display: none; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .hero-grid { padding: 100px 20px 60px; flex-direction: column; }
          .hero-title-light, .hero-title-bold { font-size: 30px; }
          .hero-date-badge { margin-bottom: 24px; }
          .hero-date-badge span { font-size: 9px; letter-spacing: 1.5px; }
          .hero-subtitle { font-size: 14px; }
          .hero-desc { font-size: 13px; margin-bottom: 28px; }
          .hero-buttons { flex-direction: column; }
          .hero-scroll-hint { display: none; }
        }
      `}</style>
        </section>
    );
}