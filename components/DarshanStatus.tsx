"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fmt12, scheduleState, templeNow } from "@/lib/time";
import { Diya } from "./Ornaments";

export default function DarshanStatus() {
  const [now, setNow] = useState<{ h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    setNow(templeNow());
    const id = setInterval(() => setNow(templeNow()), 1000);
    return () => clearInterval(id);
  }, []);

  const mins = now ? now.h * 60 + now.m : 0;
  const { current, open, nextAarti } = scheduleState(mins);
  const clock = now
    ? `${String(now.h % 12 || 12).padStart(2, "0")}:${String(now.m).padStart(2, "0")}:${String(now.s).padStart(2, "0")} ${now.h >= 12 ? "PM" : "AM"}`
    : "--:--:--";

  return (
    <div className="status-card reveal">
      <Diya style={{ position: "absolute", right: 20, top: 20, width: 90, color: "var(--crimson)" }} />
      <span className={`status-pill ${now && open ? "open" : "closed"}`}>
        <span className="pulse" />
        {now ? (open ? "Darshan Open Now" : "Sanctum Closed") : "Checking…"}
      </span>
      <div className="status-clock">{clock}</div>
      <div className="muted serif" style={{ fontSize: "1.15rem" }}>
        Temple time (IST) · {current ? current.name : "Night rest — opens at 5:00 AM"}
      </div>
      <div className="status-next">
        <div>
          <small>Next Aarti</small>
          <strong>{nextAarti.name}</strong>
          <div className="muted">{fmt12(nextAarti.start)}</div>
        </div>
        <Link href="/darshan" className="btn btn-primary btn-sm">Full Schedule</Link>
      </div>
    </div>
  );
}
