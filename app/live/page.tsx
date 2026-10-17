import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Photo from "@/components/Photo";
import type { PhotoId } from "@/lib/photos";
import { Diya, Icon, Mandala } from "@/components/Ornaments";
import { dailySchedule } from "@/lib/data";
import { fmt12 } from "@/lib/time";

export const metadata: Metadata = { title: "Live Darshan" };

// Replace with the temple's YouTube live stream / video ID to embed the real broadcast.
const YOUTUBE_LIVE_ID = "";

const past = [
  { t: "Deepotsav Night at the Mandir", img: "temple-night-lights" as PhotoId },
  { t: "Shringar Darshan — Utsav Day", img: "sanctum-balloons" as PhotoId },
  { t: "Shobha Yatra with Guruji", img: "shobha-yatra" as PhotoId },
];

export default function Live() {
  const aartis = dailySchedule.filter((s) => s.kind === "aarti");
  return (
    <>
      <PageHero crumb="Live Darshan" image="temple-dusk" hindi="लाइव दर्शन" title="Live Darshan" subtitle="Wherever you are in the world, join the aarti in the presence of Lord Brahma." />

      <section className="section bg-dark">
        <div className="container">
          <div className="live-frame reveal">
            <span className="live-badge"><i /> LIVE</span>
            {YOUTUBE_LIVE_ID ? (
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_LIVE_ID}?autoplay=0`}
                title="Live darshan"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              />
            ) : (
              <div className="art">
                <Photo id="brahma-trimurti-darbar" fill sizes="(max-width: 1220px) 100vw, 1180px" style={{ zIndex: -1, filter: "brightness(.5)" }} />
                <Mandala className="art-mandala" />
                <div className="center">
                  <div className="play" style={{ margin: "0 auto 20px" }}><Icon.Play className="" /></div>
                  <h3 style={{ marginBottom: 6 }}>Sandhya Aarti begins at 6:45 PM IST</h3>
                  <p style={{ color: "#f0d4d4", margin: 0 }}>The live stream starts 10 minutes before each aarti</p>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-4" style={{ marginTop: 40 }}>
            {aartis.map((a) => (
              <div className="card-dark center reveal" key={a.name}>
                <Diya style={{ width: 56, margin: "0 auto 10px", color: "var(--gold)" }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--gold-cream)" }}>{fmt12(a.start)}</div>
                <div className="serif" style={{ fontSize: "1.15rem" }}>{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Recordings" title="Past darshan & utsav">
            Relive the most beautiful moments from recent festivals and aartis.
          </SectionHead>
          <div className="grid grid-3">
            {past.map((p, i) => (
              <div className={`card article-card reveal d${i + 1}`} key={p.t}>
                <div style={{ position: "relative" }}>
                  <div className="pc-img"><Photo id={p.img} fill sizes="(max-width: 980px) 100vw, 33vw" /></div>
                  <div className="play" style={{ position: "absolute", left: "50%", top: "50%", translate: "-50% -50%", width: 64, height: 64 }}><Icon.Play className="" /></div>
                </div>
                <div className="ac-body">
                  <div className="meta">Video</div>
                  <h3 style={{ margin: 0 }}>{p.t}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 40 }}>
            <Link href="/sevas" className="btn btn-primary">Book a puja in your name</Link>
          </div>
        </div>
      </section>
    </>
  );
}
