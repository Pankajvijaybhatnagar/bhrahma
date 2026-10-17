import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import SimpleForm from "@/components/SimpleForm";
import { Icon } from "@/components/Ornaments";
import Photo, { FramedPhoto } from "@/components/Photo";

export const metadata: Metadata = { title: "Annadanam & Prasadam" };

const plans = [
  { t: "Bal Bhojan", p: 1100, d: "A nourishing meal for 25 children from the temple's pathshala and nearby schools." },
  { t: "Sadhu Seva", p: 2100, d: "Feed 50 sadhus and pilgrims with full sattvic thali." },
  { t: "Ek Samay Annadanam", p: 11000, d: "Sponsor one complete meal service for all devotees on a chosen day." },
  { t: "Purna Divas Annadanam", p: 21000, d: "Sponsor breakfast, lunch and dinner prasadam for an entire day." },
];

const prasad = [
  { t: "Panchamrit", d: "Milk, curd, ghee, honey and sugar — offered after morning abhishek." },
  { t: "Kheer & Malpua", d: "The Lord's favourite offering at Raj Bhog every Sunday." },
  { t: "Besan Ladoo", d: "Available at the prasad counter, prepared in pure desi ghee." },
  { t: "Panjiri", d: "Distributed on Ekadashi, Janmashtami and Ram Navami." },
];

export default function Annadanam() {
  return (
    <>
      <PageHero crumb="Annadanam" image="kalash-yatra" hindi="अन्नदान · प्रसाद" title="Annadanam & Prasadam" subtitle="अन्नं ब्रह्म — Food is Brahman. No one who comes to the Lord's door leaves hungry." />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Mahadaan</span>
            <h2>The temple kitchen never sleeps</h2>
            <p className="lead">Every day, the temple&apos;s kitchen prepares fresh, sattvic prasadam for pilgrims, sadhus, students and anyone in need — without asking who they are or why they came.</p>
            <ul className="feature-list">
              <li><Icon.Check /> Cooked with pure ingredients, without onion or garlic</li>
              <li><Icon.Check /> Offered to the Lord before it is served</li>
              <li><Icon.Check /> Served seated, with dignity, on leaf plates</li>
              <li><Icon.Check /> Open 12:00 PM – 2:30 PM daily, and evenings on festivals</li>
            </ul>
          </div>
          <div className="photo-pair reveal d2">
            <div className="pp-main"><FramedPhoto id="kalash-yatra" ratio="4 / 5" caption="अन्नं ब्रह्म · Food is Brahman" /></div>
            <div className="pp-small"><figure className="photo-card" style={{ aspectRatio: "1" }}><Photo id="temple-prasad-day" fill sizes="25vw" /></figure></div>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <SectionHead eyebrow="Sponsor a Meal" title="Annadanam Seva">
            Dedicate a meal on a birthday, anniversary or in loving memory of an ancestor. The sankalp is taken in your family&apos;s name.
          </SectionHead>
          <div className="grid grid-4">
            {plans.map((p, i) => (
              <div className={`card-dark reveal d${i + 1}`} key={p.t} style={{ display: "flex", flexDirection: "column" }}>
                <h3>{p.t}</h3>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--gold-bright)", marginBottom: 12 }}>₹{p.p.toLocaleString("en-IN")}</div>
                <p style={{ flex: 1 }}>{p.d}</p>
                <a href="#sponsor" className="btn btn-gold btn-sm">Sponsor</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHead eyebrow="Prasadam" title="Blessed offerings of the Lord" />
          <div className="grid grid-4">
            {prasad.map((p, i) => (
              <div className={`card corner center reveal d${i + 1}`} key={p.t}>
                <div className="card-icon" style={{ margin: "0 auto 18px" }}><Icon.Bowl /></div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="sponsor" style={{ scrollMarginTop: 90 }}>
        <div className="container narrow">
          <SectionHead eyebrow="Sponsor Annadanam" title="Book your annadanam date" />
          <div className="reveal">
            <SimpleForm
              submit="Request Annadanam Seva"
              successTitle="Annadanam request received"
              successText="May your offering bring blessings to your family. Our seva office will call you to confirm the date and payment details."
              fields={[
                { name: "plan", label: "Annadanam plan", options: plans.map((p) => `${p.t} — ₹${p.p.toLocaleString("en-IN")}`) },
                { name: "name", label: "Full name", required: true, half: true },
                { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true, half: true },
                { name: "date", label: "Preferred date", type: "date", required: true, half: true },
                { name: "occasion", label: "Occasion", options: ["Birthday", "Anniversary", "In memory of", "Festival", "Other"], half: true },
                { name: "names", label: "Names for sankalp", textarea: true },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
