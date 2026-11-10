import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { Parallax } from "@/components/Motion";
import Photo, { FramedPhoto } from "@/components/Photo";
import { Mosaic } from "@/components/PhotoBlocks";
import { Diya, Lotus, Mandala, Swan } from "@/components/Ornaments";

export const metadata: Metadata = { title: "Brahma Ji — The Creator" };

// Text from brahmamandir.com/brahmaji (lightly edited for spelling)
const names = [
  { n: "Prajapati", h: "प्रजापति", d: "Lord of creatures — all beings are his progeny." },
  { n: "Pitamaha", h: "पितामह", d: "The patriarch, grandfather of all." },
  { n: "Vidhi", h: "विधि", d: "The ordainer of all that is." },
  { n: "Lokesha", h: "लोकेश", d: "Master of the universe." },
  { n: "Dhatri", h: "धातृ", d: "The sustainer." },
  { n: "Vishwakarma", h: "विश्वकर्मा", d: "Architect of the world." },
];

const vedas = [
  { veda: "Rigveda", h: "ऋग्वेद" },
  { veda: "Yajurveda", h: "यजुर्वेद" },
  { veda: "Samaveda", h: "सामवेद" },
  { veda: "Atharvaveda", h: "अथर्ववेद" },
];

const symbols = [
  {
    Svg: Lotus,
    t: "The Lotus",
    d: "The lotus symbolises the supreme reality — never lose your beauty and wisdom, even if you are born in a low status. It is the symbol of purity, and omnipresent Brahma is found seated upon it: purity is the throne of the larger-than-life God Brahma. He represents the creative power.",
  },
  {
    Svg: Diya,
    t: "The Colour White",
    d: "White symbolises purity. Brahma wearing white clothes depicts purity in life and in karma.",
  },
  {
    Svg: Swan,
    t: "The Swan · Hamsa",
    d: "Every God and Goddess has a vaahan, and the Honourable Lord has the swan — the most chaste of birds, which can distinguish pure milk from adulterated milk. It conveys that omnipotent Brahma always brings forth the purity of his followers and never prefers any impurity in his votaries.",
  },
];

