import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import SevaBooking from "@/components/SevaBooking";

export const metadata: Metadata = { title: "Pujas & Sevas" };

const steps = [
  { n: "1", t: "Choose your seva", d: "Pick from daily pujas, special havans, sanskars or festival sevas." },
  { n: "2", t: "Share your details", d: "Name, gotra and the names to be included in the sankalp." },
  { n: "3", t: "Receive confirmation", d: "Our seva office confirms the date and time on WhatsApp." },
  { n: "4", t: "Receive blessings", d: "Attend in person, or receive the video and prasadam at home." },
];

export default function Sevas() {
  return (
    <>
      <PageHero crumb="Pujas & Sevas" images={["havan-1", "brahma-darbar-toran", "havan-2"]} hindi="पूजा एवं सेवा" title="Pujas & Sevas" subtitle="Offer worship to Lord Brahma in your family's name, performed by Vedic pandits with full shastric vidhi." />

      <section className="section-sm bg-sand">
        <div className="container">
          <div className="grid grid-4">
            {steps.map((s, i) => (
              <div className={`center reveal d${i + 1}`} key={s.n}>
                <div style={{ width: 62, height: 62, margin: "0 auto 14px", borderRadius: "50%", display: "grid", placeItems: "center", background: "linear-gradient(135deg,var(--lotus),var(--crimson))", color: "var(--gold-cream)", fontFamily: "var(--font-display)", fontSize: "1.5rem", boxShadow: "0 0 0 6px var(--blush)" }}>{s.n}</div>
                <h4>{s.t}</h4>
                <p className="muted" style={{ fontSize: "1rem" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Seva List" title="Choose your offering">
            Every seva includes sankalp in your name. Prices shown are suggested offerings and include all puja samagri.
          </SectionHead>
          <SevaBooking />
        </div>
      </section>
    </>
  );
}
