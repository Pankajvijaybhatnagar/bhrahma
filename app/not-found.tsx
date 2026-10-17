import Link from "next/link";
import { Diya, Mandala } from "@/components/Ornaments";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70vh", display: "grid", placeItems: "center" }}>
      <Mandala className="mandala-bg" />
      <div className="container">
        <Diya style={{ width: 110, margin: "0 auto 10px", color: "var(--gold)" }} />
        <div className="hindi">पथ नहीं मिला</div>
        <h1>This path is not found</h1>
        <p style={{ marginBottom: 30 }}>The page you seek has moved, or never was. Let the lamp guide you back.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn-gold">Return Home</Link>
          <Link href="/darshan" className="btn btn-ghost-light btn-outline">Darshan Timings</Link>
        </div>
      </div>
    </section>
  );
}
