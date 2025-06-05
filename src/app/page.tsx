'use client';

import "./home.css";
import {
  FaArrowRight,
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
  FaMinus
} from "react-icons/fa";
import Faq from './faq/Faq'
import Head from 'next/head';

export default function Home() {
  <Head>
    <title>Strony internetowe i aplikacje dla firm | Grzegorz Słowiaczek</title>
    <meta name="description" content="Tworzę nowoczesne strony internetowe i aplikacje dla firm – mobilne, webowe, szybkie i dostosowane do Twoich celów biznesowych."/>
    <meta name="robots" content="index,follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="UTF-8" />

    <meta property="og:title" content="Strony internetowe i aplikacje dla firm | Grzegorz Słowiaczek" />
    <meta property="og:description" content="Tworzę nowoczesne strony i aplikacje internetowe – szybkie, mobilne, dopasowane do Twoich celów biznesowych." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://slowiaczek.pl/" />
    <meta property="og:image" content="https://slowiaczek.pl/images/og-image-home.webp" />
    <meta property="og:site_name" content="Grzegorz Słowiaczek – strony i aplikacje dla firm" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Strony i aplikacje dla firm | Grzegorz Słowiaczek" />
    <meta name="twitter:description" content="Nowoczesne rozwiązania webowe i mobilne dla Twojego biznesu. Od prostych stron po rozbudowane systemy." />
    <meta name="twitter:image" content="https://slowiaczek.pl/images/og-image-home.webp" />
    <meta name="twitter:creator" content="@twojTwitter" />
  </Head>
  return (
    <main>
      <section className="baner">
        <div className="baner-kolumny">
          <div className="baner-lewo">
            <h1>Aplikacje mobilne i strony internetowe</h1>
            <p>Tworzę szybkie, skalowalne strony i aplikacje dla firm – od prostych wizytówek i sklepów internetowych po rozbudowane systemy webowe i mobilne.</p>
            <a href="#segment-bialy" className="przycisk-strzalka">
              <span>Zobacz więcej</span>
              <div className="strzalka-kolo">
                <FaArrowRight />
              </div>
            </a>
          </div>
          <div className="baner-prawo">
            <img src="/images/baner-strona-glowna-aplikacja-responsive.webp" alt="Nowoczesna aplikacja mobilna i strona internetowa dla firm – interfejs użytkownika na laptopie i smartfonie" width="1079" height="1256" loading="lazy" />
            <div className="okienko-container-1">
              <img className="okienko-1" src="/images/grafika-karta-elementu-interfejsu.webp" alt="Przykład karty interfejsu aplikacji dla firm – grafika z ikoną i opisem funkcji" width="408" height="239" loading="lazy"/>
            </div>
            <div className="okienko-container-2">
              <img className="okienko-2" src="/images/grafika-statystyki-uzytkownika-aplikacji.webp" alt="Panel statystyk użytkownika w aplikacji dla firm – analiza danych i realizacja celów" width="404" height="245" loading="lazy"/>
            </div>
            <div className="okienko-container-3">
              <img className="okienko-3" src="/images/grafika-integracja-zewnetrzna-api-chmura.webp" alt="Integracja aplikacji dla firm z zewnętrznymi systemami i chmurą – synchronizacja danych" width="404" height="398" loading="lazy"/>
            </div>
            <div className="okienko-container-4">
              <img className="okienko-4" src="/images/grafika-ocena-uzytkownikow-aplikacja.webp" alt="System ocen w aplikacji firmowej – pięć gwiazdek i wysoka ocena użytkowników" width="404" height="135" loading="lazy"/>
            </div>
          </div>
        </div>
      </section>

      <section className="segment-bialy animacja-z-dolu" id="segment-bialy">
        <div className="segment-bialy-box">
          <div className="wstep">
            <div className="lewa-kolumna-wstep">
              <a href="/" className="logo-wrapper" aria-label="Strona główna – Grzegorz Słowiaczek">
                <img src="/images/logo-grzegorz-slowiaczek-ciemne.webp" alt="Logo Grzegorz Słowiaczek – projektowanie stron i aplikacji" width="768" height="427" loading="lazy"/>
                <span className="logo-text">
                  Grzegorz<br/>
                  Słowiaczek
                </span>
              </a>
            </div>
            <div className="prawa-kolumna-wstep">
              <p>
                Tworzę strony internetowe i aplikacje dla firm, które nie tylko dobrze wyglądają — ale są szybkie, intuicyjne i dopasowane do Twoich celów biznesowych.
              </p>
            </div>
          </div>
          <div className="kafelki">
            <div className="kafelek">
              <FaRocket className="ikona" />
              <p>Szybkie ładowanie</p>
            </div>
            <div className="kafelek">
              <FaMobileAlt className="ikona" />
              <p>Dostosowanie do smartfonów</p>
            </div>
            <div className="kafelek">
              <FaUserShield className="ikona" />
              <p>Bezpieczeństwo danych</p>
            </div>
            <div className="kafelek">
              <FaCogs className="ikona" />
              <p>Łatwa rozbudowa</p>
            </div>
            <div className="kafelek">
              <FaChartLine className="ikona" />
              <p>Skuteczność i wyniki</p>
            </div>
            <div className="kafelek">
              <FaChartLine className="ikona" />
              <p>Skuteczność i wyniki</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sekcja-uslugi">
        <div className="uslugi-grid animacja-z-dolu">
          <a href="/stronywww" className="kafelek-uslugi">
            <FaLaptopCode className="ikona" />
            <h3>Strony internetowe</h3>
            <p>Nowoczesne, responsywne strony idealnie dopasowane do Twojej branży.</p>
          </a>
          <a href="/stronywww" className="kafelek-uslugi">
            <FaShoppingCart className="ikona" />
            <h3>Sklepy internetowe</h3>
            <p>Funkcjonalne sklepy z prostym panelem zarządzania i szybkim działaniem.</p>
          </a>
          <a href="/aplikacje" className="kafelek-uslugi">
            <FaMobileAlt className="ikona" />
            <h3>Aplikacje mobilne</h3>
            <p>Tworzę nowoczesne aplikacje mobilne na Android i iOS.</p>
          </a>
          <a href="/kontakt" className="kafelek-uslugi">
            <FaPaintBrush className="ikona" />
            <h3>Grafika</h3>
            <p>Logo, identyfikacja wizualna, banery i materiały reklamowe.</p>
          </a>
          <a href="/kontakt" className="kafelek-uslugi">
            <FaSearch className="ikona" />
            <h3>Pozycjonowanie</h3>
            <p>Skuteczne SEO — Twoja strona widoczna w Google.</p>
          </a>
          <a href="/kontakt" className="kafelek-uslugi">
            <FaTools className="ikona" />
            <h3>Wsparcie techniczne</h3>
            <p>Stała opieka nad stroną, kopie zapasowe i aktualizacje.</p>
          </a>
        </div>
      </section>

    <section className="funkcje-segment animacja-z-dolu">
      <h2>Funkcje, które robią różnicę</h2>
      <p className="lead">
        Twoja aplikacja lub strona to coś więcej niż ładny wygląd. Dbam o techniczne detale, które realnie wpływają na wygodę, bezpieczeństwo i rozwój Twojego biznesu.
      </p>
      <div className="funkcje-grid">
        <div className="funkcje-lewa">
          <div className="funkcja odwrotnie">
            <FaMobileAlt className="ikona" />
            <p><b>Responsywny interfejs</b><br />Dostosowany do każdego urządzenia</p>
          </div>
          <div className="funkcja odwrotnie">
            <FaRocket className="ikona" />
            <p><b>Błyskawiczne ładowanie</b><br />Zoptymalizowane pod wydajność</p>
          </div>
          <div className="funkcja odwrotnie">
            <FaLock className="ikona" />
            <p><b>Bezpieczne logowanie</b><br />Aktualne standardy zabezpieczeń</p>
          </div>
        </div>

        <div className="funkcje-obraz">
          <img src="/images/grafika-aplikacja-mobilna-zarzadzanie-zadaniami.webp" alt="Widok aplikacji mobilnej dla firm – zarządzanie zadaniami, kalendarz i funkcje użytkownika na ekranie smartfona" width="525" height="879" loading="lazy"/>
        </div>

        <div className="funkcje-prawa">
          <div className="funkcja">
            <FaSyncAlt className="ikona" />
            <p><b>Integracje z systemami</b><br />Automatyczne połączenia z API</p>
          </div>
          <div className="funkcja">
            <FaUsers className="ikona" />
            <p><b>Zarządzanie użytkownikami</b><br />Role, konta, uprawnienia</p>
          </div>
          <div className="funkcja">
            <FaChartBar className="ikona" />
            <p><b>Statystyki i analizy</b><br />Wgląd w dane i skuteczność</p>
          </div>
        </div>
      </div>
    </section>
    
    <section className="sekcja-mapa animacja-z-dolu">
      <div className="mapa-grid">
        <div className="tekst-lewo">
          <div className="tekst-widget">
            <div className="minus">
              <FaMinus className="ikona-minus" />
            </div>
              <h2>Strony internetowe i aplikacje dla firm na terenie całej Polski</h2>
            </div>
          <p>
            Realizuję projekty z zakresu <strong>tworzenia stron internetowych</strong> i <strong>aplikacji mobilnych</strong> dla firm z całej Polski – bez względu na lokalizację. Dzięki sprawdzonemu procesowi pracy zdalnej i dobrej komunikacji zapewniam <strong>pełną obsługę online</strong> – od wyceny po wdrożenie.
          </p>
        </div>
        <div className="grafika-prawo">
          <img src="/images/grafika-polska-zasieg-uslug-strony-aplikacje.webp" alt="Obsługa firm w całej Polsce – mapa kraju z zaznaczonymi lokalizacjami klientów" width="874" height="900" loading="lazy"/>
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

