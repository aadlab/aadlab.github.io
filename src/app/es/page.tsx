import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AAD lab · Simulador del CYPRES 2',
  description:
    'Aprende a configurar tu CYPRES 2 Changeable Mode en tu iPhone o Android. Sin conexión, sin anuncios, en seis idiomas.',
  openGraph: {
    title: 'AAD lab · Simulador del CYPRES 2',
    description:
      'Aprende a configurar tu CYPRES 2 Changeable Mode en tu iPhone o Android. Sin conexión, sin anuncios, en seis idiomas.',
  },
};

export default function Home() {
  return (
    <main id="top">
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <img src="/aadlab-icon.png" alt="" className="hero-icon" />
          <h1>
            Aprende a configurar tu
            <br />
            <span className="accent">CYPRES&nbsp;2 Changeable Mode</span>{' '}
            en tu iPhone o Android.
          </h1>
          <p className="hero-tagline">
            Domina la configuración real. Aprende a cambiar de modo, ajustar
            la altura de activación, el DZ offset y cambiar la escala.
            Escenarios reales.
          </p>
          <p className="hero-sub">Sin conexión · Sin anuncios · Seis idiomas</p>
          <nav className="hero-lang-strip" aria-label="Idiomas disponibles">
            <Link href="/" hrefLang="en">English</Link>
            <Link href="/de/" hrefLang="de">Deutsch</Link>
            <Link href="/fr/" hrefLang="fr">Français</Link>
            <span className="current">Español</span>
            <Link href="/it/" hrefLang="it">Italiano</Link>
            <Link href="/ru/" hrefLang="ru">Русский</Link>
          </nav>
          <div className="hero-cta-row">
            <a href="#imagine" className="btn btn-primary">
              Descubre por qué importa
            </a>
            <Link href="/support" className="btn btn-secondary">
              Soporte
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Imagine narratives ──────────────────────────── */}
      <section id="imagine">
        <div className="container">
          <p className="section-label">Por qué AAD lab</p>
          <h2 className="section-title reveal">
            Aprovecha el tiempo que ya tienes.
          </h2>
          <p className="section-intro reveal">
            El conocimiento del AAD no es opcional, pero el tiempo para
            aprenderlo rara vez aparece cuando lo necesitas. AAD lab llena los
            huecos que ya tienes. De camino al DZ. En un transporte abarrotado.
            En una noche tranquila antes de un boogie. En cualquier lugar.
          </p>

          <div className="imagine">
            <article className="imagine-card reveal">
              <p className="num">01 · EN EL VUELO</p>
              <h3>No esperes en la cola.</h3>
              <p>
                Estás en un vuelo a un boogie donde la configuración del AAD
                es específica del evento. Trescientos paracaidistas y solo
                unos pocos saben configurar la unidad. Su tiempo y su ayuda
                no están garantizados.{' '}
                <span className="highlight">
                  Usa tu tiempo personal para aprender
                </span>
                , para llegar listo y no esperando.
              </p>
            </article>

            <article className="imagine-card reveal">
              <p className="num">02 · EN EL TRAYECTO</p>
              <h3>Veinte minutos en el metro. Que valgan la pena.</h3>
              <p>
                Madrid, Buenos Aires, Ciudad de México. De pie en un metro
                abarrotado evitando miradas: son minutos perdidos de tu
                vida. Dedica ese tiempo a algo brillante. Aprende a configurar
                tu CYPRES en tu móvil. Podría{' '}
                <span className="highlight">
                  salvar tu vida, o la de otra persona
                </span>
                .
              </p>
            </article>

            <article className="imagine-card reveal">
              <p className="num">03 · TU PRIMER AAD</p>
              <h3>Lo conoces por primera vez en tu equipo.</h3>
              <p>
                Acabas de comprar tu primer AAD, o has comprado un equipo que
                venía con uno instalado. A veces ocurre exactamente así. La
                primera vez que lo ves, ya está dentro de tu contenedor. El
                manual oficial es completo, pero estático.{' '}
                <span className="highlight">
                  AAD lab te deja aprender, entender y configurar el tuyo
                </span>
                {' '}antes de saltarlo.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ─── About ───────────────────────────────────────── */}
      <section id="about">
        <div className="container">
          <p className="section-label">Qué es</p>
          <h2 className="section-title reveal">
            Fidelidad botón a botón, sin tener la unidad en tu mesa.
          </h2>
          <p className="section-intro reveal">
            Dominar la secuencia de control del CYPRES&nbsp;2 es más rápido
            cuando puedes practicar con libertad. AAD lab recrea la pantalla,
            los tiempos de pulsación, las señales LED, todos los modos de
            funcionamiento y todas las confirmaciones. Practica en casa, en
            un avión o entre saltos sin tocar nunca una unidad real.
          </p>
        </div>
      </section>

      {/* ─── Lessons ─────────────────────────────────────── */}
      <section id="lessons">
        <div className="container">
          <p className="section-label">Lecciones</p>
          <h2 className="section-title reveal">
            Aprende practicando. Nueve lecciones guiadas en tres niveles.
          </h2>
          <p className="section-intro reveal">
            Cada lección te guía por una sola habilidad con feedback
            inmediato. Pulsa, mantén, suelta, confirma. Sin manuales que
            memorizar, sin vídeos que rebobinar.
          </p>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>101</h3>
              <span className="group-badge">Fundamentos</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Lección 1</p>
                <h3>La Press Action</h3>
                <p>
                  Domina la pulsación rápida y deliberada que está en la base
                  de cada comando del CYPRES&nbsp;2. Llévala a tus dedos
                  antes de cualquier otra cosa.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lección 2</p>
                <h3>Encendido</h3>
                <p>
                  El ritmo de cuatro pulsaciones sincronizado con el LED que
                  da vida a la unidad. Reproduce la cuenta atrás real con
                  exactitud.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lección 3</p>
                <h3>Apagado</h3>
                <p>
                  El mismo método de cuatro pulsaciones, a la inversa, con la
                  confianza de tenerlo dominado.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>201</h3>
              <span className="group-badge">Operación diaria</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Lección 4</p>
                <h3>Mostrar datos del dispositivo</h3>
                <p>
                  Pulsación larga para recorrer la información de la unidad:
                  vuelos, número de serie, próxima fecha de servicio, escala,
                  altitud de activación y modo.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lección 5</p>
                <h3>DZ Offset</h3>
                <p>
                  Ajusta la diferencia de altura entre la salida y el
                  aterrizaje en pasos de ±30&nbsp;ft (o ±10&nbsp;m). De un
                  solo uso; se borra al apagar.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>301</h3>
              <span className="group-badge">Control total</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Lección 6</p>
                <h3>Cambiar escala</h3>
                <p>
                  Cambia la pantalla entre pies y metros mediante la
                  navegación en tres etapas, la retención del LED y el paso
                  estricto de confirmación.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lección 7</p>
                <h3>Cambiar modo</h3>
                <p>
                  Selecciona Expert, Student, Tandem o Speed a través de la
                  secuencia completa de confirmación en dos pasos. Igual que
                  en la unidad real.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lección 8</p>
                <h3>Altura de activación</h3>
                <p>
                  Recorre la retención del LED, el paso estricto de
                  confirmación y el feedback explicativo cuando te
                  equivocas. Tal como respondería el dispositivo real.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lección 9</p>
                <h3>Práctica de pulsación</h3>
                <p>
                  Afina el ritmo de tu Press Action contra un metrónomo de
                  intentos exitosos. Construye memoria muscular rápido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Scenarios ───────────────────────────────────── */}
      <section id="scenarios">
        <div className="container">
          <p className="section-label">Tier 401 · Escenarios</p>
          <h2 className="section-title reveal">
            Diecinueve retos reales en cinco grupos.
          </h2>
          <p className="section-intro reveal">
            Desde una demo alpina en Suiza hasta un CYPRES&nbsp;2 de segunda
            mano todavía en modo Tandem, cada escenario te entrega un
            briefing, te coloca frente al dispositivo y te pide que lo
            configures correctamente. Vuelve a intentarlo si no lo logras.
          </p>

          <div className="scenarios-grid">
            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#3ea55e' }}
            >
              <div className="scenario-group-title">
                <h3>Offset</h3>
                <span className="scenario-count">5 escenarios</span>
              </div>
              <ul className="scenario-list">
                <li>Alpes, Suiza</li>
                <li>Aeródromo, España</li>
                <li>Highlands, Escocia</li>
                <li>Royal Albert Docks, Londres</li>
                <li>Camps Bay, Ciudad del Cabo</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#2b97d6' }}
            >
              <div className="scenario-group-title">
                <h3>Activación</h3>
                <span className="scenario-count">7 escenarios</span>
              </div>
              <ul className="scenario-list">
                <li>Seychelles, mástil de radio</li>
                <li>Casco Antiguo, Ciudad de Panamá</li>
                <li>Civic District, Singapur</li>
                <li>Plaza Revolución, La Habana</li>
                <li>Río, hoteles</li>
                <li>Grand Prix, Mónaco</li>
                <li>Cataratas Victoria, columna de espuma</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#9a6bff' }}
            >
              <div className="scenario-group-title">
                <h3>Combinados</h3>
                <span className="scenario-count">4 escenarios</span>
              </div>
              <ul className="scenario-list">
                <li>Salto a la playa, Aruba</li>
                <li>Parque Bolívar, Bogotá</li>
                <li>Salto a la Caldera, Santorini</li>
                <li>Queenstown, Nueva Zelanda</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#e48a2a' }}
            >
              <div className="scenario-group-title">
                <h3>Otros</h3>
                <span className="scenario-count">2 escenarios</span>
              </div>
              <ul className="scenario-list">
                <li>Himalaya, altitud extrema</li>
                <li>Eloy, Arizona: cambiar a metros</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#ff04cd' }}
            >
              <div className="scenario-group-title">
                <h3>Reventa</h3>
                <span className="scenario-count">1 escenario</span>
              </div>
              <ul className="scenario-list">
                <li>De Tandem a Expert, unidad de segunda mano</li>
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
            El CYPRES&nbsp;2 entero, a tu manera.
          </h2>
          <p className="section-intro reveal">
            Cuando lo básico ya sea automático, entra en el Playground y
            explora cada estado del CYPRES&nbsp;2 a tu propio ritmo. Sin
            lecciones, sin escenarios. Solo tú y la unidad.
          </p>
          <div className="cards">
            <div className="card">
              <p className="card-tier">Energía</p>
              <h3>Secuencia de autotest</h3>
              <p>
                Enciende y apaga, y observa en vivo la secuencia de autotest
                de cuatro destellos del LED y la cuenta atrás de apagado
                automático de 14 horas.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Info</p>
              <h3>Ciclo de información</h3>
              <p>
                Pulsación larga para recorrer vuelos, número de serie,
                próxima fecha de servicio, escala, altitud y modo de
                funcionamiento.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Modos</p>
              <h3>Expert · Student · Tandem · Speed</h3>
              <p>
                Cambia el modo de funcionamiento a través de la confirmación
                auténtica en tres etapas. Cada uno tiene su propio perfil de
                activación.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Altitud</p>
              <h3>De A0 a A9</h3>
              <p>
                Ajusta la altitud de activación entre los diez pasos con el
                auténtico flujo de pulsar, mantener y seleccionar.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Offset</p>
              <h3>DZ offset</h3>
              <p>
                Ajusta la diferencia de altura entre la salida y el
                aterrizaje en incrementos de ±30&nbsp;ft (o ±10&nbsp;m).
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Reset</p>
              <h3>Valores de fábrica</h3>
              <p>
                Un toque restaura la unidad al estado de primer encendido.
                Practica todo el flujo de configuración desde cero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fidelity ────────────────────────────────────── */}
      <section id="fidelity">
        <div className="container">
          <p className="section-label">Fidelidad</p>
          <h2 className="section-title reveal">
            Tiempos de pulsación, señales LED, autotest. Todo recreado.
          </h2>
          <p className="section-intro reveal">
            AAD lab distingue una Press Action rápida de una pulsación
            mantenida y reacciona como lo haría la unidad real. Cada
            destello del LED, cada transición de la pantalla, cada
            indicador de modo está modelado sobre el CYPRES&nbsp;2 real.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Pulsación frente a pulsación mantenida</h4>
              <p>
                Toque rápido para seleccionar, retención sostenida para
                navegar. El mismo umbral que tus dedos necesitan aprender en
                una unidad real.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Confirmación en dos pasos</h4>
              <p>
                El cambio de modo y la altitud de activación requieren un
                paso estricto de confirmación. Falla en el segundo paso y el
                escenario termina con un mensaje explicativo.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Apagado automático a las 14 horas</h4>
              <p>
                Cuenta atrás en vivo en pantalla. Coincide con el
                comportamiento de la unidad real. Desactívala en ajustes
                mientras practicas.
              </p>
            </div>
            <div className="feature reveal">
              <h4>De A0 a A9</h4>
              <p>
                Diez pasos de altitud de activación, de 30&nbsp;ft cada uno,
                ajustables con el auténtico flujo de pulsar, mantener y
                seleccionar.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Cuatro modos de funcionamiento</h4>
              <p>
                Expert, Student, Tandem, Speed. Cada uno tiene su propio
                perfil de despliegue y confirmación de cambio de modo.
              </p>
            </div>
            <div className="feature reveal">
              <h4>DZ offset</h4>
              <p>
                Ajusta la diferencia de altura entre la salida y el
                aterrizaje en incrementos de ±30&nbsp;ft (o ±10&nbsp;m).
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
            Fondos que querrás mantener encendidos.
          </h2>
          <p className="section-intro reveal">
            AAD lab está diseñado para convivir contigo. Elige un fondo que
            le siente bien a tus ojos en sesiones largas de estudio. Todos
            son configurables, ligeros en GPU y se pausan cuando la app
            queda en segundo plano.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Cosmos</h4>
              <p>
                Suaves estelas de partículas a la deriva sobre una corriente
                invisible, como tinta en agua en movimiento. Brillo azul o
                negro en las esquinas.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Aurora</h4>
              <p>
                Suaves cintas rosas de luz cruzando la pantalla. Ajusta la
                opacidad, la dirección del flujo y el balanceo.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Aurora Rain</h4>
              <p>
                Filamentos de Aurora flotando sobre una lluvia decodificada
                de nombres de DZ de tu región. La lista de DZ se filtra
                geográficamente a tu país.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Compass</h4>
              <p>
                Zonas de salto colocadas en su orientación real desde tu
                ubicación. Gira el móvil para mirar alrededor. Usa la
                brújula del dispositivo, todo en local.
              </p>
            </div>
            <div className="feature reveal">
              <h4>DZ Rain</h4>
              <p>
                Lluvia decodificada de nombres de DZ de tu región. Cada
                columna se resuelve carácter a carácter, como un briefing
                de misión.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Universe</h4>
              <p>
                Haz pinch desde un globo terráqueo, baja por los continentes
                y llega a zonas de salto concretas. Un directorio y una
                pieza decorativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Design ──────────────────────────────────────── */}
      <section id="design">
        <div className="container">
          <p className="section-label">Diseño</p>
          <h2 className="section-title reveal">Oscuro, táctil, deliberado.</h2>
          <p className="section-intro reveal">
            La interfaz refleja el espíritu del hardware: un display con
            acabado metálico bajo cristal, controles con acentos magenta,
            movimiento con física de muelle y una estética oscura y
            silenciosa que no estorba.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Capas de glassmorphism</h4>
              <p>
                Pastillas y tarjetas translúcidas superpuestas sobre un
                gradiente profundo de Cosmos. La información parece
                levantada de la superficie.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Animaciones de muelle</h4>
              <p>
                Cada transición usa movimiento basado en física con entrada
                escalonada. Nada salta, nada va lento.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Feedback háptico</h4>
              <p>
                Cuatro niveles de intensidad en el Taptic Engine del iPhone.
                En Android, un simple interruptor on/off. Los motores
                típicos no diferencian los niveles de forma fiable.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Cambio de tema</h4>
              <p>
                Blue Cosmos para la tanda diurna, Black Cosmos para la
                noche profunda. Ambos mantienen el magenta de la marca como
                único acento principal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Languages ───────────────────────────────────── */}
      <section id="languages">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">Idiomas</p>
          <h2
            className="section-title reveal"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Seis idiomas. Terminología fiel al manual.
          </h2>
          <p
            className="section-intro reveal"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Cada idioma usa la terminología exacta del manual oficial del
            CYPRES&nbsp;2 de esa región. Lo que aprendes aquí es lo que
            verás y escucharás en el DZ.
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
            <span className="lang-pill current">
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
              Sin conexión y privado
            </p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Sin cuentas. Sin tracking. Nada que filtrar.
            </h2>
            <p>
              AAD lab funciona enteramente en tu dispositivo. Sin registro,
              sin peticiones de red, sin analítica, sin SDKs de terceros
              que recopilen datos. Tu elección de idioma, tu tema, tu
              preferencia de háptica, tus últimos ajustes. Guardados en tu
              móvil, en ningún otro sitio. El acceso opcional a ubicación y
              movimiento alimenta solo el fondo de Compass; ambos se
              procesan en el dispositivo y nunca salen de tu móvil.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Disclaimer ──────────────────────────────────── */}
      <section id="disclaimer">
        <div className="container">
          <div className="callout reveal">
            <p className="section-label" style={{ marginBottom: 16 }}>
              Herramienta independiente
            </p>
            <p>
              AAD lab es una app independiente de entrenamiento y
              familiarización.{' '}
              <strong>
                No está afiliada, respaldada ni desarrollada por Airtec GmbH
                &amp; Co. KG Safety Systems
              </strong>
              , y no sustituye al manual oficial ni a la formación
              proporcionada por el fabricante. El simulador aproxima la
              interfaz del dispositivo con fines educativos; su
              comportamiento puede diferir del de la unidad real. Consulta
              siempre con un instructor certificado por tu autoridad
              nacional de paracaidismo antes de operar el dispositivo real.
            </p>
            <p>
              <strong>CYPRES</strong> y <strong>CYPRES&nbsp;2</strong> son
              marcas registradas de Airtec GmbH &amp; Co. KG Safety Systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
