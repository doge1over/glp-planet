import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "GLP-Planet конференция 2021 — GLP-Planet",
    description: "II Международная научная конференция GLP-Planet, 5–6 июля 2021 г., Санкт-Петербург",
};

const materials = [
    { author: "Макаров В.Г.", title: "Доклад", pdf: "#" },
    { author: "Рождественский Д.А.", title: "Доклад", pdf: "#" },
    { author: "Javier Guillén", title: "Доклад", pdf: "#" },
    { author: "Тулегенова А.У.", title: "Доклад", pdf: "#" },
    { author: "Енгалычева Г.Н.", title: "Доклад", pdf: "#" },
    { author: "Шакарян М.К.", title: "Доклад", pdf: "#" },
    { author: "Беспалов А.Ю.", title: "Доклад", pdf: "#" },
    { author: "Lars F.M.", title: "Scientific advantages of using GM in biomedical research", pdf: "#" },
    { author: "Галагудза М.М.", title: "Доклад", pdf: "#" },
    { author: "Lars F.M.", title: "Optimized housing and care of Göttingen Minipigs", pdf: "#" },
    { author: "Vismara G.", title: "Доклад", pdf: "#" },
    { author: "Ковалева Е.Л.", title: "Доклад", pdf: "#" },
    { author: "Мурашев А.Н.", title: "Доклад", pdf: "#" },
    { author: "Ниязов Р.Р.", title: "Доклад", pdf: "#" },
    { author: "Чепур С.В.", title: "Доклад", pdf: "#" },
    { author: "Калинин Ю.", title: "Доклад", pdf: "#" },
    { author: "Григорьев В.В.", title: "Доклад", pdf: "#" },
    { author: "Доротенко А.", title: "Доклад", pdf: "#" },
    { author: "Гущина С.В.", title: "Доклад", pdf: "#" },
    { author: "Исакова-Сивак И.Н.", title: "Доклад", pdf: "#" },
    { author: "Петров Д.В.", title: "Доклад", pdf: "#" },
    { author: "Попов В.С.", title: "Доклад", pdf: "#" },
    { author: "Макаренко И.Е.", title: "Доклад", pdf: "#" },
    { author: "Солодовников А.Г.", title: "Доклад", pdf: "#" },
    { author: "Акимова М.А.", title: "Доклад", pdf: "#" },
    { author: "Бондарева Е.Д.", title: "Доклад", pdf: "#" },
    { author: "Гремякова П.", title: "Доклад", pdf: "#" },
    { author: "Ловат М.Л.", title: "Доклад", pdf: "#" },
    { author: "Флисюк Е.В.", title: "Доклад", pdf: "#" },
    { author: "Ковалева М.А.", title: "Доклад", pdf: "#" },
    { author: "Ходько С.В.", title: "Доклад", pdf: "#" },
    { author: "Шохин И.", title: "Доклад", pdf: "#" },
    { author: "Торопова Я.Г.", title: "Доклад", pdf: "#" },
    { author: "Попов В.С.", title: "Доклад (2)", pdf: "#" },
    { author: "Ивкин Д.Ю.", title: "Доклад", pdf: "#" },
    { author: "Муразов Я.Г.", title: "Доклад", pdf: "#" },
    { author: "Шипаева Е.В.", title: "Доклад", pdf: "#" },
    { author: "Макарова М.Н.", title: "Доклад", pdf: "#" },
    { author: "Саяхов Р.", title: "Доклад", pdf: "#" },
    { author: "Зайцева М.А.", title: "Доклад", pdf: "#" },
    { author: "Амстиславская Т.Г.", title: "Доклад", pdf: "#" },
    { author: "Карал-оглы Д.Д.", title: "Доклад", pdf: "#" },
    { author: "Ильинский Н.С.", title: "Доклад", pdf: "#" },
    { author: "Устюгов А.А.", title: "Доклад", pdf: "#" },
    { author: "Гущин Я.А.", title: "Доклад", pdf: "#" },
    { author: "Ковалева М.А.", title: "Журнал", pdf: "#" },
    { author: "Литвинова Е.А.", title: "Доклад", pdf: "#" },
    { author: "Кушнир Е.А.", title: "Доклад", pdf: "#" },
    { author: "Салминьш Д.", title: "Доклад", pdf: "#" },
    { author: "Акимов Д.Ю.", title: "Доклад", pdf: "#" },
    { author: "Rogers A.", title: "Доклад", pdf: "#" },
    { author: "Александров А.В.", title: "Доклад", pdf: "#" },
    { author: "Александров А.", title: "Доклад", pdf: "#" },
    { author: "Васютина М.", title: "Health monitoring", pdf: "#" },
    { author: "Фальковский И.В.", title: "Доклад", pdf: "#" },
];

