'use client';

import './faq.css';
import FaqList from '@/components/faq/FaqList'; // upewnij się, że ta ścieżka działa

const questions = [
  {
    question: 'Ile kosztuje stworzenie strony internetowej lub aplikacji?',
    answer: 'Ceny zaczynają się już od 990 zł za prostą stronę OnePage. Ostateczny koszt zależy od zakresu projektu – prosta strona internetowa dla firmy może kosztować od kilkuset złotych, natomiast rozbudowane aplikacje dla firm wyceniam indywidualnie. Wycena jest bezpłatna – wystarczy się ze mną skontaktować.',
  },
  {
    question: 'Czy oferujesz wsparcie techniczne po wdrożeniu?',
    answer: 'Tak. Oferuję opiekę techniczną, aktualizacje oraz pomoc przy rozbudowie strony lub aplikacji. Zawsze możesz liczyć na moje wsparcie po zakończeniu projektu.',
  },
  {
    question: 'Czy mogę zlecić tylko poprawki na już istniejącej stronie?',
    answer: 'Tak. Pomagam również przy optymalizacji, aktualizacji i modernizacji już działających stron internetowych – także jeśli zostały stworzone przez kogoś innego.',
  },
  {
    question: 'Czy zajmujesz się też sklepami internetowymi?',
    answer: 'Tak, tworzę także funkcjonalne sklepy online, najczęściej oparte o system CMS. To dobra opcja, jeśli Twoja firma chce rozpocząć sprzedaż produktów przez internet.',
  },
  {
    question: 'Czy mogę zamówić też grafikę lub logo?',
    answer: 'Tak – mogę zaprojektować logo, identyfikację wizualną oraz elementy graficzne do stron i aplikacji. Wszystko w jednym stylu, spójnym z Twoją marką.',
  },
  {
    question: 'Czy strony są dostosowane do urządzeń mobilnych?',
    answer: 'Tak, wszystkie strony internetowe są responsywne (RWD) – poprawnie działają na telefonach, tabletach i komputerach. To dziś absolutny standard.',
  },
  {
    question: 'Jak wygląda proces realizacji?',
    answer: 'Proces podzielony jest na kilka etapów: analiza potrzeb, projekt graficzny, kodowanie, testy i wdrożenie. Stawiam na jasną komunikację i elastyczne podejście – niezależnie czy tworzę tanie strony internetowe, czy dedykowane aplikacje webowe.',
  },
];

export default function Faq() {
  return (
    <section className="faq-section">
      <div className="faq-container animacja-z-dolu">
        <h2 className="faq-title">
          <span>FAQ</span> Najczęściej zadawane pytania
        </h2>

        <FaqList questions={questions} />
      </div>
    </section>
  );
}

