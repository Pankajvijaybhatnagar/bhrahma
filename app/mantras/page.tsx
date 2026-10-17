import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import MalaCounter from "@/components/MalaCounter";
import { OmSymbol } from "@/components/Ornaments";
import { mantras } from "@/lib/data";

export const metadata: Metadata = { title: "Mantras & Stotras" };

export default function Mantras() {
  return (
    <>
      <PageHero crumb="Mantras" image="mirror-shrine-6" hindi="मंत्र एवं स्तोत्र" title="Mantras & Stotras" subtitle="Sacred sound carries the presence of the Divine. Chant with understanding, and let the meaning settle in the heart." />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Japa" title="Sacred chants for daily practice">
            Each mantra is given in Devanagari, with transliteration and meaning, so that you can chant correctly and with feeling.
          </SectionHead>
          <div className="grid grid-2">
            {mantras.map((m, i) => (
              <article key={m.title} className={`mantra-card reveal d${(i % 2) + 1}`}>
                <OmSymbol className="om-bg" />
                <span className="tag" style={{ position: "relative", marginBottom: 16 }}>{m.when}</span>
                <h3 style={{ position: "relative" }}>{m.title}</h3>
                <div className="sk">{m.sanskrit}</div>
                <div className="tl">{m.transliteration}</div>
                <p className="mean">{m.meaning}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Digital Mala</span>
            <h2>Chant 108 times</h2>
            <p style={{ color: "#ecd0d0", fontSize: "1.2rem" }}>The mala of 108 beads is the traditional measure of japa. Use this counter while chanting the Brahma Gayatri — tap the circle once for each recitation.</p>
            <p className="deva" style={{ color: "var(--gold-bright)", fontSize: "1.4rem", lineHeight: 1.8 }}>ॐ वेदात्मनाय विद्महे<br />हिरण्यगर्भाय धीमहि<br />तन्नो ब्रह्मा प्रचोदयात् ॥</p>
          </div>
          <div className="reveal d1"><MalaCounter /></div>
        </div>
      </section>
    </>
  );
}
