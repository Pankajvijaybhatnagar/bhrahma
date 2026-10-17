"use client";

import { useEffect, useState } from "react";
import { dailySchedule } from "@/lib/data";
import { fmt12, templeNow, toMin } from "@/lib/time";

export default function ScheduleList() {
  const [mins, setMins] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => { const n = templeNow(); setMins(n.h * 60 + n.m); };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="schedule">
      {dailySchedule.map((s) => {
        const now = mins !== null && mins >= toMin(s.start) && mins < toMin(s.end ?? s.start);
        return (
          <div key={s.name} className={`slot reveal ${s.kind} ${now ? "now" : ""}`}>
            <div className="time">
              {fmt12(s.start)}
              {s.end && <small>to {fmt12(s.end)}</small>}
            </div>
            <div>
              <h4>{s.name}</h4>
              <p>{s.note}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              {now ? <span className="tag" style={{ background: "var(--crimson)", color: "var(--gold-cream)" }}>Now</span> : <span className="deva muted">{s.hindi}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
