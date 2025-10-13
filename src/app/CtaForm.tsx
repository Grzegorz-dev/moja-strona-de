"use client";

import { useState } from "react";
import styles from './home.module.css';
import Link from 'next/link';

export default function CtaForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const target = e.currentTarget;
    const formData = new FormData(target);
    const email = formData.get("email");

    const res = await fetch("/api/wycena", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    let result = null;

    try {
      result = await res.json();
    } catch (err) {
      console.error("Ungültiges JSON:", err);
    }

    setSubmitting(false);

    if (res.ok && result?.ok) {
      alert("Vielen Dank! Ich melde mich in Kürze bei Ihnen.");
      target.reset();
    } else {
      alert("Fehler beim Senden. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <form className={styles.ctaForm} onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Ihre E-Mail-Adresse"
        required
      />
      <div className={styles.checkbox}>
        <input type="checkbox" id="einwilligung" required />
        <label htmlFor="einwilligung">
          Ich stimme der <Link href="/polityka-prywatnosci" target="_blank">Datenverarbeitung</Link> zu
        </label>
      </div>

      <button type="submit" disabled={submitting}>
        {submitting ? "Wird gesendet..." : "Kostenlose Anfrage"}
      </button>
    </form>
  );
}



