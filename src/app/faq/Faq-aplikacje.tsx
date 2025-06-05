'use client';

import "./faq.css";

import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';


const questions = [
  {
    question: 'Co to są aplikacje webowe i kiedy warto je wybrać zamiast mobilnych?',
    answer: 'Aplikacje webowe to rozwiązania działające w przeglądarce – nie trzeba ich instalować na telefonie. Dla firm są świetnym wyborem, jeśli zależy im na szybszym wdrożeniu, niższym koszcie i łatwym dostępie z każdego urządzenia. Tworzę aplikacje webowe dla firm, które potrzebują np. paneli klienta, systemów rezerwacji czy narzędzi online.',
  },
  {
    question: 'Jakie aplikacje dla firm tworzysz najczęściej?',
    answer: 'Najczęściej projektuję aplikacje dla firm z sektora usług, handlu i edukacji. Są to m.in. aplikacje mobilne do zarządzania zespołem, aplikacje webowe do automatyzacji procesów lub systemy do rezerwacji i płatności. Każdy projekt dopasowuję indywidualnie do potrzeb firmy.',
  },
  {
    question: 'Ile kosztuje stworzenie aplikacji dla firmy?',
    answer: 'Koszt aplikacji dla firmy zależy od zakresu funkcji, typu aplikacji (mobilna czy webowa) i wymagań technologicznych. Oferuję też rozwiązania MVP – czyli minimum funkcji potrzebnych do rozpoczęcia pracy lub testów rynkowych. Wyceny przygotowuję indywidualnie i bezpłatnie.',
  },
  {
    question: 'Czym różni się aplikacja webowa od strony internetowej?',
    answer: 'Strona internetowa to głównie treści – prezentacja oferty, portfolio, kontakt. Aplikacja webowa dla firmy to funkcjonalne narzędzie: pozwala logować się, zarządzać danymi, automatyzować procesy. Projektuję zarówno strony, jak i aplikacje – w zależności od potrzeb.',
  },
  {
    question: 'Czy aplikacje webowe działają na telefonach?',
    answer: 'Tak, dobrze zaprojektowane aplikacje webowe są responsywne i działają na smartfonach. Mogą wyglądać i działać jak aplikacje mobilne, a często nie wymagają instalacji. To popularne rozwiązanie dla firm, które chcą szybko wdrożyć funkcjonalną aplikację.',
  },
];

export default function Faq() {
    const [openStates, setOpenStates] = useState<boolean[]>(questions.map(() => false));

    const toggleAnswer = (index: number) => {
    setOpenStates((prev) =>
        prev.map((item, i) => (i === index ? !item : item))
    );
    };

  return (
    <section className="faq-section">
      <div className="faq-container animacja-z-dolu">
        <h2 className="faq-title">
          <span style={{ color: "#2582f5" }}>FAQ</span> Najczęściej zadawane pytania
        </h2>
        <div className="faq-list">
            {questions.map((item, index) => {
            const isOpen = openStates[index];
            const answerRef = useRef<HTMLDivElement>(null);

            useEffect(() => {
                if (answerRef.current) {
                answerRef.current.style.maxHeight = isOpen
                    ? `${answerRef.current.scrollHeight}px`
                    : "0px";
                }
            }, [isOpen]);

            return (
                <div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={index}
                onClick={() => toggleAnswer(index)}
                >
                <div className="faq-question">
                    <p>{item.question}</p>
                    <FaChevronDown className={`faq-icon ${isOpen ? "rotate" : ""}`} />
                </div>
                <div
                    ref={answerRef}
                    className="faq-answer"
                    style={{
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                    }}
                >
                    <p>{item.answer}</p>
                </div>
                </div>
            );
            })}
        </div>
      </div>
    </section>
  );
}
