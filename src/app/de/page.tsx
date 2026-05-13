import Link from 'next/link';

export default function Home() {
  return (
    <main id="top">
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <img src="/aadlab-icon.png" alt="" className="hero-icon" />
          <h1>
            Lerne, wie du deinen
            <br />
            <span className="accent">CYPRES&nbsp;2 Changeable Mode</span>{' '}
            am iPhone oder Android konfigurierst.
          </h1>
          <p className="hero-tagline">
            Werde sicher mit der echten Konfiguration. Lerne, den Modus zu
            wechseln, die Aktivierungshöhe einzustellen, den DZ Offset zu
            setzen und die Skala umzuschalten. Szenarien aus der Praxis.
          </p>
          <p className="hero-sub">Offline · Werbefrei · Sechs Sprachen</p>
          <nav className="hero-lang-strip" aria-label="Verfügbare Sprachen">
            <Link href="/" hrefLang="en">English</Link>
            <span className="current">Deutsch</span>
            <Link href="/fr/" hrefLang="fr">Français</Link>
            <Link href="/es/" hrefLang="es">Español</Link>
            <Link href="/it/" hrefLang="it">Italiano</Link>
            <Link href="/ru/" hrefLang="ru">Русский</Link>
          </nav>
          <div className="hero-cta-row">
            <a href="#imagine" className="btn btn-primary">
              Warum das zählt
            </a>
            <Link href="/de/support" className="btn btn-secondary">
              Support
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Imagine narratives ──────────────────────────── */}
      <section id="imagine">
        <div className="container">
          <p className="section-label">Warum AAD lab</p>
          <h2 className="section-title reveal">
            Nutze die Zeit, die du sowieso hast.
          </h2>
          <p className="section-intro reveal">
            AAD-Wissen ist nicht optional, aber die Zeit zum Lernen ist selten
            da, wenn du sie brauchst. AAD lab füllt die Lücken, die du
            sowieso hast. Auf dem Weg zur DZ. In der vollen U-Bahn. An einem
            ruhigen Abend vor einer Boogie. Überall.
          </p>

          <div className="imagine">
            <article className="imagine-card reveal">
              <p className="num">01 · IM FLUG</p>
              <h3>Steh nicht in der Schlange.</h3>
              <p>
                Du bist auf dem Flug zu einer Boogie, wo die AAD-Konfiguration
                spezifisch für das Event ist. Dreihundert Skydiver und nur
                wenige wissen, wie man die Einheit konfiguriert. Ihre Zeit
                und ihre Hilfe sind nicht garantiert.{' '}
                <span className="highlight">
                  Nutze deine eigene Zeit zum Lernen
                </span>
                , damit du bereit ankommst, statt zu warten.
              </p>
            </article>

            <article className="imagine-card reveal">
              <p className="num">02 · AUF DEM WEG ZUR ARBEIT</p>
              <h3>Zwanzig Minuten in der U-Bahn. Mach was draus.</h3>
              <p>
                London, New York, San Francisco. In einer überfüllten U-Bahn
                stehen und Augenkontakt vermeiden, das verschwendet Minuten
                deines Lebens. Nutze diese Zeit für etwas Brillantes. Lerne
                am Handy, wie du deinen CYPRES konfigurierst. Es könnte{' '}
                <span className="highlight">
                  dein Leben retten, oder das eines anderen
                </span>
                .
              </p>
            </article>

            <article className="imagine-card reveal">
              <p className="num">03 · DEIN ERSTES AAD</p>
              <h3>Du triffst es zum ersten Mal in deinem Rig.</h3>
              <p>
                Du hast gerade dein erstes AAD gekauft, oder ein Rig
                bekommen, in dem bereits eines verbaut war. Manchmal passiert
                es genau so. Wenn du es zum ersten Mal siehst, steckt es
                schon in deinem Container. Das offizielle Handbuch ist
                gründlich, aber statisch.{' '}
                <span className="highlight">
                  Mit AAD lab lernst, verstehst und konfigurierst du dein
                  Gerät
                </span>
                {' '}bevor du je damit springst.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ─── About ───────────────────────────────────────── */}
      <section id="about">
        <div className="container">
          <p className="section-label">Was es ist</p>
          <h2 className="section-title reveal">
            Taste für Taste exakt, ohne das Gerät auf deinem Tisch.
          </h2>
          <p className="section-intro reveal">
            Fließend in der CYPRES&nbsp;2-Bedienfolge zu werden geht am
            schnellsten, wenn du frei üben kannst. AAD lab bildet das
            Display, die Druckzeiten, das LED-Feedback, jeden Betriebsmodus
            und jeden Bestätigungsdurchgang nach. Übe zu Hause, im Flugzeug
            oder zwischen Sprüngen, ohne je ein echtes Gerät zu berühren.
          </p>
        </div>
      </section>

      {/* ─── Lessons ─────────────────────────────────────── */}
      <section id="lessons">
        <div className="container">
          <p className="section-label">Lektionen</p>
          <h2 className="section-title reveal">
            Lernen durch Tun. Neun geführte Lektionen in drei Stufen.
          </h2>
          <p className="section-intro reveal">
            Jede Lektion führt dich durch eine einzelne Fähigkeit mit
            sofortigem Feedback. Drücken, halten, loslassen, bestätigen.
            Keine Handbücher zum Auswendiglernen, keine Videos zum
            Durchscrollen.
          </p>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>101</h3>
              <span className="group-badge">Grundlagen</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Lektion 1</p>
                <h3>The Press Action</h3>
                <p>
                  Beherrsche den schnellen, gezielten Druck-und-Loslassen, der
                  jedem CYPRES&nbsp;2-Befehl zugrunde liegt. Bring es in
                  deine Finger, bevor du irgendetwas anderes machst.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lektion 2</p>
                <h3>Einschalten</h3>
                <p>
                  Der Vier-Druck-Rhythmus, getaktet auf die LED, der die
                  Einheit zum Leben erweckt. Spiegelt den echten Countdown
                  exakt wider.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lektion 3</p>
                <h3>Ausschalten</h3>
                <p>
                  Dieselbe Vier-Druck-Methode, umgekehrt, mit der Sicherheit,
                  sie aus dem Effeff zu beherrschen.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>201</h3>
              <span className="group-badge">Alltagsbedienung</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Lektion 4</p>
                <h3>Gerätedaten anzeigen</h3>
                <p>
                  Lang drücken, um durch den Geräte-Info-Strom zu blättern:
                  Sprünge, Seriennummer, nächster Wartungstermin, Skala,
                  Aktivierungshöhe und Modus.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lektion 5</p>
                <h3>Dropzone Offset</h3>
                <p>
                  Stelle den Höhenunterschied zwischen Absprung und Landung
                  in Schritten von ±30&nbsp;ft (oder ±10&nbsp;m) ein.
                  Einmalig nutzbar; wird beim Ausschalten zurückgesetzt.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>301</h3>
              <span className="group-badge">Volle Kontrolle</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Lektion 6</p>
                <h3>Skala wechseln</h3>
                <p>
                  Schalte die Geräteanzeige zwischen Fuß und Metern über die
                  dreistufige Navigation, das LED-Halten und den strikten
                  Bestätigungsdurchgang um.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lektion 7</p>
                <h3>Modus wechseln</h3>
                <p>
                  Wähle Expert, Student, Tandem oder Speed über die komplette
                  zweistufige Bestätigungsfolge. Genau wie am echten Gerät.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lektion 8</p>
                <h3>Aktivierungshöhe</h3>
                <p>
                  Durchlaufe das LED-Halten, den strikten
                  Bestätigungsdurchgang und das kontextbezogene Feedback,
                  wenn du dich verdrückst. So, wie ein echtes Gerät reagieren
                  würde.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lektion 9</p>
                <h3>Stab-Übung</h3>
                <p>
                  Schleife das Timing deiner Press Action am Metronom
                  erfolgreicher Versuche. Baut Fingergedächtnis schnell auf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Scenarios ───────────────────────────────────── */}
      <section id="scenarios">
        <div className="container">
          <p className="section-label">Tier 401 · Szenarien</p>
          <h2 className="section-title reveal">
            Neunzehn realitätsnahe Herausforderungen in fünf Gruppen.
          </h2>
          <p className="section-intro reveal">
            Vom Alpen-Demo in der Schweiz bis zum Gebraucht-CYPRES&nbsp;2,
            der noch auf Tandem-Modus eingestellt ist. Jedes Szenario gibt
            dir ein Briefing, setzt dich ans Gerät und verlangt, dass du es
            korrekt konfigurierst. Versuche es erneut, wenn nicht.
          </p>

          <div className="scenarios-grid">
            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#3ea55e' }}
            >
              <div className="scenario-group-title">
                <h3>Offset</h3>
                <span className="scenario-count">5 Szenarien</span>
              </div>
              <ul className="scenario-list">
                <li>Alpen, Schweiz</li>
                <li>Flugplatz, Spanien</li>
                <li>Highlands, Schottland</li>
                <li>Royal Albert Docks, London</li>
                <li>Camps Bay, Kapstadt</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#2b97d6' }}
            >
              <div className="scenario-group-title">
                <h3>Aktivierung</h3>
                <span className="scenario-count">7 Szenarien</span>
              </div>
              <ul className="scenario-list">
                <li>Seychellen, Funkmast</li>
                <li>Altstadt, Panama City</li>
                <li>Civic District, Singapur</li>
                <li>Plaza Revolución, Havanna</li>
                <li>Rio, Hotels</li>
                <li>Grand Prix, Monaco</li>
                <li>Victoriafälle, Sprühnebel</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#9a6bff' }}
            >
              <div className="scenario-group-title">
                <h3>Kombiniert</h3>
                <span className="scenario-count">4 Szenarien</span>
              </div>
              <ul className="scenario-list">
                <li>Strandsprung, Aruba</li>
                <li>Bolívar-Park, Bogotá</li>
                <li>Caldera-Sprung, Santorini</li>
                <li>Queenstown, Neuseeland</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#e48a2a' }}
            >
              <div className="scenario-group-title">
                <h3>Sonstiges</h3>
                <span className="scenario-count">2 Szenarien</span>
              </div>
              <ul className="scenario-list">
                <li>Himalaya, extreme Höhe</li>
                <li>Eloy, Arizona: Wechsel auf Meter</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#ff04cd' }}
            >
              <div className="scenario-group-title">
                <h3>Weiterverkauf</h3>
                <span className="scenario-count">1 Szenario</span>
              </div>
              <ul className="scenario-list">
                <li>Tandem auf Expert, Gebrauchtgerät</li>
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
            Der gesamte CYPRES&nbsp;2, nach deinen Regeln.
          </h2>
          <p className="section-intro reveal">
            Sobald die Grundlagen automatisch sitzen, springst du in den
            Playground und erkundest jeden Zustand des CYPRES&nbsp;2 in
            deinem Tempo. Keine Lektion, kein Szenario. Nur du und die
            Einheit.
          </p>
          <div className="cards">
            <div className="card">
              <p className="card-tier">Power</p>
              <h3>Selbsttest-Sequenz</h3>
              <p>
                Schalte das Gerät ein und aus und beobachte die
                Live-Vier-Blitz-LED-Selbsttest-Sequenz sowie den
                14-Stunden-Auto-Aus-Countdown.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Info</p>
              <h3>Geräte-Info-Zyklus</h3>
              <p>
                Halte gedrückt, um Sprünge, Seriennummer, nächsten
                Wartungstermin, Skala, Höhe und Betriebsmodus durchzugehen.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Modi</p>
              <h3>Expert · Student · Tandem · Speed</h3>
              <p>
                Wechsle den Betriebsmodus über die echte dreistufige
                Bestätigung. Jeder Modus hat sein eigenes
                Aktivierungsprofil.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Höhe</p>
              <h3>A0 bis A9</h3>
              <p>
                Stelle die Aktivierungshöhe in zehn Stufen mit dem
                authentischen Drücken-Halten-Auswählen-Ablauf ein.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Offset</p>
              <h3>Dropzone Offset</h3>
              <p>
                Setze den Höhenunterschied zwischen Absprung und Landung in
                Schritten von ±30&nbsp;ft (oder ±10&nbsp;m).
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Reset</p>
              <h3>Werkseinstellungen</h3>
              <p>
                Ein Tipp stellt das Gerät auf den Erststart-Zustand zurück.
                Übe den kompletten Setup-Ablauf von Grund auf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fidelity ────────────────────────────────────── */}
      <section id="fidelity">
        <div className="container">
          <p className="section-label">Originaltreue</p>
          <h2 className="section-title reveal">
            Druckzeiten, LED-Signale, Selbsttest. Alles nachgebildet.
          </h2>
          <p className="section-intro reveal">
            AAD lab unterscheidet eine schnelle Press Action von einem
            Press-Halten und reagiert so, wie es das echte Gerät tut. Jeder
            LED-Blitz, jeder Display-Übergang, jede Modus-Anzeige ist dem
            tatsächlichen CYPRES&nbsp;2 nachempfunden.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Druck vs. Druck-Halten</h4>
              <p>
                Kurzes Tippen zur Auswahl, anhaltendes Halten zur Navigation.
                Dieselbe Schwelle, die deine Finger an einem echten Gerät
                lernen müssen.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Zweistufige Bestätigung</h4>
              <p>
                Modus-Wechsel und Aktivierungshöhe erfordern einen strikten
                Bestätigungsdurchgang. Verdrück dich im zweiten Durchgang
                und das Szenario scheitert mit kontextbezogenem Text.
              </p>
            </div>
            <div className="feature reveal">
              <h4>14 Stunden Auto-Aus</h4>
              <p>
                Live-Countdown auf dem Bildschirm. Entspricht dem Verhalten
                des echten Geräts. In den Einstellungen während des Übens
                abschaltbar.
              </p>
            </div>
            <div className="feature reveal">
              <h4>A0 bis A9</h4>
              <p>
                Zehn Aktivierungshöhen-Stufen, je 30&nbsp;ft, einstellbar
                mit dem authentischen Drücken-Halten-Auswählen-Ablauf.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Vier Betriebsmodi</h4>
              <p>
                Expert, Student, Tandem, Speed. Jeder hat sein eigenes
                Auslöseprofil und seine eigene Modus-Wechsel-Bestätigung.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Dropzone Offset</h4>
              <p>
                Setze den Höhenunterschied zwischen Absprung und Landung in
                Schritten von ±30&nbsp;ft (oder ±10&nbsp;m).
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
            Hintergründe, die du anlassen wirst.
          </h2>
          <p className="section-intro reveal">
            AAD lab ist zum Mitleben gedacht. Wähle einen Hintergrund, der
            deinen Augen für lange Lerneinheiten gefällt. Jeder ist
            konfigurierbar, GPU-schonend und pausiert, wenn die App im
            Hintergrund läuft.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Cosmos</h4>
              <p>
                Sanfte Partikelspuren, die einer unsichtbaren Strömung
                folgen, wie Tinte in fließendem Wasser. Blaues oder
                schwarzes Eck-Leuchten.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Aurora</h4>
              <p>
                Sanfte rosa Lichtbänder, die über den Bildschirm ziehen.
                Stelle Deckkraft, Fließrichtung und Schwung ein.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Aurora Rain</h4>
              <p>
                Aurora-Filamente, die über einen Decode-Regen aus
                DZ-Namen aus deiner Region ziehen. Die DZ-Liste ist nach
                deinem Land gefiltert.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Compass</h4>
              <p>
                Dropzones positioniert in ihrer tatsächlichen Peilung von
                deinem Standort aus. Drehe das Handy, um dich umzusehen.
                Nutzt deine Geräteausrichtung, ausschließlich auf dem Gerät.
              </p>
            </div>
            <div className="feature reveal">
              <h4>DZ Rain</h4>
              <p>
                Dekodierender Strom von DZ-Namen aus deiner Region. Jede
                Spalte löst sich Zeichen für Zeichen auf, wie ein
                Missionsbriefing.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Universe</h4>
              <p>
                Zoome vom Globus hinunter durch Kontinente bis zu einzelnen
                Dropzones. Ein Verzeichnis und ein Stück Dekoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Design ──────────────────────────────────────── */}
      <section id="design">
        <div className="container">
          <p className="section-label">Design</p>
          <h2 className="section-title reveal">Dunkel, taktil, bewusst.</h2>
          <p className="section-intro reveal">
            Die Oberfläche entspricht dem Geist der Hardware: ein
            Metall-Finish-Display unter Glas, magenta-akzentuierte
            Bedienelemente, federbasierte Bewegung und eine ruhige dunkle
            Ästhetik, die dich machen lässt.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Glasmorphismus-Ebenen</h4>
              <p>
                Durchscheinende Pillen und Karten, geschichtet über einen
                tiefen Cosmos-Verlauf. Informationen wirken von der
                Oberfläche abgehoben.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Federanimationen</h4>
              <p>
                Jeder Übergang nutzt physikbasierte Bewegung mit gestaffeltem
                Einstieg. Nichts schnappt, nichts hakt.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Haptisches Feedback</h4>
              <p>
                Vier Intensitätsstufen auf der Taptic Engine des iPhones.
                Auf Android ein einfacher Ein/Aus-Schalter. Typische
                Vibrationsmotoren können die Stufen nicht zuverlässig
                unterscheiden.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Theme-Wechsel</h4>
              <p>
                Blue Cosmos für die Tageszeit, Black Cosmos für den späten
                Abend. Beide behalten das Marken-Magenta als einzigen
                tragenden Akzent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Languages ───────────────────────────────────── */}
      <section id="languages">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">Sprachen</p>
          <h2
            className="section-title reveal"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Sechs Sprachen. Handbuchgenaue Terminologie.
          </h2>
          <p
            className="section-intro reveal"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Jede Sprache verwendet die exakte Terminologie aus dem
            offiziellen CYPRES&nbsp;2-Handbuch für die jeweilige Region. Was
            du hier lernst, ist das, was du an der DZ sehen und hören
            wirst.
          </p>
          <div className="lang-row">
            <span className="lang-pill">
              <strong>EN</strong> English
            </span>
            <span className="lang-pill current">
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
            <span className="lang-pill">
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
              Offline &amp; privat
            </p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Keine Accounts. Kein Tracking. Nichts, was leaken kann.
            </h2>
            <p>
              AAD lab läuft komplett auf deinem Gerät. Keine Anmeldung,
              keine Netzwerkanfragen, keine Analytics, keine
              Drittanbieter-SDKs, die Daten sammeln. Deine Sprachwahl, dein
              Theme, deine Haptik-Einstellung, deine zuletzt genutzten
              Einstellungen. Gespeichert auf deinem Handy, sonst nirgends.
              Optionaler Standort- und Bewegungszugriff treibt nur den
              Compass-Hintergrund an; beides wird auf dem Gerät verarbeitet
              und verlässt dein Handy nie.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Disclaimer ──────────────────────────────────── */}
      <section id="disclaimer">
        <div className="container">
          <div className="callout reveal">
            <p className="section-label" style={{ marginBottom: 16 }}>
              Unabhängiges Tool
            </p>
            <p>
              AAD lab ist eine unabhängige Trainings- und Einarbeitungs-App.
              Sie ist{' '}
              <strong>
                nicht mit Airtec GmbH &amp; Co. KG Safety Systems verbunden,
                wird nicht von ihr unterstützt und nicht von ihr entwickelt
              </strong>
              , und sie ersetzt nicht das offizielle Handbuch oder die vom
              Hersteller bereitgestellte Schulung. Der Simulator bildet die
              Geräteoberfläche zu Bildungszwecken näherungsweise nach; das
              Verhalten kann sich vom echten Gerät unterscheiden. Konsultiere
              vor dem Bedienen des tatsächlichen Geräts immer einen von
              deiner nationalen Fallschirmsport-Behörde zertifizierten
              Ausbilder.
            </p>
            <p>
              <strong>CYPRES</strong> und <strong>CYPRES&nbsp;2</strong> sind
              Marken der Airtec GmbH &amp; Co. KG Safety Systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
