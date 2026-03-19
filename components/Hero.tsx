"use client";

import WireframeGlobe from "./WireframeGlobe";
import { IconArrow, IconFile } from "./Icons";

export default function Hero() {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                background: "linear-gradient(155deg, #080C24 0%, #141B4D 45%, #192258 100%)",
                overflow: "hidden",
            }}
        >
            <div className="grid-pattern" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: "35%",
                    width: 1,
                    height: "140%",
                    background: "rgba(107,130,196,0.06)",
                    transform: "rotate(25deg)",
                    transformOrigin: "top center",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: "38%",
                    width: 1,
                    height: "140%",
                    background: "rgba(107,130,196,0.04)",
                    transform: "rotate(25deg)",
                    transformOrigin: "top center",
                    pointerEvents: "none",
                }}
            />

            <div className="hero-grid">
                <div style={{ flex: "1 1 52%", minWidth: 0 }}>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "7px 18px",
                            border: "1px solid rgba(107,130,196,0.2)",
                            borderRadius: 2,
                            marginBottom: 32,
                            animation: "fadeUp 0.6s ease-out",
                        }}
                    >
                        <div style={{ width: 5, height: 5, borderRadius: 1, background: "#6B82C4" }} />
                        <span
                            style={{
                                color: "rgba(255,255,255,0.6)",
                                fontSize: 11,
                                fontWeight: 500,
                                letterSpacing: 2.5,
                                textTransform: "uppercase",
                            }}
                        >
              01 — 03 июля 2026 · Санкт-Петербург
            </span>
                    </div>

                    <h1
                        className="hero-title"
                        style={{
                            fontSize: 52,
                            fontWeight: 300,
                            color: "#fff",
                            lineHeight: 1.12,
                            marginBottom: 4,
                            letterSpacing: -0.5,
                            animation: "fadeUp 0.65s ease-out 0.08s both",
                        }}
                    >
                        Конференция
                    </h1>
                    <h1
                        className="hero-title"
                        style={{
                            fontSize: 52,
                            fontWeight: 800,
                            color: "#fff",
                            lineHeight: 1.12,
                            marginBottom: 28,
                            letterSpacing: 1.5,
                            animation: "fadeUp 0.65s ease-out 0.16s both",
                        }}
                    >
                        GLP-PLANET <span style={{ fontWeight: 300, color: "#6B82C4" }}>VII</span>
                    </h1>
                    <p
                        style={{
                            fontSize: 15,
                            color: "rgba(255,255,255,0.5)",
                            lineHeight: 1.85,
                            maxWidth: 520,
                            marginBottom: 14,
                            fontWeight: 400,
                            animation: "fadeUp 0.65s ease-out 0.24s both",
                        }}
                    >
                        Совместно с Русской ассоциацией специалистов по лабораторным животным Rus-LASA
                    </p>
                    <p
                        style={{
                            fontSize: 14,
                            color: "rgba(255,255,255,0.35)",
                            lineHeight: 1.7,
                            maxWidth: 520,
                            marginBottom: 40,
                            animation: "fadeUp 0.65s ease-out 0.28s both",
                        }}
                    >
                        10 тематических сессий, мастер-классы и круглые столы.
                        Очное и онлайн участие.
                    </p>

                    <div
                        className="hero-buttons"
                        style={{
                            display: "flex",
                            gap: 12,
                            animation: "fadeUp 0.65s ease-out 0.32s both",
                            flexWrap: "wrap",
                        }}
                    >
                        <a
                            href="https://doclinika.timepad.ru/event/3689916"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ textDecoration: "none" }}
                        >
                            <span>Регистрация</span>
                            <IconArrow />
                        </a>
                        <a
                            href="https://glp-planet.com/wp-content/uploads/2026/03/pervoe-informaczionnoe-pismo_sajt.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ textDecoration: "none" }}
                        >
                            <IconFile />
                            <span>Информационное письмо</span>
                        </a>
                    </div>
                </div>

                <div
                    className="hero-globe"
                    style={{
                        flex: "0 0 auto",
                        position: "relative",
                        animation: "fadeIn 1.2s ease-out 0.5s both",
                    }}
                >
                    <WireframeGlobe size={440} />
                    <div
                        style={{
                            position: "absolute",
                            bottom: 50,
                            left: 32,
                            padding: "6px 14px",
                            background: "rgba(8,12,36,0.65)",
                            border: "1px solid rgba(107,130,196,0.15)",
                            borderRadius: 2,
                            fontSize: 10,
                            color: "#8B95B5",
                            letterSpacing: 2,
                            textTransform: "uppercase",
                            backdropFilter: "blur(6px)",
                        }}
                    >
                        Good Laboratory Practice
                    </div>
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: 28,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    opacity: 0.35,
                }}
            >
        <span style={{ color: "#fff", fontSize: 10, letterSpacing: 2, textTransform: "uppercase" }}>
          Scroll
        </span>
                <div style={{ width: 1, height: 32, background: "linear-gradient(#fff, transparent)" }} />
            </div>

            <style>{`
        .hero-grid {
          max-width: 1240px;
          margin: 0 auto;
          padding: 110px 48px 80px;
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        @media (max-width: 900px) {
          .hero-grid {
            flex-direction: column;
          }
          .hero-globe {
            display: none;
          }
          .hero-title {
            font-size: 32px !important;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: stretch !important;
          }
        }
      `}</style>
        </section>
    );
}