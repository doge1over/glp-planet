import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "GLP-Planet конференция 2020 — GLP-Planet",
    description: "I научная конференция GLP-Planet, 30 июня – 1 июля 2020 г., Санкт-Петербург",
};

const MATERIALS = [
    { author: "Vladimir Poroikov, Prof. Dr.", title: "Computer-aided predictions\n" +
            "in drug research and development", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/v.v.porojkov-prognozirovanie-in-silico-01.07.20.pdf" },
    { author: "Kosman Vera M., PhD", title: "Study of pharmacokinetic parameters in\n" +
            "tests on the ADME panel", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/v.m.-kosman-izuchenie-fk-parametrov-_panel_adme-01.07.20.pdf" },
    { author: "Алешкович О.И.", title: "VMP и квалификация.\n" +
            "Важность квалификации\n" +
            "инженерных систем", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/validaczionnyj-master-plan-i-kvao.i.-aleshkovich-kvalifikaczionnye-ispytaniya.-01.07.20.pdf" },
    { author: "Енгалычева Г.Н.", title: "Доклинические исследования безопасности\n" +
            "лекарственных средств в России: традиционные\n" +
            "подходы и современные требования", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/g.n.-engalycheva-dki-bezopasnosti-ls-v-rf-30.06.20.pdf" },
    { author: "Салминьш Д.А.", title: "Циркадные ритмы", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/d.a.salminsh-czirkadnye-ritmy01.07.2020.pdf" },
    { author: "Акимов Д.Ю.", title: "КБЖ — практическая реализация", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/d.yu.-akimov_kbzh-prakticheskaya-realizacziya-01.07.20.pdf" },
    { author: "Кушнир Е.А.", title: "Recognition of pain, suffering and distress of\n" +
            "laboratory rodents and the means for their relief", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/e.a.kushnir-raspoznavanie-boli-u-gryzunov-01.07.20.pdf" },
    { author: "Образцова Е.П.", title: "Добровольная сертификация", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/e.p.-obrazczova-dobrovolnaya-sertifikacziya-01.07.2020.pdf" },
    { author: "Новикова И.И.", title: "Барьеры для внедрения GLP в РФ", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/i.i.novikova-barery-dlya-vnedreniya-glp-v-rf-30.06.20.pdf" },
    { author: "Крышень К.Л.", title: "Подготовка программы исследований", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/k.l.-kryshen-podgotovka-programmy-issledovanij-01.07.20.pdf" },
    { author: "Кильдибеков К.Ю.", title: "Оценка потенциальных рисков (инжиниринг)", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/k.yu.-kildibekov-oczenka-potenczialnyh-riskov_inzhiniring-01.07.20.pdf" },
    { author: "Багдасарян Л.", title: "Виварий — уход", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/l.bagdasaryan_vivarij-uhod-01.07.20.pdf" },
    { author: "Багдасарян Л.", title: "Необходимость измерительных систем", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/l.bagdasaryan_neobhodimost-izmeritelnyh-sistem-30.06.20.pdf" },
    { author: "Зайцева М.А.", title: "Риск-ориентированный подход", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/m.a.-zajczeva-risk-orientirovannyj-podhod-30.06.20.pdf" },
    { author: "Ковалева М.А.", title: "Валидация теста «Открытое поле»", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/m.a.kovaleva-_validacziya-testa-otkrytoe-pole_01.07.20.pdf" },
    { author: "Шакарян М.К.", title: "Внедрение систем инспектирования GLP", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/m.k.-shakaryan-vnedrenie-sistem-inspektirovaniya-glp-30.06.20.pdf" },
    { author: "Ловать М.Л.", title: "Планирование поведенческого исследования", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/m.l.-lovat-planirovanie-povedencheskogo-issledovaniya-01.07.20.pdf" },
    { author: "Макарова М.Н.", title: "Мониторинг здоровья животных", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/m.n.-makarova-monitoring-zdorovya-zhivotnyh-01.07.20.pdf" },
    { author: "Фаустова Н.М.", title: "ФК и количественная стандартизация", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/n.m.-faustova-fk-i-kolichestvennaya-standartizacziya-01.07.20.pdf" },
    { author: "Филиппова О.В.", title: "LD50", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/o.v.-filippova-ld50-010720.pdf" },
    { author: "Алешкович О.И.", title: "Целостность данных в компьютеризированных системах", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/o.i.aleshkovich-czelostnost-dannyh-v-kompyuterizirovannyh-sistemah-01.07.20.pdf" },
    { author: "Еникеева Р.А.", title: "Тенденция к гармонизации регуляторных досье", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/r.a.enikeeva-tendencziya-k-garmonizaczii-reg.dose-01.07.2020.pdf" },
    { author: "Ходько С.В.", title: "СМК ДКИ — Per aspera ad astra", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/s.v.-hodko-smk-dki-per-aspera-ad-astra-01.07.20.pdf" },
    { author: "Мурзич Т.В.", title: "Государственный контроль в проведении ДКИ в РФ", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/t.v.murzich-gos.kontrol-v-provedenii-dki-v-rf-30.06.20.pdf" },
    { author: "Торопова Я.Г.", title: "Правила GLP в исследованиях фармакологической эффективности", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/ya.g.-toropova-pravila-glp-v-issledovaniyah-farmakologicheskoj-effektivnosti.-01.07.20.pdf" },
];

function PdfIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10,9 9,9 8,9" />
        </svg>
    );
}

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
                <section className="conf-materials">
                    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                        <h2 className="conf-section-title" style={{ color: "var(--primary)" }}>Материалы конференции</h2>
                        <div className="conf-divider" style={{ marginBottom: 40 }} />
                        <div className="materials-grid">
                            {MATERIALS.map((m, i) => (
                                <a
                                    key={i}
                                    href={m.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="material-card"
                                >
                                    <div className="material-card-icon">
                                        <PdfIcon />
                                    </div>
                                    <div className="material-card-body">
                                        <div className="material-card-title">{m.title}</div>
                                        <div className="material-card-author">{m.author}</div>
                                    </div>
                                    <div className="material-card-arrow">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                                        </svg>
                                    </div>
                                </a>
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

                /* Materials section */
                .conf-materials {
                    padding: 80px 48px;
                    background: #fff;
                }
                .materials-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 14px;
                }
                .material-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 18px;
                    padding: 28px 26px;
                    background: var(--light, #F5F7FA);
                    border-radius: 6px;
                    border: 1px solid rgba(73,100,162,0.08);
                    text-decoration: none;
                    transition: all 0.25s ease;
                    position: relative;
                    min-height: 120px;
                }
                .material-card:hover {
                    border-color: var(--secondary, #4964A2);
                    box-shadow: 0 6px 20px rgba(20,27,77,0.1);
                    transform: translateY(-2px);
                }
                .material-card-icon {
                    flex-shrink: 0;
                    width: 44px;
                    height: 44px;
                    border-radius: 5px;
                    background: rgba(73,100,162,0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--secondary, #4964A2);
                    transition: all 0.25s ease;
                }
                .material-card:hover .material-card-icon {
                    background: var(--secondary, #4964A2);
                    color: #fff;
                }
                .material-card-body {
                    flex: 1;
                    min-width: 0;
                }
                .material-card-title {
                    font-size: 15px;
                    font-weight: 700;
                    color: var(--primary, #141B4D);
                    margin-bottom: 6px;
                    line-height: 1.4;
                }
                .material-card-author {
                    font-size: 13px;
                    color: #6b7280;
                    line-height: 1.4;
                }
                .material-card:hover .material-card-author {
                    color: var(--secondary, #4964A2);
                }
                .material-card-arrow {
                    flex-shrink: 0;
                    color: rgba(73,100,162,0.25);
                    margin-top: 4px;
                    transition: all 0.25s;
                }
                .material-card:hover .material-card-arrow {
                    color: var(--secondary, #4964A2);
                    transform: translate(2px, -2px);
                }

                @media (max-width: 1024px) {
                    .conf-hero { padding: 120px 32px 48px; }
                    .conf-hero-title { font-size: 34px; }
                    .conf-about { padding: 60px 32px; }
                    .conf-materials { padding: 60px 32px; }
                    .materials-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 600px) {
                    .conf-hero { padding: 100px 20px 40px; }
                    .conf-hero-title { font-size: 28px; }
                    .conf-hero-meta { flex-direction: column; align-items: flex-start; gap: 4px; font-size: 13px; }
                    .conf-hero-dot { display: none; }
                    .conf-about { padding: 48px 20px; }
                    .conf-materials { padding: 48px 20px; }
                    .conf-text { font-size: 14px; }
                    .conf-section-title { font-size: 24px; }
                    .materials-grid { grid-template-columns: 1fr; gap: 10px; }
                    .material-card { padding: 22px 20px; min-height: auto; }
                }
            `}</style>
        </>
    );
}