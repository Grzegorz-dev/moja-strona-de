"use client";

import { useState } from "react";
import styles from "./kontakt.module.css";
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
      alert("Nachricht wurde gesendet!");
      e.currentTarget.reset();
    } else {
      alert("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="email" placeholder="E-Mail-Adresse" required />
      <input name="phone" type="tel" placeholder="Telefonnummer" required />
      <textarea name="message" placeholder="Nachricht" required />

      <label className={styles.checkboxConsent}>
        <input type="checkbox" required />
        <span>
          Ich erkläre mich mit der Verarbeitung meiner personenbezogenen Daten gemäß der{" "}
          <Link href="/datenschutzerklarung" target="_blank">Datenschutzerklärung</Link> einverstanden.
        </span>
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Senden..." : "Nachricht senden"}
      </button>
    </form>
  );
}
