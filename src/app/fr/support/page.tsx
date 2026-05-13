import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support · AAD lab',
  description:
    'Obtenez de l\'aide avec AAD lab, signalez un bug, ou posez une question. Email de contact, FAQ, et dépannage.',
};

const SUPPORT_EMAIL = 'vistas.promo-7e@icloud.com';

export default function SupportPage() {
  return (
    <main>
      <section className="support-hero">
        <div className="container">
          <p className="section-label">Support</p>
          <h1>Nous sommes là pour vous aider.</h1>
          <p>
            Si quelque chose ne fonctionne pas comme prévu, si vous avez une
            demande de fonctionnalité, ou si vous voulez simplement dire
            bonjour, écrivez-nous. Chaque message est lu.
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
              Merci de préciser votre appareil (iPhone ou Android) et la
              version de l&apos;app, et de décrire les étapes qui ont mené au
              problème. Une capture d&apos;écran ou un court enregistrement
              vidéo aide énormément.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '24px 0 80px' }}>
        <div className="container">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Questions fréquentes.</h2>

          <div className="faq">
            <details className="faq-item">
              <summary>Qu&apos;est-ce qu&apos;un AAD ?</summary>
              <p>
                Un Automatic Activation Device (déclencheur automatique) est
                un dispositif de sécurité installé sur un sac de parachute
                qui déploie automatiquement la voile de secours si le porteur
                est encore en chute libre sous une altitude définie. CYPRES
                et VIGIL sont les AAD les plus utilisés sur le marché.
              </p>
            </details>

            <details className="faq-item">
              <summary>Est-ce le vrai CYPRES ?</summary>
              <p>
                Non. AAD lab est un simulateur. Il reproduit l&apos;apparence,
                les commandes et le comportement du véritable CYPRES&nbsp;2
                Changeable Mode pour vous permettre de vous entraîner en toute
                sécurité. Il n&apos;est ni produit, ni approuvé, ni affilié à
                Airtec GmbH. Il ne remplace pas la formation officielle CYPRES
                ni l&apos;utilisation de l&apos;équipement réel.
              </p>
            </details>

            <details className="faq-item">
              <summary>Fonctionne-t-il hors ligne ?</summary>
              <p>
                Oui. Toute l&apos;application fonctionne sans connexion
                internet. Rien n&apos;est envoyé, rien n&apos;est téléchargé
                après installation. Volez avec, entraînez-vous avec,
                utilisez-le partout.
              </p>
            </details>

            <details className="faq-item">
              <summary>L&apos;application collecte-t-elle des données ?</summary>
              <p>
                Non. Pas de comptes, pas d&apos;analytique, pas de traqueurs,
                pas de SDK tiers. Vos préférences (langue, retour haptique,
                thème) sont stockées uniquement sur votre appareil. L&apos;accès
                optionnel à la localisation et au mouvement alimente
                uniquement l&apos;arrière-plan Compass. Les deux sont traités
                sur l&apos;appareil et ne quittent jamais votre téléphone.
              </p>
            </details>

            <details className="faq-item">
              <summary>Comment changer de langue ?</summary>
              <p>
                Réglages → Langue. Les choix incluent l&apos;anglais,
                l&apos;allemand, le français, l&apos;espagnol, l&apos;italien
                et le russe, ainsi qu&apos;une option &quot;Système&quot; qui
                suit la langue de votre appareil. La terminologie de chaque
                langue suit le manuel officiel du CYPRES&nbsp;2 pour cette
                région.
              </p>
            </details>

            <details className="faq-item">
              <summary>Comment réinitialiser le simulateur aux valeurs par défaut ?</summary>
              <p>
                Réglages → Réinitialiser le simulateur. Cela efface votre
                profil et remet l&apos;appareil à l&apos;état d&apos;usine.
                Pratique si vous voulez vous entraîner à toute la séquence de
                première configuration depuis le début.
              </p>
            </details>

            <details className="faq-item">
              <summary>Pourquoi le retour haptique est-il différent sur Android ?</summary>
              <p>
                Sur iPhone, le Taptic Engine peut produire des impacts
                distincts Light, Medium et Heavy, donc les quatre niveaux
                sont proposés. Sur Android, la plupart des moteurs de
                vibration ne peuvent pas distinguer les intensités de manière
                fiable, donc un simple commutateur On/Off est affiché à la
                place. &quot;On&quot; correspond en interne au réglage moyen.
              </p>
            </details>

            <details className="faq-item">
              <summary>J&apos;ai trouvé un bug. Comment le signaler ?</summary>
              <p>
                Envoyez un email à{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> avec
                le modèle de votre appareil, la version de l&apos;OS, la
                version de l&apos;app, et les étapes qui ont mené au
                problème. Une capture d&apos;écran ou un enregistrement vidéo
                aide beaucoup.
              </p>
            </details>

            <details className="faq-item">
              <summary>Y aura-t-il plus de scénarios ?</summary>
              <p>
                Oui. De nouveaux scénarios sont ajoutés au fil des mises à
                jour. Si vous avez un lieu, un risque ou une situation DZ que
                vous aimeriez voir transformé en scénario d&apos;entraînement,
                envoyez-le. Les scénarios couvrent déjà la Suisse, Singapour,
                Monaco, les Seychelles, l&apos;Himalaya, Eloy, les appareils
                d&apos;occasion, et bien plus encore.
              </p>
            </details>

            <details className="faq-item">
              <summary>Puis-je m&apos;appuyer uniquement sur AAD lab pour me former ?</summary>
              <p>
                Non. AAD lab est une aide à la formation. Vérifiez toujours
                les procédures contre le guide utilisateur officiel du
                CYPRES&nbsp;2 et suivez les conseils d&apos;un instructeur
                certifié avant d&apos;utiliser l&apos;appareil physique.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
