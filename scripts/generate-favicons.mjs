import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');

// Favicon SVG (transparent background, #38bdf8 cyan speaker logo)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#38bdf8" stroke="#38bdf8" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
</svg>`;

// App icon SVG with solid dark background #0B0F19 and centered cyan #38bdf8 speaker
const getAppIconSvg = (size, paddingRatio = 0.22) => {
  const contentSize = size * (1 - paddingRatio * 2);
  const offset = size * paddingRatio;
  const scale = contentSize / 24;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" fill="#0B0F19"/>
  <g transform="translate(${offset}, ${offset}) scale(${scale})">
    <path d="M11 5L6 9H2v6h4l5 4V5z" fill="#38bdf8" stroke="#38bdf8" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
  </g>
</svg>`;
};

// Maskable icon with larger safe margin (28% padding ratio)
const getMaskableIconSvg = (size) => getAppIconSvg(size, 0.28);

function createIco(images) {
  const count = images.length;
  const headerSize = 6 + count * 16;
  let currentOffset = headerSize;
  
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // count
  
  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.buffer.length, 8); // size
    entry.writeUInt32LE(currentOffset, 12); // offset
    entries.push(entry);
    currentOffset += img.buffer.length;
  }
  
  return Buffer.concat([header, ...entries, ...images.map(img => img.buffer)]);
}

async function generateAll() {
  console.log('Generating public/favicon.svg...');
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg.trim() + '\n');

  console.log('Generating public/favicon.ico (16x16, 32x32, 48x48)...');
  const icoSizes = [16, 32, 48];
  const icoImages = await Promise.all(icoSizes.map(async (size) => {
    const buffer = await sharp(Buffer.from(faviconSvg), { density: 300 })
      .resize(size, size)
      .png()
      .toBuffer();
    return { width: size, height: size, buffer };
  }));
  const icoBuffer = createIco(icoImages);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  console.log('Generating public/apple-touch-icon.png (180x180)...');
  const appleTouchSvg = getAppIconSvg(180, 0.22);
  const appleTouchBuf = await sharp(Buffer.from(appleTouchSvg), { density: 300 })
    .resize(180, 180)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouchBuf);

  console.log('Generating public/icon-192.png (192x192)...');
  const icon192Svg = getAppIconSvg(192, 0.22);
  const icon192Buf = await sharp(Buffer.from(icon192Svg), { density: 300 })
    .resize(192, 192)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), icon192Buf);

  console.log('Generating public/icon-512.png (512x512)...');
  const icon512Svg = getAppIconSvg(512, 0.22);
  const icon512Buf = await sharp(Buffer.from(icon512Svg), { density: 300 })
    .resize(512, 512)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), icon512Buf);

  console.log('Generating public/icon-maskable-192.png (192x192)...');
  const maskable192Svg = getMaskableIconSvg(192);
  const maskable192Buf = await sharp(Buffer.from(maskable192Svg), { density: 300 })
    .resize(192, 192)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'icon-maskable-192.png'), maskable192Buf);

  console.log('Generating public/icon-maskable-512.png (512x512)...');
  const maskable512Svg = getMaskableIconSvg(512);
  const maskable512Buf = await sharp(Buffer.from(maskable512Svg), { density: 300 })
    .resize(512, 512)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'icon-maskable-512.png'), maskable512Buf);

  console.log('All favicon & PWA assets generated successfully!');
}

generateAll().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
