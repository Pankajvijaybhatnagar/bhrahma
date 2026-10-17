"use client";

import { useState } from "react";
import type { TempleEvent } from "@/lib/data";
import { fmtDate } from "@/lib/time";
import { Icon } from "@/components/Ornaments";

const types = ["All", "Festival", "Satsang", "Katha", "Yagya", "Seva", "Youth"];

export default function EventsList({ events }: { events: TempleEvent[] }) {
  const [type, setType] = useState("All");
  const [saved, setSaved] = useState<string[]>([]);
  const list = events.filter((e) => type === "All" || e.type === type);

  return (
    <>
      <div className="chip-group" style={{ justifyContent: "center", marginBottom: 40 }}>
        {types.map((t) => (
          <button key={t} className={`chip ${type === t ? "active" : ""}`} onClick={() => setType(t)}>{t}</button>
        ))}
      </div>
      <div style={{ display: "grid", gap: 18, maxWidth: 980, margin: "0 auto" }}>
        {list.map((e) => (
          <article key={e.title} className="card" style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 26, alignItems: "center", padding: 24 }}>
            <div style={{ width: 92, textAlign: "center", padding: "14px 0", borderRadius: 16, background: "linear-gradient(160deg,var(--crimson),var(--maroon))", color: "var(--gold-cream)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "2.1rem", lineHeight: 1 }}>{fmtDate(e.date, { day: "2-digit" })}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: ".7rem", letterSpacing: ".22em" }}>{fmtDate(e.date, { month: "short" }).toUpperCase()}</div>
            </div>
            <div>
              <span className="tag" style={{ marginBottom: 8 }}>{e.type}</span>
              <h3 style={{ margin: "6px 0 6px" }}>{e.title}</h3>
              <p className="muted" style={{ margin: "0 0 8px", fontSize: "1.02rem" }}>{e.desc}</p>
              <div className="muted" style={{ display: "flex", gap: 18, flexWrap: "wrap", fontSize: ".95rem" }}>
                <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><Icon.Clock className="" />{e.time}</span>
                <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}><Icon.Pin className="" />{e.place}</span>
              </div>
            </div>
            <button
              className={`btn btn-sm ${saved.includes(e.title) ? "btn-primary" : "btn-outline"}`}
              onClick={() => setSaved((s) => (s.includes(e.title) ? s.filter((x) => x !== e.title) : [...s, e.title]))}
            >
              {saved.includes(e.title) ? "✓ Attending" : "I'll attend"}
            </button>
          </article>
        ))}
      </div>
      <style>{`@media (max-width: 680px){ .container article.card{ grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
