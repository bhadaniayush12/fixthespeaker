import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');
const outputPath = path.join(publicDir, 'og-image.png');

const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Radial Gradient -->
    <radialGradient id="bg-radial" cx="50%" cy="45%" r="70%" fx="50%" fy="40%">
      <stop offset="0%" stop-color="#1a2337" stop-opacity="1" />
      <stop offset="60%" stop-color="#0b0f19" stop-opacity="1" />
      <stop offset="100%" stop-color="#070a12" stop-opacity="1" />
    </radialGradient>

    <!-- Cyan Glow Gradients -->
    <radialGradient id="cyan-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.35" />
      <stop offset="50%" stop-color="#06b6d4" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
    </radialGradient>

    <linearGradient id="cyan-linear" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22d3ee" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>

    <linearGradient id="speaker-cone-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a2337" />
      <stop offset="68%" stop-color="#0f141f" />
      <stop offset="100%" stop-color="#0b0f19" />
    </linearGradient>

    <linearGradient id="text-shine" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f4f6fb" />
    </linearGradient>

    <!-- Subtle Grid Pattern -->
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M 44 0 L 0 0 0 44" fill="none" stroke="rgba(255, 255, 255, 0.035)" stroke-width="1" />
    </pattern>

    <!-- Soft Glow Filter -->
    <filter id="glow-blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="30" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Base Canvas Background -->
  <rect width="1200" height="630" fill="url(#bg-radial)" />

  <!-- Grid Overlay -->
  <rect width="1200" height="630" fill="url(#grid)" />

  <!-- Ambient Light Blobs -->
  <circle cx="860" cy="315" r="280" fill="url(#cyan-glow)" filter="url(#glow-blur)" />
  <circle cx="200" cy="180" r="180" fill="url(#cyan-glow)" filter="url(#glow-blur)" opacity="0.3" />

  <!-- Frame Border / Outer Hairline -->
  <rect x="24" y="24" width="1152" height="582" rx="16" fill="none" stroke="#1e2536" stroke-width="1" opacity="0.75" />

  <!-- ================= LEFT CONTENT AREA ================= -->
  
  <!-- Pill / Badge: 165 Hz Acoustic Pulse -->
  <g transform="translate(90, 115)">
    <!-- Pill Background & Border -->
    <rect x="0" y="0" width="240" height="42" rx="21" fill="#111624" stroke="#1e2536" stroke-width="1.5" />
    
    <!-- Pulsing Cyan Dot -->
    <circle cx="24" cy="21" r="5" fill="#22d3ee" />
    <circle cx="24" cy="21" r="9" fill="#06b6d4" opacity="0.25" />
    
    <!-- Badge Label -->
    <text x="42" y="26" fill="#06b6d4" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Geist', sans-serif" font-size="13" font-weight="700" letter-spacing="1">165 HZ ACOUSTIC PULSE</text>
  </g>

  <!-- Main Heading: Fix The Speaker -->
  <text x="90" y="245" fill="url(#text-shine)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Geist', sans-serif" font-size="70" font-weight="800" letter-spacing="-2">Fix The Speaker</text>

  <!-- Subtitle / Tagline -->
  <text x="90" y="305" fill="#a4adc0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Geist', sans-serif" font-size="27" font-weight="500" letter-spacing="-0.5">Water Eject Sound &amp; Speaker Dust Cleaner</text>

  <!-- Feature Value Props / Pills -->
  <g transform="translate(90, 365)">
    <!-- Item 1: Water Ejection -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="165" height="38" rx="19" fill="#111624" stroke="#1e2536" stroke-width="1" />
      <!-- Water Drop Icon -->
      <path d="M 22 13 C 22 13 16 20 16 23 C 16 26.3 18.7 29 22 29 C 25.3 29 28 26.3 28 23 C 28 20 22 13 22 13 Z" fill="#06b6d4" />
      <text x="36" y="24" fill="#f4f6fb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Geist', sans-serif" font-size="14" font-weight="600">Eject Water</text>
    </g>

    <!-- Item 2: Dust Cleaner -->
    <g transform="translate(180, 0)">
      <rect x="0" y="0" width="165" height="38" rx="19" fill="#111624" stroke="#1e2536" stroke-width="1" />
      <!-- Soundwave/Sparkle Icon -->
      <path d="M 20 19 L 24 15 L 28 19 L 24 23 Z" fill="#22d3ee" />
      <circle cx="17" cy="24" r="2" fill="#06b6d4" />
      <circle cx="31" cy="16" r="2" fill="#06b6d4" />
      <text x="36" y="24" fill="#f4f6fb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Geist', sans-serif" font-size="14" font-weight="600">Clear Dust</text>
    </g>

    <!-- Item 3: Instant & Free -->
    <g transform="translate(360, 0)">
      <rect x="0" y="0" width="165" height="38" rx="19" fill="#111624" stroke="#1e2536" stroke-width="1" />
      <!-- Check/Lightning Icon -->
      <path d="M 24 13 L 18 21 L 22 21 L 20 27 L 26 19 L 22 19 Z" fill="#22d3ee" />
      <text x="34" y="24" fill="#f4f6fb" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Geist', sans-serif" font-size="14" font-weight="600">100% Free</text>
    </g>
  </g>

  <!-- Website URL Tag / Footer Branding -->
  <g transform="translate(90, 505)">
    <circle cx="10" cy="10" r="4" fill="#06b6d4" />
    <text x="24" y="16" fill="#6f7889" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Geist Mono', monospace" font-size="18" font-weight="600" letter-spacing="0.5">fixthespeaker.com</text>
  </g>


  <!-- ================= RIGHT VISUAL ELEMENT AREA ================= -->
  <!-- Modern Speaker Driver + Acoustic Soundwaves + Water Ejection -->
  <g transform="translate(860, 315)">
    
    <!-- Outer Decorative Ripple Rings -->
    <circle cx="0" cy="0" r="210" fill="none" stroke="#06b6d4" stroke-width="1" opacity="0.12" stroke-dasharray="6 6" />
    <circle cx="0" cy="0" r="170" fill="none" stroke="#22d3ee" stroke-width="1.5" opacity="0.22" />
    
    <!-- Outer Speaker Housing / Chasis -->
    <circle cx="0" cy="0" r="130" fill="#111624" stroke="#1e2536" stroke-width="3" />
    <circle cx="0" cy="0" r="126" fill="none" stroke="#06b6d4" stroke-width="1" opacity="0.3" />

    <!-- Speaker Cone with Radial Gradient -->
    <circle cx="0" cy="0" r="105" fill="url(#speaker-cone-grad)" stroke="#1e2536" stroke-width="2" />

    <!-- Inner Cone Ribs / Sound Vibrations -->
    <circle cx="0" cy="0" r="75" fill="none" stroke="#06b6d4" stroke-width="1.5" opacity="0.45" />
    <circle cx="0" cy="0" r="55" fill="none" stroke="#22d3ee" stroke-width="1" opacity="0.35" />

    <!-- Center Dust Cap / Dome -->
    <circle cx="0" cy="0" r="38" fill="#0b0f19" stroke="#06b6d4" stroke-width="2.5" />
    <circle cx="0" cy="0" r="34" fill="#111624" />

    <!-- Center Water Drop Icon -->
    <path d="M 0 -14 C 0 -14 -9 -2 -9 4 C -9 9 -5 13 0 13 C 5 13 9 9 9 4 C 9 -2 0 -14 0 -14 Z" fill="url(#cyan-linear)" />

    <!-- Acoustic Sound Wave Arcs (Emanating Outward) -->
    <!-- Arc 1 -->
    <path d="M 105 -75 A 130 130 0 0 1 105 75" fill="none" stroke="#22d3ee" stroke-width="4.5" stroke-linecap="round" />
    <!-- Arc 2 -->
    <path d="M 145 -105 A 180 180 0 0 1 145 105" fill="none" stroke="#06b6d4" stroke-width="5" stroke-linecap="round" opacity="0.85" />
    <!-- Arc 3 -->
    <path d="M 185 -135 A 230 230 0 0 1 185 135" fill="none" stroke="#06b6d4" stroke-width="4" stroke-linecap="round" opacity="0.55" />
    <!-- Arc 4 -->
    <path d="M 225 -165 A 280 280 0 0 1 225 165" fill="none" stroke="#06b6d4" stroke-width="3" stroke-linecap="round" opacity="0.3" stroke-dasharray="10 8" />

    <!-- Water Ejection Droplets in Motion -->
    <!-- Drop 1 -->
    <g transform="translate(130, -50) scale(0.9)">
      <path d="M 0 -8 C 0 -8 -5 -1 -5 3 C -5 6 -2.8 8.5 0 8.5 C 2.8 8.5 5 6 5 3 C 5 -1 0 -8 0 -8 Z" fill="#22d3ee" opacity="0.9" />
    </g>
    <!-- Drop 2 -->
    <g transform="translate(175, 10) scale(1.1)">
      <path d="M 0 -8 C 0 -8 -5 -1 -5 3 C -5 6 -2.8 8.5 0 8.5 C 2.8 8.5 5 6 5 3 C 5 -1 0 -8 0 -8 Z" fill="#22d3ee" />
    </g>
    <!-- Drop 3 -->
    <g transform="translate(140, 65) scale(0.8)">
      <path d="M 0 -8 C 0 -8 -5 -1 -5 3 C -5 6 -2.8 8.5 0 8.5 C 2.8 8.5 5 6 5 3 C 5 -1 0 -8 0 -8 Z" fill="#06b6d4" opacity="0.8" />
    </g>
    <!-- Drop 4 (Fine Mist) -->
    <circle cx="205" cy="-70" r="3.5" fill="#22d3ee" opacity="0.8" />
    <circle cx="215" cy="-25" r="4.5" fill="#22d3ee" opacity="0.9" />
    <circle cx="220" cy="45" r="3.5" fill="#06b6d4" opacity="0.75" />
    <circle cx="195" cy="85" r="4" fill="#22d3ee" opacity="0.85" />
    <circle cx="245" cy="5" r="3" fill="#22d3ee" opacity="0.6" />
  </g>
</svg>
`.trim();

async function generateOgImage() {
  console.log('Generating OpenGraph banner (1200x630)...');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const svgBuffer = Buffer.from(ogSvg);
  
  const pngBuffer = await sharp(svgBuffer, { density: 150 })
    .resize(1200, 630)
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  fs.writeFileSync(outputPath, pngBuffer);
  console.log(`Successfully generated: ${outputPath}`);

  const metadata = await sharp(pngBuffer).metadata();
  console.log(`Verified PNG dimensions: ${metadata.width}x${metadata.height}, format: ${metadata.format}, channels: ${metadata.channels}`);
}

generateOgImage().catch((err) => {
  console.error('Failed to generate OG image:', err);
  process.exit(1);
});
