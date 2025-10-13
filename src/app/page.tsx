
import styles from './home.module.css';
import {
  FaRocket, 
  FaMobileAlt, 
  FaUserShield,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaShoppingCart,
  FaSearch,
  FaPaintBrush,
  FaTools,
  FaChartBar,
  FaUsers,
  FaSyncAlt,
  FaLock,
  FaMinus,
  FaHeadset
} from "react-icons/fa";
import Faq from './faq/Faq'
import Link from "next/link";
import Image from 'next/image';
import CtaForm from "./CtaForm"; 
import ScrollButton from '@/components/ScrollButton';


export const metadata = {
  title: "Webseiten und Anwendungen für Unternehmen | Gregor Sloweck",
  description:
    "Ich entwickle moderne Webseiten und Anwendungen für Unternehmen – mobil, webbasiert, schnell und auf Ihre Geschäftsziele zugeschnitten.",
  robots: "index,follow",
  openGraph: {
    title: "Webseiten und Anwendungen für Unternehmen | Gregor Sloweck",
    description:
      "Ich entwickle moderne Web- und App-Lösungen – schnell, mobil und auf Ihre Geschäftsziele abgestimmt.",
    url: "https://sloweck.de/",
    siteName: "Gregor Sloweck – Webseiten und Anwendungen für Unternehmen",
    images: [
      {
        url: "https://sloweck.de/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Gregor Sloweck – Webseiten und Anwendungen für Unternehmen",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webseiten und Anwendungen für Unternehmen | Gregor Sloweck",
    description:
      "Moderne Web- und Mobile-Lösungen für Ihr Business. Von einfachen Webseiten bis zu komplexen Systemen.",
    creator: "@twojTwitter",
    images: ["https://sloweck.de/images/logo-fb.webp"],
  },
};

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroText}>
            <h1>Mobile Apps und Webseiten</h1>
            <p>
              Ich entwickle schnelle, skalierbare Webseiten und Apps für Unternehmen – von einfachen Visitenkarten und Onlineshops bis hin zu komplexen Web- und Mobile-Systemen.
            </p>
            <ScrollButton />
          </div>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/images/baner-strona-glowna-aplikacja-responsive.webp"
              alt="Moderne mobile App und Unternehmens-Website – Benutzeroberfläche auf Laptop und Smartphone"
              width="1079"
              height="1256"
              priority
              fetchPriority="high"
            />

            <div className={styles.overlayBoxOne}>
              <Image
                className={styles.overlayImageOne}
                src="/images/grafika-karta-elementu-interfejsu.webp"
                alt="Beispiel einer App-Oberflächenkarte für Unternehmen – Grafik mit Icon und Funktionsbeschreibung"
                width="408"
                height="239"
                loading="lazy"
              />
            </div>

            <div className={styles.overlayBoxTwo}>
              <Image
                className={styles.overlayImageTwo}
                src="/images/grafika-statystyki-uzytkownika-aplikacji.webp"
                alt="Statistik-Dashboard in der Unternehmens-App – Datenanalyse und Zielverfolgung"
                width="404"
                height="245"
                loading="lazy"
              />
            </div>

            <div className={styles.overlayBoxThree}>
              <Image
                className={styles.overlayImageThree}
                src="/images/grafika-integracja-zewnetrzna-api-chmura.webp"
                alt="Integration der App mit externen Systemen und Cloud – Datensynchronisation"
                width="404"
                height="398"
                loading="lazy"
              />
            </div>

            <div className={styles.overlayBoxFour}>
              <Image
                className={styles.overlayImageFour}
                src="/images/grafika-ocena-uzytkownikow-aplikacja.webp"
                alt="Bewertungssystem in der Unternehmens-App – fünf Sterne und hohe Nutzerzufriedenheit"
                width="404"
                height="135"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.benefitsSection} fadeInUp`} id="benefitsSection">
        <div className={styles.benefitsContainer}>
          <div className={styles.benefitsIntro}>
            <div className={styles.benefitsIntroLeft}>
              <Link href="/" className={styles.logoWrapper} aria-label="Startseite – Gregor Sloweck">
                <Image
                  src="/images/logo-grzegorz-slowiaczek-ciemne.webp"
                  alt="Logo Gregor Sloweck – Webdesign und App-Entwicklung"
                  width="768"
                  height="427"
                  loading="lazy"
                />
                <span className={styles.logoText}>Gregor<br/>Sloweck</span>
              </Link>
            </div>
            <div className={styles.benefitsIntroRight}>
              <p>
                Ich entwickle Webseiten und Anwendungen für Unternehmen, die nicht nur gut aussehen – sondern auch schnell, intuitiv und auf Ihre Geschäftsziele zugeschnitten sind.
              </p>
            </div>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <FaRocket className={styles.benefitIcon} />
              <p>Schnelle Ladezeiten</p>
            </div>
            <div className={styles.benefitCard}>
              <FaMobileAlt className={styles.benefitIcon} />
              <p>Mobile Optimierung</p>
            </div>
            <div className={styles.benefitCard}>
              <FaUserShield className={styles.benefitIcon} />
              <p>Maximale Sicherheit</p>
            </div>
            <div className={styles.benefitCard}>
              <FaCogs className={styles.benefitIcon} />
              <p>Modulare Erweiterung</p>
            </div>
            <div className={styles.benefitCard}>
              <FaChartLine className={styles.benefitIcon} />
              <p>Ergebnisse und Effizienz</p>
            </div>
            <div className={styles.benefitCard}>
              <FaHeadset className={styles.benefitIcon} />
              <p>Kontinuierliche Betreuung</p>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.servicesSection}>
        <div className={`${styles.servicesGrid} fadeInUp`}>
          <Link href="/webseiten" className={styles.serviceCard}>
            <FaLaptopCode className={styles.serviceIcon} />
            <h3>Webseiten</h3>
            <p>Moderne, responsive Seiten – perfekt auf Ihre Branche zugeschnitten.</p>
          </Link>

          <Link href="/webseiten" className={styles.serviceCard}>
            <FaShoppingCart className={styles.serviceIcon} />
            <h3>Onlineshops</h3>
            <p>Funktionale Shops mit einfacher Verwaltung und hoher Geschwindigkeit.</p>
          </Link>

          <Link href="/apps" className={styles.serviceCard}>
            <FaMobileAlt className={styles.serviceIcon} />
            <h3>Mobile Apps</h3>
            <p>Moderne mobile Anwendungen für Android und iOS.</p>
          </Link>

          <Link href="/" className={styles.serviceCard}>
            <FaPaintBrush className={styles.serviceIcon} />
            <h3>Grafikdesign</h3>
            <p>Logos, visuelle Identität, Banner und Werbematerialien.</p>
          </Link>

          <Link href="/stronywww" className={styles.serviceCard}>
            <FaSearch className={styles.serviceIcon} />
            <h3>SEO-Optimierung</h3>
            <p>Effektives SEO – Ihre Seite sichtbar bei Google.</p>
          </Link>

          <Link href="/klienci" className={styles.serviceCard}>
            <FaTools className={styles.serviceIcon} />
            <h3>Technischer Support</h3>
            <p>Laufende Betreuung, Backups und regelmäßige Updates.</p>
          </Link>
        </div>
      </section>



      <section className={`${styles.featuresSection} fadeInUp`}>
        <h2>Funktionen, die den Unterschied machen</h2>
        <p className={styles.leadText}>
          Ihre App oder Website ist mehr als nur schönes Design. Ich achte auf technische Details, die Komfort, Sicherheit und das Wachstum Ihres Unternehmens wirklich fördern.
        </p>

        <div className={styles.featuresGrid}>
          <div className={styles.featuresLeft}>
            <div className={`${styles.featureItem} ${styles.reversed}`}>
              <FaMobileAlt className={styles.featureIcon} />
              <p><b>Responsives Interface</b><br />Optimiert für jedes Gerät</p>
            </div>
            <div className={`${styles.featureItem} ${styles.reversed}`}>
              <FaRocket className={styles.featureIcon} />
              <p><b>Blitzschnelles Laden</b><br />Leistungsoptimiert und reaktionsschnell</p>
            </div>
            <div className={`${styles.featureItem} ${styles.reversed}`}>
              <FaLock className={styles.featureIcon} />
              <p><b>Sicheres Login</b><br />Aktuelle Sicherheitsstandards</p>
            </div>
          </div>

          <div className={styles.featuresImage}>
            <Image
              src="/images/grafika-aplikacja-mobilna-zarzadzanie-zadaniami.webp"
              alt="Mobile App für Unternehmen – Aufgabenverwaltung, Kalender und Nutzerfunktionen auf dem Smartphone-Bildschirm"
              width="525"
              height="879"
              loading="lazy"
            />
          </div>

          <div className={styles.featuresRight}>
            <div className={styles.featureItem}>
              <FaSyncAlt className={styles.featureIcon} />
              <p><b>Systemintegrationen</b><br />Automatische Anbindungen per API</p>
            </div>
            <div className={styles.featureItem}>
              <FaUsers className={styles.featureIcon} />
              <p><b>Nutzerverwaltung</b><br />Rollen, Konten, Berechtigungen</p>
            </div>
            <div className={styles.featureItem}>
              <FaChartBar className={styles.featureIcon} />
              <p><b>Statistiken & Analysen</b><br />Dateneinblicke und Performance</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.coverageSection}>
        <div className={`${styles.coverageGrid} fadeInUp`}>
          <div className={styles.coverageText}>
            <div className={styles.coverageHeading}>
              <div className={styles.iconLine}>
                <FaMinus className={styles.iconMinus} />
              </div>
              <h2>Webseiten und Apps für Unternehmen in ganz Deutschland</h2>
            </div>
            <p>
              Ich realisiere Projekte im Bereich <strong>Webentwicklung</strong> und <strong>mobile Anwendungen</strong> für Unternehmen in ganz Deutschland – unabhängig vom Standort. Dank bewährter Remote-Prozesse und klarer Kommunikation biete ich <strong>vollständigen Online-Service</strong> – von der Angebotserstellung bis zur Umsetzung.
            </p>
          </div>
          <div className={styles.coverageImage}>
            <Image
              src="/images/grafika-polska-zasieg-uslug-strony-aplikacje.webp"
              alt="Dienstleistungen für Unternehmen in ganz Deutschland – Karte mit markierten Standorten"
              width="874"
              height="900"
              loading="lazy"
            />
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
