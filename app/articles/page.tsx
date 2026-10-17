import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { articles } from "@/lib/data";
import { fmtDate } from "@/lib/time";

export const metadata: Metadata = { title: "Articles" };

export default function Articles() {
  const [feat, ...rest] = articles;
  return (
    <>
      <PageHero crumb="Articles" image="parikrama-mirror" hindi="ज्ञान गंगा" title="Articles & Reflections" subtitle="Writings on scripture, symbolism, festivals and the everyday practice of dharma." />

      <section className="section">
        <div className="container">
          <Link href={`/articles/${feat.slug}`} className="card article-card reveal" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", marginBottom: 40 }}>
            <div className="pc-img" style={{ aspectRatio: "auto", minHeight: 380 }}><Photo id={feat.image} fill sizes="(max-width: 980px) 100vw, 60vw" position="50% 30%" /></div>
            <div className="ac-body" style={{ justifyContent: "center", padding: "40px" }}>
              <div className="meta">Featured · {feat.category} · {fmtDate(feat.date)}</div>
              <h2>{feat.title}</h2>
              <p className="muted" style={{ fontSize: "1.15rem", flex: 0 }}>{feat.excerpt}</p>
              <span className="link-arrow">Read article <span>→</span></span>
            </div>
          </Link>
          <div className="grid grid-3">
            {rest.map((a, i) => (
              <Link href={`/articles/${a.slug}`} key={a.slug} className={`card article-card reveal d${(i % 3) + 1}`}>
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
      <style>{`@media (max-width: 980px){ a.article-card[style]{ grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
