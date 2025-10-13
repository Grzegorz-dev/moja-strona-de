"use client";

import ToggleSection from "@/components/ToggleSection";
import styles from './klienci.module.css';
import {
  FaHeadset,
  FaWrench,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function KlienciClient() {
  const [typ, setTyp] = useState<"subskrypcja" | "jednorazowa">("subskrypcja");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get("success");
    const canceled = urlParams.get("canceled");

    if (success) {
      import('sweetalert2').then((Swal) => {
        Swal.default.fire({
          icon: 'success',
          title: 'Erfolg!',
          text: 'Dein Abonnement wurde aktiviert.',
        });
      });
    }

    if (canceled) {
      import("sweetalert2").then((Swal) => {
        Swal.default.fire({
          icon: 'info',
          title: 'Zahlung abgebrochen',
          text: 'Du kannst es erneut versuchen.',
          confirmButtonText: 'OK',
        }).then(() => {
          window.history.replaceState(null, "", window.location.pathname);
        });
      });
    }
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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

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
      alert("Nachricht wurde gesendet!");
      e.currentTarget.reset();
    } else {
      alert("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    }
  };

  if (!isClient) return null;

  return (
    <main className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.content}>
          <h1>Support für Deine Website</h1>
          <p>Melde ein technisches Problem, beauftrage ein Update oder aktiviere die monatliche Wartung.</p>
        </div>
      </section>

      <section className={styles.supportTypes}>
        <div className={styles.supportTypesGrid}>
          <button
            onClick={() => setTyp("subskrypcja")}
            className={`${styles.supportButton} ${typ === "subskrypcja" ? styles.active : ""}`}
          >
            <FaHeadset className={styles.iconBtn} />
            <div className={styles.buttonText}>
              <span className={styles.title}>REGELMÄSSIGER SUPPORT</span>
              <span className={styles.subtitle}>Wartungspaket</span>
            </div>
          </button>
          <button
            onClick={() => setTyp("jednorazowa")}
            className={`${styles.supportButton} ${typ === "jednorazowa" ? styles.active : ""}`}
          >
            <FaWrench className={styles.iconBtn} />
            <div className={styles.buttonText}>
              <span className={styles.title}>EINMALIGER SUPPORT</span>
              <span className={styles.subtitle}>Schnelle technische Hilfe</span>
            </div>
          </button>
        </div>

        {typ === "subskrypcja" ? (
          <div className={`${styles.supportSection} ${styles.columns}`}>
            {/* Standard package */}
            <div className={styles.package}>
              <h3>Wartung <span>Standard</span></h3>
              <p className={styles.price}>19 € <span>/ monatlich</span></p>
              <ul>
                <li><span className={styles.check}>✔</span> Regelmäßige Updates</li>
                <li><span className={styles.check}>✔</span> Kostenloser technischer Support</li>
                <li><span className={styles.check}>✔</span> Ladegeschwindigkeit-Optimierung</li>
                <li><span className={styles.check}>✔</span> Sicherheitsmaßnahmen für die Website</li>
                <li><span className={styles.check}>✔</span> 24/7 Sicherheitsüberwachung</li>
                <li><span className={styles.check}>✔</span> Datei-Backup alle 30 Tage</li>
                <li><span className={styles.check}>✔</span> Monatsbericht</li>
                <li>
                  <span className={styles.check}>✔</span> Kleine Inhalts- & Designänderungen
                  <ToggleSection title="Details anzeigen">
                    <ul>
                      <li>- Textänderungen</li>
                      <li>- Austausch von max. 3 Bildern monatlich</li>
                      <li>- Kleine Design-Anpassungen (Farben, Abstände etc.)</li>
                      <li>- Max. 30 Minuten Arbeitszeit pro Monat</li>
                    </ul>
                  </ToggleSection>
                </li>
                <li><span className={styles.check}>✔</span> Ständiger Kontakt</li>
              </ul>
              <button onClick={() => handleSubscribe("price_1RqDRUFlXiRA14LCcFDY27fJ")}>Standard wählen</button>
            </div>

            {/* Premium package */}
            <div className={styles.package}>
              <h3>Wartung <span>Premium</span></h3>
              <p className={styles.price}>39 € <span>/ monatlich</span></p>
              <ul>
                <li><span className={styles.check}>✔</span> Priorisierte Bearbeitung</li>
                <li><span className={styles.check}>✔</span> Regelmäßige Updates</li>
                <li><span className={styles.check}>✔</span> Kostenloser technischer Support</li>
                <li><span className={styles.check}>✔</span> Ladegeschwindigkeit-Optimierung</li>
                <li><span className={styles.check}>✔</span> Sicherheitsmaßnahmen für die Website</li>
                <li><span className={styles.check}>✔</span> 24/7 Sicherheitsüberwachung</li>
                <li><span className={styles.check}>✔</span> Datei-Backup alle 30 Tage</li>
                <li><span className={styles.check}>✔</span> Datenbank-Backup alle 7 Tage</li>
                <li><span className={styles.check}>✔</span> Monatsbericht</li>
                <li>
                  <span className={styles.check}>✔</span> Kleine Inhalts- & Designänderungen
                  <ToggleSection title="Details anzeigen">
                    <ul>
                      <li>- Textänderungen</li>
                      <li>- Austausch von max. 3 Bildern monatlich</li>
                      <li>- Kleine Design-Anpassungen (Farben, Abstände etc.)</li>
                      <li>- Max. 60 Minuten Arbeitszeit pro Monat</li>
                    </ul>
                  </ToggleSection>
                </li>
                <li><span className={styles.check}>✔</span> Ständiger Kontakt</li>
              </ul>
              <button onClick={() => handleSubscribe("price_1RqDSJFlXiRA14LC5ZzkZka5")}>Premium wählen</button>
            </div>
          </div>
        ) : (
          <div className={`${styles.supportSection} ${styles.columns}`}>
            <div className={styles.package}>
              <h3>Einmalige <span>technische Hilfe</span></h3>
              <p className={styles.price}><span>ab </span>45 €  <span>/ Preis nach Vereinbarung</span></p>
              <ul>
                <li><span className={styles.check}>✔</span> Fehlerbehebung auf der Website</li>
                <li><span className={styles.check}>✔</span> SSL-Zertifikat-Installation</li>
                <li><span className={styles.check}>✔</span> Änderungen an bestehender Seite</li>
                <li><span className={styles.check}>✔</span> Bereinigung und Optimierung</li>
                <li><span className={styles.check}>✔</span> Ladezeitbeschleunigung</li>
                <li><span className={styles.check}>✔</span> Umzug auf anderen Hosting</li>
                <li><span className={styles.check}>✔</span> Andere Anfragen</li>
              </ul>
            </div>

            <div className={styles.package}>
              <p>
                Der Preis für einmalige Hilfe hängt vom jeweiligen Problem ab. Beschreibe Dein Anliegen, und ich melde mich schnellstmöglich mit einem Angebot.
              </p>
              <form className={styles.form} onSubmit={handleFormSubmit}>
                <input name="name" type="text" placeholder="Vor- und Nachname" required />
                <input name="email" type="email" placeholder="E-Mail-Adresse" required />
                <input name="phone" type="tel" placeholder="Telefonnummer" required />
                <textarea name="message" placeholder="Beschreibe Dein Problem" required />
                <label className={styles.checkboxConsent}>
                  <input type="checkbox" required />
                  <span>
                    Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der{" "}
                    <Link href="/polityka-prywatnosci" target="_blank">Datenschutzerklärung</Link> zu.
                  </span>
                </label>
                <button type="submit">Anfrage absenden</button>
              </form>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

