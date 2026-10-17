"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";
import { Icon, Lotus } from "./Ornaments";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href?: string, children?: { href: string }[]) => {
    if (href) return href === "/" ? pathname === "/" : pathname.startsWith(href);
    return children?.some((c) => pathname.startsWith(c.href));
  };

  return (
    <>
    <div className={`site-top ${scrolled ? "compact" : ""}`}>
      <div className="topbar">
        <div className="container">
          <div className="ticker">
            <span className="deva">॥ {site.jaikara} ॥</span>
            <span>Darshan 5:00 AM – 12:30 PM · 4:00 PM – 9:00 PM</span>
          </div>
          <div className="topbar-links">
            <a href={site.phoneHref}>{site.phone}</a>
            <Link href="/live">Live Darshan</Link>
            <Link href="/faq">Help</Link>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? "scrolled" : open ? "" : "transparent"}`}>
        <div className="container">
          <Link href="/" className="brand" aria-label="Brahma Mandir home">
            <Image src="/logo.png" alt="" width={112} height={112} className="brand-mark" priority />
            <span className="brand-text">
              <strong>BRAHMA</strong>
              <small>MANDIR</small>
            </span>
          </Link>

          <nav className="nav" aria-label="Main">
            {nav.map((g) =>
              g.children ? (
                <div className="nav-item" key={g.label}>
                  <button className={`nav-link ${isActive(undefined, g.children) ? "active" : ""}`} aria-haspopup="true">
                    {g.label}
                    <Icon.Chevron />
                  </button>
                  <div className="dropdown">
                    {g.children.map((c) => (
                      <Link href={c.href} key={c.href}>
                        <Lotus className="dot" />
                        <span>
                          <strong>{c.label}</strong>
                          <span>{c.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="nav-item" key={g.label}>
                  <Link href={g.href!} className={`nav-link ${isActive(g.href) ? "active" : ""}`}>
                    {g.label}
                  </Link>
                </div>
              )
            )}
          </nav>

          <div className="header-cta">
            <Link href="/sevas" className="btn btn-outline btn-sm">Book Seva</Link>
            <Link href="/donate" className="btn btn-primary btn-sm">Donate</Link>
            <button className={`menu-btn ${open ? "open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              <span />
            </button>
          </div>
        </div>
      </header>
    </div>

      <div className={`mobile-nav ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="container">
          <Link href="/">Home</Link>
          {nav.filter((g) => g.children).map((g) => (
            <div key={g.label}>
              <h5>{g.label}</h5>
              {g.children!.map((c) => (
                <Link href={c.href} key={c.href}>{c.label}</Link>
              ))}
            </div>
          ))}
          <h5>Reach us</h5>
          <Link href="/contact">Contact</Link>
          <Link href="/donate" className="btn btn-primary">Donate to the Temple</Link>
        </div>
      </div>
    </>
  );
}
