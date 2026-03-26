import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "GLP-Planet конференция 2023 — GLP-Planet",
    description: "IV Международная научная конференция GLP-Planet совместно с RUS-Lasa, 28–30 июня 2023 г., Санкт-Петербург",
};

const materials = [
    { author: "Ковалева М.А." },
    { author: "Ивкин Д.Ю." },
    { author: "Галагудза М.М." },
    { author: "Шубин Д.В." },
    { author: "Мирошников М.В." },
    { author: "Матичина А.А." },
    { author: "Блинова Е.А." },
    { author: "Боровкова К.Е." },
    { author: "Буренков П.В." },
    { author: "Красильников И.В." },
    { author: "Матуа А.З." },
    { author: "Шохин И.Е." },
    { author: "Шохин И.Е.", title: "Доклад (2)" },
    { author: "Макаров В.Г." },
    { author: "Хрущёва М.Л." },
    { author: "Абакумов М.А." },
    { author: "Акимов Д.Ю." },
    { author: "Каземирчук М.С." },
    { author: "Попов В.С." },
    { author: "Ильченко А.Н." },
    { author: "Прудникова Е.В." },
    { author: "Рыжков И.А." },
    { author: "Чалов С.Е." },
    { author: "Арутюнян С.С." },
    { author: "Бондаренко Н.А." },
    { author: "Воронцова О.Н." },
    { author: "Ганина К.К." },
    { author: "Завьялов Е.Л." },
    { author: "Коновалова Е.В." },
    { author: "Сидиков Д.И." },
    { author: "Федерико" },
    { author: "Хоцкина А.С." },
    { author: "Филатова Е.В." },
    { author: "Енгалычева Г.Н." },
    { author: "Крышень К.Л." },
    { author: "Оганова М.А." },
    { author: "Остроухова Т.Ю." },
    { author: "Потеряев Д.А." },
    { author: "Рождественский Д.А." },
    { author: "Устюгов А.А." },
    { author: "Шабанов П.Д." },
    { author: "Гремякова П.В." },
    { author: "Гуляева Е.П." },
    { author: "Клинаева Е.Ю." },
    { author: "Макарова М.Н." },
    { author: "Мурашев А.Н." },
    { author: "Семивеличенко Е.Д." },
    { author: "Трапкова А.А." },
    { author: "Ходько С.В." },
    { author: "Шнаукшта В.С." },
    { author: "Билан Д.С." },
    { author: "Васильев Д.С." },
    { author: "Дейкин А.В." },
    { author: "Корокин М.В." },
    { author: "Леонова Е.И." },
    { author: "Мурашова Л.А." },
    { author: "Покровский М.В." },
    { author: "Сопова Ю.В." },
    { author: "Вербицкая Е.В." },
    { author: "Зелинская И.А." },
    { author: "Круглова А.Д." },
    { author: "Мазукина Е.В." },
    { author: "Савватейкина А.И." },
    { author: "Хохлова О.Н." },
    { author: "Аверина О.А." },
    { author: "Агацарская Я.В." },
    { author: "Васютина М.Л." },
    { author: "Литвинова Е.А." },
    { author: "Новиков Е.А." },
    { author: "Попов В.С.", title: "Доклад (2)" },
    { author: "Рутовская М.В." },
    { author: "Смирнова С.В." },
    { author: "Солдатов В.О." },
    { author: "Торопова Я.Г." },
    { author: "Гончарова Е.П." },
    { author: "Ивкина А.И." },
    { author: "Ильинский Н.С." },
    { author: "Каранина В.Д." },
    { author: "Макаров В.Г.", title: "Доклад (2)" },
    { author: "Матичин А.А.", title: "Доклад (2)" },
    { author: "Муразов Я.Г." },
    { author: "Подгорный О.В." },
    { author: "Пугач В.А." },
    { author: "Сарынина А.Н." },
    { author: "Силачёв Д.Н." },
    { author: "Чернышова А.В." },
    { author: "Яценко К.А." },
    { author: "Абрамович Р.А." },
    { author: "Власенко Ю.В." },
    { author: "Корель А.В." },
    { author: "Кощиц Д.В." },
    { author: "Нягматуллина В.Р." },
    { author: "Стрелкова А.В." },
    { author: "Тулегенова А.У." },
    { author: "Флисюк Е.В." },
    { author: "Арчакова О.А." },
    { author: "Барыбина Т.Н." },
    { author: "Комаров Т.Н." },
    { author: "Косман В.М." },
    { author: "Петрова Е.М." },
    { author: "Романенко А.Ю." },
    { author: "Тернинко И.И." },
];

export default function Conference2023Page() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                {/* Hero */}
                <section className="conf-hero">
                    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                        <div className="conf-hero-label">IV Конференция · 2023</div>
                        <h1 className="conf-hero-title">GLP-Planet конференция 4.0</h1>
                        <div className="conf-hero-meta">
                            <span>28–30 июня 2023</span>
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
                                28.06 — 30.06.2023 г. в Санкт-Петербурге прошла <strong>IV Международная научная
                                конференция GLP-PLANET, совместно с ассоциацией по лабораторным животным
                                (RUS-Lasa)</strong>. В работе конференции приняли участие научно-исследовательские
                                институты и испытательные центры, фармацевтические компании, независимые эксперты
                                и представители регуляторных органов из <strong>30 городов России</strong>, а также
                                Абхазии, Армении, Беларуси, Испании, Италии, Казахстана, Китая, Узбекистана, США
                                и Швейцарии. Конференция собрала более <strong>500 человек</strong>.
                            </p>
                            <p>
                                Участники подробно обсудили достижения и ближайшие цели GxP для устойчивого развития
                                фармацевтической отрасли в ЕАЭС.
                            </p>
                            <p>
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
                                        <div className="conf-material-title">{m.title || "Доклад"}</div>
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
