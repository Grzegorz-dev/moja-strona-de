'use client';

import './faq.css';
import FaqList from '@/components/faq/FaqList'; // upewnij się, że ta ścieżka działa

const questions = [
  {
    question: 'Wie viel kostet eine Website oder App?',
    answer:
      'Die Preise beginnen bereits ab 400€ für eine einfache OnePage-Seite. Die endgültigen Kosten hängen vom Umfang des Projekts ab – eine einfache Firmenwebsite kann ein paar Hundert Złoty kosten, während komplexe Unternehmensanwendungen individuell kalkuliert werden. Das Angebot ist kostenlos – einfach Kontakt aufnehmen.',
  },
  {
    question: 'Bietest du technischen Support nach dem Launch an?',
    answer:
      'Ja. Ich biete technischen Support, Updates und Hilfe bei der Weiterentwicklung Ihrer Website oder App. Auch nach Projektabschluss können Sie auf meine Unterstützung zählen.',
  },
  {
    question: 'Kann ich nur Änderungen an einer bestehenden Website beauftragen?',
    answer:
      'Ja. Ich unterstütze auch bei der Optimierung, Aktualisierung und Modernisierung bestehender Websites – auch wenn sie von jemand anderem erstellt wurden.',
  },
  {
    question: 'Erstellst du auch Onlineshops?',
    answer:
      'Ja, ich entwickle auch funktionale Onlineshops – meistens auf Basis eines CMS. Eine gute Wahl, wenn Ihr Unternehmen den Online-Verkauf starten möchte.',
  },
  {
    question: 'Kann ich auch ein Logo oder Grafikdesign beauftragen?',
    answer:
      'Ja – ich entwerfe Logos, visuelle Identitäten und grafische Elemente für Websites und Apps. Alles im einheitlichen Stil, passend zu Ihrer Marke.',
  },
  {
    question: 'Sind die Websites mobilfreundlich?',
    answer:
      'Ja, alle Websites sind responsiv (RWD) – sie funktionieren auf Smartphones, Tablets und Desktop-Geräten. Das ist heutzutage absoluter Standard.',
  },
  {
    question: 'Wie läuft der Projektablauf ab?',
    answer:
      'Das Projekt ist in mehrere Phasen unterteilt: Bedarfsanalyse, Design, Programmierung, Tests und Veröffentlichung. Ich setze auf klare Kommunikation und ein flexibles Vorgehen – unabhängig davon, ob es sich um günstige Websites oder maßgeschneiderte Webanwendungen handelt.',
  },
];

export default function Faq() {
  return (
    <section className="faq-section">
      <div className="faq-container animacja-z-dolu">
        <h2 className="faq-title">
          <span>FAQ</span> Häufig gestellte Fragen
        </h2>

        <FaqList questions={questions} />
      </div>
    </section>
  );
}


