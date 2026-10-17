import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { Lotus } from "@/components/Ornaments";
import { Parallax } from "@/components/Motion";
import Photo from "@/components/Photo";

export const metadata: Metadata = { title: "History & Legends" };

const legends = [
  { era: "The Beginning", t: "Born of the Lotus", d: "As Lord Vishnu lay in yoga-nidra upon the serpent Shesha in the cosmic ocean, a golden lotus rose from his navel. Within it appeared Brahma, who looked in every direction and, seeing only water, sat in meditation for a thousand celestial years until the knowledge of creation dawned within him." },
  { era: "Srishti", t: "The Creation of the Worlds", d: "From his mind Brahma brought forth the Manasaputras — the great sages such as Marichi, Atri, Angiras and Vasishtha — who became the progenitors of all beings. He divided time into yugas and kalpas and set the sun and moon on their courses." },
  { era: "The Vedas", t: "Hayagriva and the Rescue of the Vedas", d: "Once the demons Madhu and Kaitabha stole the Vedas from Brahma while he slept. Lord Vishnu took the horse-headed form of Hayagriva, slew them and restored the sacred knowledge to the Creator — teaching that wisdom must always be guarded." },
  { era: "The Great Yagya", t: "The Yagya at Pushkar", d: "Tradition tells that Brahma dropped a lotus upon the earth, and where its petals fell three lakes appeared. There, on Kartik Purnima, he performed a great yagya — which is why that full moon remains the holiest day of the year for his devotees." },
  { era: "Kurukshetra", t: "The Land of Brahma's Yagya", d: "Kurukshetra is among the most sacred lands of Bharat. Tradition holds that Lord Brahma performed a great yagya here at the dawn of creation, and the vast Brahma Sarovar bears his name. On this same holy ground Shri Krishna later spoke the Bhagavad Gita to Arjuna." },
  { era: "Saraswati", t: "The Goddess of the Word", d: "From Brahma emerged Saraswati, the power of speech and learning. Creation required not only form but meaning, and she gave the universe its voice, its music and its knowledge." },
  { era: "The Teaching", t: "Why Brahma is Rarely Worshipped", d: "The Puranas offer several stories explaining why so few temples are dedicated to Brahma. Their shared lesson is humility: even the Creator is subject to dharma, and every role in the cosmic order is sacred." },
];

export default function History() {
  return (
    <>
      <PageHero crumb="History & Legends" image="brahma-trimurti-darbar" hindi="इतिहास एवं कथाएँ" title="History & Legends" subtitle="Stories from the Puranas and the living tradition that gave rise to the worship of the Creator." />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Puranic Kathas" title="The story of creation">
            Told by grandparents to grandchildren for thousands of years, these legends carry the deepest truths of our dharma.
          </SectionHead>
          <div className="timeline">
            {legends.map((l) => (
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

      <section className="photo-band">
        <Parallax className="pb-img"><Photo id="temple-night-skyline" fill sizes="100vw" /></Parallax>
        <div className="container narrow center reveal">
          <Lotus style={{ width: 120, margin: "0 auto 20px", color: "var(--gold-bright)" }} />
          <h2>The temple today</h2>
          <p className="lead" style={{ color: "#f0d4d4" }}>
            The worship that began in these ancient stories continues at Brahma Mandir every day — in the abhishek at dawn, the chanting of the Vedas and the lamps floated on the sarovar each Kartik. The legends are not only remembered here; they are lived.
          </p>
        </div>
      </section>
    </>
  );
}
