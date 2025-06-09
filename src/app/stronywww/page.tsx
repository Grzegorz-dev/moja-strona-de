
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
  title: "Strony internetowe dla firm – nowoczesne i tanie | Grzegorz Słowiaczek",
  description:
    "Projektuję strony internetowe dla firm – wizytówki, sklepy i serwisy. Tanie, szybkie i dopasowane do Twoich celów biznesowych.",
  robots: "index,follow",
  openGraph: {
    title: "Strony internetowe dla firm | Nowoczesne i tanie",
    description:
      "Wizytówki, sklepy, serwisy – zaprojektowane z myślą o Twoim biznesie. Sprawdź realizacje.",
    url: "https://slowiaczek.pl/stronywww",
    type: "website",
    images: [
      {
        url: "https://slowiaczek.pl/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Strony internetowe dla firm – Grzegorz Słowiaczek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strony internetowe dla firm | Grzegorz Słowiaczek",
    description:
      "Responsywne, szybkie i dopasowane strony internetowe dla firm z różnych branż.",
    images: ["https://slowiaczek.pl/images/logo-fb.webp"],
  },
};

export default function StronaWWW() {
  return (
    <main className={styles.container}>
      <section className={styles.websitesHeroSection}>
        <h1>Nowoczesne strony internetowe dla firm</h1>
        <p>
          Tworzę strony internetowe dla firm – od prostych wizytówek po rozbudowane serwisy z dedykowanym panelem. Wszystko dopasowane do Twoich celów i branży.
        </p>
        <Image
          className={styles.heroImage}
          src="/images/nowoczesna-strona-www-na-laptopie-i-telefonie.webp"
          alt="Strona internetowa dla firmy – nowoczesna, responsywna realizacja na laptopie i telefonie"
          width="2048"
          height="1602"
          loading="lazy"
        />
      </section>

      <section className={`${styles.includedFeaturesSection} ${styles.fadeInUp}`}>
        <h2>Zalety, które dostajesz w standardzie</h2>
        <p>
          Każda strona internetowa dla firmy, którą tworzę, to połączenie nowoczesnych technologii, świetnej wydajności i realnych korzyści – bez ukrytych kosztów.
        </p>

        <div className={styles.includedFeaturesGrid}>
          <div className={styles.includedFeatureCard}>
            <FaServer className={styles.includedFeatureIcon} />
            <span>Darmowy hosting na 1 rok</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaSearch className={styles.includedFeatureIcon} />
            <span>Początkowe SEO</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaRocket className={styles.includedFeatureIcon} />
            <span>Optymalizacja szybkości strony</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaMobileAlt className={styles.includedFeatureIcon} />
            <span>Responsywny web design (RWD)</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaLock className={styles.includedFeatureIcon} />
            <span>Certyfikat SSL (HTTPS)</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaGlobe className={styles.includedFeatureIcon} />
            <span>Rejestracja domeny</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaEnvelope className={styles.includedFeatureIcon} />
            <span>Firmowa skrzynka e-mail</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaEdit className={styles.includedFeatureIcon} />
            <span>Łatwa edycja treści (CMS)</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaChartLine className={styles.includedFeatureIcon} />
            <span>Integracja z Google Analytics</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaWpforms className={styles.includedFeatureIcon} />
            <span>Formularz kontaktowy</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaBalanceScale className={styles.includedFeatureIcon} />
            <span>Zgodność z RODO</span>
          </div>
          <div className={styles.includedFeatureCard}>
            <FaBullseye className={styles.includedFeatureIcon} />
            <span>Gotowość do pozycjonowania</span>
          </div>
        </div>
      </section>


    <section className={`${styles.portfolioSection} fadeInUp`}>
      <h2>Wybrane realizacje</h2>
      <p>Zobacz, jakie strony już zaprojektowałem i wdrożyłem dla moich klientów.</p>

      <div className={styles.projectGallery}>
        <div className={`${styles.projectCard} fadeInUp`}>
          <Image
            src="/images/realizacja-strony-www-firma-dachowa.webp"
            alt="Tania strona internetowa dla firmy dekarskiej – projekt witryny z ofertą usług dachowych"
            loading="lazy"
          />
          <a href="https://exdach.com/" className={styles.viewButton}>
            Zobacz całą stronę
          </a>
        </div>
        <div className={`${styles.projectCard} fadeInUp`}>
          <Image
            src="/images/realizacja-strony-www-biuro-nieruchomosci.webp"
            alt="Strona internetowa dla biura nieruchomości – wyszukiwarka ofert dla klientów"
            loading="lazy"
          />
          <a href="https://nieruchomosciszypula.pl/" className={styles.viewButton}>
            Zobacz całą stronę
          </a>
        </div>
        <div className={`${styles.projectCard} fadeInUp`}>
          <Image
            src="/images/realizacja-strony-www-pasieka-sklep.webp"
            alt="Strona internetowa dla pasieki – sprzedaż produktów naturalnych online"
            loading="lazy"
          />
          <a href="https://odjazdowapasieka.pl/" className={styles.viewButton}>
            Zobacz całą stronę
          </a>
        </div>
        <div className={`${styles.projectCard} fadeInUp`}>
          <Image
            src="/images/realizacja-strony-www-deweloper-luksusowe-apartamenty.webp"
            alt="Strona internetowa dla biura nieruchomości – nowoczesny projekt z systemem prezentacji ofert"
            loading="lazy"
          />
          <a href="https://penthouse-nieruchomosci.pl/" className={styles.viewButton}>
            Zobacz całą stronę
          </a>
        </div>
      </div>

      <h3 className="animacja-z-dolu">
        Jeśli szukasz inspiracji lub zastanawiasz się, jak mogą wyglądać strony internetowe dla firm, które tworzę – zapraszam do zapoznania się z pełnym{' '}
        <Link href="/projekty" passHref>
          <span style={{ color: '#cf0031', fontWeight: 'bold' }}>portfolio</span>
        </Link>{' '}
        Znajdziesz tam różnorodne projekty: od prostych wizytówek po rozbudowane serwisy z dedykowanymi funkcjami.
      </h3>
    </section>


    <section className={styles.processSection}>
      <div className={styles.processGrid}>
        <div className={`${styles.left} fadeInUp`}>
          <h2>Jak wygląda współpraca?</h2>
          <p>
            Proces tworzenia strony internetowej dla firmy jest prosty i przejrzysty. Przechodzimy 
            razem przez cztery kroki – od pierwszego kontaktu aż po wdrożenie gotowego projektu, który spełni potrzeby Twojej branży i budżetu.
          </p>
          <Link href="/kontakt" className={styles.btn}>
            Skontaktuj się
          </Link>
        </div>

        <div className={styles.right}>
          <div className={`${styles.step} fadeInUp`}>
            <span className={styles.stepNumber}>1</span>
            <div className={styles.stepContent}>
              <strong>Kontakt i analiza potrzeb</strong>
              <p>Wspólnie omawiamy Twoje oczekiwania i ustalamy cel projektu.</p>
            </div>
          </div>

          <div className={`${styles.step} fadeInUp`}>
            <span className={styles.stepNumber}>2</span>
            <div className={styles.stepContent}>
              <strong>Projekt graficzny</strong>
              <p>Tworzę indywidualny design dopasowany do Twojej marki.</p>
            </div>
          </div>

          <div className={`${styles.step} fadeInUp`}>
            <span className={styles.stepNumber}>3</span>
            <div className={styles.stepContent}>
              <strong>Wdrożenie i programowanie</strong>
              <p>Wszystko koduję i testuję — strona działa szybko i poprawnie.</p>
            </div>
          </div>

          <div className={`${styles.step} fadeInUp`}>
            <span className={styles.stepNumber}>4</span>
            <div className={styles.stepContent}>
              <strong>Publikacja i wsparcie</strong>
              <p>Gotowa strona trafia online — możesz liczyć na moje wsparcie.</p>
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
        <h2>Używane technologie</h2>
        <p>
          Dobieram technologie do projektu tak, by tworzyć nowoczesne i szybkie strony internetowe dla firm – łączące świetne działanie z wygodą obsługi i możliwością dalszego rozwoju.
        </p>

        <div className={styles.techContent}>
          <div className={`${styles.leftColumn} ${styles.fadeIn}`}>
            <ul>
              <li><span className={styles.check}>✔</span> Profesjonalna prezentacja Twojej oferty</li>
              <li><span className={styles.check}>✔</span> Intuicyjna nawigacja zwiększająca konwersję</li>
              <li><span className={styles.check}>✔</span> Dostosowanie do urządzeń mobilnych (RWD)</li>
              <li><span className={styles.check}>✔</span> Szybkie ładowanie strony (mniejsze współczynniki odrzuceń)</li>
              <li><span className={styles.check}>✔</span> Łatwa rozbudowa strony w przyszłości</li>
              <li><span className={styles.check}>✔</span> Nowoczesne technologie, które będą działać latami</li>
            </ul>
          </div>

          <div className={styles.rightColumn}>
            {[
              { src: "html", label: "HTML", alt: "Logo HTML – język strukturujący strony" },
              { src: "lavarel", label: "Laravel", alt: "Logo Laravel – framework PHP do budowy aplikacji webowych" },
              { src: "javascript", label: "JavaScript", alt: "Logo JavaScript – język programowania dla interaktywnych stron internetowych" },
              { src: "node", label: "Node.js", alt: "Logo Node.js – środowisko uruchomieniowe JavaScript po stronie serwera" },
              { src: "react", label: "React", alt: "Logo React – biblioteka JavaScript" },
              { src: "angular", label: "Angular", alt: "Logo Angular – framework do tworzenia aplikacji webowych w TypeScript" },
              { src: "vue", label: "Vue", alt: "Logo Vue.js – progresywny framework JavaScript do budowy interfejsów użytkownika" },
              { src: "next", label: "Next.js", alt: "Logo Next.js – framework Reacta z funkcjami SEO i renderowania po stronie serwera" },
              { src: "mysql", label: "MySQL", alt: "Logo MySQL – system zarządzania relacyjną bazą danych" },
              { src: "php", label: "PHP", alt: "Logo PHP – język skryptowy do tworzenia dynamicznych stron internetowych" },
              { src: "wordpress", label: "WordPress", alt: "Logo WordPress – system zarządzania treścią (CMS) oparty na PHP" },
              { src: "typescript", label: "TypeScript", alt: "Logo TypeScript – nadzbiór JavaScript z typowaniem statycznym" }
            ].map(({ src, label, alt }) => (
              <div key={src} className={styles.iconBox}>
                <Image
                  src={`/images/${src}.webp`}
                  alt={alt}
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
        <h2>Masz pytania? Porozmawiajmy!</h2>
        <p>Wpisz swój numer telefonu – oddzwonię i odpowiem na wszystkie pytania.</p>

        <CtaForm />

        <div className={styles.ctaAltAction}>
          <label htmlFor="zgoda">
            Wyrażam zgodę na <a href="/polityka-prywatnosci" target="_blank">przetwarzanie danych osobowych</a>
          </label>
          <span>lub</span>
          <Link href="/kontakt" className={styles.ctaLinkButton}>
            Przejdź do kontaktu
          </Link>
        </div>
      </section>

    <Faq />

    </main>
  );
}
