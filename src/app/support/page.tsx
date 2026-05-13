import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support · AAD lab',
  description:
    'Get help with AAD lab, report a bug, or ask a question. Contact email, FAQ, and troubleshooting.',
};

const SUPPORT_EMAIL = 'vistas.promo-7e@icloud.com';

export default function SupportPage() {
  return (
    <main>
      <section className="support-hero">
        <div className="container">
          <p className="section-label">Support</p>
          <h1>We&apos;re here to help.</h1>
          <p>
            If something isn&apos;t working as expected, if you have a feature
            request, or if you just want to say hello, drop a line. Every
            message is read.
          </p>
        </div>
      </section>

      <section style={{ padding: '16px 0 64px' }}>
        <div className="container">
          <div className="contact-block">
            <p className="section-label" style={{ marginBottom: 10 }}>
              Email
            </p>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <p style={{ marginTop: 16, fontSize: 14, color: 'var(--text-dim)' }}>
              Please include your device (iPhone or Android) and the app
              version, and describe the steps that led to the issue. A
              screenshot or short screen recording helps enormously.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '24px 0 80px' }}>
        <div className="container">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Common questions.</h2>

          <div className="faq">
            <details className="faq-item">
              <summary>What is an AAD?</summary>
              <p>
                An Automatic Activation Device is a safety unit fitted to a
                parachute rig that automatically deploys the reserve canopy
                if the wearer is still in freefall below a set altitude. The
                CYPRES&nbsp;2 is one of the most widely used AADs in the
                sport.
              </p>
            </details>

            <details className="faq-item">
              <summary>Is this the real CYPRES?</summary>
              <p>
                No. AAD lab is a simulator. It mirrors the look, controls,
                and behaviour of the real CYPRES&nbsp;2 Changeable Mode unit
                so you can practise safely. It is not produced by, endorsed
                by, or affiliated with Airtec GmbH. It is not a substitute
                for official CYPRES training or for using the real
                equipment.
              </p>
            </details>

            <details className="faq-item">
              <summary>Does it work offline?</summary>
              <p>
                Yes. The entire app works without an internet connection.
                Nothing is uploaded, nothing is downloaded after install. Fly
                with it, train with it, use it anywhere.
              </p>
            </details>

            <details className="faq-item">
              <summary>Does the app collect any data?</summary>
              <p>
                No. No accounts, no analytics, no trackers, no third-party
                SDKs. Your preferences (language, haptics, theme) are stored
                only on your device. Optional location and motion access
                power the Compass background only. Both are processed
                on-device and never leave your phone.
              </p>
            </details>

            <details className="faq-item">
              <summary>How do I change language?</summary>
              <p>
                Settings → Language. Choices include English, German, French,
                Spanish, Italian, and Russian, plus a &quot;System&quot;
                option that follows your device language. Terminology in
                each language follows the official CYPRES&nbsp;2 manual for
                that region.
              </p>
            </details>

            <details className="faq-item">
              <summary>How do I reset the simulator to defaults?</summary>
              <p>
                Settings → Reset Simulator. This clears your profile and
                restores the unit to factory-fresh state. Useful if you want
                to practise the full first-time setup flow from scratch.
              </p>
            </details>

            <details className="faq-item">
              <summary>Why does haptic feedback feel different on Android?</summary>
              <p>
                On iPhone, the Taptic Engine can produce distinct Light,
                Medium, and Heavy impacts, so all four levels are surfaced.
                On Android, most vibration motors can&apos;t differentiate
                strengths reliably, so a simple On/Off toggle is shown
                instead. &quot;On&quot; maps to the medium setting
                internally.
              </p>
            </details>

            <details className="faq-item">
              <summary>I found a bug. How do I report it?</summary>
              <p>
                Email{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with
                your device model, OS version, app version, and the steps
                that led to the issue. A screenshot or screen recording
                helps a lot.
              </p>
            </details>

            <details className="faq-item">
              <summary>Will there be more scenarios?</summary>
              <p>
                Yes. New scenarios are added in ongoing updates. If you have
                a location, hazard, or DZ situation you&apos;d like to see
                turned into a training scenario, send it through. The
                scenarios already cover Switzerland, Singapore, Monaco, the
                Seychelles, the Himalayas, Eloy, second-hand units, and many
                more.
              </p>
            </details>

            <details className="faq-item">
              <summary>Can I rely on AAD lab as my only training resource?</summary>
              <p>
                No. AAD lab is a training aid. Always cross-reference
                procedures against the official CYPRES&nbsp;2 user guide and
                take advice from a certified instructor before operating the
                physical device.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
