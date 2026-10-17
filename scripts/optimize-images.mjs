import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('public/assets');

async function run() {
  const files = fs.readdirSync(assetsDir);
  console.log('Inspecting and converting images in', assetsDir);

  const imagesToOptimize = [
    { src: 'electronic-city-sunny-highrise.png', maxW: 1920, quality: 82 },
    { src: 'chandapura-lush-apartment.png', maxW: 1920, quality: 82 },
    { src: 'township-masterplan.png', maxW: 1920, quality: 85 },
    { src: 'assets-aadhya-poster.png', maxW: 1400, quality: 85 },
    { src: 'krb-township-poster.png', maxW: 1400, quality: 85 },
    { src: 'hero-sunny-highrise.png', maxW: 1920, quality: 82 },
    { src: 'hero-lush-modern.png', maxW: 1920, quality: 82 },
    { src: 'hero-cinematic.jpg', maxW: 1920, quality: 82 },
    { src: 'plotted-luxury.jpg', maxW: 1600, quality: 82 },
    { src: 'highrise-luxury.jpg', maxW: 1600, quality: 82 },
    { src: 'chandapura-1.jpg', maxW: 1200, quality: 82 },
    { src: 'chandapura-2.jpg', maxW: 1200, quality: 82 },
    { src: 'electronics-city.jpg', maxW: 1200, quality: 82 },
    { src: 'assets-aadhya.jpg', maxW: 1200, quality: 82 },
    { src: 'krb-township.jpg', maxW: 1200, quality: 82 },
    { src: 'township-layout.jpg', maxW: 1200, quality: 82 },
    { src: 'ramesh-babu.jpg', maxW: 800, quality: 85 },
    { src: 'sandeep-kopparam.jpg', maxW: 800, quality: 85 },
  ];

  let totalBefore = 0;
  let totalAfter = 0;

  for (const item of imagesToOptimize) {
    const srcPath = path.join(assetsDir, item.src);
    if (!fs.existsSync(srcPath)) continue;

    const beforeStat = fs.statSync(srcPath);
    totalBefore += beforeStat.size;

    const parsed = path.parse(item.src);
    const destWebpName = `${parsed.name}.webp`;
    const destPath = path.join(assetsDir, destWebpName);

    const image = sharp(srcPath);
    const meta = await image.metadata();

    let transform = sharp(srcPath);
    if (meta.width && meta.width > item.maxW) {
      transform = transform.resize({ width: item.maxW, withoutEnlargement: true });
    }

    await transform
      .webp({ quality: item.quality, effort: 6 })
      .toFile(destPath);

    const afterStat = fs.statSync(destPath);
    totalAfter += afterStat.size;

    console.log(
      `${item.src} (${Math.round(beforeStat.size / 1024)} KB) -> ${destWebpName} (${Math.round(afterStat.size / 1024)} KB) [-${Math.round((1 - afterStat.size / beforeStat.size) * 100)}%]`
    );
  }

  console.log('---');
  console.log(`Total Before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total After: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Reduction: -${Math.round((1 - totalAfter / totalBefore) * 100)}% bandwidth saved`);
}

run().catch(console.error);
