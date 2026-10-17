import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Countdown from "@/components/Countdown";
import { Lotus, Mandala } from "@/components/Ornaments";
import Photo from "@/components/Photo";
import { Mosaic } from "@/components/PhotoBlocks";
import { festivals } from "@/lib/data";
import { fmtDate, upcomingFestivals } from "@/lib/time";

export const metadata: Metadata = { title: "Festivals" };
export const revalidate = 3600;

export default function Festivals() {
  const next = upcomingFestivals()[0] ?? festivals[0];
  return (
    <>
      <PageHero crumb="Festivals" images={["temple-night-celebration", "jai-onkar-yatra", "shobha-yatra-2", "kalash-yatra"]} hindi="उत्सव एवं पर्व" title="Sacred Festivals" subtitle="Through the turning year, the temple comes alive with lamps, music, processions and prasadam." />

      <section className="section-sm">
        <div className="container">
          <div className="cta-band bg-crimson reveal">
            <Mandala className="cta-mandala" />
            <div style={{ position: "relative" }}>
              <span className="eyebrow">Coming next · {fmtDate(next.date)}</span>
              <h2 style={{ marginBottom: 4 }}>{next.name}</h2>
              <div className="deva" style={{ color: "var(--gold-bright)", fontSize: "1.3rem", marginBottom: 16 }}>{next.hindi}</div>
              <p>{next.desc}</p>
              <Countdown to={next.date} />
            </div>
            <div style={{ position: "relative", textAlign: "center" }}>
              <figure className="photo-card" style={{ aspectRatio: "4 / 3" }}><Photo id={next.image} fill sizes="(max-width: 980px) 100vw, 40vw" /></figure>
              <Link href="/sevas" className="btn btn-gold" style={{ marginTop: 16 }}>Book Festival Seva</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Utsav Calendar" title="Festivals of the year">
            Dates follow the Hindu panchang and may shift by a day. Please confirm with the temple office before travelling.
          </SectionHead>
          <div className="grid grid-3">
            {festivals.map((f, i) => (
              <article key={f.name} className={`card festival-card reveal d${(i % 3) + 1}`}>
                <div className="pc-img" style={{ aspectRatio: "16 / 10" }}><Photo id={f.image} fill sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw" /></div>
                <div className="fc-top">
                  <Lotus className="motif" />
                  <div className="fc-date">
                    <b>{fmtDate(f.date, { day: "numeric" })}</b>
                    <span>{fmtDate(f.date, { month: "long", year: "numeric" })}</span>
                  </div>
                  <h3>{f.name}</h3>
                  <div className="deva">{f.hindi}</div>
                </div>
                <div className="fc-body">
                  <div className="tags" style={{ marginBottom: 12 }}>
                    <span className="tag tag-gold">{f.month}</span>
                    {f.highlight && <span className="tag">Major Utsav</span>}
                  </div>
                  <p className="muted">{f.desc}</p>
                  <ul style={{ margin: 0, paddingLeft: 18, color: "var(--ink-soft)", fontSize: "1rem" }}>
                    {f.rituals.map((r) => <li key={r}>{r}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-dark">
        <div className="container">
          <SectionHead eyebrow="Utsav Jhalak · उत्सव झलक" title="Celebrations at the Mandir">
            Shobha yatras on flower chariots, kalash yatras, deepotsav nights and fireworks over the shikhara.
          </SectionHead>
          <Mosaic
            items={[
              { id: "shobha-yatra", span: "w2 h2" },
              { id: "fireworks-1", span: "h2" },
              { id: "temple-night-gate", span: "h2" },
              { id: "shobha-yatra-2", span: "w2" },
              { id: "kalash-yatra" },
              { id: "utsav-gate" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
