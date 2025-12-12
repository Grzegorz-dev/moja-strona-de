
import styles from './kontakt.module.css';
import {
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import KontaktForm from "./KontaktForm";

export const metadata = {
  title: "Kontakt – Webseiten und Apps für Unternehmen | Gregor Sloweck",
  description:
    "Nimm Kontakt mit mir auf – frag nach einer Website, App oder technischer Unterstützung. Ich antworte schnell und direkt. Fülle das Formular aus oder schreibe mir direkt.",
  robots: "index,follow",
  openGraph: {
    title: "Kontakt aufnehmen – Gregor Sloweck",
    description:
      "Du hast eine Frage zu einer Website oder App? Fülle das Kontaktformular aus oder schreibe mir direkt. Ich biete schnelle Antworten und klare Kommunikation.",
    url: "https://Sloweck.de/kontakt",
    type: "website",
    images: [
      {
        url: "https://Sloweck.de/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Kontakt – Gregor Sloweck",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt – Gregor Sloweck | Webseiten und Apps für Unternehmen",
    description:
      "Du brauchst eine Website oder App? Kontaktiere mich – ich antworte schnell.",
    images: ["https://Sloweck.de/images/logo-fb.webp"],
  },
};

export default function Kontakt() {
  return (
    <main className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.content}>
          <h1>Ich freue mich auf deine Nachricht</h1>
          <p>
            Du hast Fragen, eine Projektidee oder brauchst ein Angebot?
            Fülle das Formular aus oder schreibe mir direkt – ich melde mich so schnell wie möglich.
          </p>
        </div>
      </section>

      <section className={`${styles.supportSection} ${styles.supportColumns}`}>
        <div className={styles.contactBlock}>
          <div>
            <h3><span>Kontakt </span>daten</h3>
            <p>
              Du bevorzugst den direkten Kontakt? Ruf mich an oder schreib mir –
              ich bin von Montag bis Freitag zwischen 9:00 und 17:00 Uhr erreichbar.
            </p>
            <ul>
              <li>
                <span className={styles.contactIcon}>
                  <FaFacebookF />
                </span>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schreibe mir auf Facebook
                </a>
              </li>
              <li>
                <span className={styles.contactIcon}>
                  <FaEnvelope />
                </span>
                kontakt@sloweck.de
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contactBlock}>
          <h3><span>Kontakt </span>formular</h3>
          <p>
            Hinterlasse deine Kontaktdaten und eine kurze Beschreibung –
            ich melde mich, um die Details zu besprechen und die passende Lösung vorzuschlagen.
          </p>
          <KontaktForm />
        </div>
      </section>
    </main>
  );
}
