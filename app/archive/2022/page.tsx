import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "GLP-Planet конференция 2022 — GLP-Planet",
    description: "III Международная научная конференция GLP-Planet, 30 июня – 1 июля 2022 г., Санкт-Петербург",
};

const materials = [
    { author: "Соттаева М.М.", title: "Преемственность и последовательность GxP в ЕАЭС", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/9-00-sottaeva-m.m.-glp-konf-3-gils-i-np-2021_rus_16x9.pdf" },
    { author: "Шохин И., Колганова М.", title: "Вопросы GLP в исследованиях биотехнологических ЛС: комплексный подход к анализу", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/14-55-shohin-i-kolganova.pdf" },
    { author: "Завьялов Е.Л.", title: "Животные из природных популяций как новые модели для медико-биологических исследований", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/zavyalov-el.pdf" },
    { author: "Мурашёв А.Н.", title: "Технологический суверенитет и неклинические исследования лекарственных средств", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/murashev-an.pdf" },
    { author: "Макарова М.Н.", title: "Методика поиска альтернативных методов исследования", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/makarova-mn.pdf" },
    { author: "Енгалычева Г.Н.", title: "Комплексная оценка безопасности лекарственного препарата с использованием критериев значимости", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/engalycheva-gn.pdf" },
    { author: "Попов В.С.", title: "Что надо понимать под фенотипом в доклинических исследованиях?", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/popov-vs.pdf" },
    { author: "Тулегенова А.У.", title: "Фармакопейные подходы к оценке качества вакцин против COVID-19", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/tulegenova-a.u..pdf" },
    { author: "Шнаукшта В.С.", title: "Опыт организации и проведения исследований на соответствие требованиям GLP", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/shnaukshta-vs.pdf" },
    { author: "Ситко Т.И.", title: "Становление системы надлежащих фармацевтических практик (GxP) в Республике Беларусь", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/sitko-ti.pdf" },
    { author: "Рождественский Д.А.", title: "Система надлежащих практик Союза: организация, преемственность и взаимодействие", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/rozhdestvenskij-da.pdf" },
    { author: "Гордейчук И.", title: "Модели для изучения эффективности и безопасности профилактических вакцин против COVID-19", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/gordejchuk-i.pdf" },
    { author: "Макаров В.Г.", title: "Актуальные вопросы доклинических исследований в Российской Федерации", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/makarov-v.g..pdf" },
    { author: "Устюгов А.А.", title: "Использование животных моделей для оценки эффективности препаратов для лечения нейродегенеративных заболеваний", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/ustyugov-aa.pdf" },
    { author: "Абрамович Р.А.", title: "Современные требования к фармацевтической разработке биологических препаратов", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/abramovich-ra.pdf" },
    { author: "Флисюк Е.В.", title: "Актуальные вопросы подготовки кадров для надлежащей фармацевтической разработки", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/flisyuk-ev.pdf" },
    { author: "Матвеев А.В.", title: "Роль доклинических исследований для подготовки документов по фармаконадзору", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/matveev-av.pdf" },
    { author: "Гришина Ю.И.", title: "Орган инспекции ФБУ «ГИЛС и НП»: структура, функции, возможности и перспективы", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/grishina-yui.pdf" },
    { author: "Чудинова Е.С.", title: "Проблемы организации и обеспечения работы испытательного центра GLP в бюджетном учреждении науки", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/chudinova-es.pdf" },
    { author: "Дейкин А.", title: "Мыши – модель заражения коронавирусной инфекцией для биомедицинских исследований", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/dejkin-a.pdf" },
    { author: "Крышень К.Л.", title: "Результаты доклинического исследования субъединичной рекомбинантной вакцины на основе N-белка вируса SARS-CoV-2", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/kryshen-kl.pdf" },
    { author: "Исакова-Сивак И.Н.", title: "Разработка и доклиническое изучение бивалентной вакцины против SARS-CoV-2 и гриппа", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/isakova-sivak-in.pdf" },
    { author: "Гремякова П.В.", title: "Программа обучения сотрудников лаборатории как важный элемент GLP", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/gremyakova-pv.pdf" },
    { author: "Косман В.М.", title: "Особенности оценки биоэквивалентности низкомолекулярных гепаринов", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/kosman-vm.pdf" },
    { author: "Карлина М.В.", title: "Взаимосвязь фармакокинетики и фармакодинамики с фармацевтической разработкой", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/karlina-mv.pdf" },
    { author: "Терненко И.И.", title: "Лаборатории контрольного анализа. Проблемы и перспективы", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/terninko-ii.pdf" },
    { author: "Устенко Ж.Ю.", title: "Обеспечение качества в гистологической лаборатории", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/ustenko-zhyu.pdf" },
    { author: "Родионова Н.В.", title: "Внутрилабораторный контроль", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/rodionova-nv.pdf" },
    { author: "Гуляева Е.П.", title: "Инспекции исследований службой по обеспечению качества. Стандарты оценки качества выполнения исследования", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/gulyaeva-ep.pdf" },
    { author: "Кузнецова А.И.", title: "Качественные реакции для определения патологических показателей в моче лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/kuzneczova-ai.pdf" },
    { author: "Саканян К.М.", title: "Стандартные образцы и их роль в системе стандартизации и контроля качества лекарственных средств", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/sakanyan-karen-m.pdf" },
    { author: "Фальковский И.В.", title: "Опыт независимой экспертизы фармацевтических производств. Тенденции последних лет", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/falkovskij-iv.pdf" },
    { author: "Ловать М.Л.", title: "Сравнение влияния стандартных лабораторных диет и натуральных кормов на морфологические характеристики мышей", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/lovat-ml.pdf" },
    { author: "Акимов Д.Ю.", title: "Ветеринарное обеспечение в доклиническом центре", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/akimov-d.yu..pdf" },
    { author: "Акимова М.А.", title: "Критерии выбора среды обогащения для лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/akimova-ma.pdf" },
    { author: "Волков А.В.", title: "Надлежащее содержание лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/volkov-av.pdf" },
    { author: "Салминьш Д.", title: "Содержание биомоделей. Системный подход к выбору оборудования", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/salminsh-d.pdf" },
    { author: "Литвинова Е.А.", title: "Гликаны бактерий как паттерны формирования иммунологической толерантности при воспалительных заболеваниях кишечника", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/litvinova-ea.pdf" },
    { author: "Караль-Оглы Д.Д.", title: "Мониторинг вирусных и бактериальных инфекций лабораторных приматов ФГБНУ «НИИ МП»", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/karal-ogly-dd.pdf" },
    { author: "Добрянская С.С.", title: "Входной контроль лабораторных животных от аудита поставщика до передачи в эксперимент", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/dobryanskaya-ss.pdf" },
    { author: "Аверина О.А.", title: "Naked Mole Rats (Heterocephalus glaber) housing specifics in laboratory conditions", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/averina-oa.pdf" },
    { author: "Кушнир Е.А.", title: "Оценка степени тяжести процедур, проводимых на лабораторных животных. Теоретические и прикладные аспекты", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/kushnir-ea.pdf" },
    { author: "Усатов А.В.", title: "Задачи подготовки персонала к проведению современного эксперимента в области доклинических исследований", pdf: "https://glp-planet.com/wp-content/uploads/2022/08/usatov-av_08082022.pdf" },
    { author: "Фаустова Н.М.", title: "Дизайн экспериментов — вклад биохимических методов", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/faustova-nm-.pdf" },
    { author: "Мирошников М.В.", title: "Установление референтных интервалов биохимических и гематологических показателей лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/miroshnikov-mv.pdf" },
    { author: "Васютина М.Л.", title: "Референтные анатомо-физиологические значения биологических тест-систем", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/vasyutina-ml.pdf" },
    { author: "Гущин Я.А.", title: "Фоновая патология лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/gushhin-yaa.pdf" },
    { author: "Торопова Я.Г.", title: "Референсные значения в первичной документации, сопровождающей доклинические исследования", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/toropova-yag.pdf" },
    { author: "Ивкин Д.Ю.", title: "Регламентирование исследований фармакодинамики (модель, эффект, механизм действия)", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/ivkin-dyu.pdf" },
    { author: "Хан С.О.", title: "Витальные методы исследования как промежуточные точки в доклинических испытаниях на модели карликовых свиней", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/han-so.pdf" },
    { author: "Караваева А.В.", title: "Асептика, антисептика, дезинфекция, стерилизация в условиях экспериментально-биологических клиник (вивариев)", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/karavaeva-av.pdf" },
    { author: "Билялетдинова М.М.", title: "Этологическое тестирование и проведение тренингов лабораторных приматов", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/bilyaletdinova-mm-1.pdf" },
    { author: "Берёзкин В.А.", title: "Подходы к взятию крови у лабораторных карликовых свиней", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/berezkin-va.pdf" },
    { author: "Ковалёва М.А.", title: "ARRIVE как инструмент, позволяющий повысить качество отчёта о доклиническом исследовании", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/9-00-kovaleva-m.a._arrive.pdf" },
    { author: "Ильинский Н.С.", title: "Электронейромиография в токсикологическом эксперименте на грызунах", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/ilinskij-ns.pdf" },
    { author: "Ходько С.В.", title: "Критические фазы доклинических исследований", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/hodko-sv.pdf" },
    { author: "Матуа А.З.", title: "Сравнительно-возрастное исследование приматов", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/matua-az.pdf" },
    { author: "Корель А.В.", title: "Создание биорезорбируемого бактериального терапевтического комплекса для коррекции микробиоты кишечника", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/korel-av.pdf" },
    { author: "Галагудза М.М.", title: "Разновидности референсных интервалов при экспериментировании на животных", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/galagudza-mm.pdf" },
    { author: "Самохин А.Г.", title: "Биоразлагаемые гелевые носители в хирургии – перспективы и реалии", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/samohin-a.g.pdf" },
    { author: "Сергеева М.В.", title: "Опыт применения хлопковых крыс для моделирования РСВ инфекции и иммунопатологии", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/sergeeva-mv.pdf" },
    { author: "Рудько О.И.", title: "Разработка новой фармакологической модели мигрени на грызунах", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/rudko-oi.pdf" },
    { author: "Буренков П.В.", title: "Надлежащая практика благополучия животных в лабораторной среде, нужен ли такой стандарт?", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/burenkov-pv.pdf" },
    { author: "Покровский М.В.", title: "Дизайн доклинического исследования генотерапевтических препаратов миастении Миоши", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/pokrovskij-m.v.pdf" },
    { author: "Тюренков И.В.", title: "Успехи и неудачи разработки лекарственных препаратов для лечения нейродегенеративных заболеваний", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/tyurenkov-i.v.pdf" },
    { author: "Суханов И.М.", title: "Использование ARRIVE 2.0 в научно-исследовательской практике", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/suhanov-im.pdf" },
    { author: "Чалов С.Е.", title: "Системы оптической визуализации in vivo", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/chalov-se.pdf" },
    { author: "Бондарева Е.Д.", title: "Поение лабораторных животных. Особенности технологического процесса", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/bondareva-ed.pdf" },
    { author: "Кривцов А.", title: "Валидация ксенотрансплантов онко-образцов пациентов (PDX) как моделей для оценки противолейкемической эффективности", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/krivczov-a.pdf" },
    { author: "Ниязов Р.Р.", title: "Проблемы проф. образования в доклинических исследованиях", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/niyazov-rr.pdf" },
    { author: "Чалов С.Е.", title: "Системы оптической визуализации in vitro", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/chalov-s.e.pdf" },
    { author: "Саяхов Р.", title: "Assessing Carcinogenic Potency of Untested Nitrosamines", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/sayahov-r.pdf" },
    { author: "Шипаева Е.В.", title: "Оценка эффективности в доклинических исследованиях лекарственных средств для профилактики и лечения инфекции SARS-CoV-2", pdf: "https://glp-planet.com/wp-content/uploads/2022/07/shipaeva-ev.pdf" },
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

export default function Conference2022Page() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                <section className="conf-hero">
                    <div className="conf-container">
                        <div className="conf-hero-label">III Конференция · 2022</div>
                        <h1 className="conf-hero-title">GLP-Planet конференция 3.0</h1>
                        <div className="conf-hero-meta">
                            <span>30 июня – 1 июля 2022</span>
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
                            <p>30 июня – 1 июля 2022 г. в Санкт-Петербурге прошла <strong>III Международная научная конференция GLP-PLANET</strong>. В работе конференции приняли участие научно-исследовательские институты, фармацевтические компании, независимые эксперты и представители регуляторных органов из <strong>30 городов России</strong>, а также Абхазии, Армении, Беларуси, Казахстана и США. Конференция собрала более <strong>380 человек</strong>.</p>
                            <p>В рамках конференции прошли <strong>четыре мастер-класса</strong>: альтернативные методы исследования; оценка степени тяжести экспериментальных процедур; основы работы с оборудованием в зоне содержания лабораторных животных; предоперационное и послеоперационное содержание лабораторных животных.</p>
                            <p><strong>Мы благодарим всех участников мероприятия за активное участие и спонсоров — за поддержку конференции!</strong></p>
                        </div>
                        <a href="https://glp-planet.com/wp-content/uploads/2024/11/glp-planet_2022.pdf" target="_blank" rel="noopener noreferrer" className="conf-program-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /></svg>
                            Программа конференции
                        </a>
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
.conf-program-btn { display: inline-flex; align-items: center; gap: 10px; margin-top: 16px; padding: 14px 28px; background: rgba(73,100,162,0.15); border: 1px solid rgba(107,130,196,0.3); border-radius: 6px; color: #6B82C4; font-size: 14px; font-weight: 600; text-decoration: none; transition: all 0.25s; }
.conf-program-btn:hover { background: rgba(73,100,162,0.25); border-color: rgba(107,130,196,0.5); color: #fff; }
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
  .conf-about, .conf-materials { padding: 60px 32px; }
  .materials-grid { grid-template-columns: repeat(2, 1fr); }
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
  .conf-program-btn { padding: 12px 20px; font-size: 13px; width: 100%; justify-content: center; }
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