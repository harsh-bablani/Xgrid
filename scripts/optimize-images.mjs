/**
 * One-shot image optimizer: writes WebP next to source PNGs/JPGs in public/.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

/** @type {{ file: string, maxWidth?: number, quality?: number }[]} */
const targets = [
  { file: 'herobg.png', maxWidth: 1920, quality: 72 },
  { file: 'why-we-exist.png', maxWidth: 1200, quality: 75 },
  { file: 'jewelbiz-home-section.png', maxWidth: 1200, quality: 75 },
  { file: 'curabiz-home-section.png', maxWidth: 1200, quality: 75 },
  { file: 'retailbiz-home-section.png', maxWidth: 1200, quality: 75 },
  { file: 'industry-specific-erp.png', maxWidth: 1200, quality: 75 },
  { file: 'data-migration.png', maxWidth: 1200, quality: 75 },
  { file: 'empowering.png', maxWidth: 900, quality: 75 },
  { file: 'always.png', maxWidth: 900, quality: 75 },
  { file: 'stay.png', maxWidth: 900, quality: 75 },
  { file: 'built.png', maxWidth: 900, quality: 75 },
  { file: 'technical.png', maxWidth: 1200, quality: 75 },
  { file: 'three-steps.png', maxWidth: 1400, quality: 72 },
  { file: 'jewelbiz-hero-laptop.png', maxWidth: 1920, quality: 80 },
  { file: 'acc jewelbiz.png', maxWidth: 1400, quality: 72 },
  { file: 'retail jewelbiz.png', maxWidth: 1000, quality: 75 },
  { file: 'wholesale jewelbiz.png', maxWidth: 1000, quality: 75 },
  { file: 'manufacturing jewelbiz.png', maxWidth: 1000, quality: 75 },
  { file: 'Mahalaxmi.png', maxWidth: 400, quality: 70 },
  { file: 'BTR.png', maxWidth: 400, quality: 70 },
  { file: 'b l hissaria jewellers.png', maxWidth: 400, quality: 70 },
  { file: 'wa.png', maxWidth: 128, quality: 80 },
  { file: 'sumit-goyal.png', maxWidth: 600, quality: 75 },
  { file: 'Lokesh Sharma.png', maxWidth: 600, quality: 75 },
  { file: 'Umang Garg.png', maxWidth: 600, quality: 75 },
  { file: 'Anil Chaudhary.png', maxWidth: 600, quality: 75 },
  { file: 'Kunal Mathur.png', maxWidth: 600, quality: 75 },
  { file: 'Urja Ramanandi.png', maxWidth: 600, quality: 75 },
  { file: 'ab.png', maxWidth: 1400, quality: 72 },
  { file: 'who.png', maxWidth: 1400, quality: 72 },
  { file: 'BGDB.png', maxWidth: 1200, quality: 72 },
];

function outName(file) {
  const ext = path.extname(file);
  return file.slice(0, -ext.length) + '.webp';
}

async function convertOne({ file, maxWidth = 1600, quality = 75 }) {
  const input = path.join(publicDir, file);
  if (!fs.existsSync(input)) {
    console.warn('skip missing', file);
    return;
  }
  const output = path.join(publicDir, outName(file));
  const before = fs.statSync(input).size;
  await sharp(input)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(output);
  const after = fs.statSync(output).size;
  console.log(
    `${file} → ${outName(file)}  ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB`
  );
}

for (const t of targets) {
  await convertOne(t);
}
