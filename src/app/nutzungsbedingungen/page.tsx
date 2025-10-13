import "./regulamin.css";
import Link from "next/link";

export const metadata = {
  title: "Dienstleistungsbedingungen | Grzegorz Słowiaczek",
  description:
    "Informieren Sie sich über die Bedingungen für die Erstellung von Websites und Apps. Klare Regeln für Zusammenarbeit, Verantwortung und Zahlungen.",
  robots: "index,follow",
  openGraph: {
    title: "Dienstleistungsbedingungen | Grzegorz Słowiaczek",
    description:
      "Erfahren Sie mehr über die Projektabwicklung, Zahlungsbedingungen und klare Grundsätze der Zusammenarbeit bei der Erstellung von Webseiten und Apps.",
    url: "https://slowiaczek.pl/regulamin",
    type: "website",
    images: [
      {
        url: "https://slowiaczek.pl/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "AGB – Grzegorz Słowiaczek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dienstleistungsbedingungen | Grzegorz Słowiaczek",
    description:
      "Erfahren Sie, unter welchen Bedingungen Web- und App-Entwicklungsdienstleistungen erbracht werden. Transparente Zusammenarbeit.",
    images: ["https://slowiaczek.pl/images/logo-fb.webp"],
  },
};


export default function Regulamin() {
  return (
    <main>
      <section className="regulamin">
        <h1>Allgemeine Geschäftsbedingungen (AGB) für elektronische Dienstleistungen</h1>

        <p><strong>Letzte Aktualisierung:</strong> 04.06.2025</p>

        <h2>1. Allgemeine Informationen</h2>
        <p>Diese AGB regeln die Nutzung der Website unter der Adresse <strong>www.twojadomena.pl</strong>, betrieben von <strong>Grzegorz Słowiaczek</strong>, mit Sitz in Polen, im Rahmen elektronisch erbrachter Dienstleistungen.</p>

        <h2>2. Begriffsbestimmungen</h2>
        <p><strong>Dienstanbieter</strong> – Betreiber der Website, Grzegorz Słowiaczek.</p>
        <p><strong>Nutzer</strong> – jede Person, die die Website nutzt.</p>
        <p><strong>Website</strong> – die unter www.twojadomena.pl erreichbare Internetseite.</p>
        <p><strong>Dienstleistungen</strong> – elektronisch bereitgestellte Dienstleistungen, darunter technischer Support, Zugang zu Inhalten und kostenpflichtige Abonnements.</p>

        <h2>3. Art und Umfang der Dienstleistungen</h2>
        <p>Der Dienstanbieter stellt folgende Dienste bereit:</p>
        <ul>
          <li>Zugang zu Informationsinhalten,</li>
          <li>technischer Support,</li>
          <li>monatliche Abonnements,</li>
          <li>Kontaktformulare.</li>
        </ul>

        <h2>4. Nutzungsbedingungen</h2>
        <p>Der Nutzer verpflichtet sich, die Website in Übereinstimmung mit geltendem Recht und diesen AGB zu verwenden.</p>
        <p>Technische Voraussetzungen: Internetzugang und aktueller Webbrowser.</p>

        <h2>5. Zahlungen</h2>
        <p>Für kostenpflichtige Dienste, wie z. B. Abonnements oder Support-Leistungen, ist die Zahlung über ein bereitgestelltes Zahlungssystem (z. B. Stripe) erforderlich.</p>
        <p>Die Preise werden vor dem Kauf deutlich angezeigt. Eine Zahlungsbestätigung wird per E-Mail an die vom Nutzer angegebene Adresse gesendet.</p>

        <h2>6. Reklamationen</h2>
        <p>Reklamationen sind per E-Mail an <strong>kontakt@slowiaczek.pl</strong> zu richten. Die Bearbeitung erfolgt innerhalb von 14 Werktagen.</p>

        <h2>7. Widerrufsrecht</h2>
        <p>Verbraucher haben das Recht, innerhalb von 14 Tagen nach Vertragsabschluss ohne Angabe von Gründen vom Vertrag zurückzutreten, sofern die Dienstleistung noch nicht begonnen wurde.</p>
        <p>Wurde die Dienstleistung mit ausdrücklicher Zustimmung des Verbrauchers vollständig erbracht, erlischt das Widerrufsrecht.</p>

        <h2>8. Datenschutz</h2>
        <p>Personenbezogene Daten werden gemäß der <Link href="/Datenschutzerklarung">Datenschutzerklärung</Link> und der Datenschutz-Grundverordnung (DSGVO) verarbeitet.</p>

        <h2>9. Geistiges Eigentum</h2>
        <p>Alle Inhalte, Grafiken, Quellcodes und Materialien auf der Website sind urheberrechtlich geschützt und Eigentum des Dienstanbieters.</p>

        <h2>10. Schlussbestimmungen</h2>
        <p>Der Dienstanbieter behält sich das Recht vor, diese AGB jederzeit zu ändern. Änderungen treten mit Veröffentlichung auf der Website in Kraft.</p>
        <p>Die weitere Nutzung der Website nach einer Änderung gilt als Zustimmung zu den aktualisierten Bedingungen.</p>
      </section>
    </main>

  );
}