import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SimpleForm from "@/components/SimpleForm";
import { Icon } from "@/components/Ornaments";
import { site } from "@/lib/data";
import Photo from "@/components/Photo";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  const info = [
    { i: <Icon.Pin />, t: "Address", v: <>{site.address}<br />{site.city}</> },
    { i: <Icon.Phone />, t: "Phone", v: <a href={site.phoneHref}>{site.phone}</a> },
    { i: <Icon.WhatsApp />, t: "WhatsApp", v: site.whatsapp },
    { i: <Icon.Mail />, t: "Email", v: <a href={`mailto:${site.email}`}>{site.email}</a> },
    { i: <Icon.Clock />, t: "Office hours", v: "Every day, 9:00 AM – 7:00 PM" },
  ];
  return (
    <>
      <PageHero crumb="Contact" image="temple-utsav-wide" hindi="संपर्क करें" title="Contact the Temple" subtitle="For seva bookings, donations, group visits or any question — we are here to help." />

      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">Reach Us</span>
            <h2>We&apos;d love to hear from you</h2>
            <div className="info-list" style={{ marginTop: 30 }}>
              {info.map((x) => (
                <div className="info" key={x.t}>
                  <div className="card-icon">{x.i}</div>
                  <div><strong>{x.t}</strong><span style={{ fontSize: "1.15rem" }}>{x.v}</span></div>
                </div>
              ))}
            </div>
            <figure className="photo-card" style={{ aspectRatio: "16 / 10", marginTop: 34 }}>
              <Photo id="temple-night-lights" fill sizes="(max-width: 980px) 100vw, 45vw" />
              <figcaption>We look forward to welcoming you</figcaption>
            </figure>
          </div>
          <div className="reveal d1">
            <SimpleForm
              submit="Send Message"
              successTitle="Message received"
              successText="Thank you for writing to Brahma Mandir. Our office will reply within one working day. Jai Shri Brahma!"
              fields={[
                { name: "name", label: "Full name", required: true, half: true },
                { name: "phone", label: "Phone", type: "tel", half: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "topic", label: "Subject", options: ["General enquiry", "Seva / puja booking", "Donation & 80G receipt", "Group or school visit", "Accommodation", "Volunteering", "Media"] },
                { name: "msg", label: "Your message", textarea: true, required: true },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container reveal">
          <iframe className="map" style={{ height: 460 }} src={site.mapEmbed} loading="lazy" title="Temple location map" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </>
  );
}