export default function Brahmaji() {
  return (
    <>
      <PageHero
        crumb="Brahma Ji"
        images={["brahma-trimurti-darbar", "brahma-darbar-flowers", "brahma-darbar-toran"]}
        hindi="श्री ब्रह्मा जी"
        title="Brahma Ji"
        subtitle="A power that creates everything in this world — from wind to water, from soil to mountains, from man to minerals."
      />

      <section className="section">
        <div className="container split">
          <div className="reveal" style={{ position: "relative", maxWidth: 520, margin: "0 auto", width: "100%" }}>
            <Mandala style={{ position: "absolute", inset: "-12%", color: "var(--rose)", opacity: 0.22, animation: "spin 120s linear infinite" }} />
            <FramedPhoto id="brahma-white-murti" ratio="4 / 5" position="50% 30%" caption="Chaturmukha Brahma · चतुर्मुख ब्रह्मा" priority />
            <Image src="/logo.png" alt="" width={120} height={120} className="photo-badge" style={{ right: -24, top: -24, width: 120, height: 120, padding: 0 }} />
          </div>
          <div className="reveal d1">
            <span className="eyebrow">The Omnipresent</span>
            <h2>The Creator, who exists everywhere</h2>
            <p className="lead">
              Everything that we see around us is a creation of God or of the followers of God. This platform does not debate the existence of God, but speaks of the God who exists everywhere — therefore we call Him Omnipresent.
            </p>
            <p className="muted">
              The very first letter of the word God is &lsquo;G&rsquo;, which stands for the creator. One who generates or creates always stands first in the world; thus we revere our parents and ancestors before everything. Similarly, the divine, omnipotent power that has created the entire universe should be revered before everyone and everything.
            </p>
            <p className="muted">
              Hindus revere the three prime Lords — Brahma, Vishnu and Shiva. Lord Brahma is the first among the three, because as per the Hindu epics he is the generator of humankind as well as the world. He is the creator of everything we see and feel around us.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">Origin & significance · <span className="deva">उत्पत्ति</span></span>
            <h2>Born of the lotus, the golden embryo</h2>
            <p className="lead">
              According to Hindu mythology, God Brahma appeared in the form of the Kamal — the lotus — also known as Brahma Kamala. The lotus sprang from Lord Vishnu&apos;s navel.
            </p>
            <p className="muted">
              According to the Manu Smriti, Brahma is a self-born god. He created water and deposited seeds that became a golden egg; therefore he is also known as born of the Hiranya Garbha (golden embryo), the ball of fire from which the universe develops.
            </p>
            <p className="muted">
              Brahman is the ultimate, formless metaphysical reality and cosmic soul in Hinduism.
            </p>
          </div>
          <div className="grid grid-2 reveal d1" style={{ gap: 16 }}>
            {names.map((x) => (
              <div className="card corner" key={x.n} style={{ padding: 22 }}>
                <div className="deva" style={{ color: "var(--rose)", fontSize: "1.3rem" }}>{x.h}</div>
                <h4 style={{ margin: "4px 0 6px" }}>{x.n}</h4>
                <p style={{ margin: 0, fontSize: "1rem" }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <SectionHead eyebrow="Chaturmukha · चतुर्मुख" title="Brahma and the Four Vedas">
            Brahma is a supreme god in the trinity. He has four heads, each looking towards one of the four directions, and he is the creator of the four pious Vedas of the Hindu religion.
          </SectionHead>
          <div className="grid grid-4">
            {vedas.map((f, i) => (
              <div className={`card-dark center reveal d${i + 1}`} key={f.veda}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "var(--gold-bright)", lineHeight: 1 }}>{i + 1}</div>
                <div className="deva" style={{ color: "var(--gold-cream)", fontSize: "1.4rem", margin: "12px 0 4px" }}>{f.h}</div>
                <h3>{f.veda}</h3>
              </div>
            ))}
          </div>
          <div className="grid grid-2" style={{ marginTop: 40 }}>
            <div className="reveal">
              <p style={{ color: "#ecd0d0" }}>
                The four heads of Brahma are the manifestation of the four Vedas — the most revered scriptures of the Hindu religion, endowed with the blessing of Lord Brahma. The Vedas are the most precious and pious gifts to humanity, holding the greatest knowledge for humans to live life.
              </p>
              <p style={{ color: "#e3c6c6" }}>
                They were passed on by word of mouth, as hymns, and took the form of books only later, when methods of storing knowledge came into existence. The hymns passed on through generations are the voice of Brahma, with the joint efforts of Mother Saraswati — the goddess of knowledge. These four celestial Vedas combine liturgical material with mythological accounts: a myriad of poems, prayers and formulas held sacred by the Vedic religion.
              </p>
            </div>
            <div className="reveal d1">
              <p style={{ color: "#ecd0d0" }}>
                He also created the four types — gods, demons, ancestors and men (the first being Manu) — and thereafter all living creatures upon the earth. The demons were born from Brahma&apos;s thigh, so he abandoned his own body, which then became Night. After that Brahma created the good gods and gave up his cosmic form once again, and this became Day; hence the demons gain supremacy at night, and the Gods, the forces of goodness, rule the day.
              </p>
              <p style={{ color: "#e3c6c6" }}>
                Brahma then generated men and ancestors, each time abandoning his body to make Dusk and Dawn. Thereafter Brahma appointed Lord Shiva to rule over humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Symbols & attributes · प्रतीक" title="What the Lord holds, and why">
            The things we find in the possession of God Brahma have important aspects and great intellectual pertinence to the material world.
          </SectionHead>
          <div className="grid grid-3">
            {symbols.map(({ Svg, t, d }, i) => (
              <div className={`card corner reveal d${i + 1}`} key={t}>
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
          <SectionHead eyebrow="Murti Darshan · मूर्ति दर्शन" title="Brahma Ji with Mata Brahmani and Mata Gayatri">
            The only temple where Lord Brahma is worshipped along with Mata Brahmani and Mata Gayatri — from the marble murtis of the sanctum to the utsav murtis that ride the Rath.
          </SectionHead>
          <Mosaic
            items={[
              { id: "brahma-trimurti-darbar", span: "w2 h2", caption: "Shri Brahma ji with Mata Brahmani and Mata Gayatri" },
              { id: "brahma-golden", span: "h2", caption: "Golden four-faced murti" },
              { id: "brahma-utsav-murti", caption: "Utsav murti of Brahma ji", position: "50% 20%" },
              { id: "brahma-brass", caption: "Brass utsav murti", position: "50% 20%" },
              { id: "saraswati-brass", span: "w2", caption: "Mata Brahmani upon the hamsa", position: "50% 30%" },
              { id: "brahma-darbar-flowers", span: "w2", caption: "The darbar in flower shringar" },
            ]}
          />
        </div>
      </section>

      <section className="photo-band">
        <Parallax className="pb-img"><Photo id="brahma-darbar-toran" fill sizes="100vw" /></Parallax>
        <div className="container narrow reveal">
          <span className="eyebrow">Brahma Gayatri</span>
          <p className="deva" style={{ fontSize: "clamp(1.4rem,3vw,2rem)", color: "var(--gold-cream)", lineHeight: 1.9 }}>
            ॐ वेदात्मनाय विद्महे<br />हिरण्यगर्भाय धीमहि<br />तन्नो ब्रह्मा प्रचोदयात् ॥
          </p>
          <p className="serif" style={{ fontStyle: "italic", fontSize: "1.3rem", color: "#f0d4d4" }}>&ldquo;Just recite Brahma and experience Brahma.&rdquo;</p>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 16 }}>
            <Link href="/onkar-ashram" className="btn btn-gold">Onkar Ashram</Link>
            <Link href="/mantras" className="btn btn-ghost-light btn-outline">Mantras & Japa Counter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
