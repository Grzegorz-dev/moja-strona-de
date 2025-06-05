'use client';

import "./klienci.css";
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
  FaHeadset,
  FaWrench,
} from "react-icons/fa";
import Link from 'next/link';
import { useState, useEffect } from "react";
import Head from 'next/head';

import dynamic from "next/dynamic";
const Swal = dynamic(() => import("sweetalert2").then((mod) => mod.default), {
  ssr: false,
});


export default function Klienci() {
  <Head>
      <title>Wsparcie techniczne i opieka nad stroną internetową – Grzegorz Słowiaczek</title>
      <meta name="description" content="Zgłoś problem techniczny, zleć aktualizację lub aktywuj miesięczną opiekę nad swoją stroną internetową. Szybka i profesjonalna pomoc techniczna dla Twojej firmy."/>
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      <meta property="og:title" content="Pomoc techniczna i opieka nad stroną – Grzegorz Słowiaczek" />
      <meta property="og:description" content="Stała opieka nad stroną internetową, szybka pomoc techniczna i aktualizacje. Dbam o Twoją witrynę po wdrożeniu." />
      <meta property="og:image" content="https://slowiaczek.pl/logo-fb.webp" />
      <meta property="og:url" content="https://slowiaczek.pl/klienci" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Wsparcie techniczne i aktualizacje strony – Grzegorz Słowiaczek" />
      <meta name="twitter:description" content="Zgłoś problem techniczny, zamów aktualizację lub uruchom miesięczną opiekę nad stroną internetową." />
      <meta name="twitter:image" content="https://slowiaczek.pl/images/logo-fb.webp" />
  </Head>
  const [typ, setTyp] = useState<"subskrypcja" | "jednorazowa">("subskrypcja");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get("success");
    const canceled = urlParams.get("canceled");

    if (success) {
      import("sweetalert2").then((Swal) => {
        Swal.default.fire({
          icon: 'success',
          title: 'Płatność zakończona sukcesem!',
          text: 'Dziękujemy za zakup subskrypcji.',
          confirmButtonText: 'OK',
        }).then(() => {
          window.history.replaceState(null, "", window.location.pathname);
        });
      });
    }

    if (canceled) {
      import("sweetalert2").then((Swal) => {
        Swal.default.fire({
          icon: 'info',
          title: 'Płatność anulowana',
          text: 'Możesz spróbować ponownie.',
          confirmButtonText: 'OK',
        }).then(() => {
          window.history.replaceState(null, "", window.location.pathname);
        });
      });
    }
  }, []);


  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  const handleSubscribe = async (priceId: string) => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

