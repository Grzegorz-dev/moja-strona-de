
import styles from './aplikacje.module.css';
import {
  FaCogs,
  FaMobileAlt,
  FaLock,
  FaGlobe,
  FaBolt,
  FaShieldAlt,
  FaPuzzlePiece,
  FaBell,
  FaCloud,
  FaSyncAlt,
  FaCaretRight,
  FaMinus,
  FaDatabase,
  FaAdjust
} from "react-icons/fa";
import Link from 'next/link';
import Faq from '../faq/Faq-aplikacje'
import Image from 'next/image';
import CtaForm from "../CtaFormBlue";

export const metadata = {
  title: "Apps für Unternehmen – Web und Mobil | Gregor Sloweck",
  description:
    "Ich entwickle maßgeschneiderte Web- und Mobile-Apps für Unternehmen – schnell, sicher und skalierbar.",
  robots: "index,follow",
  openGraph: {
    title: "Mobile und Web-Apps für Unternehmen | Gregor Sloweck",
    description:
      "Ich entwickle Apps für Android, iOS und Browser – perfekt abgestimmt auf Ihre Nutzer und Geschäftsprozesse.",
    url: "https://sloweck.de/aplikacje",
    type: "website",
    images: [
      {
        url: "https://sloweck.de/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Apps für Unternehmen – Gregor Sloweck",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile und Web-Apps für Unternehmen | Gregor Sloweck",
    description:
      "Intuitive und skalierbare Mobile- und Webanwendungen – maßgeschneidert für Ihre Geschäftsziele.",
    images: ["https://sloweck.de/images/logo-fb.webp"],
  },
};

export default function Aplikacje() {
    return (
      <main className={styles.container}>
        <section className={`${styles.appBannerSection} animacja-z-dolu`}>
          <h1>Moderne Apps für Unternehmen – mobil und webbasiert</h1>
          <p>
            Ich entwickle mobile und Web-Apps für Unternehmen – schnell, intuitiv und abgestimmt auf die realen Bedürfnisse Ihrer Nutzer.
          </p>

          <div className={styles.orbitWrapper}>
            <div className={styles.orbit1}></div>
            <div className={styles.orbit2}></div>
            <div className={styles.orbit3}></div>

            <div className={styles.centerPhone}>
              <Image
                className={styles.phoneImage}
                src="/images/interfejs-aplikacji-mobilnej-na-telefonach.webp"
                alt="App-Oberfläche für Unternehmen – mobile und Web-Ansicht auf Smartphones"
                width="652"
                height="829"
                loading="lazy"
              />
            </div>

            <div className={styles.orbitAnimator1}>
              <div className={styles.orbitingObject1}>
                <Image
                  src="/images/google-play.webp"
                  alt="Google Play – Veröffentlichung von Business-Apps für Android"
                  width="512"
                  height="101"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.orbitAnimator2}>
              <div className={styles.orbitingObject2}>
                <Image
                  src="/images/app-store.webp"
                  alt="App Store – Bereitstellung von Apps für iPhone"
                  width="759"
                  height="180"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.orbitAnimator3}>
              <div className={styles.orbitingObject3}>
                <Image
                  src="/images/firebase.webp"
                  alt="Firebase – Backend für mobile und Web-Apps"
                  width="466"
                  height="125"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.orbitAnimator4}>
              <div className={styles.orbitingObject4}>
                <Image
                  src="/images/stripe.webp"
                  alt="Zahlungsintegration in Unternehmens-Apps – Stripe"
                  width="770"
                  height="332"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.appFeaturesSection}>
          <div className={`${styles.appFeaturesBox} animacja-z-dolu`}>
            <div className={styles.intro}>
              <div className={styles.leftIntroColumn}>
                <Link href="/" className={styles.logoWrapper} aria-label="Startseite – Gregor Sloweck">
                  <Image
                    src="/images/logo-grzegorz-slowiaczek-ciemne.webp"
                    alt="Logo Gregor Sloweck – Web- und App-Entwicklung"
                    width="768"
                    height="427"
                    loading="lazy"
                  />
                  <span className={styles.logoText}>
                    Gregor<br />
                    Sloweck
                  </span>
                </Link>
              </div>
              <div className={styles.rightIntroColumn}>
                <p>
                  Die wichtigsten Merkmale moderner Unternehmens-Apps – Funktionen, die für eine schnelle, intuitive und reibungslose Nutzung sorgen – sowohl mobil als auch im Browser.
                </p>
              </div>
            </div>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}><FaBolt className={styles.icon} /><p>Blitzschnelle Performance</p></div>
              <div className={styles.featureCard}><FaLock className={styles.icon} /><p>Sicheres Login & Datenschutz</p></div>
              <div className={styles.featureCard}><FaMobileAlt className={styles.icon} /><p>Optimiert für Smartphones</p></div>
              <div className={styles.featureCard}><FaCogs className={styles.icon} /><p>Skalierbarkeit & Erweiterbarkeit</p></div>
              <div className={styles.featureCard}><FaBell className={styles.icon} /><p>Push- & E-Mail-Benachrichtigungen</p></div>
              <div className={styles.featureCard}><FaCloud className={styles.icon} /><p>Auch offline verfügbar (PWA)</p></div>
              <div className={styles.featureCard}><FaSyncAlt className={styles.icon} /><p>Integration externer Dienste</p></div>
              <div className={styles.featureCard}><FaShieldAlt className={styles.icon} /><p>Stabil & zuverlässig</p></div>
              <div className={styles.featureCard}><FaGlobe className={styles.icon} /><p>Weltweiter Zugriff</p></div>
              <div className={styles.featureCard}><FaPuzzlePiece className={styles.icon} /><p>Intuitive Benutzeroberfläche</p></div>
              <div className={styles.featureCard}><FaDatabase className={styles.icon} /><p>Automatische Backups</p></div>
              <div className={styles.featureCard}><FaAdjust className={styles.icon} /><p>Dunkelmodus & Design-Anpassung</p></div>
            </div>
          </div>
        </section>

      <section className={styles.appTypesSection}>
        <div className={`${styles.appTypesGrid} animacja-z-dolu`}>
          <div className={styles.headingWidget}>
            <div className={styles.iconMinus}>
              <FaMinus className={styles.iconApp} />
            </div>
            <h2>Individuelle Business-Apps für Ihr Unternehmen</h2>
          </div>

          <p>
            Ich entwickle mobile und webbasierte Apps für Unternehmen – angepasst an Ihr Budget und Ihre geschäftlichen Ziele. Ob komplette Mobile App, Web-Panel oder leichtes MVP – wir finden die passende Lösung.
          </p>

          <div className={styles.textColumn}>
            <div className={`${styles.textWidget} animacja-z-dolu`}>
              <FaCaretRight className={styles.iconApp} />
              <p>
                <b>Mobile Apps</b> – ich entwickle native Apps für iOS und Android, die schnell, leicht und bereit für die Veröffentlichung in App-Stores sind. Ob interne Unternehmenslösungen oder Endkunden-Apps – der Fokus liegt auf Nutzerfreundlichkeit und Performance.
              </p>
            </div>

            <div className={`${styles.textWidget} animacja-z-dolu`}>
              <FaCaretRight className={styles.iconApp} />
              <p>
                <b>Web-Apps</b> – browserbasierte Anwendungen sind oft eine kostengünstigere und schnellere Alternative zu mobilen Apps. Perfekt geeignet als Systeme für Unternehmen: Kundenportale, Dashboards, Buchungstools oder Prozessautomatisierung.
              </p>
            </div>

            <div className={`${styles.textWidget} animacja-z-dolu`}>
              <FaCaretRight className={styles.iconApp} />
              <p>
                <b>MVP & schneller Start</b> – wenn Sie eine App-Idee erst testen möchten, müssen Sie kein großes Budget investieren. Ich entwickle ein leichtes MVP – mit den nötigsten Funktionen für Investoren, erste Nutzer oder einen schnellen Markttest.
              </p>
            </div>
          </div>

          <div className={`${styles.imageColumn} animacja-z-dolu`}>
            <Image
              src="/images/interfejs-aplikacji-mobilnej-na-telefonach.webp"
              alt="Beispielhafte Benutzeroberfläche einer mobilen und webbasierten Business-App"
              width="652"
              height="829"
              loading="lazy"
            />
          </div>
        </div>
      </section>


      <section className={styles.integrationSection}>
        <div className={`${styles.integrationBox} animacja-z-dolu`}>
          <div className={styles.textItem}>
            <div className={styles.iconMinus}>
              <FaMinus className={styles.iconApp} />
            </div>
            <h2>Ihre App – verbunden mit der Welt</h2>
          </div>
          <p>
            Unternehmensanwendungen funktionieren selten isoliert. Ich integriere Ihre App mit externen Systemen und Diensten – z. B. Zahlungen, Authentifizierung oder Analyseplattformen. So wird Ihre Web- oder Mobile-App schneller, effizienter und komfortabler für die Nutzer.
          </p>

          <div className={styles.integrationGrid}>
            {[
              { src: "/images/google-play-logo.webp", alt: "Integration mit Google Play – Veröffentlichung von Android-Apps" },
              { src: "/images/app-store-logo.webp", alt: "Integration mit dem App Store – Veröffentlichung von iOS-Apps" },
              { src: "/images/stripe-logo.webp", alt: "Integration mit Stripe – Zahlungslösungen in Apps" },
              { src: "/images/firebase-logo.webp", alt: "Integration mit Firebase – Backend-Lösungen für Business-Apps" },
              { src: "/images/paypal-logo.webp", alt: "Integration mit PayPal – Online-Zahlungen in mobilen Apps" },
              { src: "/images/vercel-logo.webp", alt: "Vercel – Hosting von React/Next.js-Webanwendungen" },
              { src: "/images/auth0-logo.webp", alt: "Auth0 – Login- und Benutzerautorisierung für Unternehmensanwendungen" },
              { src: "/images/onesignal-logo.webp", alt: "OneSignal – Push-Benachrichtigungen in Web- und Mobile-Apps" },
              { src: "/images/google-analytics-logo.webp", alt: "Integration mit Google Analytics – Analyse von Webanwendungen" },
              { src: "/images/twilio-logo.webp", alt: "Twilio – SMS-Nachrichten und Kommunikation in Business-Apps" },
              { src: "/images/blik-logo.webp", alt: "BLIK – schnelle Zahlungen in mobilen Anwendungen" },
              { src: "/images/netlify-logo.webp", alt: "Netlify – Hosting für statische Seiten und JAMstack-Apps" },
            ].map(({ src, alt }, i) => (
              <div key={i} className={`${styles.integrationTile} animacja-z-dolu`}>
                <Image src={src} alt={alt} width="603" height="179" loading="lazy" />
              </div>
            ))}
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