"use client";

import Reveal from "./Reveal";
import { IconArrow, IconFile, IconPin, IconCalendar } from "./Icons";

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
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
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

                {/* Кнопки «Онлайн расписание» (слева) и «Программа конференции» */}
                <Reveal delay={320}>
                    <div className="about-btn-row" style={{ marginTop: 40 }}>
                        <a
                            href="/schedule"
                            className="about-btn-outline about-btn-large about-btn-half"
                            style={{ textDecoration: "none" }}
                        >
                            <IconCalendar />
                            <span>Онлайн расписание</span>
                        </a>
                        <a
                            href="/docs/GLP-PLANET-VII-program-preview.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-btn-outline about-btn-large about-btn-half"
                            style={{ textDecoration: "none" }}
                        >
                            <IconFile />
                            <span>Программа конференции</span>
                        </a>
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

        /* Базовая кнопка */
        .about-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--secondary, #6B82C4);
          border-radius: 4px;
          background: transparent;
          color: var(--primary, #1F2A5E);
          font-weight: 600;
          transition: all 0.2s ease;
          text-decoration: none;
          white-space: nowrap;
        }
        .about-btn-outline:hover {
          background: var(--secondary, #6B82C4);
          color: #ffffff;
        }
        .about-btn-outline:hover svg {
          color: #ffffff;
        }
        .about-btn-outline svg {
          flex-shrink: 0;
        }

        /* Увеличенная версия */
        .about-btn-large {
          padding: 16px 32px;
          font-size: 18px;
          gap: 12px;
        }
        .about-btn-large svg {
          width: 22px;
          height: 22px;
        }

        /* Растягивание на всю ширину */
        .about-btn-full {
          width: 100%;
          justify-content: center;
        }

        /* Ряд из двух кнопок */
        .about-btn-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .about-btn-half {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .about-section { padding: 80px 32px; }
        }
        @media (max-width: 700px) {
          .about-info-row { grid-template-columns: 1fr; }
          .about-btn-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .about-section { padding: 60px 20px; }
          .about-text { font-size: 14px; line-height: 1.75; }
          .about-btn-large {
            padding: 14px 28px;
            font-size: 16px;
          }
          .about-btn-large svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
        </section>
    );
}