"use client";

import Reveal from "./Reveal";
import { useState } from "react";

interface Session {
    num: number;
    title: string;
    topics: string[];
    note?: string;
}

const sessions: Session[] = [
    {
        num: 1,
        title: "GLP-инжиниринг. Строительные технологии и инженерные решения для испытательных центров, проводящих доклинические исследования",
        topics: [
            "Вентиляционное оборудование, от подбора до обслуживания",
            "Проектирование и строительство вивария",
            "Эксплуатация технического оборудования",
            "Структурированные кабельные системы. Автоматизация и обслуживание",
            "Управление отходами вивария",
        ],
    },
    {
        num: 2,
        title: "Аналитические исследования в жизненном цикле биопрепаратов",
        topics: [
            "Изучение физико-химических характеристик различных видов оригинальных и воспроизведенных биопрепаратов: ключевые показатели, аналитические методы, сложности и пути решения при разработке, валидации, серийном применении методик",
            "Оценка активности in vitro в отношении рецепторов, мембран, клеток/культуры клеток и тканей: методы (иммуноферментный анализ, биослойная интерферометрия), приемы, поисковые исследования и применение в стандартизации и доказательстве биоаналогичности",
            "Оценка фармакокинетики и биоаналогичности, определение активности in vivo в отношении рецепторов, маркеров в исследованиях на животных и людях, особенности изучения различных групп биопрепаратов (моноклональных антител, генотерапевтических, соматотерапевтических)",
            "Прогноз иммуногенности в исследованиях in vitro и in vivo: методы, особенности валидации методик, практическое применение",
        ],
    },
    {
        num: 3,
        title: "Репродуктивные технологии, криобанкирование половых продуктов и эмбрионов",
        topics: [
            "Методы и способы оценки качества получения и сохранения половых продуктов",
            "Программы искусственного оплодотворения и биобанкинга",
            "Репродуктивные технологии в доклинических исследованиях",
        ],
    },
    {
        num: 4,
        title: "Экспериментальные модели и методы. Положительные контроли и релевантность тест-систем для моделирования",
        topics: [
            "Практические подходы к выбору релевантной тест-системы",
            "Выбор положительного контроля для исследования. Золотые стандарты",
            "Выбор экспериментальной модели в соответствии с целями исследования",
            "P-значимо? А смысл?",
        ],
    },
    {
        num: 5,
        title: "Доклинические исследования медицинских изделий: мост между инженерным замыслом и клинической практикой",
        topics: [
            "Современные требования регуляторных органов",
            "Доклинические исследования эффективности",
            "Доклиническая оценка безопасности",
        ],
    },
    {
        num: 6,
        title: "Микробиология в доклинических исследованиях",
        topics: [
            "Доклинические исследования в лаборатории микробиологии: микроорганизмы как основополагающий фактор качественных и правдоподобных результатов. Способы хранения, восстановления и поддержания жизнеспособности культур микроорганизмов. Учет и систематизация штаммов",
            "Биобанкирование микроорганизмов",
            "Особенности работы в лаборатории микробиологии: внутренний контроль качества",
            "Микробиологические исследования in vivo и in vitro: методы и их практическое применение",
        ],
    },
    {
        num: 7,
        title: "Доклинические исследования биологических лекарственных средств",
        topics: [
            "Применение риск-ориентированного подхода при обосновании программы исследований",
            "Выбор и обоснование конечных точек в эксперименте",
            "Методические аспекты оценки изучения эффективности, безопасности, фармакокинетики и биораспределения лекарственных средств",
            "Доклинические аспекты фармацевтической разработки",
            "Выбор релевантных тест-систем",
        ],
        note: "Сессия делится на тематические блоки: биотехнологические ЛП, высокотехнологичные ЛП, иммунобиологические ЛП для человека и животных",
    },
    {
        num: 8,
        title: "Гистология как неотъемлемая часть доклинических исследований",
        topics: [
            "Воспроизводимость гистологических данных в доклинических исследованиях",
            "Корреляция гистологии с другими типами данных",
            "Кросс-реактивность гистологии с другими типами данных",
            "Вызовы преаналитики и новые технологические решения в гистологии",
            "Анализ и интерпретация данных: особенности в доклинических исследованиях и современные решения",
        ],
    },
    {
        num: 9,
        title: "Культура доклинических исследований: качество лабораторных животных",
        topics: [
            "От SPF к LAQIS: эволюция представлений о «золотом стандарте»",
            "Санитарные мероприятия в питомниках и вивариях",
            "Мониторинг ключевых параметров окружающей среды в вивариях и питомниках испытательных центров. Программа мониторинга здоровья животных",
            "Качество манипуляций — основа надежных данных исследования. Принцип «не навреди» в доклинических исследованиях",
            "Ведение колоний",
            "Генотипирование",
            "Вопросы терапии колоний. Эвтаназировать нельзя лечить: где ставить запятую?",
            "Влияние патогенов на ход исследования",
        ],
    },
    {
        num: 10,
        title: "Ярмарка выпускных квалификационных работ (сессия для студентов старших курсов и магистров)",
        topics: [],
    },
];

