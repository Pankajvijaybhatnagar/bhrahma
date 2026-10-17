"use client";

import { useMemo, useState } from "react";
import { sevas, type Seva } from "@/lib/data";
import { Icon } from "./Ornaments";
import Photo from "./Photo";

const cats = ["All", "Daily", "Special", "Sanskar", "Festival"] as const;

export default function SevaBooking() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [picked, setPicked] = useState<Seva>(sevas[0]);
  const [done, setDone] = useState<null | { name: string; date: string }>(null);
  const list = useMemo(() => sevas.filter((s) => cat === "All" || s.category === cat), [cat]);

  const choose = (s: Seva) => {
    setPicked(s);
    setDone(null);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="chip-group reveal" style={{ justifyContent: "center", marginBottom: 40 }}>
        {cats.map((c) => (
          <button key={c} className={`chip ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>
            {c === "All" ? "All Sevas" : `${c} Sevas`}
          </button>
        ))}
      </div>

      <div className="grid grid-3">
        {list.map((s) => (
          <article key={s.slug} className="card seva-card" style={{ paddingTop: 14 }}>
            <div className="pc-img rounded" style={{ aspectRatio: "16 / 10", margin: "0 -16px 20px" }}>
              <Photo id={s.image} fill sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw" />
            </div>
            <div className="seva-meta">
              <span className="tag">{s.category}</span>
              <span className="tag tag-gold">{s.duration}</span>
            </div>
            <h3>{s.name}</h3>
            <div className="deva muted" style={{ marginTop: -6, marginBottom: 12 }}>{s.hindi}</div>
            <p>{s.desc}</p>
            <ul>
              {s.includes.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <div className="seva-foot">
              <div className="price">₹{s.price.toLocaleString("en-IN")}<small>onwards</small></div>
              <button className="btn btn-primary btn-sm" onClick={() => choose(s)}>Book</button>
            </div>
          </article>
        ))}
      </div>

      <div id="book" className="split" style={{ marginTop: 100, scrollMarginTop: 110, alignItems: "start" }}>
        <div className="reveal">
          <span className="eyebrow">Book a Seva</span>
          <h2>Offer a puja in your family&apos;s name</h2>
          <p className="lead">Fill in your details and our seva office will confirm your booking on WhatsApp within a few hours. If you cannot attend, the pandit will take your sankalp and send you the prasadam.</p>
          <ul className="feature-list">
            <li><Icon.Check /> Sankalp in your name, gotra and nakshatra</li>
            <li><Icon.Check /> Video of the puja shared after completion</li>
            <li><Icon.Check /> Prasadam couriered anywhere in India</li>
            <li><Icon.Check /> 80G receipt issued for every offering</li>
          </ul>
        </div>
        <div className="form-panel reveal d1">
          {done ? (
            <div className="success">
              <Icon.Check className="ok" />
              <h3>Seva request received</h3>
              <p className="muted">Pranam {done.name}. Your request for <b>{picked.name}</b> on <b>{done.date}</b> has been noted. The seva office will contact you shortly to confirm.</p>
              <button className="btn btn-outline btn-sm" onClick={() => setDone(null)}>Book another seva</button>
            </div>
          ) : (
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                setDone({ name: String(f.get("name")), date: String(f.get("date")) });
              }}
            >
              <div className="field">
                <label htmlFor="seva">Seva</label>
                <select id="seva" value={picked.slug} onChange={(e) => setPicked(sevas.find((s) => s.slug === e.target.value)!)}>
                  {sevas.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.name} — ₹{s.price.toLocaleString("en-IN")}</option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <div className="field"><label htmlFor="name">Full name</label><input id="name" name="name" required /></div>
                <div className="field"><label htmlFor="gotra">Gotra</label><input id="gotra" name="gotra" placeholder="Optional" /></div>
              </div>
              <div className="form-row">
                <div className="field"><label htmlFor="phone">Phone / WhatsApp</label><input id="phone" name="phone" type="tel" required /></div>
                <div className="field"><label htmlFor="date">Preferred date</label><input id="date" name="date" type="date" required /></div>
              </div>
              <div className="field">
                <label htmlFor="mode">Attendance</label>
                <select id="mode" name="mode">
                  <option>I will attend in person</option>
                  <option>Perform on my behalf (send prasadam)</option>
                  <option>Perform on my behalf (online video)</option>
                </select>
              </div>
              <div className="field"><label htmlFor="note">Names for sankalp / special prayer</label><textarea id="note" name="note" /></div>
              <button className="btn btn-primary" type="submit">Request Booking · ₹{picked.price.toLocaleString("en-IN")}</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
