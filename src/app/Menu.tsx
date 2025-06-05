'use client';

import { useEffect, useState } from "react";
import { fixPolishTypography } from '@/utils/fixSpacings';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fixPolishTypography(); // ← tutaj działa poprawnie
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`menu ${scrolled ? 'scrolled' : ''}`}>
      <div className="menu-container">
        <a href="/" className="logo" aria-label="Strona główna – Grzegorz Słowiaczek">
          <img src="/images/logo-grzegorz-slowiaczek.webp" alt="Grzegorz Słowiaczek – logo twórcy stron i aplikacji" width="768" height="427"/>
          <span className="logo-text">
            Grzegorz<br />
            Słowiaczek
          </span>
        </a>

        {/* 🔁 MENU LINKS na duże ekrany */}
        <ul className="menu-links">
          <li><a href="/">Strona główna</a></li>
          <li><a href="/stronywww">Strony WWW</a></li>
          <li><a href="/aplikacje">Aplikacje</a></li>
          <li><a href="/projekty">Projekty</a></li>
          <li><a href="/klienci">Dla klientów</a></li>
          <li><a href="/cennik">Cennik</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/kontakt">Kontakt</a></li>
        </ul>

        {/* 🔁 BURGER button tylko na mobile */}
        <button className="burger" onClick={() => setMenuOpen(prev => !prev)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* 🔁 PANEL BOCZNY */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          &times;
        </button>
        <ul>
          <li><a href="/">Strona główna</a></li>
          <li><a href="/stronywww">Strony WWW</a></li>
          <li><a href="/aplikacje">Aplikacje</a></li>
          <li><a href="/projekty">Projekty</a></li>
          <li><a href="/klienci">Dla klientów</a></li>
          <li><a href="/cennik">Cennik</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/kontakt">Kontakt</a></li>
        </ul>
      </div>

      {/* 🔁 Przyciemnione tło */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}



