"use client";

import { useState } from "react";
import styles from './apps/aplikacje.module.css';

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
      alert("Danke! Ich melde mich bald per E-Mail bei Ihnen.");
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
      <button type="submit" disabled={submitting}>
        {submitting ? "Sende..." : "Kostenlose Einschätzung"}
      </button>
    </form>
  );
}
