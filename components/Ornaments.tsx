// Hand-built sacred motifs. All use `currentColor` so they take
// the colour of their parent and work on light or dark grounds.

type P = { className?: string; style?: React.CSSProperties };

const petalPath = (r1: number, r2: number, w: number) =>
  `M0 ${-r1} C ${w} ${-(r1 + (r2 - r1) * 0.35)}, ${w * 0.7} ${-(r2 - 4)}, 0 ${-r2} C ${-w * 0.7} ${-(r2 - 4)}, ${-w} ${-(r1 + (r2 - r1) * 0.35)}, 0 ${-r1} Z`;

export function Mandala({ className, style }: P) {
  const ring = (n: number, r1: number, r2: number, w: number, sw = 1) =>
    Array.from({ length: n }, (_, i) => (
      <path key={`${n}-${r1}-${i}`} d={petalPath(r1, r2, w)} transform={`rotate(${(360 / n) * i})`} fill="none" stroke="currentColor" strokeWidth={sw} />
    ));
  const dots = (n: number, r: number, size: number) =>
    Array.from({ length: n }, (_, i) => {
      const a = ((Math.PI * 2) / n) * i;
      return <circle key={`d${n}-${r}-${i}`} cx={(Math.sin(a) * r).toFixed(2)} cy={(-Math.cos(a) * r).toFixed(2)} r={size} fill="currentColor" />;
    });
  return (
    <svg viewBox="-200 -200 400 400" className={className} style={style} aria-hidden="true">
      <circle r="196" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle r="188" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 5" />
      {dots(72, 180, 1.4)}
      {ring(32, 128, 172, 13, 0.9)}
      <circle r="126" fill="none" stroke="currentColor" strokeWidth="0.8" />
      {ring(24, 92, 124, 13)}
      {dots(24, 86, 2)}
      <circle r="80" fill="none" stroke="currentColor" strokeWidth="0.8" />
      {ring(16, 48, 78, 14)}
      {ring(8, 22, 52, 14, 1.2)}
      <circle r="20" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle r="8" fill="currentColor" />
    </svg>
  );
}

export function Lotus({ className, style }: P) {
  return (
    <svg viewBox="0 0 120 80" className={className} style={style} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M60 8 C 70 24, 72 44, 60 66 C 48 44, 50 24, 60 8 Z" />
      <path d="M60 66 C 72 50, 84 34, 98 28 C 98 46, 84 62, 60 66 Z" />
      <path d="M60 66 C 48 50, 36 34, 22 28 C 22 46, 36 62, 60 66 Z" />
      <path d="M60 66 C 80 60, 100 52, 116 52 C 104 66, 82 70, 60 66 Z" />
      <path d="M60 66 C 40 60, 20 52, 4 52 C 16 66, 38 70, 60 66 Z" />
      <path d="M30 74 H 90" strokeLinecap="round" />
    </svg>
  );
}

