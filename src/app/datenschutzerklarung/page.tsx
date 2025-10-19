import "./politykaprywatnosci.css";

export const metadata = {
  title: "Polityka prywatności | Gregor Slowiaczek",
  description:
    "Zapoznaj się z polityką prywatności dotyczącą przetwarzania danych na stronie internetowej Grzegorza Słowiaczka. Dowiedz się, jakie dane są zbierane i w jakim celu.",
  robots: "index,follow",
  openGraph: {
    title: "Polityka prywatności | Gregor Slowiaczek",
    description:
      "Zasady przetwarzania danych osobowych, plików cookies i ochrony prywatności użytkowników na stronie Grzegorza Słowiaczka.",
    url: "https://slowiaczek.de/datenschutzerklarung",
    type: "website",
    images: [
      {
        url: "https://slowiaczek.de/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Polityka prywatności – Gregor Slowiaczek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polityka prywatności | Gregor Slowiaczek",
    description:
      "Sprawdź, jak dbamy o Twoją prywatność. Przejrzysta polityka ochrony danych osobowych i cookies.",
    images: ["https://slowiaczek.de/images/logo-fb.webp"],
  },
};


export default function PolitykaPrywatnosci() {
  return (
    <main>
      <section className="polityka">
        <h1>Datenschutz- und Cookie-Richtlinie</h1>

        <h2>1. Verantwortlicher für die Datenverarbeitung</h2>
        <p>Verantwortlich für die Verarbeitung personenbezogener Daten ist:<br />
          <strong>Grzegorz Słowiaczek</strong><br />
          kontakt@slowiaczek.de<br />
        </p>

        <h2>2. Welche Daten werden erhoben?</h2>
        <p>Wir erheben personenbezogene Daten nur im notwendigen Umfang für die Erbringung unserer Dienstleistungen und die Kommunikation mit Nutzern:</p>
        <ul>
          <li>Vor- und Nachname,</li>
          <li>E-Mail-Adresse,</li>
          <li>Nachrichtentext aus dem Kontaktformular,</li>
          <li>Daten zur Zahlungsabwicklung (z. B. bei Abonnements).</li>
        </ul>

        <h2>3. Zweck und Rechtsgrundlage der Datenverarbeitung</h2>
        <p>Personenbezogene Daten werden verarbeitet zu folgenden Zwecken:</p>
        <ul>
          <li>Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse),</li>
          <li>Vertragserfüllung und Durchführung von Dienstleistungen (Art. 6 Abs. 1 lit. b DSGVO),</li>
          <li>Zahlungsabwicklung (z. B. über Stripe),</li>
          <li>Direktmarketing – nur mit Einwilligung.</li>
        </ul>

        <h2>4. Speicherdauer</h2>
        <p>Deine Daten werden wie folgt gespeichert:</p>
        <ul>
          <li>Für die Dauer der Kommunikation + 12 Monate,</li>
          <li>Bei Käufen – entsprechend den steuerrechtlichen Aufbewahrungspflichten (bis zu 10 Jahre in Deutschland).</li>
        </ul>

        <h2>5. Weitergabe von Daten</h2>
        <p>Deine Daten werden nicht an Dritte weitergegeben, es sei denn:</p>
        <ul>
          <li>es besteht eine gesetzliche Verpflichtung,</li>
          <li>es ist für die Zahlungsabwicklung erforderlich (z. B. Zahlungsdienstleister).</li>
        </ul>

        <h2>6. Deine Rechte</h2>
        <p>Du hast das Recht:</p>
        <ul>
          <li>auf Auskunft über deine Daten,</li>
          <li>auf Berichtigung, Löschung oder Einschränkung der Verarbeitung,</li>
          <li>Widerspruch gegen die Verarbeitung einzulegen,</li>
          <li>eine Beschwerde bei einer Datenschutzaufsichtsbehörde einzureichen (z. B. BfDI).</li>
        </ul>

        <h2>Cookie-Richtlinie</h2>

        <h3>1. Was sind Cookies?</h3>
        <p>Cookies sind kleine Textdateien, die auf deinem Gerät gespeichert werden. Sie helfen, die Nutzung der Website zu analysieren und Inhalte zu personalisieren.</p>

        <h3>2. Welche Cookies verwenden wir?</h3>
        <ul>
          <li><strong>Technisch notwendige Cookies</strong> – erforderlich für die Funktion der Website (z. B. Sitzungen, Einstellungen).</li>
          <li><strong>Analyse-Cookies</strong> – z. B. Google Analytics zur Optimierung der Website.</li>
          <li><strong>Marketing-Cookies</strong> – nur mit deiner Zustimmung, z. B. für Werbekampagnen.</li>
        </ul>

        <h3>3. Verwaltung von Cookies</h3>
        <p>Du kannst Cookies jederzeit über deinen Browser oder beim ersten Besuch der Website über das Cookie-Banner verwalten:</p>
        <ul>
          <li>Indem du die Einstellungen deines Browsers änderst,</li>
          <li>oder auf „Cookies ablehnen“ klickst.</li>
        </ul>
        <p>Wenn du die Einstellungen nicht änderst, gehen wir von deinem Einverständnis zur Nutzung von Cookies aus.</p>

        <h2>Kontakt</h2>
        <p>Bei Fragen zum Datenschutz kannst du uns jederzeit kontaktieren:<br />
          <strong>kontakt@slowiaczek.de</strong>
        </p>
      </section>
    </main>

  );
}