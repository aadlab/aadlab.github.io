import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supporto · AAD lab',
  description:
    'Ricevi aiuto con AAD lab, segnala un bug o fai una domanda. Email di contatto, FAQ e risoluzione dei problemi.',
};

const SUPPORT_EMAIL = 'vistas.promo-7e@icloud.com';

export default function SupportPage() {
  return (
    <main>
      <section className="support-hero">
        <div className="container">
          <p className="section-label">Supporto</p>
          <h1>Siamo qui per aiutarti.</h1>
          <p>
            Se qualcosa non funziona come previsto, se hai una richiesta
            di funzionalità o se vuoi semplicemente salutare, scrivici.
            Ogni messaggio viene letto.
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
              Includi il tuo dispositivo (iPhone o Android) e la versione
              dell&apos;app, e descrivi i passaggi che hanno portato al
              problema. Uno screenshot o una breve registrazione dello
              schermo aiutano enormemente.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '24px 0 80px' }}>
        <div className="container">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Domande frequenti.</h2>

          <div className="faq">
            <details className="faq-item">
              <summary>Cos&apos;è un AAD?</summary>
              <p>
                Un Automatic Activation Device è un&apos;unità di
                sicurezza montata su un rig da paracadute che apre
                automaticamente la riserva se chi la indossa è ancora in
                caduta libera al di sotto di una quota impostata. CYPRES
                e VIGIL sono gli AAD più diffusi sul mercato.
              </p>
            </details>

            <details className="faq-item">
              <summary>Questo è il vero CYPRES?</summary>
              <p>
                No. AAD lab è un simulatore. Rispecchia l&apos;aspetto, i
                controlli e il comportamento dell&apos;unità reale
                CYPRES&nbsp;2 Changeable Mode in modo che tu possa
                esercitarti in sicurezza. Non è prodotto, approvato né
                affiliato con Airtec GmbH. Non sostituisce la formazione
                ufficiale CYPRES né l&apos;uso dell&apos;equipaggiamento
                reale.
              </p>
            </details>

            <details className="faq-item">
              <summary>Funziona offline?</summary>
              <p>
                Sì. L&apos;intera app funziona senza connessione internet.
                Niente viene caricato, niente viene scaricato dopo
                l&apos;installazione. Portala in volo, allenati con lei,
                usala ovunque.
              </p>
            </details>

            <details className="faq-item">
              <summary>L&apos;app raccoglie dati?</summary>
              <p>
                No. Nessun account, nessun analytics, nessun tracker,
                nessun SDK di terze parti. Le tue preferenze (lingua,
                aptica, tema) sono memorizzate solo sul tuo dispositivo.
                L&apos;accesso opzionale a posizione e movimento alimenta
                solo lo sfondo Compass. Entrambi sono elaborati on-device
                e non lasciano mai il tuo telefono.
              </p>
            </details>

            <details className="faq-item">
              <summary>Come cambio lingua?</summary>
              <p>
                Impostazioni → Lingua. Le scelte includono inglese,
                tedesco, francese, spagnolo, italiano e russo, oltre a
                un&apos;opzione &quot;Sistema&quot; che segue la lingua
                del dispositivo. La terminologia in ogni lingua segue il
                manuale ufficiale del CYPRES&nbsp;2 per quella regione.
              </p>
            </details>

            <details className="faq-item">
              <summary>Come ripristino il simulatore alle impostazioni predefinite?</summary>
              <p>
                Impostazioni → Reset Simulatore. Questo cancella il tuo
                profilo e riporta l&apos;unità allo stato di fabbrica.
                Utile se vuoi esercitarti con tutto il flusso di
                configurazione iniziale da zero.
              </p>
            </details>

            <details className="faq-item">
              <summary>Perché il feedback aptico è diverso su Android?</summary>
              <p>
                Su iPhone il Taptic Engine può produrre impatti Light,
                Medium e Heavy distinti, quindi tutti e quattro i livelli
                sono esposti. Su Android, la maggior parte dei motori di
                vibrazione non riesce a differenziare le intensità in
                modo affidabile, quindi viene mostrato un semplice
                interruttore On/Off. &quot;On&quot; corrisponde
                internamente all&apos;impostazione media.
              </p>
            </details>

            <details className="faq-item">
              <summary>Ho trovato un bug. Come lo segnalo?</summary>
              <p>
                Scrivi a{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> con
                il modello del dispositivo, la versione del sistema
                operativo, la versione dell&apos;app e i passaggi che
                hanno portato al problema. Uno screenshot o una
                registrazione dello schermo aiutano molto.
              </p>
            </details>

            <details className="faq-item">
              <summary>Ci saranno altri scenari?</summary>
              <p>
                Sì. Nuovi scenari vengono aggiunti negli aggiornamenti
                continui. Se hai una località, un rischio o una
                situazione di DZ che vorresti vedere trasformata in uno
                scenario di formazione, mandacela. Gli scenari attuali
                coprono già Svizzera, Singapore, Monaco, Seychelles,
                Himalaya, Eloy, unità di seconda mano e molto altro.
              </p>
            </details>

            <details className="faq-item">
              <summary>Posso fare affidamento solo su AAD lab per la mia formazione?</summary>
              <p>
                No. AAD lab è un supporto alla formazione. Confronta
                sempre le procedure con la guida utente ufficiale del
                CYPRES&nbsp;2 e segui i consigli di un istruttore
                certificato prima di operare il dispositivo fisico.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
