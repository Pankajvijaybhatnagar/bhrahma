import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { Icon } from "@/components/Ornaments";
import { site } from "@/lib/data";
import { Mosaic } from "@/components/PhotoBlocks";

export const metadata: Metadata = { title: "Plan Your Visit" };

const reach = [
  { i: <Icon.Plane />, t: "By Air", d: "The nearest major airport is about 2–3 hours away by road. Pre-paid taxis and app cabs are available from the airport." },
  { i: <Icon.Train />, t: "By Train", d: "The city railway station is well connected to Delhi and other major cities. The temple is a short auto-rickshaw ride away." },
  { i: <Icon.Car />, t: "By Road", d: "Well connected by national highway. State and private buses run frequently. Free parking is available beside the temple." },
];

const etiquette = [
  { i: <Icon.Shirt />, t: "Dress modestly", d: "Traditional or modest attire covering shoulders and knees. Free stoles at the entrance." },
  { i: <Icon.Shoe />, t: "Remove footwear", d: "Leave shoes at the free footwear counter before entering the temple complex." },
  { i: <Icon.Camera />, t: "No photos in sanctum", d: "Photography is welcome in the courtyard, but not inside the garbhagriha." },
  { i: <Icon.Bell />, t: "Keep silence", d: "Phones on silent, speak softly and let others enjoy their darshan peacefully." },
  { i: <Icon.Bowl />, t: "Accept prasad", d: "Receive prasad with the right hand and never leave it on the floor." },
  { i: <Icon.Hands />, t: "Walk clockwise", d: "Perform parikrama keeping the sanctum on your right side." },
];

const facilities = ["Free footwear stand", "Cloakroom & lockers", "Drinking water (RO)", "Clean washrooms", "Wheelchairs & ramps", "First-aid room", "Dharamshala rooms", "Prasad counter", "Free parking", "Baby-care room"];

export default function Visit() {
  return (
    <>
      <PageHero crumb="Plan Your Visit" images={["temple-street", "temple-utsav-wide", "temple-night-gate"]} hindi="दर्शन यात्रा" title="Plan Your Visit" subtitle="A short guide for pilgrims and first-time visitors, so your darshan is calm, comfortable and complete." />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="How to Reach" title="Getting to the Mandir">{site.address}, {site.city}</SectionHead>
          <div className="grid grid-3">
            {reach.map((r, i) => (
              <div className={`card corner reveal d${i + 1}`} key={r.t}>
                <div className="card-icon">{r.i}</div>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <Mosaic
            items={[
              { id: "temple-utsav-day", span: "w2 h2", caption: "The temple on festival day" },
              { id: "temple-gate", caption: "The main gateway" },
              { id: "temple-signboard", span: "h2", caption: "Bhagwan Shri Brahma Mandir, Kurukshetra" },
              { id: "mandap-devotees", caption: "Darshan in the main hall" },
            ]}
          />
        </div>
      </section>

      <section className="section bg-sand bg-pattern">
        <div className="container">
          <SectionHead eyebrow="Temple Etiquette" title="Before you enter">
            Small acts of respect make the temple a peaceful place for everyone.
          </SectionHead>
          <div className="grid grid-3">
            {etiquette.map((e, i) => (
              <div className={`card reveal d${(i % 3) + 1}`} key={e.t} style={{ display: "flex", gap: 18 }}>
                <div className="card-icon" style={{ flexShrink: 0, width: 56, height: 56, margin: 0 }}>{e.i}</div>
                <div><h4 style={{ marginBottom: 6 }}>{e.t}</h4><p style={{ margin: 0 }}>{e.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Best Time to Visit</span>
            <h2>When to come</h2>
            <p className="lead">For the most peaceful darshan, arrive for Mangala aarti at 5:00 AM or in the afternoon after 4:00 PM on weekdays.</p>
            <p className="muted">October to March offers the most pleasant weather. Kartik month (October–November) is the most auspicious time of the year, with the Brahmotsav and Kartik Purnima drawing large crowds — plan and book accommodation early.</p>
            <h3 style={{ marginTop: 30 }}>Facilities for devotees</h3>
            <div className="tags" style={{ marginTop: 14 }}>
              {facilities.map((f) => <span className="tag" key={f}>{f}</span>)}
            </div>
          </div>
          <div className="reveal d1">
            <iframe className="map" src={site.mapEmbed} loading="lazy" title="Temple location" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container center reveal">
          <h2>Need help planning?</h2>
          <p className="lead" style={{ maxWidth: 620, margin: "0 auto 28px" }}>Call the temple office for accommodation, group visits or assistance for elderly devotees.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <a href={site.phoneHref} className="btn btn-primary"><Icon.Phone className="" /> {site.phone}</a>
            <Link href="/faq" className="btn btn-outline">Read FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
