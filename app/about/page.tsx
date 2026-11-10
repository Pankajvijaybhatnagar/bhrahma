import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Photo, { FramedPhoto } from "@/components/Photo";
import { Diya, Icon } from "@/components/Ornaments";

export const metadata: Metadata = { title: "About the Mandir" };

const values = [
  { icon: <Icon.Flame />, t: "Shraddha", h: "श्रद्धा", d: "Faith expressed through worship performed exactly as the shastras prescribe, every single day." },
  { icon: <Icon.Heart />, t: "Seva", h: "सेवा", d: "Service without expectation — to the Lord, to devotees and to every living being." },
  { icon: <Icon.Book />, t: "Vidya", h: "विद्या", d: "Learning that lights the way: Vedic study, Sanskrit and the teachings of the Gita." },
  { icon: <Icon.Users />, t: "Samarasta", h: "समरसता", d: "All are equal before the Creator. No one is turned away for caste, creed or means." },
];

const team = [
  { name: "Mukhya Pujari", role: "Head Priest", d: "Leads daily abhishek and all major rituals, trained in the Shukla Yajurveda tradition." },
  { name: "Acharya-ji", role: "Vedic Scholar", d: "Guides the Sanskrit pathshala and the weekly Gita satsang for devotees of all ages." },
  { name: "Trust Secretary", role: "Administration", d: "Oversees temple management, accounts and the welfare programmes of the trust." },
  { name: "Seva Pramukh", role: "Volunteer Coordinator", d: "Organises hundreds of volunteers for annadanam, festivals and gau seva." },
];

export default function About() {
  return (
    <>
      <PageHero crumb="About" images={["temple-utsav-wide", "mandap-hall", "temple-night-gate"]} hindi="हमारे बारे में" title="About the Mandir" subtitle="A living home of worship dedicated to Lord Brahma, the Creator — and to everyone who comes seeking His blessings." />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Our Story</span>
            <h2>A rare abode of the Creator</h2>
            <p className="lead">Among the Trimurti, Lord Brahma is worshipped in very few temples. Bhagwan Shri Brahma Mandir in Kurukshetra — the sacred land where the Bhagavad Gita was spoken — was established so that devotees could offer their prayers to the one who began all things.</p>
            <p className="muted">The temple is managed by a public charitable trust and sustained entirely by the offerings of devotees. Its doors are open every day of the year, and darshan has always been free.</p>
            <p className="muted">Over the years the mandir has grown into much more than a place of worship: it is a kitchen that feeds the hungry, a school where children learn Sanskrit, a stage for festivals that bring the whole town together, and a quiet courtyard where anyone can sit in peace.</p>
            <div className="signature">
              <Image src="/logo.png" alt="" width={70} height={70} style={{ borderRadius: "50%" }} />
              <div><strong>BRAHMA MANDIR TRUST</strong><span>Serving the Lord and His devotees</span></div>
            </div>
          </div>
          <div className="photo-pair reveal d2">
            <div className="pp-main"><FramedPhoto id="temple-signboard" ratio="4 / 5" position="50% 30%" caption="भगवान श्री ब्रह्मा मंदिर, कुरुक्षेत्र" /></div>
            <div className="pp-small"><figure className="photo-card" style={{ aspectRatio: "1" }}><Photo id="temple-night-tower" fill sizes="25vw" /></figure></div>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <SectionHead eyebrow="Vision & Mission" title="Why the temple exists" />
          <figure className="photo-card reveal" style={{ aspectRatio: "21 / 8", marginBottom: 28 }}>
            <Photo id="mandap-hall" fill sizes="(max-width: 1220px) 100vw, 1180px" />
            <figcaption>Devotees fill the hall on a festival morning</figcaption>
          </figure>
          <div className="grid grid-2">
            <div className="card-dark reveal">
              <Diya style={{ width: 70, color: "var(--gold)", marginBottom: 14 }} />
              <h3>Our Vision</h3>
              <p>To be a radiant centre of Sanatana Dharma where the worship of the Creator inspires people to live creatively, compassionately and in harmony with all of creation.</p>
            </div>
            <div className="card-dark reveal d1">
              <Diya style={{ width: 70, color: "var(--gold)", marginBottom: 14 }} />
              <h3>Our Mission</h3>
              <p>To preserve authentic Vedic worship; to feed every visitor; to teach the scriptures to the next generation; and to serve society through education, gau seva and relief work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our Values" title="Four lamps that guide us" />
          <div className="grid grid-4">
            {values.map((v, i) => (
              <div className={`card corner center reveal d${i + 1}`} key={v.t}>
                <div className="card-icon" style={{ margin: "0 auto 20px" }}>{v.icon}</div>
                <h3 style={{ marginBottom: 2 }}>{v.t}</h3>
                <div className="deva" style={{ color: "var(--rose)", marginBottom: 12 }}>{v.h}</div>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHead eyebrow="Guru Kripa" title="Guided by Guruji & Guru Maa">
            The temple is blessed by Satgurudev Swami Sri Shaktidev ji Maharaj and Guru Maa Sri Santosh Onkar ji Maharaj, and cared for by priests, scholars and volunteers who have dedicated their lives to seva.
          </SectionHead>
          <div className="split" style={{ alignItems: "start" }}>
            <div className="guru-duo reveal">
              <Link href="/guruji-maharaj" className="guru-card">
                <Photo id="guruji-garland" fill sizes="(max-width: 680px) 100vw, 25vw" position="50% 25%" />
                <div className="gc-body"><h3>Sri Shaktidev ji Maharaj</h3><div className="deva">श्री शक्तिदेव जी महाराज</div></div>
              </Link>
              <Link href="/guruji-maharaj" className="guru-card" style={{ marginTop: 50 }}>
                <Photo id="gurumaa-blessing" fill sizes="(max-width: 680px) 100vw, 25vw" position="50% 30%" />
                <div className="gc-body"><h3>Santosh Onkar ji Maharaj</h3><div className="deva">श्री संतोष ओंकार जी महाराज</div></div>
              </Link>
            </div>
            <div className="grid grid-2 reveal d1" style={{ gap: 18 }}>
              {team.map((t) => (
                <div className="card" key={t.role} style={{ padding: 24 }}>
                  <div className="tag" style={{ marginBottom: 10 }}>{t.role}</div>
                  <h4>{t.name}</h4>
                  <p style={{ margin: 0, fontSize: "1rem" }}>{t.d}</p>
                </div>
              ))}
              <figure className="photo-card" style={{ aspectRatio: "16 / 9", gridColumn: "1 / -1" }}>
                <Photo id="havan-2" fill sizes="(max-width: 980px) 100vw, 45vw" />
                <figcaption>Acharyas conducting the Vedic havan</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container center reveal">
          <h2>Become part of the temple family</h2>
          <p className="lead" style={{ maxWidth: 680, margin: "0 auto 30px" }}>Visit for darshan, join a satsang, volunteer your time or support the temple&apos;s work.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/visit" className="btn btn-primary">Plan a Visit</Link>
            <Link href="/volunteer" className="btn btn-outline">Volunteer</Link>
          </div>
        </div>
      </section>
    </>
  );
}
