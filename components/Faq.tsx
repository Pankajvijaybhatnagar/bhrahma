"use client";

import { useState } from "react";

export default function Faq({ items, filter = true }: { items: { q: string; a: string; cat: string }[]; filter?: boolean }) {
  const cats = ["All", ...Array.from(new Set(items.map((i) => i.cat)))];
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(0);
  const shown = items.filter((i) => cat === "All" || i.cat === cat);

  return (
    <>
      {filter && (
        <div className="chip-group" style={{ justifyContent: "center", marginBottom: 34 }}>
          {cats.map((c) => (
            <button key={c} className={`chip ${cat === c ? "active" : ""}`} onClick={() => { setCat(c); setOpen(0); }}>
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="accordion">
        {shown.map((f, i) => (
          <div key={f.q} className={`acc-item ${open === i ? "open" : ""}`}>
            <button className="acc-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
              {f.q}
              <span className="plus">+</span>
            </button>
            <div className="acc-a">
              <div><p>{f.a}</p></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
