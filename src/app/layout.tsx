import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './blog/blog.module.css';
import Menu from "./Menu";
import AnimationWrapper from "./AnimationWrapper";
import Link from 'next/link';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moja strona",
  description: "Projekt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AnimationWrapper>
          <Menu />
          {children}

          <footer className="footer">
            <div className="footer-container">
              <div className="footer-left">
                <Link href="/" className="logo" aria-label="Strona główna – Grzegorz Słowiaczek">
                  <img src="/images/logo-grzegorz-slowiaczek.webp" alt="Grzegorz Słowiaczek – logo twórcy stron i aplikacji" width="768" height="427" loading="lazy"/>
                </Link>
                <p>© {new Date().getFullYear()} Grzegorz Słowiaczek. Wszelkie prawa zastrzeżone.</p>
              </div>

              <div className="footer-center">
                <ul>
                  <li><Link href="/">Strona główna</Link></li>
                  <li><Link href="/stronywww">Strony WWW</Link></li>
                  <li><Link href="/aplikacje">Aplikacje</Link></li>
                  <li><Link href="/projekty">Projekty</Link></li>
                  <li><Link href="/klienci">Dla klientów</Link></li>
                  <li><Link href="/cennik">Cennik</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/kontakt">Kontakt</Link></li>
                </ul>
              </div>

              <div className="footer-center">
                <ul>
                  <li><Link href="/polityka-prywatnosci">Polityka prywatności</Link></li>
                  <li><Link href="/regulamin">Regulamin</Link></li>
                </ul>
              </div>

              <div className="footer-right">
                <p>kontakt@slowiaczek.pl</p>
                <p>+48 883 081 448</p>
                <div className="socials">
                  <a href="https://facebook.pl/"><i className="fab fa-facebook-f"></i></a>
                </div>
              </div>
            </div>
          </footer>
        </AnimationWrapper>
      </body>
    </html>
  );
}
