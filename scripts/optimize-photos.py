# Compress the temple photographs into web-ready WebP files + lib/photos.json.
#
#   python scripts/optimize-photos.py
#
# Sources are listed in scripts/photo-sources.json:
#   { "file": "<path inside 'imp pic'>", "slug": "...", "cat": "guru|deity|temple|night|utsav|seva",
#     "alt": "...", "hero": 0|1, "crop": [left, top, right, bottom] (optional, 0–1 fractions) }
# To add a photo: drop it in "imp pic/", add an entry, and run the script again.
import base64, io, json, os
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "imp pic")
DST = os.path.join(ROOT, "public", "images")
MANIFEST = os.path.join(ROOT, "lib", "photos.json")
sources = json.load(open(os.path.join(ROOT, "scripts", "photo-sources.json"), encoding="utf8"))

os.makedirs(DST, exist_ok=True)
manifest = {}
for s in sources:
    im = Image.open(os.path.join(SRC, s["file"]))
    im.draft("RGB", (2800, 2800))
    im = ImageOps.exif_transpose(im).convert("RGB")
    if s.get("crop"):
        l, t, r, b = s["crop"]
        w, h = im.size
        im = im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))

    small_source = max(im.size) < 1400  # phone / WhatsApp images
    # tone: stretch the histogram a touch without shifting colours
    im = ImageOps.autocontrast(im, cutoff=0.4, preserve_tone=True)
    if s["cat"] == "night":
        im = ImageEnhance.Brightness(im).enhance(1.15)
    im = ImageEnhance.Contrast(im).enhance(1.04)
    im = ImageEnhance.Color(im).enhance(1.07)

    edge = 2400 if s.get("hero") else 1600
    im.thumbnail((edge, edge), Image.LANCZOS)
    # crisp detail after downscaling; a little more for soft phone photos
    im = im.filter(ImageFilter.UnsharpMask(radius=1.4 if small_source else 1.0, percent=80 if small_source else 55, threshold=3))

    out = os.path.join(DST, s["slug"] + ".webp")
    im.save(out, "WEBP", quality=76 if s.get("hero") else 74, method=6)
    t = im.copy()
    t.thumbnail((20, 20))
    b = io.BytesIO()
    t.save(b, "WEBP", quality=40)
    manifest[s["slug"]] = {
        "src": f"/images/{s['slug']}.webp", "w": im.width, "h": im.height, "cat": s["cat"], "alt": s["alt"],
        "blur": "data:image/webp;base64," + base64.b64encode(b.getvalue()).decode(),
    }
    print(f"{s['slug']:30} {im.width}x{im.height} {os.path.getsize(out) // 1024}KB", flush=True)

# remove images that are no longer listed
for f in os.listdir(DST):
    if f.endswith(".webp") and f[:-5] not in manifest:
        os.remove(os.path.join(DST, f))

json.dump(manifest, open(MANIFEST, "w", encoding="utf8"), indent=1, ensure_ascii=False)
print("total", len(manifest), "photos")