if (!isClient) return null;
  return (
    <main>
      <section className="baner">
        <div className="baner-tresc">
          <h1>Wsparcie dla Twojej strony</h1>
          <p>Zgłoś problem techniczny, zleć aktualizację lub aktywuj miesięczną opiekę nad stroną.</p>
        </div>
      </section>

      <section className="typy-pomocy">
        <div className="typy-pomocy-grid">
          <button
            onClick={() => setTyp("subskrypcja")}
            className={`przycisk-pomocy ${typ === "subskrypcja" ? "aktywny" : ""}`}
          >
            <FaHeadset className="ikona-btn" />
            <div className="tekst-przycisku">
              <span className="tytul">STAŁA POMOC</span>
              <span className="podtytul">Opieka nad stroną</span>
            </div>
          </button>
          <button
            onClick={() => setTyp("jednorazowa")}
            className={`przycisk-pomocy ${typ === "jednorazowa" ? "aktywny" : ""}`}
          >
            <FaWrench className="ikona-btn" />
              <div className="tekst-przycisku">
                <span className="tytul">JEDNORAZOWA POMOC</span>
                <span className="podtytul">Szybka interwencja techniczna</span>
            </div>
          </button>
        </div>

        {typ === "subskrypcja" ? (
          <div className="sekcja-pomoc kolumny-pomoc">
            <div className="pakiet">
              <div>
                <h3>Pomoc techniczna <span>Standard</span></h3>
                <p className="cena">49zł <span>/ miesięcznie</span></p>
                <ul>
                  <li><span className="check">✔</span> Regularne aktualizacje</li>
                  <li><span className="check">✔</span> Bezpłatna pomoc techniczna</li>
                  <li><span className="check">✔</span> Optymalizacja prędkości ładowania</li>
                  <li><span className="check">✔</span> Zabezpieczenie strony www</li>
                  <li><span className="check">✔</span> Monitoring bezpieczeństwa 24/7</li>
                  <li><span className="check">✔</span> Kopia plików: co 30 dni</li>
                  <li><span className="check">✔</span> Raport raz w miesiącu</li>
                  <li><span className="check">✔</span> Niewielkie modyfikacje treści i wyglądu</li>
                  <li><span className="check">✔</span> Stały kontakt</li>
                </ul>
              </div>
              <button onClick={() => handleSubscribe("price_1RWDolFlXiRA14LCpgfIFXQu")}>Wybierz Standard</button>
            </div>

            <div className="pakiet">
              <div>
                <h3>Pomoc techniczna <span>Premium</span></h3>
                <p className="cena">79zł <span>/ miesięcznie</span></p>
                <ul>
                  <li><span className="check">✔</span> Priorytetowa obsługa zgłoszeń</li>
                  <li><span className="check">✔</span> Regularne aktualizacje</li>
                  <li><span className="check">✔</span> Bezpłatna pomoc techniczna</li>
                  <li><span className="check">✔</span> Optymalizacja prędkości ładowania</li>
                  <li><span className="check">✔</span> Zabezpieczenie strony www</li>
                  <li><span className="check">✔</span> Monitoring bezpieczeństwa 24/7</li>
                  <li><span className="check">✔</span> Kopia plików: co 30 dni</li>
                  <li><span className="check">✔</span> Kopia bazy danych: co 7 dni</li>
                  <li><span className="check">✔</span> Raport raz w miesiącu</li>
                  <li><span className="check">✔</span> Niewielkie modyfikacje treści i wyglądu</li>
                  <li><span className="check">✔</span> Stały kontakt</li>
                </ul>
              </div>
              <button onClick={() => handleSubscribe("price_1RWDp2FlXiRA14LCqfTA0JgJ")}>Wybierz Premium</button>
            </div>
          </div>
        ) : (
          <div className="sekcja-pomoc kolumny-pomoc">
            <div className="pakiet">
              <div>
                <h3>Jednorazowa pomoc <span>techniczna</span></h3>
                <p className="cena"><span>od </span>89zł <span>/ cena do ustalenia</span></p>
                <ul>
                  <li><span className="check">✔</span> Naprawa strony (np. błędy)</li>
                  <li><span className="check">✔</span> Wdrożenie certyfikatu SSL</li>
                  <li><span className="check">✔</span> Zmiany na istniejącej stronie</li>
                  <li><span className="check">✔</span> Czyszczenie i optymalizacja strony</li>
                  <li><span className="check">✔</span> Przyspieszenie ładowania strony</li>
                  <li><span className="check">✔</span> Przeniesienie strony na inny hosting</li>
                  <li><span className="check">✔</span> Inne</li>
                </ul>
              </div>
            </div>
            <div className="pakiet">
              <p>
                Cena jednorazowej pomocy technicznej zależy od rodzaju zgłoszenia. Opisz, z czym masz problem, a ja odezwę się jak najszybciej z wyceną.
                Możesz również zadzwonić bezpośrednio na numer <strong>883 081 448</strong>.
              </p>
                <form
                  className="formularz"
                  onSubmit={async (e) => {
                    e.preventDefault(); // zapobiegamy przeładowaniu strony

                    const formData = new FormData(e.target);

                    const res = await fetch("/api/kontakt", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name: formData.get("name"),
                        email: formData.get("email"),
                        phone: formData.get("phone"),
                        message: formData.get("message"),
                      }),
                    });

                    const result = await res.json();
                    if (result.ok) {
                      alert("Wiadomość została wysłana!");
                      e.target.reset(); // czyścimy formularz
                    } else {
                      alert("Wystąpił błąd. Spróbuj ponownie.");
                    }
                  }}
                >
                  <input name="name" type="text" placeholder="Imię i nazwisko" required />
                  <input name="email" type="email" placeholder="Adres e-mail" required />
                  <input name="phone" type="tel" placeholder="Numer telefonu" required />
                  <textarea name="message" placeholder="Opisz swój problem" required />

                  <label className="checkbox-zgoda">
                    <input type="checkbox" required />
                    <span>
                      Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
                      <a href="/polityka-prywatnosci" target="_blank">polityką prywatności</a>.
                    </span>
                  </label>

                  <button type="submit">Wyślij zgłoszenie</button>
                </form>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
