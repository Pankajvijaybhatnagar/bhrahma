import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Photo, { FramedPhoto } from "@/components/Photo";
import { Mosaic } from "@/components/PhotoBlocks";
import { Parallax } from "@/components/Motion";
import Countdown from "@/components/Countdown";
import { festivals } from "@/lib/data";
import { fmtDate } from "@/lib/time";
import { Lotus } from "@/components/Ornaments";

export const metadata: Metadata = { title: "Brahma Rath Yatra · Kartik Purnima, Kurukshetra" };

// Text from brahmamandir.com/rath-yatra (lightly edited for spelling)
const facts = [
  { v: "2002", l: "First Brahma Rath Yatra" },
  { v: "Kartik Purnima", l: "Held every year" },
  { v: "81,000", l: "Verses of the Skanda Purana" },
  { v: "3", l: "Murtis on the only such chariot" },
];

export default function RathYatra() {
  const kartik = festivals.find((f) => f.name.startsWith("Kartik Purnima"));
  return (
    <>
      <PageHero
        crumb="Rath Yatra"
        images={["shobha-yatra", "jai-onkar-yatra", "shobha-yatra-3", "temple-street"]}
        hindi="ब्रह्म रथ यात्रा"
        title="Brahma Rath Yatra"
        subtitle="Brahma — whose mere name is enough to give eternal contentment."
      />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Kurukshetra · <span className="deva">कुरुक्षेत्र</span></span>
            <h2>A holy journey in honour of Lord Brahma</h2>
            <p className="lead">
              Brahma, who is self-born, formed the universe — and the world in which we live is Brahma&apos;s most beloved place; therefore he illuminates himself in many forms. Brahma is around us, in us, and present in every single particle, whether we can see it or not.
            </p>
            <p className="muted">
              In the year 2002, Jai Onkar Antarrashtriya Sevaashram Sangh initiated the Brahma Rath Yatra by the celestial command of Onkar Shakti, in the land of Kurukshetra. This short journey through the city has ancient relevance and great significance for humanity. Many gods and goddesses crave to take part in this Yatra, and desire to take birth on earth to partake in this holy journey.
            </p>
            <p className="muted">
              This unique tour, organised in honour of the sanctity of Lord Brahma, is popularly known as the Brahma Rath Yatra. The city tour is an attempt to reignite the spark of knowledge and devotion in the people. The institution is a very old one — in fact, it was celebrated ages ago.
            </p>
          </div>
          <div className="photo-pair reveal d1">
            <div className="pp-main"><FramedPhoto id="utsav-murtis" ratio="4 / 5" caption="Brahma ji, Mata Brahmani & Mata Gayatri" /></div>
            <div className="pp-small"><figure className="photo-card" style={{ aspectRatio: "1" }}><Photo id="dhwaja" fill sizes="25vw" /></figure></div>
          </div>
        </div>
      </section>

      <section className="section-sm bg-sand">
        <div className="container">
          <div className="stats" style={{ color: "var(--crimson-deep)" }}>
            {facts.map((f) => (
              <div className="stat reveal" key={f.l}><strong style={{ color: "var(--crimson)" }}>{f.v}</strong><span style={{ color: "var(--ink-soft)" }}>{f.l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container split">
          <div className="reveal">
            <FramedPhoto id="kalash-yatra" ratio="4 / 3" caption="Kalash prepared for the yatra" />
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Skanda Purana · <span className="deva">स्कन्द पुराण</span></span>
            <h2>The oldest of customs</h2>
            <p className="lead" style={{ color: "#ecd0d0" }}>
              The tale of Brahma&apos;s tour is one of the oldest customs; its description is found in the Epics, the Vedas and the Puranas.
            </p>
            <p style={{ color: "#e3c6c6" }}>
              The Skanda Purana is a collection of over 81,000 verses, titled after Skanda — the son of Shiva and Parvati, also known as Kartikeya and Murugan. It is an important ancient record that influences Hindu traditions related to the war-god Skanda.
            </p>
            <p style={{ color: "#e3c6c6" }}>
              According to the Skanda Purana, one who takes part in this holy tour gets respite from misdeeds of ages past. One who attends it and makes a revolution of the holy city receives a blessing equal to that of the Ashvamedha Yagya.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Kartik Purnima · <span className="deva">कार्तिक पूर्णिमा</span></span>
            <h2>The only chariot of its kind in the world</h2>
            <p className="lead">
              A beautiful chariot of Lord Brahma starts from one end of the city and completes its journey at the Brahma temple in Kurukshetra, every year on the occasion of Kartik Purnima.
            </p>
            <p className="muted">
              The custom is celebrated with great pomp and show, and thousands of devotees, including local residents, witness the charm of this holy tour. Thousands of hands pull the chariot with great devotion and joy.
            </p>
            <p className="muted">
              The gorgeous chariot of Lord Brahma is the only chariot in the world that carries the idol of Lord Brahma along with Goddess Brahmani and Goddess Gayatri. Natives and devotees wait a whole year merely for a sight of Brahma&apos;s divine family. A mere glimpse is enough to give eternal contentment and freedom from maladies, and a huge mass of devotees now take humble pride in making this historic event a sacred service.
            </p>
            <div className="btn-row" style={{ marginTop: 10 }}>
              <Link href="/festivals" className="btn btn-primary">Festival Calendar</Link>
              <Link href="/volunteer" className="btn btn-outline">Serve at the Yatra</Link>
            </div>
          </div>
          <div className="grid grid-2 reveal d1" style={{ gap: 14 }}>
            <figure className="photo-card" style={{ aspectRatio: "3 / 4" }}><Photo id="brahma-utsav-murti" fill sizes="25vw" position="50% 20%" /><figcaption>Brahma ji</figcaption></figure>
            <figure className="photo-card" style={{ aspectRatio: "3 / 4" }}><Photo id="saraswati-utsav-murti" fill sizes="25vw" position="50% 25%" /><figcaption>Mata Brahmani</figcaption></figure>
            <figure className="photo-card" style={{ gridColumn: "1 / -1", aspectRatio: "16 / 10" }}><Photo id="devi-utsav-murti" fill sizes="45vw" position="50% 25%" /><figcaption>Mata Gayatri</figcaption></figure>
          </div>
        </div>
      </section>

      {kartik && (
        <section className="section-sm" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta-band bg-crimson reveal">
              <div style={{ position: "relative" }}>
                <span className="eyebrow">Next Rath Yatra · {fmtDate(kartik.date)}</span>
                <h2 style={{ marginBottom: 6 }}>{kartik.name}</h2>
                <div className="deva" style={{ color: "var(--gold-bright)", fontSize: "1.3rem", marginBottom: 14 }}>{kartik.hindi}</div>
                <p>Join thousands of devotees in pulling the chariot of Lord Brahma, Mata Brahmani and Mata Gayatri through Kurukshetra.</p>
                <Countdown to={kartik.date} />
              </div>
              <figure className="photo-card" style={{ aspectRatio: "16 / 10", position: "relative" }}>
                <Photo id="shobha-yatra-2" fill sizes="(max-width: 980px) 100vw, 40vw" />
              </figure>
            </div>
          </div>
        </section>
      )}

      <section className="photo-band">
        <Parallax className="pb-img"><Photo id="jai-onkar-yatra" fill sizes="100vw" /></Parallax>
        <div className="container narrow center reveal">
          <Lotus style={{ width: 110, margin: "0 auto 18px", color: "var(--gold-bright)" }} />
          <h2>&ldquo;A mere glimpse is enough to give eternal contentment.&rdquo;</h2>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Jhalak · झलक" title="Glimpses of the Yatra">
            The flower chariot, the Guru Parivar, the dhwajas and the kalash — moments from the yatra through Kurukshetra.
          </SectionHead>
          <Mosaic
            items={[
              { id: "shobha-yatra", span: "w2 h2" },
              { id: "shobha-yatra-3", span: "w2" },
              { id: "utsav-murtis" },
              { id: "dhwaja" },
              { id: "jai-onkar-yatra", span: "w2" },
              { id: "kalash-yatra", span: "w2" },
              { id: "temple-street", span: "w2" },
              { id: "temple-gate", span: "w2" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
