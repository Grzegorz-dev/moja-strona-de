'use client';

import './faq.css';
import FaqList from '@/components/faq/FaqList';

const questions = [
  {
    question: 'Ile kosztuje stworzenie strony internetowej dla firmy?',
    answer: 'Koszt strony internetowej dla firmy zależy od zakresu funkcji i stopnia zaawansowania projektu. Oferuję tanie strony internetowe typu wizytówka, ale także rozbudowane serwisy z systemami CMS, integracjami i unikalnym designem. Każda wycena jest indywidualna i darmowa.',
  },
  {
    question: 'Czy tania strona internetowa oznacza niską jakość?',
    answer: 'Nie – tanie strony internetowe w mojej ofercie to zoptymalizowane, szybkie i estetyczne rozwiązania dla mniejszych firm i startupów. Nie rezygnuję z jakości – po prostu dobieram funkcje do budżetu.',
  },
  {
    question: 'Jakie strony internetowe dla firm projektujesz najczęściej?',
    answer: 'Tworzę zarówno proste strony wizytówki, jak i rozbudowane strony internetowe dla firm z blogiem, portfolio, systemem rezerwacji, formularzami czy katalogami produktów. Wszystko zależy od potrzeb klienta.',
  },
  {
    question: 'Jak długo trwa stworzenie strony internetowej?',
    answer: 'W przypadku prostych stron internetowych dla firm – realizacja trwa zazwyczaj od 5 do 10 dni roboczych. Bardziej złożone projekty (np. z CMS lub dedykowanymi funkcjami) mogą wymagać więcej czasu.',
  },
  {
    question: 'Czy mogę samodzielnie edytować stronę po wdrożeniu?',
    answer: 'Tak – wszystkie strony internetowe mają panel CMS, dzięki któremu możesz łatwo edytować treści, zdjęcia i dodawać nowe sekcje. Oferuję też krótkie szkolenie z obsługi strony.',
  },
];

export default function FaqStronyWww() {
  return (
    <section className="faq-section">
      <div className="faq-container animacja-z-dolu">
        <h2 className="faq-title">
          <span>FAQ</span> Strony internetowe
        </h2>
        <FaqList questions={questions} />
      </div>
    </section>
  );
}
