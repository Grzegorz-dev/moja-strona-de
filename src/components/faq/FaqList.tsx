'use client';

import FaqItem from './FaqItem';

type Props = {
  questions: {
    question: string;
    answer: string;
  }[];
};

export default function FaqList({ questions }: Props) {
  return (
    <div className="faq-list">
      {questions.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}