export default function Program() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggle = (num: number) => {
        setExpandedId(expandedId === num ? null : num);
    };

    return (
        <section id="program" style={{ padding: "110px 48px", background: "var(--white)" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                <Reveal>
                    <div className="section-label">Программа</div>
                </Reveal>
                <Reveal delay={60}>
                    <h2 className="section-title" style={{ marginBottom: 12 }}>
                        Тематические сессии
                    </h2>
                </Reveal>
                <Reveal delay={90}>
                    <p
                        style={{
                            fontSize: 15,
                            color: "#666",
                            lineHeight: 1.7,
                            marginBottom: 48,
                            maxWidth: 720,
                        }}
                    >
                        Программа предстоящей конференции включает тематические сессии, мастер-классы
                        и круглые столы. По итогам конференции выпускается коллективная монография
                        «Консультант GLP-PLANET. Мнение фармацевтической отрасли».
                    </p>
                </Reveal>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {sessions.map((s, i) => {
                        const isOpen = expandedId === s.num;
                        const hasTopis = s.topics.length > 0;

                        return (
                            <Reveal key={s.num} delay={100 + i * 30}>
                                <div
                                    style={{
                                        background: "var(--light)",
                                        borderRadius: 4,
                                        border: isOpen
                                            ? "1px solid rgba(73,100,162,0.15)"
                                            : "1px solid rgba(73,100,162,0.05)",
                                        overflow: "hidden",
                                        transition: "border-color 0.3s",
                                    }}
                                >
                                    {/* Header — always visible */}
                                    <button
                                        onClick={() => hasTopis && toggle(s.num)}
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            gap: 18,
                                            alignItems: "flex-start",
                                            padding: "24px 28px",
                                            background: "none",
                                            border: "none",
                                            cursor: hasTopis ? "pointer" : "default",
                                            textAlign: "left",
                                            fontFamily: "'Exo 2', sans-serif",
                                            transition: "background 0.2s",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                minWidth: 40,
                                                height: 40,
                                                background: isOpen ? "var(--primary)" : "var(--secondary)",
                                                borderRadius: 3,
                                                color: "#fff",
                                                fontSize: 15,
                                                fontWeight: 700,
                                                flexShrink: 0,
                                                transition: "background 0.3s",
                                            }}
                                        >
                                            {s.num}
                                        </div>
                                        <div style={{ flex: 1, paddingTop: 6 }}>
                                            <h3
                                                style={{
                                                    color: "var(--primary)",
                                                    fontSize: 15,
                                                    fontWeight: 600,
                                                    lineHeight: 1.5,
                                                    margin: 0,
                                                }}
                                            >
                                                {s.title}
                                            </h3>
                                            {s.note && (
                                                <p
                                                    style={{
                                                        fontSize: 13,
                                                        color: "var(--muted)",
                                                        marginTop: 6,
                                                        lineHeight: 1.5,
                                                        fontStyle: "italic",
                                                    }}
                                                >
                                                    {s.note}
                                                </p>
                                            )}
                                        </div>
                                        {hasTopis && (
                                            <div
                                                style={{
                                                    flexShrink: 0,
                                                    marginTop: 8,
                                                    width: 20,
                                                    height: 20,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "var(--secondary)",
                                                    transition: "transform 0.3s",
                                                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                                }}
                                            >
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <polyline points="6,9 12,15 18,9" />
                                                </svg>
                                            </div>
                                        )}
                                    </button>

                                    {/* Topics — expandable */}
                                    {isOpen && hasTopis && (
                                        <div
                                            style={{
                                                padding: "0 28px 24px 86px",
                                                animation: "fadeIn 0.25s ease-out",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    color: "var(--secondary)",
                                                    textTransform: "uppercase",
                                                    letterSpacing: 1.5,
                                                    marginBottom: 14,
                                                }}
                                            >
                                                Темы для обсуждений
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                                {s.topics.map((topic, j) => (
                                                    <div
                                                        key={j}
                                                        style={{
                                                            display: "flex",
                                                            gap: 12,
                                                            alignItems: "flex-start",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: 5,
                                                                height: 5,
                                                                borderRadius: 1,
                                                                background: "var(--secondary)",
                                                                marginTop: 7,
                                                                flexShrink: 0,
                                                            }}
                                                        />
                                                        <span
                                                            style={{
                                                                color: "#555",
                                                                fontSize: 14,
                                                                lineHeight: 1.65,
                                                            }}
                                                        >
                              {topic}
                            </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}