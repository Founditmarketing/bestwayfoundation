/**
 * One-time image pipeline.
 *
 * The repo shipped 58 MB of uncompressed source art — a 7.3 MB PNG was being
 * rendered as an 80x80 icon. This script renames every asset to something
 * descriptive, resizes it to the largest size the site actually displays,
 * writes a WebP alongside an optimised fallback, generates 1200x630 social
 * cards, and emits src/data/imageMeta.ts so every <img> can carry real
 * width/height attributes (the CLS fix).
 *
 * Run with: npm run images
 */
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const PUBLIC = 'public';
const OUT_IMG = path.join(PUBLIC, 'img');
const OUT_SOCIAL = path.join(PUBLIC, 'social');

/**
 * source -> { name, width, kind }
 * `width` is the widest the asset is ever displayed at, doubled for retina.
 */
const MAP = [
  // Logos and badges — PNG for transparency
  { src: 'bestwaylogo.png', name: 'best-way-foundation-repair-logo.png', width: 600 },
  { src: 'jacitlogohorizontal.png', name: 'best-way-logo-horizontal.png', width: 640 },
  { src: 'jacitlogohorizontalblack.png', name: 'best-way-logo-horizontal-dark.png', width: 640 },
  { src: 'bbblogo2.png', name: 'bbb-accredited-business.png', width: 240 },

  // Service icons — rendered at 80px, so 256 is already generous. PNG for alpha.
  { src: 'Construction-Foundation-Pit.H03.2k.png', name: 'icon-foundation-repair.png', width: 256 },
  { src: 'Survey-Automatic-Level-on-Tripod.H03.2k.png', name: 'icon-house-leveling.png', width: 256 },
  { src: 'Concrete-Pillar.H03.2k.png', name: 'icon-pier-and-beam.png', width: 256 },
  { src: 'Steel-Shower-Drain.H03.2k.png', name: 'icon-drainage-solutions.png', width: 256 },
  { src: 'Broken-Wall-Panel.H03.2k.png', name: 'icon-wall-crack.png', width: 256 },
  { src: 'Gear-Setting-Repair-Symbol.H03.2k.png', name: 'icon-repair-process.png', width: 256 },
  { src: 'Sandblasting-Machine-Red.H03.2k.png', name: 'icon-equipment.png', width: 256 },

  // Photography always ends up JPEG regardless of what it arrived as — these
  // are photographs, and PNG is the wrong container for a photograph.
  { src: 'presspiers.png', name: 'press-piers-installation.jpg', width: 1600, responsive: true },
  { src: 'bestwayhero.png', name: 'house-leveling-hydraulic-lift.jpg', width: 1600, responsive: true },
  { src: 'jacitimage.jpg', name: 'foundation-repair-longview-tx.jpg', width: 1600, responsive: true },
  { src: 'jacitgallery.jpeg', name: 'foundation-drainage-french-drain.jpg', width: 1600, responsive: true },
  { src: 'jacitgallery2.jpeg', name: 'foundation-repair-crew-east-texas.jpg', width: 1600, responsive: true },
  { src: 'jacitgallery3.jpeg', name: 'house-leveling-kilgore-tx.jpg', width: 1600, responsive: true },
  { src: 'jacitgallery4.jpeg', name: 'foundation-inspection-east-texas.jpg', width: 1600, responsive: true },
  { src: 'jacitgallery7.png', name: 'pier-and-beam-joist-repair.jpg', width: 1600, responsive: true },
  { src: 'jacitgallery5.png', name: 'subfloor-installation.jpg', width: 1200, responsive: true },
  { src: 'jacitgallery6.png', name: 'floor-joist-replacement.jpg', width: 1200, responsive: true },
  { src: 'bestwaygraaphic.jpg', name: 'foundation-crack-inspection.jpg', width: 1200, responsive: true },
];

/** Social cards: 1200x630, cropped from the named optimised asset. */
const SOCIAL = [
  { from: 'press-piers-installation.jpg', name: 'og-default.jpg' },
  { from: 'foundation-repair-crew-east-texas.jpg', name: 'og-foundation-repair.jpg' },
  { from: 'house-leveling-hydraulic-lift.jpg', name: 'og-house-leveling.jpg' },
  { from: 'pier-and-beam-joist-repair.jpg', name: 'og-pier-and-beam.jpg' },
  { from: 'foundation-drainage-french-drain.jpg', name: 'og-drainage-solutions.jpg' },
  { from: 'foundation-crack-inspection.jpg', name: 'og-guides.jpg' },
];

/** Dead weight: an unused loading screen and another company's logo. */
const DELETE = [
  'loadscreen/bestwayloadscreen.gif',
  'loadscreen/loadscreenbottomtext.png',
  'loadscreen/loadscreenhouse.png',
  'loadscreen/loadscreentoptext.png',
  'Jac-it-logo-transparent.png',
  'gallery_preview.html',
];

const bytes = (n) => `${(n / 1024 / 1024).toFixed(2)} MB`;

async function sizeOf(p) {
  try {
    return (await fs.stat(p)).size;
  } catch {
    return 0;
  }
}

