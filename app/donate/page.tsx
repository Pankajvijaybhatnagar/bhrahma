import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import DonateForm from "@/components/DonateForm";
import { Icon } from "@/components/Ornaments";
import Photo from "@/components/Photo";

export const metadata: Metadata = { title: "Donate" };

const uses = [
  { pct: 35, t: "Annadanam", d: "Free meals for every visitor" },
  { pct: 25, t: "Daily Worship", d: "Abhishek, flowers, lamps & priests" },
  { pct: 15, t: "Festivals", d: "Utsav celebrations for the community" },
  { pct: 15, t: "Temple Upkeep", d: "Maintenance & restoration" },
  { pct: 10, t: "Vidya & Gau Seva", d: "Pathshala and gaushala" },
];

export default function Donate() {
  return (
    <>
      <PageHero crumb="Donate" image="temple-night-gate" hindi="दानं परमं धर्मः" title="Support the Temple" subtitle="Your offering keeps the lamps burning, the kitchen open and the Vedas alive for generations to come." />

      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">Make an Offering</span>
            <h2>Every rupee becomes seva</h2>
            <p className="lead">The temple receives no government funding. It is sustained entirely by the love and offerings of devotees like you.</p>

            <div style={{ display: "grid", gap: 18, margin: "34px 0" }}>
              {uses.map((u) => (
                <div key={u.t}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span><strong className="serif" style={{ fontSize: "1.2rem", color: "var(--crimson-deep)" }}>{u.t}</strong> <span className="muted" style={{ fontSize: "1rem" }}>· {u.d}</span></span>
                    <span style={{ fontFamily: "var(--font-display)", color: "var(--crimson)" }}>{u.pct}%</span>
                  </div>
                  <div style={{ height: 8, borderRadius: 8, background: "var(--blush)", overflow: "hidden" }}>
                    <div style={{ width: `${u.pct * 2.5}%`, height: "100%", borderRadius: 8, background: "linear-gradient(90deg,var(--gold),var(--lotus),var(--crimson))" }} />
                  </div>
                </div>
              ))}
            </div>

            <figure className="photo-card" style={{ aspectRatio: "16 / 9", marginBottom: 24 }}>
              <Photo id="mandap-devotees" fill sizes="(max-width: 980px) 100vw, 45vw" />
              <figcaption>Your offering keeps this home of devotion open to all</figcaption>
            </figure>
            <div className="card" style={{ background: "var(--sand)" }}>
              <h3>Bank transfer / UPI</h3>
              <div className="muted" style={{ display: "grid", gap: 4, fontSize: "1.05rem" }}>
                <span><b>Account name:</b> Brahma Mandir Trust</span>
                <span><b>Account no.:</b> 0000 0000 0000</span>
                <span><b>IFSC:</b> XXXX0000000</span>
                <span><b>UPI:</b> brahmamandir@upi</span>
              </div>
              <p className="muted" style={{ fontSize: ".95rem", marginTop: 14, marginBottom: 0 }}>Please email your transfer details to receive an 80G receipt.</p>
            </div>
          </div>
          <div className="reveal d1">
            <DonateForm />
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <SectionHead eyebrow="Our Promise" title="Transparency in every offering" />
          <div className="grid grid-3">
            {[
              { i: <Icon.Check />, t: "80G Tax Benefit", d: "Every donation receives an official receipt eligible for deduction under Section 80G." },
              { i: <Icon.Book />, t: "Annual Reports", d: "Audited accounts are published every year and available at the temple office." },
              { i: <Icon.Heart />, t: "Direct Impact", d: "Your gift goes to worship and service — not to administration or advertising." },
            ].map((x, i) => (
              <div className={`card-dark center reveal d${i + 1}`} key={x.t}>
                <div className="card-icon" style={{ margin: "0 auto 18px" }}>{x.i}</div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