export function FilledLotus({ className, style }: P) {
  return (
    <svg viewBox="0 0 240 170" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="lp1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f8dbe6" />
          <stop offset="1" stopColor="#cc3c6c" />
        </linearGradient>
        <linearGradient id="lp2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e1558b" />
          <stop offset="1" stopColor="#7d0019" />
        </linearGradient>
        <radialGradient id="lglow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fffaf2" />
          <stop offset="0.5" stopColor="#faf0be" stopOpacity="0.8" />
          <stop offset="1" stopColor="#faf0be" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="70" r="70" fill="url(#lglow)" />
      <path d="M120 140 C 70 140, 20 120, 2 100 C 40 96, 90 110, 120 140 Z" fill="url(#lp2)" />
      <path d="M120 140 C 170 140, 220 120, 238 100 C 200 96, 150 110, 120 140 Z" fill="url(#lp2)" />
      <path d="M120 140 C 84 120, 50 80, 40 50 C 80 60, 110 100, 120 140 Z" fill="url(#lp1)" />
      <path d="M120 140 C 156 120, 190 80, 200 50 C 160 60, 130 100, 120 140 Z" fill="url(#lp1)" />
      <path d="M120 140 C 100 110, 88 70, 92 34 C 112 60, 122 100, 120 140 Z" fill="url(#lp2)" opacity="0.9" />
      <path d="M120 140 C 140 110, 152 70, 148 34 C 128 60, 118 100, 120 140 Z" fill="url(#lp2)" opacity="0.9" />
      <path d="M120 140 C 104 100, 104 50, 120 12 C 136 50, 136 100, 120 140 Z" fill="url(#lp1)" />
      <path d="M50 150 C 90 160, 150 160, 190 150" stroke="#c99a3e" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Divider({ className }: P) {
  return (
    <svg viewBox="0 0 240 24" className={className ?? "divider"} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M0 12 H 88" />
      <path d="M152 12 H 240" />
      <circle cx="94" cy="12" r="2" fill="currentColor" />
      <circle cx="146" cy="12" r="2" fill="currentColor" />
      <path d="M120 2 C 126 8, 126 16, 120 22 C 114 16, 114 8, 120 2 Z" fill="currentColor" stroke="none" />
      <path d="M120 22 C 112 20, 104 14, 102 8 C 110 8, 117 14, 120 22 Z" />
      <path d="M120 22 C 128 20, 136 14, 138 8 C 130 8, 123 14, 120 22 Z" />
    </svg>
  );
}

export function Flourish({ className, flip }: P & { flip?: boolean }) {
  return (
    <svg viewBox="0 0 80 20" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M2 10 H 50 C 58 10, 62 4, 68 4 C 74 4, 76 10, 72 13 C 68 16, 62 12, 66 9" strokeLinecap="round" />
    </svg>
  );
}

/** Temple skyline used at the bottom of the home hero */
export function Skyline({ className }: P) {
  return (
    <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M0 200 V 150 H 60 V 130 H 80 L 95 105 L 110 130 H 130 V 150 H 260 V 120 H 280 L 300 80 L 320 120 H 340 V 150 H 470 V 140 Q 500 120 530 140 V 150 H 600 V 110 H 615 L 650 40 Q 660 18 670 8 L 676 0 L 682 8 Q 692 18 702 40 L 737 110 H 752 L 752 120 H 770 L 790 70 L 810 120 H 830 L 830 110 H 845 L 870 60 L 895 110 H 910 V 150 H 1010 V 140 Q 1040 120 1070 140 V 150 H 1130 V 120 H 1150 L 1170 80 L 1190 120 H 1210 V 150 H 1320 V 130 H 1340 L 1355 105 L 1370 130 H 1390 V 150 H 1440 V 200 Z"
      />
    </svg>
  );
}

/** Soft arch at the bottom of inner-page heroes */
export function Arch({ className }: P) {
  return (
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path fill="currentColor" d="M0 90 V 60 C 240 60 420 0 720 0 C 1020 0 1200 60 1440 60 V 90 Z" />
    </svg>
  );
}

export function Diya({ className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
      <defs>
        <radialGradient id="dglow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#faf0be" stopOpacity="0.9" />
          <stop offset="1" stopColor="#faf0be" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dflame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#e1558b" />
          <stop offset="0.45" stopColor="#e7c66f" />
          <stop offset="1" stopColor="#fffaf2" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="42" r="28" fill="url(#dglow)" />
      <path className="flame" d="M50 18 C 58 30, 60 40, 50 52 C 40 40, 42 30, 50 18 Z" fill="url(#dflame)" />
      <path d="M14 58 C 20 78, 80 78, 86 58 C 70 64, 30 64, 14 58 Z" fill="currentColor" />
      <path d="M84 58 L 94 52 L 88 62 Z" fill="currentColor" />
      <ellipse cx="50" cy="58" rx="36" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function OmSymbol({ className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
      <text x="50" y="74" textAnchor="middle" fontSize="78" fill="currentColor" style={{ fontFamily: "var(--font-deva)" }}>ॐ</text>
    </svg>
  );
}

export function Kalash({ className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <circle cx="50" cy="20" r="9" />
      <path d="M38 30 C 30 20, 26 26, 24 30 M62 30 C 70 20, 74 26, 76 30" />
      <path d="M34 34 H 66 L 62 42 H 38 Z" />
      <path d="M38 42 C 18 50, 18 82, 36 90 H 64 C 82 82, 82 50, 62 42" />
      <path d="M28 62 H 72" />
      <path d="M40 62 V 70 M50 62 V 72 M60 62 V 70" />
      <path d="M34 94 H 66" strokeLinecap="round" />
    </svg>
  );
}

export function Swan({ className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M58 22 C 50 14, 38 20, 42 30 C 46 40, 60 44, 56 58" />
      <path d="M58 22 L 66 24 L 59 27" />
      <circle cx="53" cy="22" r="1.2" fill="currentColor" />
      <path d="M56 58 C 46 50, 28 50, 16 60 C 24 76, 54 80, 76 70 C 86 64, 90 52, 84 40 C 80 54, 70 60, 56 58 Z" />
      <path d="M30 64 C 42 66, 56 66, 70 62" />
      <path d="M10 86 C 30 80, 70 80, 90 86" />
    </svg>
  );
}

export function Shikhara({ className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M50 4 V 12" strokeLinecap="round" />
      <path d="M46 6 L 50 4 L 56 7 L 50 9" fill="currentColor" />
      <circle cx="50" cy="15" r="3" />
      <path d="M38 34 C 40 24, 46 18, 50 18 C 54 18, 60 24, 62 34 Z" />
      <path d="M32 58 C 34 44, 38 36, 38 34 H 62 C 62 36, 66 44, 68 58 Z" />
      <path d="M22 58 H 78 V 64 H 22 Z" />
      <path d="M26 64 V 94 H 74 V 64" />
      <path d="M42 94 V 78 C 42 72, 58 72, 58 78 V 94" />
      <path d="M14 94 H 86" strokeLinecap="round" />
      <path d="M44 46 H 56 M42 26 H 58" />
    </svg>
  );
}

export function Conch({ className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 70 C 14 50, 30 22, 58 18 C 76 16, 88 30, 82 46 C 78 58, 64 64, 54 72 C 44 80, 30 84, 20 70 Z" />
      <path d="M58 18 C 48 32, 46 48, 54 72" />
      <path d="M70 22 C 64 34, 64 46, 70 56" />
      <path d="M20 70 L 10 84 L 26 78" />
    </svg>
  );
}

export const motifs = {
  lotus: Lotus,
  diya: Diya,
  shikhara: Shikhara,
  om: OmSymbol,
  kalash: Kalash,
  swan: Swan,
};

// ───────── Icons (24×24, stroke) ─────────
const I = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "ico"} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

export const Icon = {
  Clock: (p: P) => <I {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></I>,
  Pin: (p: P) => <I {...p}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></I>,
  Phone: (p: P) => <I {...p}><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></I>,
  Mail: (p: P) => <I {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></I>,
  Check: (p: P) => <I {...p}><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></I>,
  Chevron: (p: P) => <I {...p}><path d="m6 9 6 6 6-6" /></I>,
  Arrow: (p: P) => <I {...p}><path d="M5 12h14M13 6l6 6-6 6" /></I>,
  Calendar: (p: P) => <I {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></I>,
  Heart: (p: P) => <I {...p}><path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9Z" /></I>,
  Book: (p: P) => <I {...p}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z" /><path d="M4 19V5M9 7h6" /></I>,
  Hands: (p: P) => <I {...p}><path d="M12 3c-1 2-2 5-2 8l-4 6 3 4 3-3 3 3 3-4-4-6c0-3-1-6-2-8Z" /><path d="M12 3v15" /></I>,
  Bell: (p: P) => <I {...p}><path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4Z" /><path d="M10 21h4M12 3v2" /></I>,
  Flame: (p: P) => <I {...p}><path d="M12 3c3 4 6 6 6 10a6 6 0 0 1-12 0c0-2 1-4 3-5 0 2 1 3 2 3 0-3-1-5 1-8Z" /></I>,
  Users: (p: P) => <I {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14a5 5 0 0 1 5.5 5" /></I>,
  Bowl: (p: P) => <I {...p}><path d="M3 11h18a9 9 0 0 1-18 0Z" /><path d="M9 7c0-1.5 1-1.5 1-3M13 7c0-1.5 1-1.5 1-3" /></I>,
  Car: (p: P) => <I {...p}><path d="M4 16V12l2-5h12l2 5v4" /><path d="M3 16h18v3H3Z" /><circle cx="7.5" cy="13" r="1" /><circle cx="16.5" cy="13" r="1" /></I>,
  Train: (p: P) => <I {...p}><rect x="5" y="3" width="14" height="14" rx="3" /><path d="M5 11h14M9 21l1.5-4M15 21l-1.5-4" /><circle cx="9" cy="14" r=".6" /><circle cx="15" cy="14" r=".6" /></I>,
  Plane: (p: P) => <I {...p}><path d="M10 14 3 12l1-2 7 1 4-6h2l-2 7 5 1 1 2-6 0-2 6h-2Z" /></I>,
  Shirt: (p: P) => <I {...p}><path d="m8 3-5 3 2 4 2-1v12h10V9l2 1 2-4-5-3a4 4 0 0 1-8 0Z" /></I>,
  Camera: (p: P) => <I {...p}><path d="M4 7h3l2-3h6l2 3h3v12H4Z" /><circle cx="12" cy="13" r="3.5" /></I>,
  Shoe: (p: P) => <I {...p}><path d="M3 17V9l4 1 3 3 8 1a3 3 0 0 1 3 3H3Z" /><path d="M3 20h18" /></I>,
  Wheelchair: (p: P) => <I {...p}><circle cx="11" cy="4" r="1.5" /><path d="M11 7v6h6l2 5" /><path d="M8 11a5 5 0 1 0 7 6" /></I>,
  Play: (p: P) => <svg viewBox="0 0 24 24" className={p.className || "ico"} fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7Z" /></svg>,
  Youtube: (p: P) => <I {...p}><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="m10 9 5 3-5 3Z" fill="currentColor" /></I>,
  Instagram: (p: P) => <I {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></I>,
  Facebook: (p: P) => <I {...p}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8Z" /></I>,
  WhatsApp: (p: P) => <I {...p}><path d="M4 20l1.3-4A8.5 8.5 0 1 1 8 18.8Z" /><path d="M9 9c0 3 3 6 6 6l1.2-1.4-2-1-1 .8a5 5 0 0 1-2.6-2.6l.8-1-1-2Z" /></I>,
};

export const SocialIcon: Record<string, (p: P) => React.ReactElement> = {
  YouTube: Icon.Youtube,
  Instagram: Icon.Instagram,
  Facebook: Icon.Facebook,
  WhatsApp: Icon.WhatsApp,
};
