import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "GLP-Planet конференция 2021 — GLP-Planet",
    description: "II Международная научная конференция GLP-Planet, 5–6 июля 2021 г., Санкт-Петербург",
};

const materials = [
    { author: "Макаров В.Г.", title: "GLP-PLANET", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/makarov-v.g..pdf" },
    { author: "Рождественский Д.А.", title: "Развитие требований к организации и проведению GLP-исследований в ЕАЭС", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/rozhdestvenskij-d.a..pdf" },
    { author: "Javier Guillén", title: "Quality Systems and Animal Welfare in Research", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/javier_guillen.pdf" },
    { author: "Тулегенова А.У.", title: "Биологические методы контроля качества лекарственных средств в Фармакопее ЕАЭС", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/tulegenova-a.u..pdf" },
    { author: "Енгалычева Г.Н., Болсуновская Ю.Р.", title: "Объем доклинических исследований безопасности на разных этапах разработки лекарственного препарата", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/engalycheva-g.n..pdf" },
    { author: "Шакарян М.К.", title: "Регуляторные инспекции сайтов предклинических исследований", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/shakaryan-m.k..pdf" },
    { author: "Беспалов А.Ю.", title: "Инновационный подход к качеству нерегулируемых доклинических исследований", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/bespalov-a.yu..pdf" },
    { author: "Lars F.M.", title: "Scientific advantages of using GM in biomedical research", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/lars-f.m._scientific-advantages-of-using-gm-in-biomedical-research.pdf" },
    { author: "Галагудза М.М.", title: "Валидность и воспроизводимость результатов преклинических исследований: пути выхода из «трансляционного тупика»", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/galagudza-m.m..pdf" },
    { author: "Lars F.M.", title: "Optimized housing and care of Göttingen Minipigs", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/lars-f.-m._optimized-housing-and-care-of-gottingen-minipigs.pdf" },
    { author: "Vismara G.", title: "Biosafety Standards and Common Protocols in Lab Animal Science", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/vismara-g..pdf" },
    { author: "Ковалева Е.Л.", title: "Оценка и контроль примесей в лекарственных средствах", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/kovaleva-e.l..pdf" },
    { author: "Мурашев А.Н.", title: "Неклинические исследования для регистрации в формате CTD и REACH", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/murashev-a.n..pdf" },
    { author: "Ниязов Р.Р.", title: "Правовая основа и регуляторика GLP", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/niyazov-r.r..pdf" },
    { author: "Чепур С.В.", title: "Изменения структуры органов и тканей при инфекции SARS-CoV-2: подходы к оценке эффективности средств терапии", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/chepur-s.v..pdf" },
    { author: "Калинин Ю.", title: "Создание автоматизированной системы диспетчеризации микроклимата чистой зоны SPF вивария", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/kalinin_yurij.pdf" },
    { author: "Григорьев В.В.", title: "Комфортная среда обитания для лабораторных животных в клетках и вольерах компании Roklet", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/grigorev-v.v..pdf" },
    { author: "Доротенко А.", title: "Особенности биостатистических методов в доклинических исследованиях", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/dorotenko-a.-1.pdf" },
    { author: "Гущина С.В.", title: "Трудовые функции и оценка трудозатрат провизора в организации, осуществляющей доклинические исследования", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/gushhina-s.v..pdf" },
    { author: "Исакова-Сивак И.Н.", title: "Обоснование безвредности и эффективности гриппозных вакцин в доклинических исследованиях", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/isakova_sivak-i.n..pdf" },
    { author: "Петров Д.В.", title: "Проект вивария – этапы, вопросы, соответствия", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/petrov-d.v..pdf" },
    { author: "Попов В.С.", title: "Обеспечивают ли стандартные животные воспроизводимый результат?", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/popov-v.s.-2.pdf" },
    { author: "Макаренко И.Е.", title: "Приведение лаборатории доклинических исследований к требованиям GLP: от планирования до получения аккредитации", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/makarenko-i.e.-1.pdf" },
    { author: "Солодовников А.Г.", title: "Отсутствие системы GLP – проблемы регистрации по правилам ЕАЭС и ЕС", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/solodovnikov-a.g..pdf" },
    { author: "Акимова М.А.", title: "Опыт использования оборудования и элементов обогащения среды для собак породы бигль", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/akimova-m.a..pdf" },
    { author: "Бондарева Е.Д.", title: "Влияние отклонения влажности воздуха на здоровье лабораторных животных. Оценка риска", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/bondareva-e.d..pdf" },
    { author: "Гремякова П.", title: "Особенности GLP аудита биоаналитической лаборатории", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/gremyakova-p..pdf" },
    { author: "Ловат М.Л.", title: "Является ли использование стандартных сухих кормов гарантией воспроизводимости данных у грызунов?", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/lovat-m.l..pdf" },
    { author: "Флисюк Е.В.", title: "Актуальный подход к обучению уполномоченных лиц по качеству ЕАЭС", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/flisyuk-e.v..pdf" },
    { author: "Ковалева М.А.", title: "«Подводные камни» при подготовке научного отчёта – с чем может столкнуться учёный", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/kovaleva-m.a..pdf" },
    { author: "Ходько С.В.", title: "Реализация программы повышения квалификации в соответствии с профессиональным стандартом", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/hodko-s.v..pdf" },
    { author: "Шохин И.Е.", title: "GLP в биоаналитической лаборатории: надлежащая и ненадлежащая практика", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/shohin-i..pdf" },
    { author: "Торопова Я.Г., Розова И.О.", title: "Опыт реализации образовательных программ в сфере доклинических исследований в ФГБУ «НМИЦ им В.А. Алмазова»", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/toropova-ya.g..pdf" },
    { author: "Попов В.С., Кушнир Е.А.", title: "Учебный курс для исследователей, работающих с лабораторными животными", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/popov-v.s.-3.pdf" },
    { author: "Ивкин Д.Ю.", title: "Доклинические исследования от студенческой скамьи к кадрам высшей категории", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/ivkin-d.yu..pdf" },
    { author: "Муразов Я.Г.", title: "Доклинические испытания перфузионных технологий: дьявол в деталях", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/murazov-ya.g..pdf" },
    { author: "Шипаева Е.В.", title: "Трансляционные аспекты использования данных доклинических исследований", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/shipaeva-e.v..pdf" },
    { author: "Макарова М.Н.", title: "Проблемы анестезии экспериментальных животных", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/makarova-m.n..pdf" },
    { author: "Саяхов Р.", title: "Предсказательная токсикология с использованием (Q)SAR", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/sayahov-r..pdf" },
    { author: "Зайцева М.А.", title: "Эволюция требований к качеству доклинических исследований на примере внедрения риск-ориентированного подхода", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/zajczeva-m.a..pdf" },
    { author: "Амстиславская Т.Г., Белова А.С.", title: "Моделирование психопатологий на зебраданио: черепно-мозговая травма", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/amstislavskaya-t.g..pdf" },
    { author: "Карал-оглы Д.Д.", title: "Лабораторные приматы в медико-биологических исследованиях", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/karal-ogly-d.d..pdf" },
    { author: "Ильинский Н.С.", title: "Исследование токсических поражений периферической нервной системы: интерпретация и трансляция экспериментальных данных", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/ilinskij-n.s..pdf" },
    { author: "Устюгов А.А.", title: "Стратегия поиска препаратов для лечения нейродегенеративных заболеваний на основе трансгенных животных моделей протеинопатий", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/ustyugov-a.a..pdf" },
    { author: "Гущин Я.А.", title: "Особенности проведения патоморфологического исследования лабораторных животных в рамках Рекомендации ЕЭК №10", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/gushhin-ya.a..pdf" },
    { author: "Ковалева М.А.", title: "Журнал «Лабораторные животные для научных исследований»", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/kovaleva-m.a._zhurnal.pdf" },
    { author: "Литвинова Е.А.", title: "История становления и развития мониторинга здоровья лабораторных животных в вивариях РФ", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/litvinova-e.a..pdf" },
    { author: "Кушнир Е.А.", title: "Оценка степени тяжести процедур, проводимых на лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/kushnir-e.a..pdf" },
    { author: "Салминьш Д.", title: "Новая линия ИВК-EMERALD", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/salminsh-d..pdf" },
    { author: "Акимов Д.Ю.", title: "Риск-ориентированный подход к мониторингу здоровья лабораторных приматов", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/akimov-d.yu..pdf" },
    { author: "Rogers A.", title: "OECD guidelines and GLP compliance for inhalation toxicological studies", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/rogers-a..pdf" },
    { author: "Александров А.В.", title: "GLP-инжиниринг: от проекта до обслуживания", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/aleksandrov-a.v..pdf" },
    { author: "Александров А.", title: "Доклиническая разработка генотерапевтических препаратов", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/aleksandrov-a..pdf" },
    { author: "Васютина М.", title: "Laboratory animals health monitoring: from Danio Rerio to mini-pigs", pdf: "https://glp-planet.com/wp-content/uploads/2021/09/vasyutina-m_health-monitoring.pdf" },
    { author: "Фальковский И.В.", title: "Особенности взаимодействия заинтересованных сторон при создании контрольных и исследовательских лабораторий", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/falkovskij-i.v..pdf" },
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

export default function Conference2021Page() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                <section className="conf-hero">
                    <div className="conf-container">
                        <div className="conf-hero-label">II Конференция · 2021</div>
                        <h1 className="conf-hero-title">GLP-Planet конференция 2.0</h1>
                        <div className="conf-hero-meta">
                            <span>5–6 июля 2021</span>
                            <span className="conf-hero-dot">·</span>
                            <span>г. Санкт-Петербург, Россия</span>
                        </div>
                    </div>
                </section>

                <section className="conf-about">
                    <div className="conf-container">
                        <h2 className="conf-section-title">О конференции</h2>
                        <div className="conf-divider" />
                        <div className="conf-text">
                            <p>05–06 июля 2021 г. в Санкт-Петербурге успешно прошла <strong>II Международная научная конференция GLP-Planet</strong>. В работе конференции приняли участие более 60 научно-исследовательских институтов и испытательных центров, более 40 фармацевтических компаний из <strong>13 стран</strong>. На конференции присутствовало <strong>70 человек</strong>, а просмотр прямого эфира превысил 300.</p>
                            <p>Впервые в работе конференции приняли участие специалисты AAALAC. Особый интерес участников вызвала сессия «Разнообразие тест-систем и трансляционность полученных данных в клиническую практику».</p>
                            <p>Участниками конференции было поддержано предложение создания единого информационного документа <strong>«Консультант GLP-PLANET»</strong>.</p>
                            <p><strong>Мы благодарим всех участников мероприятия за активное участие и спонсоров — за поддержку конференции!</strong></p>
                        </div>
                    </div>
                </section>

                <section className="conf-sponsors">
                    <div className="conf-container">
                        <h2 className="conf-section-title">Спонсоры</h2>
                        <div className="conf-sponsors-grid">
                            <div className="conf-sponsor-item">
                                <div className="conf-sponsor-label">Генеральный спонсор</div>
                                <div className="conf-sponsor-logo"><img src="/images/archive/2021/logo_gen-_sponsor.png" alt="Генеральный спонсор" /></div>
                            </div>
                            <div className="conf-sponsor-item">
                                <div className="conf-sponsor-label">Золотой спонсор</div>
                                <div className="conf-sponsor-logo"><img src="/images/archive/2021/logo_zolotoj_sponsor_bionorika.png" alt="Бионорика" /></div>
                            </div>
                            <div className="conf-sponsor-item">
                                <div className="conf-sponsor-label">Бронзовый спонсор</div>
                                <div className="conf-sponsor-logo"><img src="/images/archive/2021/logo_bronzovyj_sponsor_farmbiolajn-1.png" alt="Фармбиолайн" /></div>
                            </div>
                        </div>
                        <div className="conf-sponsors-extra">
                            <div className="conf-sponsor-item">
                                <div className="conf-sponsor-label">Генеральный информационный партнер</div>
                                <div className="conf-sponsor-logo"><img src="/images/archive/2021/gxp-logo.png" alt="GxP News" /></div>
                            </div>
                            <div className="conf-sponsor-item">
                                <div className="conf-sponsor-label">При поддержке и участии ФБУ «ГИЛС и НП»</div>
                                <div className="conf-sponsor-logo"><img src="/images/archive/2021/logo_gils.png" alt="ФБУ ГИЛС и НП" /></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="materials" className="conf-materials">
                    <div className="conf-container">
                        <h2 className="conf-section-title" style={{ color: "var(--primary)" }}>Материалы конференции</h2>
                        <div className="conf-divider" style={{ marginBottom: 40 }} />
                        <div className="materials-grid">
                            {materials.map((m, i) => (
                                <a key={i} href={m.pdf} target="_blank" rel="noopener noreferrer" className="material-card">
                                    <div className="material-card-icon"><PdfIcon /></div>
                                    <div className="material-card-body">
                                        <div className="material-card-title">{m.title}</div>
                                        <div className="material-card-author">{m.author}</div>
                                    </div>
                                    <div className="material-card-arrow">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <style>{confStyles}</style>
        </>
    );
}

const confStyles = `
.conf-container { max-width: 1000px; margin: 0 auto; }
.conf-hero { padding: 140px 48px 60px; background: linear-gradient(155deg, #080C24 0%, #141B4D 45%, #192258 100%); }
.conf-hero-label { font-size: 11px; color: #6B82C4; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px; }
.conf-hero-title { font-size: 42px; font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 16px; }
.conf-hero-meta { font-size: 15px; color: rgba(255,255,255,0.4); display: flex; align-items: center; flex-wrap: wrap; }
.conf-hero-dot { margin: 0 10px; color: #6B82C4; }
.conf-about { padding: 80px 48px; background: linear-gradient(155deg, #0D1330 0%, #141B4D 50%, #1A2460 100%); }
.conf-section-title { font-size: 28px; font-weight: 700; color: #fff; margin-bottom: 16px; }
.conf-divider { width: 40px; height: 3px; background: var(--secondary); border-radius: 1px; margin-bottom: 32px; }
.conf-text { color: rgba(255,255,255,0.55); font-size: 15px; line-height: 1.85; }
.conf-text p { margin-bottom: 16px; }
.conf-text strong { color: rgba(255,255,255,0.8); }
.conf-sponsors { padding: 80px 48px; background: var(--primary); text-align: center; }
.conf-sponsors .conf-section-title { margin-bottom: 40px; }
.conf-sponsors-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-bottom: 48px; }
.conf-sponsor-item { text-align: center; }
.conf-sponsor-label { font-size: 11px; color: #6B82C4; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 20px; }
.conf-sponsor-logo { background: rgba(255,255,255,0.95); border-radius: 8px; padding: 24px; display: flex; align-items: center; justify-content: center; height: 120px; }
.conf-sponsor-logo img { max-width: 180px; max-height: 80px; object-fit: contain; }
.conf-sponsors-extra { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.conf-materials { padding: 80px 48px 100px; background: #fff; }
.materials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.material-card { display: flex; align-items: flex-start; gap: 16px; padding: 24px 22px; background: #F5F7FA; border-radius: 6px; border: 1px solid rgba(73,100,162,0.08); text-decoration: none; transition: all 0.25s ease; min-height: 100px; }
.material-card:hover { border-color: var(--secondary, #4964A2); box-shadow: 0 6px 20px rgba(20,27,77,0.1); transform: translateY(-2px); }
.material-card-icon { flex-shrink: 0; width: 44px; height: 44px; border-radius: 5px; background: rgba(73,100,162,0.1); display: flex; align-items: center; justify-content: center; color: var(--secondary, #4964A2); transition: all 0.25s ease; }
.material-card:hover .material-card-icon { background: var(--secondary, #4964A2); color: #fff; }
.material-card-body { flex: 1; min-width: 0; }
.material-card-title { font-size: 14px; font-weight: 700; color: var(--primary, #141B4D); margin-bottom: 6px; line-height: 1.45; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
.material-card-author { font-size: 13px; color: #6b7280; line-height: 1.4; }
.material-card:hover .material-card-author { color: var(--secondary, #4964A2); }
.material-card-arrow { flex-shrink: 0; color: rgba(73,100,162,0.25); margin-top: 4px; transition: all 0.25s; }
.material-card:hover .material-card-arrow { color: var(--secondary, #4964A2); transform: translate(2px, -2px); }
@media (max-width: 1024px) {
  .conf-hero { padding: 120px 32px 48px; }
  .conf-hero-title { font-size: 34px; }
  .conf-about, .conf-sponsors, .conf-materials { padding: 60px 32px; }
  .materials-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 900px) {
  .conf-sponsors-grid { grid-template-columns: 1fr; max-width: 280px; margin: 0 auto 40px; }
  .conf-sponsors-extra { grid-template-columns: 1fr; max-width: 280px; margin: 0 auto; }
}
@media (max-width: 600px) {
  .conf-hero { padding: 100px 20px 36px; }
  .conf-hero-label { font-size: 10px; letter-spacing: 2px; margin-bottom: 8px; }
  .conf-hero-title { font-size: 26px; margin-bottom: 12px; }
  .conf-hero-meta { flex-direction: column; align-items: flex-start; gap: 2px; font-size: 13px; }
  .conf-hero-dot { display: none; }
  .conf-about { padding: 40px 16px; }
  .conf-text { font-size: 14px; line-height: 1.75; }
  .conf-section-title { font-size: 22px; }
  .conf-sponsors { padding: 40px 16px; }
  .conf-sponsor-logo { height: 90px; padding: 16px; }
  .conf-sponsor-logo img { max-width: 140px; max-height: 60px; }
  .conf-materials { padding: 40px 16px; }
  .materials-grid { grid-template-columns: 1fr; gap: 10px; }
  .material-card { padding: 16px 14px; min-height: auto; gap: 12px; }
  .material-card-icon { width: 36px; height: 36px; }
  .material-card-icon svg { width: 18px; height: 18px; }
  .material-card-title { font-size: 13px; -webkit-line-clamp: 3; margin-bottom: 4px; }
  .material-card-author { font-size: 12px; }
  .material-card-arrow { display: none; }
}
`;