'use client';

import "./strona-www.css";
import {
  FaDesktop,
  FaShoppingCart,
  FaCogs,
  FaBullseye,
  FaSync,
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
import Head from 'next/head';

export default function StronaWWW() {
  <Head>
    <title>Strony internetowe dla firm – nowoczesne i tanie | Grzegorz Słowiaczek</title>
    <meta name="description" content="Projektuję strony internetowe dla firm – wizytówki, sklepy i serwisy. Tanie, szybkie i dopasowane do Twoich celów biznesowych."/>
    <meta name="robots" content="index,follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="UTF-8" />

    <meta property="og:title" content="Strony internetowe dla firm | Nowoczesne i tanie" />
    <meta property="og:description" content="Wizytówki, sklepy, serwisy – zaprojektowane z myślą o Twoim biznesie. Sprawdź realizacje." />
    <meta property="og:image" content="https://slowiaczek.pl/images/logo-fb.webp" />
    <meta property="og:url" content="https://slowiaczek.pl/stronywww" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Strony internetowe dla firm | Grzegorz Słowiaczek" />
    <meta name="twitter:description" content="Responsywne, szybkie i dopasowane strony internetowe dla firm z różnych branż." />
    <meta name="twitter:image" content="https://slowiaczek/images/logo-fb.webp" />
  </Head>
  return (
      <main>
        <section className="baner">
          <h1>Nowoczesne strony internetowe dla firm</h1>
          <p>
            Tworzę strony internetowe dla firm – od prostych wizytówek po rozbudowane serwisy z dedykowanym panelem. Wszystko dopasowane do Twoich celów i branży.
          </p>
          <img src="/images/nowoczesna-strona-www-na-laptopie-i-telefonie.webp" alt="Strona internetowa dla firmy – nowoczesna, responsywna realizacja na laptopie i telefonie" width="2048" height="1602" loading="lazy"/>
        </section>

      <section className="zalety animacja-z-dolu">
        <h2>Zalety, które dostajesz w standardzie</h2>
        <p>Każda strona internetowa dla firmy, którą tworzę, to połączenie nowoczesnych technologii, świetnej wydajności i realnych korzyści – bez ukrytych kosztów.</p>
        <div className="zalety-grid">
          <div className="kafelek">
            <FaServer className="ikona" />
            <span>Darmowy hosting na 1 rok</span>
          </div>
          <div className="kafelek">
            <FaSearch className="ikona" />
            <span>Początkowe SEO</span>
          </div>
          <div className="kafelek">
            <FaRocket className="ikona" />
            <span>Optymalizacja szybkości strony</span>
          </div>
          <div className="kafelek">
            <FaMobileAlt className="ikona" />
            <span>Responsywny web design (RWD)</span>
          </div>
          <div className="kafelek">
            <FaLock className="ikona" />
            <span>Certyfikat SSL (HTTPS)</span>
          </div>
          <div className="kafelek">
            <FaGlobe className="ikona" />
            <span>Rejestracja domeny</span>
          </div>
          <div className="kafelek">
            <FaEnvelope className="ikona" />
            <span>Firmowa skrzynka e-mail</span>
          </div>
          <div className="kafelek">
            <FaEdit className="ikona" />
            <span>Łatwa edycja treści (CMS)</span>
          </div>
          <div className="kafelek">
            <FaChartLine className="ikona" />
            <span>Integracja z Google Analytics</span>
          </div>
          <div className="kafelek">
            <FaWpforms className="ikona" />
            <span>Formularz kontaktowy</span>
          </div>
          <div className="kafelek">
            <FaBalanceScale className="ikona" />
            <span>Zgodność z RODO</span>
          </div>
          <div className="kafelek">
            <FaBullseye className="ikona" />
            <span>Gotowość do pozycjonowania</span>
          </div>
        </div>
      </section>

      <section className="realizacje animacja-z-dolu">
        <h2>Wybrane realizacje</h2>
        <p>Zobacz, jakie strony już zaprojektowałem i wdrożyłem dla moich klientów.</p>

        <div className="galeria">
          <div className="karta animacja-z-dolu">
            <img src="/images/realizacja-strony-www-firma-dachowa.webp" alt="Tania strona internetowa dla firmy dekarskiej – projekt witryny z ofertą usług dachowych" width="1408" height="912" loading="lazy"/>
            <a href="https://exdach.com/" className="przycisk">Zobacz całą stronę</a>
          </div>
          <div className="karta animacja-z-dolu">
          <img src="/images/realizacja-strony-www-biuro-nieruchomosci.webp" alt="Strona internetowa dla biura nieruchomości – wyszukiwarka ofert dla klientów" width="1408" height="912" loading="lazy"/>
            <a href="https://nieruchomosciszypula.pl/" className="przycisk">Zobacz całą stronę</a>
          </div>
          <div className="karta animacja-z-dolu">
          <img src="/images/realizacja-strony-www-pasieka-sklep.webp" alt="Strona internetowa dla pasieki – sprzedaż produktów naturalnych online" width="1408" height="912" loading="lazy"/>
            <a href="https://odjazdowapasieka.pl/" className="przycisk">Zobacz całą stronę</a>
          </div>
          <div className="karta animacja-z-dolu">
          <img src="/images/realizacja-strony-www-deweloper-luksusowe-apartamenty.webp" alt="Strona internetowa dla biura nieruchomości – nowoczesny projekt z systemem prezentacji ofert" width="1408" height="912" loading="lazy"/>
            <a href="https://penthouse-nieruchomosci.pl/" className="przycisk">Zobacz całą stronę</a>
          </div>
        </div>
        <h3 className="animacja-z-dolu">
          Jeśli szukasz inspiracji lub zastanawiasz się, jak mogą wyglądać strony internetowe dla firm, które tworzę – zapraszam do zapoznania się z pełnym{" "}
          <Link href="/projekty" passHref>
            <span style={{ color: "#cf0031", fontWeight: "bold" }}>portfolio</span>
          </Link>. Znajdziesz tam różnorodne projekty: od prostych wizytówek 
          po rozbudowane serwisy z dedykowanymi funkcjami.
        </h3>
    </section>

    <section className="proces">
      <div className="proces-grid">
        <div className="lewa animacja-z-dolu">
          <h2>Jak wygląda współpraca?</h2>
          <p>
            Proces tworzenia strony internetowej dla firmy jest prosty i przejrzysty. Przechodzimy 
            razem przez cztery kroki – od pierwszego kontaktu aż po wdrożenie gotowego projektu, który spełni potrzeby Twojej branży i budżetu.
          </p>
          <a href="#kontakt" className="btn">Skontaktuj się</a>
        </div>

        <div className="prawa">
          <div className="krok animacja-z-dolu">
            <span className="numer">1</span>
            <div className="tekst">
              <strong>Kontakt i analiza potrzeb</strong>
              <p>Wspólnie omawiamy Twoje oczekiwania i ustalamy cel projektu.</p>
            </div>
          </div>

          <div className="krok animacja-z-dolu">
            <span className="numer">2</span>
            <div className="tekst">
              <strong>Projekt graficzny</strong>
              <p>Tworzę indywidualny design dopasowany do Twojej marki.</p>
            </div>
          </div>

          <div className="krok animacja-z-dolu">
            <span className="numer">3</span>
            <div className="tekst">
              <strong>Wdrożenie i programowanie</strong>
              <p>Wszystko koduję i testuję — strona działa szybko i poprawnie.</p>
            </div>
          </div>

          <div className="krok animacja-z-dolu">
            <span className="numer">4</span>
            <div className="tekst">
              <strong>Publikacja i wsparcie</strong>
              <p>Gotowa strona trafia online — możesz liczyć na moje wsparcie.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="segment-technologie">
      <div className="box animacja-z-dolu">
        <div className="top-icon">
          <FaDesktop />
        </div>
        <h2>Używane technologie</h2>
        <p>
          Dobieram technologie do projektu tak, by tworzyć nowoczesne i szybkie strony internetowe dla firm – łączące świetne działanie z wygodą obsługi i możliwością dalszego rozwoju.
        </p>

        <div className="content-technologie">
          <div className="kolumna lewa animacja-z-dolu">
            <ul>
              <li><span className="check">✔</span> Profesjonalna prezentacja Twojej oferty</li>
              <li><span className="check">✔</span> Intuicyjna nawigacja zwiększająca konwersję</li>
              <li><span className="check">✔</span> Dostosowanie do urządzeń mobilnych (RWD)</li>
              <li><span className="check">✔</span> Szybkie ładowanie strony (mniejsze współczynniki odrzuceń)</li>
              <li><span className="check">✔</span> Łatwa rozbudowa strony w przyszłości</li>
              <li><span className="check">✔</span> Nowoczesne technologie, które będą działać latami</li>
            </ul>
          </div>
          <div className="kolumna prawa">
            <div className="animacja-z-dolu">
              <img src="/images/html.webp" alt="Logo HTML – język strukturujący strony" width="512" height="512" loading="lazy" />
              <p>html</p>
            </div>
            <div className="animacja-z-dolu">
              <img src="/images/lavarel.webp" alt="Logo Laravel – framework PHP do budowy aplikacji webowych" width="512" height="512" loading="lazy"/>
              <p>Lavarel</p>
            </div>
            <div className="animacja-z-dolu">
              <img src="/images/javascript.webp" alt="Logo JavaScript – język programowania dla interaktywnych stron internetowych" width="512" height="512" loading="lazy" />
              <p>Javascript</p>
            </div>
            <div className="animacja-z-dolu">
              <img src="/images/node.webp" alt="Logo Node.js – środowisko uruchomieniowe JavaScript po stronie serwera" width="512" height="512" loading="lazy"/>
              <p>Node.js</p>
            </div>
            <div className="animacja-z-dolu">
              <img src="/images/react.webp" alt="Logo React – biblioteka JavaScript" width="512" height="512" loading="lazy"/>
              <p>React</p>
            </div>
            <div className="animacja-z-dolu">
              <img src="/images/angular.webp" alt="Logo Angular – framework do tworzenia aplikacji webowych w TypeScript" width="512" height="512" loading="lazy"/>
              <p>Angular</p>
            </div>
            <div className="animacja-z-dolu">
              <img src="/images/vue.webp" alt="Logo Vue.js – progresywny framework JavaScript do budowy interfejsów użytkownika" width="512" height="512" loading="lazy"/>
              <p>Vue</p>
            </div>
            <div className="animacja-z-dolu">
              <img src="/images/next.webp" alt="Logo Next.js – framework Reacta z funkcjami SEO i renderowania po stronie serwera" width="512" height="512" loading="lazy"/>
              <p>Next.js</p>
            </div>
            <div className="animacja-z-dolu">
              <img src="/images/mysql.webp" alt="Logo MySQL – system zarządzania relacyjną bazą danych" width="512" height="512" loading="lazy"/>
              <p>MySQL</p>
            </div>
            <div className="animacja-z-dolu">
              <img src="/images/php.webp" alt="Logo PHP – język skryptowy do tworzenia dynamicznych stron internetowych" width="512" height="512" loading="lazy"/>
              <p>PHP</p>
            </div>
            <div className="animacja-z-dolu">
              <img src="/images/wordpress.webp" alt="Logo WordPress – system zarządzania treścią (CMS) oparty na PHP" width="512" height="512" loading="lazy"/>
              <p>Wordpress</p>
            </div>
              <div className="animacja-z-dolu">
              <img src="/images/typescript.webp" alt="Logo TypeScript – nadzbiór JavaScript z typowaniem statycznym" width="512" height="512" loading="lazy"/>
              <p>TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="zacheta-kontakt animacja-z-dolu">
      <h2>Masz pytania? Porozmawiajmy!</h2>
      <p>Wpisz swój numer telefonu – oddzwonię i odpowiem na wszystkie pytania.</p>

      <form
        className="formularz"
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.target);
          const phone = formData.get("phone");

          const res = await fetch("/api/wycena", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone }),
          });

          const result = await res.json();
          if (result.ok) {
            alert("Wycena została wysłana!");
            e.target.reset();
          } else {
            alert("Błąd przy wysyłce. Spróbuj ponownie.");
          }
        }}
      >
        <input name="phone" type="tel" placeholder="Twój numer telefonu" required />
        <button type="submit">Darmowa wycena</button>
      </form>


      <div className="albo">
        <span>lub</span>
        <a href="/kontakt" className="btn-link">Przejdź do kontaktu</a>
      </div>
    </section>

    <Faq />

    </main>
  );
}
