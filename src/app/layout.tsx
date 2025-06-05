import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './blog/blog.css';
import Menu from "./Menu";
import AnimationWrapper from "./AnimationWrapper"; // ⬅️ dodane

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
                <a href="/" className="logo" aria-label="Strona główna – Grzegorz Słowiaczek">
                  <img src="/images/logo-grzegorz-slowiaczek.webp" alt="Grzegorz Słowiaczek – logo twórcy stron i aplikacji" width="768" height="427" loading="lazy"/>
                </a>
                <p>© {new Date().getFullYear()} Grzegorz Słowiaczek. Wszelkie prawa zastrzeżone.</p>
              </div>

              <div className="footer-center">
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

              <div className="footer-center">
                <ul>
                  <li><a href="/polityka-prywatnosci">Polityka prywatności</a></li>
                  <li><a href="/regulamin">Regulamin</a></li>
                </ul>
              </div>

              <div className="footer-right">
                <p>kontakt@slowiaczek.pl</p>
                <p>+48 883 081 448</p>
                <div className="socials">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </footer>
        </AnimationWrapper>
      </body>
    </html>
  );
}
