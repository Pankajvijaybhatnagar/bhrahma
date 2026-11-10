import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Photo, { FramedPhoto } from "@/components/Photo";
import { Mosaic } from "@/components/PhotoBlocks";
import { Parallax } from "@/components/Motion";
import { Lotus } from "@/components/Ornaments";
import type { PhotoId } from "@/lib/photos";

export const metadata: Metadata = { title: "Onkar Ashram · Bhagwan Shri Brahma Mandir, Kurukshetra" };

// Text from brahmamandir.com/onkar-ashram (lightly edited for spelling)
const brahmaTime = [
  { v: "4,300,000", l: "years in one yuga" },
  { v: "× 1,000", l: "yugas make one day of Brahma" },
  { v: "30 · 12", l: "days a month, months a year" },
  { v: "100", l: "such years — the life of Brahma" },
];

const shrines: { img?: PhotoId; t: string; h: string; d: string }[] = [
  { img: "brahma-trimurti-darbar", t: "Lord Brahma, Mata Brahmani & Gayatri Mata", h: "ब्रह्मा · ब्रह्माणी · गायत्री", d: "The only temple in the universe where Lord Brahma is worshipped along with Mata Brahmani and Gayatri Mata." },
  { t: "Hermit Sri Atri ji & Mother Anusuya", h: "अत्रि · अनुसूया", d: "Sri Atri ji, the son of Brahma, always showers the blessings of his benevolence on the devotees." },
  { t: "Dev Rishi Narad", h: "देवर्षि नारद", d: "The son of Lord Brahma, whose omniscient presence is witnessed in all the scriptures. Merely prostrating before him washes away misdeeds." },
  { t: "God Kapil Muni ji", h: "कपिल मुनि", d: "Son of Rishi Kardam ji and Mother Devahuti ji, an avatar of Lord Vishnu. His presence fulfils the wishes of devotees." },
  { t: "Sri Dattatreya", h: "श्री दत्तात्रेय", d: "Who manifests Lord Brahma, Vishnu and Mahesha, and has a special place in the sanctum sanctorum." },
];

