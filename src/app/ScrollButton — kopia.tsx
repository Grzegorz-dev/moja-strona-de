"use client";

import { FaArrowRight } from 'react-icons/fa';
import styles from '@/app/home.module.css';

export default function ScrollButton() {
  const handleScroll = () => {
    const section = document.getElementById('benefitsSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleScroll();
    }
  };

  return (
    <div
      onClick={handleScroll}
      onKeyDown={handleKeyDown}
      className={styles.arrowButton}
      role="button"
      tabIndex={0}
    >
      <span>Mehr erfahren</span>
      <div className={styles.arrowIconCircle}>
        <FaArrowRight />
      </div>
    </div>
  );
}
