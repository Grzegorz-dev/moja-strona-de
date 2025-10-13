'use client';

import './faq.css';
import FaqList from '@/components/faq/FaqList';

const questions = [
  {
    question: 'Was sind Webanwendungen und wann sind sie besser als mobile Apps?',
    answer: 'Webanwendungen laufen direkt im Browser – sie müssen nicht auf dem Smartphone installiert werden. Für Unternehmen sind sie ideal, wenn es auf eine schnelle Umsetzung, geringere Kosten und einfachen Zugriff von jedem Gerät ankommt. Ich entwickle Webanwendungen für Firmen, z. B. Kundenportale, Buchungssysteme oder Online-Tools.',
  },
  {
    question: 'Welche Arten von Anwendungen entwickelst du am häufigsten?',
    answer: 'Ich entwickle am häufigsten Anwendungen für Unternehmen aus den Bereichen Dienstleistungen, Handel und Bildung. Dazu gehören mobile Apps zur Teamverwaltung, Webanwendungen zur Prozessautomatisierung oder Buchungs- und Zahlungssysteme. Jedes Projekt wird individuell angepasst.',
  },
  {
    question: 'Wie viel kostet die Entwicklung einer App für ein Unternehmen?',
    answer: 'Die Kosten hängen vom Funktionsumfang, dem Typ der App (mobil oder webbasiert) und den technischen Anforderungen ab. Ich biete auch MVP-Lösungen an – also das nötige Minimum an Funktionen für einen Markttest. Die Angebote sind individuell und kostenlos.',
  },
  {
    question: 'Worin besteht der Unterschied zwischen einer Webseite und einer Webanwendung?',
    answer: 'Eine Webseite präsentiert Inhalte – z. B. Angebote, Referenzen, Kontakt. Eine Webanwendung ist ein funktionales Tool – mit Login, Datenverwaltung, Automatisierungen. Ich biete beides an: Webseiten und Anwendungen – je nach Bedarf deines Unternehmens.',
  },
  {
    question: 'Funktionieren Webanwendungen auch auf Smartphones?',
    answer: 'Ja, gut entwickelte Webanwendungen sind responsiv und funktionieren problemlos auf Smartphones. Sie sehen oft aus und verhalten sich wie mobile Apps – aber meist ohne Installation. Eine beliebte Lösung für Unternehmen, die schnell starten wollen.',
  },
];

export default function FaqAplikacje() {
  return (
    <section className="faq-section">
      <div className="faq-container animacja-z-dolu">
        <h2 className="faq-title">
          <span style={{ color: "#2582f5" }}>FAQ</span> Webanwendungen
        </h2>
        <FaqList questions={questions} />
      </div>
    </section>
  );
}

