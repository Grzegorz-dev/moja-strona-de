import KlienciClient from "./KlienciClient";

export const metadata = {
  title: "Wsparcie techniczne i opieka nad stroną internetową – Grzegorz Słowiaczek",
  description:
    "Zgłoś problem techniczny, zleć aktualizację lub aktywuj miesięczną opiekę nad swoją stroną internetową. Szybka i profesjonalna pomoc techniczna dla Twojej firmy.",
  robots: "index,follow",
  openGraph: {
    title: "Pomoc techniczna i opieka nad stroną – Grzegorz Słowiaczek",
    description:
      "Stała opieka nad stroną internetową, szybka pomoc techniczna i aktualizacje. Dbam o Twoją witrynę po wdrożeniu.",
    url: "https://slowiaczek.pl/klienci",
    type: "website",
    images: [
      {
        url: "https://slowiaczek.pl/images/logo-fb.webp",
        width: 726,
        height: 353,
        alt: "Wsparcie techniczne – Grzegorz Słowiaczek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wsparcie techniczne i aktualizacje strony – Grzegorz Słowiaczek",
    description:
      "Zgłoś problem techniczny, zamów aktualizację lub uruchom miesięczną opiekę nad stroną internetową.",
    images: ["https://slowiaczek.pl/images/logo-fb.webp"],
  },
};

export default function KlienciPage() {
  return <KlienciClient />;
}
