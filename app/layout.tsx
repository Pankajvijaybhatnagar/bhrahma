import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, EB_Garamond, Tiro_Devanagari_Sanskrit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/Reveal";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";
import "./photos.css";
import "./chrome.css";
import "./visible.css";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-cinzel", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--f-cormorant", display: "swap" });
const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400", "500"], variable: "--f-garamond", display: "swap" });
const deva = Tiro_Devanagari_Sanskrit({ subsets: ["devanagari", "latin"], weight: "400", variable: "--f-deva", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://brahmamandir.com"),
  title: { default: "जय गुरुदेव · जय ओंकार — Bhagwan Shri Brahma Mandir, Kurukshetra", template: "%s · Brahma Mandir" },
  description:
    "Bhagwan Shri Brahma Mandir, Kurukshetra — a sacred temple of Lord Brahma, the Creator, blessed by Pujya Guruji, Guru Maa and Swami Sandeep Onkar ji. Darshan timings, aarti, pujas & sevas, festivals, live darshan, annadanam and donations.",
  keywords: ["Brahma Mandir", "Lord Brahma temple", "darshan timings", "aarti", "puja booking", "Kartik Purnima", "Hindu temple"],
  openGraph: { title: "Brahma Mandir", description: "Abode of the Creator · Seat of the Vedas", images: ["/logo.png"] },
};

export const viewport: Viewport = { themeColor: "#7d0019" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${garamond.variable} ${deva.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
        <SiteChrome />
      </body>
    </html>
  );
}
