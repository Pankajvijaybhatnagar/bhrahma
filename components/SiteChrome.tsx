"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/data";
import { Icon } from "./Ornaments";

// Scroll progress bar, back-to-top lotus button and the mobile quick-action bar.
export default function SiteChrome() {
  const bar = useRef<HTMLDivElement>(null);
  const ring = useRef<SVGCircleElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      if (ring.current) ring.current.style.strokeDashoffset = String(176 * (1 - p));
      setShow(window.scrollY > 600);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" ref={bar} aria-hidden="true" />
      <button className={`to-top ${show ? "show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
        <svg className="ring" viewBox="0 0 64 64" aria-hidden="true">
          <circle ref={ring} cx="32" cy="32" r="28" fill="none" stroke="var(--gold-bright)" strokeWidth="2" strokeDasharray="176" strokeDashoffset="176" strokeLinecap="round" />
        </svg>
        <svg viewBox="0 0 120 80" fill="currentColor" aria-hidden="true">
          <path d="M60 4 C 72 22, 74 44, 60 70 C 46 44, 48 22, 60 4 Z" />
          <path d="M60 70 C 74 52, 88 34, 104 28 C 104 48, 88 66, 60 70 Z" opacity=".75" />
          <path d="M60 70 C 46 52, 32 34, 16 28 C 16 48, 32 66, 60 70 Z" opacity=".75" />
        </svg>
      </button>
      <nav className={`quick-bar ${show ? "show" : ""}`} aria-label="Quick actions">
        <Link href="/darshan"><Icon.Clock className="" />Darshan</Link>
        <Link href="/live"><Icon.Play className="" />Live</Link>
        <a href={site.phoneHref}><Icon.Phone className="" />Call</a>
        <Link href="/donate" className="primary"><Icon.Heart className="" />Donate</Link>
      </nav>
    </>
  );
}
