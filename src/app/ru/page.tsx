import Link from 'next/link';

export default function Home() {
  return (
    <main id="top">
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <img src="/aadlab-icon.png" alt="" className="hero-icon" />
          <h1>
            Научись настраивать свой
            <br />
            <span className="accent">CYPRES&nbsp;2 Changeable Mode</span>{' '}
            на iPhone или Android.
          </h1>
          <p className="hero-tagline">
            Освой настоящую конфигурацию. Научись менять режим, задавать
            высоту срабатывания, DZ Offset и переключать шкалу. Реальные
            сценарии.
          </p>
          <p className="hero-sub">Офлайн · Без рекламы · Шесть языков</p>
          <nav className="hero-lang-strip" aria-label="Доступные языки">
            <Link href="/" hrefLang="en">English</Link>
            <Link href="/de/" hrefLang="de">Deutsch</Link>
            <Link href="/fr/" hrefLang="fr">Français</Link>
            <Link href="/es/" hrefLang="es">Español</Link>
            <Link href="/it/" hrefLang="it">Italiano</Link>
            <span className="current">Русский</span>
          </nav>
          <div className="hero-cta-row">
            <a href="#imagine" className="btn btn-primary">
              Зачем это нужно
            </a>
            <Link href="/support" className="btn btn-secondary">
              Поддержка
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Imagine narratives ──────────────────────────── */}
      <section id="imagine">
        <div className="container">
          <p className="section-label">Зачем AAD lab</p>
          <h2 className="section-title reveal">
            Используй то время, которое у тебя уже есть.
          </h2>
          <p className="section-intro reveal">
            Знание AAD не опционально, но время на учёбу редко находится
            тогда, когда оно нужно. AAD lab заполняет те окна, которые у
            тебя уже есть. По дороге на DZ. В переполненной электричке. В
            тихий вечер перед буги. Везде.
          </p>

          <div className="imagine">
            <article className="imagine-card reveal">
              <p className="num">01 · В САМОЛЁТЕ</p>
              <h3>Не стой в очереди.</h3>
              <p>
                Ты летишь на буги, где настройка AAD специфична для
                мероприятия. Триста парашютистов, и лишь несколько умеют
                настраивать прибор. На их время и помощь рассчитывать
                нельзя.{' '}
                <span className="highlight">
                  Используй своё личное время, чтобы научиться
                </span>
                , и приедешь готовым, а не ждущим.
              </p>
            </article>

            <article className="imagine-card reveal">
              <p className="num">02 · В ДОРОГЕ</p>
              <h3>Двадцать минут в метро. Используй их с пользой.</h3>
              <p>
                Лондон, Нью-Йорк, Сан-Франциско. Стоять в забитом вагоне,
                избегая зрительного контакта, это потерянные минуты твоей
                жизни. Потрать это время на что-то стоящее. Научись
                настраивать свой CYPRES прямо в телефоне. Это может{' '}
                <span className="highlight">
                  спасти твою жизнь или чью-то ещё
                </span>
                .
              </p>
            </article>

            <article className="imagine-card reveal">
              <p className="num">03 · ТВОЙ ПЕРВЫЙ AAD</p>
              <h3>Ты встречаешь его впервые уже в системе.</h3>
              <p>
                Ты только что купил свой первый AAD, или купил систему, в
                которой он уже стоял. Иногда так и бывает. Первый раз ты
                видишь его, когда он уже внутри ранца. Официальное
                руководство подробное, но статичное.{' '}
                <span className="highlight">
                  AAD lab позволяет изучить, понять и настроить твой
                </span>
                {' '}ещё до первого прыжка с ним.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ─── About ───────────────────────────────────────── */}
      <section id="about">
        <div className="container">
          <p className="section-label">Что это</p>
          <h2 className="section-title reveal">
            Кнопка-в-кнопку, без прибора на столе.
          </h2>
          <p className="section-intro reveal">
            Свободно владеть последовательностью управления CYPRES&nbsp;2
            быстрее всего, когда можно тренироваться без ограничений. AAD
            lab воссоздаёт дисплей, тайминги нажатий, отклик светодиода,
            каждый режим работы и каждый этап подтверждения. Тренируйся
            дома, в самолёте или между прыжками, ни разу не трогая боевой
            прибор.
          </p>
        </div>
      </section>

      {/* ─── Lessons ─────────────────────────────────────── */}
      <section id="lessons">
        <div className="container">
          <p className="section-label">Уроки</p>
          <h2 className="section-title reveal">
            Учись на практике. Девять пошаговых уроков в трёх уровнях.
          </h2>
          <p className="section-intro reveal">
            Каждый урок проводит тебя через один навык с мгновенной
            обратной связью. Нажми, держи, отпусти, подтверди. Никаких
            мануалов наизусть, никакого скрабинга по видео.
          </p>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>101</h3>
              <span className="group-badge">Основы</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Урок 1</p>
                <h3>The Press Action</h3>
                <p>
                  Освой быстрое, чёткое нажатие-и-отпускание, на котором
                  строится каждая команда CYPRES&nbsp;2. Поставь его в
                  пальцы прежде всего остального.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Урок 2</p>
                <h3>Включение</h3>
                <p>
                  Ритм четырёх нажатий в такт светодиоду, который
                  оживляет прибор. Точное зеркало настоящего обратного
                  отсчёта.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Урок 3</p>
                <h3>Выключение</h3>
                <p>
                  Тот же метод четырёх нажатий, только в обратном
                  порядке, с уверенностью, что ты знаешь его наизусть.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>201</h3>
              <span className="group-badge">Ежедневная работа</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Урок 4</p>
                <h3>Просмотр данных прибора</h3>
                <p>
                  Долгим нажатием пройди по потоку информации:
                  количество прыжков, серийный номер, дата следующего
                  сервиса, шкала, высота срабатывания и режим.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Урок 5</p>
                <h3>DZ Offset</h3>
                <p>
                  Задай разницу высот между отделением и приземлением
                  шагами ±30&nbsp;футов (или ±10&nbsp;м). Одноразовое:
                  сбрасывается при выключении.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>301</h3>
              <span className="group-badge">Полный контроль</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Урок 6</p>
                <h3>Смена шкалы</h3>
                <p>
                  Переключай дисплей прибора между футами и метрами
                  через трёхступенчатую навигацию, удержание светодиода
                  и строгий этап подтверждения.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Урок 7</p>
                <h3>Смена режима</h3>
                <p>
                  Выбирай Expert, Student, Tandem или Speed через
                  полную двухпроходную последовательность
                  подтверждения. Точно как на боевом приборе.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Урок 8</p>
                <h3>Высота срабатывания</h3>
                <p>
                  Пройди через удержание светодиода, строгий этап
                  подтверждения и осознанную обратную связь при ошибке.
                  Так, как ответил бы настоящий прибор.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Урок 9</p>
                <h3>Тренировка нажатий</h3>
                <p>
                  Отточи тайминг своего Press Action под метроном
                  успешных попыток. Память пальцев нарабатывается
                  быстро.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Scenarios ───────────────────────────────────── */}
      <section id="scenarios">
        <div className="container">
          <p className="section-label">Tier 401 · Сценарии</p>
          <h2 className="section-title reveal">
            Девятнадцать реальных задач в пяти группах.
          </h2>
          <p className="section-intro reveal">
            От альпийского демо в Швейцарии до подержанного
            CYPRES&nbsp;2, всё ещё стоящего в режиме Tandem, каждый
            сценарий даёт тебе вводную, опускает к прибору и просит
            настроить его правильно. Не получилось, попробуй ещё раз.
          </p>

          <div className="scenarios-grid">
            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#3ea55e' }}
            >
              <div className="scenario-group-title">
                <h3>Offset</h3>
                <span className="scenario-count">5 сценариев</span>
              </div>
              <ul className="scenario-list">
                <li>Альпы, Швейцария</li>
                <li>Аэродром, Испания</li>
                <li>Хайленд, Шотландия</li>
                <li>Royal Albert Docks, Лондон</li>
                <li>Кэмпс-Бэй, Кейптаун</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#2b97d6' }}
            >
              <div className="scenario-group-title">
                <h3>Activation</h3>
                <span className="scenario-count">7 сценариев</span>
              </div>
              <ul className="scenario-list">
                <li>Сейшелы, радиомачта</li>
                <li>Старый город, Панама</li>
                <li>Civic District, Сингапур</li>
                <li>Plaza Revolución, Гавана</li>
                <li>Рио, отели</li>
                <li>Grand Prix, Монако</li>
                <li>Водопад Виктория, столб брызг</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#9a6bff' }}
            >
              <div className="scenario-group-title">
                <h3>Combined</h3>
                <span className="scenario-count">4 сценария</span>
              </div>
              <ul className="scenario-list">
                <li>Прыжок на пляж, Аруба</li>
                <li>Парк Боливара, Богота</li>
                <li>Кальдера, Санторини</li>
                <li>Куинстаун, Новая Зеландия</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#e48a2a' }}
            >
              <div className="scenario-group-title">
                <h3>Other</h3>
                <span className="scenario-count">2 сценария</span>
              </div>
              <ul className="scenario-list">
                <li>Гималаи, экстремальная высота</li>
                <li>Элой, Аризона: переключение на метры</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#ff04cd' }}
            >
              <div className="scenario-group-title">
                <h3>Resale</h3>
                <span className="scenario-count">1 сценарий</span>
              </div>
              <ul className="scenario-list">
                <li>Tandem в Expert, подержанный прибор</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Playground ──────────────────────────────────── */}
      <section id="playground">
        <div className="container">
          <p className="section-label">Playground</p>
          <h2 className="section-title reveal">
            Весь CYPRES&nbsp;2 на твоих условиях.
          </h2>
          <p className="section-intro reveal">
            Когда основы доведены до автоматизма, заходи в Playground и
            исследуй каждое состояние CYPRES&nbsp;2 в своём темпе. Никаких
            уроков, никаких сценариев. Только ты и прибор.
          </p>
          <div className="cards">
            <div className="card">
              <p className="card-tier">Питание</p>
              <h3>Последовательность самотеста</h3>
              <p>
                Включай и выключай питание, наблюдай живой самотест из
                четырёх вспышек светодиода и обратный отсчёт
                14-часового авто-выключения.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Инфо</p>
              <h3>Цикл данных прибора</h3>
              <p>
                Долгим нажатием листай: количество прыжков, серийный
                номер, дата следующего сервиса, шкала, высота и режим
                работы.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Режимы</p>
              <h3>Expert · Student · Tandem · Speed</h3>
              <p>
                Переключай режим работы через настоящее трёхэтапное
                подтверждение. У каждого свой профиль срабатывания.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Высота</p>
              <h3>От A0 до A9</h3>
              <p>
                Выставляй высоту срабатывания на десяти шагах через
                подлинный поток нажатие-удержание-выбор.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Offset</p>
              <h3>DZ Offset</h3>
              <p>
                Задавай разницу высот между отделением и приземлением
                шагами ±30&nbsp;футов (или ±10&nbsp;м).
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Сброс</p>
              <h3>Заводские настройки</h3>
              <p>
                Одно нажатие возвращает прибор в состояние первого
                включения. Тренируй весь поток настройки с нуля.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fidelity ────────────────────────────────────── */}
      <section id="fidelity">
        <div className="container">
          <p className="section-label">Точность</p>
          <h2 className="section-title reveal">
            Тайминги нажатий, сигналы светодиода, самотест. Всё
            воссоздано.
          </h2>
          <p className="section-intro reveal">
            AAD lab отличает быстрое Press Action от нажатия-с-удержанием
            и реагирует так же, как настоящий прибор. Каждая вспышка
            светодиода, каждый переход на дисплее, каждый индикатор
            режима смоделированы с реального CYPRES&nbsp;2.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Нажатие против удержания</h4>
              <p>
                Быстрый тап для выбора, удержание для навигации. Тот же
                порог, который пальцам нужно выучить на настоящем
                приборе.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Двухпроходное подтверждение</h4>
              <p>
                Смена режима и высоты срабатывания требуют строгого
                подтверждающего прохода. Ошибся на втором проходе,
                сценарий проваливается с осознанным объяснением.
              </p>
            </div>
            <div className="feature reveal">
              <h4>14-часовое авто-выключение</h4>
              <p>
                Живой обратный отсчёт прямо на экране. Совпадает с
                поведением настоящего прибора. Отключи его в
                настройках, когда тренируешься.
              </p>
            </div>
            <div className="feature reveal">
              <h4>От A0 до A9</h4>
              <p>
                Десять шагов высоты срабатывания по 30&nbsp;футов
                каждый, настраиваются подлинным потоком
                нажатие-удержание-выбор.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Четыре режима работы</h4>
              <p>
                Expert, Student, Tandem, Speed. У каждого свой профиль
                раскрытия и своё подтверждение смены режима.
              </p>
            </div>
            <div className="feature reveal">
              <h4>DZ Offset</h4>
              <p>
                Задавай разницу высот между отделением и приземлением
                шагами ±30&nbsp;футов (или ±10&nbsp;м).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Aura backgrounds ────────────────────────────── */}
      <section id="aura">
        <div className="container">
          <p className="section-label">Aura</p>
          <h2 className="section-title reveal">
            Фоны, которые захочется оставить включёнными.
          </h2>
          <p className="section-intro reveal">
            AAD lab сделан, чтобы с ним жили. Выбери фон, который ляжет
            на глаза в долгие сессии изучения. Каждый из них настраивается,
            экономит GPU и ставится на паузу, когда приложение в фоне.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Cosmos</h4>
              <p>
                Мягкие следы частиц дрейфуют по невидимому течению,
                словно чернила в воде. Синее или чёрное свечение по
                углам.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Aurora</h4>
              <p>
                Мягкие розовые ленты света плывут по экрану. Настраивай
                прозрачность, направление потока и колебание.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Aurora Rain</h4>
              <p>
                Нити Aurora плывут поверх дешифрующего дождя из названий
                DZ твоего региона. Список DZ фильтруется по твоей стране.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Compass</h4>
              <p>
                DZ расположены по истинному азимуту от твоей точки.
                Поверни телефон, чтобы осмотреться. Использует курс
                устройства, всё считается локально.
              </p>
            </div>
            <div className="feature reveal">
              <h4>DZ Rain</h4>
              <p>
                Поток расшифровки названий DZ твоего региона. Каждый
                столбец складывается посимвольно, как боевой инструктаж.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Universe</h4>
              <p>
                Щипком от глобуса спускайся через континенты до
                отдельных DZ. И каталог, и часть оформления.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Design ──────────────────────────────────────── */}
      <section id="design">
        <div className="container">
          <p className="section-label">Дизайн</p>
          <h2 className="section-title reveal">Тёмный, тактильный, осознанный.</h2>
          <p className="section-intro reveal">
            Интерфейс ловит дух железа: металлическая отделка дисплея под
            стеклом, элементы управления с пурпурным акцентом, движение на
            пружинной физике и тихая тёмная эстетика, которая не лезет в
            глаза.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Слои стекломорфизма</h4>
              <p>
                Полупрозрачные пилюли и карточки поверх глубокого
                градиента Cosmos. Информация словно приподнята над
                поверхностью.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Пружинные анимации</h4>
              <p>
                Каждый переход на физике с пружинами и каскадным входом.
                Ничего не дёргается, ничего не залипает.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Тактильный отклик</h4>
              <p>
                Четыре уровня интенсивности на Taptic Engine iPhone. На
                Android, простой переключатель вкл/выкл. Типичные моторы
                не различают уровни надёжно.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Переключение темы</h4>
              <p>
                Blue Cosmos для дневного режима, Black Cosmos для
                глубокого вечера. Обе оставляют брендовый пурпурный
                единственным несущим акцентом.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Languages ───────────────────────────────────── */}
      <section id="languages">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">Языки</p>
          <h2
            className="section-title reveal"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Шесть локалей. Терминология из мануала.
          </h2>
          <p
            className="section-intro reveal"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Каждый язык использует точную терминологию из официального
            руководства CYPRES&nbsp;2 для соответствующего региона. Что
            ты выучил здесь, то и увидишь, и услышишь на DZ.
          </p>
          <div className="lang-row">
            <span className="lang-pill">
              <strong>EN</strong> English
            </span>
            <span className="lang-pill">
              <strong>DE</strong> Deutsch
            </span>
            <span className="lang-pill">
              <strong>FR</strong> Français
            </span>
            <span className="lang-pill">
              <strong>ES</strong> Español
            </span>
            <span className="lang-pill">
              <strong>IT</strong> Italiano
            </span>
            <span className="lang-pill current">
              <strong>RU</strong> Русский
            </span>
          </div>
        </div>
      </section>

      {/* ─── Offline & private ───────────────────────────── */}
      <section id="private">
        <div className="container">
          <div className="callout reveal">
            <p className="section-label" style={{ marginBottom: 16 }}>
              Офлайн и приватно
            </p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Никаких аккаунтов. Никакого трекинга. Утекать нечему.
            </h2>
            <p>
              AAD lab работает полностью на твоём устройстве. Никакой
              регистрации, никаких сетевых запросов, никакой аналитики,
              никаких сторонних SDK, собирающих данные. Твой выбор языка,
              твоя тема, твоя настройка вибрации, твои последние
              настройки. Хранятся на твоём телефоне и больше нигде.
              Опциональный доступ к локации и движению нужен только для
              фона Compass; оба обрабатываются на устройстве и никогда не
              покидают твой телефон.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Disclaimer ──────────────────────────────────── */}
      <section id="disclaimer">
        <div className="container">
          <div className="callout reveal">
            <p className="section-label" style={{ marginBottom: 16 }}>
              Независимый инструмент
            </p>
            <p>
              AAD lab это независимое тренировочное и ознакомительное
              приложение. Оно{' '}
              <strong>
                не связано с Airtec GmbH &amp; Co. KG Safety Systems, не
                одобрено и не разработано ею
              </strong>
              , и не заменяет официальное руководство или обучение от
              производителя. Симулятор приближённо повторяет интерфейс
              прибора в учебных целях; поведение может отличаться от
              настоящего устройства. Перед работой с реальным прибором
              всегда консультируйся с инструктором, сертифицированным
              национальной парашютной организацией.
            </p>
            <p>
              <strong>CYPRES</strong> и <strong>CYPRES&nbsp;2</strong> это
              товарные знаки Airtec GmbH &amp; Co. KG Safety Systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
