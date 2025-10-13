
import styles from './stronaWww.module.css';
import {
  FaDesktop,
  FaBullseye,
  FaRocket,
  FaServer,
  FaSearch,
  FaMobileAlt,
  FaLock,
  FaGlobe,
  FaEnvelope,
  FaEdit,
  FaChartLine,
  FaWpforms,
  FaBalanceScale,
} from "react-icons/fa";
import Link from 'next/link';
import Faq from '../faq/Faq-strony-www'
import Image from 'next/image';
import CtaForm from "../CtaForm";


export const metadata = {
  title: "Webseiten für Unternehmen – modern und günstig | Gregor Sloweck",
  description:
    "Ich entwerfe Webseiten für Unternehmen – Visitenkarten, Shops und Portale. Günstig, schnell und auf Ihre Geschäftsziele abgestimmt.",
  robots: "index,follow",
  openGraph: {
    title: "Webseiten für Unternehmen | Modern und bezahlbar",
    description:
      "Visitenkarten, Shops, Portale – individuell auf Ihr Business zugeschnitten. Schauen Sie sich die Projekte an.",
    url: "https://sloweck.de/stronywww",
    type: "website",
    images: [
      {
        url: "https://sloweck.de/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Webseiten für Unternehmen – Gregor Sloweck",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webseiten für Unternehmen | Gregor Sloweck",
    description:
      "Responsiv, schnell und genau auf Ihre Branche abgestimmt – Webseiten für moderne Unternehmen.",
    images: ["https://sloweck.de/images/logo-fb.webp"],
  },
};


export default function StronaWWW() {
  return (
    <main className={styles.container}>
      <section className={styles.websitesHeroSection}>
        <h1>Moderne Unternehmenswebseiten</h1>
        <p>
          Ich entwickle Webseiten für Unternehmen – von einfachen Visitenkarten bis hin zu komplexen Portalen mit individuellem Verwaltungsbereich. Alles abgestimmt auf Ihre Branche und Ziele.
        </p>
        <Image
          className={styles.heroImage}
          src="/images/nowoczesna-strona-www-na-laptopie-i-telefonie.webp"
          alt="Moderne und responsive Website für Unternehmen – Darstellung auf Laptop und Smartphone"
          width="2048"
          height="1602"
          loading="lazy"
        />
      </section>

      <section className={`${styles.includedFeaturesSection} ${styles.fadeInUp}`}>
        <h2>Leistungen, die bei mir inklusive sind</h2>
        <p>
          Jede Unternehmenswebsite, die ich entwickle, verbindet moderne Technologien, starke Performance und echten Mehrwert – ganz ohne versteckte Kosten.
        </p>

        <div className={styles.includedFeaturesGrid}>
          <div className={styles.includedFeatureCard}>
            <FaServer className={styles.includedFeatureIcon} />
            <span>1 Jahr kostenloses Hosting</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaSearch className={styles.includedFeatureIcon} />
            <span>Grundlegende SEO-Optimierung</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaRocket className={styles.includedFeatureIcon} />
            <span>Performance-Optimierung</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaMobileAlt className={styles.includedFeatureIcon} />
            <span>Responsives Webdesign (RWD)</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaLock className={styles.includedFeatureIcon} />
            <span>SSL-Zertifikat (HTTPS)</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaGlobe className={styles.includedFeatureIcon} />
            <span>Domainregistrierung</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaEnvelope className={styles.includedFeatureIcon} />
            <span>Geschäftliche E-Mail-Adresse</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaEdit className={styles.includedFeatureIcon} />
            <span>Einfache Inhaltsverwaltung (CMS)</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaChartLine className={styles.includedFeatureIcon} />
            <span>Google Analytics-Integration</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaWpforms className={styles.includedFeatureIcon} />
            <span>Kontaktformular</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaBalanceScale className={styles.includedFeatureIcon} />
            <span>DSGVO-Konformität</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaBullseye className={styles.includedFeatureIcon} />
            <span>SEO-fähige Struktur</span>
          </div>
        </div>
      </section>


      <section className={`${styles.portfolioSection} fadeInUp`}>
        <h2>Ausgewählte Projekte</h2>
        <p>Schauen Sie sich an, welche Webseiten ich bereits für meine Kunden entworfen und umgesetzt habe.</p>

        <div className={styles.projectGallery}>
          <div className={`${styles.projectCard} fadeInUp`}>
            <Image
              src="/images/realizacja-strony-www-firma-dachowa.webp"
              alt="Günstige Website für ein Dachdeckerunternehmen – Projekt mit Leistungsangebot"
              width={600}
              height={400}
              loading="lazy"
            />
            <a href="https://exdach.com/" className={styles.viewButton}>
              Ganze Website ansehen
            </a>
          </div>
          <div className={`${styles.projectCard} fadeInUp`}>
            <Image
              src="/images/realizacja-strony-www-biuro-nieruchomosci.webp"
              alt="Website für ein Immobilienbüro – mit Angebots-Suchfunktion für Kunden"
              width={600}
              height={400}
              loading="lazy"
            />
            <a href="https://nieruchomosciszypula.pl/" className={styles.viewButton}>
              Ganze Website ansehen
            </a>
          </div>
          <div className={`${styles.projectCard} fadeInUp`}>
            <Image
              src="/images/realizacja-strony-www-pasieka-sklep.webp"
              alt="Website für eine Imkerei – Online-Verkauf von natürlichen Produkten"
              width={600}
              height={400}
              loading="lazy"
            />
            <a href="https://odjazdowapasieka.pl/" className={styles.viewButton}>
              Ganze Website ansehen
            </a>
          </div>
          <div className={`${styles.projectCard} fadeInUp`}>
            <Image
              src="/images/realizacja-strony-www-deweloper-luksusowe-apartamenty.webp"
              alt="Website für ein Immobilienbüro – modernes Design mit Angebotspräsentation"
              width={600}
              height={400}
              loading="lazy"
            />
            <a href="https://penthouse-nieruchomosci.pl/" className={styles.viewButton}>
              Ganze Website ansehen
            </a>
          </div>
        </div>

        <h3 className="animacja-z-dolu">
          Wenn Sie auf der Suche nach Inspiration sind oder sehen möchten, wie Unternehmenswebseiten aussehen können, die ich entwickle – werfen Sie einen Blick auf mein vollständiges{' '}
          <Link href="/projekty" passHref>
            <span style={{ color: '#cf0031', fontWeight: 'bold' }}>Portfolio</span>
          </Link>{' '}
          Dort finden Sie eine Vielzahl von Projekten – von einfachen Visitenkarten bis zu komplexen Lösungen mit individuellen Funktionen.
        </h3>
      </section>



      <section className={styles.processSection}>
        <div className={styles.processGrid}>
          <div className={`${styles.left} fadeInUp`}>
            <h2>Wie läuft die Zusammenarbeit ab?</h2>
            <p>
              Der Prozess zur Erstellung Ihrer Unternehmenswebsite ist klar und unkompliziert. Wir durchlaufen gemeinsam vier Schritte – vom ersten Kontakt bis zur finalen Umsetzung, maßgeschneidert auf Ihre Branche und Ihr Budget.
            </p>
            <Link href="/kontakt" className={styles.btn}>
              Jetzt Kontakt aufnehmen
            </Link>
          </div>

          <div className={styles.right}>
            <div className={`${styles.step} fadeInUp`}>
              <span className={styles.stepNumber}>1</span>
              <div className={styles.stepContent}>
                <strong>Kontakt & Bedarfsanalyse</strong>
                <p>Wir besprechen Ihre Erwartungen und definieren die Projektziele.</p>
              </div>
            </div>

            <div className={`${styles.step} fadeInUp`}>
              <span className={styles.stepNumber}>2</span>
              <div className={styles.stepContent}>
                <strong>Grafikdesign</strong>
                <p>Ich erstelle ein individuelles Design passend zu Ihrer Marke.</p>
              </div>
            </div>

            <div className={`${styles.step} fadeInUp`}>
              <span className={styles.stepNumber}>3</span>
              <div className={styles.stepContent}>
                <strong>Programmierung & Umsetzung</strong>
                <p>Ich entwickle und teste die Seite – sie funktioniert schnell und fehlerfrei.</p>
              </div>
            </div>

            <div className={`${styles.step} fadeInUp`}>
              <span className={styles.stepNumber}>4</span>
              <div className={styles.stepContent}>
                <strong>Veröffentlichung & Support</strong>
                <p>Die Website geht online – und ich stehe Ihnen weiterhin zur Seite.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    <section className={styles.technologySection}>
      <div className={`${styles.box} ${styles.fadeIn}`}>
        <div className={styles.topIcon}>
          <FaDesktop />
        </div>
        <h2>Eingesetzte Technologien</h2>
        <p>
          Ich wähle Technologien projektbezogen aus, um moderne und schnelle Webseiten zu erstellen – mit hoher Performance, einfacher Bedienung und Zukunftssicherheit.
        </p>

        <div className={styles.techContent}>
          <div className={`${styles.leftColumn} ${styles.fadeIn}`}>
            <ul>
              <li><span className={styles.check}>✔</span> Professionelle Präsentation Ihres Angebots</li>
              <li><span className={styles.check}>✔</span> Intuitive Navigation zur Conversion-Steigerung</li>
              <li><span className={styles.check}>✔</span> Mobile Optimierung (RWD)</li>
              <li><span className={styles.check}>✔</span> Schnelle Ladezeiten (geringere Absprungraten)</li>
              <li><span className={styles.check}>✔</span> Einfache Erweiterbarkeit in der Zukunft</li>
              <li><span className={styles.check}>✔</span> Moderne Technologien, die jahrelang funktionieren</li>
            </ul>
          </div>

          <div className={styles.rightColumn}>
            {[
              { src: "html", label: "HTML", alt: "HTML-Logo – Auszeichnungssprache für Webseiten" },
              { src: "lavarel", label: "Laravel", alt: "Laravel-Logo – PHP-Framework für Webanwendungen" },
              { src: "javascript", label: "JavaScript", alt: "JavaScript-Logo – Programmiersprache für interaktive Webseiten" },
              { src: "node", label: "Node.js", alt: "Node.js-Logo – JavaScript-Laufzeitumgebung für Server" },
              { src: "react", label: "React", alt: "React-Logo – JavaScript-Bibliothek" },
              { src: "angular", label: "Angular", alt: "Angular-Logo – Framework für Webanwendungen mit TypeScript" },
              { src: "vue", label: "Vue.js", alt: "Vue.js-Logo – progressives JavaScript-Framework für Benutzeroberflächen" },
              { src: "next", label: "Next.js", alt: "Next.js-Logo – React-Framework mit SEO- und SSR-Funktionen" },
              { src: "mysql", label: "MySQL", alt: "MySQL-Logo – relationales Datenbankmanagementsystem" },
              { src: "php", label: "PHP", alt: "PHP-Logo – Skriptsprache für dynamische Webseiten" },
              { src: "wordpress", label: "WordPress", alt: "WordPress-Logo – PHP-basiertes Content-Management-System (CMS)" },
              { src: "typescript", label: "TypeScript", alt: "TypeScript-Logo – statisch typisiertes Superset von JavaScript" }
            ].map(({ src, label, alt }) => (
              <div key={src} className={styles.iconBox}>
                <Image
                  src={`/images/${src}.webp`}
                  alt={alt}
                  width={64}
                  height={64}
                  loading="lazy"
                />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>



      <section className={`${styles.ctaSection} fadeInUp`}>
        <h2>Fragen? Schreiben Sie mir!</h2>
        <p>Hinterlassen Sie Ihre E-Mail-Adresse – ich melde mich schnellstmöglich zurück.</p>

        <CtaForm />

        <div className={styles.ctaAltAction}>
          <span>oder</span>
          <Link href="/kontakt" className={styles.ctaLinkButton}>
            Zum Kontaktformular
          </Link>
        </div>
      </section>

    <Faq />

    </main>
  );
}
