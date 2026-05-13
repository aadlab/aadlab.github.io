import Link from 'next/link';

export default function Home() {
  return (
    <main id="top">
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <img src="/aadlab-icon.png" alt="" className="hero-icon" />
          <h1>
            Apprenez à configurer votre
            <br />
            <span className="accent">CYPRES&nbsp;2 Changeable Mode</span>{' '}
            sur votre iPhone ou Android.
          </h1>
          <p className="hero-tagline">
            Devenez fluide sur la configuration réelle. Apprenez à changer de
            mode, régler la hauteur d&apos;activation, le DZ Offset, et changer
            l&apos;échelle. Des scénarios du monde réel.
          </p>
          <p className="hero-sub">Hors ligne · Sans publicité · Six langues</p>
          <nav className="hero-lang-strip" aria-label="Langues disponibles">
            <Link href="/" hrefLang="en">English</Link>
            <Link href="/de/" hrefLang="de">Deutsch</Link>
            <span className="current">Français</span>
            <Link href="/es/" hrefLang="es">Español</Link>
            <Link href="/it/" hrefLang="it">Italiano</Link>
            <Link href="/ru/" hrefLang="ru">Русский</Link>
          </nav>
          <div className="hero-cta-row">
            <a href="#imagine" className="btn btn-primary">
              Voir pourquoi c&apos;est important
            </a>
            <Link href="/support" className="btn btn-secondary">
              Support
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Imagine narratives ──────────────────────────── */}
      <section id="imagine">
        <div className="container">
          <p className="section-label">Pourquoi AAD lab</p>
          <h2 className="section-title reveal">
            Utilisez le temps que vous avez déjà.
          </h2>
          <p className="section-intro reveal">
            Les connaissances AAD ne sont pas optionnelles, mais le temps
            d&apos;apprendre se présente rarement quand vous en avez besoin.
            AAD lab comble les créneaux que vous avez déjà. Sur la route vers
            la DZ. Dans un transport bondé. Une soirée calme avant un boogie.
            Partout.
          </p>

          <div className="imagine">
            <article className="imagine-card reveal">
              <p className="num">01 · DANS L&apos;AVION</p>
              <h3>Ne soyez pas dans la file d&apos;attente.</h3>
              <p>
                Vous êtes en vol vers un boogie où la configuration AAD est
                spécifique à l&apos;événement. Trois cents parachutistes et
                seulement quelques-uns savent configurer l&apos;appareil. Leur
                temps et leur aide ne sont pas garantis.{' '}
                <span className="highlight">
                  Utilisez votre temps personnel pour apprendre
                </span>
                , pour arriver prêt, et non en attente.
              </p>
            </article>

            <article className="imagine-card reveal">
              <p className="num">02 · DANS LES TRANSPORTS</p>
              <h3>Vingt minutes dans le métro. Rentabilisez-les.</h3>
              <p>
                Paris, New York, San Francisco. Debout dans un métro bondé à
                éviter le regard des autres, c&apos;est gâcher des minutes de
                votre vie. Passez ce temps à faire quelque chose de brillant.
                Apprenez à configurer votre CYPRES sur votre téléphone. Cela
                pourrait{' '}
                <span className="highlight">
                  sauver votre vie, ou celle d&apos;un autre
                </span>
                .
              </p>
            </article>

            <article className="imagine-card reveal">
              <p className="num">03 · VOTRE PREMIER AAD</p>
              <h3>Vous le découvrez pour la première fois dans votre sac.</h3>
              <p>
                Vous venez d&apos;acheter votre premier AAD, ou vous avez
                acheté un sac livré avec un AAD déjà installé. Parfois,
                c&apos;est exactement comme ça que ça se passe. La première
                fois que vous le voyez, il est déjà à l&apos;intérieur de
                votre conteneur. Le manuel officiel est complet, mais
                statique.{' '}
                <span className="highlight">
                  AAD lab vous permet d&apos;apprendre, comprendre et
                  configurer le vôtre
                </span>
                {' '}avant même de sauter avec.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ─── About ───────────────────────────────────────── */}
      <section id="about">
        <div className="container">
          <p className="section-label">Ce que c&apos;est</p>
          <h2 className="section-title reveal">
            Une fidélité bouton par bouton, sans l&apos;appareil sur votre
            établi.
          </h2>
          <p className="section-intro reveal">
            Devenir fluide avec la séquence de commande du CYPRES&nbsp;2 est
            plus rapide quand vous pouvez vous entraîner librement. AAD lab
            recrée l&apos;écran, le timing des appuis, le retour des LED,
            chaque mode opératoire, et chaque passe de confirmation.
            Entraînez-vous chez vous, en avion, ou entre deux sauts sans
            jamais toucher à un appareil réel.
          </p>
        </div>
      </section>

      {/* ─── Lessons ─────────────────────────────────────── */}
      <section id="lessons">
        <div className="container">
          <p className="section-label">Leçons</p>
          <h2 className="section-title reveal">
            Apprenez en pratiquant. Neuf leçons guidées sur trois niveaux.
          </h2>
          <p className="section-intro reveal">
            Chaque leçon vous accompagne sur une compétence unique avec un
            retour immédiat. Appuyer, maintenir, relâcher, confirmer. Pas de
            manuels à mémoriser, pas de vidéos à parcourir.
          </p>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>101</h3>
              <span className="group-badge">Fondamentaux</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Leçon 1</p>
                <h3>Le Press Action</h3>
                <p>
                  Maîtrisez l&apos;appui-relâché rapide et précis qui sous-tend
                  chaque commande du CYPRES&nbsp;2. Ayez-le dans les doigts
                  avant toute chose.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Leçon 2</p>
                <h3>Mise sous tension</h3>
                <p>
                  Le rythme de quatre appuis synchronisé avec la LED qui
                  réveille l&apos;appareil. Reproduit fidèlement le compte à
                  rebours réel.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Leçon 3</p>
                <h3>Mise hors tension</h3>
                <p>
                  La même méthode à quatre appuis, à l&apos;envers, avec
                  l&apos;assurance de la connaître par cœur.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>201</h3>
              <span className="group-badge">Opérations quotidiennes</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Leçon 4</p>
                <h3>Afficher les données de l&apos;appareil</h3>
                <p>
                  Appui long pour faire défiler le flux d&apos;informations :
                  sauts, numéro de série, prochaine date de service, échelle,
                  hauteur d&apos;activation et mode.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Leçon 5</p>
                <h3>DZ Offset</h3>
                <p>
                  Réglez la différence d&apos;altitude entre la sortie et
                  l&apos;atterrissage par paliers de ±30&nbsp;ft (ou
                  ±10&nbsp;m). Usage unique ; effacé à la mise hors tension.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>301</h3>
              <span className="group-badge">Contrôle complet</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Leçon 6</p>
                <h3>Changer d&apos;échelle</h3>
                <p>
                  Basculez l&apos;affichage de l&apos;appareil entre pieds et
                  mètres via la navigation en trois étapes, le maintien de
                  la LED, et la passe de confirmation stricte.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Leçon 7</p>
                <h3>Changer de mode</h3>
                <p>
                  Sélectionnez Expert, Student, Tandem ou Speed via la
                  séquence complète de confirmation à deux passes. Exactement
                  comme sur l&apos;appareil réel.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Leçon 8</p>
                <h3>Hauteur d&apos;activation</h3>
                <p>
                  Parcourez le maintien LED, la passe de confirmation stricte,
                  et le retour adapté à la raison de votre erreur. Comme un
                  vrai appareil réagirait.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Leçon 9</p>
                <h3>Entraînement aux appuis</h3>
                <p>
                  Affinez le timing de votre Press Action sur un métronome
                  d&apos;essais réussis. Construit la mémoire digitale
                  rapidement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Scenarios ───────────────────────────────────── */}
      <section id="scenarios">
        <div className="container">
          <p className="section-label">Niveau 401 · Scénarios</p>
          <h2 className="section-title reveal">
            Dix-neuf défis du monde réel répartis en cinq groupes.
          </h2>
          <p className="section-intro reveal">
            D&apos;une démonstration alpine en Suisse à un CYPRES&nbsp;2
            d&apos;occasion encore réglé en mode Tandem, chaque scénario vous
            donne un briefing, vous place devant l&apos;appareil, et vous
            demande de le configurer correctement. Recommencez si vous
            échouez.
          </p>

          <div className="scenarios-grid">
            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#3ea55e' }}
            >
              <div className="scenario-group-title">
                <h3>Offset</h3>
                <span className="scenario-count">5 scénarios</span>
              </div>
              <ul className="scenario-list">
                <li>Alpes, Suisse</li>
                <li>Aérodrome, Espagne</li>
                <li>Highlands, Écosse</li>
                <li>Royal Albert Docks, Londres</li>
                <li>Camps Bay, Le Cap</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#2b97d6' }}
            >
              <div className="scenario-group-title">
                <h3>Activation</h3>
                <span className="scenario-count">7 scénarios</span>
              </div>
              <ul className="scenario-list">
                <li>Seychelles, pylône radio</li>
                <li>Casco Viejo, Panama</li>
                <li>Civic District, Singapour</li>
                <li>Plaza Revolución, La Havane</li>
                <li>Rio, hôtels</li>
                <li>Grand Prix, Monaco</li>
                <li>Chutes Victoria, panache d&apos;embruns</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#9a6bff' }}
            >
              <div className="scenario-group-title">
                <h3>Combinés</h3>
                <span className="scenario-count">4 scénarios</span>
              </div>
              <ul className="scenario-list">
                <li>Saut sur plage, Aruba</li>
                <li>Parc Bolívar, Bogotá</li>
                <li>Saut dans la Caldera, Santorin</li>
                <li>Queenstown, Nouvelle-Zélande</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#e48a2a' }}
            >
              <div className="scenario-group-title">
                <h3>Autres</h3>
                <span className="scenario-count">2 scénarios</span>
              </div>
              <ul className="scenario-list">
                <li>Himalaya, altitude extrême</li>
                <li>Eloy, Arizona : passer aux mètres</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#ff04cd' }}
            >
              <div className="scenario-group-title">
                <h3>Revente</h3>
                <span className="scenario-count">1 scénario</span>
              </div>
              <ul className="scenario-list">
                <li>Tandem vers Expert, appareil d&apos;occasion</li>
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
            Tout le CYPRES&nbsp;2, à votre rythme.
          </h2>
          <p className="section-intro reveal">
            Une fois les bases automatiques, plongez dans le Playground et
            explorez chaque état du CYPRES&nbsp;2 à votre propre rythme. Pas
            de leçon, pas de scénario. Juste vous et l&apos;appareil.
          </p>
          <div className="cards">
            <div className="card">
              <p className="card-tier">Alimentation</p>
              <h3>Séquence d&apos;auto-test</h3>
              <p>
                Activez ou désactivez l&apos;alimentation et observez la
                séquence d&apos;auto-test LED à quatre clignotements ainsi que
                le compte à rebours d&apos;arrêt automatique de 14 heures.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Info</p>
              <h3>Cycle des infos appareil</h3>
              <p>
                Appui long à travers les sauts, le numéro de série, la
                prochaine date de service, l&apos;échelle, l&apos;altitude et
                le mode opératoire.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Modes</p>
              <h3>Expert · Student · Tandem · Speed</h3>
              <p>
                Changez de mode opératoire via la véritable confirmation en
                trois étapes. Chacun a son propre profil d&apos;activation.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Altitude</p>
              <h3>A0 à A9</h3>
              <p>
                Réglez la hauteur d&apos;activation sur les dix paliers avec
                le flux authentique d&apos;appui-maintien-sélection.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Offset</p>
              <h3>DZ Offset</h3>
              <p>
                Réglez la différence d&apos;altitude entre la sortie et
                l&apos;atterrissage par incréments de ±30&nbsp;ft (ou
                ±10&nbsp;m).
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Réinitialisation</p>
              <h3>Réglages d&apos;usine</h3>
              <p>
                Un seul appui remet l&apos;appareil dans son état de première
                mise sous tension. Entraînez-vous à toute la séquence de
                configuration depuis le début.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fidelity ────────────────────────────────────── */}
      <section id="fidelity">
        <div className="container">
          <p className="section-label">Fidélité</p>
          <h2 className="section-title reveal">
            Timing des appuis, signalisation LED, auto-test. Tout est recréé.
          </h2>
          <p className="section-intro reveal">
            AAD lab distingue un Press Action rapide d&apos;un appui-maintien
            et réagit comme le ferait l&apos;appareil réel. Chaque
            clignotement de LED, chaque transition d&apos;affichage, chaque
            indicateur de mode est modélisé sur le vrai CYPRES&nbsp;2.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Appui simple ou maintenu</h4>
              <p>
                Appui rapide pour la sélection, maintien soutenu pour la
                navigation. Le même seuil que vos doigts doivent apprendre
                sur un appareil réel.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Confirmation à deux passes</h4>
              <p>
                Le changement de mode et la hauteur d&apos;activation
                nécessitent une passe de confirmation stricte. Une erreur sur
                la deuxième passe et le scénario échoue avec un message
                expliquant la raison.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Arrêt automatique à 14 heures</h4>
              <p>
                Compte à rebours en direct à l&apos;écran. Identique au
                comportement de l&apos;appareil réel. Désactivez-le dans les
                réglages pendant l&apos;entraînement.
              </p>
            </div>
            <div className="feature reveal">
              <h4>A0 à A9</h4>
              <p>
                Dix paliers de hauteur d&apos;activation, 30&nbsp;ft chacun,
                ajustables avec le flux authentique
                d&apos;appui-maintien-sélection.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Quatre modes opératoires</h4>
              <p>
                Expert, Student, Tandem, Speed. Chacun a son propre profil de
                déploiement et sa propre confirmation de changement de mode.
              </p>
            </div>
            <div className="feature reveal">
              <h4>DZ Offset</h4>
              <p>
                Réglez la différence d&apos;altitude entre la sortie et
                l&apos;atterrissage par incréments de ±30&nbsp;ft (ou
                ±10&nbsp;m).
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
            Des arrière-plans que vous garderez activés.
          </h2>
          <p className="section-intro reveal">
            AAD lab est conçu pour vivre avec vous. Choisissez un arrière-plan
            qui convient à vos yeux pour les longues sessions
            d&apos;étude. Chacun est configurable, léger pour le GPU, et se
            met en pause quand l&apos;app passe en arrière-plan.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Cosmos</h4>
              <p>
                De douces traînées de particules dérivant le long d&apos;un
                courant invisible, comme de l&apos;encre dans une eau qui
                bouge. Lueur d&apos;angle bleue ou noire.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Aurora</h4>
              <p>
                De douces rubans roses de lumière dérivant sur
                l&apos;écran. Réglez l&apos;opacité, la direction du flux, et
                le balancement.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Aurora Rain</h4>
              <p>
                Des filaments Aurora dérivant sur une pluie de décodage de
                noms de DZ de votre région. La liste DZ est filtrée
                géographiquement selon votre pays.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Compass</h4>
              <p>
                Les DZ positionnées à leur véritable orientation depuis votre
                position. Tournez le téléphone pour regarder autour de vous.
                Utilise l&apos;orientation de votre appareil, uniquement sur
                votre téléphone.
              </p>
            </div>
            <div className="feature reveal">
              <h4>DZ Rain</h4>
              <p>
                Un flux de décodage des noms de DZ de votre région. Chaque
                colonne se résout caractère par caractère, comme un briefing
                de mission.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Universe</h4>
              <p>
                Pincez depuis un globe à travers les continents jusqu&apos;aux
                DZ individuelles. Un annuaire et un élément de décoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Design ──────────────────────────────────────── */}
      <section id="design">
        <div className="container">
          <p className="section-label">Design</p>
          <h2 className="section-title reveal">Sombre, tactile, délibéré.</h2>
          <p className="section-intro reveal">
            L&apos;interface s&apos;accorde à l&apos;esprit du matériel : un
            affichage finition métal sous verre, des commandes accentuées de
            magenta, des animations à physique de ressort, et une esthétique
            sombre et discrète qui ne vous gêne pas.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Couches glassmorphism</h4>
              <p>
                Pastilles et cartes translucides superposées sur un dégradé
                Cosmos profond. L&apos;information semble flotter au-dessus
                de la surface.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Animations à ressort</h4>
              <p>
                Chaque transition utilise une animation basée sur la physique
                avec une entrée échelonnée. Rien ne claque, rien ne lague.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Retour haptique</h4>
              <p>
                Quatre niveaux d&apos;intensité sur le Taptic Engine de
                l&apos;iPhone. Sur Android, un simple commutateur
                marche/arrêt. Les moteurs typiques ne peuvent pas distinguer
                les niveaux de manière fiable.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Changement de thème</h4>
              <p>
                Blue Cosmos pour les journées lumineuses, Black Cosmos pour
                les soirées profondes. Tous deux conservent le magenta de la
                marque comme unique accent porteur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Languages ───────────────────────────────────── */}
      <section id="languages">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">Langues</p>
          <h2
            className="section-title reveal"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Six langues. Une terminologie fidèle au manuel.
          </h2>
          <p
            className="section-intro reveal"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Chaque langue utilise la terminologie exacte du manuel officiel
            du CYPRES&nbsp;2 pour cette région. Ce que vous apprenez ici est
            ce que vous verrez et entendrez à la DZ.
          </p>
          <div className="lang-row">
            <span className="lang-pill">
              <strong>EN</strong> English
            </span>
            <span className="lang-pill">
              <strong>DE</strong> Deutsch
            </span>
            <span className="lang-pill current">
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
              Hors ligne &amp; privé
            </p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Pas de comptes. Pas de suivi. Rien à divulguer.
            </h2>
            <p>
              AAD lab fonctionne entièrement sur votre appareil. Pas
              d&apos;inscription, pas de requêtes réseau, pas d&apos;analytique,
              pas de SDK tiers qui collectent des données. Votre choix de
              langue, votre thème, votre préférence haptique, vos derniers
              réglages. Stockés sur votre téléphone, nulle part ailleurs.
              L&apos;accès optionnel à la localisation et au mouvement
              alimente uniquement l&apos;arrière-plan Compass ; les deux sont
              traités sur l&apos;appareil et ne quittent jamais votre
              téléphone.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Disclaimer ──────────────────────────────────── */}
      <section id="disclaimer">
        <div className="container">
          <div className="callout reveal">
            <p className="section-label" style={{ marginBottom: 16 }}>
              Outil indépendant
            </p>
            <p>
              AAD lab est une application indépendante d&apos;entraînement et
              de familiarisation. Elle{' '}
              <strong>
                n&apos;est pas affiliée à, approuvée par, ni développée par
                Airtec GmbH &amp; Co. KG Safety Systems
              </strong>
              , et elle ne remplace pas le manuel officiel ni la formation
              fournie par le fabricant. Le simulateur reproduit
              l&apos;interface de l&apos;appareil à des fins éducatives ; le
              comportement peut différer de celui de l&apos;appareil réel.
              Consultez toujours un instructeur certifié par votre autorité
              parachutiste nationale avant d&apos;utiliser l&apos;appareil
              réel.
            </p>
            <p>
              <strong>CYPRES</strong> et <strong>CYPRES&nbsp;2</strong> sont
              des marques déposées d&apos;Airtec GmbH &amp; Co. KG Safety
              Systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
