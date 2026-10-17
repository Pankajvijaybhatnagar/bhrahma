import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import DarshanStatus from "@/components/DarshanStatus";
import ScheduleList from "./ScheduleList";
import { Icon } from "@/components/Ornaments";
import { Mosaic } from "@/components/PhotoBlocks";

export const metadata: Metadata = { title: "Darshan & Aarti Timings" };

const special = [
  { t: "Ekadashi", d: "Darshan extended till 10:00 PM with special Vishnu Sahasranama path." },
  { t: "Purnima", d: "Satyanarayan katha at 11:00 AM and deepdaan at the sarovar after Sandhya aarti." },
  { t: "Sundays", d: "Gita satsang at 7:30 AM in the satsang hall. Annadanam extended till 3:00 PM." },
  { t: "Festivals", d: "Timings change on major festivals. Please check the Festivals page or call the office." },
];

export default function Darshan() {
  return (
    <>
      <PageHero crumb="Darshan" image="sanctum-balloons" hindi="दर्शन एवं आरती" title="Darshan & Aarti Timings" subtitle="The daily rhythm of worship at Brahma Mandir, from the first conch at dawn to the lullaby aarti at night." />

      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <SectionHead eyebrow="Daily Schedule" title="Nitya Seva" />
            <ScheduleList />
          </div>
          <div style={{ position: "sticky", top: 110, display: "grid", gap: 26 }}>
            <DarshanStatus />
            <div className="card reveal">
              <h3>Special days</h3>
              <div style={{ display: "grid", gap: 16 }}>
                {special.map((s) => (
                  <div key={s.t} style={{ display: "flex", gap: 14 }}>
                    <Icon.Calendar className="" />
                    <div><strong className="serif" style={{ fontSize: "1.2rem", color: "var(--crimson-deep)" }}>{s.t}</strong><div className="muted" style={{ fontSize: "1rem" }}>{s.d}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card bg-crimson reveal" style={{ border: 0 }}>
              <h3>Can&apos;t visit today?</h3>
              <p style={{ color: "#f2d6d6" }}>Join the Mangala and Sandhya aarti live from anywhere in the world.</p>
              <Link href="/live" className="btn btn-gold btn-sm">Watch Live Darshan</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container">
          <SectionHead eyebrow="Shringar Darshan" title="The Lord in His daily shringar">
            Each day the deities are bathed, dressed in fresh vastra and adorned with flowers before the doors open for darshan.
          </SectionHead>
          <Mosaic
            items={[
              { id: "brahma-trimurti-darbar", span: "w2 h2" },
              { id: "brahma-white-murti", span: "h2", position: "50% 25%" },
              { id: "sanctum-balloons" },
              { id: "devi-utsav-murti", position: "50% 25%" },
              { id: "mata-shrine", span: "w2" },
              { id: "shivling-decorated", span: "w2" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
