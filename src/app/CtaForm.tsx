"use client";

import { useState } from "react";
import styles from './home.module.css';

export default function CtaForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const target = e.currentTarget;
    const formData = new FormData(target);
    const phone = formData.get("phone");

    const res = await fetch("/api/wycena", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone })
    });

    let result = null;

    try {
      result = await res.json();
    } catch (err) {
      console.error("Nieprawidłowy JSON:", err);
    }

    setSubmitting(false);

    if (res.ok && result?.ok) {
      alert("Wycena została wysłana!");
      target.reset();
    } else {
      alert("Błąd przy wysyłce. Spróbuj ponownie.");
    }
  };

  return (
    <form className={styles.ctaForm} onSubmit={handleSubmit}>
      <input
        name="phone"
        type="tel"
        placeholder="Twój numer telefonu"
        required
      />
      <button type="submit" disabled={submitting}>
        {submitting ? "Wysyłanie..." : "Darmowa wycena"}
      </button>
    </form>
  );
}


