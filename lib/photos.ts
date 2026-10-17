// Temple photographs. Generated from the original camera files: resized,
// converted to WebP and given a tiny blur placeholder (see lib/photos.json).
import data from "./photos.json";

export type PhotoCat = "guru" | "deity" | "temple" | "night" | "utsav" | "seva";
export type PhotoData = { src: string; w: number; h: number; cat: PhotoCat; alt: string; blur: string };

export const photos = data as Record<string, PhotoData>;
export type PhotoId = keyof typeof data;

export const photo = (id: PhotoId) => photos[id];

export const photosIn = (cat: PhotoCat) =>
  Object.entries(photos)
    .filter(([, p]) => p.cat === cat)
    .map(([id, p]) => ({ id: id as PhotoId, ...p }));
