'use client';

import { useEffect, useState } from "react";
import { fixPolishTypography } from '@/utils/fixSpacings';
import Link from 'next/link';
import Image from 'next/image';

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
        <Link href="/" className="logo" aria-label="Startseite – Gregor Sloweck">
          <Image src="/images/logo-gregor-slowiaczek.webp" alt="Gregor Sloweck - Logo des Erstellers von Webseiten und Apps" width="768" height="427"/>
          <span className="logo-text">
            Gregor<br />
            Sloweck
          </span>
        </Link>

        {/* 🔁 MENU LINKS na duże ekrany */}
        <ul className="menu-links">
          <li><Link href="/">Startseite</Link></li>
          <li><Link href="/webseiten">Webseiten</Link></li>
          <li><Link href="/apps">Apps</Link></li>
          <li><Link href="/projekte">Projekte</Link></li>
          <li><Link href="/kunden">Für Kunden</Link></li>
          <li><Link href="/preise">Preise</Link></li>
          <li><Link href="/kontakt">Kontakt</Link></li>
        </ul>

        {/* 🔁 BURGER button tylko na mobile */}
        <button className="burger" aria-label="Otwórz menu" onClick={() => setMenuOpen(prev => !prev)}>
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
          <li><Link href="/">Startseite</Link></li>
          <li><Link href="/webseiten">Webseiten</Link></li>
          <li><Link href="/apps">Apps</Link></li>
          <li><Link href="/projekte">Projekte</Link></li>
          <li><Link href="/kunden">Für Kunden</Link></li>
          <li><Link href="/preise">Preise</Link></li>
          <li><Link href="/kontakt">Kontakt</Link></li>
        </ul>
      </div>

      {/* 🔁 Przyciemnione tło */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}



