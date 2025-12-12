import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './blog/blog.module.css';
import Menu from "./Menu";
import AnimationWrapper from "./AnimationWrapper";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import NoOrphans from "@/components/NoOrphans";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
        <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-P8RFGTW9'+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P8RFGTW9');`,
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8RFGTW9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <AnimationWrapper>
          <Menu />
          {children}

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-left">
              <Link href="/" className="logo" aria-label="Startseite – Gregor Sloweck">
                <Image
                  src="/images/logo-gregor-slowiaczek.webp"
                  alt="Gregor Sloweck – Logo des Web- und App-Entwicklers"
                  width="768"
                  height="427"
                  loading="lazy"
                />
              </Link>
              <p>© {new Date().getFullYear()} Gregor Sloweck. Alle Rechte vorbehalten.</p>
            </div>

            <div className="footer-center">
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

            <div className="footer-center">
              <ul>
                <li><Link href="/datenschutzerklarung">Datenschutzerklärung</Link></li>
                <li><Link href="/nutzungsbedingungen">Nutzungsbedingungen</Link></li>
              </ul>
            </div>

            <div className="footer-right">
              <p>kontakt@sloweck.de</p>
              <div className="socials">
                <a
                  href="https://facebook.pl/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>

        </AnimationWrapper>
        <NoOrphans />
      </body>
    </html>
  );
}
