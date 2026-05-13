import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — AAD lab',
  description:
    'Get in touch about AAD lab. Contact email, FAQs, and how to report issues.',
};

const SUPPORT_EMAIL = 'vistas.promo-7e@icloud.com';

export default function SupportPage() {
  return (
    <main className="container">
      <section className="section" aria-labelledby="support-heading">
        <div className="section-heading">
          <span className="eyebrow">Support</span>
          <h2 id="support-heading">Got a question or a bug? Get in touch.</h2>
          <p className="section-lead">
            AAD lab is built by one person. Every message is read, and most
            replies happen within a couple of days.
          </p>
        </div>

        <div className="support-section">
          <article className="contact-card" aria-labelledby="contact-label">
            <span className="label" id="contact-label">
              Email
            </span>
            <div className="contact-email">
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </div>
            <p>
              Bug reports, feature ideas, training questions, or anything else
              about the app. Please include your device (iPhone / Android) and
              the app version so issues are easier to reproduce.
            </p>
          </article>

          <div className="section-heading" style={{ marginTop: '2rem' }}>
            <span className="eyebrow">FAQ</span>
            <h2>Common questions</h2>
          </div>

          <div className="faq-list">
            <article className="faq-item">
              <h3>Is AAD lab affiliated with Airtec / CYPRES?</h3>
              <p>
                No. AAD lab is an independent educational simulator. It
                references the CYPRES 2 factually as the device whose
                behaviour it models. It is not affiliated with, endorsed by,
                or developed by Airtec GmbH &amp; Co. KG Safety Systems, and
                is not a substitute for the official manual or manufacturer
                training.
              </p>
            </article>

            <article className="faq-item">
              <h3>Can I rely on AAD lab as my only training resource?</h3>
              <p>
                No. AAD lab is a training aid. Always cross-reference
                procedures against the official CYPRES 2 user guide and take
                advice from a certified instructor before operating the
                physical device.
              </p>
            </article>

            <article className="faq-item">
              <h3>Does AAD lab collect personal data?</h3>
              <p>
                No. The app does not collect, store, or transmit personal
                data. Optional location and motion access power the Compass
                background only; both are processed on-device and never leave
                your phone. No analytics, no advertising, no third-party SDKs.
              </p>
            </article>

            <article className="faq-item">
              <h3>How do I switch the in-app language?</h3>
              <p>
                Settings → Language. AAD lab supports English, German,
                Spanish, French, Italian, and Russian, plus a &quot;System&quot;
                option that follows your device language.
              </p>
            </article>

            <article className="faq-item">
              <h3>I want to suggest a new scenario or lesson — how?</h3>
              <p>
                Email it. Real-world scenarios from skydivers, riggers, and
                instructors are what makes the app useful — happy to add ones
                that teach a concept clearly.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
