import Link from "next/link";
import type { Metadata } from "next";
import HeroSlides from "@/components/HeroSlides";
import Petals from "@/components/Petals";
import SectionHead from "@/components/SectionHead";
import Photo, { FramedPhoto } from "@/components/Photo";
import { Mosaic } from "@/components/PhotoBlocks";
import { Parallax } from "@/components/Motion";
import { Diya, Mandala, Skyline } from "@/components/Ornaments";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "Guruji Maharaj · Sri Sri 1008 Satgurudev Swami Sri Shaktidev ji Maharaj" };

// Text from brahmamandir.com/guruji-maharaj (lightly edited for spelling)
const timeline = [
  { era: "16 December 1958", t: "Birth of Guruji", d: "Born in a very pious Brahmin family, to Brahma Swaroop Sri Babu Ram Dixit and the Goddess-like mother, revered Sri Lakshami Amma." },
  { era: "10 February 1964", t: "Birth of Guru Maa", d: "Mother Inderjeet — spiritual name Sri Sri 1008 Satguru Santosh Onkar ji Maharaj — was born in Ambala district to Sri Guru Prassad ji and Sri Shanti Devi ji." },
  { era: "16 September 1990", t: "Birth of Swami ji", d: "Sri Sri 1008 Satguru Swami Sri Sandeep Onkar ji Maharaj was born early in the morning, at 6:34, at the ancestral home in Kuradi." },
  { era: "10 May 1997", t: "Jai Onkar International Sangh", d: "Guru Maa helped begin the Jai Onkar International Sangh — the ultimate aegis for the deprived, the downtrodden and devotees." },
  { era: "5 December 1997", t: "The celestial light of Onkar", d: "The celestial light of Onkar almighty fell on Guruji, and ever since he has dedicated himself to the service of the world." },
  { era: "1999", t: "The name Santosh Onkar", d: "Guru Maa was conferred with the name Sri Santosh Onkar by Sri Sri 1008 Satgurudev Swami Sri Shakti ji Maharaj of Kurri." },
  { era: "1 October 2001", t: "Foundation of the Brahma temple", d: "Guruji accomplished his ages-old dream of bringing God Brahma and Goddess Brahmani together at one place, with the temple at Kurukshetra." },
];

const lineage = [
  { h: "ब्रह्मा", t: "Lord Brahma", d: "The Creator, from whose lineage the Guru Parivar descends." },
  { h: "अत्रि · अनुसूया", t: "Hermit Sri Atri ji & Mother Sati Anusuya", d: "Sri Atri ji Maharaj was one of the children of Lord Brahma. Mother Anusuya gave birth to the trinity in human form — Brahma as Chandra, Vishnu as Dattatreya and Shiva as Durwasa." },
  { h: "दुर्वासा", t: "Rishi Durwasa ji Maharaj", d: "Son of Sri Atri ji and himself the avatar of Lord Shiva — the spiritual guru of Satguru Sri Shakti ji Maharaj." },
  { h: "शक्तिदेव", t: "Satguru Sri Shaktidev ji Maharaj", d: "The eldest, closest and humblest disciple of the Rishi, in whose celestial body Rishi Durwasa promised to live in Kalyuga." },
];

