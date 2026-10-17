import Link from "next/link";
import Photo from "./Photo";
import { photo, type PhotoId } from "@/lib/photos";

/** Endless, slowly scrolling strip of photographs (pauses on hover). */
export function PhotoRibbon({ ids }: { ids: PhotoId[] }) {
  const loop = [...ids, ...ids];
  return (
    <div className="ribbon" aria-label="Glimpses of the temple">
      <div className="ribbon-track">
        {loop.map((id, i) => (
          <div className="ribbon-item" key={`${id}-${i}`} aria-hidden={i >= ids.length}>
            <Photo id={id} fill sizes="260px" />
          </div>
        ))}
      </div>
    </div>
  );
}

export type MosaicItem = { id: PhotoId; span?: "w2" | "h2" | "w2 h2"; caption?: string; position?: string };

/** Editorial grid of photographs with hover captions. */
export function Mosaic({ items, href }: { items: MosaicItem[]; href?: string }) {
  return (
    <div className="mosaic">
      {items.map((m, i) => {
        const inner = (
          <>
            <Photo id={m.id} fill position={m.position} sizes={m.span?.includes("w2") ? "(max-width: 980px) 100vw, 50vw" : "(max-width: 980px) 50vw, 25vw"} />
            <span className="m-cap">{m.caption ?? photo(m.id).alt}</span>
          </>
        );
        const cls = `m-item reveal d${(i % 4) + 1} ${m.span ?? ""}`;
        return href ? (
          <Link href={href} className={cls} key={m.id}>{inner}</Link>
        ) : (
          <div className={cls} key={m.id}>{inner}</div>
        );
      })}
    </div>
  );
}
