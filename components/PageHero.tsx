import Link from "next/link";
import { Arch, Divider, Mandala } from "./Ornaments";
import Petals from "./Petals";
import Photo from "./Photo";
import HeroSlides from "./HeroSlides";
import type { PhotoId } from "@/lib/photos";

export default function PageHero({
  title,
  hindi,
  subtitle,
  crumb,
  image,
  images,
  position,
}: {
  title: string;
  hindi?: string;
  subtitle?: string;
  crumb: string;
  /** single background photograph */
  image?: PhotoId;
  /** several photographs, crossfading */
  images?: PhotoId[];
  position?: string;
}) {
  const hasPhoto = !!(image || images?.length);
  return (
    <section className={`page-hero ${hasPhoto ? "has-photo" : ""}`}>
      {images?.length ? (
        <div className="page-hero-photo"><HeroSlides ids={images} interval={6000} /></div>
      ) : image ? (
        <div className="page-hero-photo">
          <Photo id={image} fill sizes="100vw" priority position={position} />
        </div>
      ) : null}
      <Mandala className="mandala-bg" />
      <Petals count={10} />
      <div className="container">
        <div className="crumbs">
          <Link href="/">Home</Link>
          <span>✦</span>
          <span>{crumb}</span>
        </div>
        {hindi && <div className="hindi">{hindi}</div>}
        <h1>{title}</h1>
        <Divider className="divider" />
        {subtitle && <p style={{ marginTop: 18 }}>{subtitle}</p>}
      </div>
      <div className="scroll-cue" aria-hidden="true"><i />SCROLL</div>
      <Arch className="arch" />
    </section>
  );
}
