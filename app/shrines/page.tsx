import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { Parallax } from "@/components/Motion";
import Photo, { FramedPhoto } from "@/components/Photo";
import { Mosaic } from "@/components/PhotoBlocks";
import type { PhotoId } from "@/lib/photos";

export const metadata: Metadata = { title: "Shrines · Devi-Devta" };

const shrines: { img: PhotoId; t: string; h: string; d: string; pos?: string }[] = [
  { img: "brahma-golden", t: "Shri Brahma ji", h: "श्री ब्रह्मा जी", d: "The golden four-faced murti, garlanded in marigold and holding the Vedas, the akshamala and the kamandalu." },
  { img: "saraswati-utsav-murti", t: "Mata Brahmani", h: "माता ब्रह्माणी", d: "The Shakti of Lord Brahma upon her swan. The temple was built so that God Brahma and Goddess Brahmani could meet at one place." },
  { img: "mata-rani", t: "Mata Rani", h: "माता रानी", d: "The Divine Mother in red chunri and full shringar, showering protection on every devotee." },
  { img: "mata-durga", t: "Maa Durga", h: "माँ दुर्गा", d: "Worshipped with special fervour during both Navratris, with kanya pujan and jagran." },
  { img: "ganesh-shrine", t: "Shri Ganesh", h: "श्री गणेश", d: "Vighnaharta, remover of obstacles, seated in a shrine of shimmering mirror-work." },
  { img: "shivling", t: "Mahadev", h: "महादेव", d: "The Shiva Linga with its copper kalash, where devotees offer jal and bilva patra every Monday." },
  { img: "nandi-pair", t: "Nandi Maharaj", h: "नंदी महाराज", d: "The golden Nandi pair keeps eternal watch, carrying devotees' wishes to Mahadev." },
  { img: "radha-krishna", t: "Radha-Krishna", h: "राधा-कृष्ण", d: "The divine couple in a jhula of yellow marigolds, adorned afresh for Janmashtami." },
  { img: "jhula", t: "Laddu Gopal", h: "लड्डू गोपाल", d: "Baby Krishna in his decorated swing, rocked lovingly by devotees during kirtan." },
  { img: "devi-shringar-full", t: "Devi in Shringar", h: "देवी श्रृंगार", d: "The Mother Goddess in her full festival shringar of flowers, silk and ornaments.", pos: "50% 25%" },
  { img: "sant-murti-2", t: "The Saints", h: "संत परंपरा", d: "Marble murtis of revered saints in saffron robes line the parikrama, offering blessings." },
  { img: "guru-gaddi-2", t: "Guru Gaddi", h: "गुरु गद्दी", d: "The sacred seat of the Guru, decorated with marigold torans and honoured daily." },
];

export default function Shrines() {
  return (
    <>
      <PageHero crumb="Shrines" images={["mirror-shrine-5", "parikrama-mirror", "darbar-hall"]} hindi="देवी-देवता दर्शन" title="Shrines of the Mandir" subtitle="Around the sanctum of Lord Brahma, every shrine is a doorway to the Divine. Walk the parikrama and receive the darshan of each." />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <FramedPhoto id="brahma-trimurti-darbar" ratio="4 / 3" caption="Garbhagriha · Shri Brahma ji with Mata Brahmani & Mata Gayatri" priority />
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Garbhagriha · <span className="deva">गर्भगृह</span></span>
            <h2>The main sanctum</h2>
            <p className="lead">At the heart of the temple sits the white marble murti of four-faced Lord Brahma, flanked by Mata Brahmani and Mata Gayatri — the only temple where the three are worshipped together.</p>
            <p className="muted">The sanctum is adorned with fresh flowers every morning after abhishek. On festivals, the arch is covered in garlands of marigold and rose, and the Lord is dressed in new vastra and jewellery.</p>
            <Link href="/darshan" className="btn btn-primary" style={{ marginTop: 10 }}>Darshan Timings</Link>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHead eyebrow="Parikrama · परिक्रमा" title="The Devi-Devta of the temple">
            Take darshan of each deity as you walk clockwise around the sanctum.
          </SectionHead>
          <div className="grid grid-3">
            {shrines.map((s, i) => (
              <article key={s.t} className={`card shrine-card reveal d${(i % 3) + 1}`}>
                <div className="pc-img tall"><Photo id={s.img} fill position={s.pos ?? "50% 35%"} sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw" /></div>
                <div className="sc-body">
                  <h3>{s.t}</h3>
                  <div className="deva">{s.h}</div>
                  <p style={{ margin: 0 }}>{s.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Sheesh Mahal · शीश महल" title="The mirror-work shrines">
            Thousands of tiny mirrors and painted tiles turn the parikrama into a jewel box that sparkles in the light of every diya.
          </SectionHead>
          <Mosaic
            items={[
              { id: "parikrama-mirror", span: "w2 h2" },
              { id: "mirror-shrine-2", span: "h2" },
              { id: "mirror-shrine-3", span: "h2" },
              { id: "mirror-shrine-6", span: "w2" },
              { id: "mirror-shrine-1" },
              { id: "ram-darbar" },
              { id: "brahma-darbar-toran", span: "w2" },
              { id: "devi-yellow" },
              { id: "mata-side" },
            ]}
          />
        </div>
      </section>

      <section className="photo-band">
        <Parallax className="pb-img"><Photo id="utsav-murtis" fill sizes="100vw" /></Parallax>
        <div className="container narrow reveal">
          <span className="eyebrow">Utsav Murtis</span>
          <h2>The Lord goes out to meet His devotees</h2>
          <p className="serif" style={{ fontSize: "1.3rem", color: "#f0d4d4" }}>On festival days the brass utsav murtis of Lord Brahma, Mata Brahmani and Mata Gayatri are dressed in yellow and carried through the town in the shobha yatra.</p>
          <Link href="/festivals" className="btn btn-gold" style={{ marginTop: 14 }}>Festivals of the Year</Link>
        </div>
      </section>
    </>
  );
}
