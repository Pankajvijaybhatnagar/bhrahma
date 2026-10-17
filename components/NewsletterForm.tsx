"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  if (done) return <p style={{ marginTop: 14, color: "var(--gold-cream)" }}>🙏 Thank you. You will receive the daily panchang.</p>;
  return (
    <form
      className="newsletter"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input type="email" required placeholder="Your email" aria-label="Email" />
      <button className="btn btn-gold btn-sm" type="submit">Join</button>
    </form>
  );
}
