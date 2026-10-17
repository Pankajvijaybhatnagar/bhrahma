"use client";

import { useEffect, useState } from "react";
import Photo from "./Photo";
import { photo, type PhotoId } from "@/lib/photos";

// Crossfading background photographs with a slow Ken Burns zoom.
// With `meta`, shows the current photo's caption and segmented progress bars.
export default function HeroSlides({ ids, interval = 6500, meta = false }: { ids: PhotoId[]; interval?: number; meta?: boolean }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || ids.length < 2) return;
    const t = setTimeout(() => setI((x) => (x + 1) % ids.length), interval);
    return () => clearTimeout(t);
  }, [i, paused, ids.length, interval]);

  return (
    <>
      <div className="hero-slides" aria-hidden="true">
        {ids.map((id, n) => (
          <div key={id} className={`hero-slide ${n === i ? "on" : ""}`}>
            <Photo id={id} fill sizes="100vw" priority={n === 0} />
          </div>
        ))}
      </div>
      {meta && (
        <div className="hero-meta" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="hm-cap" key={i}>
            <b>{String(i + 1).padStart(2, "0")} / {String(ids.length).padStart(2, "0")}</b>
            {photo(ids[i]).alt}
          </div>
          <div className="hero-bars">
            {ids.map((id, n) => (
              <button key={id} className={n === i ? "on" : n < i ? "done" : ""} onClick={() => setI(n)} aria-label={`Show photo ${n + 1}`}>
                <span key={n === i ? `on-${i}` : "off"} style={n === i ? { animationDuration: `${interval}ms`, animationPlayState: paused ? "paused" : "running" } : undefined} />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
