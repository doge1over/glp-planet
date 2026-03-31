"use client";

import { useState, useEffect } from "react";
import WireframeGlobe from "./WireframeGlobe";
import { IconArrow, IconFile } from "./Icons";

const CONF_DATE = new Date("2026-07-01T09:00:00+03:00").getTime();

function useCountdown() {
    const [mounted, setMounted] = useState(false);
    const [now, setNow] = useState(CONF_DATE);
    useEffect(() => {
        setMounted(true);
        setNow(Date.now());
        const id = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, []);
    const diff = mounted ? Math.max(0, CONF_DATE - now) : 0;
    return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
    };
}

export default function Hero() {
    const cd = useCountdown();
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
                        GLP-PLANET <span style={{ fontWeight: 300, color: "#fff" }}>VII</span>
                    </h1>
                    <p className="hero-subtitle" style={{ animation: "fadeUp 0.65s ease-out 0.24s both" }}>
                        Совместно с Русской ассоциацией специалистов по лабораторным животным Rus-LASA
                    </p>
                    <p className="hero-desc" style={{ animation: "fadeUp 0.65s ease-out 0.28s both" }}>
                        10 тематических сессий, мастер-классы и круглые столы. Очное и онлайн участие.
                    </p>

                    <div className="hero-buttons" style={{ animation: "fadeUp 0.65s ease-out 0.32s both" }}>
                        <a href="/registration" className="btn-primary" style={{ textDecoration: "none" }}>
                            <span>Регистрация</span><IconArrow />
                        </a>
                        <a href="https://glp-planet.com/wp-content/uploads/2026/03/pervoe-informaczionnoe-pismo_sajt.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: "none" }}>
                            <IconFile /><span>Информационное письмо</span>
                        </a>
                    </div>

                </div>

                <div className="hero-globe" style={{ flex: "0 0 auto", position: "relative", animation: "fadeIn 1.2s ease-out 0.5s both" }}>
                    <WireframeGlobe size={440} />

                </div>
            </div>

            {/* Countdown — centered at bottom */}
            <div className="hero-countdown" style={{ animation: "fadeUp 0.8s ease-out 0.5s both" }}>
                {[
                    { value: cd.days, label: "дней" },
                    { value: cd.hours, label: "часов" },
                    { value: cd.minutes, label: "минут" },
                    { value: cd.seconds, label: "секунд" },
                ].map((item, i) => (
                    <div key={i} className="hero-countdown-item">
                        <div className="hero-countdown-value">
                            {String(item.value).padStart(2, "0")}
                        </div>
                        <div className="hero-countdown-label">{item.label}</div>
                    </div>
                ))}
            </div>

            <style>{`
        .hero-grid {
          max-width: 1240px; margin: 0 auto; padding: 120px 48px 140px;
          position: relative; z-index: 2; width: 100%;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .hero-date-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 18px; border: 1px solid rgba(107,130,196,0.2);
          border-radius: 2px; margin-bottom: 32px;
        }
        .hero-date-badge span {
          color: rgba(255,255,255,0.75); font-size: 11px; font-weight: 500;
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
          font-size: 15px; color: rgba(255,255,255,0.85); line-height: 1.85;
          max-width: 520px; margin-bottom: 14px;
        }
        .hero-desc {
          font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.7;
          max-width: 520px; margin-bottom: 40px;
        }
        .hero-buttons { display: flex; gap: 12px; flex-wrap: wrap; }

        /* Countdown — always centered */
        .hero-countdown {
          position: absolute; bottom: 44px; left: 0; right: 0;
          display: flex; justify-content: center; align-items: center;
          gap: 36px; z-index: 3; padding: 0 20px;
          box-sizing: border-box;
        }
        .hero-countdown-item { text-align: center; min-width: 0; }
        .hero-countdown-value {
          font-size: 44px; font-weight: 800; color: rgba(255,255,255,0.9);
          line-height: 1; font-variant-numeric: tabular-nums;
          letter-spacing: 2px;
        }
        .hero-countdown-label {
          font-size: 10px; color: rgba(255,255,255,0.45);
          text-transform: uppercase; letter-spacing: 2.5px;
          margin-top: 8px;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .hero-grid { padding: 110px 32px 130px; }
          .hero-title-light, .hero-title-bold { font-size: 42px; }
          .hero-globe { display: none; }
          .hero-countdown { bottom: 36px; gap: 28px; }
          .hero-countdown-value { font-size: 36px; letter-spacing: 1.5px; }
          .hero-countdown-label { font-size: 9px; letter-spacing: 2px; }
        }

        /* Small tablet / large phone */
        @media (max-width: 768px) {
          .hero-grid { padding: 100px 24px 120px; }
          .hero-title-light, .hero-title-bold { font-size: 36px; }
          .hero-subtitle { font-size: 14px; }
          .hero-desc { font-size: 13px; margin-bottom: 32px; }
          .hero-countdown { bottom: 28px; gap: 24px; }
          .hero-countdown-value { font-size: 30px; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .hero-grid { padding: 96px 20px 110px; flex-direction: column; }
          .hero-title-light, .hero-title-bold { font-size: 30px; }
          .hero-date-badge { margin-bottom: 24px; }
          .hero-date-badge span { font-size: 9px; letter-spacing: 1.5px; }
          .hero-subtitle { font-size: 13px; max-width: 100%; }
          .hero-desc { font-size: 12px; margin-bottom: 28px; max-width: 100%; }
          .hero-buttons { flex-direction: column; }
          .hero-countdown { bottom: 20px; gap: 16px; padding: 0 16px; }
          .hero-countdown-value { font-size: 26px; letter-spacing: 1px; }
          .hero-countdown-label { font-size: 8px; letter-spacing: 1.5px; margin-top: 6px; }
        }

        /* Very small screens */
        @media (max-width: 380px) {
          .hero-grid { padding: 90px 16px 100px; }
          .hero-title-light, .hero-title-bold { font-size: 26px; }
          .hero-countdown { gap: 12px; bottom: 16px; padding: 0 12px; }
          .hero-countdown-value { font-size: 22px; }
          .hero-countdown-label { font-size: 7px; letter-spacing: 1px; }
        }
      `}</style>
        </section>
    );
}