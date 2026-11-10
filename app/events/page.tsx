import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import EventsList from "./EventsList";
import { events } from "@/lib/data";
import Link from "next/link";
import { Parallax } from "@/components/Motion";
import Photo from "@/components/Photo";

export const metadata: Metadata = { title: "Events Calendar" };
export const revalidate = 3600;

export default function Events() {
  // past events drop off automatically (page regenerates hourly)
  const upcoming = events.filter((e) => new Date(e.date + "T23:59:59+05:30") >= new Date());
  return (
    <>
      <PageHero crumb="Events" image="satsang-darbar" hindi="कार्यक्रम" title="Events Calendar" subtitle="Satsangs, kathas, yagyas and seva drives — everyone is welcome to join." />
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Upcoming" title="What's happening at the Mandir" />
          <EventsList events={upcoming} />
        </div>
      </section>
      <section className="photo-band">
        <Parallax className="pb-img"><Photo id="mandap-hall" fill sizes="100vw" /></Parallax>
        <div className="container narrow reveal">
          <span className="eyebrow">Satsang · <span className="deva">सत्संग</span></span>
          <h2>Every gathering is a blessing</h2>
          <p className="serif" style={{ fontSize: "1.3rem", color: "#f0d4d4" }}>Join Guruji and the temple family for satsang, katha and kirtan. No registration is needed — simply come with an open heart.</p>
          <Link href="/guruji-maharaj" className="btn btn-gold" style={{ marginTop: 14 }}>Meet Guruji & Guru Maa</Link>
        </div>
      </section>
    </>
  );
}
