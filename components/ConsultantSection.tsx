"use client";

import Reveal from "./Reveal";
import { IconArrow } from "./Icons";

export default function ConsultantSection() {
  return (
    <section
      id="consultant"
      style={{
        padding: "90px 48px",
        background: "linear-gradient(155deg, var(--primary), #1a2460)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 3, marginBottom: 10 }}>
            Сервис
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 16 }}>
            Консультант GLP-PLANET
          </h2>
        </Reveal>
        <Reveal delay={110}>
          <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 15, lineHeight: 1.8, maxWidth: 540, margin: "0 auto 32px" }}>
            Экспертная поддержка по вопросам надлежащей лабораторной практики, подготовки к инспекциям
            и внедрения систем качества
          </p>
        </Reveal>
        <Reveal delay={160}>
          <button className="btn-primary" style={{ margin: "0 auto" }}>
            <span>Подробнее</span>
            <IconArrow />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
