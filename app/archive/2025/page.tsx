import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "GLP-Planet конференция 2025 — GLP-Planet",
    description: "VI Международная научно-практическая конференция GLP-Planet совместно с RUS-Lasa, 2–4 июля 2025 г., Санкт-Петербург",
};

const BASE = "https://glp-planet.com/wp-content/uploads/2025/07";

const materials = [
    { author: "Крышень К.Л.", title: "Интерпретация данных токсикологических исследований лекарственных средств при определении дозы, не вызывающей видимых нежелательных эффектов (NOAEL)", pdf: `${BASE}/kryshen_prezentacziya.pdf` },
    { author: "Рождественский Д.А.", title: "Регулирование фармацевтической разработки высокотехнологичных лекарственных препаратов: доклинические аспекты", pdf: `${BASE}/rozhdestvenskij_prezentacziya.pdf` },
    { author: "Таубэ А.А.", title: "Регуляторные аспекты доклинических исследований генотерапевтических лекарственных препаратов", pdf: `${BASE}/taube_prezentacziya.pdf` },
    { author: "Устюгов А.А.", title: "Особенности доклинических исследований эффективности лекарственных средств с использованием трансгенных животных", pdf: `${BASE}/ustyugov_prezentacziya.pdf` },
    { author: "Дейкин А.В.", title: "Создание животных моделей заболеваний человека и их использование для доклинических исследований терапевтических субстанций на примере хронического воспаления", pdf: `${BASE}/dejkin_prezentacziya.pdf` },
    { author: "Тулупова Е.В.", title: "Автоматизированная информационная система организации и проведения процедуры аттестации уполномоченных лиц предприятий-производителей лекарственных средств в Республике Беларусь", pdf: `${BASE}/tulupova_prezentacziya.pdf` },
    { author: "Стрелкова М.", title: "Научно-исследовательское оборудование для работы с животными: новинки российского рынка, перспективы развития направления", pdf: `${BASE}/strelkova_prezentacziya.pdf` },
    { author: "Рябцев С.Е.", title: "LBControl: реактивы под контроль", pdf: `${BASE}/ryabczev_prezentacziya.pdf` },
    { author: "Попова М.О.", title: "Семь раз спроектируй, один раз построй: критические моменты при проектировании биоаналитического центра", pdf: `${BASE}/popova_prezentacziya.pdf` },
    { author: "Плешков Д.Н.", title: "Доступные компьютерные томографы высокого разрешения", pdf: `${BASE}/pleshkov_prezentacziya.pdf` },
    { author: "Платонова О.И.", title: "Легко или сложно получить лицензию на работу с микроорганизмами 3–4 группы патогенности?", pdf: `${BASE}/platonova_prezentacziya.pdf` },
    { author: "Лукинов Ю.А.", title: "Ввод в эксплуатацию. Обзор ключевых этапов строительства от подготовки до регистрации права собственности", pdf: `${BASE}/lukinov_prezentacziya.pdf` },
    { author: "Васютина М.Л.", title: "Эксплуатация технологического оборудования. Уровни ответственности / бюджетирование / риски", pdf: `${BASE}/vasyutina_prezentacziya.pdf` },
    { author: "Павлов А.Ю., Трубецкая К.", title: "Вентиляционное оборудование для вивариев и доклинических центров", pdf: `${BASE}/pavlov_prezentacziya.pdf` },
    { author: "Салминьш Д.А.", title: "Новинки оборудования для содержания животных", pdf: `${BASE}/salminsh_prezentacziya.pdf` },
    { author: "Косоногов И.И.", title: "Структурированные кабельные сети. Автоматизация и техническое обслуживание", pdf: `${BASE}/kosonogov_prezentacziya.pdf` },
    { author: "Кильдибеков К.Ю.", title: "Виварий как VIP отель для животных", pdf: `${BASE}/kildibekov_prezentacziya.pdf` },
    { author: "Волков А.В.", title: "Цифровой виварий GLP: как ИИ и автоматизация упрощают контроль процессов (умные системы мониторинга и управления)", pdf: `${BASE}/volkov_prezentacziya.pdf` },
    { author: "Варнакова Л.А., Калабушев С.Н., Рыжков И.А.,\n" +
            "Лапин К.Н., Фонова П. А.,\n" +
            "Самородов А.В., Корунас В.И., Крылов И.Д.", title: "Сравнение двух инструментальных методов оценки гемостаза у лабораторных грызунов", pdf: `${BASE}/varnakova_prezentacziya.pdf` },
    { author: "Сапрыкина", title: "Эндотрахеальный и интраназальный пути введения", pdf: `${BASE}/saprykina_prezentacziya.pdf` },
    { author: "Рыжков И.А.", title: "Анестезия лабораторных животных: актуальные проблемы и возможные пути их решения", pdf: `${BASE}/ryzhkov_prezentacziya.pdf` },
    { author: "Носова А.", title: "Анальгезия лабораторных животных при отсутствии опиоидов. Схемы и дозировки", pdf: `${BASE}/nosova_prezentacziya.pdf` },
    { author: "Мазукина Е.В.", title: "Гуманные экспериментальные точки", pdf: `${BASE}/mazukina_prezentacziya.pdf` },
    { author: "Кукушкина Е.С.", title: "Допустимые объемы введения в разные структуры глаза у лабораторных животных", pdf: `${BASE}/kukushkina_prezentacziya.pdf` },
    { author: "Карачевцева Д.М.", title: "Этические аспекты техники парентерального пути введения лабораторным животным", pdf: `${BASE}/karachevczeva_prezentacziya.pdf` },
    { author: "Ефимова Л.Р.", title: "Причины и лечение желудочно-кишечного стаза у лабораторных животных", pdf: `${BASE}/efimova_prezentacziya.pdf` },
    { author: "Селиванова Е.К., Мочалов С.В., Максименко С.В., Успаленко Н.И., Уханова Е.М., Воронцова А.И., Захарова А.А., Носс Н.С., Шайтанов В.М., Ким Н.Я., Сизюхин А.В.", title: "Использование добровольного перорального введения мышам в доклинических исследованиях как альтернативы внутрижелудочному зонду", pdf: `${BASE}/selivanova_prezentacziya.pdf` },
    { author: "Трещалин М.И., Полозкова В.А., Язерян С.Г., Переверзева Э.Р.", title: "Оценка эквивалентности внутривенного и внутрибрюшинного путей введения при проведении доклинических исследований эффективности и безопасности лекарственных веществ", pdf: `${BASE}/treshhalin_prezentacziya.pdf` },
    { author: "Фонова П.А.", title: "Методические и биоэтические аспекты инвазивного измерения артериального давления у лабораторных грызунов", pdf: `${BASE}/fonova_prezentacziya.pdf` },
    { author: "Головина А.А.", title: "Офтальмотонометрия для оценки фармакологической безопасности", pdf: `${BASE}/golovina_prezentacziya.pdf` },
    { author: "Родионова К.Н.", title: "Формирование субпопуляций Т-клеток памяти при иммунизации живой гриппозной вакциной", pdf: `${BASE}/rodionova_prezentacziya.pdf` },
    { author: "Бородина А.Ю.", title: "Гуманный подход к формированию внутрилабораторных норм на примере массовых коэффициентов внутренних органов животных", pdf: `${BASE}/borodina_prezentacziya.pdf` },
    { author: "Акимов Д.Ю.", title: "Влияние анестезии на качество доклинических исследований", pdf: `${BASE}/akimov_prezentacziya.pdf` },
    { author: "Шохин И.Е.", title: "Философия GLP-исследований: от плана до публикации", pdf: `${BASE}/shohin_prezentacziya.pdf` },
    { author: "Ходько С.В.", title: "Документальное сопровождение доклинического исследования in vivo в соответствии с принципами GLP", pdf: `${BASE}/hodko_prezentacziya.pdf` },
    { author: "Торопова Я.Г.", title: "Научные исследования и идеалы научных журналов. Есть ли компромисс?", pdf: `${BASE}/toropova_prezentacziya.pdf` },
    { author: "Тернинко И.И.", title: "Атрибуты качества лекарственных средств между «умными и красивыми»: GLP vs GMP", pdf: `${BASE}/terninko_prezentacziya.pdf` },
    { author: "Суханов И.М.", title: "(Пред)регистрация доклинических исследований. Камо грядеши", pdf: `${BASE}/suhanov_prezentacziya.pdf` },
    { author: "Сорокина Е.Ю., Солодовников А.Г.", title: "Критичные аспекты обращения с препаратами для проведения доклинических исследований", pdf: `${BASE}/sorokina_solodovnikov_prezentacziya.pdf` },
    { author: "Попов В.С.", title: "Поиск стандарта в пост-SPF исследованиях", pdf: `${BASE}/popov_prezentacziya.pdf` },
    { author: "Полозкова В.А., Трещалин М.И., Язерян С.Г., Переверзева Э.Р.", title: "Выбор биомоделей для доклинических исследований на животных", pdf: `${BASE}/polozkova_prezentacziya.pdf` },
    { author: "Милутинович К.С.", title: "Норма и патология у нокаутных мышей: проблема изменчивости симптомов в безмуциновой модели ВЗК", pdf: `${BASE}/milutinovich_prezentacziya.pdf` },
    { author: "Макарова М.Н.", title: "Оценка релевантности животных для исследования «Point-by-point»", pdf: `${BASE}/makarova_prezentacziya.pdf` },
    { author: "Майер А.И.", title: "Технологии неинвазивной визуализации in vivo в доклинических исследованиях", pdf: `${BASE}/majer_prezentacziya.pdf` },
    { author: "Лужанин В.Г.", title: "Пермский центр кластерного развития фармацевтической отрасли ПАРМА-Ф", pdf: `${BASE}/luzhanin_prezentacziya.pdf` },
    { author: "Комогоров А.М.", title: "Современное российское оборудование «AWTech» для проведения доклинических исследований", pdf: `${BASE}/komogorov_prezentacziya.pdf` },
    { author: "Ковалева М.", title: "Создание системы идентификации качества лабораторных животных", pdf: `${BASE}/kovaleva_prezentacziya.pdf` },
    { author: "Гущин Я.А.", title: "Технические реплики в гистологическом анализе (ARRIVE)", pdf: `${BASE}/gushhin_prezentacziya.pdf` },
    { author: "Гиба И.С.", title: "Подходы к оценке удовлетворённости спонсора исследования", pdf: `${BASE}/giba_prezentacziya.pdf` },
    { author: "Багаева Н.С.", title: "Статистический анализ исследований биоэквивалентности: сложности и пути их преодоления", pdf: `${BASE}/bagaeva_prezentacziya.pdf` },
    { author: "Авдеева О.И.", title: "Роль результатов доклинических исследований в формировании регистрационного досье. Опыт отечественной фармацевтической компании", pdf: `${BASE}/avdeeva_prezentacziya.pdf` },
    { author: "Лычева Н.А.", title: "Оценка напряженности иммунитета при введении комбинированной вакцины против гриппа и COVID-19 на мышах", pdf: `${BASE}/lycheva_prezentacziya.pdf` },
    { author: "Денисова О.В.", title: "Оценка специфической активности ботулинического токсина типа А", pdf: `${BASE}/denisova_prezentacziya.pdf` },
    { author: "Исакова-Сивак И.Н.", title: "Проблемы оценки иммуногенности Т-клеточных вакцин в доклинических исследованиях", pdf: `${BASE}/isakova-sivak_prezentacziya.pdf` },
    { author: "Кательникова А.Е.", title: "Подготовка программы доклинических исследований вакцинных препаратов", pdf: `${BASE}/katelnikova_prezentacziya-1.pdf` },
    { author: "Ладыгина М.Д.", title: "Моделирование повторных иммунизаций гриппозными вакцинами в экспериментах in vivo на мышах Balb/c", pdf: `${BASE}/ladygina_prezentacziya.pdf` },
    { author: "Матуа А.З.", title: "Доклинические исследования вакцинных препаратов на низших приматах разного вида и возраста", pdf: `${BASE}/matua_prezentacziya.pdf` },
    { author: "Сазонова М.М.", title: "Оценка иммуногенных свойств холодоадаптированных штаммов SARS-CoV-2 на сирийских хомяках", pdf: `${BASE}/sazonova_prezentacziya.pdf` },
    { author: "Сивак К.В.", title: "Результаты доклинического изучения безопасности противоопухолевых препаратов на основе живых непатогенных энтеровирусов", pdf: `${BASE}/sivak_prezentacziya.pdf` },
    { author: "Стосман К.И.", title: "Оценка иммунотоксичности и аллергенности интраназальной векторной вакцины против туберкулеза", pdf: `${BASE}/stosman_prezentacziya.pdf` },
    { author: "Суханова А.Л.", title: "Роль кислотной диссоциации в исследованиях иммуногенности биологических лекарственных препаратов", pdf: `${BASE}/suhanova_prezentacziya.pdf` },
    { author: "Штро А.А.", title: "Различные варианты моделирования гриппозной инфекции in vivo", pdf: `${BASE}/shtro_prezentacziya.pdf` },
    { author: "Гордейчук И.", title: "Применение приматов вида Callithrix jacchus для исследования долгосрочного созревания поствакцинального иммунного ответа", pdf: `${BASE}/gordejchuk_prezentacziya.pdf` },
    { author: "Мун В.В.", title: "Исследование регенеративного потенциала клеток эпителия Сети семенника для коррекции патологий мужской половой системы", pdf: `${BASE}/mun_prezentacziya.pdf` },
    { author: "Егорихина М.Н.", title: "In vitro методы исследования при разработке и оценке качества БМКП и высокотехнологичных лекарственных препаратов на основе соматических клеток", pdf: `${BASE}/egorihina_prezentacziya.pdf` },
    { author: "Григорьева О.А.", title: "Доклинические исследования препарата на основе везикулярной фракции секретома мезенхимных стволовых/стромальных клеток человека для лечения фиброза легких", pdf: `${BASE}/grigoreva_prezentacziya.pdf` },
    { author: "Зайцева М.А.", title: "Особенности доклинического изучения индивидуального биомедицинского клеточного продукта (БМКП)", pdf: `${BASE}/zajczeva_prezentacziya.pdf` },
    { author: "Монакова А.О.", title: "Разработка и валидация тест-системы для оценки биологической активности оригинального препарата на основе секретома мезенхимных стромальных клеток", pdf: `${BASE}/monakova_prezentacziya.pdf` },
    { author: "Комаров Т.Н.", title: "Фармакокинетические исследования биотехнологических препаратов, применяемых в терапии сахарного диабета: ИФА или ВЭЖХ, вот в чем вопрос…", pdf: `${BASE}/komarov_prezentacziya.pdf` },
    { author: "Чернышенко В.С.", title: "Сравнение двух методов оценки иммуногенности биологических препаратов на основе моноклональных антител на примере препарата с МНН пембролизумаб", pdf: `${BASE}/chernyshenko_prezentacziya.pdf` },
    { author: "Щелгачева Д.С., Арчакова О.А.", title: "Валидация коммерческих ИФА-систем при проведении исследований фармакокинетики биотехнологических лекарственных средств", pdf: `${BASE}/shhelgacheva-archakova_prezentacziya.pdf` },
    { author: "Фаустова", title: "Применение ИФА наборов реагентов, специфичных для человека, при анализе биоматериала лабораторных животных", pdf: `${BASE}/faustova_prezentacziya.pdf` },
    { author: "Михайлова Е.Р.", title: "Иммуноферментный анализ для исследовательских целей: от иммунизации животных до готового набора", pdf: `${BASE}/mihajlova_prezentacziya.pdf` },
    { author: "Устенко Ж.Ю.", title: "Возможности применения ИГХ метода в доклинических исследованиях, преимущества и ограничения", pdf: `${BASE}/ustenko_prezentacziya.pdf` },
    { author: "Косман В.М.", title: "Валидация биомаркеров – что? где? когда?", pdf: `${BASE}/kosman_prezentacziya.pdf` },
    { author: "Валуев И.А.", title: "Решение ЕЭК № 85, приложение 6: спорные места и мировая регуляторная практика", pdf: `${BASE}/valuev_prezentacziya.pdf` },
    { author: "Зелинская И.А.", title: "Иммуноферментный анализ. Битва за стандартное отклонение", pdf: `${BASE}/zelinskaya_prezentacziya.pdf` },
    { author: "Смирягин Е.А.", title: "Количественное определение гистамина в фармацевтических субстанциях и лекарственных препаратах методом иммуноферментного анализа как альтернатива испытаниям in vivo", pdf: `${BASE}/smiryagin_prezentacziya.pdf` },
    { author: "Старшинова А.А.", title: "Наукометрические показатели: прошлое, настоящее и будущее", pdf: `${BASE}/starshinova_prezentacziya.pdf` },
    { author: "Князева (Федорова) И.В.", title: "Развитие Soft Skills: ключевые компетенции для успешной карьеры в современном мире", pdf: `${BASE}/knyazevafedorova_prezentacziya.pdf` },
    { author: "Бикчурина Е.В.", title: "«Входной контроль качества» сотрудника", pdf: `${BASE}/bikchurina_prezentacziya.pdf` },
    { author: "Савостьянова Е.В.", title: "Построение карьерного маршрута для молодого специалиста", pdf: `${BASE}/savostyanova_prezentacziya.pdf` },
    { author: "Кательникова А.Е.", title: "Испытательный центр АО «НПО «Дом Фармации»: скучно точно не будет!", pdf: `${BASE}/katelnikova_prezentacziya.pdf` },
    { author: "Углева Е.М.", title: "Порядок аттестации научных работников", pdf: `${BASE}/ugleva_prezentacziya.pdf` },
    { author: "Павлова А.Н.", title: "Изучение фармако-токсикологических показателей оксованадиевого комплекса КАИ-19, проявляющего гипогликемическую активность", pdf: `${BASE}/pavlova_prezentacziya.pdf` },
    { author: "Шалов И.Т.", title: "Моделирование на приматах: история и современные направления", pdf: `${BASE}/shalov_prezentacziya.pdf` },
    { author: "Михель А.В.", title: "Пренатальная гипергомоцистеинемия и ее влияние на развитие мозга плода: экспериментальное исследование", pdf: `${BASE}/mihel_prezentacziya.pdf` },
    { author: "Диффинэ Е.А.", title: "Зрительная категоризация в биологических и искусственных системах", pdf: `${BASE}/diffine_prezentacziya.pdf` },
    { author: "Есенеева Я.К.", title: "Влияние кормовой добавки на основе хелатных соединений (Хелавит С) на морфологию почек лабораторных крыс", pdf: `${BASE}/eseneeva_prezentacziya.pdf` },
    { author: "Чалышева А.Е.", title: "Потенциальные анальгетики в ряду фторированных орвинолов: in vivo исследование", pdf: `${BASE}/chalysheva_prezentacziya.pdf` },
    { author: "Торкунова Е.В.", title: "Разработка мышиной модели для оценки препаратов против ротавирусной инфекции", pdf: `${BASE}/torkunova_prezentacziya.pdf` },
    { author: "Снежкова Ю.В.", title: "Механизмы ототоксического эффекта никотинамид рибозида", pdf: `${BASE}/snezhkova_prezentacziya.pdf` },
    { author: "Маршан Д.С.", title: "Релевантность приматов в моделировании различных нарушений энергетического обмена", pdf: `${BASE}/marshan_prezentacziya.pdf` },
    { author: "Валлин Е.Ж.", title: "Изучение влияния кормовой добавки на основе хелатных соединений (Хелавит С) на морфологию тимуса и лимфатических узлов лабораторных крыс", pdf: `${BASE}/vallin_prezentacziya.pdf` },
    { author: "Карнакова П.К.", title: "Фармакокинетика производных малоновой кислоты: подходы к исследованию инновационных лекарственных препаратов", pdf: `${BASE}/karnakova_prezentacziya.pdf` },
    { author: "Домнина Т.Н.", title: "Изучение влияния минерально-кормовой добавки на основе хелатных соединений (Хелавит С) на морфологию печени и селезенки лабораторных крыс", pdf: `${BASE}/domnina_prezentacziya.pdf` },
    { author: "Семушина С.Г.", title: "Принятие решений в ходе этической оценки проектов использования животных в экспериментах", pdf: `${BASE}/semushina_prezentacziya.pdf` },
    { author: "Наделяева", title: "Каверзные вопросы для комиссии по биоэтике", pdf: `${BASE}/nadelyaeva_prezentacziya.pdf` },
    { author: "Кушнир Е.А.", title: "Как организовать деятельность этических комиссий в России?", pdf: `${BASE}/kushnir_prezentacziya.pdf` },
    { author: "Казакова Л.Х.", title: "Как с этической точки зрения оценивать тестирование безопасности уже готовых препаратов и субстанций на животных?", pdf: `${BASE}/kazakova_prezentacziya.pdf` },
    { author: "Брызгалина Е.В.", title: "К вопросу о сущности биоэтической экспертизы: что может этическая комиссия?", pdf: `${BASE}/bryzgalina_prezentacziya.pdf` },
    { author: "Белозерцева И.В.", title: "«Как вы яхту назовете, так она и поплывет?» IACUC vs. БЭК", pdf: `${BASE}/belozerczeva_prezentacziya.pdf` },
    { author: "Андяржанова Э.А.", title: "Как организовать деятельность этической комиссии в России? Где проходят границы сферы деятельности этических комиссий?", pdf: `${BASE}/andyarzhanova_-prezentacziya.pdf` },
    { author: "Акимов Д.Ю.", title: "Работа БЭК «за кадром»", pdf: `${BASE}/akimov_prezentacziya-1.pdf` },
    { author: "Зиновьев С.В.", title: "Морфологические подходы к валидизации исследования тучных клеток в органах дыхания крыс", pdf: `${BASE}/zinovev_prezentacziya.pdf` },
    { author: "Воротилов А.В.", title: "Модель трансплантации левого легкого на крысах с использованием техники модифицированной манжеты", pdf: `${BASE}/vorotilov_prezentacziya.pdf` },
    { author: "Абзалов Ш.", title: "Новые возможности доклинических исследований в Узбекистане", pdf: `${BASE}/abzalov_prezentacziya.pdf` },
    { author: "Карпов А.А.", title: "Подходы к морфологической оценке левого и правого желудочков при различных патологиях в экспериментах на грызунах", pdf: `${BASE}/karpov_prezetacziya.pdf` },
    { author: "Качалов К.С.", title: "Фармакологическая коррекция метаболических нарушений у матерей и фетотоксических отклонений у потомства в модели гестационного сахарного диабета", pdf: `${BASE}/kachalov_prezentacziya.pdf` },
    { author: "Кузьмина Д.", title: "Особенности проведения доклинических исследований на хорьках: опыт ЦДИ «ПИМУ»", pdf: `${BASE}/kuzmina_prezentacziya.pdf` },
    { author: "Матичин А.А.", title: "Базовые принципы выбора экспериментальных моделей", pdf: `${BASE}/matichin_prezentacziya.pdf` },
    { author: "Мизгирев И.В.", title: "Скрининговые исследования in vivo на модели Danio rerio: ожидания и реальность", pdf: `${BASE}/mizgirev_prezentacziya.pdf` },
    { author: "Муразов Я.Г.", title: "Ортотопические модели в экспериментальной онкологии: non progredi est regredi", pdf: `${BASE}/murazov_prezentacziya.pdf` },
    { author: "Мурашова Л.А.", title: "Зебрафиш – маленькие рыбки в большой регенерации", pdf: `${BASE}/murashova_prezentacziya.pdf` },
    { author: "Пашинская Е.С.", title: "Использование животных моделей в лабораторной практике паразитолога", pdf: `${BASE}/pashinskaya_prezentacziya.pdf` },
    { author: "Подьячева Е.Ю.", title: "Модель доксорубицин-индуцированной кардиомиопатии. Смена парадигмы?", pdf: `${BASE}/podyacheva_prezentacziya.pdf` },
    { author: "Пугач В.А.", title: "Острый респираторный дистресс-синдром: проблемы релевантности биомоделей и трансляционности экспериментальных данных в клиническую практику", pdf: `${BASE}/pugach_prezentacziya.pdf` },
    { author: "Смирнова А.В.", title: "Анализ релевантности in vitro методов для изучения функциональных характеристик радиофармацевтических препаратов — вопрос замены", pdf: `${BASE}/smirnova_prezentacziya.pdf` },
    { author: "Тильченко Д.А.", title: "Гипогликемическая и гепатопротекторная активность новых производных α-цианотиоацетамида из ряда частично гидрированных пиридинов на разработанной de novo методике лекарственного гепатита у беспородных половозрелых крыс", pdf: `${BASE}/tilchenko_prezentacziya.pdf` },
    { author: "Шамаев Н.Д.", title: "Протеомный профиль насекомых, используемых в промышленной биотехнологии", pdf: `${BASE}/shamaev_prezentacziya.pdf` },
    { author: "Шумега А.", title: "Дрожжевая модель для оценки мутагенной активности CRISPR/Cas9", pdf: `${BASE}/shumega_prezentacziya.pdf` },
    { author: "Ярушкина Н.И., Пунин Ю.М.", title: "Экспериментальные модели на крысах для оценки влияния физической активности на функциональное состояние организма: персонализированный подход", pdf: `${BASE}/yarushkina_punin_prezentacziya.pdf` },
    { author: "Гоглева И.С.", title: "Криобанк эмбриологического материала как элемент устойчивого развития Биоресурсной коллекции", pdf: `${BASE}/gogleva_prezentacziya.pdf` },
    { author: "Корочкина Е.А.", title: "Протоколы криоконсервации спермы производителей сельскохозяйственных животных: основные направления и перспективы", pdf: `${BASE}/korochkina_prezentacziya.pdf` },
    { author: "Акимова М.А.", title: "Биологическое разнообразие в исследовании репродуктивной токсичности", pdf: `${BASE}/akimova_prezentacziya.pdf` },
    { author: "Бабенко А.Н.", title: "Оценка влияния растительных лекарственных средств на фертильность крыс самцов при доклиническом исследовании", pdf: `${BASE}/babenko_prezentacziya.pdf` },
    { author: "Вербицкая Е.В.", title: "Статистический анализ данных доклинических исследований по репродуктивной токсичности", pdf: `${BASE}/verbiczkaya_prezentacziya.pdf` },
    { author: "Каранина В.Д.", title: "Кролики. Методы получения спермы. Спермограмма", pdf: `${BASE}/karanina_prezentacziya.pdf` },
    { author: "Крепкова Л.В.", title: "Оценка репродуктивной токсичности растительных препаратов на этапе доклинического изучения", pdf: `${BASE}/krepkova_prezentacziya.pdf` },
    { author: "Пастухова А.В.", title: "Физиология лактации и методы получения молока у лабораторных животных", pdf: `${BASE}/pastuhova_prezentacziya.pdf` },
    { author: "Перебоева А.Ю.", title: "Потенциал использования хомячков для оценки репродуктивной токсичности", pdf: `${BASE}/pereboeva_prezentacziya.pdf` },
    { author: "Филиппова Н.А.", title: "Оценка репродуктивной токсичности на карликовых свиньях. Методические особенности", pdf: `${BASE}/filippova_prezentacziya.pdf` },
    { author: "Хоцькина А.С.", title: "Крысы Sprague Dawley как модель для изучения репродуктивной токсичности", pdf: `${BASE}/hoczkina_prezentacziya.pdf` },
    { author: "Потапова С.С.", title: "Новый способ синхронизации эстральных циклов самок крыс", pdf: `${BASE}/potapova_prezentacziya.pdf` },
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

export default function Conference2025Page() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                <section className="conf-hero">
                    <div className="conf-container">
                        <div className="conf-hero-label">VI Конференция · 2025</div>
                        <h1 className="conf-hero-title">GLP-Planet конференция 6.0</h1>
                        <div className="conf-hero-meta">
                            <span>2–4 июля 2025</span>
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
                            <p>2–4 июля 2025 г. в Санкт-Петербурге прошла <strong>VI Международная научно-практическая конференция GLP-PLANET, совместно с Русской ассоциацией специалистов по лабораторным животным (Rus-LASA)</strong>. В работе конференции приняли участие специалисты научно-исследовательских институтов и испытательных центров, ВУЗов, фармацевтических компаний, питомников, поставщики оборудования и расходных материалов, независимые эксперты и представители регуляторных органов из <strong>34 городов России</strong>, а также Абхазии, Беларуси, Грузии, Китая, Кубы, Сербии, Узбекистана и ЮАР. GLP-PLANET собрала более <strong>500 человек</strong>. За три дня участники могли посетить <strong>13 сессий и 9 мастер-классов</strong>.</p>
                            <p>По результатам голосования состоялось награждение лучших лекторов.</p>
                            <p><strong>Организационный комитет выражает благодарность спонсорам, лекторам и участникам. До встречи в следующем году!</strong></p>
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