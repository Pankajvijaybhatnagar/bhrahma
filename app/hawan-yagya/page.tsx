import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Photo, { FramedPhoto } from "@/components/Photo";
import { Mosaic } from "@/components/PhotoBlocks";
import { Parallax } from "@/components/Motion";
import { Diya, Icon } from "@/components/Ornaments";

export const metadata: Metadata = { title: "Hawan Yagya · Onkar Mahayagya" };

// Text from brahmamandir.com/hawan-yagya (lightly edited for spelling)
const blessings = [
  { icon: <Icon.Heart />, t: "Contentment", d: "Onkar Mahayagya empowers with the true wealth of satisfaction and contentment." },
  { icon: <Icon.Check />, t: "Wishes fulfilled", d: "Anyone who selflessly participates in the Mahayagya is always blessed, and all their desires and wishes are duly met." },
  { icon: <Icon.Flame />, t: "Fruit of all pilgrimages", d: "Going round the Onkar Mahayagya Mandap with sincerity and faith brings the merit of visiting all the pilgrimages." },
  { icon: <Icon.Users />, t: "Generations blessed", d: "Whoever joins the Onkar Aarti, or even witnesses the rituals with faith, is blessed with wisdom, health and confidence — and all generations to come are blessed with good health and safety." },
];

export default function HawanYagya() {
  return (
    <>
      <PageHero
        crumb="Hawan Yagya"
        images={["havan-1", "havan-2", "pushp-arpan"]}
        hindi="ओंकार महायज्ञ"
        title="Hawan Yagya"
        subtitle="Onkar Mahayagya — one of the best and most pious karmas for reaching the formless lord of lords, Shri Onkar Bhagwan."
      />

      <section className="section">
        <div className="container split">
          <div className="photo-pair reveal">
            <div className="pp-main"><FramedPhoto id="havan-1" ratio="4 / 5" caption="ओंकार महायज्ञ" /></div>
            <div className="pp-small"><figure className="photo-card" style={{ aspectRatio: "1" }}><Photo id="pushp-arpan" fill sizes="25vw" /></figure></div>
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Onkar Mahayagya · <span className="deva">ओंकार महायज्ञ</span></span>
            <h2>The yagya that preceded creation</h2>
            <p className="lead">
              Onkar Mahayagya is one of the best and most pious karmas, helping us reach out to the formless lord of lords — Shri Onkar Bhagwan.
            </p>
            <p className="muted">
              Lord Brahma too, before beginning the creation of the earth, initiated the Onkar Mahayagya.
            </p>
            <p className="muted">
              The yagya of Onkar Bhagwan, performed by reciting the Jai Gurudev Jai Onkar Mahamantra, is the most supreme prayer of Lord Onkara.
            </p>
            <div className="card corner center" style={{ marginTop: 26 }}>
              <div className="deva" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--crimson)" }}>जय गुरुदेव · जय ओंकार</div>
              <p style={{ margin: "6px 0 0" }}>The Mahamantra of the Onkar Mahayagya</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHead eyebrow="Phal · फल" title="Blessings of the Mahayagya">
            Participating selflessly, or even witnessing the rituals with faith and devotion, brings these blessings.
          </SectionHead>
          <div className="grid grid-4">
            {blessings.map((b, i) => (
              <div className={`card corner center reveal d${i + 1}`} key={b.t}>
                <div className="card-icon" style={{ margin: "0 auto 20px" }}>{b.icon}</div>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="photo-band">
        <Parallax className="pb-img"><Photo id="havan-2" fill sizes="100vw" /></Parallax>
        <div className="container narrow center reveal">
          <Diya style={{ width: 90, margin: "0 auto 18px", color: "var(--gold)" }} />
          <p className="deva" style={{ fontSize: "clamp(1.4rem,3vw,2rem)", color: "var(--gold-cream)", lineHeight: 1.9 }}>
            ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम् ।<br />ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ॥
          </p>
          <p className="serif" style={{ fontStyle: "italic", fontSize: "1.3rem", color: "#f0d4d4" }}>
            &ldquo;The offering is Brahman, the oblation is Brahman, poured by Brahman into the fire of Brahman.&rdquo; — Bhagavad Gita 4.24
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Jhalak · झलक" title="Hawan at the Mandir">
            Devotees and acharyas offering ahuti into the sacred fire.
          </SectionHead>
          <Mosaic
            items={[
              { id: "havan-1", span: "w2 h2" },
              { id: "havan-3", span: "w2" },
              { id: "pushp-arpan", span: "h2" },
              { id: "havan-2" },
              { id: "gurumaa-guruji-garlands", span: "w2" },
            ]}
          />
          <div className="center" style={{ marginTop: 40 }}>
            <Link href="/sevas" className="btn btn-primary">Book a Havan Seva</Link>
          </div>
        </div>
      </section>
    </>
  );
}
