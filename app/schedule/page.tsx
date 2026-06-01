"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type SessionType = "доклад" | "дискуссия" | "перерыв" | "регистрация" | "церемония";

interface ScheduleItem {
    start: string;
    end: string;
    title: string;
    speaker?: string;
    type: SessionType;
}

const HALLS = ["Санкт-Петербург", "Стрельна", "Выборг"] as const;
type Hall = (typeof HALLS)[number];

const DAYS = [
    { id: "2026-07-01", label: "1 июля" },
    { id: "2026-07-02", label: "2 июля" },
    { id: "2026-07-03", label: "3 июля" },
];

// ВНИМАНИЕ: демо-данные. В рабочей версии будут загружаться из базы и редактироваться в админ-панели.
const DEMO: Record<string, Record<Hall, ScheduleItem[]>> = {
    "2026-07-01": {
        "Санкт-Петербург": [
            { start: "09:00", end: "10:00", title: "Регистрация участников", type: "регистрация" },
            { start: "10:00", end: "10:30", title: "Торжественное открытие конференции", type: "церемония" },
            { start: "10:30", end: "12:00", title: "GLP-инжиниринг: инженерные решения для испытательных центров", speaker: "Докладчик уточняется", type: "доклад" },
            { start: "12:00", end: "12:30", title: "Кофе-брейк", type: "перерыв" },
            { start: "12:30", end: "14:00", title: "Круглый стол: автоматизация процессов в вивариях", type: "дискуссия" },
        ],
        "Стрельна": [
            { start: "10:30", end: "12:00", title: "GLP-практики: опыт сертификации и инспектирования", speaker: "Докладчик уточняется", type: "доклад" },
            { start: "12:00", end: "12:30", title: "Кофе-брейк", type: "перерыв" },
            { start: "12:30", end: "14:00", title: "Цифровые технологии в доклинических исследованиях", speaker: "Докладчик уточняется", type: "доклад" },
        ],
        "Выборг": [
            { start: "10:30", end: "12:00", title: "Качество лабораторных животных: взгляд учёного и регулятора", speaker: "Докладчик уточняется", type: "доклад" },
            { start: "12:00", end: "12:30", title: "Кофе-брейк", type: "перерыв" },
            { start: "12:30", end: "14:00", title: "Мониторинг параметров окружающей среды в вивариях", speaker: "Докладчик уточняется", type: "доклад" },
        ],
    },
    "2026-07-02": {
        "Санкт-Петербург": [
            { start: "10:00", end: "11:30", title: "Доклинические исследования биологических лекарственных средств", speaker: "Докладчик уточняется", type: "доклад" },
            { start: "11:30", end: "12:00", title: "Кофе-брейк", type: "перерыв" },
            { start: "12:00", end: "13:30", title: "Экспериментальные модели и релевантность тест-систем", speaker: "Докладчик уточняется", type: "доклад" },
        ],
        "Стрельна": [
            { start: "10:00", end: "11:30", title: "Репродуктивные технологии и криобанкирование", speaker: "Докладчик уточняется", type: "доклад" },
            { start: "11:30", end: "12:00", title: "Кофе-брейк", type: "перерыв" },
            { start: "12:00", end: "13:30", title: "Гистология как часть доклинических исследований", speaker: "Докладчик уточняется", type: "доклад" },
        ],
        "Выборг": [
            { start: "10:00", end: "11:30", title: "Доклинические исследования медицинских изделий", speaker: "Докладчик уточняется", type: "доклад" },
            { start: "11:30", end: "12:00", title: "Кофе-брейк", type: "перерыв" },
            { start: "12:00", end: "13:30", title: "Нейробиология in vivo", speaker: "Докладчик уточняется", type: "доклад" },
        ],
    },
    "2026-07-03": {
        "Санкт-Петербург": [
            { start: "10:00", end: "11:30", title: "Микробиология и клеточная технология", speaker: "Докладчик уточняется", type: "доклад" },
            { start: "11:30", end: "12:00", title: "Кофе-брейк", type: "перерыв" },
            { start: "12:00", end: "13:00", title: "Закрытие конференции", type: "церемония" },
        ],
        "Стрельна": [
            { start: "10:00", end: "11:30", title: "Аналитические исследования в жизненном цикле биопрепаратов", speaker: "Докладчик уточняется", type: "доклад" },
            { start: "11:30", end: "12:00", title: "Кофе-брейк", type: "перерыв" },
        ],
        "Выборг": [
            { start: "10:00", end: "11:30", title: "Ветеринарный опыт в доклинических исследованиях", speaker: "Докладчик уточняется", type: "доклад" },
            { start: "11:30", end: "12:00", title: "Кофе-брейк", type: "перерыв" },
        ],
    },
};

const TYPE_COLORS: Record<SessionType, string> = {
    "доклад": "#559CD6",
    "дискуссия": "#8B6FC4",
    "перерыв": "#6B7280",
    "регистрация": "#3FA796",
    "церемония": "#C48B5A",
};

