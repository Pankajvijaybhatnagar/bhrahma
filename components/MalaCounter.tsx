"use client";

import { useState } from "react";

// A 108-bead japa counter: tap to count each recitation.
export default function MalaCounter() {
  const [count, setCount] = useState(0);
  const [rounds, setRounds] = useState(0);
  const r = 110;
  const circ = 2 * Math.PI * r;

  const tap = () => {
    if (count + 1 >= 108) {
      setCount(0);
      setRounds((x) => x + 1);
    } else setCount(count + 1);
  };

  return (
    <div className="mala">
      <button className="mala-ring" onClick={tap} aria-label="Count one recitation" style={{ border: 0, background: "none", padding: 0 }}>
        <svg viewBox="0 0 260 260">
          <circle cx="130" cy="130" r={r} fill="none" stroke="rgba(250,240,190,.15)" strokeWidth="14" />
          <circle cx="130" cy="130" r={r} fill="none" stroke="url(#malaG)" strokeWidth="14" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - count / 108)} style={{ transition: "stroke-dashoffset .4s" }} />
          {Array.from({ length: 36 }, (_, i) => {
            const a = (i / 36) * Math.PI * 2;
            return <circle key={i} cx={(130 + Math.cos(a) * 126).toFixed(2)} cy={(130 + Math.sin(a) * 126).toFixed(2)} r="3" fill={i / 36 <= count / 108 ? "#faf0be" : "rgba(250,240,190,.25)"} />;
          })}
          <defs>
            <linearGradient id="malaG"><stop offset="0" stopColor="#e1558b" /><stop offset="1" stopColor="#e7c66f" /></linearGradient>
          </defs>
        </svg>
        <span className="count">
          <span>
            <b>{count}</b>
            <span>OF 108 · TAP</span>
          </span>
        </span>
      </button>
      <div className="serif" style={{ fontSize: "1.2rem", color: "#f0d4d4" }}>
        Malas completed: <b style={{ color: "var(--gold-cream)" }}>{rounds}</b>
      </div>
      <button className="btn btn-ghost-light btn-sm" onClick={() => { setCount(0); setRounds(0); }}>Reset</button>
    </div>
  );
}