export default function OnkarAshram() {
  return (
    <>
      <PageHero
        crumb="Onkar Ashram"
        images={["temple-dusk", "temple-utsav-wide", "temple-night-lights", "sanctum-arch"]}
        hindi="ओंकार आश्रम"
        title="Onkar Ashram"
        subtitle="Just recite Brahma and experience Brahma."
      />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Life · <span className="deva">जीवन</span></span>
            <h2>Life is an eternal journey</h2>
            <p className="lead">
              We see life as we are directed to see it — a fact that cannot be denied, spiritually or scientifically. We see things from one perspective and other creatures see them from another, as even scientists who study animals, birds and living beings have shown.
            </p>
            <p className="muted">
              Similarly, we see God — the creator — in many forms. But is Brahma, the creator, so easy to understand or talk about? Brahma is the creator of this world that we see and praise. Even the Lords who manifested themselves were always found praying to Brahma, and included His name in their preaching, hymns, verses and sayings. The Hindu spiritual world revolves around Brahma — Brahma-muhurat, Brahmalok, Brahmaand, Brahmayuga and Brahmanaad.
            </p>
            <p className="muted">
              Brahma cannot be explained easily, in words or in verses, and expecting any knowledge of Him from this writing is simply void.
            </p>
            <p className="serif" style={{ fontSize: "1.5rem", fontStyle: "italic", color: "var(--crimson)" }}>Just recite Brahma and experience Brahma.</p>
          </div>
          <div className="photo-pair reveal d1">
            <div className="pp-main"><FramedPhoto id="temple-signboard" ratio="4 / 5" position="50% 30%" caption="भगवान श्री ब्रह्मा मंदिर, कुरुक्षेत्र" /></div>
            <div className="pp-small"><figure className="photo-card" style={{ aspectRatio: "1" }}><Photo id="temple-night-tower" fill sizes="25vw" /></figure></div>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <SectionHead eyebrow="Bhagavad Gita 8.17 · भगवद्गीता" title="Even Brahma's one day is beyond imagination">
            Even the Lord of Kalyuga, Lord Krishna, introduced Arjuna to Brahma and his greatest creation — the universe — to describe the cycle of life and death.
          </SectionHead>
          <div className="center reveal" style={{ marginBottom: 40 }}>
            <p className="deva" style={{ fontSize: "clamp(1.4rem,3vw,2rem)", color: "var(--gold-cream)", lineHeight: 1.9, margin: 0 }}>
              सहस्रयुगपर्यन्तमहर्यद्ब्रह्मणो विदुः ।<br />रात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जनाः ॥
            </p>
            <p className="serif" style={{ fontStyle: "italic", fontSize: "1.2rem", color: "#f0d4d4", marginTop: 12 }}>
              Sahasra-yuga-paryantam ahar yad brahmano viduh · ratrim yuga-sahasrantam te &apos;ho-ratra-vido janah
            </p>
          </div>
          <div className="grid grid-4">
            {brahmaTime.map((b, i) => (
              <div className={`card-dark center reveal d${i + 1}`} key={b.l}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--gold-bright)", lineHeight: 1.1 }}>{b.v}</div>
                <p style={{ marginTop: 10 }}>{b.l}</p>
              </div>
            ))}
          </div>
          <p className="center reveal" style={{ color: "#e3c6c6", maxWidth: 820, margin: "36px auto 0" }}>
            One yuga covers 4,300,000 years. Multiplied by one thousand, this makes one day — twelve hours — of Brahma on Brahmaloka; another twelve hours cover the night. Thirty such days make a month, twelve months a year, and Brahma lives for one hundred such years. This example is minusculely small next to the age Brahma covers, yet it is enough to know how powerful Brahma is, who created everything in this universe.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <FramedPhoto id="temple-utsav-day" ratio="4 / 5" caption="Dharamkshetra · Brahmkshetra · Kurukshetra" />
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Temple foundation · <span className="deva">शिलान्यास</span></span>
            <h2>1 October 2001 · Fourth Navratra, Samvat 2057</h2>
            <p className="lead">
              On Monday, 1 October 2001, the pious day of the Fourth Navratra of Samvat 2057, at Dharamkshetra – Brahmkshetra – Kurukshetra, by the majestic will of Onkar Shakti, the Supreme Power — His Holiness Nirakar (formless) Par Braham (beyond reach) Lord Onkara, Satguru Sri Sri 1008 Shaktidev ji Maharaj Kurri Wale laid the foundation stone of the edifice.
            </p>
            <p className="muted">
              It is the only temple in the universe where Lord Brahma is worshipped along with Mata Brahmani and Gayatri Mata, unlike all other temples existing globally. The foundation stone was blessed by hermit Durwasa ji, whose divine soul resides in the human form of Sri Shakti ji Maharaj, who resolved to erect the temple with his hard-earned wealth to fulfil his ages-old resolution.
            </p>
            <p className="muted">
              This is not merely an abode of Lord Brahma — it is an aegis for devotees who have not found any path of emancipation from the ocean of birth and death; a place where Lord Brahma&apos;s updesh shows the ultimate and only way of transcendence. The sanctity of the temple is maintained with the benediction of Lord Brahma, and hymns can always be heard emanating from its vicinity.
            </p>
            <p className="serif" style={{ fontSize: "1.3rem", fontStyle: "italic", color: "var(--crimson)" }}>Mysterious are the ways of God.</p>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHead eyebrow="Devi-Devta · देवी-देवता" title="The home of the universe and its Lords">
            The temple houses Lord Brahma&apos;s divine family — his consorts, his sons and the rishis of his lineage.
          </SectionHead>
          <div className="grid grid-3">
            {shrines.map((s, i) => (
              <article className={`card reveal d${(i % 3) + 1}`} key={s.t} style={{ padding: 14, paddingBottom: 26 }}>
                {s.img ? (
                  <div className="pc-img rounded tall"><Photo id={s.img} fill sizes="(max-width: 980px) 100vw, 33vw" position="50% 25%" /></div>
                ) : (
                  <div className="card-icon" style={{ margin: "14px 12px 18px" }}><Lotus /></div>
                )}
                <div style={{ padding: "0 12px" }}>
                  <div className="deva" style={{ color: "var(--rose)", fontSize: "1.15rem" }}>{s.h}</div>
                  <h3 style={{ marginTop: 4 }}>{s.t}</h3>
                  <p style={{ margin: 0 }}>{s.d}</p>
                </div>
              </article>
            ))}
            <div className="card corner center reveal d3" style={{ display: "grid", placeItems: "center", alignContent: "center" }}>
              <Lotus style={{ width: 90, color: "var(--rose)", margin: "0 auto 16px" }} />
              <h3>Lord Brahma is Omnipresent, Omniscient and Omnipotent</h3>
              <p>There is no God equal to the strength of Lord Brahma, no teacher like Lord Brahma, no knowledge like Lord Brahma and no sacrifice like Brahma&apos;s.</p>
              <Link href="/shrines" className="btn btn-outline" style={{ marginTop: 8 }}>All Shrines</Link>
            </div>
          </div>
          <div className="grid grid-4" style={{ marginTop: 34, gap: 14 }}>
            {(["sant-murti-1", "sant-murti-2", "sant-murti-3", "sant-murti-5"] as PhotoId[]).map((id) => (
              <figure className="photo-card reveal" key={id} style={{ aspectRatio: "3 / 4" }}>
                <Photo id={id} fill sizes="(max-width: 680px) 50vw, 25vw" position="50% 25%" />
              </figure>
            ))}
          </div>
          <p className="muted center" style={{ marginTop: 14 }}>Rishi murtis in the niches of the temple</p>
        </div>
      </section>

      <section className="photo-band">
        <Parallax className="pb-img"><Photo id="temple-night-skyline" fill sizes="100vw" /></Parallax>
        <div className="container narrow center reveal">
          <Lotus style={{ width: 110, margin: "0 auto 18px", color: "var(--gold-bright)" }} />
          <h2>Come in the aegis of Brahma and become a part of Brahma.</h2>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Jhalak · झलक" title="The Ashram and the Mandir">
            The shikhara, the sanctum and the parikrama of Bhagwan Shri Brahma Mandir.
          </SectionHead>
          <Mosaic
            items={[
              { id: "temple-utsav-wide", span: "w2 h2" },
              { id: "temple-day-shikhara", span: "h2" },
              { id: "sanctum-arch" },
              { id: "carved-mandap" },
              { id: "parikrama-mirror", span: "w2" },
              { id: "mandap-hall", span: "w2" },
              { id: "temple-dusk", span: "w2" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
