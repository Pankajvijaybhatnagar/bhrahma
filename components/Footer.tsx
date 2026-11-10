import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/data";
import { Icon, Mandala, SocialIcon } from "./Ornaments";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="footer">
      <Mandala className="f-mandala" />
      <div className="container">
        <p className="shloka-line">सर्वे भवन्तु सुखिनः · सर्वे सन्तु निरामयाः</p>
        <div className="footer-top">
          <div className="f-brand">
            <Image src="/logo.png" alt="Brahma Mandir" width={192} height={192} />
            <p>The only temple where Lord Brahma is worshipped along with Mata Brahmani and Gayatri Mata. Just recite Brahma and experience Brahma.</p>
            <div className="socials">
              {site.socials.map((s) => {
                const Ico = SocialIcon[s.label];
                return (
                  <a key={s.label} href={s.href} aria-label={s.label}>
                    <Ico />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4>Brahma Mandir</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/brahmaji">Brahmaji</Link></li>
              <li><Link href="/rath-yatra">Rath Yatra</Link></li>
              <li><Link href="/guruji-maharaj">Guruji Maharaj</Link></li>
              <li><Link href="/onkar-ashram">Onkar Ashram</Link></li>
              <li><Link href="/hawan-yagya">Hawan Yagya</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Devotees</h4>
            <ul>
              <li><Link href="/darshan">Darshan Timings</Link></li>
              <li><Link href="/live">Live Darshan</Link></li>
              <li><Link href="/sevas">Pujas & Sevas</Link></li>
              <li><Link href="/festivals">Festivals</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/mantras">Mantras</Link></li>
              <li><Link href="/volunteer">Volunteer</Link></li>
              <li><Link href="/shrines">Shrines</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4>Visit Us</h4>
            <div className="info-list" style={{ gap: 14 }}>
              <div style={{ display: "flex", gap: 12 }}><Icon.Pin className="" /><span>{site.address}<br />{site.city}</span></div>
              <div style={{ display: "flex", gap: 12 }}><Icon.Phone /><a href={site.phoneHref}>{site.phone}</a></div>
              <div style={{ display: "flex", gap: 12 }}><Icon.Mail /><a href={`mailto:${site.email}`}>{site.email}</a></div>
            </div>
            <h4 style={{ marginTop: 28, marginBottom: 6 }}>Daily Panchang & News</h4>
            <NewsletterForm />
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name} Trust. All rights reserved.</span>
          <span>
            <Link href="/donate">Donate</Link> · <Link href="/contact">Contact</Link> · <Link href="/visit">Plan a Visit</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
