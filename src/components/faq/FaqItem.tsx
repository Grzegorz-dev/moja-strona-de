'use client';

import { useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

export default function FaqItem({ question, answer, isOpen, toggle }: Props) {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (answerRef.current) {
      answerRef.current.style.maxHeight = isOpen
        ? `${answerRef.current.scrollHeight}px`
        : '0px';
    }
  }, [isOpen]);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={toggle}>
      <div className="faq-question">
        <p>{question}</p>
        <FaChevronDown className={`faq-icon ${isOpen ? 'rotate' : ''}`} />
      </div>
      <div
        ref={answerRef}
        className="faq-answer"
        style={{
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
