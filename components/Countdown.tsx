"use client";

import { useEffect, useState } from "react";

export default function Countdown({ to }: { to: string }) {
  const target = new Date(to + "T05:00:00+05:30").getTime();
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const s = Math.floor((left ?? 0) / 1000);
  const parts = [
    { v: Math.floor(s / 86400), l: "Days" },
    { v: Math.floor((s % 86400) / 3600), l: "Hours" },
    { v: Math.floor((s % 3600) / 60), l: "Minutes" },
    { v: s % 60, l: "Seconds" },
  ];

  return (
    <div className="countdown" aria-live="off">
      {parts.map((p) => (
        <div key={p.l}>
          <b>{left === null ? "--" : String(p.v).padStart(2, "0")}</b>
          <span>{p.l}</span>
        </div>
      ))}
    </div>
  );
}
