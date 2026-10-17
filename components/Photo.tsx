import Image from "next/image";
import { photo, type PhotoId } from "@/lib/photos";

type Props = {
  id: PhotoId;
  className?: string;
  /** Fill the parent (parent must be position: relative with a size) */
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  position?: string;
  style?: React.CSSProperties;
};

// A temple photograph with blur-up loading and responsive sizes.
export default function Photo({ id, className, fill, sizes = "(max-width: 980px) 100vw, 50vw", priority, position = "center", style }: Props) {
  const p = photo(id);
  return fill ? (
    <Image
      src={p.src}
      alt={p.alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={p.blur}
      className={className}
      style={{ objectFit: "cover", objectPosition: position, ...style }}
    />
  ) : (
    <Image
      src={p.src}
      alt={p.alt}
      width={p.w}
      height={p.h}
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={p.blur}
      className={className}
      style={{ width: "100%", height: "auto", ...style }}
    />
  );
}

/** A framed photo with gold trim and an optional caption ribbon */
export function FramedPhoto({ id, ratio = "4 / 5", caption, position, sizes, priority }: { id: PhotoId; ratio?: string; caption?: string; position?: string; sizes?: string; priority?: boolean }) {
  return (
    <div className="art-frame">
      <figure className="photo-card" style={{ aspectRatio: ratio }}>
        <Photo id={id} fill position={position} sizes={sizes} priority={priority} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
}
