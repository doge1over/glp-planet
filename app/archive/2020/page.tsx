import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "GLP-Planet конференция 2020 — GLP-Planet",
    description: "I научная конференция GLP-Planet, 30 июня – 1 июля 2020 г., Санкт-Петербург",
};

const materials = [
    { author: "Пороиков В.В.", title: "Прогнозирование in silico", pdf: "#" },
    { author: "Космин В.М.", title: "Изучение ФК параметров — панель ADME", pdf: "#" },
    { author: "Алешкович О.И.", title: "Валидационный мастер-план и квалификационные испытания", pdf: "#" },
    { author: "Енгалычева Г.Н.", title: "ДКИ безопасности ЛС в РФ", pdf: "#" },
    { author: "Салминьш Д.А.", title: "Циркадные ритмы", pdf: "#" },
    { author: "Акимов Д.Ю.", title: "КБЖ — практическая реализация", pdf: "#" },
    { author: "Кушнир Е.А.", title: "Распознавание боли у грызунов", pdf: "#" },
    { author: "Образцова Е.П.", title: "Добровольная сертификация", pdf: "#" },
    { author: "Новикова И.И.", title: "Барьеры для внедрения GLP в РФ", pdf: "#" },
    { author: "Крышень К.Л.", title: "Подготовка программы исследований", pdf: "#" },
    { author: "Кильдибеков К.Ю.", title: "Оценка потенциальных рисков — инжиниринг", pdf: "#" },
    { author: "Багдасарян Л.", title: "Виварий — уход", pdf: "#" },
    { author: "Багдасарян Л.", title: "Необходимость измерительных систем", pdf: "#" },
    { author: "Зайцева М.А.", title: "Риск-ориентированный подход", pdf: "#" },
    { author: "Ковалева М.А.", title: "Валидация теста «Открытое поле»", pdf: "#" },
    { author: "Шакарян М.К.", title: "Внедрение систем инспектирования GLP", pdf: "#" },
    { author: "Ловат М.Л.", title: "Планирование поведенческого исследования", pdf: "#" },
    { author: "Макарова М.Н.", title: "Мониторинг здоровья животных", pdf: "#" },
    { author: "Фаустова Н.М.", title: "ФК и количественная стандартизация", pdf: "#" },
    { author: "Филиппова О.В.", title: "LD50", pdf: "#" },
    { author: "Алешкович О.И.", title: "Целостность данных в компьютеризированных системах", pdf: "#" },
    { author: "Саяхов Р.", title: "Доклад", pdf: "#" },
    { author: "Еникеева Р.А.", title: "Тенденция к гармонизации рег. досье", pdf: "#" },
    { author: "Ходько С.В.", title: "СМК ДКИ — per aspera ad astra", pdf: "#" },
    { author: "Мурзич Т.В.", title: "Гос. контроль в проведении ДКИ в РФ", pdf: "#" },
    { author: "Торопова Я.Г.", title: "Правила GLP в исследованиях фармакологической эффективности", pdf: "#" },
];