export default function SchedulePage() {
    const [activeDay, setActiveDay] = useState(DAYS[0].id);
    const daySchedule = DEMO[activeDay];

    return (
        <>
            <Header />
            <main className="sc-main">
                <section className="sc-hero">
                    <div className="sc-container">
                        <div className="sc-label">Онлайн</div>
                        <h1 className="sc-title">Расписание конференции</h1>
                        <p className="sc-subtitle">
                            Программа сессий VII Международной научно-практической конференции GLP-PLANET
                            по трём залам. Расписание уточняется.
                        </p>
                        <div className="sc-demo-badge">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <circle cx="12" cy="16" r="0.6" fill="currentColor" />
                            </svg>
                            <span>Предпросмотр · демо-версия. Данные предварительные и будут обновлены.</span>
                        </div>
                    </div>
                </section>

                <section className="sc-body">
                    <div className="sc-container">
                        <div className="sc-days">
                            {DAYS.map((d) => (
                                <button
                                    key={d.id}
                                    type="button"
                                    className={`sc-day${d.id === activeDay ? " active" : ""}`}
                                    onClick={() => setActiveDay(d.id)}
                                >
                                    {d.label}
                                </button>
                            ))}
                        </div>

                        <div className="sc-grid">
                            {HALLS.map((hall) => (
                                <div key={hall} className="sc-col">
                                    <div className="sc-col-head">
                                        <span className="sc-col-num">Зал</span>
                                        <span className="sc-col-name">{hall}</span>
                                    </div>
                                    <div className="sc-col-body">
                                        {daySchedule[hall].length === 0 && (
                                            <div className="sc-empty">Программа уточняется</div>
                                        )}
                                        {daySchedule[hall].map((item, i) => (
                                            <div key={i} className="sc-item">
                                                <div className="sc-item-time">
                                                    {item.start}<span>–{item.end}</span>
                                                </div>
                                                <div className="sc-item-main">
                                                    <span
                                                        className="sc-item-type"
                                                        style={{ color: TYPE_COLORS[item.type], borderColor: TYPE_COLORS[item.type] }}
                                                    >
                                                        {item.type}
                                                    </span>
                                                    <div className="sc-item-title">{item.title}</div>
                                                    {item.speaker && <div className="sc-item-speaker">{item.speaker}</div>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
        .sc-main { min-height: 100vh; background: #141B4D; }
        .sc-container { max-width: 1240px; margin: 0 auto; }

        .sc-hero {
          padding: 140px 48px 50px;
          background: linear-gradient(155deg, #080C24 0%, #141B4D 100%);
        }
        .sc-label {
          font-size: 11px; color: #6B82C4; font-weight: 600;
          text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;
        }
        .sc-title { font-size: 42px; font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 16px; }
        .sc-subtitle { font-size: 15px; color: rgba(255,255,255,0.6); line-height: 1.7; max-width: 640px; }
        .sc-demo-badge {
          display: inline-flex; align-items: center; gap: 10px;
          margin-top: 24px; padding: 10px 16px;
          background: rgba(196,139,90,0.12);
          border: 1px solid rgba(196,139,90,0.35);
          border-left: 3px solid #C48B5A;
          border-radius: 4px;
          color: rgba(255,255,255,0.85); font-size: 13px; font-weight: 500;
        }
        .sc-demo-badge svg { flex-shrink: 0; color: #C48B5A; }

        .sc-body { padding: 40px 48px 100px; }

        .sc-days { display: flex; gap: 10px; margin-bottom: 28px; flex-wrap: wrap; }
        .sc-day {
          padding: 10px 24px; border-radius: 4px; cursor: pointer;
          font-family: inherit; font-size: 15px; font-weight: 600;
          color: rgba(255,255,255,0.7);
          background: rgba(107,130,196,0.1);
          border: 1px solid rgba(107,130,196,0.2);
          transition: all 0.2s ease;
        }
        .sc-day:hover { color: #fff; background: rgba(107,130,196,0.2); }
        .sc-day.active { color: #fff; background: #559CD6; border-color: #559CD6; }

        .sc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .sc-col {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(107,130,196,0.15);
          border-radius: 8px; overflow: hidden;
        }
        .sc-col-head {
          padding: 16px 20px;
          background: rgba(85,156,214,0.12);
          border-bottom: 1px solid rgba(107,130,196,0.2);
          display: flex; flex-direction: column; gap: 2px;
        }
        .sc-col-num { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #6B82C4; font-weight: 600; }
        .sc-col-name { font-size: 18px; font-weight: 700; color: #fff; }
        .sc-col-body { padding: 12px; display: flex; flex-direction: column; gap: 10px; }

        .sc-empty {
          padding: 28px 16px; text-align: center;
          color: rgba(255,255,255,0.4); font-size: 13px; font-style: italic;
        }

        .sc-item {
          display: flex; gap: 14px;
          padding: 14px; border-radius: 6px;
          background: rgba(8,12,36,0.4);
          border: 1px solid rgba(107,130,196,0.1);
        }
        .sc-item-time {
          flex-shrink: 0; width: 52px;
          font-size: 14px; font-weight: 700; color: #fff;
          font-variant-numeric: tabular-nums; line-height: 1.3;
        }
        .sc-item-time span { display: block; font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.45); }
        .sc-item-main { flex: 1; min-width: 0; }
        .sc-item-type {
          display: inline-block; margin-bottom: 6px;
          font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;
          padding: 2px 8px; border: 1px solid; border-radius: 3px;
        }
        .sc-item-title { font-size: 14px; color: rgba(255,255,255,0.92); line-height: 1.5; font-weight: 500; }
        .sc-item-speaker { margin-top: 6px; font-size: 12px; color: rgba(255,255,255,0.5); font-style: italic; }

        @media (max-width: 1024px) {
          .sc-hero { padding: 120px 32px 44px; }
          .sc-title { font-size: 34px; }
          .sc-body { padding: 32px 32px 70px; }
          .sc-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .sc-hero { padding: 100px 20px 36px; }
          .sc-title { font-size: 26px; }
          .sc-subtitle { font-size: 14px; }
          .sc-body { padding: 24px 16px 56px; }
          .sc-day { padding: 8px 16px; font-size: 14px; }
        }
      `}</style>
        </>
    );
}
