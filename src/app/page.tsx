import Link from 'next/link';

export default function Home() {
  return (
    <main id="top">
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <img src="/aadlab-icon.png" alt="" className="hero-icon" />
          <h1>
            Learn to configure your{' '}
            <span className="accent">CYPRES&nbsp;2&nbsp;Changeable&nbsp;Mode</span>{' '}
            on your iPhone or Android.
          </h1>
          <p className="hero-tagline">
            Get fluent on the real configuration. Learn to change mode, set
            activation height, DZ offset, and change the scale. Real-world
            scenarios.
          </p>
          <p className="hero-sub">Offline · Ad-free · Six languages</p>
          <div className="hero-lang-strip" aria-label="Available languages">
            <span className="current">English</span>
            <span>Deutsch</span>
            <span>Français</span>
            <span>Español</span>
            <span>Italiano</span>
            <span>Русский</span>
          </div>
          <div className="hero-cta-row">
            <a href="#imagine" className="btn btn-primary">
              See why it matters
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
          <p className="section-label">Why AAD lab</p>
          <h2 className="section-title reveal">
            Use the time you already have.
          </h2>
          <p className="section-intro reveal">
            AAD knowledge isn&apos;t optional, but the time to learn rarely
            shows up when you need it. AAD lab fills the gaps you already
            have. On the way to the DZ. On a packed commute. On a quiet
            evening before a boogie. Everywhere.
          </p>

          <div className="imagine">
            <article className="imagine-card reveal">
              <p className="num">01 · ON THE FLIGHT</p>
              <h3>Don&apos;t be in the queue.</h3>
              <p>
                You&apos;re on a flight to a boogie where AAD configuration is
                specific to the event. Three hundred skydivers and only a few
                know how to configure the unit. Their time and their help
                isn&apos;t guaranteed.{' '}
                <span className="highlight">
                  Use your personal time to learn
                </span>
                , so you arrive ready, not waiting.
              </p>
            </article>

            <article className="imagine-card reveal">
              <p className="num">02 · ON THE COMMUTE</p>
              <h3>Twenty minutes on the tube. Make it count.</h3>
              <p>
                London, New York, San Francisco. Standing in a packed tube
                avoiding eye contact - it&apos;s wasting minutes of your
                life. Spend that time doing something brilliant. Learn how
                to configure your CYPRES on your phone. It could{' '}
                <span className="highlight">
                  save your life, or the life of another
                </span>
                .
              </p>
            </article>

            <article className="imagine-card reveal">
              <p className="num">03 · YOUR FIRST AAD</p>
              <h3>You meet it for the first time in your rig.</h3>
              <p>
                You&apos;ve just bought your first AAD, or you&apos;ve bought
                a rig that came with one fitted. Sometimes that&apos;s exactly
                how it happens. The first time you ever see it, it&apos;s
                already inside your container. The official manual is
                thorough, but static.{' '}
                <span className="highlight">
                  AAD lab lets you learn, understand, and configure yours
                </span>
                {' '}before you ever jump it.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ─── About ───────────────────────────────────────── */}
      <section id="about">
        <div className="container">
          <p className="section-label">What it is</p>
          <h2 className="section-title reveal">
            Button-for-button fidelity, without the unit on your bench.
          </h2>
          <p className="section-intro reveal">
            Becoming fluent with the CYPRES&nbsp;2 control sequence is
            quickest when you can rehearse freely. AAD lab recreates the
            display, the press timings, the LED feedback, every operating
            mode, and every confirmation pass. Practise at home, on a plane,
            or between jumps without ever touching a live unit.
          </p>
        </div>
      </section>

      {/* ─── Lessons ─────────────────────────────────────── */}
      <section id="lessons">
        <div className="container">
          <p className="section-label">Lessons</p>
          <h2 className="section-title reveal">
            Learn by doing. Nine guided lessons across three skill tiers.
          </h2>
          <p className="section-intro reveal">
            Each lesson walks you through a single skill with immediate
            feedback. Press, hold, release, confirm. No manuals to memorise,
            no videos to scrub through.
          </p>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>101</h3>
              <span className="group-badge">Foundations</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Lesson 1</p>
                <h3>The Press Action</h3>
                <p>
                  Master the quick, deliberate press-and-release that
                  underpins every CYPRES&nbsp;2 command. Get it in your
                  fingers before anything else.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lesson 2</p>
                <h3>Power On</h3>
                <p>
                  The four-press rhythm timed to the LED that brings the unit
                  to life. Mirrors the real countdown exactly.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lesson 3</p>
                <h3>Power Off</h3>
                <p>
                  The same four-press method, reversed, with the confidence
                  of knowing it cold.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>201</h3>
              <span className="group-badge">Everyday operation</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Lesson 4</p>
                <h3>Display Device Data</h3>
                <p>
                  Long-press to cycle through the unit-info stream: flights,
                  serial, next service date, scale, activation altitude, and
                  mode.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lesson 5</p>
                <h3>Dropzone Offset</h3>
                <p>
                  Set the elevation difference between exit and landing in
                  ±30&nbsp;ft (or ±10&nbsp;m) steps. Single-use; clears on
                  power-off.
                </p>
              </div>
            </div>
          </div>

          <div className="lesson-group reveal">
            <div className="lesson-group-header">
              <h3>301</h3>
              <span className="group-badge">Full control</span>
            </div>
            <div className="cards">
              <div className="card">
                <p className="card-tier">Lesson 6</p>
                <h3>Change Scale</h3>
                <p>
                  Switch the unit display between feet and metres via the
                  three-stage navigation, LED hold, and strict confirmation
                  pass.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lesson 7</p>
                <h3>Change Mode</h3>
                <p>
                  Select Expert, Student, Tandem, or Speed through the full
                  two-pass confirmation sequence. Exactly as on the real
                  unit.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lesson 8</p>
                <h3>Activation Height</h3>
                <p>
                  Walk the LED hold, the strict confirmation pass, and the
                  reason-aware feedback when you misstep. The way a real
                  device would respond.
                </p>
              </div>
              <div className="card">
                <p className="card-tier">Lesson 9</p>
                <h3>Stab Practice</h3>
                <p>
                  Hone the timing of your Press Action against a metronome of
                  successful attempts. Builds finger memory fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Scenarios ───────────────────────────────────── */}
      <section id="scenarios">
        <div className="container">
          <p className="section-label">Tier 401 · Scenarios</p>
          <h2 className="section-title reveal">
            Nineteen real-world challenges across five groups.
          </h2>
          <p className="section-intro reveal">
            From an alpine demo in Switzerland to a second-hand
            CYPRES&nbsp;2 still set to Tandem mode, each scenario gives you a
            briefing, drops you at the device, and asks you to configure it
            correctly. Try again if you don&apos;t.
          </p>

          <div className="scenarios-grid">
            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#3ea55e' }}
            >
              <div className="scenario-group-title">
                <h3>Offset</h3>
                <span className="scenario-count">5 scenarios</span>
              </div>
              <ul className="scenario-list">
                <li>Alpine, Switzerland</li>
                <li>Airfield, Spain</li>
                <li>Highland, Scotland</li>
                <li>Royal Albert Docks, London</li>
                <li>Camps Bay, Cape Town</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#2b97d6' }}
            >
              <div className="scenario-group-title">
                <h3>Activation</h3>
                <span className="scenario-count">7 scenarios</span>
              </div>
              <ul className="scenario-list">
                <li>Seychelles, radio mast</li>
                <li>Old Quarter, Panama City</li>
                <li>Civic District, Singapore</li>
                <li>Plaza Revolución, Havana</li>
                <li>Rio, hotels</li>
                <li>Grand Prix, Monaco</li>
                <li>Victoria Falls, spray plume</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#9a6bff' }}
            >
              <div className="scenario-group-title">
                <h3>Combined</h3>
                <span className="scenario-count">4 scenarios</span>
              </div>
              <ul className="scenario-list">
                <li>Beach jump, Aruba</li>
                <li>Bolívar Park, Bogotá</li>
                <li>Caldera Drop, Santorini</li>
                <li>Queenstown, New Zealand</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#e48a2a' }}
            >
              <div className="scenario-group-title">
                <h3>Other</h3>
                <span className="scenario-count">2 scenarios</span>
              </div>
              <ul className="scenario-list">
                <li>Himalayas, extreme altitude</li>
                <li>Eloy, Arizona: switch to meters</li>
              </ul>
            </div>

            <div
              className="scenario-group reveal"
              style={{ ['--group-color' as string]: '#ff04cd' }}
            >
              <div className="scenario-group-title">
                <h3>Resale</h3>
                <span className="scenario-count">1 scenario</span>
              </div>
              <ul className="scenario-list">
                <li>Tandem to Expert, second-hand unit</li>
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
            The whole CYPRES&nbsp;2, on your own terms.
          </h2>
          <p className="section-intro reveal">
            Once the basics are automatic, drop into the Playground and
            explore every state of the CYPRES&nbsp;2 at your own pace. No
            lesson, no scenario. Just you and the unit.
          </p>
          <div className="cards">
            <div className="card">
              <p className="card-tier">Power</p>
              <h3>Self-test sequence</h3>
              <p>
                Toggle power and watch the live four-flash LED self-test
                sequence and the 14-hour auto-off countdown.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Info</p>
              <h3>Unit-info cycle</h3>
              <p>
                Long-press through flights, serial, next service date, scale,
                altitude, and operating mode.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Modes</p>
              <h3>Expert · Student · Tandem · Speed</h3>
              <p>
                Switch operating mode through the genuine three-stage
                confirmation. Each has its own activation profile.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Altitude</p>
              <h3>A0 through A9</h3>
              <p>
                Dial activation altitude across the ten steps with the
                authentic press-hold-select flow.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Offset</p>
              <h3>Dropzone offset</h3>
              <p>
                Set the elevation difference between exit and landing in
                ±30&nbsp;ft (or ±10&nbsp;m) increments.
              </p>
            </div>
            <div className="card">
              <p className="card-tier">Reset</p>
              <h3>Factory-fresh defaults</h3>
              <p>
                One tap restores the unit to first-power-on state. Practise
                the entire setup flow from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fidelity ────────────────────────────────────── */}
      <section id="fidelity">
        <div className="container">
          <p className="section-label">Fidelity</p>
          <h2 className="section-title reveal">
            Press timings, LED signalling, self-test. All recreated.
          </h2>
          <p className="section-intro reveal">
            AAD lab distinguishes a quick Press Action from a press-hold and
            reacts the way the real unit does. Every LED flash, every
            display transition, every mode indicator is modelled on the
            actual CYPRES&nbsp;2.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Press vs press-hold</h4>
              <p>
                Quick tap for selection, sustained hold for navigation. The
                same threshold your fingers need to learn on a real unit.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Two-pass confirmation</h4>
              <p>
                Mode change and activation altitude require a strict
                confirmation pass. Misstep on pass two and the scenario fails
                with reason-aware copy.
              </p>
            </div>
            <div className="feature reveal">
              <h4>14-hour auto power-off</h4>
              <p>
                Live countdown shown on screen. Matches the real unit&apos;s
                behaviour. Toggle it off in settings while practising.
              </p>
            </div>
            <div className="feature reveal">
              <h4>A0 through A9</h4>
              <p>
                Ten activation-altitude steps, 30&nbsp;ft each, adjustable
                with the authentic press-hold-select flow.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Four operating modes</h4>
              <p>
                Expert, Student, Tandem, Speed. Each has its own deployment
                profile and mode-change confirmation.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Dropzone offset</h4>
              <p>
                Set the elevation difference between exit and landing in
                ±30&nbsp;ft (or ±10&nbsp;m) increments.
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
            Backgrounds you&apos;ll keep on.
          </h2>
          <p className="section-intro reveal">
            AAD lab is designed to be lived with. Pick a background that
            suits your eyes for long study sessions. Every one is
            configurable, GPU-light, and pauses when the app is in the
            background.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Cosmos</h4>
              <p>
                Soft particle trails drifting along an unseen current, like
                ink in moving water. Blue or Black corner glow.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Aurora</h4>
              <p>
                Soft pink ribbons of light drifting across the screen.
                Adjust opacity, flow direction, and sway.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Aurora Rain</h4>
              <p>
                Aurora filaments drifting over a decode rain of dropzone
                names from your region. The DZ list is geo-filtered to your
                country.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Compass</h4>
              <p>
                Dropzones positioned at their true bearing from your
                location. Turn the phone to look around. Uses your device
                heading, on-device only.
              </p>
            </div>
            <div className="feature reveal">
              <h4>DZ Rain</h4>
              <p>
                Decoding stream of dropzone names from your region. Each
                column resolves character-by-character, like a mission
                briefing.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Universe</h4>
              <p>
                Pinch from a globe down through continents to individual
                dropzones. A directory and a piece of decoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Design ──────────────────────────────────────── */}
      <section id="design">
        <div className="container">
          <p className="section-label">Design</p>
          <h2 className="section-title reveal">Dark, tactile, deliberate.</h2>
          <p className="section-intro reveal">
            The interface matches the spirit of the hardware: a metal-finish
            display under glass, magenta-accented controls, spring-physics
            motion, and a quiet dark aesthetic that stays out of your way.
          </p>
          <div className="feature-grid">
            <div className="feature reveal">
              <h4>Glassmorphism layers</h4>
              <p>
                Translucent pills and cards layered over a deep Cosmos
                gradient. Information feels lifted off the surface.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Spring animations</h4>
              <p>
                Every transition uses physics-based motion with staggered
                entry. Nothing snaps, nothing lags.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Haptic feedback</h4>
              <p>
                Four intensity levels on iPhone&apos;s Taptic Engine. On
                Android, a simple on/off toggle. Typical motors can&apos;t
                differentiate the levels reliably.
              </p>
            </div>
            <div className="feature reveal">
              <h4>Theme switch</h4>
              <p>
                Blue Cosmos for the daylight set, Black Cosmos for the deep
                evening. Both keep the brand magenta as the single
                load-bearing accent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Languages ───────────────────────────────────── */}
      <section id="languages">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">Languages</p>
          <h2
            className="section-title reveal"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Six locales. Manual-accurate terminology.
          </h2>
          <p
            className="section-intro reveal"
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            Every language uses the exact terminology from the official
            CYPRES&nbsp;2 manual for that region. What you learn here is
            what you&apos;ll see and hear at the DZ.
          </p>
          <div className="lang-row">
            <span className="lang-pill current">
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
              Offline &amp; private
            </p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              No accounts. No tracking. Nothing to leak.
            </h2>
            <p>
              AAD lab runs entirely on your device. No sign-up, no network
              requests, no analytics, no third-party SDKs that collect data.
              Your language choice, your theme, your haptic preference, your
              last-used settings. Stored on your phone, nowhere else.
              Optional location and motion access power the Compass
              background only; both are processed on-device and never leave
              your phone.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Disclaimer ──────────────────────────────────── */}
      <section id="disclaimer">
        <div className="container">
          <div className="callout reveal">
            <p className="section-label" style={{ marginBottom: 16 }}>
              Independent tool
            </p>
            <p>
              AAD lab is an independent training and familiarisation app. It
              is{' '}
              <strong>
                not affiliated with, endorsed by, or developed by Airtec GmbH
                &amp; Co. KG Safety Systems
              </strong>
              , and it is not a substitute for the official manual or
              manufacturer-provided training. The simulator approximates the
              device interface for educational purposes; behaviour may differ
              from the real unit. Always consult an instructor certified by
              your national parachuting authority before operating the actual
              device.
            </p>
            <p>
              <strong>CYPRES</strong> and <strong>CYPRES&nbsp;2</strong> are
              trademarks of Airtec GmbH &amp; Co. KG Safety Systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
