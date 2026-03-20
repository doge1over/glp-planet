"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function FadeIn({
                    children,
                    delay = 0,
                    direction = "up",
                }: {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "left" | "right" | "scale";
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) setVisible(true);
            },
            { threshold: 0.08 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const transforms: Record<string, string> = {
        up: "translateY(32px)",
        left: "translateX(-32px)",
        right: "translateX(32px)",
        scale: "scale(0.97)",
    };

    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : transforms[direction],
                transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

const contactCards = [
    {
        label: "E-mail",
        value: "sci.secretary@glp-planet.com",
        href: "mailto:sci.secretary@glp-planet.com",
    },
    {
        label: "Телефон",
        value: "+7 (981) 041-01-45",
        subtext: "Ковалева Мария",
        href: "tel:+79810410145",
    },
    {
        label: "Место проведения",
        value: "Отель «Санкт-Петербург»",
        subtext: "Пироговская набережная, д. 5/2, г. Санкт-Петербург",
        href: null,
    },
];

export default function ContactsPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                {/* Hero */}
                <section className="contacts-hero">
                    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                        <FadeIn>
                            <div
                                style={{
                                    fontSize: 11,
                                    color: "#6B82C4",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: 3,
                                    marginBottom: 12,
                                }}
                            >
                                Связь
                            </div>
                        </FadeIn>
                        <FadeIn delay={80}>
                            <h1 className="contacts-title">
                                Контакты
                            </h1>
                        </FadeIn>
                        <FadeIn delay={160}>
                            <p
                                style={{
                                    fontSize: 16,
                                    color: "rgba(255,255,255,0.45)",
                                    lineHeight: 1.8,
                                    maxWidth: 500,
                                }}
                            >
                                Свяжитесь с нами по любым вопросам, связанным с конференцией
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Content */}
                <section className="contacts-content">
                    <div className="contacts-grid" style={{ maxWidth: 1200, margin: "0 auto" }}>
                        {/* Contact cards */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {contactCards.map((item, i) => (
                                <FadeIn key={i} delay={80 + i * 120} direction="left">
                                    <div
                                        className="contact-card"
                                        style={{
                                            padding: "28px 32px",
                                            background: "var(--light)",
                                            borderRadius: 4,
                                            border: "1px solid rgba(73,100,162,0.06)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: 11,
                                                color: "var(--muted)",
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                                letterSpacing: 2,
                                                marginBottom: 8,
                                            }}
                                        >
                                            {item.label}
                                        </div>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="contact-link"
                                                style={{
                                                    fontSize: 17,
                                                    fontWeight: 600,
                                                    color: "var(--primary)",
                                                    textDecoration: "none",
                                                }}
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <div
                                                style={{
                                                    fontSize: 17,
                                                    fontWeight: 600,
                                                    color: "var(--primary)",
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                {item.value}
                                            </div>
                                        )}
                                        {item.subtext && (
                                            <div
                                                style={{
                                                    fontSize: 13,
                                                    color: "var(--muted)",
                                                    marginTop: 4,
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                {item.subtext}
                                            </div>
                                        )}
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        {/* Info block */}
                        <FadeIn delay={200} direction="right">
                            <div
                                style={{
                                    padding: 32,
                                    background: "var(--primary)",
                                    borderRadius: 4,
                                    height: "100%",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "#fff",
                                        marginBottom: 24,
                                    }}
                                >
                                    VII Конференция GLP-PLANET
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                                    {[
                                        { label: "Даты", value: "1–3 июля 2026 г." },
                                        { label: "Город", value: "Санкт-Петербург" },
                                        { label: "Площадка", value: "Отель «Санкт-Петербург»" },
                                        { label: "Совместно с", value: "Rus-LASA" },
                                    ].map((row, i) => (
                                        <div key={i}>
                                            <div
                                                style={{
                                                    fontSize: 11,
                                                    color: "rgba(255,255,255,0.35)",
                                                    letterSpacing: 1.5,
                                                    textTransform: "uppercase",
                                                    marginBottom: 4,
                                                }}
                                            >
                                                {row.label}
                                            </div>
                                            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 15 }}>
                                                {row.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: 28 }}>
                                    <a
                                        href="mailto:sci.secretary@glp-planet.com"
                                        className="contacts-btn"
                                    >
                                        Написать нам
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Payment info */}
                <section className="contacts-payment">
                    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                        <FadeIn delay={100}>
                            <div
                                style={{
                                    padding: "20px 24px",
                                    background: "var(--light)",
                                    borderRadius: 4,
                                    fontSize: 12,
                                    color: "var(--muted)",
                                    lineHeight: 1.7,
                                }}
                            >
                                Платежный агрегатор (банковский платежный агент) оператора — АО «КОКК» (ИНН 7710060991),
                                тел. 8 800 250 3556 на основании Соглашения от 29.12.2007 и Дополнительного соглашения от
                                31.12.2019.
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
        .contacts-hero {
          padding: 140px 48px 60px;
          background: linear-gradient(155deg, #080C24 0%, #141B4D 45%, #192258 100%);
        }
        .contacts-title {
          font-size: 42px; font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 16px;
        }
        .contacts-content { padding: 80px 48px; }
        .contacts-payment { padding: 0 48px 80px; }
        .contacts-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 24px;
          align-items: start;
        }
        .contact-card {
          transition: all 0.5s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .contact-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(20,27,77,0.06);
          border-color: rgba(73,100,162,0.12);
        }
        .contact-link {
          transition: color 0.3s;
        }
        .contact-link:hover {
          color: var(--secondary) !important;
        }
        .contacts-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.15);
          border-radius: 3px;
          color: #fff;
          font-family: 'Exo 2', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .contacts-btn:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .contacts-hero { padding: 120px 32px 48px; }
          .contacts-title { font-size: 34px; }
          .contacts-content { padding: 60px 32px; }
          .contacts-payment { padding: 0 32px 60px; }
        }
        @media (max-width: 900px) {
          .contacts-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .contacts-hero { padding: 100px 20px 40px; }
          .contacts-title { font-size: 28px; }
          .contacts-content { padding: 40px 20px; }
          .contacts-payment { padding: 0 20px 48px; }
        }
      `}</style>
        </>
    );
}