export default function GurujiMaharaj() {
  return (
    <>
      {/* ───── Hero: Maharaj ji framed like the temple logo on the home page ───── */}
      <section className="hero has-slides guru-hero">
        <HeroSlides ids={["temple-night-lights", "brahma-darbar-flowers", "temple-dusk"]} interval={6000} />
        <Petals count={14} />
        <div className="container">
          <div className="hero-grid">
            <div className="reveal">
              <div className="crumbs" style={{ marginBottom: 18 }}>
                <Link href="/">Home</Link>
                <span>✦</span>
                <span>Guruji Maharaj</span>
              </div>
              <span className="eyebrow hero-eyebrow"><span className="deva">ॐ</span> Our Guru Ji Maharaj</span>
              <h1 className="guru-hero-title">
                <span className="deva">श्री श्री 1008 सतगुरुदेव</span>
                Swami Sri Shaktidev ji Maharaj
              </h1>
              <p className="shloka">गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ।</p>
              <p className="lead">
                Sri Shaktidev ji Maharaj of Kurri village — a heavenly soul in human form, from the lineage of Lord Brahma.
              </p>
              <div className="btn-row">
                <a href="#guruji" className="btn btn-gold">About Guru Ji</a>
                <a href="#guru-maa" className="btn btn-ghost-light btn-outline">Guru Parivar</a>
              </div>
              <div className="hero-badges">
                <div><strong>16 Dec 1958</strong>Divine birth</div>
                <div><strong>5 Dec 1997</strong>Light of Onkar</div>
                <div><strong>1 Oct 2001</strong>Brahma Mandir founded</div>
              </div>
            </div>
            <div className="hero-visual guru-visual reveal d2">
              <Mandala className="mandala" />
              <div className="halo" />
              <div className="logo-wrap">
                <Photo id="guruji-portrait" fill sizes="(max-width: 980px) 80vw, 420px" position="50% 22%" priority />
              </div>
              <span className="guru-visual-name deva">श्री शक्तिदेव जी महाराज</span>
            </div>
          </div>
        </div>
        <Skyline className="hero-skyline" />
      </section>

      {/* ───── Grihastha ───── */}
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Moksha · <span className="deva">मोक्ष</span></span>
            <h2>Emancipation, by living the life we are given</h2>
            <p className="lead">
              Many believe that abandoning the Grihastha Ashram and seeking God in the woods or the mountains will bring eternal emancipation from this material world. But are we so privileged by our deeds that they can free us from the maze of 84,00,000 births? No! Never!
            </p>
            <p className="muted">
              True devotion towards the almighty proves worthy of eternal emancipation — Moksha — only by playing the role we are assigned in this world: by accepting it, living it, enjoying it, enduring it and remaining in it. Even the greatest of Lords accepted it and lived this human life by incarnating in a very natural, normal human form. They played, thought, fought, meditated and married, with only one objective — to save the truly innocent men and families.
            </p>
            <p className="muted">
              Lords come and go, but few recognise them, as has happened with all the sages and Gurus. They are not easy to recognise, but impossible to forget. Whenever there is a decline in dharma and an increase in adharma, the formless, omnipotent almighty comes to earth in many different guises.
            </p>
          </div>
          <div className="photo-pair reveal d1">
            <div className="pp-main"><FramedPhoto id="guruji-garland" ratio="4 / 5" caption="श्री शक्तिदेव जी महाराज" position="50% 25%" /></div>
            <div className="pp-small"><figure className="photo-card" style={{ aspectRatio: "1" }}><Photo id="pravachan-blessing" fill sizes="25vw" position="50% 20%" /></figure></div>
          </div>
        </div>
      </section>

      {/* ───── Trio ───── */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHead eyebrow="Guru Parivar · गुरु परिवार" title="Three lamps, one light">
            Under whose love and tapasya the mandir lives and grows — and through whose blessings thousands of families have found their way to the Lord.
          </SectionHead>
          <div className="guru-trio">
            <a href="#guruji" className="guru-card reveal d1">
              <Photo id="guruji-portrait" fill sizes="(max-width: 680px) 100vw, 33vw" position="50% 25%" />
              <div className="gc-body"><span className="gc-role">Guruji Maharaj</span><h3>Satgurudev Swami Sri Shaktidev ji Maharaj</h3><div className="deva">श्री शक्तिदेव जी महाराज</div></div>
            </a>
            <a href="#guru-maa" className="guru-card reveal d2">
              <Photo id="gurumaa-blessing" fill sizes="(max-width: 680px) 100vw, 33vw" position="50% 30%" />
              <div className="gc-body"><span className="gc-role">Guru Maa</span><h3>Satguru Santosh Onkar ji Maharaj</h3><div className="deva">श्री संतोष ओंकार जी महाराज</div></div>
            </a>
            <a href="#swami-ji" className="guru-card reveal d3">
              <Photo id="swami-sandeep-onkar" fill sizes="(max-width: 680px) 100vw, 33vw" position="50% 20%" />
              <div className="gc-body"><span className="gc-role">Swami ji</span><h3>Satguru Swami Sri Sandeep Onkar ji Maharaj</h3><div className="deva">श्री संदीप ओंकार जी महाराज</div></div>
            </a>
          </div>
        </div>
      </section>

      {/* ───── Guruji ───── */}
      <section className="section" id="guruji" style={{ scrollMarginTop: 80 }}>
        <div className="container split">
          <div className="photo-pair reveal">
            <div className="pp-main"><FramedPhoto id="guruji-portrait" ratio="4 / 5" caption="पूज्य गुरुजी महाराज" position="50% 25%" /></div>
            <div className="pp-small"><figure className="photo-card" style={{ aspectRatio: "1" }}><Photo id="pravachan-2" fill sizes="25vw" position="50% 20%" /></figure></div>
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Guruji Maharaj · <span className="deva">गुरुजी महाराज</span></span>
            <h2>The celestial light of Onkar</h2>
            <p className="lead">
              To save religion and emancipate the downtrodden, for social bonds and fraternity in the world, Sri Sri 1008 Satgurudev Swami Sri Shaktidev ji Maharaj of Kurri village has incarnated in human form to bring light into the dark lives of all humanity.
            </p>
            <p className="muted">
              On 5 December 1997 the celestial light of Onkar almighty fell on Guruji, and ever since he has dedicated himself to the service of the world. His birth, on 16 December 1958, took place in the home of the Dixits — his father, Brahma Swaroop Sri Babu Ram Dixit, bore one of the names of Narayana, Sri Ram; and his Goddess-like mother was revered Sri Lakshami Amma. His birth was the outcome of their meditation, sacrifice and prayer over thousands of lives.
            </p>
            <blockquote className="serif" style={{ margin: "26px 0 0", padding: "20px 26px", borderLeft: "3px solid var(--gold)", background: "#fff", borderRadius: "0 16px 16px 0", fontSize: "1.3rem", fontStyle: "italic", color: "var(--crimson-deep)" }}>
              &ldquo;They are not easy to recognise, but impossible to forget.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ───── Lineage ───── */}
      <section className="section bg-dark">
        <div className="container">
          <SectionHead eyebrow="Lineage · वंश परम्परा" title="From the lineage of Lord Brahma">
            Omniscient Rishi Durwasa is the spiritual guru of Satguru Sri Shakti ji Maharaj, his eldest disciple. Owing to his devotion, the Rishi blessed him ages ago to stay and live in his celestial body in Kalyuga.
          </SectionHead>
          <div className="grid grid-4">
            {lineage.map((l, i) => (
              <div className={`card-dark center reveal d${i + 1}`} key={l.t}>
                <div className="deva" style={{ fontSize: "1.5rem", color: "var(--gold-bright)", marginBottom: 8 }}>{l.h}</div>
                <h3>{l.t}</h3>
                <p>{l.d}</p>
              </div>
            ))}
          </div>
          <p className="center reveal" style={{ color: "#e3c6c6", maxWidth: 820, margin: "40px auto 0" }}>
            Since 5 December 1997 Satguru Sri Shakti ji Maharaj has devoted himself to the divine throne, emancipating himself from the griefs and pleasures of the world. Durwasa ji Maharaj liked his human cloak and promised to wear it for 47 years, to fulfil his ages-old longing to serve the world and his father — Lord Brahma.
          </p>
        </div>
      </section>

      {/* ───── Service & education ───── */}
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Service, education & family</span>
            <h2>A teacher, in service of humanity and the nation</h2>
            <p className="lead">
              Sri Shakti ji has devoted himself not only to the service of humanity but also to the service of the nation — the land where his heavenly light was kindled.
            </p>
            <p className="muted">
              With spirituality in his blood and national service in his mind, he follows the teaching tradition of his Brahmin lineage and teaches in a Government school. He holds an M.A. in Sanskrit from Kurukshetra University; his erudition in Sanskrit has won laurels, and he has been awarded a gold medal by Jagatguru Sri Shankaracharya ji Maharaj.
            </p>
            <p className="muted">
              A sincere student since childhood, he always remained in his own world of spirituality and service, believing that there is a force running this world which is unrecognisable and unpredictable.
            </p>
          </div>
          <div className="reveal d1">
            <FramedPhoto id="pravachan-stage" ratio="4 / 3" caption="Guruji's pravachan beside the darbar" />
          </div>
        </div>
      </section>

      {/* ───── Guru Maa ───── */}
      <section className="section bg-sand" id="guru-maa" style={{ scrollMarginTop: 80 }}>
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Guru Maa · <span className="deva">गुरु माँ</span></span>
            <h2>Sri Sri 1008 Satguru Santosh Onkar ji Maharaj</h2>
            <p className="lead">
              Following the footsteps of the lords, hermits, sages and Gurus, Guruji tied the sacred knot of marriage with Mother Inderjeet, whose spiritual name is Sri Sri 1008 Satguru Santosh Onkar ji Maharaj.
            </p>
            <p className="muted">
              Mother Santosh Onkar was born in Ambala district on 10 February 1964, to Sri Guru Prassad ji and Sri Shanti Devi ji. In 1999 she was conferred with the name Sri Santosh Onkar by Sri Sri 1008 Satgurudev Swami Sri Shakti ji Maharaj of Kurri. Her arrival filled the gap on the throne of Kurri and blessed millions with a mother&apos;s love, affection and care. She helped begin the Jai Onkar International Sangh on 10 May 1997.
            </p>
            <p className="muted">
              Mother nature blessed the Guru Parivar with three Goddess-like daughters — Devi Puneeta, Devi Kavita (Kuldeep) and Devi Jyoti — the benedictions of Goddesses Saraswati, Lakshami and Parwati.
            </p>
            <div className="grid grid-2" style={{ gap: 14, marginTop: 24 }}>
              <figure className="photo-card" style={{ aspectRatio: "1" }}><Photo id="gurumaa-aarti" fill sizes="25vw" position="50% 30%" /></figure>
              <figure className="photo-card" style={{ aspectRatio: "1" }}><Photo id="gurumaa-dhyan" fill sizes="25vw" position="50% 30%" /></figure>
            </div>
          </div>
          <div className="reveal d1">
            <FramedPhoto id="gurumaa-blessing" ratio="4 / 5" caption="श्री संतोष ओंकार जी महाराज" position="50% 30%" />
          </div>
        </div>
      </section>

      {/* ───── Swami ji ───── */}
      <section className="section bg-dark" id="swami-ji" style={{ scrollMarginTop: 80 }}>
        <div className="container split">
          <div className="photo-pair reveal">
            <div className="pp-main"><FramedPhoto id="swami-sandeep-onkar" ratio="4 / 5" caption="श्री संदीप ओंकार जी महाराज" position="50% 20%" /></div>
            <div className="pp-small"><figure className="photo-card" style={{ aspectRatio: "1", boxShadow: "0 0 0 8px var(--maroon), var(--shadow-lg)" }}><Photo id="guru-parivar" fill sizes="25vw" /></figure></div>
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Swami ji · <span className="deva">स्वामी जी</span></span>
            <h2>Sri Sri 1008 Satguru Swami Sri Sandeep Onkar ji Maharaj</h2>
            <p className="lead" style={{ color: "#ecd0d0" }}>
              The lineage of Sri Durwasa has a myriad of deeds to perform in a world where the darkness of ignorance has clutched many people. To bring them to the light of eternal emancipation, the Guru Parivar was blessed with a son.
            </p>
            <p style={{ color: "#e3c6c6" }}>
              His light of birth fell on 16 September 1990, early in the morning at 6:34, at the ancestral home in Kuradi. The blessing of Lord Brahma&apos;s son, hermit Sri Atri ji, is always with him, granting him the powers and prowess to take care of the sacred seat of Kuradi.
            </p>
            <p className="deva" style={{ color: "var(--gold-bright)", fontSize: "1.5rem", marginTop: 18 }}>{site.jaikara}</p>
            <div className="grid grid-2" style={{ gap: 14, marginTop: 20 }}>
              <figure className="photo-card" style={{ aspectRatio: "4 / 3" }}><Photo id="jai-onkar-yatra" fill sizes="25vw" /></figure>
              <figure className="photo-card" style={{ aspectRatio: "4 / 3" }}><Photo id="tilak-ceremony" fill sizes="25vw" /></figure>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Timeline ───── */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Itihas · इतिहास" title="Sacred dates of the Guru Parivar">
            Milestones from the life of Guruji Maharaj, Guru Maa and Swami ji, and the founding of the Brahma temple at Kurukshetra.
          </SectionHead>
          <div className="timeline">
            {timeline.map((l) => (
              <div className="tl-item reveal" key={l.t}>
                <span className="tl-dot" />
                <div className="tl-card card">
                  <span className="tl-era">{l.era}</span>
                  <h3 style={{ marginTop: 8 }}>{l.t}</h3>
                  <p style={{ margin: 0 }}>{l.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Guru stotram band ───── */}
      <section className="photo-band">
        <Parallax className="pb-img"><Photo id="shobha-yatra" fill sizes="100vw" /></Parallax>
        <div className="container narrow reveal">
          <Diya style={{ width: 80, margin: "0 auto 14px", color: "var(--gold)" }} />
          <p className="deva" style={{ fontSize: "clamp(1.4rem,3vw,2.1rem)", color: "var(--gold-cream)", lineHeight: 1.8 }}>
            गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ।<br />गुरुः साक्षात् परब्रह्म तस्मै श्रीगुरवे नमः ॥
          </p>
          <p className="serif" style={{ fontStyle: "italic", fontSize: "1.3rem", color: "#f0d4d4" }}>
            &ldquo;The Guru is Brahma, the Guru is Vishnu, the Guru is Maheshvara. The Guru is the Supreme Brahman itself — salutations to that revered Guru.&rdquo;
          </p>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <SectionHead eyebrow="Satsang · सत्संग" title="Moments with the Guru Parivar">
            Pravachan, tilak, garlands and blessings — glimpses from the satsangs and celebrations of the temple family.
          </SectionHead>
          <Mosaic
            items={[
              { id: "guruji-pravachan-hand", span: "w2 h2" },
              { id: "guruji-pink-garland", span: "h2", position: "50% 25%" },
              { id: "guruji-laughing" },
              { id: "guruji-gurumaa-mandap", span: "w2" },
              { id: "guruji-garland-dhyan" },
              { id: "guruji-gurumaa-darbar", span: "w2" },
              { id: "pravachan-blessing", span: "h2", position: "50% 20%" },
              { id: "guruji-temple-hall" },
              { id: "satsang-darbar", span: "w2" },
              { id: "guruji-gurumaa-stage" },
              { id: "guruji-close" },
              { id: "guruji-gurumaa-garden", span: "w2" },
              { id: "gurumaa-guruji-garlands", span: "w2" },
              { id: "guruji-mic", span: "h2", position: "50% 20%" },
              { id: "guruji-smile" },
              { id: "guruji-garden-garland" },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Guru Parampara</span>
            <h2>Shrine of Kurdi Wale Maharaj Shri Ji</h2>
            <div className="deva" style={{ color: "var(--rose)", fontSize: "1.3rem", marginTop: -6, marginBottom: 14 }}>कुरड़ी वाले महाराज श्री जी</div>
            <p className="lead">In the temple courtyard stands the shrine of Kurdi Wale Maharaj Shri Ji, garlanded and honoured by devotees every day.</p>
            <p className="muted">His janmotsav on Ashtami is celebrated with havan, bhajan and bhandara. Devotees offer flowers and bow here before entering the sanctum, remembering that every blessing of the Lord reaches us through the grace of the Guru.</p>
            <div className="btn-row" style={{ marginTop: 10 }}>
              <Link href="/onkar-ashram" className="btn btn-primary">Onkar Ashram</Link>
              <Link href="/hawan-yagya" className="btn btn-outline">Hawan Yagya</Link>
            </div>
          </div>
          <div className="photo-pair reveal d1">
            <div className="pp-main"><FramedPhoto id="guru-samadhi-2" ratio="3 / 4" /></div>
            <div className="pp-small"><figure className="photo-card" style={{ aspectRatio: "3 / 4" }}><Photo id="guru-samadhi" fill sizes="25vw" /></figure></div>
          </div>
        </div>
      </section>
    </>
  );
}
