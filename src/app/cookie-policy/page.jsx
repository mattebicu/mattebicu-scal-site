import React from 'react';

export default function CookiePolicy() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
        Informativa sui Cookie (Cookie Policy)
      </h1>
      <p className="text-sm text-slate-500 mb-8">
        Ultimo aggiornamento: [Inserisci Data Es. Maggio 2026]
      </p>

      <div className="space-y-6 text-base leading-relaxed text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            1. Cosa sono i Cookie?
          </h2>
          <p>
            I cookie sono piccoli file di testo che i siti visitati dall'utente inviano al suo terminale 
            (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti 
            alla successiva visita del medesimo utente. Questo sito, www.scal-greenpolymers.com, utilizza i cookie 
            per migliorare l'esperienza di navigazione e garantire il corretto funzionamento dei servizi offerti.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            2. Tipologie di Cookie utilizzate da questo sito
          </h2>
          <p className="mb-3">
            Utilizziamo diverse categorie di cookie, principalmente per motivi tecnici e statistici:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Cookie Tecnici e Necessari:</strong> Questi cookie sono essenziali per consentirti di navigare 
              sul sito e utilizzarne tutte le funzionalità (es. sessione di navigazione). Senza questi cookie, il sito 
              potrebbe non funzionare correttamente. Non richiedono il preventivo consenso dell'utente.
            </li>
            <li>
              <strong>Cookie Statistici (Analitici):</strong> Utilizzati per raccogliere informazioni in forma aggregata 
              e anonima sul numero degli utenti e su come questi visitano il sito (pagine più lette, tempo di permanenza). 
              <em> [Nota: Se usi Google Analytics con IP anonimizzato, specificalo qui, altrimenti rimuovi/adatta questa riga].</em>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            3. Cookie di terze parti
          </h2>
          <p>
            Durante la navigazione su questo sito potresti ricevere cookie forniti da organizzazioni terze (es. per 
            l'incorporamento di mappe, video o script di monitoraggio). La gestione delle informazioni raccolte da 
            &quot;terze parti&quot; è disciplinata dalle relative informative a cui si prega di fare riferimento. 
            Questo sito è ospitato sulla piattaforma <strong>Vercel</strong> e gestito tramite il CMS <strong>Sanity</strong>, 
            i quali potrebbero ottimizzare le performance del sito utilizzando cookie tecnici di routing o caching.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            4. Come gestire o disabilitare i cookie tramite il browser
          </h2>
          <p className="mb-3">
            Puoi decidere se accettare o meno i cookie modificando le impostazioni del tuo browser internet. La disattivazione 
            dei cookie &quot;terzi&quot; o &quot;di profilazione&quot; non pregiudica in alcun modo la navigabilità, ma la 
            disattivazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
          </p>
          <p className="mb-2">Ecco i link alle guide dei principali browser per gestire i cookie:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-indigo-600 underline">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge / Internet Explorer</a></li>
            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
          </ul>
        </section>

        <section className="border-t border-slate-200 pt-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            5. Contatti
          </h2>
          <p>
            Per qualsiasi domanda o richiesta di chiarimento in merito alla presente Cookie Policy, puoi contattare il 
            Titolare del trattamento all&apos;indirizzo email: <span className="font-semibold">[Inserisci Email]</span>.
          </p>
        </section>
      </div>
    </main>
  );
}