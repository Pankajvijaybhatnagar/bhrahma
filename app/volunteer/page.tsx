import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import SimpleForm from "@/components/SimpleForm";
import { Icon } from "@/components/Ornaments";
import Photo from "@/components/Photo";

export const metadata: Metadata = { title: "Volunteer" };

const roles = [
  { i: <Icon.Bowl />, t: "Annadanam Seva", d: "Help cook, serve and clean in the temple kitchen. The most loved seva of all." },
  { i: <Icon.Flame />, t: "Festival Seva", d: "Decorate, manage queues and light diyas during Deepavali, Kartik Purnima and Brahmotsav." },
  { i: <Icon.Heart />, t: "Gau Seva", d: "Care for the cows of the temple gaushala — feeding, cleaning and loving them." },
  { i: <Icon.Book />, t: "Vidya Seva", d: "Teach Sanskrit, Gita, music or school subjects to children at the pathshala." },
  { i: <Icon.Users />, t: "Darshan Seva", d: "Guide visitors, assist the elderly and keep the darshan lines calm and orderly." },
  { i: <Icon.Camera />, t: "Digital Seva", d: "Photography, video, social media, design and website support from anywhere." },
];

export default function Volunteer() {
  return (
    <>
      <PageHero crumb="Volunteer" image="havan-2" hindi="सेवा ही धर्म है" title="Volunteer with Us" subtitle="Offer your time and skills to the Lord. Seva is the simplest form of worship, and the most joyful." />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Seva Opportunities" title="Find your seva">
            Whether you have an hour a week or a month every year, there is a place for you in the temple family.
          </SectionHead>
          <div className="grid grid-3">
            {roles.map((r, i) => (
              <div className={`card corner reveal d${(i % 3) + 1}`} key={r.t}>
                <div className="card-icon">{r.i}</div>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">Join the Sevadal</span>
            <h2>Register as a volunteer</h2>
            <p className="lead">Fill in the form and our Seva Pramukh will get in touch with you about orientation and the next opportunities.</p>
            <blockquote className="serif" style={{ margin: "30px 0 0", padding: "24px 28px", borderLeft: "3px solid var(--gold)", background: "#fff", borderRadius: "0 16px 16px 0", fontSize: "1.3rem", fontStyle: "italic", color: "var(--crimson-deep)" }}>
              &ldquo;Coming to the temple as a volunteer changed how I see worship. Serving prasadam is my puja now.&rdquo;
              <div style={{ fontFamily: "var(--font-display)", fontStyle: "normal", fontSize: ".75rem", letterSpacing: ".2em", marginTop: 12, color: "var(--rose)" }}>— A SEVADAL MEMBER</div>
            </blockquote>
            <div className="grid grid-2" style={{ gap: 14, marginTop: 26 }}>
              <figure className="photo-card" style={{ aspectRatio: "3 / 4" }}><Photo id="pushp-arpan" fill sizes="25vw" /><figcaption>Pushp arpan</figcaption></figure>
              <figure className="photo-card" style={{ aspectRatio: "3 / 4" }}><Photo id="dhwaja" fill sizes="25vw" /><figcaption>Yatra preparations</figcaption></figure>
            </div>
          </div>
          <div className="reveal d1">
            <SimpleForm
              submit="Register for Seva"
              successTitle="Thank you for offering your seva"
              successText="Our Seva Pramukh will contact you within two days with orientation details. Jai Shri Brahma!"
              fields={[
                { name: "name", label: "Full name", required: true, half: true },
                { name: "age", label: "Age", type: "number", half: true },
                { name: "phone", label: "Phone", type: "tel", required: true, half: true },
                { name: "email", label: "Email", type: "email", half: true },
                { name: "role", label: "Preferred seva", options: roles.map((r) => r.t) },
                { name: "time", label: "Availability", options: ["Weekends", "Weekdays", "Festivals only", "Remote / online"] },
                { name: "skills", label: "Skills or anything you'd like to share", textarea: true },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