async function dirSize(dir) {
  let total = 0;
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    total += entry.isDirectory() ? await dirSize(p) : (await fs.stat(p)).size;
  }
  return total;
}

async function main() {
  const before = await dirSize(PUBLIC);
  await fs.mkdir(OUT_IMG, { recursive: true });
  await fs.mkdir(OUT_SOCIAL, { recursive: true });

  const meta = {};

  for (const item of MAP) {
    const srcPath = path.join(PUBLIC, item.src);
    if (!(await sizeOf(srcPath))) {
      console.warn(`  ! missing source, skipping: ${item.src}`);
      continue;
    }

    const ext = path.extname(item.name).toLowerCase();
    const isPng = ext === '.png';
    const stem = item.name.replace(/\.(png|jpe?g)$/i, '');

    // Responsive assets get 640/1024/full variants so a phone never downloads
    // the desktop hero. Icons and logos are already small enough to skip it.
    const widths = item.responsive
      ? [640, 1024, item.width].filter((w, i, a) => w <= item.width && a.indexOf(w) === i)
      : [item.width];

    const encode = (pipeline, out) =>
      isPng
        ? pipeline.png({ quality: 82, compressionLevel: 9, palette: true }).toFile(out)
        : pipeline.jpeg({ quality: 70, mozjpeg: true, progressive: true }).toFile(out);

    let written = 0;
    for (const w of widths) {
      const suffix = item.responsive ? `-${w}w` : '';
      const outPath = path.join(OUT_IMG, `${stem}${suffix}${ext}`);
      const webpPath = path.join(OUT_IMG, `${stem}${suffix}.webp`);
      const base = sharp(srcPath).rotate().resize({ width: w, withoutEnlargement: true, fit: 'inside' });
      await encode(base.clone(), outPath);
      await base.clone().webp({ quality: 70 }).toFile(webpPath);
      written += (await sizeOf(outPath)) + (await sizeOf(webpPath));
    }

    // The canonical (largest) variant is what the meta map and every src="" use.
    const canonicalSuffix = item.responsive ? `-${widths[widths.length - 1]}w` : '';
    const canonical = path.join(OUT_IMG, `${stem}${canonicalSuffix}${ext}`);
    const info = await sharp(canonical).metadata();
    meta[`/img/${item.name}`] = {
      w: info.width,
      h: info.height,
      widths: item.responsive ? widths : null,
      stem,
      ext,
    };

    const from = await sizeOf(srcPath);
    console.log(`  ${item.src} -> ${item.name}  ${bytes(from)} -> ${bytes(written)} (${widths.length} widths x2 formats)`);
  }

  for (const s of SOCIAL) {
    // Resolve the largest generated variant for this asset.
    const stem = s.from.replace(/\.jpg$/, '');
    const candidates = (await fs.readdir(OUT_IMG))
      .filter((f) => f.startsWith(`${stem}-`) && f.endsWith('.jpg'))
      .sort((a, b) => Number(b.match(/-(\d+)w\.jpg$/)?.[1] ?? 0) - Number(a.match(/-(\d+)w\.jpg$/)?.[1] ?? 0));
    const from = path.join(OUT_IMG, candidates[0] ?? s.from);
    if (!(await sizeOf(from))) {
      console.warn(`  ! missing social source: ${s.from}`);
      continue;
    }
    await sharp(from)
      .resize(1200, 630, { fit: 'cover', position: 'attention' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(path.join(OUT_SOCIAL, s.name));
    console.log(`  social: ${s.name}`);
  }

  // Remove the originals we replaced, plus the dead assets.
  for (const item of MAP) {
    await fs.rm(path.join(PUBLIC, item.src), { force: true });
  }
  for (const f of DELETE) {
    await fs.rm(path.join(PUBLIC, f), { force: true });
  }
  await fs.rm(path.join(PUBLIC, 'loadscreen'), { recursive: true, force: true });

  const entries = Object.entries(meta)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([k, v]) =>
        `  '${k}': { w: ${v.w}, h: ${v.h}, stem: '${v.stem}', ext: '${v.ext}'` +
        `, widths: ${v.widths ? `[${v.widths.join(', ')}]` : 'null'} },`,
    )
    .join('\n');

  await fs.writeFile(
    'src/data/imageMeta.ts',
    `/**\n * GENERATED by scripts/optimize-images.mjs — do not edit by hand.\n *\n` +
      ` * Intrinsic dimensions for every asset in /public/img, so <Img> can emit\n` +
      ` * width and height attributes and the browser can reserve space before the\n` +
      ` * image arrives. This is the CLS fix.\n */\n\n` +
      `export interface ImageDims {\n  /** intrinsic width of the largest variant */\n  w: number;\n  h: number;\n  /** filename without extension or width suffix */\n  stem: string;\n  ext: string;\n  /** available widths, or null when the asset has a single size */\n  widths: number[] | null;\n}\n\n` +
      `export const imageMeta: Record<string, ImageDims> = {\n${entries}\n};\n`,
    'utf8',
  );

  const after = await dirSize(PUBLIC);
  console.log(`\npublic/: ${bytes(before)} -> ${bytes(after)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
