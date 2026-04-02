import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "GLP-Planet конференция 2021 — GLP-Planet",
    description: "II Международная научная конференция GLP-Planet, 5–6 июля 2021 г., Санкт-Петербург",
};

const materials = [
    { author: "Макаров В.Г.", title: "GLP-PLANET", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/makarov-v.g..pdf" },
    { author: "Рождественский Д.А.", title: "РАЗВИТИЕ ТРЕБОВАНИЙ К ОРГАНИЗАЦИИ\n" +
            "И ПРОВЕДЕНИЮ GLP- ИССЛЕДОВАНИЙ В\n" +
            "ЕВРАЗИЙСКОМ ЭКОНОМИЧЕСКОМ СОЮЗЕ", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/rozhdestvenskij-d.a..pdf" },
    { author: "Javier Guillén", title: "Quality Systems and Animal\n" +
            "Welfare in Research", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/javier_guillen.pdf" },
    { author: "Тулегенова А.У.", title: "БИОЛОГИЧЕСКИЕ МЕТОДЫ\n" +
            "КОНТРОЛЯ КАЧЕСТВА\n" +
            "ЛЕКАРСТВЕННЫХ СРЕДСТВ\n" +
            "В ФАРМАКОПЕЕ ЕАЭС", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/tulegenova-a.u..pdf" },
    { author: "Енгалычева Г.Н. Болсуновская Ю.Р.", title: "Объем доклинических исследований\n" +
            "безопасности на разных этапах\n" +
            "разработки лекарственного препарата \n", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/engalycheva-g.n..pdf" },
    { author: "Шакарян М.К.", title: "РЕГУЛЯТОРНЫЕ\n" +
            "ИНСПЕКЦИИ САЙТОВ\n" +
            "ПРЕДКЛИНИЧЕСКИХ\n" +
            "ИССЛЕДОВАНИЙ", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/shakaryan-m.k..pdf" },
    { author: "Беспалов А.Ю.", title: "Инновационный подход к качеству\n" +
            "нерегулируемых доклинических\n" +
            "исследований", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/bespalov-a.yu..pdf" },
    { author: "Lars F.M.", title: "Scientific advantages of using GM in biomedical research", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/lars-f.m._scientific-advantages-of-using-gm-in-biomedical-research.pdf" },
    { author: "Галагудза М.М.", title: "Валидность и воспроизводимость результатов\n" +
            "преклинических исследований: пути выхода из\n" +
            "«трансляционного тупика»", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/galagudza-m.m..pdf" },
    { author: "Lars F.M.", title: "Optimized housing and care of Göttingen Minipigs", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/lars-f.-m._optimized-housing-and-care-of-gottingen-minipigs.pdf" },
    { author: "Vismara G.", title: "Biosafety Standards and Common\n" +
            "Protocols in Lab Animal Science", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/vismara-g..pdf" },
    { author: "Ковалева Е.Л.", title: "Оце нка и контр оль\n" +
            "пр име с е й в ле ка р с тве нных\n" +
            "средствах", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/kovaleva-e.l..pdf" },
    { author: "Мурашев А.Н.", title: "НЕКЛИНИЧЕСКИЕ ИССЛЕДОВАНИЯ\n" +
            "ДЛЯ РЕГИСТРАЦИИ В ФОРМАТЕ\n" +
            "CTD И REACH", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/murashev-a.n..pdf" },
    { author: "Ниязов Р.Р.", title: "Правовая основа и\n" +
            "регуляторика GLP", pdf: "https://glp-planet.com/wp-content/uploads/2021/08/niyazov-r.r..pdf" },
    { author: "Чепур С.В.", title: "Изменения структуры органов и\n" +
            "тканей при инфекции\n" +
            "SARS-CoV-2: подходы к оценке\n" +
            "эффективности средств терапии", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/chepur-s.v..pdf" },
    { author: "Калинин Ю.", title: "Создание автоматизированной системы\n" +
            "диспетчеризации микроклимата\n" +
            "чистой зоны SPF вивария", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/kalinin_yurij.pdf" },
    { author: "Григорьев В.В.", title: "Комфортная среда обитания\n" +
            "для лабораторных животных\n" +
            "в клетках и вольерах\n" +
            "компании Roklet", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/grigorev-v.v..pdf" },
    { author: "Доротенко А.", title: "Особенности биостатистических методов в\n" +
            "доклинических исследованиях", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/dorotenko-a.-1.pdf" },
    { author: "Гущина С.В.", title: "Трудовые функции и оценка трудозатрат провизора в\n" +
            "организации, осуществляющей доклинические\n" +
            "исследования, в соответствии с профессиональным\n" +
            "стандартом ", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/gushhina-s.v..pdf" },
    { author: "Исакова-Сивак И.Н.", title: "Обоснование безвредности и\n" +
            "эффективности гриппозных вакцин\n" +
            "в доклинических исследованиях ", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/isakova_sivak-i.n..pdf" },
    { author: "Петров Д.В.", title: "Проект вивария –\n" +
            "этапы, вопросы,\n" +
            "соответствия", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/petrov-d.v..pdf" },
    { author: "Попов В.С.", title: "Обеспечивают ли стандартные животные\n" +
            "воспроизводимый результат?", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/popov-v.s.-2.pdf" },
    { author: "Макаренко И.Е.", title: "Приведение лаборатории доклинических исследований к\n" +
            "требованиям GLP: от планирования до получения\n" +
            "аккредитации", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/makarenko-i.e.-1.pdf" },
    { author: "Солодовников А.Г.", title: "Отсутствие системы GLP -\n" +
            "проблемы регистрации по\n" +
            "правилам ЕАЭС и ЕС", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/solodovnikov-a.g..pdf" },
    { author: "Акимова М.А.", title: "ОПЫТ ИСПОЛЬЗОВАНИЯ ОБОРУДОВАНИЯ И\n" +
            "ЭЛЕМЕНТОВ ОБОГАЩЕНИЯ СРЕДЫ ДЛЯ\n" +
            "СОБАК ПОРОДЫ БИГЛЬ", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/akimova-m.a..pdf" },
    { author: "Бондарева Е.Д.", title: "Влияние отклонения влажности воздуха на\n" +
            "здоровье лабораторных животных. Оценка\n" +
            "риска", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/bondareva-e.d..pdf" },
    { author: "Гремякова П.", title: "Особенности GLP аудита\n" +
            "биоаналитической\n" +
            "лаборатории.", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/gremyakova-p..pdf" },
    { author: "Ловат М.Л.", title: "Является ли использование\n" +
            "стандартных сухих кормов\n" +
            "гарантией\n" +
            "воспроизводимости данных у\n" +
            "грызунов?", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/lovat-m.l..pdf" },
    { author: "Флисюк Е.В.", title: "Актуальный подход к обучению\n" +
            "уполномоченных лиц по качеству\n" +
            "Евразийского экономического союза", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/flisyuk-e.v..pdf" },
    { author: "Ковалева М.А.", title: "ПОДВОДНЫЕ КАМНИ» ПРИ ПОДГОТОВКЕ\n" +
            "НАУЧНОГО ОТЧЕТА – С ЧЕМ МОЖЕТ\n" +
            "СТОЛКНУТЬСЯ УЧЕНЫЙ", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/kovaleva-m.a..pdf" },
    { author: "Ходько С.В.", title: "Реализация программы повышения квалификации в\n" +
            "соответствии с профессиональным стандартом:\n" +
            "«Специалист по промышленной фармации в области\n" +
            "исследований лекарственных средств»", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/hodko-s.v..pdf" },
    { author: "Шохин И.Е.", title: "GLP в биоаналитической\n" +
            "лаборатории: надлежащая и\n" +
            "ненадлежащая практика", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/shohin-i..pdf" },
    { author: "Торопова Я.Г. Розова И.О.", title: "Опыт реализации образовательных программ\n" +
            "в сфере доклинических исследований\n" +
            "в ФГБУ «НМИЦ им В.А. Алмазова» Минздрава России", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/toropova-ya.g..pdf" },
    { author: "Попов В.С. Кушнир Е.А.", title: "Учебный курс для исследователей, работающих с лабораторными животными", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/popov-v.s.-3.pdf" },
    { author: "Ивкин Д.Ю.", title: "Доклинические исследования от\n" +
            "студенческой скамьи к кадрам высшей\n" +
            "категории", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/ivkin-d.yu..pdf" },
    { author: "Муразов Я.Г.", title: "Доклинические испытания перфузионных технологий: дьявол в\n" +
            "деталях", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/murazov-ya.g..pdf" },
    { author: "Шипаева Е.В.", title: "Трансляционные аспекты\n" +
            "использования данных\n" +
            "доклинических исследований", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/shipaeva-e.v..pdf" },
    { author: "Макарова М.Н.", title: "ПРОБЛЕМЫ АНЕСТЕЗИИ ЭКСПЕРИМЕНТАЛЬНЫХ\n" +
            "ЖИВОТНЫХ", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/makarova-m.n..pdf" },
    { author: "Саяхов Р.", title: "Предсказательная токсикология с использованием (Q) SAR: эффективное\n" +
            "использование различных моделей для разнообразных токсических\n" +
            "эффектов", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/sayahov-r..pdf" },
    { author: "Зайцева М.А.", title: "Эволюция требований к качеству\n" +
            "доклинических исследований на примере\n" +
            "внедрения риск-ориентированного подхода\n" +
            "при планировании инспекций исследования\n" +
            "со стороны службы качества", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/zajczeva-m.a..pdf" },
    { author: "Амстиславская Т.Г. Белова А.С.", title: "Моделирование психопатологий\n" +
            "на зебраданио:\n" +
            "черепно-мозговая травма", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/amstislavskaya-t.g..pdf" },
    { author: "Карал-оглы Д.Д.", title: "Лабораторные приматы\n" +
            "в медико-биологических\n" +
            "исследованиях", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/karal-ogly-d.d..pdf" },
    { author: "Ильинский Н.С.", title: "Исследование токсических поражений\n" +
            "периферической нервной системы:\n" +
            "интерпретация и трансляция экспериментальных данных", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/ilinskij-n.s..pdf" },
    { author: "Устюгов А.А.", title: "Стратегия поиска препаратов для лечения\n" +
            "нейродегенеративных заболеваний на\n" +
            "основе трансгенных животных моделей\n" +
            "протеинопатий", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/ustyugov-a.a..pdf" },
    { author: "Гущин Я.А.", title: "Особенности проведения\n" +
            "патоморфологического исследования\n" +
            "лабораторных животных (на примере мыши) в\n" +
            "рамках Рекомендации ЕЭК №10", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/gushhin-ya.a..pdf" },
    { author: "Ковалева М.А.", title: "ЖУРНАЛ «ЛАБОРАТОРНЫЕ\n" +
            "ЖИВОТНЫЕ ДЛЯ НАУЧНЫХ\n" +
            "ИССЛЕДОВАНИЙ»", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/kovaleva-m.a._zhurnal.pdf" },
    { author: "Литвинова Е.А.", title: "История становления и развития\n" +
            "мониторинга здоровья\n" +
            "лабораторных животных\n" +
            "в вивариях РФ", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/litvinova-e.a..pdf" },
    { author: "Кушнир Е.А.", title: "ОЦЕНКА СТЕПЕНИ ТЯЖЕСТИ ПРОЦЕДУР,\n" +
            "ПРОВОДИМЫХ НА ЛАБОРАТОРНЫХ ЖИВОТНЫХ", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/kushnir-e.a..pdf" },
    { author: "Салминьш Д.", title: "Новая линия ИВК-EMERALD", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/salminsh-d..pdf" },
    { author: "Акимов Д.Ю.", title: "РИСК-ОРИЕНТИРОВАННЫЙ ПОДХОД К\n" +
            "МОНИТОРИНГУ ЗДОРОВЬЯ\n" +
            "ЛАБОРАТОРНЫХ ПРИМАТОВ", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/akimov-d.yu..pdf" },
    { author: "Rogers A.", title: "OECD guidelines and GLP compliance for\n" +
            "inhalation toxicological studies", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/rogers-a..pdf" },
    { author: "Александров А.В.", title: "GLP-инжиниринг : от проекта до обслуживания", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/aleksandrov-a.v..pdf" },
    { author: "Александров А.", title: "Доклиническая разработка генотерапевтических препаратов", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/aleksandrov-a..pdf" },
    { author: "Васютина М.", title: "Laboratory animals health monitoring:\n" +
            "from Danio Rerio to mini-pigs\n", pdf: "https://glp-planet.com/wp-content/uploads/2021/09/vasyutina-m_health-monitoring.pdf" },
    { author: "Фальковский И.В.", title: "Особенности взаимодействия заинтересованных сторон при создании\n" +
            "контрольных и исследовательских лабораторий.", pdf: "https://glp-planet.com/wp-content/uploads/2021/07/falkovskij-i.v..pdf" },
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
                        <div className="conf-divider" style={{ marginBottom: 40 }} />
                        <div className="materials-grid">
                            {materials.map((m, i) => (
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

                /* Materials section */
                .conf-materials {
                    padding: 80px 48px 100px;
                    background: #fff;
                }
                .conf-materials .conf-section-title { color: var(--primary); margin-bottom: 16px; }
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
                    .conf-sponsors { padding: 60px 32px; }
                    .conf-materials { padding: 60px 32px 80px; }
                    .materials-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 900px) {
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
                    .conf-section-title { font-size: 24px; }
                    .materials-grid { grid-template-columns: 1fr; gap: 10px; }
                    .material-card { padding: 22px 20px; min-height: auto; }
                }
            `}</style>
        </>
    );
}