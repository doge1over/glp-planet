import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "GLP-Planet конференция 2023 — GLP-Planet",
    description: "IV Международная научная конференция GLP-Planet совместно с RUS-Lasa, 28–30 июня 2023 г., Санкт-Петербург",
};

const materials = [
    { author: "Ковалева М.А.", title: "Ослепление: взаймы у клинических исследований?", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/kovaleva-m.a.pdf" },
    { author: "Ивкин Д.Ю.", title: "Дизайн эксперимента для единовременного изучения профилей эффективности и общей токсичности при многократном введении лекарственного препарата", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/ivkin-d.yu.pdf" },
    { author: "Галагудза М.М.", title: "ARRIVE 2.0 в России: добежим, добредем или доползем?", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/galagudza-m.m.pdf" },
    { author: "Шубин Д.В.", title: "Реализация принципов ARRIVE на этапе планирования исследования", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/shubin-d.v.pdf" },
    { author: "Мирошников М.В.", title: "Сравнительный обзор активности ферментов системы цитохрома Р450 печени человека и лабораторных животных. Прогностическая ценность доклинических моделей in vivo", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/miroshnikov-m.v.pdf" },
    { author: "Матичина А.А.", title: "Дизайн диабетической эректильной дисфункции. Особенности и «подводные камни»", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/matichina-a.a.pdf" },
    { author: "Блинова Е.А.", title: "Пилотное исследование доставки B. subtilis в желудочно-кишечный тракт на модельных животных", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/blinova-e.a.pdf" },
    { author: "Боровкова К.Е.", title: "Заражение животных микроаэрофильными патогенами, выбор тест-системы, культивирование патогена", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/borovkova-k.e.pdf" },
    { author: "Буренков П.В.", title: "Отчетная документация по доклиническим исследованиям с точки зрения трансфера медицинских технологий", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/burenkov-p.v.pdf" },
    { author: "Красильников И.В.", title: "Особенности доклинических исследований вакцин против ОРВИ, содержащих адъювант", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/krasilnikov-i.v.pdf" },
    { author: "Матуа А.З.", title: "Оценка безопасности и иммуногенности вакцинных препаратов на неполовозрелых и половозрелых обезьянах Старого Света", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/matua-a.z.pdf" },
    { author: "Шохин И.Е.", title: "Биоаналитические исследования биопрепаратов: вчера, сегодня, завтра", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/shohin-i.e.pdf" },
    { author: "Шохин И.Е.", title: "Биомедицинская статья глазами редактора научного журнала", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/shohin-i.e-1.pdf" },
    { author: "Макаров В.Г.", title: "Презентация журнала «Лабораторные животные для научных исследований»", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/makarov-v.g.pdf" },
    { author: "Хрущёва М.Л.", title: "Научно-практические журналы ФГБУ «НЦЭСМП» Минздрава России", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/hrushheva-m.l.pdf" },
    { author: "Абакумов М.А.", title: "Магнитно-резонансная томография и оптическая визуализация в доклинических исследованиях", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/abakumov-m.a.pdf" },
    { author: "Акимов Д.Ю.", title: "Влияние препаратов, используемых для анестезии лабораторных животных, на показатели крови и физиологические параметры", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/akimov-d.yu.pdf" },
    { author: "Каземирчук М.С.", title: "Особенности неврологического обследования лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/kazemirchuk-m.s.pdf" },
    { author: "Попов В.С.", title: "Оптимизация рутинных исследовательских задач в виварии", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/popov-v.s.pdf" },
    { author: "Ильченко А.Н.", title: "Современные системы газовой анестезии: инновации и практика применения", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/ilchenko-a.n.pdf" },
    { author: "Прудникова Е.В.", title: "Офтальмологическое обследование для оценки влияния препаратов", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/prudnikova-e.v.pdf" },
    { author: "Рыжков И.А.", title: "Влияние инъекционных анестетиков на регионарное кровообращение и микроциркуляцию у грызунов", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/ryzhkov-i.a.pdf" },
    { author: "Чалов С.Е.", title: "Разработка полусинтетического комбикорма для лабораторных животных (мыши, крысы) и возможность применения в технологии оптической визуализации in vivo", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/chalov-s.e.pdf" },
    { author: "Арутюнян С.С.", title: "Стандартизация теста «Открытое поле»", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/arutyunyan-s.s.pdf" },
    { author: "Бондаренко Н.А.", title: "Тест «Принудительное плавание» по Порсолту: неужели всё так плохо?", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/bondarenko-n.a.pdf" },
    { author: "Воронцова О.Н.", title: "Поведение грызунов в тесте «Спонтанное распознавание нового объекта»", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/voronczova-o.n.pdf" },
    { author: "Ганина К.К.", title: "Темно-светлая камера: использование для поведенческого фенотипирования, парадоксальное поведение мышей", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/ganina-k.k.pdf" },
    { author: "Завьялов Е.Л.", title: "Паразитарное окружение и его социальные последствия у грызунов", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/zavyalov-e.l.pdf" },
    { author: "Коновалова Е.В.", title: "Использование алгоритма для анализа субсекундных поведенческих моделей мышей после моделирования ишемии головного мозга", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/konovalova-e.v.pdf" },
    { author: "Сидиков Д.И.", title: "Анализ паттернов поведения крыс после ишемического инсульта с помощью методов глубокого машинного обучения", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/sidikov-d.-i.pdf" },
    { author: "Федерико", title: "Equipment for Animal Behavioral Studies", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/federiko.pdf" },
    { author: "Хоцкина А.С.", title: "Влияние организации проведения ольфакторного теста на его результаты у лабораторных мышей", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/hoczkina-a.s.pdf" },
    { author: "Филатова Е.В.", title: "Новый Лабиринт-Трансформер для оценки различных видов пространственной навигации, памяти и обучения лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/filatova-ev_bez-video.pdf" },
    { author: "Енгалычева Г.Н.", title: "Рекомендации по доклиническому изучению генотерапевтических лекарственных средств", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/engalycheva-g.n.pdf" },
    { author: "Крышень К.Л.", title: "Интерпретация данных токсикологических исследований при определении дозы, не вызывающей видимых побочных эффектов (NOAEL)", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/kryshen-k.l.pdf" },
    { author: "Оганова М.А.", title: "Опыт разработки моделей для оценки специфической активности генотерапевтических лекарственных препаратов", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/oganova-m.a.pdf" },
    { author: "Остроухова Т.Ю.", title: "Изменение подходов к оценке иммуногенности инновационных биологических препаратов при доклинической разработке", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/ostrouhova.pdf" },
    { author: "Потеряев Д.А.", title: "Доклинические исследования эффективности и безопасности нового неопиоидного анальгетика", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/poteryaev-d.a.pdf" },
    { author: "Рождественский Д.А.", title: "Доклиническая разработка высокотехнологичных, гибридных и воспроизведенных лекарственных препаратов", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/rozhdestvenskij-d.a.pdf" },
    { author: "Устюгов А.А.", title: "Применение фторированных производных гамма-карболинов в качестве потенциальных препаратов для лечения нейродегенеративных заболеваний", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/ustyugov_a.a.pdf" },
    { author: "Шабанов П.Д.", title: "Проблемные вопросы при работе с нейропептидами", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/shabanov-p.d.pdf" },
    { author: "Гремякова П.В.", title: "Управление оборудованием GLP-центра", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/gremyakova-p.v.pdf" },
    { author: "Гуляева Е.П.", title: "Классификация и подходы к валидации оборудования центра неклинических испытаний", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/gulyaeva-e.p.pdf" },
    { author: "Клинаева Е.Ю.", title: "Требования к производственным помещениям", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/klinaeva-e.yu.pdf" },
    { author: "Макарова М.Н.", title: "Процессный подход в испытательном центре", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/makarova-m.n.pdf" },
    { author: "Мурашев А.Н.", title: "Международное признание результатов неклинических исследований – необходимое условие для выхода на мировой рынок", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/murashev-a.n.pdf" },
    { author: "Семивеличенко Е.Д.", title: "Адаптация требований НЛП под конкретную лабораторию", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/semivelichenko-e.d.pdf" },
    { author: "Трапкова А.А.", title: "Перспективы инспектирования на соответствие требованиям GLP", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/trapkova-a.a.pdf" },
    { author: "Ходько С.В.", title: "Основные проблемы в реализации принципов GLP в испытательных центрах. Чем поможет оценка рисков?", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/hodko-s.v.pdf" },
    { author: "Шнаукшта В.С.", title: "Фундаментальные вопросы валидации биоаналитической методики в свете требований GLP OECD", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/shnaukshta-v.s.pdf" },
    { author: "Билан Д.С.", title: "Генетически кодируемые инструменты для исследования биологических процессов", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/bilan-d.s.pdf" },
    { author: "Васильев Д.С.", title: "Исследование нейродегенерации в кортикальных отделах мозга трансгенных мышей линии 5хFAD и возможность её фармакологической коррекции", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/vasilev-d.s.pdf" },
    { author: "Дейкин А.В.", title: "Геномное редактирование для создания животных моделей заболеваний человека", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/dejkin-a.v.pdf" },
    { author: "Корокин М.В.", title: "Характеристика состояния костной ткани у генетически модифицированных мышей с нарушениями энзиматической регуляции обмена стероидных гормонов", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/korokin-m.v.pdf" },
    { author: "Леонова Е.И.", title: "Модели наследственных патологий сетчатки и подходы генной терапии", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/leonova-e.i.pdf" },
    { author: "Мурашова Л.А.", title: "Трансгенные рыбы: подводные камни содержания и работы с организмом", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/murashova-l.a.pdf" },
    { author: "Покровский М.В.", title: "Анализ двигательной функции мышей с генетическим дефицитом белка дисферлина", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/pokrovskij-m.v.pdf" },
    { author: "Сопова Ю.В.", title: "Мышиные модели болезни Альцгеймера: история и современность", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/sopova-yu.v.pdf" },
    { author: "Вербицкая Е.В.", title: "Мета-анализ как эффективный инструмент планирования доклинических исследований", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/verbiczkaya-e.v.pdf" },
    { author: "Зелинская И.А.", title: "Принципы анализа и обобщения результатов экспериментальных исследований. Подводные камни", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/zelinskiya-i.a.pdf" },
    { author: "Круглова А.Д.", title: "Сопоставление диапазонов и норм основных биологических показателей лабораторных животных и человека", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/kruglova-a.d.pdf" },
    { author: "Мазукина Е.В.", title: "Референсные интервалы электрокардиограммы у хищных лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/mazukina-e.v.pdf" },
    { author: "Савватейкина А.И.", title: "Массовые коэффициенты органов лабораторных животных. Для чего мы взвешиваем органы?", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/savvatejkina-a.i.pdf" },
    { author: "Хохлова О.Н.", title: "Важность исторических контрольных данных в интерпретации токсикологической значимости эффектов тестируемого объекта в исследовании безопасности на животных", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/hohlova-o.n.pdf" },
    { author: "Аверина О.А.", title: "Исследование физиологии голых землекопов в аспекте полового созревания самок", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/averina-o.a.pdf" },
    { author: "Агацарская Я.В.", title: "Преимущества и недостатки технологий in vitro / ex vivo / in vivo на примере моделирования заболеваний кишечника", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/agaczarskaya-ya.v.pdf" },
    { author: "Васютина М.Л.", title: "Обеспечение качества лабораторных животных разных видов с позиции ветеринарии", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/vasyutina-m.l.pdf" },
    { author: "Литвинова Е.А.", title: "Germ-free животные: сложности и необходимость получения для российской науки", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/litvinova-e.a.pdf" },
    { author: "Новиков Е.А.", title: "Реакция на экспериментальные воздействия и остаточная продолжительность жизни диких грызунов в лаборатории", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/novikov-e.a.pdf" },
    { author: "Попов В.С.", title: "Acomys cahirinus — модельный объект для изучения регенерации", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/popov-v.s-1.pdf" },
    { author: "Рутовская М.В.", title: "Дикие насекомоядные в неволе и их использование в качестве модели для исследования терморегуляции", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/rutovskaya-m.v.pdf" },
    { author: "Смирнова С.В.", title: "Опыт применения люминесцентных бактериальных биосенсоров на основе штамма Escherichia coli K12 в генотоксикологических исследованиях", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/smirnova-s.v.pdf" },
    { author: "Солдатов В.О.", title: "Оценка нейро- и ретинопротективных эффектов пептидного агониста гетеродимерного рецептора эритропоэтина при моделировании нейродегенеративных процессов", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/soldatov-v.o.pdf" },
    { author: "Торопова Я.Г.", title: "Использование животных в образовательных целях – за и против", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/toropova-ya.g.pdf" },
    { author: "Гончарова Е.П.", title: "Экспериментальная модель воспалительных заболеваний кишечника с микробиотой человека", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/goncharova-e.p.pdf" },
    { author: "Ивкина А.И.", title: "Создание и апробация модели экстремального сочетанного воздействия", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/ivkina-a.i.pdf" },
    { author: "Ильинский Н.С.", title: "Проблемные вопросы трансляции данных в экспериментальной нейротоксикологии", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/ilinskij-n.s.pdf" },
    { author: "Каранина В.Д.", title: "Разработка модели нефролитиаза у крыс и кроликов", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/karanina-v.d.pdf" },
    { author: "Макаров В.Г.", title: "Преемственность и развитие экспериментальных знаний и навыков в испытательном центре", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/makarov-v.g-1.pdf" },
    { author: "Матичин А.А.", title: "Экспериментальные модели нарушения сперматогенеза у крыс и карликовых свиней", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/matichin-a.a.-ot-27.06.23.pdf" },
    { author: "Муразов Я.Г.", title: "К вопросу об особенностях роста меланомы B16 у мышей C57Bl/6 при использовании различных техник получения опухолевого материала и сайтов трансплантации сингенной опухоли", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/murazov-ya.g.pdf" },
    { author: "Подгорный О.В.", title: "Синтетические нейротехнологии в моделировании и терапии патологий мозга", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/podgornyj-o.v.pdf" },
    { author: "Пугач В.А.", title: "Современные парадигмы в экспериментальной патологии лёгких", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/pugach-v.a.pdf" },
    { author: "Сарынина А.Н.", title: "Особенности внутритрахеального введения лабораторным животным", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/sarynina-a.n.pdf" },
    { author: "Силачёв Д.Н.", title: "Моделирование неонатальной ишемии-гипоксии крыс для поиска метаболомных маркеров повреждения головного мозга", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/silachev-d.n.pdf" },
    { author: "Чернышова А.В.", title: "Рекомендованные и максимально допустимые объемы для ректального и интравагинального введения лекарственных средств разным видам лабораторных животных", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/chernyshova-a.v.pdf" },
    { author: "Яценко К.А.", title: "ДКИ как основа разработки и регистрации ЛС: современные тренды и регуляторные требования", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/yaczenko-k.a.pdf" },
    { author: "Абрамович Р.А.", title: "Опыт разработки биомедицинских клеточных продуктов и биологических препаратов", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/abramovich-r.a.pdf" },
    { author: "Власенко Ю.В.", title: "Оценка цитотоксичности и проницаемости назальных составов in vitro как инструмент скрининга, трансляционность", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/vlasenko-yu.v.pdf" },
    { author: "Корель А.В.", title: "Аспекты выбора фармакологических точек приложения для хитозановых гелевых носителей, перспективных для медицинского применения", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/korel-a.v.pdf" },
    { author: "Кощиц Д.В.", title: "Риск-ориентированный подход / использование подхода Quality-by-Design при фармацевтической разработке на примере создания ТЛФ препаратов-дженериков", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/koshhicz-d.v.pdf" },
    { author: "Нягматуллина В.Р.", title: "Применение реверс-инжиниринга на ранних этапах фармацевтической разработки", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/nyagmatullina-v.r.pdf" },
    { author: "Стрелкова А.В.", title: "Актуальные вопросы трансфера технологии лекарственных средств на примере процесса нанесения покрытия на таблетки", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/strelkova-a.v.pdf" },
    { author: "Тулегенова А.У.", title: "Трансфер аналитических методик как часть трансфера технологий: требования Фармакопеи ЕАЭС", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/tulegenova-a.u.pdf" },
    { author: "Флисюк Е.В.", title: "Центр коллективного пользования – основа фундаментальных и прикладных исследований", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/flisyuk-e.v.pdf" },
    { author: "Арчакова О.А.", title: "Биоаналитические исследования лекарственных средств с неустановленным метаболизмом и фармакокинетикой при приведении регистрационного досье в соответствие", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/archakova-o.a.pdf" },
    { author: "Барыбина Т.Н.", title: "Реализация мостикового ИФА для оценки кинетики моноклональных антител на примере пембролизумаба", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/barybina-t.n.pdf" },
    { author: "Комаров Т.Н.", title: "Биоаналитические и регуляторные аспекты изучения фармакокинетики лекарственных средств для терапии COVID-19 в рамках процедуры ускоренной регистрации", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/komarov-t.n.pdf" },
    { author: "Косман В.М.", title: "Ретроспективная оценка вариабельности фармакокинетических параметров и сопоставление приемов их расчета в исследованиях с дизайном «животное-точка»", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/kosman-v.m.pdf" },
    { author: "Петрова Е.М.", title: "Риск контаминации биопроб в исследованиях токсикокинетики", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/petrova-e.m.pdf" },
    { author: "Романенко А.Ю.", title: "Определение ионов лития альтернативным методом в условиях отсутствия коммерчески доступных наборов", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/romanenko-a.yu.pdf" },
    { author: "Тернинко И.И.", title: "Родственные примеси в лекарственных средствах – «минное поле» фармацевтической разработки", pdf: "https://glp-planet.com/wp-content/uploads/2023/08/terninko-i.i.pdf" },
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

export default function Conference2023Page() {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                <section className="conf-hero">
                    <div className="conf-container">
                        <div className="conf-hero-label">IV Конференция · 2023</div>
                        <h1 className="conf-hero-title">GLP-Planet конференция 4.0</h1>
                        <div className="conf-hero-meta">
                            <span>28–30 июня 2023</span>
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
                            <p>28–30 июня 2023 г. в Санкт-Петербурге прошла <strong>IV Международная научная конференция GLP-PLANET, совместно с ассоциацией по лабораторным животным (RUS-Lasa)</strong>. В работе конференции приняли участие научно-исследовательские институты и испытательные центры, фармацевтические компании, независимые эксперты и представители регуляторных органов из <strong>30 городов России</strong>, а также Абхазии, Армении, Беларуси, Испании, Италии, Казахстана, Китая, Узбекистана, США и Швейцарии. Конференция собрала более <strong>500 человек</strong>.</p>
                            <p>Участники подробно обсудили достижения и ближайшие цели GxP для устойчивого развития фармацевтической отрасли в ЕАЭС. По результатам голосования участников состоялось награждение лучших лекторов.</p>
                            <p><strong>Мы благодарим всех участников мероприятия за активное участие и спонсоров — за поддержку конференции!</strong></p>
                        </div>
                        <a href="https://glp-planet.com/wp-content/uploads/2024/11/glp-planet_2023.pdf" target="_blank" rel="noopener noreferrer" className="conf-program-btn">
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