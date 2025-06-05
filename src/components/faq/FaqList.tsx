'use client';

import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type Props = {
  questions: {
    question: string;
    answer: string;
  }[];
};

export default function FaqList({ questions }: Props) {
  const [openStates, setOpenStates] = useState<boolean[]>(questions.map(() => false));

  const toggleAnswer = (index: number) => {
    setOpenStates((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="faq-list">
      {questions.map((item, index) => {
        const isOpen = openStates[index];
        const answerRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
          if (answerRef.current) {
            answerRef.current.style.maxHeight = isOpen
              ? `${answerRef.current.scrollHeight}px`
              : '0px';
          }
        }, [isOpen]);

        return (
          <div
            className={`faq-item ${isOpen ? 'open' : ''}`}
            key={index}
            onClick={() => toggleAnswer(index)}
          >
            <div className="faq-question">
              <p>{item.question}</p>
              <FaChevronDown className={`faq-icon ${isOpen ? 'rotate' : ''}`} />
            </div>
            <div
              ref={answerRef}
              className="faq-answer"
              style={{ overflow: 'hidden', transition: 'max-height 0.4s ease' }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}


