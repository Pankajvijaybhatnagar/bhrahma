import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = { title: "Gallery" };

export default function Gallery() {
  return (
    <>
      <PageHero crumb="Gallery" images={["fireworks-2", "temple-night-lights", "brahma-trimurti-darbar", "shobha-yatra"]} hindi="चित्र दीर्घा" title="Gallery of Devotion" subtitle="Moments from the sanctum, the aartis, the festivals and the seva of our temple family." />
      <section className="section">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
