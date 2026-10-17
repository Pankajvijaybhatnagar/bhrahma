import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { Book, Rosary } from "./book";
import { Parallax } from "@/components/Motion";
import Photo, { FramedPhoto } from "@/components/Photo";
import { Mosaic } from "@/components/PhotoBlocks";
import { Kalash, Lotus, Mandala, OmSymbol, Swan } from "@/components/Ornaments";

export const metadata: Metadata = { title: "Lord Brahma — The Creator" };

const faces = [
  { veda: "Rig Veda", dir: "East", d: "The Veda of hymns and praise — the oldest voice of creation, offered at sunrise." },
  { veda: "Yajur Veda", dir: "South", d: "The Veda of sacrifice, teaching the right performance of yagya and ritual." },
  { veda: "Sama Veda", dir: "West", d: "The Veda of melody, from which Indian music itself is said to be born." },
  { veda: "Atharva Veda", dir: "North", d: "The Veda of everyday life — healing, protection and the wisdom of the householder." },
];

const attrs = [
  { Svg: Book, t: "The Vedas", d: "Held in one hand, the scriptures are the blueprint of creation and the source of all knowledge." },
  { Svg: Kalash, t: "Kamandalu", d: "The water-pot represents the cosmic waters from which all life emerges." },
  { Svg: Rosary, t: "Akshamala", d: "The rosary marks the passage of cosmic time and the discipline of japa." },
  { Svg: Lotus, t: "Padma", d: "The lotus seat: purity, unfolding and the birth of creation from Vishnu's navel." },
  { Svg: Swan, t: "Hamsa Vahana", d: "The swan that separates milk from water — discrimination between the real and unreal." },
  { Svg: OmSymbol, t: "Saraswati", d: "His Shakti, the goddess of speech and learning, without whom creation cannot begin." },
];

export default function LordBrahma() {
  return (
    <>
      <PageHero crumb="Lord Brahma" images={["brahma-darbar-flowers", "brahma-trimurti-darbar", "brahma-darbar-toran"]} hindi="श्री ब्रह्मा जी" title="Lord Brahma, the Creator" subtitle="Svayambhu, the self-born; Chaturmukha, the four-faced; Pitamaha, grandfather of all beings." />

      <section className="section">
        <div className="container split">
          <div className="reveal" style={{ position: "relative", maxWidth: 520, margin: "0 auto", width: "100%" }}>
            <Mandala style={{ position: "absolute", inset: "-12%", color: "var(--rose)", opacity: 0.22, animation: "spin 120s linear infinite" }} />
            <FramedPhoto id="brahma-white-murti" ratio="4 / 5" position="50% 30%" caption="Chaturmukha Brahma · चतुर्मुख ब्रह्मा" priority />
            <Image src="/logo.png" alt="" width={120} height={120} className="photo-badge" style={{ right: -24, top: -24, width: 120, height: 120, padding: 0 }} />
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Srishti-karta</span>
            <h2>The first of the Trimurti</h2>
            <p className="lead">In the Hindu understanding of the cosmos, the Divine acts through three great forms: Brahma who creates, Vishnu who preserves, and Shiva who dissolves.</p>
            <p className="muted">The Puranas describe how, at the beginning of each cosmic cycle, a lotus rises from the navel of Lord Vishnu as he rests upon the cosmic ocean. Seated within it is Brahma, who meditates deeply and then brings forth the worlds, the gods, the sages and every living being.</p>
            <p className="muted">He is called Hiranyagarbha, the Golden Womb; Prajapati, Lord of creatures; and Vedagarbha, the one from whom the Vedas flow. His day — a kalpa — lasts for 4.32 billion human years.</p>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <SectionHead eyebrow="Chaturmukha" title="The Four Faces">
            Each face gazes in one direction and gives voice to one of the four Vedas — the Creator sees, and speaks to, the whole of existence.
          </SectionHead>
          <div className="grid grid-4">
            {faces.map((f, i) => (
              <div className={`card-dark center reveal d${i + 1}`} key={f.veda}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "var(--gold-bright)", lineHeight: 1 }}>{i + 1}</div>
                <div className="tag tag-gold" style={{ margin: "14px 0", background: "rgba(250,240,190,.12)", color: "var(--gold-cream)" }}>Faces {f.dir}</div>
                <h3>{f.veda}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Iconography" title="What the Lord holds, and why">
            In His four hands and around His form are the tools of creation — each one a lesson for the devotee.
          </SectionHead>
          <div className="grid grid-3">
            {attrs.map(({ Svg, t, d }, i) => (
              <div className={`card corner reveal d${(i % 3) + 1}`} key={t}>
                <div className="card-icon"><Svg /></div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHead eyebrow="Murti Darshan · मूर्ति दर्शन" title="The forms of the Creator in our temple">
            From the white marble mula-murti to the golden and brass utsav murtis that go out in procession.
          </SectionHead>
          <Mosaic
            items={[
              { id: "brahma-trimurti-darbar", span: "w2 h2", caption: "Shri Brahma ji with Maa Saraswati and Maa Savitri" },
              { id: "brahma-golden", span: "h2", caption: "Golden four-faced murti" },
              { id: "brahma-utsav-murti", caption: "Utsav murti in yellow vastra", position: "50% 20%" },
              { id: "brahma-brass", caption: "Brass utsav murti", position: "50% 20%" },
              { id: "saraswati-brass", span: "w2", caption: "Maa Saraswati upon the hamsa", position: "50% 30%" },
              { id: "brahma-darbar-flowers", span: "w2", caption: "The darbar in flower shringar" },
            ]}
          />
        </div>
      </section>

      <section className="photo-band">
        <Parallax className="pb-img"><Photo id="mirror-shrine-5" fill sizes="100vw" /></Parallax>
        <div className="container narrow reveal">
          <span className="eyebrow">Brahma Gayatri</span>
          <p className="deva" style={{ fontSize: "clamp(1.4rem,3vw,2rem)", color: "var(--gold-cream)", lineHeight: 1.9 }}>
            ॐ वेदात्मनाय विद्महे<br />हिरण्यगर्भाय धीमहि<br />तन्नो ब्रह्मा प्रचोदयात् ॥
          </p>
          <p className="serif" style={{ fontStyle: "italic", fontSize: "1.3rem", color: "#f0d4d4" }}>&ldquo;We know Him as the soul of the Vedas; we meditate on the Golden Womb. May Brahma illumine our minds.&rdquo;</p>
          <Link href="/mantras" className="btn btn-gold" style={{ marginTop: 16 }}>More Mantras & Japa Counter</Link>
        </div>
      </section>
    </>
  );
}
