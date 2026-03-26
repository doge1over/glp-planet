import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "GLP-Planet конференция 2025 — GLP-Planet",
    description: "VI Международная научно-практическая конференция GLP-Planet совместно с RUS-Lasa, 2–4 июля 2025 г., Санкт-Петербург",
};

const BASE = "https://glp-planet.com/wp-content/uploads/2025/07";

const materials = [
    { author: "Крышень К.Л.",                       href: `${BASE}/kryshen_prezentacziya.pdf` },
    { author: "Рождественский Д.А.",                 href: `${BASE}/rozhdestvenskij_prezentacziya.pdf` },
    { author: "Таубэ А.А.",                          href: `${BASE}/taube_prezentacziya.pdf` },
    { author: "Устюгов А.А.",                        href: `${BASE}/ustyugov_prezentacziya.pdf` },
    { author: "Дейкин А.В.",                         href: `${BASE}/dejkin_prezentacziya.pdf` },
    { author: "Тулупова Е.В.",                       href: `${BASE}/tulupova_prezentacziya.pdf` },
    { author: "Стрелкова М.В.",                      href: `${BASE}/strelkova_prezentacziya.pdf` },
    { author: "Рябцев С.Е.",                         href: `${BASE}/ryabczev_prezentacziya.pdf` },
    { author: "Попова М.О.",                         href: `${BASE}/popova_prezentacziya.pdf` },
    { author: "Плешков Д.Н.",                        href: `${BASE}/pleshkov_prezentacziya.pdf` },
    { author: "Платонова О.И.",                      href: `${BASE}/platonova_prezentacziya.pdf` },
    { author: "Лукинов Ю.А.",                        href: `${BASE}/lukinov_prezentacziya.pdf` },
    { author: "Васютина М.Л.",                       href: `${BASE}/vasyutina_prezentacziya.pdf` },
    { author: "Павлов А.Ю.",                         href: `${BASE}/pavlov_prezentacziya.pdf` },
    { author: "Салминьш Д.А.",                       href: `${BASE}/salminsh_prezentacziya.pdf` },
    { author: "Косоногов И.И.",                      href: `${BASE}/kosonogov_prezentacziya.pdf` },
    { author: "Кильдибеков К.Ю.",                    href: `${BASE}/kildibekov_prezentacziya.pdf` },
    { author: "Волков А.В.",                         href: `${BASE}/volkov_prezentacziya.pdf` },
    { author: "Варнакова Л.А.",                      href: `${BASE}/varnakova_prezentacziya.pdf` },
    { author: "Сапрыкина",                           href: `${BASE}/saprykina_prezentacziya.pdf` },
    { author: "Рыжков И.А.",                         href: `${BASE}/ryzhkov_prezentacziya.pdf` },
    { author: "Носова",                              href: `${BASE}/nosova_prezentacziya.pdf` },
    { author: "Мазукина Е.В.",                       href: `${BASE}/mazukina_prezentacziya.pdf` },
    { author: "Литвинов",                            href: `${BASE}/litvinov_titul.jpg` },
    { author: "Кукушкина",                           href: `${BASE}/kukushkina_prezentacziya.pdf` },
    { author: "Карачевцева Д.М.",                    href: `${BASE}/karachevczeva_prezentacziya.pdf` },
    { author: "Ефимова",                             href: `${BASE}/efimova_prezentacziya.pdf` },
    { author: "Селиванова",                          href: `${BASE}/selivanova_prezentacziya.pdf` },
    { author: "Трещалин",                            href: `${BASE}/treshhalin_prezentacziya.pdf` },
    { author: "Фонова",                              href: `${BASE}/fonova_prezentacziya.pdf` },
    { author: "Головина",                            href: `${BASE}/golovina_prezentacziya.pdf` },
    { author: "Родионова К.Н.",                      href: `${BASE}/rodionova_prezentacziya.pdf` },
    { author: "Бородина А.Ю.",                       href: `${BASE}/borodina_prezentacziya.pdf` },
    { author: "Акимов Д.Ю.",                         href: `${BASE}/akimov_prezentacziya.pdf` },
    { author: "Шохин",                               href: `${BASE}/shohin_prezentacziya.pdf` },
    { author: "Ходько С.В.",                         href: `${BASE}/hodko_prezentacziya.pdf` },
    { author: "Торопова Я.Г.",                       href: `${BASE}/toropova_prezentacziya.pdf` },
    { author: "Тернинко",                            href: `${BASE}/terninko_prezentacziya.pdf` },
    { author: "Суханов И.М.",                        href: `${BASE}/suhanov_prezentacziya.pdf` },
    { author: "Сорокина Е.Ю., Солодовников А.Г.",   href: `${BASE}/sorokina_solodovnikov_prezentacziya.pdf` },
    { author: "Попов В.С.",                          href: `${BASE}/popov_prezentacziya.pdf` },
    { author: "Полозкова",                           href: `${BASE}/polozkova_prezentacziya.pdf` },
    { author: "Милутинович К.С.",                    href: `${BASE}/milutinovich_prezentacziya.pdf` },
    { author: "Макарова М.Н.",                       href: `${BASE}/makarova_prezentacziya.pdf` },
    { author: "Майер А.И.",                          href: `${BASE}/majer_prezentacziya.pdf` },
    { author: "Лужанин В.Г.",                        href: `${BASE}/luzhanin_prezentacziya.pdf` },
    { author: "Комогоров",                           href: `${BASE}/komogorov_prezentacziya.pdf` },
    { author: "Ковалева",                            href: `${BASE}/kovaleva_prezentacziya.pdf` },
    { author: "Гущин",                               href: `${BASE}/gushhin_prezentacziya.pdf` },
    { author: "Гиба И.С.",                           href: `${BASE}/giba_prezentacziya.pdf` },
    { author: "Багаева Н.С.",                        href: `${BASE}/bagaeva_prezentacziya.pdf` },
    { author: "Авдеева",                             href: `${BASE}/avdeeva_prezentacziya.pdf` },
    { author: "Лычева Н.А.",                         href: `${BASE}/lycheva_prezentacziya.pdf` },
    { author: "Денисова",                            href: `${BASE}/denisova_prezentacziya.pdf` },
    { author: "Исакова-Сивак",                       href: `${BASE}/isakova-sivak_prezentacziya.pdf` },
    { author: "Кательникова А.Е.",                   href: `${BASE}/katelnikova_prezentacziya-1.pdf` },
    { author: "Ладыгина",                            href: `${BASE}/ladygina_prezentacziya.pdf` },
    { author: "Матуа А.З.",                          href: `${BASE}/matua_prezentacziya.pdf` },
    { author: "Сазонова",                            href: `${BASE}/sazonova_prezentacziya.pdf` },
    { author: "Сивак",                               href: `${BASE}/sivak_prezentacziya.pdf` },
    { author: "Стосман",                             href: `${BASE}/stosman_prezentacziya.pdf` },
    { author: "Суханова",                            href: `${BASE}/suhanova_prezentacziya.pdf` },
    { author: "Штро",                                href: `${BASE}/shtro_prezentacziya.pdf` },
    { author: "Гордейчук",                           href: `${BASE}/gordejchuk_prezentacziya.pdf` },
    { author: "Мун В.В.",                            href: `${BASE}/mun_prezentacziya.pdf` },
    { author: "Егорихина М.Н.",                      href: `${BASE}/egorihina_prezentacziya.pdf` },
    { author: "Григорьева О.А.",                     href: `${BASE}/grigoreva_prezentacziya.pdf` },
    { author: "Зайцева М.А.",                        href: `${BASE}/zajczeva_prezentacziya.pdf` },
    { author: "Монакова А.О.",                       href: `${BASE}/monakova_prezentacziya.pdf` },
    { author: "Комаров",                             href: `${BASE}/komarov_prezentacziya.pdf` },
    { author: "Чернышенко",                          href: `${BASE}/chernyshenko_prezentacziya.pdf` },
    { author: "Щелгачева-Арчакова",                  href: `${BASE}/shhelgacheva-archakova_prezentacziya.pdf` },
    { author: "Фаустова",                            href: `${BASE}/faustova_prezentacziya.pdf` },
    { author: "Михайлова",                           href: `${BASE}/mihajlova_prezentacziya.pdf` },
    { author: "Устенко Ж.Ю.",                        href: `${BASE}/ustenko_prezentacziya.pdf` },
    { author: "Косман",                              href: `${BASE}/kosman_prezentacziya.pdf` },
    { author: "Валуев И.А.",                         href: `${BASE}/valuev_prezentacziya.pdf` },
    { author: "Зелинская",                           href: `${BASE}/zelinskaya_prezentacziya.pdf` },
    { author: "Смирягин",                            href: `${BASE}/smiryagin_prezentacziya.pdf` },
    { author: "Старшинова А.А.",                     href: `${BASE}/starshinova_prezentacziya.pdf` },
    { author: "Князева (Федорова) И.В.",              href: `${BASE}/knyazevafedorova_prezentacziya.pdf` },
    { author: "Бикчурина Е.В.",                      href: `${BASE}/bikchurina_prezentacziya.pdf` },
    { author: "Савостьянова Е.В.",                   href: `${BASE}/savostyanova_prezentacziya.pdf` },
    { author: "Кательникова А.Е.", title: "Доклад (2)", href: `${BASE}/katelnikova_prezentacziya.pdf` },
    { author: "Углева Е.М.",                         href: `${BASE}/ugleva_prezentacziya.pdf` },
    { author: "Павлова А.Н.",                        href: `${BASE}/pavlova_prezentacziya.pdf` },
    { author: "Шалов",                               href: `${BASE}/shalov_prezentacziya.pdf` },
    { author: "Михель А.В.",                         href: `${BASE}/mihel_prezentacziya.pdf` },
    { author: "Диффинэ Е.А.",                        href: `${BASE}/diffine_prezentacziya.pdf` },
    { author: "Есенеева Я.К.",                       href: `${BASE}/eseneeva_prezentacziya.pdf` },
    { author: "Чалышева",                            href: `${BASE}/chalysheva_prezentacziya.pdf` },
    { author: "Торкунова Е.В.",                      href: `${BASE}/torkunova_prezentacziya.pdf` },
    { author: "Снежкова Ю.В.",                       href: `${BASE}/snezhkova_prezentacziya.pdf` },
    { author: "Маршан",                              href: `${BASE}/marshan_prezentacziya.pdf` },
    { author: "Валлин Е.Ж.",                         href: `${BASE}/vallin_prezentacziya.pdf` },
    { author: "Карнакова П.К.",                      href: `${BASE}/karnakova_prezentacziya.pdf` },
    { author: "Домнина Т.Н.",                        href: `${BASE}/domnina_prezentacziya.pdf` },
    { author: "Семушина",                            href: `${BASE}/semushina_prezentacziya.pdf` },
    { author: "Наделяева",                           href: `${BASE}/nadelyaeva_prezentacziya.pdf` },
    { author: "Кушнир",                              href: `${BASE}/kushnir_prezentacziya.pdf` },
    { author: "Казакова",                            href: `${BASE}/kazakova_prezentacziya.pdf` },
    { author: "Брызгалина",                          href: `${BASE}/bryzgalina_prezentacziya.pdf` },
    { author: "Белозерцева",                         href: `${BASE}/belozerczeva_prezentacziya.pdf` },
    { author: "Андяржанова",                         href: `${BASE}/andyarzhanova_-prezentacziya.pdf` },
    { author: "Акимов Д.Ю.", title: "Доклад (2)",   href: `${BASE}/akimov_prezentacziya-1.pdf` },
    { author: "Зиновьев С.В.",                       href: `${BASE}/zinovev_prezentacziya.pdf` },
    { author: "Воротилов",                           href: `${BASE}/vorotilov_prezentacziya.pdf` },
    { author: "Абзалов",                             href: `${BASE}/abzalov_prezentacziya.pdf` },
    { author: "Карпов",                              href: `${BASE}/karpov_prezetacziya.pdf` },
    { author: "Качалов",                             href: `${BASE}/kachalov_prezentacziya.pdf` },
    { author: "Кузьмина",                            href: `${BASE}/kuzmina_prezentacziya.pdf` },
    { author: "Матичин А.А.",                        href: `${BASE}/matichin_prezentacziya.pdf` },
    { author: "Мизгирев",                            href: `${BASE}/mizgirev_prezentacziya.pdf` },
    { author: "Муразов Я.Г.",                        href: `${BASE}/murazov_prezentacziya.pdf` },
    { author: "Мурашова",                            href: `${BASE}/murashova_prezentacziya.pdf` },
    { author: "Пашинская",                           href: `${BASE}/pashinskaya_prezentacziya.pdf` },
    { author: "Подьячева",                           href: `${BASE}/podyacheva_prezentacziya.pdf` },
    { author: "Пугач В.А.",                          href: `${BASE}/pugach_prezentacziya.pdf` },
    { author: "Смирнова",                            href: `${BASE}/smirnova_prezentacziya.pdf` },
    { author: "Тильченко Д.А.",                      href: `${BASE}/tilchenko_prezentacziya.pdf` },
    { author: "Шамаев Н.Д.",                         href: `${BASE}/shamaev_prezentacziya.pdf` },
    { author: "Шумега",                              href: `${BASE}/shumega_prezentacziya.pdf` },
    { author: "Ярушкина, Пунин",                     href: `${BASE}/yarushkina_punin_prezentacziya.pdf` },
    { author: "Гоглева",                             href: `${BASE}/gogleva_prezentacziya.pdf` },
    { author: "Корочкина",                           href: `${BASE}/korochkina_prezentacziya.pdf` },
    { author: "Акимова М.А.",                        href: `${BASE}/akimova_prezentacziya.pdf` },
    { author: "Бабенко",                             href: `${BASE}/babenko_prezentacziya.pdf` },
    { author: "Вербицкая Е.В.",                      href: `${BASE}/verbiczkaya_prezentacziya.pdf` },
    { author: "Каранина",                            href: `${BASE}/karanina_prezentacziya.pdf` },
    { author: "Крепкова",                            href: `${BASE}/krepkova_prezentacziya.pdf` },
    { author: "Пастухова",                           href: `${BASE}/pastuhova_prezentacziya.pdf` },
    { author: "Перебоева",                           href: `${BASE}/pereboeva_prezentacziya.pdf` },
    { author: "Филиппова",                           href: `${BASE}/filippova_prezentacziya.pdf` },
    { author: "Хоцькина",                            href: `${BASE}/hoczkina_prezentacziya.pdf` },
    { author: "Потапова",                            href: `${BASE}/potapova_prezentacziya.pdf` },
];

