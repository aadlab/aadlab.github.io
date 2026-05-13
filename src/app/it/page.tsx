import Link from 'next/link';

export default function Home() {
  return (
    <main id="top">
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <img src="/aadlab-icon.png" alt="" className="hero-icon" />
          <h1>
            Impara a configurare il tuo
            <br />
            <span className="accent">CYPRES&nbsp;2 Changeable Mode</span>{' '}
            su iPhone o Android.
          </h1>
          <p className="hero-tagline">
            Diventa fluente sulla configurazione reale. Impara a cambiare
            modalità, impostare l&apos;altitudine di attivazione, il DZ
            Offset e cambiare la scala. Scenari del mondo reale.
          </p>
          <p className="hero-sub">Offline · Senza pubblicità · Sei lingue</p>
          <nav className="hero-lang-strip" aria-label="Lingue disponibili">
            <Link href="/" hrefLang="en">English</Link>
            <Link href="/de/" hrefLang="de">Deutsch</Link>
            <Link href="/fr/" hrefLang="fr">Français</Link>
            <Link href="/es/" hrefLang="es">Español</Link>
            <span className="current">Italiano</span>
            <Link href="/ru/" hrefLang="ru">Русский</Link>
          </nav>
          <div className="hero-cta-row">
            <a href="#imagine" className="btn btn-primary">
              Scopri perché è importante
            </a>
            <Link href="/it/support" className="btn btn-secondary">
              Supporto
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Imagine narratives ──────────────────────────── */}
      <section id="imagine">
        <div className="container">
          <p className="section-label">Perché AAD lab</p>
          <h2 className="section-title reveal">
            Usa il tempo che hai già.
          </h2>
          <p className="section-intro reveal">
            La conoscenza dell&apos;AAD non è opzionale, ma il tempo per
            impararla raramente arriva quando ti serve. AAD lab riempie i
            vuoti che hai già. In viaggio verso la DZ. Su un treno
            affollato. In una sera tranquilla prima di un boogie. Ovunque.
          </p>

          <div className="imagine">
            <article className="imagine-card reveal">
              <p className="num">01 · IN VOLO</p>
              <h3>Non restare in coda.</h3>
              <p>
                Sei su un volo verso un boogie dove la configurazione
                dell&apos;AAD è specifica per l&apos;evento. Trecento
                paracadutisti e solo pochi sanno come configurare
                l&apos;unità. Il loro tempo e il loro aiuto non sono
                garantiti.{' '}
                <span className="highlight">
                  Usa il tuo tempo personale per imparare
                </span>
                , così arrivi pronto, non in attesa.
              </p>
            </article>

            <article className="imagine-card reveal">
              <p className="num">02 · NEL TRAGITTO</p>
              <h3>Venti minuti in metro. Falli contare.</h3>
              <p>
                Londra, New York, San Francisco. In piedi in una metro
                affollata evitando gli sguardi: sono minuti della tua vita
                sprecati. Passa quel tempo facendo qualcosa di brillante.
                Impara a configurare il tuo CYPRES dal telefono.
                Potrebbe{' '}
                <span className="highlight">
                  salvare la tua vita, o quella di qualcun altro
                </span>
                .
              </p>
            </article>

            <article className="imagine-card reveal">
              <p className="num">03 · IL TUO PRIMO AAD</p>
              <h3>Lo incontri per la prima volta nel tuo rig.</h3>
              <p>
                Hai appena comprato il tuo primo AAD, oppure hai comprato
                un rig che ne aveva già uno montato. A volte va proprio
                così. La prima volta che lo vedi è già dentro il tuo
                container. Il manuale ufficiale è completo, ma statico.{' '}
                <span className="highlight">
                  AAD lab ti permette di imparare, capire e configurare il
                  tuo
                </span>
                {' '}prima ancora di saltarci.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ─── About ───────────────────────────────────────── */}
      <section id="about">
        <div className="container">
          <p className="section-label">Cos&apos;è</p>
          <h2 className="section-title reveal">
            Fedeltà tasto per tasto, senza l&apos;unità sul banco.
          </h2>
          <p className="section-intro reveal">
            Diventare fluenti con la sequenza di controllo del
            CYPRES&nbsp;2 è più rapido quando puoi esercitarti liberamente.
            AAD lab ricrea il display, i tempi di pressione, il feedback
            LED, ogni modalità operativa e ogni passaggio di conferma.
            Allenati a casa, in aereo o tra un salto e l&apos;altro senza
            mai toccare un&apos;unità reale.
          </p>
        </div>
      </section>

      {/* ─── Lessons ─────────────────────────────────────── */}
      <section id="lessons">
        <div className="container">
          <p className="section-label">Lezioni</p>
          <h2 className="section-title reveal">
            Impara facendo. Nove lezioni guidate su tre livelli di abilità.
          </h2>
          <p className="section-intro reveal">
            Ogni lezione ti guida attraverso una singola abilità con
            feedback immediato. Premi, tieni premuto, rilascia, conferma.
            Nessun manuale da memorizzare, nessun video da scorrere.
          </p>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>101</h3>
              <span className="group-badge">Fondamenti</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Lezione 1</p>
                <h3>The Press Action</h3>
                <p>
                  Padroneggia la pressione rapida e decisa che è alla base
                  di ogni comando del CYPRES&nbsp;2. Mandala nelle dita
                  prima di qualsiasi altra cosa.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lezione 2</p>
                <h3>Accensione</h3>
                <p>
                  Il ritmo di quattro pressioni sincronizzate col LED che
                  porta in vita l&apos;unità. Rispecchia esattamente il
                  conto alla rovescia reale.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lezione 3</p>
                <h3>Spegnimento</h3>
                <p>
                  Lo stesso metodo a quattro pressioni, al contrario, con
                  la sicurezza di conoscerlo a memoria.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>201</h3>
              <span className="group-badge">Uso quotidiano</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Lezione 4</p>
                <h3>Visualizza dati dispositivo</h3>
                <p>
                  Tieni premuto per scorrere il flusso di informazioni
                  sull&apos;unità: voli, numero di serie, prossima data di
                  servizio, scala, altitudine di attivazione e modalità.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lezione 5</p>
                <h3>DZ Offset</h3>
                <p>
                  Imposta la differenza di quota tra uscita e atterraggio
                  in passi di ±30&nbsp;ft (o ±10&nbsp;m). Monouso: si
                  azzera allo spegnimento.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>301</h3>
              <span className="group-badge">Controllo completo</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Lezione 6</p>
                <h3>Cambia scala</h3>
                <p>
                  Cambia la visualizzazione dell&apos;unità tra piedi e
                  metri tramite la navigazione a tre fasi, il LED hold e
                  il passaggio di conferma rigoroso.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lezione 7</p>
                <h3>Cambia modalità</h3>
                <p>
                  Seleziona Expert, Student, Tandem o Speed attraverso la
                  sequenza di conferma a due passaggi completa.
                  Esattamente come sull&apos;unità reale.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lezione 8</p>
                <h3>Altitudine di attivazione</h3>
                <p>
                  Affronta il LED hold, il passaggio di conferma rigoroso
                  e il feedback contestuale quando sbagli. Come
                  risponderebbe un dispositivo reale.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lezione 9</p>
                <h3>Pratica Stab</h3>
                <p>
                  Affina la tempistica del tuo Press Action su un
                  metronomo di tentativi riusciti. Costruisce la memoria
                  delle dita velocemente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Scenarios ───────────────────────────────────── */}
      <section id="scenarios">
        <div className="container">
          <p className="section-label">Tier 401 · Scenari</p>
          <h2 className="section-title reveal">
            Diciannove sfide del mondo reale in cinque gruppi.
          </h2>
          <p className="section-intro reveal">
            Da una demo alpina in Svizzera a un CYPRES&nbsp;2 di seconda
            mano ancora impostato su modalità Tandem, ogni scenario ti dà
            un briefing, ti mette davanti al dispositivo e ti chiede di
            configurarlo correttamente. Riprova se non ci riesci.
          </p>

          <div className="scenarios-grid">
            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#3ea55e' }}
            >
              <div className="scenario-group-title">
                <h3>Offset</h3>
                <span className="scenario-count">5 scenari</span>
              </div>
              <ul className="scenario-list">
                <li>Alpi, Svizzera</li>
                <li>Aeroporto, Spagna</li>
                <li>Highland, Scozia</li>
                <li>Royal Albert Docks, Londra</li>
                <li>Camps Bay, Città del Capo</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#2b97d6' }}
            >
              <div className="scenario-group-title">
                <h3>Attivazione</h3>
                <span className="scenario-count">7 scenari</span>
              </div>
              <ul className="scenario-list">
                <li>Seychelles, antenna radio</li>
                <li>Casco Viejo, Panama City</li>
                <li>Civic District, Singapore</li>
                <li>Plaza Revolución, L&apos;Avana</li>
                <li>Rio, hotel</li>
                <li>Gran Premio, Monaco</li>
                <li>Cascate Vittoria, pennacchio</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#9a6bff' }}
            >
              <div className="scenario-group-title">
                <h3>Combinati</h3>
                <span className="scenario-count">4 scenari</span>
              </div>
              <ul className="scenario-list">
                <li>Salto in spiaggia, Aruba</li>
                <li>Parco Bolívar, Bogotá</li>
                <li>Caldera Drop, Santorini</li>
                <li>Queenstown, Nuova Zelanda</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#e48a2a' }}
            >
              <div className="scenario-group-title">
                <h3>Altri</h3>
                <span className="scenario-count">2 scenari</span>
              </div>
              <ul className="scenario-list">
                <li>Himalaya, quota estrema</li>
                <li>Eloy, Arizona: passaggio ai metri</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#ff04cd' }}
            >
              <div className="scenario-group-title">
                <h3>Rivendita</h3>
                <span className="scenario-count">1 scenario</span>
              </div>
              <ul className="scenario-list">
                <li>Da Tandem a Expert, unità di seconda mano</li>
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
            Tutto il CYPRES&nbsp;2, alle tue condizioni.
          </h2>
          <p className="section-intro reveal">
            Una volta che le basi sono automatiche, entra nel Playground
            ed esplora ogni stato del CYPRES&nbsp;2 al tuo ritmo. Niente
            lezioni, niente scenari. Solo tu e l&apos;unità.
          </p>
          <div className="cards">
            <div className="card">
              <p className="card-tier">Accensione</p>
              <h3>Sequenza di autotest</h3>
              <p>
                Accendi e spegni e osserva in tempo reale la sequenza di
                autotest a quattro lampeggi del LED e il conto alla
                rovescia di spegnimento automatico di 14 ore.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Info</p>
              <h3>Ciclo info unità</h3>
              <p>
                Scorri con la pressione lunga tra voli, numero di serie,
                prossima data di servizio, scala, altitudine e modalità
                operativa.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Modalità</p>
              <h3>Expert · Student · Tandem · Speed</h3>
              <p>
                Cambia modalità operativa attraverso la conferma autentica
                a tre fasi. Ognuna ha il proprio profilo di attivazione.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Altitudine</p>
              <h3>Da A0 ad A9</h3>
              <p>
                Regola l&apos;altitudine di attivazione lungo i dieci
                passi con l&apos;autentico flusso premi-tieni-seleziona.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Offset</p>
              <h3>DZ Offset</h3>
              <p>
                Imposta la differenza di quota tra uscita e atterraggio in
                incrementi di ±30&nbsp;ft (o ±10&nbsp;m).
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Reset</p>
              <h3>Impostazioni di fabbrica</h3>
              <p>
                Un tocco riporta l&apos;unità allo stato di prima
                accensione. Esercitati con tutto il flusso di
                configurazione da zero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fidelity ────────────────────────────────────── */}
      <section id="fidelity">
        <div className="container">
          <p className="section-label">Fedeltà</p>
          <h2 className="section-title reveal">
            Tempi di pressione, segnalazione LED, autotest. Tutto
            ricreato.
          </h2>
          <p className="section-intro reveal">
            AAD lab distingue un Press Action rapido da una
            pressione-mantenuta e reagisce come fa l&apos;unità reale.
            Ogni lampeggio del LED, ogni transizione del display, ogni
            indicatore di modalità è modellato sul vero CYPRES&nbsp;2.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Pressione vs pressione-mantenuta</h4>
              <p>
                Tocco rapido per la selezione, pressione prolungata per la
                navigazione. La stessa soglia che le tue dita devono
                imparare su un&apos;unità reale.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Conferma a due passaggi</h4>
              <p>
                Il cambio di modalità e l&apos;altitudine di attivazione
                richiedono un passaggio di conferma rigoroso. Sbaglia al
                secondo passaggio e lo scenario fallisce con un messaggio
                contestuale.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Spegnimento automatico a 14 ore</h4>
              <p>
                Conto alla rovescia mostrato a schermo in tempo reale.
                Corrisponde al comportamento dell&apos;unità reale.
                Disattivalo dalle impostazioni mentre ti alleni.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Da A0 ad A9</h4>
              <p>
                Dieci passi di altitudine di attivazione, 30&nbsp;ft
                ciascuno, regolabili con l&apos;autentico flusso
                premi-tieni-seleziona.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Quattro modalità operative</h4>
              <p>
                Expert, Student, Tandem, Speed. Ognuna ha il proprio
                profilo di apertura e la propria conferma di cambio
                modalità.
              </p>
            </div>
            <div className="feature reveal">
              <h4>DZ Offset</h4>
              <p>
                Imposta la differenza di quota tra uscita e atterraggio in
                incrementi di ±30&nbsp;ft (o ±10&nbsp;m).
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
            Sfondi che vorrai tenere accesi.
          </h2>
          <p className="section-intro reveal">
            AAD lab è pensata per essere vissuta. Scegli uno sfondo che si
            adatta ai tuoi occhi per lunghe sessioni di studio. Ognuno è
            configurabile, leggero per la GPU e si mette in pausa quando
            l&apos;app è in background.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Cosmos</h4>
              <p>
                Scie di particelle morbide che fluttuano lungo una
                corrente invisibile, come inchiostro in acqua in
                movimento. Bagliore d&apos;angolo Blue o Black.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Aurora</h4>
              <p>
                Morbidi nastri di luce rosa che fluttuano sullo schermo.
                Regola opacità, direzione del flusso e oscillazione.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Aurora Rain</h4>
              <p>
                Filamenti dell&apos;Aurora che fluttuano sopra una pioggia
                di nomi di DZ in decodifica dalla tua regione. La lista
                delle DZ è filtrata in base al tuo paese.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Compass</h4>
              <p>
                DZ posizionate sul loro azimut reale rispetto alla tua
                posizione. Ruota il telefono per guardarti intorno. Usa
                la bussola del dispositivo, solo on-device.
              </p>
            </div>
            <div className="feature reveal">
              <h4>DZ Rain</h4>
              <p>
                Flusso in decodifica di nomi di DZ della tua regione. Ogni
                colonna si risolve carattere per carattere, come un
                briefing di missione.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Universe</h4>
              <p>
                Pizzica da un globo, attraverso i continenti, fino alle
                singole DZ. Un elenco e un elemento decorativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Design ──────────────────────────────────────── */}
      <section id="design">
        <div className="container">
          <p className="section-label">Design</p>
          <h2 className="section-title reveal">Scuro, tattile, deliberato.</h2>
          <p className="section-intro reveal">
            L&apos;interfaccia ricalca lo spirito dell&apos;hardware: un
            display con finitura metallica sotto vetro, controlli con
            accenti magenta, movimento con fisica a molla e un
            estetica scura silenziosa che non ti intralcia.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Livelli glassmorphism</h4>
              <p>
                Pill traslucide e card sovrapposte a un profondo gradiente
                Cosmos. Le informazioni sembrano sollevate dalla
                superficie.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Animazioni a molla</h4>
              <p>
                Ogni transizione usa un movimento basato sulla fisica con
                ingresso scaglionato. Niente scatta, niente rallenta.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Feedback aptico</h4>
              <p>
                Quattro livelli di intensità sul Taptic Engine
                dell&apos;iPhone. Su Android, un semplice interruttore
                on/off. I motori tipici non riescono a differenziare i
                livelli in modo affidabile.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Cambio tema</h4>
              <p>
                Blue Cosmos per le ore di luce, Black Cosmos per la sera
                profonda. Entrambi mantengono il magenta del brand come
                unico accento portante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Languages ───────────────────────────────────── */}
      <section id="languages">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">Lingue</p>
          <h2
            className="section-title reveal"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Sei localizzazioni. Terminologia fedele al manuale.
          </h2>
          <p
            className="section-intro reveal"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Ogni lingua usa la terminologia esatta del manuale ufficiale
            del CYPRES&nbsp;2 per quella regione. Quello che impari qui è
            quello che vedrai e sentirai in DZ.
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
            <span className="lang-pill current">
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
              Offline &amp; privato
            </p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Nessun account. Nessun tracciamento. Niente da far trapelare.
            </h2>
            <p>
              AAD lab gira interamente sul tuo dispositivo. Nessuna
              registrazione, nessuna richiesta di rete, nessun analytics,
              nessun SDK di terze parti che raccoglie dati. La tua lingua,
              il tuo tema, le tue preferenze aptiche, le tue ultime
              impostazioni. Memorizzate sul tuo telefono, da nessun&apos;altra
              parte. L&apos;accesso opzionale a posizione e movimento
              alimenta solo lo sfondo Compass; entrambi sono elaborati
              on-device e non lasciano mai il tuo telefono.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Disclaimer ──────────────────────────────────── */}
      <section id="disclaimer">
        <div className="container">
          <div className="callout reveal">
            <p className="section-label" style={{ marginBottom: 16 }}>
              Strumento indipendente
            </p>
            <p>
              AAD lab è un&apos;app indipendente di formazione e
              familiarizzazione. Non è{' '}
              <strong>
                affiliata, approvata o sviluppata da Airtec GmbH &amp; Co.
                KG Safety Systems
              </strong>
              , e non sostituisce il manuale ufficiale né la formazione
              fornita dal produttore. Il simulatore approssima
              l&apos;interfaccia del dispositivo a scopo didattico; il
              comportamento può differire da quello dell&apos;unità reale.
              Consulta sempre un istruttore certificato dalla tua autorità
              nazionale del paracadutismo prima di operare il dispositivo
              reale.
            </p>
            <p>
              <strong>CYPRES</strong> e <strong>CYPRES&nbsp;2</strong> sono
              marchi di Airtec GmbH &amp; Co. KG Safety Systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
