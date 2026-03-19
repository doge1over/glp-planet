"use client";

import Reveal from "./Reveal";
import Counter from "./Counter";

const stats = [
    { end: 7, suffix: "", label: "Конференция" },
    { end: 10, suffix: "", label: "Тематических сессий" },
    { end: 3, suffix: "", label: "Дня программы" },
    { end: 500, suffix: "+", label: "Участников ежегодно" },
];

export default function Stats() {
    return (
        <section
            style={{
                padding: "70px 48px",
                borderTop: "1px solid var(--light)",
                borderBottom: "1px solid var(--light)",
            }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div className="stats-grid">
                    {stats.map((st, i) => (
                        <Reveal key={i} delay={i * 60}>
                            <div style={{ textAlign: "center", padding: 20 }}>
                                <div
                                    style={{
                                        fontSize: 44,
                                        fontWeight: 800,
                                        color: "var(--primary)",
                                        lineHeight: 1,
                                        marginBottom: 6,
                                    }}
                                >
                                    <Counter end={st.end} suffix={st.suffix} />
                                </div>
                                <div
                                    style={{
                                        fontSize: 11,
                                        color: "var(--muted)",
                                        fontWeight: 500,
                                        letterSpacing: 1.5,
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {st.label}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
        </section>
    );
}