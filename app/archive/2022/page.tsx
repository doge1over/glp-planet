import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "GLP-Planet конференция 2022 — GLP-Planet",
    description: "III Международная научная конференция GLP-Planet, 30 июня – 1 июля 2022 г., Санкт-Петербург",
};

const materials = [
    { author: "Соттаева М.М.", title: "Доклад" },
    { author: "Шохин И., Колганова", title: "Доклад" },
    { author: "Завьялов Е.Л.", title: "Доклад" },
    { author: "Мурашев А.Н.", title: "Доклад" },
    { author: "Макарова М.Н.", title: "Доклад" },
    { author: "Енгалычева Г.Н.", title: "Доклад" },
    { author: "Попов В.С.", title: "Доклад" },
    { author: "Тулегенова А.У.", title: "Доклад" },
    { author: "Шнаукшта В.С.", title: "Доклад" },
    { author: "Ситко Т.И.", title: "Доклад" },
    { author: "Рождественский Д.А.", title: "Доклад" },
    { author: "Гордейчук И.", title: "Доклад" },
    { author: "Макаров В.Г.", title: "Доклад" },
    { author: "Устюгов А.А.", title: "Доклад" },
    { author: "Абрамович Р.А.", title: "Доклад" },
    { author: "Флисюк Е.В.", title: "Доклад" },
    { author: "Матвеев А.В.", title: "Доклад" },
    { author: "Гришина Ю.И.", title: "Доклад" },
    { author: "Чудинова Е.С.", title: "Доклад" },
    { author: "Дейкин А.", title: "Доклад" },
    { author: "Крышень К.Л.", title: "Доклад" },
    { author: "Исакова-Сивак И.Н.", title: "Доклад" },
    { author: "Гремякова П.В.", title: "Доклад" },
    { author: "Косман В.М.", title: "Доклад" },
    { author: "Карлина М.В.", title: "Доклад" },
    { author: "Тернинко И.И.", title: "Доклад" },
    { author: "Устенко Ж.Ю.", title: "Доклад" },
    { author: "Родионова Н.В.", title: "Доклад" },
    { author: "Гуляева Е.П.", title: "Доклад" },
    { author: "Кузнецова А.И.", title: "Доклад" },
    { author: "Кириченко", title: "Доклад" },
    { author: "Саканян К.М.", title: "Доклад" },
    { author: "Фальковский И.В.", title: "Доклад" },
    { author: "Ловат М.Л.", title: "Доклад" },
    { author: "Акимов Д.Ю.", title: "Доклад" },
    { author: "Акимова М.А.", title: "Доклад" },
    { author: "Волков А.В.", title: "Доклад" },
    { author: "Салминьш Д.", title: "Доклад" },
    { author: "Литвинова Е.А.", title: "Доклад" },
    { author: "Карал-оглы Д.Д.", title: "Доклад" },
    { author: "Добрянская С.С.", title: "Доклад" },
    { author: "Аверина О.А.", title: "Доклад" },
    { author: "Кушнир Е.А.", title: "Доклад" },
    { author: "Усатов А.В.", title: "Доклад" },
    { author: "Фаустова Н.М.", title: "Доклад" },
    { author: "Мирошников М.В.", title: "Доклад" },
    { author: "Васютина М.Л.", title: "Доклад" },
    { author: "Гущин Я.А.", title: "Доклад" },
    { author: "Торопова Я.Г.", title: "Доклад" },
    { author: "Ивкин Д.Ю.", title: "Доклад" },
    { author: "Хан С.О.", title: "Доклад" },
    { author: "Караваева А.В.", title: "Доклад" },
    { author: "Билялетдинова М.М.", title: "Доклад" },
    { author: "Березкин В.А.", title: "Доклад" },
    { author: "Ковалева М.А.", title: "ARRIVE" },
    { author: "Ильинский Н.С.", title: "Доклад" },
    { author: "Ходько С.В.", title: "Доклад" },
    { author: "Матуа А.З.", title: "Доклад" },
    { author: "Корель А.В.", title: "Доклад" },
    { author: "Галагудза М.М.", title: "Доклад" },
    { author: "Самохин А.Г.", title: "Доклад" },
    { author: "Сергеева М.В.", title: "Доклад" },
    { author: "Рудько О.И.", title: "Доклад" },
    { author: "Буренков П.В.", title: "Доклад" },
    { author: "Покровский М.В.", title: "Доклад" },
    { author: "Тюренков И.В.", title: "Доклад" },
    { author: "Суханов И.М.", title: "Доклад" },
    { author: "Чалов С.Е.", title: "Доклад" },
    { author: "Бондарева Е.Д.", title: "Доклад" },
    { author: "Кривцов А.", title: "Доклад" },
    { author: "Ниязов Р.Р.", title: "Доклад" },
    { author: "Чалов С.Е.", title: "Доклад (2)" },
    { author: "Саяхов Р.", title: "Доклад" },
    { author: "Шипаева Е.В.", title: "Доклад" },
];

