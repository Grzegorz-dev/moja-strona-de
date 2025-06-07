import styles from './projekty.module.css';
import {
  FaArrowRight,
} from "react-icons/fa";
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

export default function Projekty() {
    <Head>
      <title>Projekty stron internetowych i aplikacji – Grzegorz Słowiaczek</title>
      <meta name="description" content="Zobacz wybrane realizacje stron internetowych i aplikacji mobilnych. Nowoczesne projekty dopasowane do różnych branż i urządzeń – portfolio Grzegorza Słowiaczka."/>
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      <meta property="og:title" content="Projekty stron i aplikacji – Grzegorz Słowiaczek" />
      <meta property="og:description" content="Zobacz moje realizacje stron internetowych i aplikacji – nowoczesne, responsywne i dopasowane do potrzeb różnych branż." />
      <meta property="og:image" content="https://slowiaczek.pl/images/logo-fb.webp" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://slowiaczek.pl/projekty" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Projekty stron internetowych i aplikacji – Grzegorz Słowiaczek" />
      <meta name="twitter:description" content="Przegląd realizacji: strony internetowe i aplikacje dostosowane do branży, celów i urządzeń." />
      <meta name="twitter:image" content="https://slowiaczek.pl/images/logo-fb.webp" />
    </Head>
    return (
      <main className={styles.container}>

        <section className={styles.portfolioIntro}>
          <div className={styles.portfolioContent}>
            <h2>Projekty</h2>
            <p>Zobacz moje wybrane realizacje stron i aplikacji dla firm z różnych branż.</p>
            <Link className={styles.scrollArrow} aria-label="Przejdź do portfolio">
              ↓
            </Link>
          </div>
          <div className={styles.ramka}></div>
        </section>

        <section className={styles.gallery}>
          <div className={styles.galleryGrid}>
            <Image
              src="/images/portfolio/projekt-strony-pasieki-na-urzadzeniach.webp"
              alt="Responsywna strona internetowa dla pasieki – projekt sklepu online z miodem wyświetlony na laptopie, komputerze, tablecie i smartfonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://odjazdowapasieka.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="/images/portfolio/realizacja-strony-biura-nieruchomosci-responsive.webp"
              alt="Strona internetowa dla biura nieruchomości – responsywny projekt z wyszukiwarką ofert na komputerze, laptopie, tablecie i smartfonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://odjazdowapasieka.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="/images/portfolio/projekt-strony-pracownia-architektoniczna-responsive.webp"
              alt="Strona internetowa pracowni architektonicznej – nowoczesny, minimalistyczny design z wizualizacją projektów budynków na komputerze, laptopie, tablecie i smartfonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://odjazdowapasieka.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="images/portfolio/projekt-strony-kosmetologia-responsive.webp"
              alt="Strona internetowa gabinetu kosmetycznego – elegancki design z wizerunkiem właścicielki, oferta zabiegów i formularz rezerwacji na laptopie, komputerze, tablecie i telefonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://odjazdowapasieka.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="images/portfolio/projekt-strony-deweloper-luksusowe-nieruchomosci.webp"
              alt="Strona internetowa biura nieruchomości – wyszukiwarka ofert i lista mieszkań, widoczna na komputerze, laptopie, tablecie i smartfonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://odjazdowapasieka.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="images/portfolio/projekt-strony-wynajem-dmuchancow-responsive.webp"
              alt="Strona internetowa firmy oferującej dmuchańce – kolorowy i responsywny projekt widoczny na komputerze, tablecie i telefonie"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://odjazdowapasieka.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="images/portfolio/projekt-strony-nieruchomosci-atelier-responsive.webp"
              alt="Strona internetowa dla firmy z branży nieruchomości – elegancki, responsywny projekt z prezentacją wnętrz i atmosfery miejsca"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://odjazdowapasieka.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="images/portfolio/projekt-strony-kancelaria-radcy-prawnego-responsive.webp"
              alt="Strona internetowa kancelarii radcy prawnego – profesjonalny i responsywny projekt dopasowany do komputerów, tabletów i smartfonów"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://odjazdowapasieka.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>

          <div className={styles.galleryGrid}>
            <Image
              src="images/portfolio/projekt-strony-firma-budowlana-uslugi-dachowe-responsive.webp"
              alt="Strona internetowa dla firmy budowlanej i dekarskiej – responsywny projekt z ofertą usług remontowych i formularzem zamówień"
              width="2085"
              height="1527"
              loading="lazy"
            />
            <div className={styles.gallerytext}>
              <a href="https://odjazdowapasieka.pl/" target="_blank" rel="noopener noreferrer">
                <FaArrowRight className={styles.strzalka} /> Zobacz pełną wersję strony
              </a>
            </div>
          </div>
        </section>

      </main>
    );
  }