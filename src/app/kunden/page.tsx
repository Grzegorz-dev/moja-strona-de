import KlienciClient from "./KlienciClient";

export const metadata = {
  title: "Technischer Support & Website-Betreuung – Grzegorz Słowiaczek",
  description:
    "Melde ein technisches Problem, beauftrage ein Update oder aktiviere die monatliche Website-Betreuung. Schneller und professioneller Support für dein Unternehmen.",
  robots: "index,follow",
  openGraph: {
    title: "Technische Hilfe & Betreuung deiner Website – Grzegorz Słowiaczek",
    description:
      "Regelmäßige Wartung, schnelle Hilfe und Updates für deine Website. Ich kümmere mich auch nach dem Launch um alles.",
    url: "https://slowiaczek.pl/klienci",
    type: "website",
    images: [
      {
        url: "https://slowiaczek.pl/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Technischer Support – Grzegorz Słowiaczek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technischer Support & Updates – Grzegorz Słowiaczek",
    description:
      "Melde Probleme, beauftrage Änderungen oder aktiviere eine monatliche Betreuung für deine Website.",
    images: ["https://slowiaczek.pl/images/logo-fb.webp"],
  },
};

export default function KlienciPage() {
  return <KlienciClient />;
}
