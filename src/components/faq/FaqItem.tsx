'use client';

import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type Props = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);
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
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="faq-question">
        <p>{question}</p>
        <FaChevronDown className={`faq-icon ${isOpen ? 'rotate' : ''}`} />
      </div>
      <div
        ref={answerRef}
        className="faq-answer"
        style={{ overflow: 'hidden', transition: 'max-height 0.4s ease' }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
