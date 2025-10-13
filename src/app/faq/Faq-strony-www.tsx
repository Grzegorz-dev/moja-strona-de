'use client';

import './faq.css';
import FaqList from '@/components/faq/FaqList';

const questions = [
  {
    question: 'Wie viel kostet eine Unternehmenswebsite?',
    answer:
      'Der Preis einer Unternehmenswebsite hängt vom Funktionsumfang und der Komplexität des Projekts ab. Ich biete sowohl günstige OnePage-Websites als auch umfangreiche Portale mit CMS, Integrationen und individuellem Design an. Jedes Angebot ist individuell und kostenlos.',
  },
  {
    question: 'Bedeutet „günstige Website“ auch schlechte Qualität?',
    answer:
      'Nein – meine günstigen Webseitenlösungen sind optimiert, schnell und optisch ansprechend – ideal für kleinere Unternehmen und Start-ups. Die Qualität bleibt erhalten – ich passe lediglich den Funktionsumfang an das Budget an.',
  },
  {
    question: 'Welche Arten von Unternehmenswebsites entwickelst du am häufigsten?',
    answer:
      'Ich entwickle sowohl einfache OnePage-Websites als auch komplexe Firmenwebseiten mit Blog, Portfolio, Buchungssystem, Formularen oder Produktkatalogen – je nach Kundenbedarf.',
  },
  {
    question: 'Wie lange dauert die Erstellung einer Website?',
    answer:
      'Einfache Unternehmenswebseiten werden meist innerhalb von 5 bis 10 Werktagen umgesetzt. Aufwendigere Projekte (z. B. mit CMS oder Sonderfunktionen) benötigen entsprechend mehr Zeit.',
  },
  {
    question: 'Kann ich die Inhalte später selbst bearbeiten?',
    answer:
      'Ja – alle Websites verfügen über ein CMS, mit dem Sie Inhalte, Bilder und Bereiche ganz einfach bearbeiten oder hinzufügen können. Auf Wunsch biete ich auch eine kurze Einweisung an.',
  },
];

export default function FaqStronyWww() {
  return (
    <section className="faq-section">
      <div className="faq-container animacja-z-dolu">
        <h2 className="faq-title">
          <span>FAQ</span> Unternehmenswebseiten
        </h2>
        <FaqList questions={questions} />
      </div>
    </section>
  );
}
