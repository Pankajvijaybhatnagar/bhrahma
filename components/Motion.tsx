"use client";

import { useEffect, useRef, useState } from "react";

/** Moves its content slower than the page scroll for a parallax depth effect. */
export function Parallax({ children, className = "", speed = 0.18 }: { children: React.ReactNode; className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const host = el.parentElement!.getBoundingClientRect();
      const offset = (host.top + host.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, [speed]);
  return <div ref={ref} className={`parallax ${className}`}>{children}</div>;
}

/** Counts up to a value like "365", "12+" or "40+" when it scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const m = value.match(/^([\d,]+)(.*)$/);
  const target = m ? Number(m[1].replace(/,/g, "")) : 0;
  const suffix = m ? m[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState<number | null>(null);

  useEffect(() => {
    if (!m || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1600;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!m) return <span>{value}</span>;
  return <span ref={ref}>{(n ?? 0).toLocaleString("en-IN")}{suffix}</span>;
}
