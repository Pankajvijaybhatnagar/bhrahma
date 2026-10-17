import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { Parallax } from "@/components/Motion";
import Photo, { FramedPhoto } from "@/components/Photo";
import { Mosaic } from "@/components/PhotoBlocks";
import { Mandala } from "@/components/Ornaments";
import type { PhotoId } from "@/lib/photos";

export const metadata: Metadata = { title: "Temple Architecture" };

const parts: { n: string; t: string; h: string; d: string; img: PhotoId }[] = [
  { n: "01", t: "Shikhara", h: "शिखर", img: "shikhara-drapes", d: "The soaring spire above the sanctum represents Mount Meru, the axis of the universe. Its kalash crown marks the point where earth meets heaven." },
  { n: "02", t: "Garbhagriha", h: "गर्भगृह", img: "sanctum-arch", d: "The 'womb chamber' — small, still and sacred — houses the murti of Lord Brahma. Here, as in the cosmic womb, creation begins." },
  { n: "03", t: "Antarala", h: "अंतराल", img: "sanctum-garlands", d: "The vestibule between sanctum and hall, where the devotee pauses beneath the garlands before entering the Lord's presence." },
  { n: "04", t: "Mandapa", h: "मंडप", img: "carved-mandap", d: "The pillared hall for bhajan, satsang and gathering. Its white carved columns frame the shrines of the parikrama." },
  { n: "05", t: "Devakoshtha", h: "देवकोष्ठ", img: "carved-pillars", d: "Carved niches along the walls hold the murtis of saints and deities, each a stop on the devotee's journey." },
  { n: "06", t: "Pradakshina Path", h: "प्रदक्षिणा पथ", img: "parikrama-hall", d: "The covered path around the sanctum, lined with jewel-like mirror-work shrines, walked clockwise in devotion." },
];

export default function Architecture() {
  return (
    <>
      <PageHero crumb="Architecture" image="temple-street" hindi="वास्तु एवं शिल्प" title="The Sacred Architecture" subtitle="A Hindu temple is a map of the universe. Walk through it, and you journey from the world to the Divine." />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Vastu Purusha Mandala</span>
            <h2>Built on sacred geometry</h2>
            <p className="lead">Every temple is laid out on the Vastu Purusha Mandala — a square grid in which each cell belongs to a deity, with Brahma himself at the very centre.</p>
            <p className="muted">In Vastu Shastra the central square, the Brahmasthana, is the most sacred space in any building: the point from which the whole structure radiates. In a temple of Lord Brahma, the Creator literally sits at the heart of his own creation.</p>
            <p className="muted">The path of parikrama moves clockwise, keeping the Lord always on the devotee&apos;s right, and the white shikhara with its saffron dhwaja can be seen from far across the town.</p>
          </div>
          <div className="reveal d2" style={{ position: "relative" }}>
            <FramedPhoto id="temple-day-shikhara" ratio="4 / 5" position="50% 40%" caption="The shikhara and dhwaja" />
            <Mandala style={{ position: "absolute", width: 200, right: -50, bottom: -50, color: "var(--gold)", opacity: 0.5, animation: "spin 90s linear infinite" }} />
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHead eyebrow="Anatomy of the Temple" title="From the gate to the sanctum" />
          <div className="grid grid-3">
            {parts.map((p, i) => (
              <article className={`card shrine-card reveal d${(i % 3) + 1}`} key={p.t}>
                <div className="pc-img"><Photo id={p.img} fill sizes="(max-width: 980px) 100vw, 33vw" /></div>
                <div className="sc-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", color: "var(--blush)", WebkitTextStroke: "1px var(--rose)" }}>{p.n}</span>
                    <span className="deva" style={{ color: "var(--rose)" }}>{p.h}</span>
                  </div>
                  <h3>{p.t}</h3>
                  <p style={{ margin: 0 }}>{p.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Shringar of the Mandir" title="Dressed for every utsav">
            On festival days the whole temple is wrapped in silk drapes, marigold torans and lights — from the shikhara down to the sanctum door.
          </SectionHead>
          <Mosaic
            items={[
              { id: "temple-utsav-wide", span: "w2 h2" },
              { id: "shikhara-drapes", span: "h2" },
              { id: "marigold-canopy", span: "h2" },
              { id: "temple-gate", span: "w2" },
              { id: "canopy" },
              { id: "sanctum-bell" },
            ]}
          />
        </div>
      </section>

      <section className="photo-band">
        <Parallax className="pb-img"><Photo id="temple-night-lights" fill sizes="100vw" /></Parallax>
        <div className="container narrow reveal">
          <span className="eyebrow">Parikrama</span>
          <h2>Walking the path of devotion</h2>
          <p className="serif" style={{ fontSize: "1.3rem", color: "#f0d4d4" }}>Before or after darshan, devotees walk clockwise around the sanctum — a practice called pradakshina. Moving around the deity, we acknowledge that God is the centre of our lives, just as the sun is the centre around which the planets move.</p>
          <p className="serif" style={{ fontSize: "1.15rem", color: "#e3c6c6" }}>Walk slowly, chant softly, and complete an odd number of rounds — one, three or seven — as tradition recommends.</p>
        </div>
      </section>
    </>
  );
}
