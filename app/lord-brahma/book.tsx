export function Book({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M50 26 C 40 18, 22 18, 10 22 V 80 C 22 76, 40 76, 50 84 C 60 76, 78 76, 90 80 V 22 C 78 18, 60 18, 50 26 Z" />
      <path d="M50 26 V 84" />
      <path d="M20 34 C 28 32, 36 32, 42 35 M20 46 C 28 44, 36 44, 42 47 M58 35 C 64 32, 72 32, 80 34 M58 47 C 64 44, 72 44, 80 46" />
    </svg>
  );
}

export function Rosary({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      {Array.from({ length: 18 }, (_, i) => {
        const a = (i / 18) * Math.PI * 2 - Math.PI / 2;
        return <circle key={i} cx={(50 + Math.cos(a) * 32).toFixed(2)} cy={(44 + Math.sin(a) * 32).toFixed(2)} r="4.2" />;
      })}
      <path d="M50 80 V 88" />
      <path d="M44 88 H 56 L 52 97 H 48 Z" fill="currentColor" />
    </svg>
  );
}
