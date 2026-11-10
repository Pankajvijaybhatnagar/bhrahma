import Link from "next/link";
import Image from "next/image";
import { articles, dailySchedule, sevas, site, stats } from "@/lib/data";
import { fmt12, fmtDate, upcomingFestivals } from "@/lib/time";
import SectionHead from "@/components/SectionHead";
import DarshanStatus from "@/components/DarshanStatus";
import Countdown from "@/components/Countdown";
import Petals from "@/components/Petals";
import HeroSlides from "@/components/HeroSlides";
import Photo, { FramedPhoto } from "@/components/Photo";
import { Mosaic, PhotoRibbon } from "@/components/PhotoBlocks";
import { CountUp, Parallax } from "@/components/Motion";
import type { PhotoId } from "@/lib/photos";
import { Diya, FilledLotus, Icon, Kalash, Lotus, Mandala, OmSymbol, Skyline, Swan } from "@/components/Ornaments";

export const revalidate = 3600;

const pillars: { img: PhotoId; title: string; text: string; href: string }[] = [
  { img: "brahma-white-murti", title: "Brahma Ji", text: "The power that creates everything in this world — from wind to water, from soil to mountains, from man to minerals.", href: "/brahmaji" },
  { img: "shobha-yatra", title: "Rath Yatra", text: "Every Kartik Purnima, thousands of hands pull the only chariot in the world carrying Brahma ji with Mata Brahmani and Mata Gayatri.", href: "/rath-yatra" },
  { img: "temple-signboard", title: "Onkar Ashram", text: "Founded on 1 October 2001 — the only temple where Lord Brahma is worshipped with Mata Brahmani and Gayatri Mata.", href: "/onkar-ashram" },
  { img: "havan-1", title: "Hawan Yagya", text: "The Onkar Mahayagya — Lord Brahma himself performed it before beginning the creation of the earth.", href: "/hawan-yagya" },
];

const symbols = [
  { Svg: Lotus, title: "The Lotus", text: "Brahma is born upon the lotus rising from Vishnu's navel — purity blooming out of the waters of creation." },
  { Svg: Swan, title: "Hamsa", text: "His vahana, the swan, can separate milk from water: the power to discern truth from illusion." },
  { Svg: Kalash, title: "Kamandalu", text: "The water-pot holds the essence from which all life begins, and the vows of the renunciate." },
  { Svg: OmSymbol, title: "The Vedas", text: "From his four mouths flowed the four Vedas, the eternal knowledge that sustains dharma." },
];

const ribbon: PhotoId[] = [
  "temple-night-gate", "brahma-golden", "sanctum-arch", "mata-rani", "shobha-yatra-2", "ganesh-shrine", "temple-day-shikhara",
  "radha-krishna", "parikrama-mirror", "nandi-pair", "fireworks-2", "utsav-murtis", "carved-pillars", "guru-parivar", "temple-night-tower", "temple-signboard",
];

