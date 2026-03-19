"use client";

import Reveal from "./Reveal";

const partners = [
    {
        name: "Журнал «Разработка и регистрация лекарственных средств»",
        img: "/images/partners/rrl.jpg",
        href: "https://www.pharmjournal.ru/jour/announcement/view/618",
    },
    {
        name: "Laboratory Animals Journal",
        img: "/images/partners/laj.png",
        href: null,
    },
    {
        name: "SciCat — платформа научных каталогов",
        img: "/images/partners/scicat.png",
        href: "https://sci-cat.ru/",
    },
];

export default function Partners() {
    return (
        <section style={{ padding: "110px 48px", background: "var(--white)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <Reveal>
                    <div className="section-label">Партнёры</div>
                </Reveal>
                <Reveal delay={60}>
                    <h2 className="section-title" style={{ marginBottom: 44 }}>
                        Сотрудничество
                    </h2>
                </Reveal>

                <div className="partners-grid">
                    {partners.map((p, i) => (
                        <Reveal key={i} delay={120 + i * 80} direction="scale">
                            {p.href ? (
                                <a
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="partner-card"
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={p.img}
                                        alt={p.name}
                                        className="partner-logo"
                                    />
                                    <div className="partner-name">{p.name}</div>
                                </a>
                            ) : (
                                <div className="partner-card">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={p.img}
                                        alt={p.name}
                                        className="partner-logo"
                                    />
                                    <div className="partner-name">{p.name}</div>
                                </div>
                            )}
                        </Reveal>
                    ))}
                </div>
            </div>

            <style>{`
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .partner-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 32px 28px;
          background: var(--light);
          border-radius: 4px;
          border: 1px solid rgba(73,100,162,0.06);
          text-decoration: none;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.33, 1, 0.68, 1);
          min-height: 200px;
        }
        .partner-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 44px rgba(20,27,77,0.08);
          border-color: rgba(73,100,162,0.12);
        }
        .partner-logo {
          max-width: 200px;
          max-height: 80px;
          width: auto;
          height: auto;
          object-fit: contain;
          margin-bottom: 20px;
          transition: opacity 0.4s;
        }
        .partner-card:hover .partner-logo {
          opacity: 0.85;
        }
        .partner-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--primary);
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .partners-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}