export default function Conference2022Page() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                {/* Hero */}
                <section className="conf-hero">
                    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                        <div className="conf-hero-label">III Конференция · 2022</div>
                        <h1 className="conf-hero-title">GLP-Planet конференция 3.0</h1>
                        <div className="conf-hero-meta">
                            <span>30 июня – 1 июля 2022</span>
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
                                30.06 — 01.07. 2022 г. в Санкт-Петербурге прошла <strong>III Международная научная
                                конференция GLP-PLANET</strong>. В работе конференции приняли участие
                                научно-исследовательские институты и испытательные центры, фармацевтические компании,
                                независимые эксперты и представители регуляторных органов из <strong>30 городов
                                России</strong>, а также Абхазии, Армении, Беларуси, Казахстана и США.
                                Конференция собрала более <strong>380 человек</strong>.
                            </p>
                            <p>
                                Участники подробно обсудили достижения и ближайшие цели GxP для устойчивого развития
                                фармацевтической отрасли в ЕАЭС. Особый интерес у слушателей вызвали темы методики
                                поиска альтернативных методов исследования, возможности использования метаанализа для
                                планирования доклинических исследований, применения принципов ARRIVE для проведения
                                исследований и повышения качества заключительных отчётов, опыт исследований COVID-19,
                                а также вопросы зоотехнии и ветеринарного обеспечения.
                            </p>
                            <p>
                                В этом году в рамках конференции прошли сразу четыре мастер-класса:
                            </p>
                            <ul className="conf-list">
                                <li>Альтернативные методы исследования</li>
                                <li>Оценка степени тяжести экспериментальных процедур в исследованиях на животных</li>
                                <li>Основы работы с оборудованием в зоне содержания лабораторных животных</li>
                                <li>Предоперационное и послеоперационное содержание лабораторных животных</li>
                            </ul>
                            <p>
                                Участники получили не только знания и практические навыки, но и ценные подарки.
                                По результатам голосования участников состоялось награждение лучших лекторов.
                            </p>
                            <p>
                                <strong>Мы благодарим всех участников мероприятия за активное участие и спонсоров —
                                за поддержку конференции!</strong>
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
                .conf-list {
                    list-style: none; padding: 0; margin: 0 0 16px 0;
                }
                .conf-list li {
                    position: relative; padding-left: 20px; margin-bottom: 8px;
                    color: rgba(255,255,255,0.55); font-size: 15px; line-height: 1.6;
                }
                .conf-list li::before {
                    content: ''; position: absolute; left: 0; top: 10px;
                    width: 6px; height: 6px; border-radius: 50%;
                    background: var(--secondary);
                }

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
                    overflow: hidden; display: block;
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
                    .conf-materials { padding: 40px 20px 60px; }
                    .conf-materials-grid { grid-template-columns: 1fr; }
                    .conf-section-title { font-size: 24px; }
                }
            `}</style>
        </>
    );
}