export default function Conference2025Page() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>

                {/* Hero */}
                <section className="c25-hero">
                    <div className="c25-container">
                        <div className="c25-label">VI Конференция · 2025</div>
                        <h1 className="c25-hero-title">GLP-Planet конференция 6.0</h1>
                        <div className="c25-hero-meta">
                            <span>2–4 июля 2025</span>
                            <span className="c25-dot">·</span>
                            <span>г. Санкт-Петербург, Россия</span>
                        </div>
                    </div>
                </section>

                {/* О конференции */}
                <section className="c25-about">
                    <div className="c25-container">
                        <h2 className="c25-section-title">О конференции</h2>
                        <div className="c25-divider" />
                        <div className="c25-text">
                            <p>
                                02.07 — 04.07.2025 г. в Санкт-Петербурге прошла{" "}
                                <strong>
                                    VI Международная научно-практическая конференция GLP-PLANET,
                                    совместно с Русской ассоциацией специалистов по лабораторным
                                    животным (Rus-LASA)
                                </strong>
                                . В работе конференции приняли участие специалисты
                                научно-исследовательских институтов и испытательных центров, ВУЗов,
                                фармацевтических компаний, питомников, поставщики оборудования и
                                расходных материалов, независимые эксперты и представители
                                регуляторных органов из{" "}
                                <strong>34 городов России</strong>, а также Абхазии, Беларуси,
                                Грузии, Китая, Кубы, Сербии, Узбекистана и ЮАР.
                                GLP-PLANET собрала более <strong>500 человек</strong>. За три дня
                                участники могли посетить{" "}
                                <strong>13 сессий и 9 мастер-классов</strong>.
                            </p>
                            <p>
                                По результатам голосования состоялось награждение лучших лекторов.
                            </p>
                            <p>
                                <strong>
                                    Организационный комитет выражает благодарность спонсорам,
                                    лекторам и участникам. До встречи в следующем году!
                                </strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Материалы */}
                <section className="c25-materials">
                    <div className="c25-container">
                        <h2 className="c25-section-title c25-section-title--dark">
                            Материалы конференции
                        </h2>
                        <div className="c25-divider c25-divider--dark" />
                        <div className="c25-grid">
                            {materials.map((m, i) => (
                                <a
                                    key={i}
                                    href={m.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="c25-card"
                                >
                                    <div className="c25-card-thumb">
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                            <polyline points="14,2 14,8 20,8" />
                                            <line x1="16" y1="13" x2="8" y2="13" />
                                            <line x1="16" y1="17" x2="8" y2="17" />
                                        </svg>
                                        <span className="c25-card-pdf">PDF</span>
                                    </div>
                                    <div className="c25-card-info">
                                        <div className="c25-card-author">{m.author}</div>
                                        <div className="c25-card-title">{m.title || "Доклад"}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style>{`
        /* ── Layout ── */
        .c25-container { max-width: 1000px; margin: 0 auto; }

        /* ── Hero ── */
        .c25-hero {
          padding: 140px 48px 60px;
          background: linear-gradient(155deg, #080C24 0%, #141B4D 45%, #192258 100%);
        }
        .c25-label {
          font-size: 11px; color: #6B82C4; font-weight: 600;
          text-transform: uppercase; letter-spacing: 3px; margin-bottom: 12px;
        }
        .c25-hero-title {
          font-size: 42px; font-weight: 700; color: #fff;
          line-height: 1.2; margin-bottom: 16px;
        }
        .c25-hero-meta {
          font-size: 15px; color: rgba(255,255,255,0.4);
          display: flex; align-items: center; gap: 0;
        }
        .c25-dot { margin: 0 10px; color: #6B82C4; }

        /* ── About ── */
        .c25-about {
          padding: 80px 48px;
          background: linear-gradient(155deg, #0D1330 0%, #141B4D 50%, #1A2460 100%);
        }
        .c25-section-title {
          font-size: 28px; font-weight: 700; color: #fff; margin-bottom: 16px;
        }
        .c25-divider {
          width: 40px; height: 3px; background: var(--secondary, #4964A2);
          border-radius: 1px; margin-bottom: 32px;
        }
        .c25-text { color: rgba(255,255,255,0.55); font-size: 15px; line-height: 1.85; }
        .c25-text p { margin-bottom: 16px; }
        .c25-text strong { color: rgba(255,255,255,0.8); }

        /* ── Materials ── */
        .c25-materials { padding: 80px 48px 100px; background: #fff; }
        .c25-section-title--dark { color: var(--primary, #141B4D); }
        .c25-divider--dark { background: var(--secondary, #4964A2); }

        .c25-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .c25-card {
          display: block; text-decoration: none;
          border: 1px solid rgba(73,100,162,0.1);
          border-radius: 6px; overflow: hidden;
          transition: all 0.4s cubic-bezier(0.33,1,0.68,1);
        }
        .c25-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(20,27,77,0.1);
          border-color: rgba(73,100,162,0.2);
        }

        .c25-card-thumb {
          aspect-ratio: 1.33;
          background: #F4F6FB;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 8px; color: #8A9CC4;
        }
        .c25-card-pdf {
          font-size: 10px; font-weight: 700;
          letter-spacing: 2px; color: #8A9CC4;
        }

        .c25-card-info { padding: 14px 16px; }
        .c25-card-author {
          font-size: 13px; font-weight: 700;
          color: var(--primary, #141B4D); margin-bottom: 4px;
        }
        .c25-card-title { font-size: 11px; color: #888; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .c25-hero   { padding: 120px 32px 48px; }
          .c25-about  { padding: 60px 32px; }
          .c25-materials { padding: 60px 32px 80px; }
          .c25-hero-title { font-size: 34px; }
        }
        @media (max-width: 900px) {
          .c25-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .c25-hero { padding: 100px 20px 40px; }
          .c25-hero-title { font-size: 28px; }
          .c25-hero-meta { flex-direction: column; align-items: flex-start; gap: 4px; font-size: 13px; }
          .c25-dot { display: none; }
          .c25-about  { padding: 48px 20px; }
          .c25-materials { padding: 40px 20px 60px; }
          .c25-grid { grid-template-columns: 1fr; }
          .c25-section-title { font-size: 24px; }
          .c25-text { font-size: 14px; }
        }
      `}</style>
        </>
    );
}
