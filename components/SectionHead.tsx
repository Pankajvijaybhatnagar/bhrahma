import { Divider } from "./Ornaments";

// Devanagari must not be letter-spaced, so wrap it separately from the Latin eyebrow text.
const withDeva = (s: string) =>
  s.split(/([ऀ-ॿ][ऀ-ॿ\s-]*[ऀ-ॿ]|[ऀ-ॿ])/).map((part, i) =>
    i % 2 ? <span className="deva" key={i}>{part}</span> : part
  );

export default function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="section-head reveal">
      <span className="eyebrow">{withDeva(eyebrow)}</span>
      <h2>{title}</h2>
      <Divider className="divider" />
      {children && <p>{children}</p>}
    </div>
  );
}
