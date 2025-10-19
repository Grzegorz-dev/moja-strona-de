
import styles from './cennik.module.css';
import Link from 'next/link';


export const metadata = {
  title:
    "Preisliste für Webseiten und Apps – OnePage, MultiPage, Shops, individuelle Anwendungen | Gregor Slowiaczek",
  description:
    "Erfahre die Preise für die Erstellung von Webseiten und Apps. Wähle die passende Lösung: OnePage, MultiPage, Vorlagen oder maßgeschneiderte Projekte.",
  robots: "index,follow",
  openGraph: {
    title: "Preisliste für Webseiten und Apps – Gregor Slowiaczek",
    description:
      "Informiere dich über die Preise für moderne Webseiten und Apps – von einfachen Visitenkarten bis zu individuellen Projekten.",
    url: "https://slowiaczek.pl/cennik",
    type: "website",
    images: [
      {
        url: "https://slowiaczek.pl/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Preisliste –Gregor Slowiaczek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preise für Webseiten und Apps – Gregor Slowiaczek",
    description:
      "Hier findest du alle Preise – OnePage, MultiPage, vorgefertigte oder individuelle Projekte.",
    images: ["https://slowiaczek.pl/images/logo-fb.webp"],
  },
};


export default function Cennik() {

    return (
      <main className={styles.container}>
        <section className={styles.banner}>
          <div className={styles.content}>
            <h1>Preisliste</h1>
            <p>Ein Angebot, das zu deinen Zielen und Möglichkeiten passt.</p>
          </div>
        </section>

        <section className={styles.pricingSection}>
          <div className={styles.pricingTitle}>
            <h2>Webseiten</h2>
          </div>
          <h3 className={styles.subtitle}>
            Nicht jedes Unternehmen braucht eine umfangreiche Website für mehrere tausend Euro – und das ist völlig in Ordnung.  
            Deshalb biete ich verschiedene Optionen an: von einfachen OnePage-Webseiten über erweiterte MultiPage-Projekte bis hin zu günstigen Lösungen auf bewährten Vorlagen.  
            Wähle das passende Paket für dein Budget und deine Ziele.
          </h3>

          <div className={styles.pricingGrid}>
            {[
              {
                title: "OnePage",
                desc: "Digitale Visitenkarte",
                price: "ab 400 €",
                features: [
                  "1 Unterseite",
                  "Individuelles Design",
                  "Mobile Version",
                  "SEO-Optimierung",
                  "Content-Management-System (CMS)",
                  "Google Analytics",
                  "Google Search Console",
                  "reCaptcha-Schutz",
                  "1 Jahr Hosting",
                  "Domainregistrierung",
                  "SSL-Zertifikat",
                  "Datenschutzerklärung",
                  "Kontaktformular",
                  "Firmen-E-Mail-Adresse",
                  "Technischer Support für 6 Monate",
                ],
              },
              {
                title: "MultiPage",
                desc: "Standard-Unternehmensseite",
                price: "ab 600 €",
                features: [
                  "Bis zu 5 Unterseiten",
                  "Individuelles Design",
                  "Mobile Version",
                  "SEO-Optimierung",
                  "Content-Management-System (CMS)",
                  "Google Analytics",
                  "Google Search Console",
                  "reCaptcha-Schutz",
                  "1 Jahr Hosting",
                  "Domainregistrierung",
                  "SSL-Zertifikat",
                  "Datenschutzerklärung",
                  "Kontaktformular",
                  "Firmen-E-Mail-Adresse",
                  "Technischer Support für 12 Monate",
                  "Blog/News-Bereich",
                ],
              },
              {
                title: "MultiPage Pro",
                desc: "Erweiterte Unternehmensseite",
                price: "ab 800 €",
                features: [
                  "Anzahl der Unterseiten je nach Bedarf",
                  "Individuelles Design",
                  "Mobile Version",
                  "SEO-Optimierung",
                  "Content-Management-System (CMS)",
                  "Google Analytics",
                  "Google Search Console",
                  "reCaptcha-Schutz",
                  "1 Jahr Hosting",
                  "Domainregistrierung",
                  "SSL-Zertifikat",
                  "Datenschutzerklärung",
                  "Kontaktformular",
                  "Firmen-E-Mail-Adresse",
                  "Technischer Support für 12 Monate",
                  "Blog/News-Bereich",
                ],
              },
              {
                title: "Custom",
                desc: "Individuelle Lösung",
                price: "ab 1500 €",
                features: [
                  "Anzahl der Unterseiten je nach Bedarf",
                  "Individuelles Design",
                  "Spezielle, individuelle Funktionen",
                  "Integration mit externen Systemen (API)",
                  "Mobile Version",
                  "SEO-Optimierung",
                  "Flexibles CMS",
                  "Google Analytics",
                  "Google Search Console",
                  "reCaptcha-Schutz",
                  "1 Jahr Hosting",
                  "Domainregistrierung",
                  "SSL-Zertifikat",
                  "Datenschutzerklärung",
                  "Kontaktformular",
                  "Firmen-E-Mail-Adresse",
                  "Technischer Support für 12 Monate",
                  "Blog/News-Bereich",
                ],
              },
            ].map((plan, i) => (
              <div className={styles.pricingCard} key={i}>
                <div className={styles.headerCard}>
                  <h3 className={styles.pricingGridTitle}>{plan.title}</h3>
                  <p className={styles.desc}>{plan.desc}</p>
                </div>
                <div className={styles.price}>
                  {plan.price.startsWith("ab") ? (
                    <>
                      <span className={styles.from}>ab</span>{" "}
                      {plan.price.replace("ab", "").trim()}
                    </>
                  ) : (
                    plan.price
                  )}
                </div>
                <ul className={styles.features}>
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <span className={styles.check}>✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.contactCta}>
            <p>
              Die angegebenen Preise und Pakete dienen nur als Richtwerte.  
              Jedes Projekt wird individuell kalkuliert – je nach Umfang, Anforderungen und Budget.  
              Wenn du andere Ideen, ein kleineres Budget oder ein einzigartiges Projekt hast – kontaktiere mich, und wir finden gemeinsam die passende Lösung.
            </p>
            <Link href="/kontakt" className={styles.contactBtn}>Kontakt aufnehmen</Link>
          </div>



          <div className={styles.pricingTitle}>
            <h2>Onlineshops</h2>
          </div>
          <h3 className={styles.subtitle}>
            Ein Onlineshop ist im Grunde eine Webseite + Verkaufsfunktionen.
            Er enthält u.a. eine Startseite, Unterseiten über das Unternehmen, Kontakt sowie ein Produktverwaltungspanel, Warenkorb, Zahlungssysteme und vieles mehr.
          </h3>
          <div className={styles.pricingGrid}>
            {[
              {
                title: "Shop Start",
                desc: "Onlineshop + OnePage-Webseite",
                price: "ab 700 €",
                features: [
                  "Unterseiten: 1",
                  "Integration mit Online-Zahlungsanbietern",
                  "Shop-Konfiguration",
                  "Individuelles Design",
                  "Mobile Version",
                  "SEO-Optimierung",
                  "Admin-Panel zur Inhaltsverwaltung",
                  "Google Analytics",
                  "Google Search Console",
                  "reCaptcha-Schutz",
                  "Hosting für 1 Jahr",
                  "Domainregistrierung",
                  "SSL-Zertifikat",
                  "Datenschutzerklärung",
                  "Kontaktformular",
                  "Firmen-E-Mail-Adresse",
                  "Technischer Support für 6 Monate",
                ],
              },
              {
                title: "Shop Standard",
                desc: "Onlineshop + MultiPage-Webseite",
                price: "ab 1000 €",
                features: [
                  "Individuelle Anzahl an Unterseiten (je nach Bedarf)",
                  "Integration mit Online-Zahlungsanbietern",
                  "Shop-Konfiguration",
                  "Individuelles Design",
                  "Mobile Version",
                  "SEO-Optimierung",
                  "Admin-Panel zur Inhaltsverwaltung",
                  "Google Analytics",
                  "Google Search Console",
                  "reCaptcha-Schutz",
                  "Hosting für 1 Jahr",
                  "Domainregistrierung",
                  "SSL-Zertifikat",
                  "Datenschutzerklärung",
                  "Kontaktformular",
                  "Firmen-E-Mail-Adresse",
                  "Technischer Support für 12 Monate",
                  "Blog/Aktuelles",
                ],
              },
              {
                title: "Shop Pro",
                desc: "Onlineshop + MultiPage Pro",
                price: "ab 1200 €",
                features: [
                  "Individuelle Anzahl an Unterseiten (je nach Bedarf)",
                  "Integration mit Online-Zahlungsanbietern",
                  "Shop-Konfiguration",
                  "Ausgewähltes WordPress-Template",
                  "Mobile Version",
                  "SEO-Optimierung",
                  "Admin-Panel zur Inhaltsverwaltung",
                  "Google Analytics",
                  "Google Search Console",
                  "reCaptcha-Schutz",
                  "Hosting für 1 Jahr",
                  "Domainregistrierung",
                  "SSL-Zertifikat",
                  "Datenschutzerklärung",
                  "Kontaktformular",
                  "Firmen-E-Mail-Adresse",
                  "Technischer Support für 6 Monate",
                  "Blog/Aktuelles",
                ],
              },
              {
                title: "Shop Custom",
                desc: "Individuelles Shop-Projekt",
                price: "ab 2000 €",
                features: [
                  "Abgestimmte Funktionen auf Ihre Branch",
                  "Individuelle Anzahl an Unterseiten (je nach Bedarf)",
                  "Individuelles Design",
                  "Integration mit Online-Zahlungsanbietern",
                  "Shop-Konfiguration",
                  "Spezielle maßgeschneiderte Funktionen",
                  "Integration mit externen Systemen (API)",
                  "Mobile Version",
                  "SEO-Optimierung",
                  "Flexibles CMS",
                  "Google Analytics",
                  "Google Search Console",
                  "reCaptcha-Schutz",
                  "Hosting für 1 Jahr",
                  "Domainregistrierung",
                  "SSL-Zertifikat",
                  "Datenschutzerklärung",
                  "Kontaktformular",
                  "Firmen-E-Mail-Adresse",
                  "Technischer Support für 12 Monate",
                  "Blog/Aktuelles",
                ],
              },
            ].map((plan, i) => (
              <div className={styles.pricingCard} key={i}>
                <div className={styles.headerCard}>
                  <h3 className={styles.pricingGridTitle}>{plan.title}</h3>
                  <p className={styles.desc}>{plan.desc}</p>
                </div>
                <div className={styles.price}>
                  {plan.price.startsWith("ab") ? (
                    <>
                      <span className={styles.from}>ab</span>{" "}
                      {plan.price.replace("ab", "").trim()}
                    </>
                  ) : (
                    plan.price
                  )}
                </div>
                <ul className={styles.features}>
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <span className={styles.check}>✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.contactCta}>
            <p>
              Die angegebenen Preise und Pakete dienen nur zur Orientierung. Jedes Projekt wird individuell basierend auf Umfang, Bedarf und Budget kalkuliert.
              Wenn du eine andere Idee hast, ein kleineres Budget oder etwas Einzigartiges planst – schreib mir und wir finden gemeinsam die beste Lösung.
            </p>
            <Link href="/kontakt" className={styles.contactBtn}>Kontakt aufnehmen</Link>
          </div>


          <div className={styles.pricingTitle}>
            <h2>Applikationen</h2>
          </div>
          <h3 className={styles.subtitle}>
            Eine App zu entwickeln muss weder 100.000 € kosten noch ein halbes Jahr dauern. Ich passe die Lösung an dein Budget und deine Ziele an – gemeinsam finden wir die richtige Version, die funktioniert und im Kostenrahmen bleibt. 
            Du kannst mit einem leichten MVP oder einer günstigeren Alternative zur mobilen App – einer Web-App – starten.
          </h3>
          <div className={styles.pricingGrid}>
            {[
              {
                title: "Web-App",
                desc: "Verwaltungspanel im Browser zugänglich",
                price: "ab 2500 €",
                features: [
                  "Admin-Panel (CMS)",
                  "Individuelles Design",
                  "Responsives und durchdachtes UI",
                  "Benutzer-Login und Authentifizierung",
                  "Integration mit externen APIs (z. B. Zahlungen, Karten, E-Mail)",
                  "Hosting und Bereitstellung",
                  "Technischer Support nach dem Launch",
                ],
              },
              {
                title: "Mobile App",
                desc: "App für Android und iOS – bereit zur Veröffentlichung",
                price: "ab 4500 €",
                features: [
                  "Version für Android & iOS (1 Codebase, z. B. React Native)",
                  "Responsives, natives Design",
                  "Push-Benachrichtigungen",
                  "Login und Benutzerverwaltung",
                  "API-Integration (z. B. Chat, GPS, Zahlungssysteme)",
                  "Vorbereitung zur Veröffentlichung im Google Play / App Store",
                  "Technischer Support nach dem Launch",
                ],
              },
              {
                title: "MVP",
                desc: "Minimaler, zielgerichteter Start für den Markteintritt",
                price: "ab 2000 €",
                features: [
                  "Kernfunktionen der App",
                  "Einfaches, funktionales Design",
                  "Basis-Login und Benutzerpanel",
                  "Zukunftssicher & erweiterbar",
                  "Web- oder Mobile-Version",
                  "Kurze Entwicklungszeit & geringeres Budget",
                ],
              },
            ].map((plan, i) => (
              <div className={styles.pricingCard} key={i}>
                <div className={styles.headerCard}>
                  <h3 className={styles.pricingGridTitle}>{plan.title}</h3>
                  <p className={styles.desc}>{plan.desc}</p>
                </div>
                <div className={styles.price}>
                  {plan.price.startsWith("ab") ? (
                    <>
                      <span className={styles.from}>ab</span>{" "}
                      {plan.price.replace("ab", "").trim()}
                    </>
                  ) : (
                    plan.price
                  )}
                </div>
                <ul className={styles.features}>
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <span className={styles.check}>✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.contactCta}>
            <p>
              Die angegebenen Preise und Pakete dienen nur zur Orientierung. Jedes Projekt wird individuell kalkuliert – basierend auf dem Umfang, den Anforderungen und dem Budget.
              Wenn du eine andere Idee hast, ein kleineres Budget oder etwas Einzigartiges suchst – schreib mir und wir finden gemeinsam die beste Lösung.
            </p>
            <Link href="/kontakt" className={styles.contactBtn}>Kontakt aufnehmen</Link>
          </div>

        </section>
      </main>
    );
  }