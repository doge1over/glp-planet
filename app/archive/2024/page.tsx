import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "GLP-Planet конференция 2024 — GLP-Planet",
    description: "V Международная научная конференция GLP-Planet совместно с RUS-Lasa, 3–5 июля 2024 г., Санкт-Петербург",
};

const materials = [
    { author: "Арчакова О.А.", title: "Биоаналитические исследования лекарственных препаратов: подходы к решению спорных вопросов со стороны лаборатории", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/archakova-o.a.pdf" },
    { author: "Вахрушев Н.С.", title: "Применение моделирования для обоснования стартовых доз в клинических исследованиях на основании ФК/ФД in vivo и ФД in vitro", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/vahrushev-n.s.pdf" },
    { author: "Вербицкая Е.В.", title: "Объекты исследования, взгляд биостатистика", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/verbiczkaya-e.v.pdf" },
    { author: "Джинджолия В.Г.", title: "Кроссвидовая модель как подход многостороннего моделирования патологии", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/dzhindzholiya-v.g.pdf" },
    { author: "Ильинский Н.С.", title: "Опыт стандартизации экспериментальной модели SARS-CoV-2-инфекции на сирийских хомяках", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/ilinskij-n.s.pdf" },
    { author: "Карачевцева Д.М.", title: "Внедрение элементов ARRIVE. Практические аспекты", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/karachevczeva-d.m.pdf" },
    { author: "Майер А.И.", title: "Сопоставимость результатов визуализации лабораторных животных in vivo и клинической томографии", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/majer-a.i.pdf" },
    { author: "Матуа А.З.", title: "Стратегия выбора вида приматов для проведения доклинических исследований", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/matua-a.z.pdf" },
    { author: "Сорокина Е.Ю.", title: "Предоставление данных результатов доклинических исследований в брошюре исследователя", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/sorokina-e.yu.pdf" },
    { author: "Суханов И.М.", title: "Изучение перекрёстной толерантности ингибиторов фосфодиэстеразы 10А", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/suhanov-i.m.pdf" },
    { author: "Торопова Я.Г.", title: "Руководство PREPARE как инструмент для реализации принципов ARRIVE", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/toropova-ya.g.pdf" },
    { author: "Аверина О.А.", title: "Влияние возраста на результаты тестирований мышей гибридов C57Bl/6/CBA", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/averina-o.a.pdf" },
    { author: "Андреева И.В.", title: "Влияние пищевого нагрузочного теста на показатели гемодинамики крыс различного возраста", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/andreeva-i.v.pdf" },
    { author: "Енгалычева Г.Н.", title: "Обоснование релевантности экспериментальных животных при проведении доклинических исследований безопасности лекарственных средств", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/engalycheva-g.n.pdf" },
    { author: "Зиновьев С.В.", title: "Особенности функциональной морфологии легких у крыс", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/zinovev-s.v.pdf" },
    { author: "Иванова В.В., Мильто И.В.", title: "Экспериментальные модели для изучения эффектов недоношенности на постнатальный морфогенез", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/ivanova-v.v.milto-i.v.pdf" },
    { author: "Макарова М.Н.", title: "Выбор лабораторных животных в исследование. Возраст", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/makarova-m.n.pdf" },
    { author: "Устенко Ж.Ю.", title: "Иммуногистохимическая экспрессия инсулина и инсулиноподобного фактора роста 1 (IGF-1) в тканях крысы в процессе постэмбрионального онтогенеза", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/ustenko-zh.yu.pdf" },
    { author: "Шкорбатова П.Ю.", title: "Пояснично-крестцовый отдел спинного мозга кошки в постнатальном онтогенезе: изменение длины сегментов и их положения по отношению к позвонкам", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/shkorbatova-p.yu.pdf" },
    { author: "Бекетов Е.Е.", title: "Валидация вспомогательного оборудования и аттестация испытательного", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/beketov-e.e.pdf" },
    { author: "Гиба И.С.", title: "Метрики эффективности системы качества лаборатории", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/giba-i.s.pdf" },
    { author: "Гремякова П.В.", title: "Организация управления оборудованием для обеспечения непрерывности деятельности испытательного центра", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/gremyakova-p.v.pdf" },
    { author: "Кильдибеков К.Ю.", title: "Техническое обслуживание инженерных систем и оборудования", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/kildibekov-k.yu.pdf" },
    { author: "Кищенко Н.А.", title: "Актуальные вопросы использования наркотических средств и психотропных веществ в доклинических исследованиях", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/kishhenko-n.a.pdf" },
    { author: "Платонова О.И.", title: "Санитарно-эпидемиологические требования к доклиническому центру: на что обратить внимание?", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/platonova-o.i.pdf" },
    { author: "Пелогейкина Ю.А.", title: "Организация системы GLP в биоаналитической лаборатории", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/pelogejkina-yu.a.pdf" },
    { author: "Ситко Т.И.", title: "Информационная безопасность. Валидация компьютеризированных систем", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/sitko-t.i.pdf" },
    { author: "Ходько С.В.", title: "Менеджмент непрерывности деятельности", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/hodko-s.v.pdf" },
    { author: "Калуев А.В.", title: "Роль зебраданио (Danio rerio) в преклиническом скрининге", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/kaluev-a.v.pdf" },
    { author: "Плотникова В.Д.", title: "Оценка иммуногематологических показателей амфибий как маркеров цитотоксического воздействия среды обитания", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/plotnikova-v.d.pdf" },
    { author: "Шамаев Н.Д.", title: "Потенциальные различия врожденного иммунного ответа среди популяций Galleria mellonella", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/shamaev-n.d.pdf" },
    { author: "Осокина А.С.", title: "Galleria mellonella как биологическая тест-система изучения токсичности альдегидов", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/osokina-a.s.pdf" },
    { author: "Варнакова Л.А.", title: "Электрокардиограмма крысы в постреанимационном периоде после асфиксической остановки кровообращения", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/varnakova-l.a.pdf" },
    { author: "Власов Т.Д.", title: "Исследования на крысах: традиции или необходимость?", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/vlasov-t.d.pdf" },
    { author: "Галагудза М.М.", title: "Критерии исключения при планировании эксперимента: кто, когда, какие, зачем и как?", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/galagudza-m.m.pdf" },
    { author: "Гончарова А.С.", title: "Методологические особенности создания PDX-моделей для исследований в области онкологии", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/goncharova-a.s.pdf" },
    { author: "Милутинович К.С.", title: "Влияние условий содержания на проявление симптомов ВЗК у самцов и самок Muc2-/- мышей", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/milutinovich-k.s.pdf" },
    { author: "Панченко А.В.", title: "Трансляционный потенциал низших обезьян как биомоделей человека", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/panchenko-a.v.pdf" },
    { author: "Попов В.С.", title: "Трансляционные исследования: верный ответ на неверный вопрос", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/popov-v.s.pdf" },
    { author: "Рыжков И.А.", title: "Экспериментальное моделирование постреанимационной болезни на лабораторных грызунах", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/ryzhkov-i.a.pdf" },
    { author: "Попова М.О.", title: "«Понять и простить» или как работать с возражениями при внедрении изменений", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/popova-m.o.pdf" },
    { author: "Агацарская Я.В.", title: "Основные проблемы клеточных проектов. Современные реалии и пути решения", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/agaczarskaya-ya.v.pdf" },
    { author: "Власова Ю.А.", title: "Изменения митохондриального метаболизма и дыхания в моделях мышечных клеток линии С2С12 нокаутных по гену FLNC", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/vlasova-yu.a.pdf" },
    { author: "Гуреев А.П.", title: "Использование метода ПЦР длинных фрагментов для оценки количества повреждений мтДНК при различных патологиях", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/gureev-a.p.pdf" },
    { author: "Крылова Л.С.", title: "Влияние омега-3 полиненасыщенных жирных кислот на функциональное состояние клеток РС12", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/krylova-l.s.pdf" },
    { author: "Макаревич П.И.", title: "Мезенхимные стромальные клетки (МСК) как инструмент для поиска фармакологических мишеней в регенеративной медицине", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/makarevich-p.i.pdf" },
    { author: "Мальцев Д.В.", title: "Поиск механизмов действия новых анксиолитиков", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/malczev-d.v.pdf" },
    { author: "Сагимбаева О.С.", title: "Прикладные аспекты оценки нейтрализующей активности противолекарственных антител в рамках оценки иммуногенности", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/sagimbaeva-o.s.pdf" },
    { author: "Свирщевская Е.В.", title: "Биологические и иммунологические методы для доклинических исследований", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/svirshhevskaya-e.v.pdf" },
    { author: "Андреев С.В.", title: "Результаты доклинических исследований отечественной инактивированной цельновирионной вакцины БелКовидВак против коронавируса SARS-CoV-2", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/andreev-s.v.pdf" },
    { author: "Дейкин А.В.", title: "Доклинические исследования препаратов для терапии миодистрофии Миоши", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/dejkin-a.v.pdf" },
    { author: "Леонова Е.И.", title: "Животные модели заболеваний человека для доклинических исследований генотерапевтических препаратов: проблемы и решения", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/leonova-e.i.pdf" },
    { author: "Сенников С.В.", title: "Доклинические исследования противоопухолевых Т-лимфоцитов с генетически модифицированным антиген-распознающим рецептором", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/sennikov-s.v.pdf" },
    { author: "Слободкина Е.А.", title: "Бицистронный плазмидный генотерапевтический препарат для стимуляции ангио- и нейрогенеза в скелетных мышцах", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/slobodkina-e.a.pdf" },
    { author: "Степанова Е.А.", title: "Проблемы оценки эффективности и иммуногенности векторных вакцин на основе вируса гриппа на ранних этапах разработки", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/stepanova-e.a.pdf" },
    { author: "Таубе А.А.", title: "Этап доклинической разработки препаратов клеточной терапии", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/taube-a.a.pdf" },
    { author: "Акимова М.А.", title: "Нормативы по обслуживанию лабораторных животных в питомнике", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/akimova-m.a.pdf" },
    { author: "Бондарева Е.Д.", title: "Категории животных, история появления SPF", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/bondareva-e.d.pdf" },
    { author: "Добаджян Н.В.", title: "Сравнение биохимических референсов различных видов не человекообразных обезьян и человека", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/dobadzhyan-n.v.pdf" },
    { author: "Каландия Т.З.", title: "Сравнительный анализ гематологических показателей у двух видов низших приматов (Macacca mulatta и Macacca fascicularis), содержащихся в Сухумском питомнике", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/kalandiya-t.z.pdf" },
    { author: "Попова А.В.", title: "Современные методы регистрации физиологических показателей лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/popova-a.v.pdf" },
    { author: "Проскурняк Л.П.", title: "Апикальное удлинение моляров у водяной полёвки Arvicola amphibius (Linnaeus, 1758) в условиях вивария", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/proskurnyak-l.p.pdf" },
    { author: "Салминьш Д.А.", title: "Самая компактная и вместительная клетка для крыс", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/salminsh-d.a.pdf" },
    { author: "Снижко Е.А.", title: "Риск-ориентированный подход к мониторингу здоровья лабораторных грызунов", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/snizhko-e.a.pdf" },
    { author: "Соколова В.С.", title: "Опыт разработки методов оценки постнатального развития яванских макак в рамках изучения репродуктивной токсичности", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/sokolova-v.s.pdf" },
    { author: "Литвинова Е.А.", title: "Стандартизация иммунитета SPF-животных", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/litvinova-e.a.pdf" },
    { author: "Усатов А.В.", title: "Российское оборудование для работы с лабораторными животными: от систем содержания до гуманного вывода из эксперимента", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/usatov-a.v.pdf" },
    { author: "Акимов Д.Ю.", title: "Приучение яванских макак к экспериментальным процедурам", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/akimov-d.yu.pdf" },
    { author: "Васютина М.Л.", title: "Ветеринария животных с опухолевым процессом в эксперименте", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/vasyutina-m.l.pdf" },
    { author: "Лобода А.В.", title: "Физиологические эффекты инертных газов в моделях исследований на животных", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/loboda-a.v.pdf" },
    { author: "Лычева Н.А.", title: "Моделирование отека головного мозга. Параметры для оценки фармакологической активности вещества", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/lycheva-n.a.pdf" },
    { author: "Пугач В.А.", title: "Клинико-лабораторные и морфофункциональные показатели при остром повреждении лёгких в эксперименте", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/pugach-v.a.pdf" },
    { author: "Тюлькова Е.И.", title: "Различные экспериментальные модели в изучении влияния пренатальной гипоксии на развитие мозга", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/tyulkova-e.i.pdf" },
    { author: "Шабанов П.Д.", title: "Методы оценки эффективности пептидных препаратов в альтернативных тест-системах", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/shabanov-p.d.pdf" },
    { author: "Бондаренко Н.А.", title: "Тест «Приподнятый крестообразный лабиринт» (ПКЛ)", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/bondarenko-n.a.pdf" },
    { author: "Борзых А.А.", title: "Произвольная беговая тренировка крыс в колесе: разработка аппаратно-программного комплекса и его применение в физиологических экспериментах", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/borzyh-a.a.pdf" },
    { author: "Котеров А.Н.", title: "Экстраполяция эффектов с животных на человека: теория и практика, успехи и ограничения", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/koterov-a.n.pdf" },
    { author: "Левицкая Н.Г.", title: "Негенетические модели расстройств аутистического спектра", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/leviczkaya-n.g.pdf" },
    { author: "Мазукина Е.В.", title: "Нейромодуляция при контузионной травме спинного мозга карликовых свиней", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/mazukina-e.v.pdf" },
    { author: "Шкорбатова П.Ю.", title: "Скелетотопия сегментов спинного мозга некоторых видов лабораторных обезьян", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/shkorbatova-p.yu-1.pdf" },
    { author: "Абакумов М.А.", title: "Системы неинвазивной визуализации лабораторных животных в доклинических исследованиях", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/abakumov-m.a.pdf" },
    { author: "Бородина А.Ю.", title: "Крысы как тест-система оценки функционального состояния сердечно-сосудистой системы", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/borodina-a.yu.pdf" },
    { author: "Каземирчук М.С.", title: "Транскраниальное УЗИ гипофиза у крыс Rattus norvegicus", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/kazemirchuk-m.s.pdf" },
    { author: "Матичин А.А.", title: "Исследования фармакологической безопасности", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/matichin-a.a.pdf" },
    { author: "Мирошников М.В.", title: "Маркеры функционального состояния почек у лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/miroshnikov-m.v.pdf" },
    { author: "Тильченко Д.А.", title: "Волюметрический метод определения параметров органов подопытных животных с целью комплексной оценки патологических изменений, вызванных осложнениями сахарного диабета", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/tilchenko-d.a.pdf" },
    { author: "Трунов А.А.", title: "Эхокардиография в ветеринарии", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/trunov-a.a.pdf" },
    { author: "Хан С.О.", title: "Методы сбора мочи у лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/han-s.o.pdf" },
    { author: "Власенко Ю.В.", title: "Целевой профиль качества продукта. Case study: назальный спрей системного действия", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/vlasenko-yu.v.pdf" },
    { author: "Зильфикаров И.Н.", title: "Фитохимический анализ в контроле качества лекарственных препаратов: актуальные аспекты разработки, нормирования и стандартизации", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/zilfikarov-i.n.pdf" },
    { author: "Карлина М.В.", title: "Целевой профиль качества лекарственного препарата, выбор критических показателей качества", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/karlina-m.v.pdf" },
    { author: "Лужанин В.Г.", title: "Поиск потенциальных лекарственных кандидатов на основе индивидуальных веществ растительного происхождения", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/luzhanin-v.g.pdf" },
    { author: "Рождественский Д.А.", title: "Трансфер производства и аналитических методик, проектное поле и сфера дизайна как элементы фармразработки лекарственного препарата в праве ЕАЭС", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/rozhdestvenskij-d.a.pdf" },
    { author: "Солодовников А.Г.", title: "Документы фармацевтической разработки в составе пакета документов на РКИ", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/solodovnikov-a.g.pdf" },
    { author: "Хазанов В.А.", title: "Риск-менеджмент в разработке лекарств", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/hazanov-v.a.pdf" },
    { author: "Агабалаев А.А.", title: "Особенности валидации ВЭЖХ-методик количественного определения", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/agabalaev-a.a.pdf" },
    { author: "Багаева Н.С.", title: "Опыт применения адаптивного подхода в исследованиях биоэквивалентности", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/bagaeva-n.s.pdf" },
    { author: "Валуев И.А.", title: "Валидация методик определения иммуногенности терапевтических белков: предел исключения и статистические выбросы", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/valuev-i.a.pdf" },
    { author: "Карнакова П.К.", title: "Особенности разработки методик определения производных малоновой кислоты в плазме крови человека для проведения исследований фармакокинетики", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/karnakova-p.k.pdf" },
    { author: "Комаров Т.Н.", title: "Аналитические особенности фармакокинетических исследований агонистов GLP-1", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/komarov-t.n.pdf" },
    { author: "Никифорова А.Г.", title: "Частичная валидация биоаналитических методик. Зачем и когда ее делать?", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/nikiforova-a.g.pdf" },
    { author: "Тернинко И.И.", title: "Валидация аналитических методик для целей стандартизации: реперные точки, «узкие места», практические примеры", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/terninko-i.i.pdf" },
    { author: "Юдина Н.С.", title: "Валидация биоаналитических методик определения белков методом высокоэффективной жидкостной хроматографии с масс-спектрометрией высокого разрешения", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/yudina-n.s.pdf" },
    { author: "Сухов И.Б.", title: "Инсулиновая сигнальная система в ЦНС как потенциальная терапевтическая мишень при когнитивных нарушениях", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/suhov-i.b.pdf" },
    { author: "Алексеева Ю.С.", title: "Оценка влияния фитоэкстрактов живучки туркестанской и спаржи кистевидной на эффективность аэробного тренировочного режима", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/alekseeva-yu.s.pdf" },
    { author: "Борисов А.И., Чалышева А.Е.", title: "Парадоксальная кинезия и стресс: почему люди с паркинсонизмом выбегают из горящих зданий", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/borisov-a.i.chalysheva-a.e.pdf" },
    { author: "Гарбуз К.В.", title: "Развитие Soft Skills", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/garbuz-k.v.pdf" },
    { author: "Ивкин Д.Ю.", title: "Подготовка специалистов доклинических исследований в рамках магистратуры направления «Биология»", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/ivkin-d.yu.pdf" },
    { author: "Игнатенко С.Н.", title: "Как эффективно подготовиться к интервью с работодателем", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/ignatenko-s.n.pdf" },
    { author: "Карпенко М.Е.", title: "Исследование in vitro и in vivo: общие мишени", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/karpenko-m.e.pdf" },
    { author: "Компанцев Д.В.", title: "Содержательная и декларативная компонента образования по программе 33.05.01 – Фармация как идеальная база для начала работы в качестве сотрудника R&D-центра фармацевтической компании", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/kompanczev-d.v.pdf" },
    { author: "Маршан Д.С.", title: "Разработка и адаптация СОПов для взятия биоматериала у приматов", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/marshan-d.s.pdf" },
    { author: "Матюшенко В.А., Новицкая В.В.", title: "Получение и характеризация защитных свойств прототипа универсальной живой гриппозной вакцины со встроенным в антигенный сайт гемагглютинина вируса гриппа A эпитопом M2e", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/matyushenko-v.a.noviczkaya-v.v.pdf" },
    { author: "Романовский А.С.", title: "Оценка ранозаживляющего эффекта гидрогелей на модели экспериментального ожога у грызунов", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/romanovskij-a.s.pdf" },
    { author: "Султимова М.Ц.", title: "Вселенная Герофарм", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/sultimova-m.cz.pdf" },
    { author: "Федорова Е.В.", title: "Фармакоэнцефалографическое исследование фармакологической активности аминоэфира вальпроевой кислоты", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/fedorova-e.v.pdf" },
    { author: "Чистякова А.К.", title: "Генотипирование вариантов SARS-CoV-2 с использованием различных систем детекции", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/chistyakova-a.k.pdf" },
    { author: "Чупова В.В.", title: "Карьера в науке для молодого специалиста", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/chupova-v.v.pdf" },
    { author: "Хоцкина А.С.", title: "Влияние условий содержания на уровень рождаемости и развитие потомства лабораторных мышей", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/hoczkina-a.s.pdf" },
    { author: "Тольгский М.В., Тюменев Р.Р., Стецик Е.О.", title: "Использование органических лечебно-профилактических пластин «ЦМ» в лечении инфицированной полимикробной раны кожи", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/tolgskij-m.v.tyumenev-r.r.steczik-e.o.pdf" },
    { author: "Шевченко Е.И.", title: "Карьера в фарме", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/shevchenko-e.i.pdf" },
    { author: "Филатова Е.В.", title: "Использование Лабиринта-Трансформера для оценки зрительной функции при оптогенетическом протезировании клеток сетчатки у грызунов", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/filatova-e.v.pdf" },
    { author: "Ахуба Л.О.", title: "Особенности моделирования дислипидемии на трех видах приматов", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/ahuba-l.o.pdf" },
    { author: "Исакова-Сивак И.Н.", title: "Доклиническое исследование интраназальной вакцины для комбинированной профилактики сезонного гриппа и COVID-19", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/isakova-sivak-i.n.pdf" },
    { author: "Коваленко И.И.", title: "Применение нейросетевых и экспертных инструментов в анализе переходных процессов в тесте «Открытое поле»", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/kovalenko-i.i.pdf" },
    { author: "Меланина Ю.В.", title: "Валидация неинвазивных маркеров сна у лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/melanina-yu.v.pdf" },
    { author: "Мизгирёв И.В.", title: "Зебрафиш (Danio rerio): опыт использования в онкологии", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/mizgirev-i.v.pdf" },
    { author: "Стрелкова М.В.", title: "Современный виварий – современные системы для обслуживания персонала и животных", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/strelkova-m.v.pdf" },
    { author: "Сурушкина Е.В.", title: "Специальные диеты для проведения экспериментальных исследований. Промышленное производство или самостоятельное приготовление. Возможности импортозамещения", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/surushkina-e.v.pdf" },
    { author: "Сучков Д.С.", title: "Методы исследования функциональных свойств развивающейся соматосенсорной коры головного мозга грызунов в норме и патологии", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/suchkov-d.s.pdf" },
    { author: "Андреев А.И.", title: "Особенности организации циркадного цикла спонтанной двигательной активности (СДА) у мышей 5xFAD: применение комплекса МультиНейро-СДА в многомасштабном поведенческом эксперименте", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/andreev-a.i.pdf" },
    { author: "Ахременко Е.А.", title: "Использование «разрушаемых» объектов для поведенческого фенотипирования животных моделей с нейродегенерацией", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/ahremenko-e.a.pdf" },
    { author: "Борозденко Д.А.", title: "Моделирование железодефицитной анемии у крыс методом системного воспаления и субхронической кровопотери", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/borozdenko-d.a.pdf" },
    { author: "Коробова В.Н.", title: "Использование показателей вариабельности сердечного ритма в оценке нейрогуморальной регуляции у крыс Вистар", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/korobova-v.n.pdf" },
    { author: "Костромтина А.Д.", title: "Новые методы и подходы к изучению иммунного ответа к коронавирусной инфекции COVID-19", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/kostromtina-a.d.pdf" },
    { author: "Лапин К.Н.", title: "Метод лазерной спекл-контрастной визуализации (ЛСКВ) в исследованиях периферического кровотока у мелких лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/lapin-k.n.pdf" },
    { author: "Ловать М.Л.", title: "Влияние рациона кормления на биохимические и морфологические параметры мышей", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/lovat-m.l.pdf" },
    { author: "Махнин И.А.", title: "Болезни Danio rerio. Как решить проблему?", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/mahnin-i.a.pdf" },
    { author: "Себенцова Е.А.", title: "Неинвазивные модели гипоксического воздействия на животных разного возраста", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/sebenczova-e.a.pdf" },
    { author: "Флисюк Е.В.", title: "Научно-образовательный центр полного цикла на основе химического синтеза: строительство экспериментальной площадки по производству лекарственных препаратов", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/flisyuk-e.v.pdf" },
    { author: "Шохин И.Е.", title: "Исследования фармакокинетики инсулинов и их аналогов: успешные кейсы", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/shohin-i.e.pdf" },
    { author: "Кустова О.А.", title: "Применение in utero электропорации в исследовании патологий развития мозга", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/kustova-o.a.pdf" },
    { author: "Мальцев Д.И.", title: "Хемогенетическое симулирование окислительного стресса для моделирования нейродегенеративных заболеваний", pdf: "https://glp-planet.com/wp-content/uploads/2024/07/malczev-d.i-4.pdf" },
    { author: "Зелинская И.А.", title: "Эндотелий с позиции оценки безопасности лекарственных средств", pdf: "https://glp-planet.com/wp-content/uploads/2024/08/zelinskaya-i.a.pdf" },
    { author: "Карпов А.А.", title: "Применение эхокардиографического исследования в доклинических исследованиях для оценки фармакологической безопасности лекарственных средств", pdf: "https://glp-planet.com/wp-content/uploads/2024/08/karpov-a.a.pdf" },
    { author: "Савина Д.М.", title: "Оценка благополучия мышей при ежедневном рутинном мониторинге", pdf: "https://glp-planet.com/wp-content/uploads/2024/08/savina-d.m._master-klass.pdf" },
    { author: "Амаба С.Т.", title: "Моделирование химически индуцированного воспалительного процесса в кишечнике на Macacca mulatta", pdf: "https://glp-planet.com/wp-content/uploads/2024/08/amaba-s.t.pdf" },
    { author: "Соколов А.В.", title: "Биосенсоры на эффекте поверхностного плазмонного резонанса для контроля качества моноклональных антител", pdf: "https://glp-planet.com/wp-content/uploads/2024/08/sokolov-a.v.pdf" },
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

export default function Conference2024Page() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                <section className="conf-hero">
                    <div className="conf-container">
                        <div className="conf-hero-label">V Конференция · 2024</div>
                        <h1 className="conf-hero-title">GLP-Planet конференция 5.0</h1>
                        <div className="conf-hero-meta">
                            <span>3–5 июля 2024</span>
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
                            <p>3–5 июля 2024 г. в Санкт-Петербурге прошла <strong>V Международная научная конференция GLP-PLANET, совместно с ассоциацией по лабораторным животным (RUS-Lasa)</strong>. В работе конференции приняли участие научно-исследовательские институты и испытательные центры, фармацевтические компании, независимые эксперты и представители регуляторных органов из <strong>30 городов России</strong>, а также Абхазии, Армении, Беларуси, Испании, Италии, Казахстана, Китая, Узбекистана, США и Швейцарии. Конференция собрала более <strong>500 человек</strong>.</p>
                            <p>Участники подробно обсудили достижения и ближайшие цели GxP для устойчивого развития фармацевтической отрасли в ЕАЭС. По результатам голосования участников состоялось награждение лучших лекторов.</p>
                            <p><strong>Мы благодарим всех участников мероприятия за активное участие и спонсоров — за поддержку конференции!</strong></p>
                        </div>
                        <a href="https://cdn.glp-planet.com/2024/announcements/02.pdf" target="_blank" rel="noopener noreferrer" className="conf-program-btn">
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