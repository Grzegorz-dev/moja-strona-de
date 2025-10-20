import styles from './projekty.module.css';
import {
  FaArrowRight,
} from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";


export const metadata = {
  title: "Webseiten- und App-Projekte – Gregor Slowiaczek",
  description:
    "Entdecken Sie ausgewählte Projekte für Webseiten und mobile Apps. Moderne Lösungen, angepasst an verschiedene Branchen und Geräte – Portfolio von Gregor Slowiaczek.",
  robots: "index,follow",
  openGraph: {
    title: "Web- und App-Projekte – Gregor Slowiaczek",
    description:
      "Einblicke in meine Projekte: Webseiten und Anwendungen – modern, responsiv und auf branchenspezifische Anforderungen abgestimmt.",
    url: "https://Slowiaczek.de/projekte",
    type: "website",
    images: [
      {
        url: "https://Slowiaczek.de/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Projekte – Gregor Slowiaczek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webseiten- und App-Projekte – Gregor Slowiaczek",
    description:
      "Projektübersicht: Webseiten und Anwendungen, abgestimmt auf Branche, Zielgruppe und Endgerät.",
    images: ["https://Slowiaczek.de/images/logo-fb.webp"],
  },
};

export default function Projekty() {
    return (
      <main className={styles.container}>

   <section className={styles.portfolioIntro}>
  <div className={styles.portfolioContent}>
    <h2>Projekte</h2>
    <p>Ich entwickle moderne Webseiten und Apps für Unternehmen in ganz Europa.</p>
    <Link href="#firstProject" className={styles.scrollArrow} aria-label="Zum Portfolio scrollen">
      ↓
    </Link>
  </div>
  <div className={styles.ramka}></div>
</section>

<section className={styles.gallery} id="firstProject">

<div className={styles.galleryGrid}>
  <Image
    src="/images/portfolio/webseiten-projekt-physiotherapie-ernaehrung-training-responsive.webp"
    alt="Responsives Webdesign für eine Praxis für Physiotherapie, Ernährungsberatung und Personal Training, dargestellt auf verschiedenen Geräten: Computer, Laptop, Tablet und Smartphone."
    width="2085"
    height="1527"
    loading="lazy"
  />
  <div className={styles.gallerytext}>
    <a href="https://activmed.net/" target="_blank" rel="noopener noreferrer">
      <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
    </a>
  </div>
</div>

  <div className={styles.galleryGrid}>
    <Image
      src="/images/portfolio/webseiten-projekt-tierhäuser.webp"
      alt="Responsives Webdesign für einen Onlineshop mit Häusern und Zubehör für Hunde und Katzen, dargestellt auf verschiedenen Geräten: Computer, Laptop, Tablet und Smartphone."
      width="2085"
      height="1527"
      loading="lazy"
    />
    <div className={styles.gallerytext}>
      <a href="https://dachdlalap.pl/" target="_blank" rel="noopener noreferrer">
        <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
      </a>
    </div>
  </div>

  <div className={styles.galleryGrid}>
    <Image
      src="/images/portfolio/webseiten-projekt-rechtsberatung-responsive.webp"
      alt="Responsives Webdesign für eine Anwaltskanzlei, die sich auf die Annullierung von Ehen in der katholischen Kirche spezialisiert, dargestellt auf verschiedenen Geräten: Computer, Laptop, Tablet und Smartphone."
      width="2085"
      height="1527"
      loading="lazy"
    />
    <div className={styles.gallerytext}>
      <a href="https://maniarski-konsultacje.pl/" target="_blank" rel="noopener noreferrer">
        <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
      </a>
    </div>
  </div>

  <div className={styles.galleryGrid}>
    <Image
      src="/images/portfolio/projekt-strony-pasieki-na-urzadzeniach.webp"
      alt="Responsives Webdesign für eine Imkerei – Online-Shop mit Honig auf Laptop, PC, Tablet und Smartphone"
      width="2085"
      height="1527"
      loading="lazy"
    />
    <div className={styles.gallerytext}>
      <a href="https://odjazdowapasieka.pl/" target="_blank" rel="noopener noreferrer">
        <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
      </a>
    </div>
  </div>

  <div className={styles.galleryGrid}>
    <Image
      src="/images/portfolio/webseiten-projekt-immobilienbüro-responsive.webp"
      alt="Website für ein Immobilienbüro – responsives Design mit Angebotssuche auf PC, Laptop, Tablet und Smartphone"
      width="2085"
      height="1527"
      loading="lazy"
    />
    <div className={styles.gallerytext}>
      <a href="https://nieruchomosciszypula.pl/" target="_blank" rel="noopener noreferrer">
        <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
      </a>
    </div>
  </div>

  <div className={styles.galleryGrid}>
    <Image
      src="/images/portfolio/webseiten-projekt-architekturbüro-responsive.webp"
      alt="Website für ein Architekturbüro – modernes, minimalistisches Design mit Gebäudevisualisierungen"
      width="2085"
      height="1527"
      loading="lazy"
    />
    <div className={styles.gallerytext}>
      <a href="https://kmonoline.pl/" target="_blank" rel="noopener noreferrer">
        <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
      </a>
    </div>
  </div>

  <div className={styles.galleryGrid}>
    <Image
      src="/images/portfolio/webseiten-projekt-kosmetologie-responsive.webp"
      alt="Website für ein Kosmetikstudio – elegantes Design mit Bild der Inhaberin, Behandlungsangebot und Buchungsformular"
      width="2085"
      height="1527"
      loading="lazy"
    />
    <div className={styles.gallerytext}>
      <a href="https://tabubeauty.pl/" target="_blank" rel="noopener noreferrer">
        <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
      </a>
    </div>
  </div>

  <div className={styles.galleryGrid}>
    <Image
      src="/images/portfolio/webseiten-projekt-developer-luxusimmobilien.webp"
      alt="Website für einen Immobilienentwickler – Angebotsliste und Suchfunktion auf mehreren Geräten"
      width="2085"
      height="1527"
      loading="lazy"
    />
    <div className={styles.gallerytext}>
      <a href="https://penthouse-nieruchomosci.pl/" target="_blank" rel="noopener noreferrer">
        <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
      </a>
    </div>
  </div>

  <div className={styles.galleryGrid}>
    <Image
      src="/images/portfolio/webseiten-projekt-hüpfburgen-verleih-responsive.webp"
      alt="Website für ein Unternehmen mit Hüpfburgen – farbenfrohes, responsives Design auf Desktop, Tablet und Smartphone"
      width="2085"
      height="1527"
      loading="lazy"
    />
    <div className={styles.gallerytext}>
      <a href="https://imperium-dmuchancow.pl/" target="_blank" rel="noopener noreferrer">
        <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
      </a>
    </div>
  </div>

  <div className={styles.galleryGrid}>
    <Image
      src="/images/portfolio/webseiten-projekt-immobilien-atelier-responsive.webp"
      alt="Website für ein Immobilienunternehmen – elegantes, responsives Design mit Innenraumbildern"
      width="2085"
      height="1527"
      loading="lazy"
    />
    <div className={styles.gallerytext}>
      <a href="https://atelier-nieruchomosci.pl/" target="_blank" rel="noopener noreferrer">
        <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
      </a>
    </div>
  </div>

  <div className={styles.galleryGrid}>
    <Image
      src="/images/portfolio/webseiten-projekt-rechtsanwaltskanzlei-responsive.webp"
      alt="Website für eine Anwaltskanzlei – professionelles, responsives Design für Desktop, Tablet und Smartphone"
      width="2085"
      height="1527"
      loading="lazy"
    />
    <div className={styles.gallerytext}>
      <a href="https://radcaprawny-szypula.pl/" target="_blank" rel="noopener noreferrer">
        <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
      </a>
    </div>
  </div>

  <div className={styles.galleryGrid}>
    <Image
      src="/images/portfolio/webseiten-projekt-baufirma-dachdeckerleistungen-responsive.webp"
      alt="Website für ein Bauunternehmen – responsives Design mit Leistungsangebot und Bestellformular"
      width="2085"
      height="1527"
      loading="lazy"
    />
    <div className={styles.gallerytext}>
      <a href="https://exdach.com/" target="_blank" rel="noopener noreferrer">
        <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
      </a>
    </div>
  </div>

  <div className={styles.galleryGrid}>
    <Image
      src="/images/portfolio/webseiten-projekt-logopädische-praxis-responsive.webp"
      alt="Responsives Webdesign einer Website für eine logopädische Praxis für Kinder und Jugendliche, dargestellt auf verschiedenen Geräten: Computer, Laptop, Tablet und Smartphone"
      width="2085"
      height="1527"
      loading="lazy"
    />
    <div className={styles.gallerytext}>
      <a href="https://logopedycznagloska.pl/" target="_blank" rel="noopener noreferrer">
        <FaArrowRight className={styles.strzalka} /> Ganze Website ansehen
      </a>
    </div>
  </div>
  
</section>

      </main>
    );
  }