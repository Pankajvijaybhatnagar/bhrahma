"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds the `in` class to every `.reveal` element once it has scrolled into view.
// Uses a rAF-throttled scroll check rather than IntersectionObserver so fast
// scrolling (or elements rendered after mount) can never leave content hidden.
export default function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const limit = window.innerHeight * 0.94;
      document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
        if (el.getBoundingClientRect().top < limit) el.classList.add("in");
      });
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(check); };
    check();
    const t = setTimeout(check, 300);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);
  return null;
}