export default function Conference2021Page() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                {/* Hero */}
                <section className="conf-hero">
                    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                        <div className="conf-hero-label">II Конференция · 2021</div>
                        <h1 className="conf-hero-title">GLP-Planet конференция 2.0</h1>
                        <div className="conf-hero-meta">
                            <span>5–6 июля 2021</span>
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
                                05–06 июля 2021 г. в Санкт-Петербурге успешно прошла <strong>II Международная научная
                                конференция GLP-Planet</strong>. В работе конференции приняли участие более 60
                                научно-исследовательских институтов и испытательных центров, более 40 фармацевтических
                                компаний из <strong>13 стран</strong> — Россия, Беларусь, Испания, Дания, Италия, Армения,
                                Казахстан, Франция, Великобритания, Бельгия, Германия, США, Индия. На конференции
                                присутствовало <strong>70 человек</strong>, а просмотр прямого эфира превысил 300.
                            </p>
                            <p>
                                Первый день конференции был открыт торжественным приветствием Валерия Макарова (Генеральный
                                директор, Санкт-Петербургский институт фармации), Владислава Шестакова (Директор, ФБУ «ГИЛС
                                и НП» Минпромторга России) и Игоря Наркевича (Ректор, ФГБОУ ВО «СПХФУ»).
                            </p>
                            <p>
                                Впервые в работе конференции приняли участие специалисты AAALAC. Старший директор по Европе
                                и Латинской Америке, AAALAC International рассказал о системе качества и благополучия
                                животных в исследованиях.
                            </p>
                            <p>
                                Особый интерес участников вызвала сессия «Разнообразие тест-систем и трансляционность
                                полученных данных в клиническую практику», в которой были рассмотрены не только научные,
                                но и регуляторные вопросы.
                            </p>
                            <p>
                                Мастер-класс по Биоэтической комиссии прошёл в формате игры. Одна группа участников
                                выступала с позиции учёных, защищая свой научный проект. Вторая группа стала биоэтической
                                комиссией. В ходе мастер-класса победила логика и наука.
                            </p>
                            <p>
                                Участниками конференции было поддержано предложение создания единого информационного
                                документа <strong>«Консультант GLP-PLANET»</strong>. Консультант будет состоять из мнений
                                ведущих экспертов фармацевтической отрасли — специалистов в области доклинических
                                исследований, представителей фармацевтических компаний и Регуляторных органов.
                            </p>
                            <p>
                                <strong>Мы благодарим всех участников мероприятия за активное участие и спонсоров — за
                                    поддержку конференции!</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Спонсоры */}
                <section className="conf-sponsors">
                    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                        <h2 className="conf-section-title">Спонсоры</h2>
                        <div className="conf-sponsors-grid">
                            <div className="conf-sponsor-item">
                                <div className="conf-sponsor-label">Генеральный спонсор</div>
                                <div className="conf-sponsor-logo">
                                    <img src="/images/archive/2021/logo_gen-_sponsor.png" alt="Генеральный спонсор" />
                                </div>
                            </div>
                            <div className="conf-sponsor-item">
                                <div className="conf-sponsor-label">Золотой спонсор</div>
                                <div className="conf-sponsor-logo">
                                    <img className="conf-sponsor-lg" src="/images/archive/2021/logo_zolotoj_sponsor_bionorika.png" alt="Золотой спонсор — Бионорика" />
                                </div>
                            </div>
                            <div className="conf-sponsor-item">
                                <div className="conf-sponsor-label">Бронзовый спонсор</div>
                                <div className="conf-sponsor-logo">
                                    <img className="conf-sponsor-lg" src="/images/archive/2021/logo_bronzovyj_sponsor_farmbiolajn-1.png" alt="Бронзовый спонсор — Фармбиолайн" />
                                </div>
                            </div>
                        </div>

                        <div className="conf-sponsors-extra">
                            <div className="conf-sponsor-item conf-sponsor-wide">
                                <div className="conf-sponsor-label">Генеральный информационный партнер</div>
                                <div className="conf-sponsor-logo">
                                    <img src="/images/archive/2021/gxp-logo.png" alt="GxP News" />
                                </div>
                            </div>
                            <div className="conf-sponsor-item conf-sponsor-wide">
                                <div className="conf-sponsor-label">При поддержке и участии ФБУ «ГИЛС и НП»</div>
                                <div className="conf-sponsor-logo">
                                    <img src="/images/archive/2021/logo_gils.png" alt="ФБУ ГИЛС и НП" />
                                </div>
                            </div>
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

                .conf-sponsors {
                    padding: 80px 48px;
                    background: var(--primary);
                    text-align: center;
                }
                .conf-sponsors .conf-section-title { margin-bottom: 40px; }
                .conf-sponsors-grid {
                    display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;
                    margin-bottom: 48px;
                }
                .conf-sponsor-item { text-align: center; }
                .conf-sponsor-label {
                    font-size: 11px; color: #6B82C4; font-weight: 600;
                    text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 20px;
                }
                .conf-sponsor-logo {
                    background: rgba(255,255,255,0.95); border-radius: 8px;
                    padding: 24px; display: flex; align-items: center; justify-content: center;
                    height: 120px; position: relative; overflow: visible;
                }
                .conf-sponsor-logo img {
                    max-width: 180px; max-height: 80px; object-fit: contain;
                    transition: opacity 0.3s;
                }
                .conf-sponsor-logo img.conf-sponsor-lg {
                    position: absolute;
                    max-width: 360px; max-height: 240px;
                }
                .conf-sponsors-extra {
                    display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
                }
                .conf-sponsor-wide .conf-sponsor-logo img {
                    max-width: 220px; max-height: 90px;
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
                    .conf-sponsors { padding: 60px 32px; }
                    .conf-materials { padding: 60px 32px 80px; }
                }
                @media (max-width: 900px) {
                    .conf-materials-grid { grid-template-columns: 1fr 1fr; }
                    .conf-sponsors-grid { grid-template-columns: 1fr; max-width: 300px; margin: 0 auto 40px; }
                    .conf-sponsors-extra { grid-template-columns: 1fr; max-width: 300px; margin: 0 auto; }
                }
                @media (max-width: 600px) {
                    .conf-hero { padding: 100px 20px 40px; }
                    .conf-hero-title { font-size: 28px; }
                    .conf-hero-meta { flex-direction: column; align-items: flex-start; gap: 4px; font-size: 13px; }
                    .conf-hero-dot { display: none; }
                    .conf-about { padding: 48px 20px; }
                    .conf-text { font-size: 14px; }
                    .conf-sponsors { padding: 40px 20px; }
                    .conf-materials { padding: 40px 20px 60px; }
                    .conf-materials-grid { grid-template-columns: 1fr; }
                    .conf-section-title { font-size: 24px; }
                }
            `}</style>
        </>
    );
}