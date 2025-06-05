'use client';

import "./aplikacje.css";
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
  FaBolt,
  FaShieldAlt,
  FaPuzzlePiece,
  FaBell,
  FaCloud,
  FaSyncAlt,
  FaLaptopCode,
  FaCaretRight,
  FaMinus,
  FaDatabase,
  FaAdjust
} from "react-icons/fa";
import Link from 'next/link';
import Head from 'next/head';
import Faq from '../faq/Faq-aplikacje'

export default function Aplikacje() {
  <Head>
    <title>Aplikacje dla firm – webowe i mobilne | Grzegorz Słowiaczek</title>
    <meta name="description" content="Projektuję aplikacje dla firm – webowe i mobilne. Szybkie, bezpieczne i skalowalne rozwiązania dopasowane do potrzeb Twojego biznesu." />
    <meta name="robots" content="index,follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="UTF-8" />

    <meta property="og:title" content="Aplikacje mobilne i webowe dla firm | Grzegorz Słowiaczek" />
    <meta property="og:description" content="Tworzę aplikacje na Androida, iOS i przeglądarki – dopasowane do użytkowników i procesów Twojej firmy." />
    <meta property="og:image" content="https://slowiaczek.pl/images/logo-fb.webp" />
    <meta property="og:url" content="https://slowiaczek.pl/aplikacje" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Aplikacje mobilne i webowe dla firm | Grzegorz Słowiaczek" />
    <meta name="twitter:description" content="Intuicyjne i skalowalne aplikacje mobilne i webowe – stwórz rozwiązanie dopasowane do Twoich potrzeb biznesowych." />
    <meta name="twitter:image" content="https://slowiaczek.pl/images/logo-fb.webp" />
  </Head>
    return (
      <main>

        <section className="baner">
          <h1>Nowoczesne aplikacje dla firm – mobilne i webowe</h1>
          <p>Projektuję aplikacje dla firm – mobilne i webowe – które są szybkie, intuicyjne i dopasowane do realnych potrzeb użytkowników.</p>

            <div className="orbit-wrapper">
            
              <div className="orbit orbit1"></div>
              <div className="orbit orbit2"></div>
              <div className="orbit orbit3"></div>

            
              <div className="center-phone">
                <img className="phone-img" src="/images/interfejs-aplikacji-mobilnej-na-telefonach.webp" alt="Interfejs aplikacji dla firm – widok mobilny i webowy na telefonach" width="652" height="829" loading="lazy" />
              </div>

              <div className="orbit-animator">
                <div className="orbiting-object">
                  <img src="/images/google-play.webp" alt="Google Play – publikacja aplikacji mobilnych dla firm" width="512" height="101" loading="lazy"/>
                </div>
              </div>

              <div className="orbit-animator2">
                <div className="orbiting-object2">
                  <img src="/images/app-store.webp" alt="App Store – dystrybucja aplikacji na iPhone" width="759" height="180" loading="lazy"/>
                </div>
              </div>

              <div className="orbit-animator3">
                <div className="orbiting-object3">
                  <img src="/images/firebase.webp" alt="Firebase – backend dla aplikacji webowych i mobilnych" width="466" height="125" loading="lazy"/>
                </div>
              </div>

              
              <div className="orbit-animator4">
                <div className="orbiting-object4">
                  <img src="/images/stripe.webp" alt="Integracja płatności w aplikacjach dla firm – Stripe" width="770" height="332" loading="lazy"/>
                </div>
              </div>
            </div>
        </section>

      <section className="zalety">
      <div className="zalety-box animacja-z-dolu">
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
                Najważniejsze cechy aplikacji dla firm – elementy, które sprawiają, że korzystanie z aplikacji staje się szybkie, intuicyjne i bezproblemowe – zarówno mobilnie, jak i w przeglądarce.
              </p>
            </div>
          </div>
      
        <div className="zalety-grid">
          <div className="kafelek">
            <FaBolt className="ikona" />
            <p>Błyskawiczne działanie</p>
          </div>

          <div className="kafelek">
            <FaLock className="ikona" />
            <p>Bezpieczne logowanie i dane</p>
          </div>

          <div className="kafelek">
            <FaMobileAlt className="ikona" />
            <p>Dostosowana do smartfonów</p>
          </div>

          <div className="kafelek">
            <FaCogs className="ikona" />
            <p>Łatwa rozbudowa i skalowalność</p>
          </div>

          <div className="kafelek">
            <FaBell className="ikona" />
            <p>Powiadomienia push i e-mail</p>
          </div>

          <div className="kafelek">
            <FaCloud className="ikona" />
            <p>Dostępność nawet offline (PWA)</p>
          </div>

          <div className="kafelek">
            <FaSyncAlt className="ikona" />
            <p>Integracja z zewnętrznymi usługami</p>
          </div>

          <div className="kafelek">
            <FaShieldAlt className="ikona" />
            <p>Stabilność i niezawodność</p>
          </div>

          <div className="kafelek">
            <FaGlobe className="ikona" />
            <p>Dostępna z każdego miejsca</p>
          </div>

          <div className="kafelek">
            <FaPuzzlePiece className="ikona" />
            <p>Intuicyjny interfejs użytkownika</p>
          </div>

          <div className="kafelek">
            <FaDatabase className="ikona" />
            <p>Automatyczne kopie zapasowe</p>
          </div>

          <div className="kafelek">
            <FaAdjust className="ikona" />
            <p>Tryb ciemny i personalizacja wyglądu</p>
          </div>
        </div>
      </div>
      </section>

      <section className="tekst-grafika">
        <div className="tekst-grafika-grid animacja-z-dolu">
          <div className="tekst-widget">
            <div className="minus">
              <FaMinus className="ikona" />
            </div>
            <h2>Aplikacje dla firm dopasowane do Twojego biznesu</h2>
          </div>
          <p>Tworzę aplikacje dla firm – mobilne i webowe – dopasowane do budżetu i celów biznesowych. Niezależnie od tego, czy potrzebujesz pełnej 
            aplikacji mobilnej, panelu webowego czy lekkiego MVP, znajdziemy odpowiednią formę.</p>
          <div className="tekst">
            <div className="tekst-widget animacja-z-dolu">
              <FaCaretRight className="ikona" />
                <p>
                  <b>Aplikacje mobilne</b> - tworzę aplikacje na iOS i Androida, które są szybkie, lekkie i gotowe do publikacji w sklepach. Projektuję zarówno aplikacje 
                  konsumenckie, jak i narzędzia wewnętrzne dla firm — z naciskiem na wygodę użytkownika i sprawne działanie.
                </p>
              </div>
              <div className="tekst-widget animacja-z-dolu">
                <FaCaretRight className="ikona" />
                <p>
                  <b>Aplikacje webowe</b> - aplikacje działające w przeglądarce to często tańsza i szybsza alternatywa dla wersji mobilnej. Świetnie sprawdzają się 
                  jako systemy dla firm: panele klienta, dashboardy, narzędzia do rezerwacji lub automatyzacji procesów.
                </p>
              </div>
              <div className="tekst-widget animacja-z-dolu">
                <FaCaretRight className="ikona" />
                <p>
                  <b>MVP i szybki start</b> - jeśli dopiero testujesz pomysł na aplikację dla firmy, nie musisz inwestować fortuny. Zbuduję dla Ciebie lekkie MVP — czyli minimum funkcji 
                  potrzebnych, by zaprezentować aplikację inwestorowi, pierwszym użytkownikom lub sprawdzić, czy rynek jest gotowy.
                </p>
              </div>
          </div>
          <div className="grafika animacja-z-dolu">
            <img src="/images/interfejs-aplikacji-mobilnej-na-telefonach.webp" alt="Przykładowy interfejs aplikacji dla firm – webowa i mobilna wersja" width="652" height="829" loading="lazy" />
          </div>
        </div>
      </section>

   <section className="segment-technologie">
      <div className="box animacja-z-dolu">
            <div className="tekst-widget">
            <div className="minus">
              <FaMinus className="ikona" />
            </div>
            <h2>Twoja aplikacja połączona ze światem</h2>
          </div>
        <p>
          Aplikacje dla firm rzadko działają w izolacji. Integruję je z zewnętrznymi systemami i usługami – np. płatnościami, logowaniem czy analityką – dzięki czemu Twoja aplikacja webowa lub mobilna działa szybciej, automatycznie i bez zbędnego klikania.
        </p>
        <div className="content-technologie">
          <div className="kolumna prawa">
            <div className="kafelek animacja-z-dolu">
              <img src="/images/google-play-logo.webp" alt="Integracja z Google Play – publikacja aplikacji Android" width="603" height="179" loading="lazy"/>
            </div>
             <div className="kafelek animacja-z-dolu">
              <img src="/images/app-store-logo.webp" alt="Integracja z App Store – publikacja aplikacji iOS" width="603" height="179" loading="lazy"/>
            </div>
             <div className="kafelek animacja-z-dolu">
              <img src="/images/stripe-logo.webp" alt="Integracja z Stripe – płatności w aplikacjach" width="603" height="179" loading="lazy" />
            </div>
             <div className="kafelek animacja-z-dolu">
              <img src="/images/firebase-logo.webp" alt="Integracja z Firebase – backend aplikacji dla firm" width="603" height="179" loading="lazy"/>
            </div>
             <div className="kafelek animacja-z-dolu">
              <img src="/images/paypal-logo.webp" alt="Integracja z PayPal – płatności internetowe w aplikacjach" width="603" height="179" loading="lazy"/>
            </div>
            <div className="kafelek animacja-z-dolu">
              <img src="/images/vercel-logo.webp" alt="Vercel – hosting aplikacji webowych opartych na React/Next.js" width="603" height="179" loading="lazy"/>
            </div>
             <div className="kafelek animacja-z-dolu">
              <img src="/images/auth0-logo.webp" alt="Auth0 – logowanie i autoryzacja użytkowników w aplikacjach dla firm" width="603" height="179" loading="lazy"/>
            </div>
             <div className="kafelek animacja-z-dolu">
              <img src="/images/onesignal-logo.webp" alt="OneSignal – powiadomienia push w aplikacjach mobilnych i webowych" width="603" height="179" loading="lazy"/>
            </div>
             <div className="kafelek animacja-z-dolu">
              <img src="/images/google-analytics-logo.webp" alt="Integracja z Google Analytics – analityka aplikacji webowej" width="603" height="179" loading="lazy"/>
            </div>
            <div className="kafelek animacja-z-dolu">
              <img src="/images/twilio-logo.webp" alt="Twilio – wiadomości SMS i komunikacja w aplikacjach biznesowych" width="603" height="179" loading="lazy"/>
            </div>
            <div className="kafelek animacja-z-dolu">
              <img src="/images/blik-logo.webp" alt="BLIK – szybkie płatności w aplikacjach mobilnych" width="603" height="179" loading="lazy"/>
            </div>
             <div className="kafelek animacja-z-dolu">
              <img src="/images/netlify-logo.webp" alt="Netlify – hosting dla aplikacji statycznych i JAMstack" width="603" height="179" loading="lazy"/>
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