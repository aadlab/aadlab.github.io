import Link from 'next/link';

export default function Home() {
  return (
    <main className="container">
      {/* ─── Hero ───────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-text">
          <h1 id="hero-heading">
            Train your <span className="accent">CYPRES 2</span>
            <br />
            before you ever jump it.
          </h1>
          <p className="lead">
            AAD lab is a faithful CYPRES 2 simulator for your phone — guided
            lessons, real-world scenarios, and a free-form playground so
            configuring your AAD becomes second nature long before you&apos;re on
            the flight line.
          </p>
          <div className="hero-cta">
            <Link href="/support" className="btn btn-primary">
              Get support
            </Link>
            <a
              href="#imagine"
              className="btn btn-secondary"
              aria-label="Jump to scenarios"
            >
              See why
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="phone-mock">
            <div className="phone-mock-inner">
              <span className="title">AAD lab</span>
              <span className="subtitle">CYPRES 2 training simulator</span>
              <span className="tier">101 · 201 · 301 · 401</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Imagine scenarios ─────────────────────────────── */}
      <section className="section" id="imagine" aria-labelledby="imagine-heading">
        <div className="section-heading">
          <span className="eyebrow">Why AAD lab</span>
          <h2 id="imagine-heading">Imagine what you could learn in the time you already have.</h2>
          <p className="section-lead">
            AAD knowledge isn&apos;t optional, but the time to learn rarely shows
            up when you need it. AAD lab fills the gaps you already have.
          </p>
        </div>

        <div className="imagine-grid">
          <article className="imagine-card">
            <div className="num">01 · On the boogie flight</div>
            <h3>Don&apos;t be in the queue.</h3>
            <p>
              You&apos;re on a flight to a boogie where AAD configuration is
              specific to the event. Three hundred skydivers and only a few
              know how to set the unit. Getting their time and help isn&apos;t
              guaranteed.{' '}
              <span className="highlight">Use your personal time to learn</span>
              {' '}so you arrive ready.
            </p>
          </article>

          <article className="imagine-card">
            <div className="num">02 · On a packed commute</div>
            <h3>Twenty minutes on the tube. Make it count.</h3>
            <p>
              London, New York, anywhere. The commute is dead time you can&apos;t
              get back. Spend it on something that could{' '}
              <span className="highlight">save your life or the life of another</span>{' '}
              — and that you&apos;ll genuinely enjoy practising.
            </p>
          </article>

          <article className="imagine-card">
            <div className="num">03 · Your first AAD</div>
            <h3>You meet it for the first time in your rig.</h3>
            <p>
              Whether you&apos;ve just bought your first AAD, or your rig came
              with one already fitted, sometimes the first time you ever see
              it is installed and zipped in. The official manual is thorough,
              but static.{' '}
              <span className="highlight">
                AAD lab lets you learn, understand, and configure yours
              </span>{' '}
              before you ever jump it.
            </p>
          </article>
        </div>
      </section>

      {/* ─── Features ──────────────────────────────────────── */}
      <section className="section" aria-labelledby="features-heading">
        <div className="section-heading">
          <span className="eyebrow">What&apos;s inside</span>
          <h2 id="features-heading">A simulator that behaves like the real thing.</h2>
          <p className="section-lead">
            Every interaction in AAD lab mirrors the physical CYPRES 2 — the
            timing, the LED cues, the unit-info cycle, the two-pass commit. If
            you can do it here, you can do it on the unit.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature">
            <span className="label">Tier 101</span>
            <h4>Master the Press Action</h4>
            <p>
              The quick press-and-release that every device interaction starts
              with. Get it in your fingers before anything else.
            </p>
          </article>

          <article className="feature">
            <span className="label">Tier 101</span>
            <h4>Power on, power off</h4>
            <p>
              The four-press rhythm timed to the LED. Same method, reversed,
              switches the unit off.
            </p>
          </article>

          <article className="feature">
            <span className="label">Tier 201</span>
            <h4>Read the unit</h4>
            <p>
              Long-press to cycle through flights, serial, service date,
              scale, altitude, and mode — exactly as the device displays them.
            </p>
          </article>

          <article className="feature">
            <span className="label">Tier 201</span>
            <h4>DZ Offset</h4>
            <p>
              Single-use altitude offset for in-hops and demos. Learn when to
              set it, how to clear it, and how it interacts with activation
              altitude.
            </p>
          </article>

          <article className="feature">
            <span className="label">Tier 301</span>
            <h4>Change Mode &amp; Scale</h4>
            <p>
              The full two-pass procedures for switching between Expert,
              Student, Tandem, Speed, and changing the unit display between
              feet and metres.
            </p>
          </article>

          <article className="feature">
            <span className="label">Tier 301</span>
            <h4>Activation Height</h4>
            <p>
              Walk the LED hold, the strict confirmation pass, and the
              reason-aware feedback when you misstep — the way a real device
              would respond.
            </p>
          </article>

          <article className="feature">
            <span className="label">Tier 401</span>
            <h4>Real-world scenarios</h4>
            <p>
              Calculate DZ offsets at real dropzones. Decide if your AAD is
              suitable for the jump. Reconfigure a second-hand unit from
              Tandem to Expert before its next deployment.
            </p>
          </article>

          <article className="feature">
            <span className="label">Playground</span>
            <h4>Free-form CYPRES 2</h4>
            <p>
              Once the basics are automatic, drop into the playground and
              explore the device at your own pace — no rails, no script.
            </p>
          </article>

          <article className="feature">
            <span className="label">Aura</span>
            <h4>Visual backgrounds you&apos;ll keep on</h4>
            <p>
              Cosmos comet trails, Aurora ribbons, DZ Rain decoding dropzone
              names from your region. Designed to be easy on the eyes for the
              long study sessions.
            </p>
          </article>
        </div>
      </section>

      {/* ─── Disclaimer ────────────────────────────────────── */}
      <section className="section" aria-labelledby="disclaimer-heading">
        <div className="section-heading">
          <span className="eyebrow">Important</span>
          <h2 id="disclaimer-heading">A training aid, not a substitute.</h2>
        </div>
        <div className="disclaimer">
          <p>
            Where AAD lab references the <strong>CYPRES 2</strong>, it does so
            factually, as the device whose behaviour it models. It is{' '}
            <strong>
              not affiliated with, endorsed by, or developed by Airtec GmbH
              &amp; Co. KG Safety Systems
            </strong>
            , and is not a substitute for the official manual or
            manufacturer-provided training.
          </p>
          <p style={{ marginTop: '1rem' }}>
            The simulator approximates the device interface for educational
            purposes; behaviour may differ from the real unit. Always consult
            an instructor certified by your national parachuting authority
            before operating the actual device.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>CYPRES</strong> and <strong>CYPRES 2</strong> are
            trademarks of Airtec GmbH &amp; Co. KG Safety Systems.
          </p>
        </div>
      </section>
    </main>
  );
}
