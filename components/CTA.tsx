"use client";

import Reveal from "./Reveal";
import { IconArrow } from "./Icons";

export default function CTA() {
    return (
        <section className="cta-section">
            <div className="grid-pattern" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.5 }} />
            <div className="cta-inner">
                <Reveal>
                    <h2 className="cta-title">Регистрация на GLP-PLANET VII</h2>
                </Reveal>
                <Reveal delay={60}>
                    <p className="cta-text">
                        1–3 июля 2026 года, Санкт-Петербург. Очное и онлайн участие.
                        Лектор участвует без организационного взноса.
                    </p>
                </Reveal>
                <Reveal delay={120}>
                    <div className="cta-buttons">
                        <a href="/registration" className="btn-primary-inverted" style={{ textDecoration: "none" }}>
                            <span>Регистрация</span><IconArrow />
                        </a>
                    </div>
                </Reveal>
            </div>

            <style>{`
        .cta-section {
          padding: 90px 48px;
          background: linear-gradient(140deg, var(--primary), var(--secondary));
          text-align: center; position: relative; overflow: hidden;
        }
        .cta-inner { max-width: 620px; margin: 0 auto; position: relative; z-index: 2; }
        .cta-title { font-size: 30px; font-weight: 700; color: #fff; margin-bottom: 14px; line-height: 1.35; }
        .cta-text { color: rgba(255,255,255,0.6); font-size: 15px; line-height: 1.7; margin-bottom: 36px; }
        .cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        @media (max-width: 1024px) {
          .cta-section { padding: 72px 32px; }
        }
        @media (max-width: 600px) {
          .cta-section { padding: 56px 20px; }
          .cta-title { font-size: 24px; }
          .cta-text { font-size: 14px; margin-bottom: 28px; }
          .cta-buttons { flex-direction: column; }
        }
      `}</style>
        </section>
    );
}