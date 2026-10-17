"use client";

import { useState } from "react";
import { Icon } from "./Ornaments";

const causes = [
  { id: "general", label: "Where most needed" },
  { id: "annadanam", label: "Annadanam" },
  { id: "gaushala", label: "Gau Seva" },
  { id: "festivals", label: "Festivals" },
  { id: "restoration", label: "Temple Restoration" },
  { id: "vidya", label: "Vidya Daan" },
];
const amounts = [
  { v: 501, l: "Lamps for a week" },
  { v: 1100, l: "Flowers for a day" },
  { v: 2100, l: "Feeds 50 devotees" },
  { v: 5100, l: "A day of abhishek" },
  { v: 11000, l: "Festival seva" },
  { v: 21000, l: "Annadanam for a day" },
];

export default function DonateForm() {
  const [cause, setCause] = useState("general");
  const [amount, setAmount] = useState(2100);
  const [custom, setCustom] = useState("");
  const [freq, setFreq] = useState<"once" | "monthly">("once");
  const [done, setDone] = useState(false);
  const total = custom ? Number(custom) : amount;

  if (done)
    return (
      <div className="form-panel success">
        <Icon.Heart className="ok" />
        <h3>Thank you for your offering</h3>
        <p className="muted">
          Your {freq === "monthly" ? "monthly " : ""}offering of <b>₹{total.toLocaleString("en-IN")}</b> towards{" "}
          <b>{causes.find((c) => c.id === cause)?.label}</b> has been recorded. You will receive payment details and your 80G receipt by email.
        </p>
        <p className="deva" style={{ color: "var(--crimson)", fontSize: "1.2rem" }}>दानं परमं धर्मः</p>
        <button className="btn btn-outline btn-sm" onClick={() => setDone(false)}>Make another offering</button>
      </div>
    );

  return (
    <form
      className="form-panel form"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <div className="chip-group" role="radiogroup" aria-label="Frequency">
        {(["once", "monthly"] as const).map((f) => (
          <button type="button" key={f} className={`chip ${freq === f ? "active" : ""}`} onClick={() => setFreq(f)}>
            {f === "once" ? "One-time" : "Monthly"}
          </button>
        ))}
      </div>

      <div className="field">
        <label>Choose a cause</label>
        <div className="chip-group">
          {causes.map((c) => (
            <button type="button" key={c.id} className={`chip ${cause === c.id ? "active" : ""}`} onClick={() => setCause(c.id)}>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label>Offering amount</label>
        <div className="amounts">
          {amounts.map((a) => (
            <button type="button" key={a.v} className={`amount ${!custom && amount === a.v ? "active" : ""}`} onClick={() => { setAmount(a.v); setCustom(""); }}>
              ₹{a.v.toLocaleString("en-IN")}
              <small>{a.l}</small>
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <label htmlFor="custom">Or enter your own amount (₹)</label>
        <input id="custom" type="number" min={51} value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="e.g. 3100" />
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="dn">Full name</label><input id="dn" required /></div>
        <div className="field"><label htmlFor="de">Email</label><input id="de" type="email" required /></div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="dp">Phone</label><input id="dp" type="tel" required /></div>
        <div className="field"><label htmlFor="pan">PAN (for 80G receipt)</label><input id="pan" placeholder="Optional" /></div>
      </div>
      <button className="btn btn-primary" type="submit" disabled={!total || total < 1}>
        Offer ₹{(total || 0).toLocaleString("en-IN")} {freq === "monthly" ? "/ month" : ""}
      </button>
      <p className="muted center" style={{ fontSize: "0.95rem", margin: 0 }}>🔒 Payments are processed securely. Eligible for tax benefit under Section 80G.</p>
    </form>
  );
}
