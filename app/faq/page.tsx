import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import { faqs, site } from "@/lib/data";

export const metadata: Metadata = { title: "Frequently Asked Questions" };

export default function FaqPage() {
  return (
    <>
      <PageHero crumb="FAQ" image="mandap-hall" hindi="जिज्ञासा" title="Questions from Devotees" subtitle="Everything you may wish to know before your visit, seva or offering." />
      <section className="section">
        <div className="container narrow">
          <Faq items={faqs} />
          <div className="card bg-crimson center" style={{ marginTop: 60, border: 0 }}>
            <h3>Still have a question?</h3>
            <p style={{ color: "#f2d6d6" }}>Our temple office is happy to help, every day from 9:00 AM to 7:00 PM.</p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <a href={site.phoneHref} className="btn btn-gold btn-sm">Call {site.phone}</a>
              <Link href="/contact" className="btn btn-ghost-light btn-outline btn-sm">Write to Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