export default function Conference2020Page() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                {/* Hero */}
                <section className="conf-hero">
                    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                        <div className="conf-hero-label">I Конференция · 2020</div>
                        <h1 className="conf-hero-title">GLP-Planet конференция</h1>
                        <div className="conf-hero-meta">
                            <span>30 июня — 3 июля 2020</span>
                            <span className="conf-hero-dot">·</span>
                            <span>г. Санкт-Петербург, Россия</span>
                        </div>
                    </div>
                </section>

                {/* О конференции */}
                <section className="conf-about">
                    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                        <h2 className="conf-section-title">О конференции</h2>
                        <div className="conf-divider" />
                        <div className="conf-text">
                            <p>
                                30 июня – 1 июля в Санкт-Петербурге состоялась <strong>I научная конференция GLP-Planet</strong>,
                                где представители фармацевтических компаний, R&D-центров и испытательных лабораторий высказались
                                о необходимости формирования единого GLP-инспектората ЕАЭС и поддержали идею создания профильного
                                некоммерческого партнерства, которое выступало бы от отрасли инициатором законодательной инициативы.
                            </p>
                            <p>
                                Всего в конференции приняло участие <strong>278 человек</strong> из <strong>12 стран</strong> (Россия,
                                Беларусь, Испания, Германия, США, Польша, Италия, Великобритания, Армения, Словения, Венгрия,
                                Нидерланды), из них: 26% очных (71 человек), 74% онлайн подключений (207 человек).
                            </p>
                            <p>
                                Доля присутствия:<br />
                                — около <strong>76%</strong> — представители фармацевтических компаний и R&D центров,<br />
                                — <strong>22%</strong> — представители испытательных центров.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Материалы конференции */}
                <section id="materials" className="conf-materials">
                    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                        <h2 className="conf-section-title">Материалы конференции</h2>
                        <div className="conf-materials-grid">
                            {materials.map((m, i) => (
                                <div key={i} className="conf-material-card">
                                    <div className="conf-material-placeholder">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                            <polyline points="14,2 14,8 20,8" />
                                            <line x1="16" y1="13" x2="8" y2="13" />
                                            <line x1="16" y1="17" x2="8" y2="17" />
                                            <polyline points="10,9 9,9 8,9" />
                                        </svg>
                                        <span>PDF</span>
                                    </div>
                                    <div className="conf-material-info">
                                        <div className="conf-material-author">{m.author}</div>
                                        <div className="conf-material-title">{m.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
                .conf-hero {
                    padding: 140px 48px 60px;
                    background: linear-gradient(155deg, #080C24 0%, #141B4D 45%, #192258 100%);
                }
                .conf-hero-label {
                    font-size: 11px; color: #6B82C4; font-weight: 600;
                    text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;
                }
                .conf-hero-title {
                    font-size: 42px; font-weight: 700; color: #fff;
                    line-height: 1.2; margin-bottom: 16px;
                }
                .conf-hero-meta {
                    font-size: 15px; color: rgba(255,255,255,0.4);
                    display: flex; align-items: center; gap: 0;
                }
                .conf-hero-dot {
                    margin: 0 10px; color: #6B82C4;
                }

                .conf-about {
                    padding: 80px 48px;
                    background: linear-gradient(155deg, #0D1330 0%, #141B4D 50%, #1A2460 100%);
                }
                .conf-section-title {
                    font-size: 28px; font-weight: 700; color: #fff; margin-bottom: 16px;
                }
                .conf-divider {
                    width: 40px; height: 3px; background: var(--secondary);
                    border-radius: 1px; margin-bottom: 32px;
                }
                .conf-text { color: rgba(255,255,255,0.55); font-size: 15px; line-height: 1.85; }
                .conf-text p { margin-bottom: 16px; }
                .conf-text strong { color: rgba(255,255,255,0.8); }


                .conf-materials {
                    padding: 80px 48px 100px;
                    background: #fff;
                }
                .conf-materials .conf-section-title { color: var(--primary); margin-bottom: 36px; }
                .conf-materials-grid {
                    display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
                }
                .conf-material-card {
                    border: 1px solid rgba(73,100,162,0.08); border-radius: 6px;
                    overflow: hidden; text-decoration: none; display: block;
                    transition: all 0.5s cubic-bezier(0.33,1,0.68,1);
                    cursor: default;
                }
                .conf-material-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 16px 40px rgba(20,27,77,0.08);
                    border-color: rgba(73,100,162,0.15);
                }
                .conf-material-placeholder {
                    aspect-ratio: 1.33; background: var(--light);
                    display: flex; flex-direction: column; align-items: center;
                    justify-content: center; gap: 8px; color: var(--muted);
                    font-size: 11px; font-weight: 600; letter-spacing: 2px;
                }
                .conf-material-info { padding: 16px 18px; }
                .conf-material-author {
                    font-size: 13px; font-weight: 700; color: var(--primary); margin-bottom: 4px;
                }
                .conf-material-title {
                    font-size: 12px; color: #666; line-height: 1.5;
                }

                @media (max-width: 1024px) {
                    .conf-hero { padding: 120px 32px 48px; }
                    .conf-hero-title { font-size: 34px; }
                    .conf-about { padding: 60px 32px; }
                    .conf-program { padding: 48px 32px; }
                    .conf-materials { padding: 60px 32px 80px; }
                }
                @media (max-width: 900px) {
                    .conf-materials-grid { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 600px) {
                    .conf-hero { padding: 100px 20px 40px; }
                    .conf-hero-title { font-size: 28px; }
                    .conf-hero-meta { flex-direction: column; align-items: flex-start; gap: 4px; font-size: 13px; }
                    .conf-hero-dot { display: none; }
                    .conf-about { padding: 48px 20px; }
                    .conf-text { font-size: 14px; }
                    .conf-program { padding: 40px 20px; }
                    .conf-materials { padding: 40px 20px 60px; }
                    .conf-materials-grid { grid-template-columns: 1fr; }
                    .conf-section-title { font-size: 24px; }
                }
            `}</style>
        </>
    );
}