import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support · AAD lab',
  description:
    'Hol dir Hilfe zu AAD lab, melde einen Fehler oder stelle eine Frage. Kontakt-E-Mail, FAQ und Fehlerbehebung.',
};

const SUPPORT_EMAIL = 'vistas.promo-7e@icloud.com';

export default function SupportPage() {
  return (
    <main>
      <section className="support-hero">
        <div className="container">
          <p className="section-label">Support</p>
          <h1>Wir sind für dich da.</h1>
          <p>
            Wenn etwas nicht so läuft wie erwartet, wenn du einen
            Feature-Wunsch hast oder einfach nur Hallo sagen willst,
            schreib uns. Jede Nachricht wird gelesen.
          </p>
        </div>
      </section>

      <section style={{ padding: '16px 0 64px' }}>
        <div className="container">
          <div className="contact-block">
            <p className="section-label" style={{ marginBottom: 10 }}>
              E-Mail
            </p>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <p style={{ marginTop: 16, fontSize: 14, color: 'var(--text-dim)' }}>
              Bitte gib dein Gerät (iPhone oder Android) und die
              App-Version an und beschreibe die Schritte, die zum Problem
              geführt haben. Ein Screenshot oder eine kurze Bildschirmaufnahme
              hilft enorm.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '24px 0 80px' }}>
        <div className="container">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Häufige Fragen.</h2>

          <div className="faq">
            <details className="faq-item">
              <summary>Was ist ein AAD?</summary>
              <p>
                Ein Automatic Activation Device (automatisches
                Auslösegerät) ist eine Sicherheitseinheit, die in ein
                Fallschirm-Rig eingebaut wird und die Reserve automatisch
                öffnet, wenn sich der Träger unterhalb einer festgelegten
                Höhe noch im freien Fall befindet. CYPRES und VIGIL sind
                die am weitesten verbreiteten AADs auf dem Markt.
              </p>
            </details>

            <details className="faq-item">
              <summary>Ist das der echte CYPRES?</summary>
              <p>
                Nein. AAD lab ist ein Simulator. Er bildet das Aussehen,
                die Bedienung und das Verhalten des echten
                CYPRES&nbsp;2 Changeable Mode nach, damit du sicher üben
                kannst. Er wird nicht von Airtec GmbH hergestellt,
                unterstützt oder ist mit ihr verbunden. Er ersetzt nicht
                die offizielle CYPRES-Schulung oder die Nutzung des echten
                Geräts.
              </p>
            </details>

            <details className="faq-item">
              <summary>Funktioniert es offline?</summary>
              <p>
                Ja. Die gesamte App funktioniert ohne Internetverbindung.
                Es wird nichts hochgeladen, nichts nach der Installation
                heruntergeladen. Nimm sie mit auf den Flug, trainiere
                damit, nutze sie überall.
              </p>
            </details>

            <details className="faq-item">
              <summary>Sammelt die App Daten?</summary>
              <p>
                Nein. Keine Accounts, keine Analytics, keine Tracker,
                keine Drittanbieter-SDKs. Deine Einstellungen (Sprache,
                Haptik, Theme) werden nur auf deinem Gerät gespeichert.
                Optionaler Standort- und Bewegungszugriff treibt nur den
                Compass-Hintergrund an. Beides wird auf dem Gerät
                verarbeitet und verlässt dein Handy nie.
              </p>
            </details>

            <details className="faq-item">
              <summary>Wie ändere ich die Sprache?</summary>
              <p>
                Einstellungen → Sprache. Zur Auswahl stehen Englisch,
                Deutsch, Französisch, Spanisch, Italienisch und Russisch,
                plus eine &quot;System&quot;-Option, die der
                Gerätesprache folgt. Die Terminologie in jeder Sprache
                folgt dem offiziellen CYPRES&nbsp;2-Handbuch für die
                jeweilige Region.
              </p>
            </details>

            <details className="faq-item">
              <summary>Wie setze ich den Simulator auf Werkseinstellungen zurück?</summary>
              <p>
                Einstellungen → Simulator zurücksetzen. Das löscht dein
                Profil und stellt das Gerät auf den Werkszustand zurück.
                Praktisch, wenn du den kompletten Erst-Setup-Ablauf von
                Grund auf üben willst.
              </p>
            </details>

            <details className="faq-item">
              <summary>Warum fühlt sich das haptische Feedback auf Android anders an?</summary>
              <p>
                Auf dem iPhone kann die Taptic Engine deutlich
                unterscheidbare leichte, mittlere und starke Impulse
                erzeugen, daher sind alle vier Stufen verfügbar. Auf
                Android können die meisten Vibrationsmotoren die Stärken
                nicht zuverlässig unterscheiden, daher gibt es stattdessen
                einen einfachen Ein/Aus-Schalter. &quot;Ein&quot;
                entspricht intern der mittleren Stufe.
              </p>
            </details>

            <details className="faq-item">
              <summary>Ich habe einen Fehler gefunden. Wie melde ich ihn?</summary>
              <p>
                Schreib eine E-Mail an{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> mit
                deinem Gerätemodell, der OS-Version, der App-Version und
                den Schritten, die zum Problem geführt haben. Ein
                Screenshot oder eine Bildschirmaufnahme hilft sehr.
              </p>
            </details>

            <details className="faq-item">
              <summary>Wird es mehr Szenarien geben?</summary>
              <p>
                Ja. Neue Szenarien kommen in laufenden Updates dazu. Wenn
                du einen Ort, eine Gefahrenlage oder eine DZ-Situation
                hast, die du als Trainings-Szenario sehen möchtest,
                schick sie rüber. Die Szenarien decken bereits die
                Schweiz, Singapur, Monaco, die Seychellen, den Himalaya,
                Eloy, Gebrauchtgeräte und vieles mehr ab.
              </p>
            </details>

            <details className="faq-item">
              <summary>Kann ich mich allein auf AAD lab als Trainingsquelle verlassen?</summary>
              <p>
                Nein. AAD lab ist ein Trainingshelfer. Gleiche Abläufe
                immer mit der offiziellen CYPRES&nbsp;2-Bedienungsanleitung
                ab und lass dich von einem zertifizierten Ausbilder
                beraten, bevor du das physische Gerät bedienst.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
