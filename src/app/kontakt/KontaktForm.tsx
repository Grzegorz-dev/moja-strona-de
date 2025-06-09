"use client";

import { useState } from "react";
import styles from "./KontaktForm.module.css"; // zakładam że CSS zostanie ew. przeklejony
import Link from "next/link";


export default function KontaktForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/kontakt-glowny", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }),
    });

    const result = await res.json();
    setLoading(false);

    if (result.ok) {
      alert("Wiadomość została wysłana!");
      e.currentTarget.reset();
    } else {
      alert("Wystąpił błąd. Spróbuj ponownie.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Imię" required />
      <input name="email" type="email" placeholder="Adres e-mail" required />
      <input name="phone" type="tel" placeholder="Numer telefonu" required />
      <textarea name="message" placeholder="Wiadomość" required />

      <label className={styles.checkboxConsent}>
        <input type="checkbox" required />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
          <Link href="/polityka-prywatnosci" target="_blank">polityką prywatności</Link>.
        </span>
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Wysyłanie..." : "Wyślij zgłoszenie"}
      </button>
    </form>
  );
}
