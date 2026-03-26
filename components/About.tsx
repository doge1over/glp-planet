"use client";

import Reveal from "./Reveal";
import { IconPin } from "./Icons";

export default function About() {
    return (
        <section id="about" className="about-section">
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                <Reveal>
                    <div className="section-label">Участникам</div>
                </Reveal>
                <Reveal delay={60}>
                    <h2 className="section-title">О конференции</h2>
                </Reveal>
                <Reveal delay={100}>
                    <div className="section-divider" />
                </Reveal>

                <Reveal delay={140}>
                    <p className="about-text">
                        Конференция GLP-PLANET ежегодно объединяет специалистов научно-исследовательских центров,
                        представителей контрактных исследовательских организаций и фармацевтических компаний,
                        разработчиков, экспертов в области биоэтики, представителей регуляторных и надзорных органов,
                        технических специалистов и поставщиков решений, инвесторов, экспертов в области систем
                        менеджмента качества и надлежащей лабораторной практики (GLP).
                    </p>
                </Reveal>
                <Reveal delay={200}>
                    <p className="about-text" style={{ marginBottom: 36 }}>
                        Целями конференции являются распространение знаний и создание единого информационного поля
                        в области надлежащей лабораторной практики, выработка единой стратегии в области разработки
                        и исследований лекарственных препаратов, гуманного обращения с лабораторными животными,
                        подготовка кадров, развитие отрасли, что будет способствовать выводу отечественных препаратов
                        на зарубежный рынок.
                    </p>
                </Reveal>

                <Reveal delay={260}>
                    <div className="about-info-row">
                        <div className="about-info-card">
                            <div className="about-info-card-title">
                                <IconPin />
                                Место проведения
                            </div>
                            <div className="about-info-card-text">
                                Отель «Санкт-Петербург», Пироговская набережная, д. 5/2, г. Санкт-Петербург
                            </div>
                        </div>
                        <div className="about-info-card">
                            <div className="about-info-card-title">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 00-3-3.87" />
                                    <path d="M16 3.13a4 4 0 010 7.75" />
                                </svg>
                                Регистрация участников
                            </div>
                            <div className="about-info-card-text">
                                Очное и онлайн участие — регистрация через систему Timepad. Для оплаты от юридического
                                лица свяжитесь с Организационным комитетом. Лектор участвует без организационного взноса.
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <style>{`
                .about-section { padding: 110px 48px; }
                .about-text { font-size: 15px; line-height: 1.9; color: #333; margin-bottom: 20px; }
                .about-info-row {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 16px;
                }
                .about-info-card {
                    padding: 22px 24px;
                    background: var(--light);
                    border-radius: 4px;
                    border-left: 3px solid var(--secondary);
                    display: flex;
                    flex-direction: column;
                }
                .about-info-card-title {
                    font-weight: 600;
                    margin-bottom: 8px;
                    color: var(--primary);
                    font-size: 13px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .about-info-card-text {
                    color: #444;
                    line-height: 1.6;
                    font-size: 13px;
                    flex: 1;
                }
                @media (max-width: 1024px) {
                    .about-section { padding: 80px 32px; }
                }
                @media (max-width: 700px) {
                    .about-info-row { grid-template-columns: 1fr; }
                }
                @media (max-width: 600px) {
                    .about-section { padding: 60px 20px; }
                    .about-text { font-size: 14px; line-height: 1.75; }
                }
            `}</style>
        </section>
    );
}