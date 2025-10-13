"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const WORDS = [
  "und", "oder", "aber", "sondern", "denn", "doch",
  "als", "wie", "wenn", "weil", "da", "ob", "bis",
  "mit", "von", "zu", "nach", "in", "an", "auf", "bei",
  "für", "aus", "über", "unter", "ohne", "um",
  "am", "im", "vom", "zum", "beim",
  "dem", "der", "die", "das", "ein", "eine",
  "ins", "aufs", "auch", "nur"
];

export default function NoOrphans() {
  const pathname = usePathname();

  useEffect(() => {
    // Przechodzimy przez wszystkie węzły tekstowe w body
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    let node: Node | null;

    while ((node = walker.nextNode())) {
      const parent = (node as Text).parentElement;
      if (!parent) continue;
      if (/^(SCRIPT|STYLE|TEXTAREA|NOSCRIPT)$/i.test(parent.tagName)) continue;
      nodes.push(node as Text);
    }

    // Przygotowujemy regexy dla słów
    const regs = WORDS.map((w) => new RegExp(`(\\s)(${w})(\\s)`, "gi"));

    // Zamieniamy zwykłe spacje na twarde
    nodes.forEach((t) => {
      let text = t.nodeValue ?? "";
      regs.forEach((re) => {
        text = text.replace(re, (_m, pre, word) => `${pre}${word}\u00A0`);
      });
      t.nodeValue = text;
    });
  }, [pathname]); // działa przy każdej zmianie trasy

  return null;
}
