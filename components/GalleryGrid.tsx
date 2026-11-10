"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { photos, type PhotoCat } from "@/lib/photos";

// ───────── Photo gallery ─────────
const cats: { id: "all" | "brahma" | PhotoCat; label: string }[] = [
  { id: "all", label: "All Photos" },
  { id: "brahma", label: "Lord Brahma" },
  { id: "deity", label: "Devi-Devta" },
  { id: "temple", label: "The Mandir" },
  { id: "night", label: "Deepotsav Nights" },
  { id: "utsav", label: "Rath Yatra & Utsav" },
  { id: "guru", label: "Guruji Maharaj" },
  { id: "seva", label: "Hawan Yagya" },
];
const catLabel: Record<PhotoCat, string> = { deity: "Devi-Devta", temple: "The Mandir", night: "Deepotsav", utsav: "Rath Yatra", guru: "Guruji Maharaj", seva: "Hawan Yagya" };
const isBrahma = (id: string) => /^(brahma|saraswati|utsav-murtis)/.test(id);
const order: PhotoCat[] = ["deity", "temple", "night", "utsav", "guru", "seva"];
const nearDuplicates = new Set(["decorated-shrine-2", "mirror-shrine-6", "mirror-shrine-7"]);

export default function GalleryGrid({ initial = "all" }: { initial?: (typeof cats)[number]["id"] }) {
  const [cat, setCat] = useState(initial);
  const [idx, setIdx] = useState<number | null>(null);
  const touchX = useRef(0);

  const list = useMemo(() => {
    const all = Object.entries(photos)
      .filter(([id]) => !nearDuplicates.has(id))
      .map(([id, p]) => ({ id, ...p }));
    if (cat === "brahma") return all.filter((p) => isBrahma(p.id));
    if (cat !== "all") return all.filter((p) => p.cat === cat);
    // "All": interleave categories so the grid feels varied
    const groups = order.map((c) => all.filter((p) => p.cat === c));
    const mixed: typeof all = [];
    for (let i = 0; mixed.length < all.length; i++) groups.forEach((g) => g[i] && mixed.push(g[i]));
    return mixed;
  }, [cat]);

  useEffect(() => {
    if (idx === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % list.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + list.length) % list.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [idx, list.length]);

  const cur = idx !== null ? list[idx] : null;

  return (
    <>
      <div className="chip-group" style={{ justifyContent: "center", marginBottom: 30 }}>
        {cats.map((c) => (
          <button key={c.id} className={`chip ${cat === c.id ? "active" : ""}`} onClick={() => setCat(c.id)}>{c.label}</button>
        ))}
      </div>
      <p className="gallery-count">{list.length} photographs</p>

      <div className="masonry photos">
        {list.map((p, i) => (
          <button key={p.id} className="g-photo" onClick={() => setIdx(i)} aria-label={`Open: ${p.alt}`}>
            <Image src={p.src} alt={p.alt} width={p.w} height={p.h} placeholder="blur" blurDataURL={p.blur} sizes="(max-width: 680px) 50vw, (max-width: 980px) 33vw, 25vw" style={{ width: "100%", height: "auto" }} />
            <span className="g-cap"><small>{catLabel[p.cat]}</small>{p.alt}</span>
          </button>
        ))}
      </div>

      {cur && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={cur.alt}
          onClick={() => setIdx(null)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) setIdx((i) => (i! + (dx < 0 ? 1 : -1) + list.length) % list.length);
          }}
        >
          <span className="lb-count">{idx! + 1} / {list.length}</span>
          <div onClick={(e) => e.stopPropagation()}>
            <div className="lb-photo">
              <Image src={cur.src} alt={cur.alt} fill sizes="92vw" placeholder="blur" blurDataURL={cur.blur} style={{ objectFit: "contain" }} />
            </div>
            <div className="lb-cap">{cur.alt}</div>
          </div>
          <button className="lb-close" aria-label="Close" onClick={() => setIdx(null)}>×</button>
          <button className="lb-nav lb-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setIdx((idx! - 1 + list.length) % list.length); }}>‹</button>
          <button className="lb-nav lb-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); setIdx((idx! + 1) % list.length); }}>›</button>
        </div>
      )}
    </>
  );
}
