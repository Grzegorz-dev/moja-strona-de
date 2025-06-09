"use client";

import { FaArrowRight } from 'react-icons/fa';
import styles from './ScrollButton.module.css'; // lub dostosuj do ścieżki pliku CSS modułowego

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
      <span>Zobacz więcej</span>
      <div className={styles.arrowIconCircle}>
        <FaArrowRight />
      </div>
    </div>
  );
}
