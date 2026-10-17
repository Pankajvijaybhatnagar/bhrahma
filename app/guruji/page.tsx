import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Photo, { FramedPhoto } from "@/components/Photo";
import { Mosaic } from "@/components/PhotoBlocks";
import { Parallax } from "@/components/Motion";
import { Diya } from "@/components/Ornaments";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "Guru Parivar · Guruji, Guru Maa & Swami ji" };

const teachings = [
  { t: "Naam Simran", h: "नाम सिमरन", d: "Keep the Lord's name on the tongue and in the heart through every task of the day." },
  { t: "Nishkam Seva", h: "निष्काम सेवा", d: "Serve without wanting anything in return — in the temple, at home and in society." },
  { t: "Satsang", h: "सत्संग", d: "Sit in the company of the truth; the mind takes the colour of the company it keeps." },
  { t: "Bhola Bhav", h: "भोला भाव", d: "God is reached through a simple, innocent heart — not through cleverness. Come as a child comes to its mother." },
];

export default function Guruji() {
  return (
    <>
      <PageHero
        crumb="Guru Parivar"
        images={["guru-parivar-red", "jai-onkar-yatra", "pravachan-stage", "guru-parivar"]}
        hindi="गुरु कृपा ही केवलम्"
        title="The Guru Parivar"
        subtitle="Pujya Guruji, Guru Maa and Swami Sandeep Onkar ji — the guiding light of Bhagwan Shri Brahma Mandir, Kurukshetra."
      />

      {/* ───── Trio ───── */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Guru Parivar · गुरु परिवार" title="Three lamps, one light">
            Under whose love and tapasya the mandir lives and grows — and through whose blessings thousands of families have found their way to the Lord.
          </SectionHead>
          <div className="guru-trio">
            <a href="#guruji" className="guru-card reveal d1">
              <Photo id="guruji-garland" fill sizes="(max-width: 680px) 100vw, 33vw" position="50% 25%" />
              <div className="gc-body"><span className="gc-role">Guruji</span><h3>Pujya Guruji</h3><div className="deva">पूज्य गुरुजी</div></div>
            </a>
            <a href="#guru-maa" className="guru-card reveal d2">
              <Photo id="gurumaa-blessing" fill sizes="(max-width: 680px) 100vw, 33vw" position="50% 30%" />
              <div className="gc-body"><span className="gc-role">Guru Maa</span><h3>Pujya Guru Maa</h3><div className="deva">पूज्य गुरु माँ</div></div>
            </a>
            <a href="#swami-ji" className="guru-card reveal d3">
              <Photo id="swami-sandeep-onkar" fill sizes="(max-width: 680px) 100vw, 33vw" position="50% 20%" />
              <div className="gc-body"><span className="gc-role">Swami ji</span><h3>Swami Sandeep Onkar ji</h3><div className="deva">स्वामी संदीप ओंकार जी</div></div>
            </a>
          </div>
        </div>
      </section>

      {/* ───── Guruji ───── */}
      <section className="section bg-sand" id="guruji" style={{ scrollMarginTop: 80 }}>
        <div className="container split">
          <div className="photo-pair reveal">
            <div className="pp-main"><FramedPhoto id="guruji-garland" ratio="4 / 5" caption="पूज्य गुरुजी" position="50% 25%" /></div>
            <div className="pp-small"><figure className="photo-card" style={{ aspectRatio: "1" }}><Photo id="pravachan-blessing" fill sizes="25vw" position="50% 20%" /></figure></div>
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Pujya Guruji · <span className="deva">पूज्य गुरुजी</span></span>
            <h2>A life given to bhakti and seva</h2>
            <p className="lead">Pujya Guruji is the spiritual guide of Brahma Mandir. His gentle smile, his simple words and his tireless seva are the heart of the temple family.</p>
            <p className="muted">Through regular satsang and pravachan, Guruji reminds devotees that the Divine is not far away — it lives in every act of kindness, every honest day&apos;s work and every name of God remembered with love. Under his guidance the temple&apos;s havans, festivals and annadanam have grown year after year.</p>
            <blockquote className="serif" style={{ margin: "26px 0 0", padding: "20px 26px", borderLeft: "3px solid var(--gold)", background: "#fff", borderRadius: "0 16px 16px 0", fontSize: "1.3rem", fontStyle: "italic", color: "var(--crimson-deep)" }}>
              <span className="deva" style={{ fontStyle: "normal", display: "block", marginBottom: 8 }}>गुरु गोविंद दोऊ खड़े, काके लागूं पांय ।<br />बलिहारी गुरु आपने, गोविंद दियो बताय ॥</span>
              &ldquo;Guru and Govind both stand before me — whose feet shall I touch first? I bow to the Guru, who showed me the way to Govind.&rdquo;
              <div style={{ fontFamily: "var(--font-display)", fontStyle: "normal", fontSize: ".72rem", letterSpacing: ".2em", marginTop: 10, color: "var(--rose)" }}>— SANT KABIR</div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ───── Guru Maa ───── */}
      <section className="section" id="guru-maa" style={{ scrollMarginTop: 80 }}>
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Pujya Guru Maa · <span className="deva">पूज्य गुरु माँ</span></span>
            <h2>The motherly grace of the mandir</h2>
            <p className="lead">Pujya Guru Maa is the loving mother of the temple family. Her warmth welcomes every devotee, and her devotion fills the aarti with feeling.</p>
            <p className="muted">From leading the women&apos;s satsang to blessing children on their birthdays, Guru Maa embodies the compassion of the Divine Mother. Devotees say that a few moments in her presence leave the heart lighter and the mind at peace.</p>
            <div className="grid grid-2" style={{ gap: 14, marginTop: 24 }}>
              <figure className="photo-card" style={{ aspectRatio: "1" }}><Photo id="gurumaa-aarti" fill sizes="25vw" position="50% 30%" /></figure>
              <figure className="photo-card" style={{ aspectRatio: "1" }}><Photo id="gurumaa-dhyan" fill sizes="25vw" position="50% 30%" /></figure>
            </div>
          </div>
          <div className="reveal d1">
            <FramedPhoto id="gurumaa-blessing" ratio="4 / 5" caption="पूज्य गुरु माँ" position="50% 30%" />
          </div>
        </div>
      </section>

      {/* ───── Swami ji ───── */}
      <section className="section bg-dark" id="swami-ji" style={{ scrollMarginTop: 80 }}>
        <div className="container split">
          <div className="photo-pair reveal">
            <div className="pp-main"><FramedPhoto id="swami-sandeep-onkar" ratio="4 / 5" caption="स्वामी संदीप ओंकार जी" position="50% 20%" /></div>
            <div className="pp-small"><figure className="photo-card" style={{ aspectRatio: "1", boxShadow: "0 0 0 8px var(--maroon), var(--shadow-lg)" }}><Photo id="guru-parivar" fill sizes="25vw" /></figure></div>
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Swami Sandeep Onkar ji · <span className="deva">स्वामी संदीप ओंकार जी</span></span>
            <h2>Carrying the flame forward</h2>
            <p className="lead" style={{ color: "#ecd0d0" }}>Swami Sandeep Onkar ji, the son of Pujya Guruji and Guru Maa, has grown up in the lap of the mandir — in its aartis, its havans and its seva.</p>
            <p style={{ color: "#e3c6c6" }}>Today he stands beside Guruji and Guru Maa at every major utsav, from the shobha yatra on the flower chariot to the havans of Kurdi Wale Maharaj ji&apos;s janmotsav, and connects a new generation of devotees with the temple.</p>
            <p className="deva" style={{ color: "var(--gold-bright)", fontSize: "1.5rem", marginTop: 18 }}>{site.jaikara}</p>
            <div className="grid grid-2" style={{ gap: 14, marginTop: 20 }}>
              <figure className="photo-card" style={{ aspectRatio: "4 / 3" }}><Photo id="jai-onkar-yatra" fill sizes="25vw" /></figure>
              <figure className="photo-card" style={{ aspectRatio: "4 / 3" }}><Photo id="tilak-ceremony" fill sizes="25vw" /></figure>
            </div>
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

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Updesh · उपदेश" title="Teachings for daily life">
            The essence of the satsang, distilled into four simple practices for every householder.
          </SectionHead>
          <div className="grid grid-4">
            {teachings.map((t, i) => (
              <div className={`card corner center reveal d${i + 1}`} key={t.t}>
                <div className="deva" style={{ fontSize: "1.6rem", color: "var(--crimson)", marginBottom: 6 }}>{t.h}</div>
                <h3>{t.t}</h3>
                <p>{t.d}</p>
              </div>
            ))}
          </div>
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
            <Link href="/shrines" className="btn btn-primary" style={{ marginTop: 10 }}>All Shrines of the Mandir</Link>
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
