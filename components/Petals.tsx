// Falling lotus petals. Positions are deterministic so server and client markup match.
export default function Petals({ count = 14 }: { count?: number }) {
  return (
    <div className="petals" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const left = (i * 37 + 7) % 100;
        const dur = 14 + ((i * 7) % 10);
        const delay = -((i * 3.3) % dur);
        const scale = 0.55 + ((i * 13) % 10) / 20;
        return (
          <span
            key={i}
            className="petal"
            style={{ left: `${left}%`, animationDuration: `${dur}s`, animationDelay: `${delay}s`, scale: `${scale}` }}
          />
        );
      })}
    </div>
  );
}
