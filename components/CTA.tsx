"use client";

import Reveal from "./Reveal";
import { IconArrow } from "./Icons";

export default function CTA() {
    return (
        <section
            style={{
                padding: "90px 48px",
                background: "linear-gradient(140deg, var(--primary), var(--secondary))",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                className="grid-pattern"
                style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.5 }}
            />
            <div style={{ maxWidth: 620, margin: "0 auto", position: "relative", zIndex: 2 }}>
                <Reveal>
                    <h2 style={{ fontSize: 30, fontWeight: 700, color: "#fff", marginBottom: 14, lineHeight: 1.35 }}>
                        Регистрация на GLP-PLANET VII
                    </h2>
                </Reveal>
                <Reveal delay={60}>
                    <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
                        1–3 июля 2026 года, Санкт-Петербург. Очное и онлайн участие через систему Timepad.
                        Лектор участвует без организационного взноса.
                    </p>
                </Reveal>
                <Reveal delay={120}>
                    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                        <a
                            href="https://doclinika.timepad.ru/event/3689916"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary-inverted"
                            style={{ textDecoration: "none" }}
                        >
                            <span>Очное участие</span>
                            <IconArrow />
                        </a>
                        <a
                            href="https://doclinika.timepad.ru/event/3690058"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ textDecoration: "none", borderColor: "rgba(255,255,255,0.25)" }}
                        >
                            <span>Онлайн участие</span>
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}