export default function Home() {
  const fest = upcomingFestivals();
  const nextFest = fest[0];
  const aartis = dailySchedule.filter((s) => s.kind === "aarti");

  return (
    <>
      {/* ───── Hero ───── */}
      <section className="hero has-slides">
        <HeroSlides meta ids={["temple-night-lights", "brahma-trimurti-darbar", "jai-onkar-yatra", "temple-dusk", "brahma-darbar-toran", "guru-parivar-red", "temple-utsav-wide"]} />
        <Petals count={16} />
        <div className="container">
          <div className="hero-grid">
            <div className="reveal">
              <span className="eyebrow hero-eyebrow"><span className="deva">ॐ</span> Swagatam · Welcome</span>
              <h1 className="jai-heading" aria-label="Jai Gurudev, Jai Onkar — Bhagwan Shri Brahma Mandir, Kurukshetra">
                <span className="jh-line deva">जय गुरुदेव</span>
                <span className="jh-dot" aria-hidden="true">
                  <i />
                  <svg viewBox="0 0 120 80" fill="currentColor"><path d="M60 4 C 72 22, 74 44, 60 70 C 46 44, 48 22, 60 4 Z" /><path d="M60 70 C 74 52, 88 34, 104 28 C 104 48, 88 66, 60 70 Z" opacity=".7" /><path d="M60 70 C 46 52, 32 34, 16 28 C 16 48, 32 66, 60 70 Z" opacity=".7" /></svg>
                  <i />
                </span>
                <span className="jh-line deva">जय ओंकार</span>
                <span className="jh-sub">Bhagwan Shri Brahma Mandir</span>
                <span className="jh-place">Kurukshetra · Haryana</span>
              </h1>
              <p className="shloka">{site.sanskritTagline}</p>
              <p className="lead">
                Welcome to Brahma Mandir. Just recite Brahma and experience Brahma.
              </p>
              <div className="btn-row">
                <Link href="/brahmaji" className="btn btn-gold">Know Brahma Ji</Link>
                <Link href="/darshan" className="btn btn-ghost-light btn-outline">Darshan Timings</Link>
              </div>
              <div className="hero-badges">
                <div><strong>5:00 AM</strong>Mangala Aarti</div>
                <div><strong>6:45 PM</strong>Sandhya Aarti</div>
                <div><strong>Free</strong>Darshan for all</div>
              </div>
            </div>
            <div className="hero-visual reveal d2">
              <Mandala className="mandala" />
              <Mandala className="mandala inner" />
              <div className="halo" />
              <div className="logo-wrap">
                <Image src="/logo.png" alt="Brahma Mandir — four-faced Lord Brahma within a lotus" width={447} height={447} priority />
              </div>
            </div>
          </div>
        </div>
        <Skyline className="hero-skyline" />
      </section>

      {/* ───── Jaikara ribbon ───── */}
      <div className="jaikara" aria-label="Jai Gurudev, Jai Onkar">
        <div className="jaikara-track" aria-hidden="true">
          {Array.from({ length: 2 }, (_, k) => (
            <span key={k}>
              <span>ॐ श्री ब्रह्मणे नमः</span>
              <span>{site.jaikara}</span>
              <span>भगवान श्री ब्रह्मा मंदिर, कुरुक्षेत्र</span>
              <span>ॐ वेदात्मनाय विद्महे</span>
              <span>सर्वे भवन्तु सुखिनः</span>
              <span>जय गुरुदेव</span>
            </span>
          ))}
        </div>
      </div>

      {/* ───── Welcome ───── */}
      <section className="section">
        <div className="container split">
          <div className="photo-pair reveal">
            <div className="pp-main">
              <FramedPhoto id="brahma-white-murti" ratio="4 / 5" caption="चतुर्मुखं चतुर्बाहुं हंसवाहनसंस्थितम्" position="50% 30%" />
            </div>
            <div className="pp-small">
              <figure className="photo-card" style={{ aspectRatio: "1" }}>
                <Photo id="brahma-darbar-flowers" fill sizes="(max-width: 980px) 50vw, 25vw" />
              </figure>
            </div>
            <div className="photo-badge" style={{ left: -20, top: 40 }}><span><b>ॐ</b>SRISHTI<br />KARTA</span></div>
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Introduction · <span className="deva">परिचय</span></span>
            <h2>Welcome to Brahma Mandir</h2>
            <p className="lead">
              Life is an eternal journey, and we see it as we are directed to see it — a fact which cannot be denied, neither spiritually nor scientifically. We see things from one perspective, and other creatures see them from another.
            </p>
            <p className="muted">
              Similarly, we see God — the creator — in many forms. But is Brahma, the creator, so easy to understand or talk about? Brahma is the creator of this world that we see and praise. Even the Lords who manifested themselves were always found praying to Brahma; they included His name in their preaching, hymns, verses and sayings. The Hindu spiritual world revolves around Brahma — Brahma-muhurat, Brahmalok, Brahmaand, Brahmayuga and Brahmanaad.
            </p>
            <ul className="feature-list">
              <li><Icon.Check /> The only temple where Lord Brahma is worshipped with Mata Brahmani and Gayatri Mata</li>
              <li><Icon.Check /> Foundation laid on 1 October 2001 at Kurukshetra</li>
              <li><Icon.Check /> Brahma Rath Yatra every Kartik Purnima since 2002</li>
            </ul>
            <div className="btn-row">
              <Link href="/about" className="btn btn-primary">Our Story</Link>
              <Link href="/onkar-ashram" className="link-arrow" style={{ padding: "14px 10px" }}>Onkar Ashram <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Darshan now ───── */}
      <section className="section bg-sand bg-pattern">
        <div className="container">
          <SectionHead eyebrow="Darshan · दर्शन" title="Today at the Temple">
            The sanctum follows the ancient rhythm of seva. See whether darshan is open right now and when the next aarti begins.
          </SectionHead>
          <div className="split" style={{ alignItems: "start" }}>
            <div style={{ display: "grid", gap: 26 }}>
              <DarshanStatus />
              <figure className="photo-card reveal" style={{ aspectRatio: "16 / 10" }}>
                <Photo id="brahma-trimurti-darbar" fill />
                <figcaption>Shri Brahma darbar with Mata Brahmani & Mata Gayatri</figcaption>
              </figure>
            </div>
            <div className="reveal d1">
              <div className="aarti-list">
                {aartis.map((a) => (
                  <div className="aarti-row" key={a.name}>
                    <time>{fmt12(a.start)}</time>
                    <div>
                      <strong>{a.name}</strong>
                      <div className="muted" style={{ fontSize: "1rem" }}>{a.note}</div>
                    </div>
                    <span className="deva">{a.hindi}</span>
                  </div>
                ))}
              </div>
              <div className="btn-row" style={{ marginTop: 28 }}>
                <Link href="/live" className="btn btn-primary"><Icon.Play className="" /> Watch Live Aarti</Link>
                <Link href="/darshan" className="btn btn-outline">Full Schedule</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Pillars ───── */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Brahma Mandir · ब्रह्मा मंदिर" title="Just recite Brahma and experience Brahma">
            Brahma Ji, the Rath Yatra, the Onkar Ashram and the Hawan Yagya — the four pillars of Bhagwan Shri Brahma Mandir, Kurukshetra.
          </SectionHead>
          <div className="grid grid-4">
            {pillars.map((p, i) => (
              <Link href={p.href} key={p.title} className={`card corner reveal d${i + 1}`} style={{ padding: 14, paddingBottom: 28 }}>
                <div className="pc-img rounded tall"><Photo id={p.img} fill sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 25vw" /></div>
                <div style={{ padding: "0 12px" }}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <span className="link-arrow">Learn more <span>→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Quote over night photo ───── */}
      <section className="photo-band quote-band">
        <Parallax className="pb-img"><Photo id="temple-dusk" fill sizes="100vw" /></Parallax>
        <div className="container reveal">
          <Diya style={{ width: 90, margin: "0 auto 18px", color: "var(--gold)" }} />
          <blockquote>
            <div className="sk">ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम् ।<br />ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ॥</div>
            <div className="tr">&ldquo;The offering is Brahman, the oblation is Brahman, poured by Brahman into the fire of Brahman. One who sees Brahman in every action surely reaches Brahman.&rdquo;</div>
            <cite>— SHRIMAD BHAGAVAD GITA 4.24</cite>
          </blockquote>
          <div className="stats" style={{ marginTop: 70 }}>
            {stats.map((s) => (
              <div className="stat" key={s.label}><strong><CountUp value={s.value} /></strong><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Devi-Devta mosaic ───── */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Devi-Devta · देवी-देवता" title="Darshan of Every Shrine">
            Around the sanctum of Lord Brahma, the parikrama is alive with shrines of the Mother Goddess, Shri Ganesh, Mahadev, Radha-Krishna and the revered saints.
          </SectionHead>
          <Mosaic
            href="/shrines"
            items={[
              { id: "brahma-golden", span: "h2", caption: "Shri Brahma ji — golden murti" },
              { id: "mirror-shrine-5", span: "w2", caption: "The jewelled mirror-work shrines" },
              { id: "mata-rani", span: "h2", caption: "Mata Rani" },
              { id: "ganesh-shrine", caption: "Shri Ganesh" },
              { id: "shivling", caption: "Mahadev" },
              { id: "radha-krishna", span: "w2", caption: "Radha-Krishna in the flower jhula", position: "50% 40%" },
              { id: "saraswati-utsav-murti", caption: "Mata Brahmani" },
              { id: "nandi-pair", caption: "Nandi Maharaj" },
            ]}
          />
          <div className="center" style={{ marginTop: 40 }}>
            <Link href="/shrines" className="btn btn-outline">Visit All Shrines</Link>
          </div>
        </div>
      </section>

      {/* ───── Guruji ───── */}
      <section className="section bg-dark">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Our Guru Ji Maharaj · <span className="deva">गुरुजी महाराज</span></span>
            <h2>About Our Guru Ji</h2>
            <p className="lead" style={{ color: "#ecd0d0" }}>
              The Guru Ji — Sri Shaktidev ji Maharaj from Kurri village — is a heavenly soul in a human form, from the lineage of Lord Brahma.
            </p>
            <p style={{ color: "#e3c6c6" }}>
              Rishi Durwasa ji Maharaj was the son of hermit Sri Atri ji Maharaj, and Sri Atri ji Maharaj was one of the children of Lord Brahma. Hermit Sri Durwasa ji was himself the avatar of Lord Shiva. The mandir is blessed by Guru Maa, Sri Sri 1008 Satguru Santosh Onkar ji Maharaj, and carried forward by Swami Sri Sandeep Onkar ji Maharaj.
            </p>
            <p className="deva" style={{ color: "var(--gold-bright)", fontSize: "1.3rem", lineHeight: 1.8 }}>
              गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ।<br />गुरुः साक्षात् परब्रह्म तस्मै श्रीगुरवे नमः ॥
            </p>
            <Link href="/guruji-maharaj" className="btn btn-gold" style={{ marginTop: 10 }}>More About Guru Ji</Link>
          </div>
          <div className="guru-duo reveal d1">
            <Link href="/guruji-maharaj" className="guru-card">
              <Photo id="guruji-garland" fill sizes="(max-width: 680px) 100vw, 25vw" position="50% 25%" />
              <div className="gc-body"><h3>Sri Shaktidev ji Maharaj</h3><div className="deva">श्री शक्तिदेव जी महाराज</div></div>
            </Link>
            <Link href="/guruji-maharaj" className="guru-card" style={{ marginTop: 60 }}>
              <Photo id="gurumaa-blessing" fill sizes="(max-width: 680px) 100vw, 25vw" position="50% 30%" />
              <div className="gc-body"><h3>Santosh Onkar ji Maharaj</h3><div className="deva">श्री संतोष ओंकार जी महाराज</div></div>
            </Link>
            <Link href="/guruji-maharaj#swami-ji" className="guru-card" style={{ gridColumn: "1 / -1", aspectRatio: "4 / 3", marginTop: -30 }}>
              <Photo id="swami-sandeep-onkar" fill sizes="(max-width: 680px) 100vw, 45vw" position="50% 12%" />
              <div className="gc-body"><span className="gc-role">Son of Guruji & Guru Maa</span><h3>Swami Sri Sandeep Onkar ji Maharaj</h3><div className="deva">स्वामी संदीप ओंकार जी</div></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Symbolism ───── */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Pratik · प्रतीक" title="The Sacred Symbols of Lord Brahma">
            Every emblem the Creator holds is a teaching. Understand them, and the murti begins to speak.
          </SectionHead>
          <div className="grid grid-4">
            {symbols.map(({ Svg, title, text }, i) => (
              <div className={`center reveal d${i + 1}`} key={title}>
                <div className="card-icon" style={{ width: 110, height: 110, margin: "0 auto 22px" }}>
                  <Svg style={{ width: 60, height: 60 }} />
                </div>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 30 }}>
            <Link href="/brahmaji" className="btn btn-outline">Explore the Iconography</Link>
          </div>
        </div>
      </section>

      {/* ───── Festival countdown ───── */}
      {nextFest && (
        <section className="section-sm" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta-band bg-crimson reveal">
              <Mandala className="cta-mandala" />
              <div style={{ position: "relative" }}>
                <span className="eyebrow">Next Utsav · {fmtDate(nextFest.date)}</span>
                <h2 style={{ marginBottom: 6 }}>{nextFest.name}</h2>
                <div className="deva" style={{ color: "var(--gold-bright)", fontSize: "1.3rem", marginBottom: 14 }}>{nextFest.hindi}</div>
                <p>{nextFest.desc}</p>
                <Countdown to={nextFest.date} />
              </div>
              <div style={{ position: "relative", display: "grid", gap: 14 }}>
                <figure className="photo-card" style={{ aspectRatio: "16 / 10", marginBottom: 6 }}>
                  <Photo id={nextFest.image} fill sizes="(max-width: 980px) 100vw, 40vw" />
                </figure>
                {fest.slice(1, 3).map((f) => (
                  <div key={f.name} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--gold-cream)", minWidth: 56, textAlign: "center", lineHeight: 1 }}>
                      {fmtDate(f.date, { day: "numeric" })}
                      <div style={{ fontSize: ".66rem", letterSpacing: ".2em" }}>{fmtDate(f.date, { month: "short" }).toUpperCase()}</div>
                    </div>
                    <div className="serif" style={{ fontSize: "1.3rem", color: "#fff3ea" }}>{f.name}</div>
                  </div>
                ))}
                <Link href="/festivals" className="btn btn-gold" style={{ justifySelf: "start", marginTop: 6 }}>All Festivals</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ───── Sevas ───── */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Puja · पूजा" title="Offer a Seva to the Lord">
            Pujas are performed by Vedic pandits in your name and gotra. Attend in person or receive the prasadam at home.
          </SectionHead>
          <div className="grid grid-3">
            {sevas.slice(0, 3).map((s, i) => (
              <article key={s.slug} className={`card seva-card reveal d${i + 1}`} style={{ padding: 0, overflow: "hidden" }}>
                <div className="pc-img"><Photo id={s.image} fill sizes="(max-width: 980px) 100vw, 33vw" /></div>
                <div style={{ padding: "26px 28px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div className="seva-meta"><span className="tag">{s.category}</span><span className="tag tag-gold">{s.duration}</span></div>
                  <h3>{s.name}</h3>
                  <div className="deva muted" style={{ marginTop: -6, marginBottom: 12 }}>{s.hindi}</div>
                  <p style={{ flex: 1 }}>{s.desc}</p>
                  <div className="seva-foot">
                    <div className="price">₹{s.price.toLocaleString("en-IN")}</div>
                    <Link href="/sevas#book" className="btn btn-primary btn-sm">Book</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="center" style={{ marginTop: 44 }}>
            <Link href="/sevas" className="btn btn-outline">View All {sevas.length} Sevas</Link>
          </div>
        </div>
      </section>

      {/* ───── Glimpses ribbon ───── */}
      <section className="section-sm bg-sand" style={{ paddingBottom: 30 }}>
        <SectionHead eyebrow="Jhalak · झलक" title="Glimpses of the Mandir">
          Moments of devotion from the sanctum, the shrines and our festivals.
        </SectionHead>
        <PhotoRibbon ids={ribbon} />
        <div className="center" style={{ paddingBottom: 40 }}>
          <Link href="/gallery" className="btn btn-primary">Open the Gallery</Link>
        </div>
      </section>

      {/* ───── Visit strip ───── */}
      <section className="section">
        <div className="container split wide-left">
          <div className="reveal">
            <span className="eyebrow">Yatra · <span className="deva">यात्रा</span></span>
            <h2>Plan your pilgrimage</h2>
            <p className="lead">Everything you need for a peaceful visit — how to reach, what to wear, where to stay and how to make the most of your darshan.</p>
            <div className="grid grid-2" style={{ marginTop: 30, gap: 18 }}>
              {[
                { i: <Icon.Shirt />, t: "Traditional attire", d: "Modest clothing; stoles provided" },
                { i: <Icon.Shoe />, t: "Footwear stand", d: "Free, at the main gate" },
                { i: <Icon.Car />, t: "Free parking", d: "Beside the temple complex" },
                { i: <Icon.Wheelchair />, t: "Accessible", d: "Ramps & wheelchairs available" },
              ].map((x) => (
                <div key={x.t} style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <div className="card-icon" style={{ width: 52, height: 52, margin: 0, flexShrink: 0 }}>{x.i}</div>
                  <div><strong className="serif" style={{ fontSize: "1.2rem", color: "var(--crimson-deep)" }}>{x.t}</strong><div className="muted" style={{ fontSize: "1rem" }}>{x.d}</div></div>
                </div>
              ))}
            </div>
            <div className="btn-row" style={{ marginTop: 34 }}>
              <Link href="/visit" className="btn btn-primary">Visitor Guide</Link>
              <Link href="/contact" className="btn btn-outline">Get Directions</Link>
            </div>
          </div>
          <div className="reveal d2">
            <FramedPhoto id="temple-utsav-day" ratio="4 / 5" caption="The mandir on a festival morning" />
          </div>
        </div>
      </section>

      {/* ───── Articles ───── */}
      <section className="section bg-sand">
        <div className="container">
          <SectionHead eyebrow="Gyan · ज्ञान" title="Wisdom from the Temple">
            Reflections on scripture, symbolism and the everyday practice of dharma.
          </SectionHead>
          <div className="grid grid-3">
            {articles.slice(0, 3).map((a, i) => (
              <Link href={`/articles/${a.slug}`} key={a.slug} className={`card article-card reveal d${i + 1}`}>
                <div className="pc-img"><Photo id={a.image} fill sizes="(max-width: 980px) 100vw, 33vw" position="50% 25%" /></div>
                <div className="ac-body">
                  <div className="meta">{a.category} · {a.read} read</div>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <span className="link-arrow">Read article <span>→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Donate CTA ───── */}
      <section className="section">
        <div className="container">
          <div className="cta-band bg-dark reveal">
            <Mandala className="cta-mandala" />
            <div style={{ position: "relative" }}>
              <span className="eyebrow">Daan · <span className="deva">दान</span></span>
              <h2>Keep the lamp of dharma burning</h2>
              <p>Your offering sustains daily worship, feeds thousands through annadanam and preserves this sacred abode for generations to come. All donations are eligible under Section 80G.</p>
              <div className="btn-row" style={{ marginTop: 26 }}>
                <Link href="/donate" className="btn btn-gold">Donate Now</Link>
                <Link href="/annadanam" className="btn btn-ghost-light btn-outline">Sponsor Annadanam</Link>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <figure className="photo-card" style={{ aspectRatio: "4 / 3" }}>
                <Photo id="temple-night-gate" fill sizes="(max-width: 980px) 100vw, 40vw" />
              </figure>
              <FilledLotus style={{ position: "absolute", width: 150, left: -40, bottom: -40, zIndex: 3 }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
