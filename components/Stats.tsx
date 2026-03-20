"use client";

import Reveal from "./Reveal";
import Counter from "./Counter";

const stats = [
    { n: 7, s: "", l: "Конференций" },
    { n: 10, s: "", l: "Сессий" },
    { n: 3, s: "", l: "Дня программы" },
    { n: 500, s: "+", l: "Участников" },
];

export default function Stats() {
    return (
        <section className="stats-section">
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div className="stats-grid">
                    {stats.map((st, i) => (
                        <Reveal key={i} delay={i * 60}>
                            <div style={{ textAlign: "center", padding: 20 }}>
                                <div className="stats-number">
                                    <Counter end={st.n} suffix={st.s} />
                                </div>
                                <div className="stats-label">{st.l}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <style>{`
        .stats-section {
          padding: 70px 48px;
          border-top: 1px solid var(--light);
          border-bottom: 1px solid var(--light);
        }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .stats-number { font-size: 44px; font-weight: 800; color: var(--primary); line-height: 1; margin-bottom: 6px; }
        .stats-label { font-size: 11px; color: var(--muted); font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; }

        @media (max-width: 1024px) {
          .stats-section { padding: 56px 32px; }
        }
        @media (max-width: 600px) {
          .stats-section { padding: 40px 20px; }
          .stats-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .stats-number { font-size: 32px; }
          .stats-label { font-size: 10px; }
        }
      `}</style>
        </section>
    );
}