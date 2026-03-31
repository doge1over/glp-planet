"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IconArrow } from "@/components/Icons";

function FadeIn({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" | "scale" }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    const transforms: Record<string, string> = { up: "translateY(32px)", left: "translateX(-32px)", right: "translateX(32px)", scale: "scale(0.97)" };
    return (
        <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : transforms[direction], transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms` }}>
            {children}
        </div>
    );
}

function CopyEmail() {
    const [copied, setCopied] = useState(false);
    const email = "sci.secretary@glp-planet.com";
    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (
        <button onClick={handleCopy} style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            width: "100%", padding: "12px 16px", background: "rgba(107,130,196,0.12)",
            border: "1px solid rgba(107,130,196,0.2)", borderRadius: 6,
            cursor: "pointer", transition: "all 0.3s",
        }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: "#fff", fontFamily: "'Exo 2', sans-serif" }}>{email}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {copied ? <><path d="M20 6L9 17l-5-5" /></> : <><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></>}
            </svg>
            {copied && <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>скопировано</span>}
        </button>
    );
}

export default function RegistrationPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                {/* Hero */}
                <section className="reg-hero">
                    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                        <FadeIn>
                            <div style={{ fontSize: 11, color: "#6B82C4", fontWeight: 600, textTransform: "uppercase", letterSpacing: 3, marginBottom: 12 }}>
                                Участие
                            </div>
                        </FadeIn>
                        <FadeIn delay={80}>
                            <h1 className="reg-title">Регистрация</h1>
                        </FadeIn>
                        <FadeIn delay={160}>
                            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 560 }}>
                                Выберите удобный формат участия в VII конференции GLP-PLANET,<br />1–3 июля 2026 г., Санкт-Петербург
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Cards */}
                <section className="reg-content">
                    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                        <div className="reg-cards">
                            {/* Очное */}
                            <FadeIn delay={100}>
                                <div className="reg-card">
                                    <div className="reg-card-badge">Рекомендуем</div>
                                    <div className="reg-card-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 00-3-3.87" />
                                            <path d="M16 3.13a4 4 0 010 7.75" />
                                        </svg>
                                    </div>
                                    <h3 className="reg-card-title">Очное участие</h3>
                                    <p className="reg-card-desc">
                                        Личное присутствие на конференции в отеле «Санкт-Петербург».
                                        Участие во всех сессиях, мастер-классах, круглых столах и нетворкинге.
                                    </p>
                                    <div style={{ marginTop: "auto", paddingTop: 24 }}>
                                        <a
                                            href="https://doclinika.timepad.ru/event/3689916"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                            style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}
                                        >
                                            <span>Зарегистрироваться</span>
                                            <IconArrow />
                                        </a>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Онлайн */}
                            <FadeIn delay={200}>
                                <div className="reg-card">
                                    <div className="reg-card-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="3" width="20" height="14" rx="2" />
                                            <line x1="8" y1="21" x2="16" y2="21" />
                                            <line x1="12" y1="17" x2="12" y2="21" />
                                        </svg>
                                    </div>
                                    <h3 className="reg-card-title">Онлайн участие</h3>
                                    <p className="reg-card-desc">
                                        Подключение к трансляции конференции в режиме реального времени.
                                        Доступ ко всем пленарным сессиям и возможность задавать вопросы.
                                    </p>
                                    <div style={{ marginTop: "auto", paddingTop: 24 }}>
                                        <a
                                            href="https://doclinika.timepad.ru/event/3690058"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                            style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}
                                        >
                                            <span>Зарегистрироваться</span>
                                            <IconArrow />
                                        </a>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Лектор */}
                            <FadeIn delay={300}>
                                <div className="reg-card reg-card-accent">
                                    <div className="reg-card-icon">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path d="M12 14l6.16-3.42A12 12 0 0112 21a12 12 0 01-6.16-10.42L12 14z" />
                                            <line x1="12" y1="14" x2="12" y2="21" />
                                        </svg>
                                    </div>
                                    <h3 className="reg-card-title">Лектор</h3>
                                    <p className="reg-card-desc">
                                        Лектор участвует без организационного взноса. Для регистрации в качестве лектора
                                        направьте тему доклада и его краткое описание на почту организационного комитета.
                                    </p>
                                    <div style={{ marginTop: "auto", paddingTop: 24 }}>
                                        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 14, textAlign: "center" }}>
                                            Для регистрации напишите на почту
                                        </p>
                                        <CopyEmail />
                                    </div>
                                </div>
                            </FadeIn>
                        </div>


                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
        .reg-hero {
          padding: 140px 48px 60px;
          background: linear-gradient(155deg, #080C24 0%, #141B4D 45%, #192258 100%);
        }
        .reg-title { font-size: 42px; font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 16px; }
        .reg-content { padding: 80px 48px 80px; }
        .reg-cards {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px;
          align-items: stretch;
        }
        .reg-cards > div { height: 100%; }
        .reg-card {
          padding: 36px 32px 32px; background: var(--light); border-radius: 6px;
          border: 1px solid rgba(73,100,162,0.06);
          display: flex; flex-direction: column; position: relative;
          transition: all 0.5s cubic-bezier(0.33,1,0.68,1);
          height: 100%;
        }
        .reg-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(20,27,77,0.08);
          border-color: rgba(73,100,162,0.12);
        }
        .reg-card-accent {
          background: var(--primary); border-color: rgba(107,130,196,0.2);
        }
        .reg-card-accent .reg-card-title { color: #fff; }
        .reg-card-accent .reg-card-desc { color: rgba(255,255,255,0.65); }
        .reg-card-accent .reg-card-icon { color: #6B82C4; }
        .reg-card-accent:hover {
          box-shadow: 0 16px 40px rgba(20,27,77,0.25);
        }
        .reg-card-badge {
          position: absolute; top: -1px; right: 24px;
          padding: 5px 14px; background: var(--secondary);
          color: #fff; font-size: 10px; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
          border-radius: 0 0 4px 4px;
        }
        .reg-card-icon {
          width: 52px; height: 52px; border-radius: 6px;
          background: rgba(73,100,162,0.08);
          display: flex; align-items: center; justify-content: center;
          color: var(--secondary); margin-bottom: 24px;
        }
        .reg-card-accent .reg-card-icon {
          background: rgba(107,130,196,0.15);
        }
        .reg-card-title {
          font-size: 20px; font-weight: 700; color: var(--primary);
          margin-bottom: 12px;
        }
        .reg-card-desc {
          font-size: 14px; color: #444; line-height: 1.7;
        }


        @media (max-width: 1024px) {
          .reg-hero { padding: 120px 32px 48px; }
          .reg-title { font-size: 34px; }
          .reg-content { padding: 60px 32px 60px; }
        }
        @media (max-width: 900px) {
          .reg-cards { grid-template-columns: 1fr; max-width: 480px; margin-left: auto; margin-right: auto; }
        }
        @media (max-width: 600px) {
          .reg-hero { padding: 100px 20px 40px; }
          .reg-title { font-size: 28px; }
          .reg-content { padding: 40px 20px 48px; }
          .reg-card { padding: 28px 24px 24px; }
        }
      `}</style>
        </>
    );
}