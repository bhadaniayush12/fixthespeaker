export type DeviceBrand =
  | 'Apple'
  | 'Samsung'
  | 'Google'
  | 'Xiaomi'
  | 'OnePlus'
  | 'Vivo'
  | 'Oppo'
  | 'Realme'
  | 'Motorola'
  | 'Universal';

export type DeviceCategory = 'smartphone' | 'earbuds' | 'smartwatch' | 'tablet' | 'laptop' | 'hub';

export interface HowToStep {
  name: string;
  text: string;
}

export interface DeviceFAQ {
  q: string;
  a: string;
}

export interface DeviceData {
  slug: string;
  name: string;
  shortName: string;
  brand: DeviceBrand;
  category: DeviceCategory;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroHeading: string;
  heroSubtitle: string;
  badge: string;
  ipRating: string;
  grilleSpecs: string;
  acousticFreq: string;
  recommendedDuration: string;
  compatibilityList: string[];
  overview: string[];
  steps: HowToStep[];
  technicalTips: string[];
  faqs: DeviceFAQ[];
  relatedSlugs: string[];
}

interface RawDeviceDef {
  slug: string;
  name: string;
  shortName: string;
  brand: DeviceBrand;
  category: DeviceCategory;
  ipRating: string;
  grilleSpecs?: string;
  acousticFreq?: string;
  recommendedDuration?: string;
  compat?: string[];
  customTips?: string[];
  customFaqs?: DeviceFAQ[];
  relatedSlugs?: string[];
}

// -------------------------------------------------------------
// Metadata & Content Generator Helper
// -------------------------------------------------------------
function buildDeviceData(raw: RawDeviceDef): DeviceData {
  const isEarbuds = raw.category === 'earbuds';
  const isWatch = raw.category === 'smartwatch';
  const isTablet = raw.category === 'tablet';
  const isLaptop = raw.category === 'laptop';
  const isPhone = raw.category === 'smartphone' || raw.category === 'hub';

  const defaultGrille = isEarbuds
    ? 'High-density stainless steel acoustic mesh and side air vents'
    : isWatch
    ? 'Side-facing dual acoustic slot / water-lock speaker cavity'
    : isTablet || isLaptop
    ? 'Multi-driver quad/six-speaker perimeter acoustic array'
    : raw.brand === 'Apple'
    ? 'Precision-milled bottom acoustic ports and top earpiece micro-mesh'
    : raw.brand === 'Samsung'
    ? 'Bottom acoustic port / speaker slot and upper earpiece slit'
    : 'Bottom USB-C speaker grille and top stereo earpiece receiver';

  const defaultFreq = isEarbuds
    ? '165 Hz water pulse + 2.5 kHz–14.5 kHz harmonic dust/wax sweep'
    : isWatch
    ? '165 Hz resonant acoustic ejection wave'
    : '165 Hz low-frequency resonant square wave + harmonic sweep';

  const defaultDuration = isEarbuds ? '60 seconds per mode' : '60–120 seconds';

  // Tailored steps based on hardware category
  const steps: HowToStep[] = isEarbuds
    ? [
        {
          name: 'Remove Earbuds From Your Ears',
          text: `Take both ${raw.shortName} earbuds out of your ears before starting. High-volume acoustic sweeps should never be played directly inside the ear canal.`,
        },
        {
          name: 'Remove Silicone Tips (If Applicable)',
          text: 'Detach silicone or foam ear tips to expose the primary black acoustic speaker mesh directly to free air.',
        },
        {
          name: 'Point Speaker Mesh Downward',
          text: `Place the ${raw.shortName} with the acoustic openings facing downward over a dry microfiber towel or clean tissue.`,
        },
        {
          name: 'Play 165 Hz Water Ejection Tone',
          text: 'Ensure audio routes through the connected earbuds, maximize media volume to 100%, and run the full 60-second cycle.',
        },
        {
          name: 'Brush Mesh & Test Audio Clarity',
          text: 'Switch to Dust Cleaner mode to loosen dried wax, gently brush the mesh with a clean soft toothbrush, and test audio balance.',
        },
      ]
    : isWatch
    ? [
        {
          name: 'Take Watch Off Your Wrist',
          text: `Unbuckle the strap and remove your ${raw.shortName} so acoustic air channels on the watch casing are completely unobstructed.`,
        },
        {
          name: 'Orient Side Speaker Slots Downward',
          text: 'Hold the watch with the speaker grille holes pointed downward over a clean paper towel or dry cloth.',
        },
        {
          name: 'Maximize Volume on Connected Device',
          text: 'Set the media volume to 100% to maximize speaker diaphragm excursion and air displacement velocity.',
        },
        {
          name: 'Start 165 Hz Water Ejection Sound',
          text: `Tap Start Ejection and let the pulsing 165 Hz acoustic wave run for the full 60 seconds on your ${raw.shortName}.`,
        },
        {
          name: 'Wipe Casing & Verify Microphone/Speaker',
          text: 'Gently wipe away expelled water droplets with a microfiber cloth and verify voice prompt clarity.',
        },
      ]
    : isTablet || isLaptop
    ? [
        {
          name: 'Disconnect Accessories & Chargers',
          text: `Unplug external headphones, USB-C accessories, and power cables from your ${raw.shortName}.`,
        },
        {
          name: 'Maximize System Media Volume',
          text: 'Set speaker volume to 100% in system sound settings to allow full transducer air pressure.',
        },
        {
          name: 'Tilt Device Toward Speaker Grilles',
          text: 'Angle the device so the side or bottom speaker perforations face slightly downward onto a dry surface.',
        },
        {
          name: 'Run 165 Hz Water Ejection Cycle',
          text: 'Start the water eject tool and let the low-frequency acoustic vibrations push trapped moisture out of the sound chambers.',
        },
        {
          name: 'Dry Perimeter & Run Stereo Test',
          text: 'Wipe the exterior grilles and run the Speaker Test to ensure clean channel separation across all internal drivers.',
        },
      ]
    : [
        {
          name: 'Unplug Cables & Disconnect Bluetooth',
          text: `Disconnect charging cables and Bluetooth audio devices so playback routes directly through the ${raw.shortName} built-in speakers.`,
        },
        {
          name: 'Turn Media Volume to 100%',
          text: 'Use the volume rocker to raise media playback volume to maximum for peak acoustic pressure and membrane excursion.',
        },
        {
          name: 'Hold Device Speaker-Down',
          text: `Hold your ${raw.shortName} vertically with the bottom speaker grille and USB port facing down over a dry towel.`,
        },
        {
          name: 'Play 165 Hz Water Eject Frequency',
          text: 'Tap Start Ejection and let the pulsing sound run for 60 seconds. Gently tap the frame against your palm to help droplets escape.',
        },
        {
          name: 'Wipe Exterior & Run Speaker Test',
          text: 'Dry the bottom and earpiece grilles with a lint-free cloth, then run the Speaker Test mode to confirm crisp audio.',
        },
      ];

  // Tailored tips
  const technicalTips: string[] = raw.customTips || (
    isEarbuds
      ? [
          `Never submerge ${raw.shortName} under running water or taps to clean them.`,
          'Ensure the charging case and earbud stems are 100% dry before placing them back into the charging case.',
          'Never use needles, pins, or sharp metal picks to clean the speaker mesh as this punctures the delicate acoustic membrane.',
        ]
      : isWatch
      ? [
          `Rinse your ${raw.shortName} with fresh lukewarm water after swimming in saltwater or chlorinated pools before ejecting water.`,
          'Never insert paperclips or pins into the microphone or speaker slots.',
          'Do not place the watch on a magnetic charger while moisture remains in the speaker cavity.',
        ]
      : isPhone
      ? [
          raw.brand === 'Samsung' || raw.brand === 'Google'
            ? 'If your phone displays a "Moisture detected in USB port" warning, do not plug in a charging cable until the port is completely dry.'
            : 'If your device warns of liquid detected in the port, allow it to dry completely before connecting a charging cable.',
          'Never insert toothpicks, needles, or compressed air cans directly into the speaker holes; this can tear the waterproof mesh gasket.',
          'Do not use heat guns or hair dryers on high heat, which can melt internal adhesive water seals.',
        ]
      : [
          'Avoid using hair dryers or intense heat sources that could damage internal thermal adhesives.',
          'Never poke sharp objects into the speaker grilles.',
          'Allow ports to air dry fully in a well-ventilated area before charging.',
        ]
  );

  // Tailored FAQs
  const faqs: DeviceFAQ[] = raw.customFaqs || [
    {
      q: `How does 165 Hz sound eject water from ${raw.shortName}?`,
      a: `The 165 Hz frequency matches the physical acoustic resonance of micro-speaker chambers. Playing this low-frequency pulse displaces air rapidly, breaking the surface tension of water droplets trapped in the ${raw.shortName} speaker mesh and forcing them out safely.`,
    },
    {
      q: `Is running this water eject sound safe for ${raw.shortName} speakers?`,
      a: `Yes. The tone operates strictly within standard audio frequency and power limits designed for ${raw.name} transducers and built-in amplifiers.`,
    },
    {
      q: `Why does my ${raw.shortName} speaker sound muffled after getting wet?`,
      a: `When water enters the speaker ports, surface tension forms a thin liquid film across the protective acoustic mesh. This film blocks sound waves from vibrating freely. Ejecting the water restores original audio volume and clarity.`,
    },
    {
      q: `How many cycles should I run on ${raw.shortName}?`,
      a: `For light splashes or sweat, one 60-second cycle is usually enough. For heavy water exposure, run 2 to 3 consecutive cycles while keeping the speaker oriented downward.`,
    },
  ];

  const metaTitle = `Fix ${raw.name} Speaker: Water Eject Sound & Audio Cleaner`;
  const metaDescription = `Help eject water from ${raw.name} speakers. A 165 Hz water eject tone can help clear muffled sound from speaker ports and grilles in about 60 seconds.`;
  const eyebrow = `${raw.name} Water Eject & Diagnostics`;
  const heroHeading = `Fix ${raw.name} Speaker & Eject Water`;
  const heroSubtitle = `Play the specialized 165 Hz acoustic pulse to clear muffled audio and expel trapped water from ${raw.name} speaker grilles without installing apps.`;
  const badge = `165 Hz ${raw.shortName} Water Eject`;

  const overview = [
    `The ${raw.name} features ${raw.ipRating} water protection, but water surface tension frequently traps microscopic droplets inside speaker ports and grilles after exposure to rain, sweat, or submersion. This creates a muffled, low, or crackly sound.`,
    `Fix The Speaker generates high-displacement 165 Hz resonant sound waves directly in your web browser to dislodge trapped water droplets and clear speaker grilles quickly and safely.`,
  ];

  return {
    slug: raw.slug,
    name: raw.name,
    shortName: raw.shortName,
    brand: raw.brand,
    category: raw.category,
    metaTitle,
    metaDescription,
    eyebrow,
    heroHeading,
    heroSubtitle,
    badge,
    ipRating: raw.ipRating,
    grilleSpecs: raw.grilleSpecs || defaultGrille,
    acousticFreq: raw.acousticFreq || defaultFreq,
    recommendedDuration: raw.recommendedDuration || defaultDuration,
    compatibilityList: raw.compat || [raw.name],
    overview,
    steps,
    technicalTips,
    faqs,
    relatedSlugs: raw.relatedSlugs || [],
  };
}

// -------------------------------------------------------------
// Exhaustive Raw Device Catalog (125+ High-Search Models)
// -------------------------------------------------------------
const rawCatalog: RawDeviceDef[] = [
  // ==========================================
  // 1. APPLE IPHONES
  // ==========================================
  {
    slug: 'fix-iphone-17-speaker',
    name: 'Apple iPhone 17',
    shortName: 'iPhone 17',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (IEC 60529 — 6m depth up to 30 min)',
    compat: ['iPhone 17', 'iPhone 17 Plus', 'iPhone 17 Pro', 'iPhone 17 Pro Max'],
  },
  {
    slug: 'fix-iphone-17-pro-speaker',
    name: 'Apple iPhone 17 Pro',
    shortName: 'iPhone 17 Pro',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (Titanium chassis, 6m depth up to 30 min)',
    compat: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'iPhone 17'],
  },
  {
    slug: 'fix-iphone-17-pro-max-speaker',
    name: 'Apple iPhone 17 Pro Max',
    shortName: 'iPhone 17 Pro Max',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (IEC 60529 — 6m depth up to 30 min)',
    compat: ['iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone Air'],
    customTips: [
      'Fresh water vs. Salt water: iPhone 17 Pro Max has IP68 resistance (up to 6m for 30 min in fresh water), but ocean salt water and chlorinated pool chemicals leave corrosive mineral deposits on the acoustic mesh. If exposed to salt or pool water, gently rinse the speaker ports under a slow trickle of cool tap water before drying.',
      'Never insert SIM ejector tools, needles, or compressed air into the speaker grilles; high pressure or sharp points can puncture the water-resistant acoustic membrane.',
      'If the iOS "Liquid Detected in USB-C Connector" notification appears, do not connect a charging cable. Allow the port to air-dry upright for several hours, or use a MagSafe wireless charger in emergencies.',
      'Run built-in iOS speaker balance checks: isolate top and bottom speakers via Settings > Accessibility > Audio & Visual > Balance slider, or record a clip in Voice Memos to verify clarity across both transducers.',
    ],
    customFaqs: [
      {
        q: 'How do I test if my iPhone 17 Pro Max speakers are fully cleared after ejecting water?',
        a: 'You can test speaker clarity using three reliable iOS methods: 1) Go to Settings > Accessibility > Audio & Visual and drag the Balance slider fully left and right to isolate the top earpiece from the bottom loudspeaker. 2) Record a voice note in Voice Memos and play it back toggling the speakerphone button. 3) Use our built-in stereo channel and frequency sweep tests to confirm crisp treble and deep bass with zero crackling.',
      },
      {
        q: 'What should I do if my iPhone 17 Pro Max was dropped in salt water or a swimming pool?',
        a: 'Immediately power off the phone. Rinse the speaker openings under a gentle, low-pressure trickle of cool, fresh tap water to dissolve salt crystals and chlorine before they dry onto the acoustic mesh. Pat dry with a microfiber cloth, run our 165 Hz water eject tone for 2 to 3 cycles with ports pointing downward, and allow the device to air-dry before plugging into USB-C.',
      },
      {
        q: 'Why does my iPhone 17 Pro Max show "Liquid Detected in USB-C Connector" after ejecting water?',
        a: 'The USB-C port houses independent electrical moisture-sensing pins. While 165 Hz sound evacuates water droplets from the speaker chamber, residual moisture may still bridge the electrical pins inside the charging port. iOS automatically locks out wired charging to prevent electrical corrosion. Keep the phone upright in a ventilated area until the warning clears; MagSafe and Qi wireless charging remain safe to use.',
      },
    ],
  },
  {
    slug: 'fix-iphone-17-air-speaker',
    name: 'Apple iPhone Air',
    shortName: 'iPhone Air',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (Ultra-slim chassis water resistance)',
    compat: ['iPhone Air', 'iPhone 17'],
  },
  {
    slug: 'fix-iphone-16-speaker',
    name: 'Apple iPhone 16',
    shortName: 'iPhone 16',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (6m depth up to 30 min)',
    compat: ['iPhone 16', 'iPhone 16 Plus', 'iPhone 16 Pro', 'iPhone 16 Pro Max'],
    customTips: [
      'Locate your speaker ports: the primary loudspeaker is behind the 5 precision-milled acoustic holes on the bottom right of the USB-C port, while the earpiece/stereo speaker is an ultra-narrow micro-slit above the Dynamic Island at the top bezel.',
      'Fresh water vs. Salt water: iPhone 16 is IP68 (up to 6m for 30 min in fresh water), but ocean salt water and chlorinated pool chemicals corrode speaker mesh and internal seals. If exposed to salt water, gently rinse under a slow trickle of fresh tap water before drying.',
      'Never insert SIM ejector tools, toothpicks, or compressed air into the speaker grilles; high pressure can puncture the acoustic waterproof mesh membrane.',
      'If the iOS "Liquid Detected in USB-C Connector" alert appears, do not connect a charging cable. Allow the port to air-dry for at least 5 hours, or use a MagSafe wireless charger in emergencies.',
      'Run built-in iOS audio checks: test top vs. bottom speaker balance via Settings > Accessibility > Audio & Visual > Balance, or record a quick clip in Voice Memos and toggle speakerphone mode.',
    ],
    customFaqs: [
      {
        q: 'Where exactly are the speaker ports located on the iPhone 16?',
        a: 'The iPhone 16 has dual stereo speakers. The primary high-output loudspeaker is located on the bottom edge to the right of the centered USB-C port (5 precision-milled holes; the 3 holes to the left house the primary microphone). The secondary upper speaker is integrated into the razor-thin micro-slit at the very top seam between the front Ceramic Shield display and the aluminum frame, directly above the Dynamic Island.',
      },
      {
        q: 'How do I test if my iPhone 16 speakers are fully cleared after ejecting water?',
        a: 'Unlike Android devices, iOS does not have a secret dialer hardware code, but you can diagnose speaker clarity using three reliable methods: 1) Go to Settings > Accessibility > Audio & Visual and drag the Balance slider left and right to isolate the top earpiece from the bottom loudspeaker. 2) Record a voice note in the Voice Memos app and play it back toggling the speaker icon on and off. 3) Use our built-in browser Stereo Channel Test to verify high, mid, and low-frequency response on each channel.',
      },
      {
        q: 'What should I do if my iPhone 16 was dropped in salt water or a swimming pool?',
        a: 'Salt water and pool chlorine leave corrosive chemical residues that crystallize inside the acoustic mesh. Immediately turn off the phone and rinse the speaker ports gently under a slow trickle of cool, fresh tap water (never use high water pressure). Pat dry with a lint-free microfiber cloth, tap the phone gently against your palm with the ports facing down, run our 165 Hz water eject tone for 2 to 3 cycles, and allow it to dry thoroughly before plugging into USB-C.',
      },
      {
        q: 'Can 165 Hz water eject damage the iPhone 16 speaker membrane?',
        a: 'No. The 165 Hz acoustic pulse generates mechanical air displacement within the safe operational decibel and frequency range of Apple’s custom speaker drivers and audio amplifiers. It safely flexes the diaphragm to break the surface tension of trapped liquid without causing thermal or mechanical stress.',
      },
      {
        q: 'Why does my iPhone 16 say "Liquid Detected in USB-C Connector" after water ejection?',
        a: 'The USB-C port contains electrical moisture-sensing pins independent of the speaker chamber. While 165 Hz sound clears the acoustic cavity, moisture may still linger on the USB-C charging pins. iOS automatically disables wired charging to prevent short circuits. Leave the phone standing upright in a well-ventilated area until the prompt disappears; you can safely use Qi or MagSafe wireless charging in the meantime.',
      },
    ],
  },
  {
    slug: 'fix-iphone-16-plus-speaker',
    name: 'Apple iPhone 16 Plus',
    shortName: 'iPhone 16 Plus',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (6m depth up to 30 min)',
    compat: ['iPhone 16 Plus', 'iPhone 16', 'iPhone 16 Pro Max'],
  },
  {
    slug: 'fix-iphone-16-pro-speaker',
    name: 'Apple iPhone 16 Pro',
    shortName: 'iPhone 16 Pro',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (Grade 5 Titanium frame, 6m up to 30 min)',
    compat: ['iPhone 16 Pro', 'iPhone 16 Pro Max', 'iPhone 16'],
  },
  {
    slug: 'fix-iphone-16-pro-max-speaker',
    name: 'Apple iPhone 16 Pro Max',
    shortName: 'iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (Grade 5 Titanium frame, 6m up to 30 min)',
    compat: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus'],
  },
  {
    slug: 'fix-iphone-15-speaker',
    name: 'Apple iPhone 15',
    shortName: 'iPhone 15',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (6m depth up to 30 min)',
    compat: ['iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max'],
  },
  {
    slug: 'fix-iphone-15-plus-speaker',
    name: 'Apple iPhone 15 Plus',
    shortName: 'iPhone 15 Plus',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (6m depth up to 30 min)',
    compat: ['iPhone 15 Plus', 'iPhone 15', 'iPhone 15 Pro Max'],
  },
  {
    slug: 'fix-iphone-15-pro-speaker',
    name: 'Apple iPhone 15 Pro',
    shortName: 'iPhone 15 Pro',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (Titanium chassis, 6m depth up to 30 min)',
    compat: ['iPhone 15 Pro', 'iPhone 15 Pro Max', 'iPhone 15'],
  },
  {
    slug: 'fix-iphone-15-pro-max-speaker',
    name: 'Apple iPhone 15 Pro Max',
    shortName: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (Titanium chassis, 6m depth up to 30 min)',
    compat: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus'],
  },
  {
    slug: 'fix-iphone-14-speaker',
    name: 'Apple iPhone 14',
    shortName: 'iPhone 14',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (6m depth up to 30 min)',
    compat: ['iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max'],
  },
  {
    slug: 'fix-iphone-14-plus-speaker',
    name: 'Apple iPhone 14 Plus',
    shortName: 'iPhone 14 Plus',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (6m depth up to 30 min)',
    compat: ['iPhone 14 Plus', 'iPhone 14', 'iPhone 14 Pro Max'],
  },
  {
    slug: 'fix-iphone-14-pro-speaker',
    name: 'Apple iPhone 14 Pro',
    shortName: 'iPhone 14 Pro',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (Stainless steel frame, 6m up to 30 min)',
    compat: ['iPhone 14 Pro', 'iPhone 14 Pro Max', 'iPhone 14'],
  },
  {
    slug: 'fix-iphone-14-pro-max-speaker',
    name: 'Apple iPhone 14 Pro Max',
    shortName: 'iPhone 14 Pro Max',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (Stainless steel frame, 6m up to 30 min)',
    compat: ['iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus'],
  },
  {
    slug: 'fix-iphone-13-speaker',
    name: 'Apple iPhone 13',
    shortName: 'iPhone 13',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (6m depth up to 30 min)',
    compat: ['iPhone 13', 'iPhone 13 mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max'],
  },
  {
    slug: 'fix-iphone-13-mini-speaker',
    name: 'Apple iPhone 13 mini',
    shortName: 'iPhone 13 mini',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (6m depth up to 30 min)',
    compat: ['iPhone 13 mini', 'iPhone 13', 'iPhone 12 mini'],
  },
  {
    slug: 'fix-iphone-13-pro-speaker',
    name: 'Apple iPhone 13 Pro',
    shortName: 'iPhone 13 Pro',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (Stainless steel frame, 6m up to 30 min)',
    compat: ['iPhone 13 Pro', 'iPhone 13 Pro Max', 'iPhone 13'],
  },
  {
    slug: 'fix-iphone-13-pro-max-speaker',
    name: 'Apple iPhone 13 Pro Max',
    shortName: 'iPhone 13 Pro Max',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (Stainless steel frame, 6m up to 30 min)',
    compat: ['iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13'],
  },
  {
    slug: 'fix-iphone-12-speaker',
    name: 'Apple iPhone 12',
    shortName: 'iPhone 12',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (6m depth up to 30 min)',
    compat: ['iPhone 12', 'iPhone 12 mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max'],
  },
  {
    slug: 'fix-iphone-12-mini-speaker',
    name: 'Apple iPhone 12 mini',
    shortName: 'iPhone 12 mini',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (6m depth up to 30 min)',
    compat: ['iPhone 12 mini', 'iPhone 12', 'iPhone 13 mini'],
  },
  {
    slug: 'fix-iphone-12-pro-speaker',
    name: 'Apple iPhone 12 Pro',
    shortName: 'iPhone 12 Pro',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (Stainless steel frame, 6m up to 30 min)',
    compat: ['iPhone 12 Pro', 'iPhone 12 Pro Max', 'iPhone 12'],
  },
  {
    slug: 'fix-iphone-12-pro-max-speaker',
    name: 'Apple iPhone 12 Pro Max',
    shortName: 'iPhone 12 Pro Max',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (Stainless steel frame, 6m up to 30 min)',
    compat: ['iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12'],
  },
  {
    slug: 'fix-iphone-11-speaker',
    name: 'Apple iPhone 11',
    shortName: 'iPhone 11',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (2m depth up to 30 min)',
    compat: ['iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max', 'iPhone XR'],
  },
  {
    slug: 'fix-iphone-11-pro-speaker',
    name: 'Apple iPhone 11 Pro',
    shortName: 'iPhone 11 Pro',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (4m depth up to 30 min)',
    compat: ['iPhone 11 Pro', 'iPhone 11 Pro Max', 'iPhone 11'],
  },
  {
    slug: 'fix-iphone-11-pro-max-speaker',
    name: 'Apple iPhone 11 Pro Max',
    shortName: 'iPhone 11 Pro Max',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (4m depth up to 30 min)',
    compat: ['iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11'],
  },
  {
    slug: 'fix-iphone-xr-speaker',
    name: 'Apple iPhone XR',
    shortName: 'iPhone XR',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP67 (1m depth up to 30 min)',
    compat: ['iPhone XR', 'iPhone 11', 'iPhone X'],
  },
  {
    slug: 'fix-iphone-xs-speaker',
    name: 'Apple iPhone XS & XS Max',
    shortName: 'iPhone XS',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP68 (2m depth up to 30 min)',
    compat: ['iPhone XS', 'iPhone XS Max', 'iPhone X'],
  },
  {
    slug: 'fix-iphone-x-speaker',
    name: 'Apple iPhone X',
    shortName: 'iPhone X',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP67 (1m depth up to 30 min)',
    compat: ['iPhone X', 'iPhone XS', 'iPhone 8 Plus'],
  },
  {
    slug: 'fix-iphone-se-speaker',
    name: 'Apple iPhone SE (2nd & 3rd Gen)',
    shortName: 'iPhone SE',
    brand: 'Apple',
    category: 'smartphone',
    ipRating: 'IP67 (1m depth up to 30 min)',
    compat: ['iPhone SE 3rd Gen (2022)', 'iPhone SE 2nd Gen (2020)', 'iPhone 8'],
  },

  // ==========================================
  // 2. APPLE AIRPODS & AUDIO
  // ==========================================
  {
    slug: 'clean-airpods-pro-2-speaker',
    name: 'Apple AirPods Pro 2 (USB-C & Lightning)',
    shortName: 'AirPods Pro 2',
    brand: 'Apple',
    category: 'earbuds',
    ipRating: 'IP54 (Dust, sweat and water resistance)',
    compat: ['AirPods Pro 2 (USB-C)', 'AirPods Pro 2 (Lightning)', 'AirPods Pro 1'],
    customTips: [
      'Know your acoustic ports: sound outputs through the black driver mesh behind the removable silicone ear tip, while bass equalization and ANC venting occur through the elongated black mesh on the outer shell and the microphone vents on the stem.',
      'Remember the charging case speaker: the AirPods Pro 2 MagSafe case (USB-C and Lightning) has 4 speaker holes on the bottom edge next to the charging port for Find My and battery alerts; dry these holes before plugging in.',
      'IP54 rating limitations: AirPods Pro 2 and their case are rated IP54 for sweat and splash resistance, NOT waterproof. Never submerge them in water or run them under a tap.',
      'Salt water and sweat care: If exposed to heavy sweat or sea spray, wipe down with a microfiber cloth dampened with fresh water (never wet the acoustic meshes directly), remove the silicone tips, and dry with a lint-free swab.',
      'Run the Ear Tip Fit Test: in iOS Settings > AirPods Pro 2 > Ear Tip Fit Test, run the acoustic sweep. A failure ("Yellow" result) often indicates moisture or debris blocking the internal feedback microphone.',
    ],
    customFaqs: [
      {
        q: 'Where are the speaker and vent ports on AirPods Pro 2 and their charging case?',
        a: 'Each AirPod Pro 2 earbud has three main acoustic zones: 1) The main high-excursion driver mesh, visible when you snap off the silicone ear tip. 2) The elongated rear acoustic vent on the curved exterior shell, which equalizes air pressure and provides deep bass. 3) Inward and outward-facing ANC microphone grilles along the contour and bottom stem. Additionally, the AirPods Pro 2 charging case has 4 dedicated speaker holes on the bottom edge for Find My chime alerts.',
      },
      {
        q: 'Are AirPods Pro 2 waterproof against swimming and showers?',
        a: 'No. AirPods Pro 2 (both USB-C and Lightning versions) feature an IP54 / IPX4 rating, meaning they are resistant to sweat and light splashes of water, but they are NOT waterproof. They should never be worn while swimming, showering, or submerged in liquid. If liquid gets inside, sound will become muffled, crackly, or trigger a high-pitched whistling feedback from the ANC microphones.',
      },
      {
        q: 'How do I safely clean and eject liquid from AirPods Pro 2 after sweat or salt water exposure?',
        a: 'Never rinse AirPods Pro 2 under a running faucet. If exposed to sweat or salt water, wipe the exterior plastic with a soft cloth lightly moistened with fresh water (ensuring no moisture enters openings). Pull off the silicone tips and rinse the tips separately in fresh water. For the earbuds, hold the mesh openings facing down onto a lint-free cloth, play our 165 Hz water eject tone at high volume to dislodge trapped droplets, and let them dry completely before placing them back into the charging case.',
      },
      {
        q: 'How can I test if moisture is trapped inside my AirPods Pro 2?',
        a: 'Use two Apple diagnostic methods: 1) Put both AirPods in your ears and run the Ear Tip Fit Test in Settings > AirPods Pro. If moisture is clogging the inward acoustic microphone, the test will fail with an "Adjust or Try a Different Ear Tip" warning. 2) Toggle between Transparency and Noise Cancellation modes. If you hear a high-pitched screech or squeal, liquid is obstructing the external feedback vents. Run the water eject cycle until the audio clears.',
      },
      {
        q: 'Can placing wet AirPods Pro 2 in the charging case cause permanent damage?',
        a: 'Yes. The base of each AirPod stem contains metal contact points that mate with the charging pins inside the case. If you insert wet AirPods, residual moisture can cause electrochemical corrosion, short-circuit the case charging circuitry, and permanently damage battery contacts. Always let your AirPods air-dry on a towel for at least 2 hours after running the water eject tone before charging.',
      },
    ],
  },
  {
    slug: 'clean-airpods-pro-speaker',
    name: 'Apple AirPods Pro (1st Generation)',
    shortName: 'AirPods Pro',
    brand: 'Apple',
    category: 'earbuds',
    ipRating: 'IPX4 (Sweat and water resistance)',
    compat: ['AirPods Pro 1st Gen', 'AirPods Pro 2'],
  },
  {
    slug: 'clean-airpods-4-speaker',
    name: 'Apple AirPods 4 (ANC & Standard)',
    shortName: 'AirPods 4',
    brand: 'Apple',
    category: 'earbuds',
    ipRating: 'IP54 (Dust, sweat and water resistance)',
    compat: ['AirPods 4 ANC', 'AirPods 4 Standard', 'AirPods 3'],
  },
  {
    slug: 'clean-airpods-3-speaker',
    name: 'Apple AirPods 3',
    shortName: 'AirPods 3',
    brand: 'Apple',
    category: 'earbuds',
    ipRating: 'IPX4 (Sweat and water resistance)',
    compat: ['AirPods 3rd Gen', 'AirPods 4', 'AirPods 2'],
  },
  {
    slug: 'clean-airpods-2-speaker',
    name: 'Apple AirPods 2 & AirPods 1',
    shortName: 'AirPods 2',
    brand: 'Apple',
    category: 'earbuds',
    ipRating: 'Non-rated (Splash sensitive acoustic mesh)',
    compat: ['AirPods 2nd Gen', 'AirPods 1st Gen', 'AirPods 3'],
  },
  {
    slug: 'clean-airpods-max-speaker',
    name: 'Apple AirPods Max (USB-C & Lightning)',
    shortName: 'AirPods Max',
    brand: 'Apple',
    category: 'earbuds',
    ipRating: 'Non-rated (Breathable knit mesh canopy and earcups)',
    compat: ['AirPods Max (USB-C)', 'AirPods Max (Lightning)'],
  },

  // ==========================================
  // 3. APPLE WATCH
  // ==========================================
  {
    slug: 'eject-water-apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    shortName: 'Watch Ultra 2',
    brand: 'Apple',
    category: 'smartwatch',
    ipRating: 'WR100 (100m depth, EN13319 dive rated, IP6X dust)',
    compat: ['Apple Watch Ultra 2 (49mm)', 'Apple Watch Ultra (49mm)'],
  },
  {
    slug: 'eject-water-apple-watch-ultra',
    name: 'Apple Watch Ultra',
    shortName: 'Watch Ultra',
    brand: 'Apple',
    category: 'smartwatch',
    ipRating: 'WR100 (100m water resistance, 86dB siren dual speakers)',
    compat: ['Apple Watch Ultra', 'Apple Watch Ultra 2'],
  },
  {
    slug: 'eject-water-apple-watch-series-10',
    name: 'Apple Watch Series 10',
    shortName: 'Watch Series 10',
    brand: 'Apple',
    category: 'smartwatch',
    ipRating: 'WR50 (50m water resistance, wide-angle acoustic slot)',
    compat: ['Apple Watch Series 10 (46mm & 42mm)', 'Apple Watch Series 9'],
  },
  {
    slug: 'eject-water-apple-watch-series-9',
    name: 'Apple Watch Series 9',
    shortName: 'Watch Series 9',
    brand: 'Apple',
    category: 'smartwatch',
    ipRating: 'WR50 (50m water resistance, IP6X dust)',
    compat: ['Apple Watch Series 9 (45mm & 41mm)', 'Apple Watch Series 8'],
  },
  {
    slug: 'eject-water-apple-watch-series-8',
    name: 'Apple Watch Series 8',
    shortName: 'Watch Series 8',
    brand: 'Apple',
    category: 'smartwatch',
    ipRating: 'WR50 (50m water resistance)',
    compat: ['Apple Watch Series 8', 'Apple Watch Series 7', 'Apple Watch SE'],
  },
  {
    slug: 'eject-water-apple-watch-series-7',
    name: 'Apple Watch Series 7',
    shortName: 'Watch Series 7',
    brand: 'Apple',
    category: 'smartwatch',
    ipRating: 'WR50 (50m water resistance, IP6X dust)',
    compat: ['Apple Watch Series 7', 'Apple Watch Series 6'],
  },
  {
    slug: 'eject-water-apple-watch-series-6',
    name: 'Apple Watch Series 6 & 5',
    shortName: 'Watch Series 6',
    brand: 'Apple',
    category: 'smartwatch',
    ipRating: 'WR50 (50m water resistance)',
    compat: ['Apple Watch Series 6', 'Apple Watch Series 5', 'Apple Watch Series 4'],
  },
  {
    slug: 'eject-water-apple-watch-se',
    name: 'Apple Watch SE (1st & 2nd Gen)',
    shortName: 'Apple Watch SE',
    brand: 'Apple',
    category: 'smartwatch',
    ipRating: 'WR50 (50m water resistance)',
    compat: ['Apple Watch SE 2nd Gen', 'Apple Watch SE 1st Gen'],
  },

  // ==========================================
  // 4. APPLE IPAD & MACBOOK
  // ==========================================
  {
    slug: 'fix-ipad-pro-speaker',
    name: 'Apple iPad Pro (M4 & M2 Series)',
    shortName: 'iPad Pro',
    brand: 'Apple',
    category: 'tablet',
    ipRating: 'Non-rated (Quad-speaker audio system)',
    compat: ['iPad Pro 13-inch (M4)', 'iPad Pro 11-inch (M4)', 'iPad Pro 12.9-inch (M2/M1)'],
  },
  {
    slug: 'fix-ipad-air-speaker',
    name: 'Apple iPad Air (M2 & M1)',
    shortName: 'iPad Air',
    brand: 'Apple',
    category: 'tablet',
    ipRating: 'Non-rated (Landscape stereo speakers)',
    compat: ['iPad Air 13-inch (M2)', 'iPad Air 11-inch (M2)', 'iPad Air 5th Gen'],
  },
  {
    slug: 'fix-ipad-mini-speaker',
    name: 'Apple iPad mini (A17 Pro & 6th Gen)',
    shortName: 'iPad mini',
    brand: 'Apple',
    category: 'tablet',
    ipRating: 'Non-rated (Stereo speakers landscape)',
    compat: ['iPad mini 7 (A17 Pro)', 'iPad mini 6'],
  },
  {
    slug: 'fix-ipad-speaker',
    name: 'Apple iPad (10th & 9th Gen)',
    shortName: 'iPad',
    brand: 'Apple',
    category: 'tablet',
    ipRating: 'Non-rated (Landscape stereo speaker array)',
    compat: ['iPad 10th Gen', 'iPad 9th Gen'],
  },
  {
    slug: 'fix-macbook-pro-speaker',
    name: 'Apple MacBook Pro (14-inch & 16-inch M3/M2/M1)',
    shortName: 'MacBook Pro',
    brand: 'Apple',
    category: 'laptop',
    ipRating: 'Non-rated (High-fidelity six-speaker sound system with force-cancelling woofers)',
    compat: ['MacBook Pro 16-inch (M3/M2/M1)', 'MacBook Pro 14-inch (M3/M2/M1)'],
  },
  {
    slug: 'fix-macbook-air-speaker',
    name: 'Apple MacBook Air (13-inch & 15-inch M3/M2)',
    shortName: 'MacBook Air',
    brand: 'Apple',
    category: 'laptop',
    ipRating: 'Non-rated (Four-speaker sound system with Spatial Audio)',
    compat: ['MacBook Air 15-inch (M3/M2)', 'MacBook Air 13-inch (M3/M2/M1)'],
  },

  // ==========================================
  // 5. SAMSUNG GALAXY S-SERIES
  // ==========================================
  {
    slug: 'eject-water-samsung-galaxy-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra',
    shortName: 'Galaxy S25 Ultra',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m fresh water up to 30 min)',
    compat: ['Galaxy S25 Ultra', 'Galaxy S25+', 'Galaxy S25'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s25-plus',
    name: 'Samsung Galaxy S25+',
    shortName: 'Galaxy S25+',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Galaxy S25+', 'Galaxy S25', 'Galaxy S25 Ultra'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s25',
    name: 'Samsung Galaxy S25',
    shortName: 'Galaxy S25',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68',
    compat: ['Galaxy S25', 'Galaxy S25+', 'Galaxy S24'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    shortName: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68',
    compat: ['Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24'],
    customTips: [
      'If the One UI water drop notification appears ("Moisture has been detected in your charger/USB port"), do not plug in the USB-C cable. Let the port air-dry upright for 2 to 4 hours; you can safely use Fast Wireless Charging if you need immediate power.',
    ],
    customFaqs: [
      {
        q: 'What does the "Moisture detected in charger/USB port" water drop icon mean?',
        a: 'The Galaxy S24 Ultra USB-C port has built-in sensor pins that detect electrical conductivity caused by moisture or conductive liquid. One UI disables cable charging to prevent short-circuiting. The warning usually clears within 1 to 4 hours as airflow evaporates the moisture. While waiting, Fast Wireless Charging remains fully operational.',
      },
    ],
  },
  {
    slug: 'eject-water-samsung-galaxy-s24-plus',
    name: 'Samsung Galaxy S24+',
    shortName: 'Galaxy S24+',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Galaxy S24+', 'Galaxy S24', 'Galaxy S24 Ultra'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s24',
    name: 'Samsung Galaxy S24',
    shortName: 'Galaxy S24',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68',
    compat: ['Galaxy S24', 'Galaxy S24+', 'Galaxy S23'],
    customTips: [
      'If Samsung’s "Moisture detected in your Charger/USB port" warning triggers, never force-charge with a cable. Let the port dry naturally for 2–4 hours or use wireless PowerShare/Qi charging.',
    ],
    customFaqs: [
      {
        q: 'My Galaxy S24 fell into salt water or a chlorinated pool. What is the correct procedure?',
        a: 'Salt water and chlorine are corrosive and will leave dried salt crystals inside the speaker slot if not neutralized. Immediately turn off the device and immerse or rinse it gently in a bowl of clean, still tap water for 1–2 minutes to dilute salt. Do not use high water pressure. Pat dry with a clean towel, hold the phone upright with the speaker facing down, run our 165 Hz water eject tone for 2 to 3 cycles, and allow it to dry completely before connecting a charging cable.',
      },
      {
        q: 'How does 165 Hz sound clear the Galaxy S24 speaker slot?',
        a: 'Water entering the Galaxy S24 bottom speaker slot clings to the internal hydrophobic acoustic mesh due to surface tension, muffling sound output. Playing a 165 Hz low-frequency resonant sound wave creates rapid air pressure oscillations in the speaker chamber. This acoustic vibration breaks the liquid meniscus and propels droplets outward through the speaker slot.',
      },
      {
        q: 'What should I do if the Galaxy S24 shows a "Moisture detected in USB port" alert?',
        a: 'Samsung phones feature a hardware moisture sensor in the USB-C port that automatically halts charging when wet to protect the motherboard. Do not blow hot air into the port with a hairdryer. Instead, gently tap the phone against your hand with the port facing down to dislodge droplets, let it dry in a well-ventilated room, or charge wirelessly on a Qi pad while waiting for the notification to clear.',
      },
    ],
  },
  {
    slug: 'eject-water-samsung-galaxy-s24-fe',
    name: 'Samsung Galaxy S24 FE',
    shortName: 'Galaxy S24 FE',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Galaxy S24 FE', 'Galaxy S23 FE', 'Galaxy S24'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s23-ultra',
    name: 'Samsung Galaxy S23 Ultra',
    shortName: 'Galaxy S23 Ultra',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Galaxy S23 Ultra', 'Galaxy S23+', 'Galaxy S23'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s23-plus',
    name: 'Samsung Galaxy S23+',
    shortName: 'Galaxy S23+',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Galaxy S23+', 'Galaxy S23', 'Galaxy S23 Ultra'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s23',
    name: 'Samsung Galaxy S23',
    shortName: 'Galaxy S23',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Galaxy S23', 'Galaxy S23+', 'Galaxy S22'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s23-fe',
    name: 'Samsung Galaxy S23 FE',
    shortName: 'Galaxy S23 FE',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Galaxy S23 FE', 'Galaxy S21 FE', 'Galaxy S23'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s22-ultra',
    name: 'Samsung Galaxy S22 Ultra',
    shortName: 'Galaxy S22 Ultra',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68',
    compat: ['Galaxy S22 Ultra', 'Galaxy S22+', 'Galaxy S22'],
    customTips: [
      'If exposed to pool water or salt water, rinse briefly under a gentle trickle of fresh tap water to prevent mineral corrosion on the acoustic mesh, then dry with a microfiber towel.',
    ],
    customFaqs: [
      {
        q: 'Does older age affect the S22 Ultra IP68 water resistance seals?',
        a: 'Yes. Factory IP68 ratings are measured on new devices in lab conditions. Over time, exposure to ambient heat, humidity, drops, and pocket lint gradually degrades internal waterproof adhesive gaskets. If your S22 Ultra gets wet, treat it promptly: eject water with 165 Hz sound immediately rather than relying on degraded internal seals.',
      },
      {
        q: 'What should I do if the Samsung "Moisture detected" notification won\'t turn off?',
        a: 'Ensure the USB-C port is thoroughly dry. Hold the phone upright and tap it gently against your hand. Direct a cool room-temperature fan towards the bottom port for 1 to 2 hours. Never use hair dryers, cotton buds, or rubbing alcohol inside the port. You can charge the phone wirelessly on any Qi charging pad while waiting.',
      },
    ],
  },
  {
    slug: 'eject-water-samsung-galaxy-s22-plus',
    name: 'Samsung Galaxy S22+',
    shortName: 'Galaxy S22+',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Galaxy S22+', 'Galaxy S22', 'Galaxy S22 Ultra'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s22',
    name: 'Samsung Galaxy S22',
    shortName: 'Galaxy S22',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Galaxy S22', 'Galaxy S22+', 'Galaxy S21'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s21-ultra',
    name: 'Samsung Galaxy S21 Ultra',
    shortName: 'Galaxy S21 Ultra',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Galaxy S21 Ultra', 'Galaxy S21+', 'Galaxy S21'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s21',
    name: 'Samsung Galaxy S21 & S21+',
    shortName: 'Galaxy S21',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Galaxy S21', 'Galaxy S21+', 'Galaxy S21 FE'],
  },
  {
    slug: 'eject-water-samsung-galaxy-s20',
    name: 'Samsung Galaxy S20 & S20 Ultra',
    shortName: 'Galaxy S20',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Galaxy S20 Ultra', 'Galaxy S20+', 'Galaxy S20', 'Galaxy S20 FE'],
  },

  // ==========================================
  // 6. SAMSUNG GALAXY Z-SERIES FOLDABLES
  // ==========================================
  {
    slug: 'fix-samsung-galaxy-z-fold-6-speaker',
    name: 'Samsung Galaxy Z Fold 6',
    shortName: 'Galaxy Z Fold 6',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP48',
    compat: ['Galaxy Z Fold 6', 'Galaxy Z Fold 5', 'Galaxy Z Fold 4'],
  },
  {
    slug: 'fix-samsung-galaxy-z-fold-5-speaker',
    name: 'Samsung Galaxy Z Fold 5',
    shortName: 'Galaxy Z Fold 5',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IPX8 (Water resistance up to 1.5m for 30 min)',
    compat: ['Galaxy Z Fold 5', 'Galaxy Z Fold 4', 'Galaxy Z Fold 6'],
  },
  {
    slug: 'fix-samsung-galaxy-z-fold-4-speaker',
    name: 'Samsung Galaxy Z Fold 4',
    shortName: 'Galaxy Z Fold 4',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IPX8 (1.5m up to 30 min)',
    compat: ['Galaxy Z Fold 4', 'Galaxy Z Fold 3'],
  },
  {
    slug: 'fix-samsung-galaxy-z-flip-6-speaker',
    name: 'Samsung Galaxy Z Flip 6',
    shortName: 'Galaxy Z Flip 6',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP48 (Water resistance up to 1.5m for 30 min)',
    compat: ['Galaxy Z Flip 6', 'Galaxy Z Flip 5', 'Galaxy Z Flip 4'],
  },
  {
    slug: 'fix-samsung-galaxy-z-flip-5-speaker',
    name: 'Samsung Galaxy Z Flip 5',
    shortName: 'Galaxy Z Flip 5',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IPX8 (Water resistance up to 1.5m for 30 min)',
    compat: ['Galaxy Z Flip 5', 'Galaxy Z Flip 4', 'Galaxy Z Flip 6'],
  },
  {
    slug: 'fix-samsung-galaxy-z-flip-4-speaker',
    name: 'Samsung Galaxy Z Flip 4',
    shortName: 'Galaxy Z Flip 4',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IPX8 (1.5m up to 30 min)',
    compat: ['Galaxy Z Flip 4', 'Galaxy Z Flip 3'],
  },

  // ==========================================
  // 7. SAMSUNG GALAXY A & M SERIES
  // ==========================================
  {
    slug: 'fix-samsung-galaxy-a55-speaker',
    name: 'Samsung Galaxy A55 5G',
    shortName: 'Galaxy A55',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP67 (1m water depth up to 30 min)',
    compat: ['Galaxy A55 5G', 'Galaxy A54 5G', 'Galaxy A35 5G'],
  },
  {
    slug: 'fix-samsung-galaxy-a54-speaker',
    name: 'Samsung Galaxy A54 5G',
    shortName: 'Galaxy A54',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP67 (1m depth up to 30 min)',
    compat: ['Galaxy A54 5G', 'Galaxy A53 5G', 'Galaxy A55 5G'],
  },
  {
    slug: 'fix-samsung-galaxy-a35-speaker',
    name: 'Samsung Galaxy A35 5G',
    shortName: 'Galaxy A35',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP67 (1m depth up to 30 min)',
    compat: ['Galaxy A35 5G', 'Galaxy A34 5G', 'Galaxy A55 5G'],
  },
  {
    slug: 'fix-samsung-galaxy-a34-speaker',
    name: 'Samsung Galaxy A34 5G',
    shortName: 'Galaxy A34',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'IP67 (1m depth up to 30 min)',
    compat: ['Galaxy A34 5G', 'Galaxy A33 5G', 'Galaxy A35 5G'],
  },
  {
    slug: 'fix-samsung-galaxy-a25-speaker',
    name: 'Samsung Galaxy A25 5G',
    shortName: 'Galaxy A25',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'Standard splash resistant acoustic grille',
    compat: ['Galaxy A25 5G', 'Galaxy A24', 'Galaxy A15 5G'],
    customTips: [
      'Locate your speaker ports: the primary loudspeaker is behind the 5-hole grille on the bottom edge beside the USB-C port and 3.5mm headphone jack. The secondary stereo earpiece speaker is integrated into the slim slit above the Infinity-U camera notch.',
      'Important water protection notice: unlike Samsung Galaxy A35/A55 models, the Galaxy A25 5G does NOT carry an official IP67 or IP68 waterproof rating. It features basic splash resistance only — never submerge it in water or wash it under running water.',
      'Check the 3.5mm headphone jack: water entering the bottom 3.5mm audio jack can short the headphone detection pins, tricking One UI into believing wired headphones are plugged in and muting the loudspeaker. Shake droplets out of the jack with the bottom facing down.',
      'If the phone gets wet from rain, spills, or splashes, immediately turn off the device, blot the exterior dry with a towel, and run 165 Hz sound with the speaker openings angled downward onto an absorbent cloth.',
      'Run Samsung hardware diagnostics: open the Samsung Phone dialer and enter *#0*#, then tap "SPEAKER" to test audio clarity across both the bottom loudspeaker and top earpiece.',
    ],
    customFaqs: [
      {
        q: 'Where are the speakers located on the Samsung Galaxy A25 5G?',
        a: 'The Galaxy A25 5G features stereo speakers. The main loudspeaker is located on the bottom edge behind a 5-hole grille positioned between the USB-C port and the outer frame, right next to the 3.5mm headphone jack. The secondary stereo earpiece speaker is housed in the slim horizontal slit directly above the front camera notch at the top bezel.',
      },
      {
        q: 'Is the Samsung Galaxy A25 5G waterproof?',
        a: 'No. The Galaxy A25 5G does not have an official IP67 or IP68 water immersion rating. While its internal acoustic ports feature basic splash-dampening mesh, the phone cannot withstand submersion in water, sinks, or pools. If the phone is exposed to liquids, prompt action with 165 Hz water ejection is critical to prevent liquid from seeping into internal circuitry.',
      },
      {
        q: 'How do I test the speakers on Galaxy A25 using the Samsung diagnostic menu?',
        a: 'Open the default Samsung Phone dialer and enter *#0*#. In the diagnostic grid, tap "SPEAKER". The phone will play a test melody through the bottom loudspeaker, and tapping again or pressing the screen will cycle audio to the top earpiece, allowing you to verify that both drivers produce clean, unmuffled sound.',
      },
      {
        q: 'Why is sound muted or playing through headphones on my Galaxy A25 after water exposure?',
        a: 'The Galaxy A25 includes a physical 3.5mm headphone jack on the bottom edge. When water droplets enter this socket, they create electrical continuity between the audio detection contacts, causing One UI to route all sound to a non-existent wired headset. Tap the bottom of the phone gently against your palm and let the socket air-dry to restore speaker output.',
      },
      {
        q: 'How does 165 Hz water eject protect non-submersible phones like the Galaxy A25?',
        a: 'Because non-IP rated phones have less aggressive internal adhesive barriers, liquid sitting on the acoustic mesh can gradually seep deeper into the speaker voice coil. The 165 Hz sound wave creates rhythmic air pulses that push droplets outward through the exterior grille before capillary action draws liquid into sensitive electronics.',
      },
    ],
  },
  {
    slug: 'fix-samsung-galaxy-a15-speaker',
    name: 'Samsung Galaxy A15 (5G & 4G)',
    shortName: 'Galaxy A15',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'Standard splash resistant acoustic grille',
    compat: ['Galaxy A15 5G', 'Galaxy A15 4G', 'Galaxy A14'],
  },
  {
    slug: 'fix-samsung-galaxy-a14-speaker',
    name: 'Samsung Galaxy A14 5G',
    shortName: 'Galaxy A14',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'Standard splash resistant acoustic grille',
    compat: ['Galaxy A14 5G', 'Galaxy A14 4G', 'Galaxy A13'],
  },
  {
    slug: 'fix-samsung-galaxy-m54-speaker',
    name: 'Samsung Galaxy M54 5G',
    shortName: 'Galaxy M54',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'Standard water repellent coating',
    compat: ['Galaxy M54 5G', 'Galaxy M53 5G', 'Galaxy M34 5G'],
  },
  {
    slug: 'fix-samsung-galaxy-m34-speaker',
    name: 'Samsung Galaxy M34 5G',
    shortName: 'Galaxy M34',
    brand: 'Samsung',
    category: 'smartphone',
    ipRating: 'Standard water repellent coating',
    compat: ['Galaxy M34 5G', 'Galaxy M33 5G', 'Galaxy M14 5G'],
  },

  // ==========================================
  // 8. SAMSUNG WEARABLES & BUDS
  // ==========================================
  {
    slug: 'clean-galaxy-buds-3-pro-speaker',
    name: 'Samsung Galaxy Buds 3 Pro',
    shortName: 'Galaxy Buds 3 Pro',
    brand: 'Samsung',
    category: 'earbuds',
    ipRating: 'IP57 (Water and dust resistance up to 1m for 30 min)',
    compat: ['Galaxy Buds 3 Pro', 'Galaxy Buds 3', 'Galaxy Buds 2 Pro'],
  },
  {
    slug: 'clean-galaxy-buds-2-pro-speaker',
    name: 'Samsung Galaxy Buds 2 Pro',
    shortName: 'Galaxy Buds 2 Pro',
    brand: 'Samsung',
    category: 'earbuds',
    ipRating: 'IPX7 (Water resistance up to 1m for 30 min)',
    compat: ['Galaxy Buds 2 Pro', 'Galaxy Buds 2', 'Galaxy Buds Pro'],
  },
  {
    slug: 'clean-galaxy-buds-fe-speaker',
    name: 'Samsung Galaxy Buds FE',
    shortName: 'Galaxy Buds FE',
    brand: 'Samsung',
    category: 'earbuds',
    ipRating: 'IPX2 (Splash and sweat resistant)',
    compat: ['Galaxy Buds FE', 'Galaxy Buds 2', 'Galaxy Buds+'],
  },
  {
    slug: 'eject-water-galaxy-watch-ultra',
    name: 'Samsung Galaxy Watch Ultra',
    shortName: 'Galaxy Watch Ultra',
    brand: 'Samsung',
    category: 'smartwatch',
    ipRating: '10ATM / IP68 / MIL-STD-810H (100m depth rating)',
    compat: ['Galaxy Watch Ultra (47mm)', 'Galaxy Watch 7'],
  },
  {
    slug: 'eject-water-galaxy-watch-7',
    name: 'Samsung Galaxy Watch 7',
    shortName: 'Galaxy Watch 7',
    brand: 'Samsung',
    category: 'smartwatch',
    ipRating: '5ATM + IP68 (50m depth rating, MIL-STD-810H)',
    compat: ['Galaxy Watch 7 (44mm & 40mm)', 'Galaxy Watch 6'],
  },
  {
    slug: 'eject-water-galaxy-watch-6',
    name: 'Samsung Galaxy Watch 6 & Classic',
    shortName: 'Galaxy Watch 6',
    brand: 'Samsung',
    category: 'smartwatch',
    ipRating: '5ATM + IP68 (50m water resistance)',
    compat: ['Galaxy Watch 6 Classic', 'Galaxy Watch 6', 'Galaxy Watch 5 Pro'],
  },

  // ==========================================
  // 9. GOOGLE PIXEL
  // ==========================================
  {
    slug: 'fix-pixel-9-pro-fold-speaker',
    name: 'Google Pixel 9 Pro Fold',
    shortName: 'Pixel 9 Pro Fold',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IPX8 (Submersible up to 1.5m for 30 min)',
    compat: ['Pixel 9 Pro Fold', 'Pixel Fold', 'Pixel 9 Pro XL'],
  },
  {
    slug: 'fix-pixel-9-pro-xl-speaker',
    name: 'Google Pixel 9 Pro XL',
    shortName: 'Pixel 9 Pro XL',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IP68 (Submersible up to 1.5m for 30 min)',
    compat: ['Pixel 9 Pro XL', 'Pixel 9 Pro', 'Pixel 9'],
  },
  {
    slug: 'fix-pixel-9-pro-speaker',
    name: 'Google Pixel 9 Pro',
    shortName: 'Pixel 9 Pro',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Pixel 9 Pro', 'Pixel 9 Pro XL', 'Pixel 9'],
  },
  {
    slug: 'fix-pixel-9-speaker',
    name: 'Google Pixel 9',
    shortName: 'Pixel 9',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Pixel 9', 'Pixel 9 Pro', 'Pixel 8'],
  },
  {
    slug: 'fix-pixel-8-pro-speaker',
    name: 'Google Pixel 8 Pro',
    shortName: 'Pixel 8 Pro',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IP68 (IEC 60529)',
    compat: ['Pixel 8 Pro', 'Pixel 8', 'Pixel 7 Pro'],
    customTips: [
      'If the Android notification "Liquid or debris in USB port - USB port disabled" appears, do not connect a USB-C charger. Allow the port to air-dry for at least 2 to 4 hours. You can safely use a Pixel Stand or Qi wireless charger if you need to recharge immediately.',
      'Never insert SIM ejector keys, paperclips, or compressed air into the microphone pinhole located on the bottom frame near the speaker slot; high pressure can tear the internal waterproof acoustic membrane.',
    ],
    customFaqs: [
      {
        q: 'What should I do if my Pixel 8 Pro falls into ocean water or a chlorinated pool?',
        a: 'Immediately power off the device. Salt brine and pool chlorine leave corrosive chemical residues that damage the acoustic mesh and matte glass finish. Gently rinse the speaker ports and USB-C socket under a slow, low-pressure trickle of fresh tap water for 10 seconds. Pat dry with a clean cloth, run the 165 Hz water eject tone for 2 to 3 cycles with speakers pointed downward, and let dry thoroughly before charging.',
      },
      {
        q: 'How does 165 Hz sound safely clear water from the Pixel 8 Pro speaker cavity?',
        a: 'The 165 Hz acoustic pulse generates rapid pressure waves that oscillate the speaker cone at its mechanical resonance frequency. This rhythmic displacement breaks the surface tension of water trapped in the acoustic mesh, atomizing droplets and pushing liquid outward through the exterior grille without stressing Google\'s audio amplifier or drivers.',
      },
      {
        q: 'What does the "Liquid or debris in USB port" notification mean on Pixel 8 Pro?',
        a: 'Pixel 8 Pro uses analog moisture detection across the USB-C connector pins. When liquid is present, Android disables power delivery and data transfer to protect against corrosion and short circuits. While 165 Hz ejects water from the separate speaker chamber, the USB-C port requires ambient air-drying. Stand the phone upright; you can continue using Qi or Pixel Stand wireless charging safely.',
      },
    ],
  },
  {
    slug: 'fix-pixel-8-speaker',
    name: 'Google Pixel 8',
    shortName: 'Pixel 8',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Pixel 8', 'Pixel 8 Pro', 'Pixel 8a'],
  },
  {
    slug: 'fix-pixel-8a-speaker',
    name: 'Google Pixel 8a',
    shortName: 'Pixel 8a',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IP67 (1m depth up to 30 min)',
    compat: ['Pixel 8a', 'Pixel 7a', 'Pixel 8'],
  },
  {
    slug: 'fix-pixel-7-pro-speaker',
    name: 'Google Pixel 7 Pro',
    shortName: 'Pixel 7 Pro',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Pixel 7 Pro', 'Pixel 7', 'Pixel 6 Pro'],
  },
  {
    slug: 'fix-pixel-7-speaker',
    name: 'Google Pixel 7',
    shortName: 'Pixel 7',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IP68 (IEC 60529)',
    compat: ['Pixel 7', 'Pixel 7 Pro', 'Pixel 7a'],
  },
  {
    slug: 'fix-pixel-7a-speaker',
    name: 'Google Pixel 7a',
    shortName: 'Pixel 7a',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IP67 (1m depth up to 30 min)',
    compat: ['Pixel 7a', 'Pixel 6a', 'Pixel 7'],
  },
  {
    slug: 'fix-pixel-6-pro-speaker',
    name: 'Google Pixel 6 Pro',
    shortName: 'Pixel 6 Pro',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Pixel 6 Pro', 'Pixel 6', 'Pixel 7 Pro'],
  },
  {
    slug: 'fix-pixel-6-speaker',
    name: 'Google Pixel 6',
    shortName: 'Pixel 6',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m up to 30 min)',
    compat: ['Pixel 6', 'Pixel 6 Pro', 'Pixel 6a'],
  },
  {
    slug: 'fix-pixel-6a-speaker',
    name: 'Google Pixel 6a',
    shortName: 'Pixel 6a',
    brand: 'Google',
    category: 'smartphone',
    ipRating: 'IP67 (1m depth up to 30 min)',
    compat: ['Pixel 6a', 'Pixel 7a', 'Pixel 6'],
  },
  {
    slug: 'clean-pixel-buds-pro-2-speaker',
    name: 'Google Pixel Buds Pro 2',
    shortName: 'Pixel Buds Pro 2',
    brand: 'Google',
    category: 'earbuds',
    ipRating: 'IP54 (Earbuds) / IPX4 (Case)',
    compat: ['Pixel Buds Pro 2', 'Pixel Buds Pro'],
  },
  {
    slug: 'clean-pixel-buds-pro-speaker',
    name: 'Google Pixel Buds Pro',
    shortName: 'Pixel Buds Pro',
    brand: 'Google',
    category: 'earbuds',
    ipRating: 'IPX4 (Sweat and water resistant)',
    compat: ['Pixel Buds Pro', 'Pixel Buds A-Series'],
  },
  {
    slug: 'eject-water-pixel-watch-3',
    name: 'Google Pixel Watch 3',
    shortName: 'Pixel Watch 3',
    brand: 'Google',
    category: 'smartwatch',
    ipRating: '5ATM / IP68 (50m water resistance rating)',
    compat: ['Pixel Watch 3 (45mm & 41mm)', 'Pixel Watch 2'],
  },
  {
    slug: 'eject-water-pixel-watch-2',
    name: 'Google Pixel Watch 2',
    shortName: 'Pixel Watch 2',
    brand: 'Google',
    category: 'smartwatch',
    ipRating: '5ATM / IP68 (50m water resistance)',
    compat: ['Pixel Watch 2', 'Pixel Watch 1st Gen'],
  },

  // ==========================================
  // 10. XIAOMI, REDMI & POCO
  // ==========================================
  {
    slug: 'fix-xiaomi-14-ultra-speaker',
    name: 'Xiaomi 14 Ultra',
    shortName: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m depth up to 30 min)',
    compat: ['Xiaomi 14 Ultra', 'Xiaomi 14 Pro', 'Xiaomi 14'],
  },
  {
    slug: 'fix-xiaomi-14-speaker',
    name: 'Xiaomi 14 & 14 Pro',
    shortName: 'Xiaomi 14',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m depth up to 30 min)',
    compat: ['Xiaomi 14', 'Xiaomi 14 Pro', 'Xiaomi 13'],
  },
  {
    slug: 'fix-xiaomi-13-ultra-speaker',
    name: 'Xiaomi 13 Ultra',
    shortName: 'Xiaomi 13 Ultra',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m depth up to 30 min)',
    compat: ['Xiaomi 13 Ultra', 'Xiaomi 13 Pro', 'Xiaomi 14 Ultra'],
  },
  {
    slug: 'fix-xiaomi-13-pro-speaker',
    name: 'Xiaomi 13 Pro',
    shortName: 'Xiaomi 13 Pro',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m depth up to 30 min)',
    compat: ['Xiaomi 13 Pro', 'Xiaomi 13', 'Xiaomi 12 Pro'],
  },
  {
    slug: 'fix-xiaomi-13t-pro-speaker',
    name: 'Xiaomi 13T & 13T Pro',
    shortName: 'Xiaomi 13T Pro',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m depth up to 30 min)',
    compat: ['Xiaomi 13T Pro', 'Xiaomi 13T', 'Xiaomi 14T Pro'],
  },
  {
    slug: 'fix-xiaomi-12-pro-speaker',
    name: 'Xiaomi 12 & 12 Pro',
    shortName: 'Xiaomi 12 Pro',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'Standard splash resistant acoustic chamber',
    compat: ['Xiaomi 12 Pro', 'Xiaomi 12', 'Xiaomi 12T Pro'],
  },
  {
    slug: 'fix-redmi-note-13-pro-plus-speaker',
    name: 'Redmi Note 13 Pro+',
    shortName: 'Redmi Note 13 Pro+',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP68 (1.5m depth up to 30 min)',
    compat: ['Redmi Note 13 Pro+', 'Redmi Note 13 Pro', 'Redmi Note 13'],
  },
  {
    slug: 'fix-redmi-note-13-pro-speaker',
    name: 'Redmi Note 13 Pro (5G & 4G)',
    shortName: 'Redmi Note 13 Pro',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP54 (Dust and splash resistance)',
    compat: ['Redmi Note 13 Pro 5G', 'Redmi Note 13 Pro 4G', 'Redmi Note 12 Pro'],
  },
  {
    slug: 'fix-redmi-note-13-speaker',
    name: 'Redmi Note 13 (5G & 4G)',
    shortName: 'Redmi Note 13',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP54 (Dust and splash resistance)',
    compat: ['Redmi Note 13 5G', 'Redmi Note 13 4G', 'Redmi Note 12'],
    customTips: [
      'Important IP54 water resistance notice: Redmi Note 13 is IP54 splash-resistant only — it is NOT waterproof and cannot survive immersion. Never submerge the device in water or hold it under a running faucet. Blot liquid off immediately with a dry cloth.',
      'Check for false headphone mode: if water enters the top 3.5mm headphone jack, it can short the internal detection contacts. The phone will display a headphone icon in the status bar and mute the external speakers. Tap the phone against your palm with the top edge facing down to dislodge trapped droplets.',
    ],
    customFaqs: [
      {
        q: 'Why does my Redmi Note 13 show a headphone icon and mute the speaker after getting wet?',
        a: 'The 3.5mm audio jack on the top frame has mechanical and electrical sensing leaves. When moisture enters the jack, liquid bridges the contacts and signals the audio chip that wired headphones are connected, muting external loudspeaker audio. Shake water out of the 3.5mm jack, gently absorb surface moisture with the tip of a paper towel, and let it air-dry.',
      },
      {
        q: 'Is the Redmi Note 13 waterproof enough to survive submersion?',
        a: 'No. The Redmi Note 13 carries an IP54 rating, which protects against light splashes, rain, and dust, but offers no seal against liquid pressure or submersion. If submerged, water can rapidly penetrate the speaker membranes, USB port, and SIM tray. Ejecting water with 165 Hz sound immediately after splash exposure is essential to prevent moisture from reaching internal board components.',
      },
    ],
  },
  {
    slug: 'fix-redmi-note-12-pro-speaker',
    name: 'Redmi Note 12 Pro & Pro+',
    shortName: 'Redmi Note 12 Pro',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP53 (Dust and splash protection)',
    compat: ['Redmi Note 12 Pro+', 'Redmi Note 12 Pro', 'Redmi Note 12'],
  },
  {
    slug: 'fix-redmi-note-12-speaker',
    name: 'Redmi Note 12',
    shortName: 'Redmi Note 12',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP53 (Dust and splash protection)',
    compat: ['Redmi Note 12 4G', 'Redmi Note 12 5G', 'Redmi 12'],
  },
  {
    slug: 'fix-redmi-13c-speaker',
    name: 'Redmi 13C & 12C',
    shortName: 'Redmi 13C',
    brand: 'Xiaomi',
    category: 'smartphone',
    // IP52 per Xiaomi: https://www.mi.com/global/product/redmi-13c/specs/
    ipRating: 'IP52 (Splash and dust resistance)',
    compat: ['Redmi 13C 5G', 'Redmi 13C 4G', 'Redmi 12C'],
  },
  {
    slug: 'fix-poco-f6-pro-speaker',
    name: 'Poco F6 Pro',
    shortName: 'Poco F6 Pro',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP54 (Dust and splash resistance)',
    compat: ['Poco F6 Pro', 'Poco F6', 'Poco F5 Pro'],
  },
  {
    slug: 'fix-poco-f6-speaker',
    name: 'Poco F6',
    shortName: 'Poco F6',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP64 (Dust-tight and water splash resistant)',
    compat: ['Poco F6', 'Poco F6 Pro', 'Poco F5'],
  },
  {
    slug: 'fix-poco-x6-pro-speaker',
    name: 'Poco X6 Pro',
    shortName: 'Poco X6 Pro',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP54 (Dust and splash resistance)',
    compat: ['Poco X6 Pro 5G', 'Poco X6 5G', 'Poco X5 Pro'],
  },
  {
    slug: 'fix-poco-x6-speaker',
    name: 'Poco X6',
    shortName: 'Poco X6',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP54 (Dust and splash resistance)',
    compat: ['Poco X6 5G', 'Poco X6 Pro 5G', 'Poco X5'],
  },
  {
    slug: 'fix-poco-m6-pro-speaker',
    name: 'Poco M6 Pro & M6 5G',
    shortName: 'Poco M6 Pro',
    brand: 'Xiaomi',
    category: 'smartphone',
    ipRating: 'IP54 (Dust and splash protection)',
    compat: ['Poco M6 Pro', 'Poco M6 5G', 'Poco M5'],
  },

  // ==========================================
  // 11. ONEPLUS
  // ==========================================
  {
    slug: 'fix-oneplus-13-speaker',
    name: 'OnePlus 13',
    shortName: 'OnePlus 13',
    brand: 'OnePlus',
    category: 'smartphone',
    ipRating: 'IP68 / IP69 (High-pressure water jet and submersion rating)',
    compat: ['OnePlus 13', 'OnePlus 12', 'OnePlus 13R'],
  },
  {
    slug: 'fix-oneplus-12-speaker',
    name: 'OnePlus 12',
    shortName: 'OnePlus 12',
    brand: 'OnePlus',
    category: 'smartphone',
    ipRating: 'IP65 (Water jet and dust protection with Aqua Touch)',
    compat: ['OnePlus 12', 'OnePlus 12R', 'OnePlus 11'],
  },
  {
    slug: 'fix-oneplus-12r-speaker',
    name: 'OnePlus 12R',
    shortName: 'OnePlus 12R',
    brand: 'OnePlus',
    category: 'smartphone',
    ipRating: 'IP64 (Dust-tight and splash resistant)',
    compat: ['OnePlus 12R', 'OnePlus 12', 'OnePlus 11R'],
  },
  {
    slug: 'fix-oneplus-11-speaker',
    name: 'OnePlus 11 5G',
    shortName: 'OnePlus 11',
    brand: 'OnePlus',
    category: 'smartphone',
    ipRating: 'IP64 (Dust and splash resistant)',
    compat: ['OnePlus 11 5G', 'OnePlus 11R', 'OnePlus 10 Pro'],
  },
  {
    slug: 'fix-oneplus-10-pro-speaker',
    name: 'OnePlus 10 Pro',
    shortName: 'OnePlus 10 Pro',
    brand: 'OnePlus',
    category: 'smartphone',
    ipRating: 'IP68 (Water resistant up to 1.5m for 30 min)',
    compat: ['OnePlus 10 Pro', 'OnePlus 10T', 'OnePlus 9 Pro'],
  },
  {
    slug: 'fix-oneplus-open-speaker',
    name: 'OnePlus Open',
    shortName: 'OnePlus Open',
    brand: 'OnePlus',
    category: 'smartphone',
    ipRating: 'IPX4 (Splash and sweat resistance)',
    compat: ['OnePlus Open', 'Oppo Find N3'],
  },
  {
    slug: 'fix-oneplus-nord-4-speaker',
    name: 'OnePlus Nord 4',
    shortName: 'OnePlus Nord 4',
    brand: 'OnePlus',
    category: 'smartphone',
    ipRating: 'IP65 (All-metal unibody with water jet protection)',
    compat: ['OnePlus Nord 4', 'OnePlus Nord 3', 'OnePlus Nord CE 4'],
  },
  {
    slug: 'fix-oneplus-nord-ce-4-speaker',
    name: 'OnePlus Nord CE 4 & CE 4 Lite',
    shortName: 'OnePlus Nord CE 4',
    brand: 'OnePlus',
    category: 'smartphone',
    ipRating: 'IP54 (Dust and splash resistance)',
    compat: ['OnePlus Nord CE 4', 'OnePlus Nord CE 4 Lite', 'OnePlus Nord CE 3'],
  },
  {
    slug: 'clean-oneplus-buds-pro-3-speaker',
    name: 'OnePlus Buds Pro 3 & Buds Pro 2',
    shortName: 'OnePlus Buds Pro 3',
    brand: 'OnePlus',
    category: 'earbuds',
    ipRating: 'IP55 (Dust and water resistant)',
    compat: ['OnePlus Buds Pro 3', 'OnePlus Buds Pro 2', 'OnePlus Buds 3'],
  },
  {
    slug: 'eject-water-oneplus-watch-2',
    name: 'OnePlus Watch 2 & Watch 2R',
    shortName: 'OnePlus Watch 2',
    brand: 'OnePlus',
    category: 'smartwatch',
    ipRating: '5ATM + IP68 / MIL-STD-810H (50m water resistance)',
    compat: ['OnePlus Watch 2', 'OnePlus Watch 2R'],
  },

  // ==========================================
  // 12. VIVO, OPPO & REALME
  // ==========================================
  {
    slug: 'fix-vivo-x100-pro-speaker',
    name: 'Vivo X100 Pro',
    shortName: 'Vivo X100 Pro',
    brand: 'Vivo',
    category: 'smartphone',
    ipRating: 'IP68 / IP69 (Submersible and high-pressure water jet resistance)',
    compat: ['Vivo X100 Pro', 'Vivo X100 Ultra', 'Vivo X100'],
  },
  {
    slug: 'fix-vivo-x100-ultra-speaker',
    name: 'Vivo X100 Ultra',
    shortName: 'Vivo X100 Ultra',
    brand: 'Vivo',
    category: 'smartphone',
    ipRating: 'IP68 / IP69 (1.5m depth up to 30 min)',
    compat: ['Vivo X100 Ultra', 'Vivo X100 Pro', 'Vivo X90 Pro+'],
  },
  {
    slug: 'fix-vivo-v30-pro-speaker',
    name: 'Vivo V30 Pro',
    shortName: 'Vivo V30 Pro',
    brand: 'Vivo',
    category: 'smartphone',
    ipRating: 'IP54 (Dust and splash resistance)',
    compat: ['Vivo V30 Pro', 'Vivo V30', 'Vivo V29 Pro'],
  },
  {
    slug: 'fix-vivo-v30-speaker',
    name: 'Vivo V30',
    shortName: 'Vivo V30',
    brand: 'Vivo',
    category: 'smartphone',
    ipRating: 'IP54 (Dust and splash resistance)',
    compat: ['Vivo V30', 'Vivo V30e', 'Vivo V30 Lite'],
  },
  {
    slug: 'fix-vivo-y200-speaker',
    name: 'Vivo Y200 & Y100',
    shortName: 'Vivo Y200',
    brand: 'Vivo',
    category: 'smartphone',
    ipRating: 'IP54 (Dust and splash resistance)',
    compat: ['Vivo Y200 5G', 'Vivo Y200e', 'Vivo Y100 5G'],
  },
  {
    slug: 'fix-oppo-find-x7-ultra-speaker',
    name: 'Oppo Find X7 Ultra',
    shortName: 'Oppo Find X7 Ultra',
    brand: 'Oppo',
    category: 'smartphone',
    ipRating: 'IP68 (Submersible up to 1.5m for 30 min)',
    compat: ['Oppo Find X7 Ultra', 'Oppo Find X7', 'Oppo Find X6 Pro'],
  },
  {
    slug: 'fix-oppo-find-x7-speaker',
    name: 'Oppo Find X7',
    shortName: 'Oppo Find X7',
    brand: 'Oppo',
    category: 'smartphone',
    ipRating: 'IP65 (Dust-tight and water jet protection)',
    compat: ['Oppo Find X7', 'Oppo Find X7 Ultra', 'Oppo Find X6'],
  },
  {
    slug: 'fix-oppo-find-n3-speaker',
    name: 'Oppo Find N3 & Find N3 Flip',
    shortName: 'Oppo Find N3',
    brand: 'Oppo',
    category: 'smartphone',
    ipRating: 'IPX4 (Splash resistant foldable)',
    compat: ['Oppo Find N3', 'Oppo Find N3 Flip', 'OnePlus Open'],
  },
  {
    slug: 'fix-oppo-reno-12-pro-speaker',
    name: 'Oppo Reno 12 Pro',
    shortName: 'Oppo Reno 12 Pro',
    brand: 'Oppo',
    category: 'smartphone',
    ipRating: 'IP65 (Dust and water jet resistant with Splash Touch)',
    compat: ['Oppo Reno 12 Pro', 'Oppo Reno 12', 'Oppo Reno 11 Pro'],
  },
  {
    slug: 'fix-oppo-reno-11-pro-speaker',
    name: 'Oppo Reno 11 Pro & Reno 11',
    shortName: 'Oppo Reno 11 Pro',
    brand: 'Oppo',
    category: 'smartphone',
    ipRating: 'Standard splash resistant acoustic grille',
    compat: ['Oppo Reno 11 Pro', 'Oppo Reno 11', 'Oppo Reno 10 Pro'],
  },
  {
    slug: 'fix-realme-gt-6-speaker',
    name: 'Realme GT 6',
    shortName: 'Realme GT 6',
    brand: 'Realme',
    category: 'smartphone',
    ipRating: 'IP65 (Dust-tight and water jet resistant)',
    compat: ['Realme GT 6', 'Realme GT 6T', 'Realme GT Neo 6'],
  },
  {
    slug: 'fix-realme-gt-neo-6-speaker',
    name: 'Realme GT Neo 6 & Neo 6 SE',
    shortName: 'Realme GT Neo 6',
    brand: 'Realme',
    category: 'smartphone',
    ipRating: 'IP65 (Dust and water jet resistant)',
    compat: ['Realme GT Neo 6', 'Realme GT Neo 6 SE', 'Realme GT 5'],
  },
  {
    slug: 'fix-realme-12-pro-plus-speaker',
    name: 'Realme 12 Pro+',
    shortName: 'Realme 12 Pro+',
    brand: 'Realme',
    category: 'smartphone',
    ipRating: 'IP65 (Dust and water jet protection)',
    compat: ['Realme 12 Pro+', 'Realme 12 Pro', 'Realme 11 Pro+'],
  },
  {
    slug: 'fix-realme-12-pro-speaker',
    name: 'Realme 12 Pro & 12 5G',
    shortName: 'Realme 12 Pro',
    brand: 'Realme',
    category: 'smartphone',
    ipRating: 'IP65 (Dust and water jet protection)',
    compat: ['Realme 12 Pro', 'Realme 12 5G', 'Realme 12+'],
  },
  {
    slug: 'fix-realme-c67-speaker',
    name: 'Realme C67 & C55',
    shortName: 'Realme C67',
    brand: 'Realme',
    category: 'smartphone',
    ipRating: 'IP54 (Dust and splash resistance)',
    compat: ['Realme C67 5G', 'Realme C67 4G', 'Realme C55'],
  },

  // ==========================================
  // 13. MOTOROLA
  // ==========================================
  {
    slug: 'fix-motorola-edge-50-ultra-speaker',
    name: 'Motorola Edge 50 Ultra',
    shortName: 'Moto Edge 50 Ultra',
    brand: 'Motorola',
    category: 'smartphone',
    ipRating: 'IP68',
    compat: ['Motorola Edge 50 Ultra', 'Motorola Edge 50 Pro', 'Motorola Edge 50 Fusion'],
    customTips: [
      'Fresh water vs. Pool & Ocean water: if exposed to ocean salt water or swimming pool chlorine, rinse the speaker grilles under a gentle trickle of fresh tap water to prevent corrosive mineral crystallization before running the 165 Hz water eject tone.',
    ],
    customFaqs: [
      {
        q: 'Is 165 Hz water ejection safe for Motorola Dolby Atmos acoustic chambers?',
        a: 'Yes. The 165 Hz frequency tone produces mechanical air displacement that targets the acoustic cavity\'s resonant frequency without exceeding the safe excursion limits of Motorola\'s high-output stereo drivers. It safely breaks surface tension on the acoustic mesh to eject water without distorting Dolby Atmos calibration.',
      },
    ],
  },
  {
    slug: 'fix-motorola-edge-50-pro-speaker',
    name: 'Motorola Edge 50 Pro',
    shortName: 'Moto Edge 50 Pro',
    brand: 'Motorola',
    category: 'smartphone',
    ipRating: 'IP68 (Submersible up to 1.5m for 30 min)',
    compat: ['Motorola Edge 50 Pro', 'Motorola Edge 50 Fusion', 'Motorola Edge 40 Pro'],
  },
  {
    slug: 'fix-motorola-edge-50-fusion-speaker',
    name: 'Motorola Edge 50 Fusion',
    shortName: 'Moto Edge 50 Fusion',
    brand: 'Motorola',
    category: 'smartphone',
    ipRating: 'IP68 (Submersible up to 1.5m for 30 min)',
    compat: ['Motorola Edge 50 Fusion', 'Motorola Edge 50 Pro', 'Motorola Edge 40 Neo'],
  },
  {
    slug: 'fix-motorola-razr-50-ultra-speaker',
    name: 'Motorola Razr 50 Ultra (Razr+ 2024)',
    shortName: 'Moto Razr 50 Ultra',
    brand: 'Motorola',
    category: 'smartphone',
    ipRating: 'IPX8 (Submersible foldable water protection up to 1.5m)',
    compat: ['Motorola Razr 50 Ultra', 'Motorola Razr 50', 'Motorola Razr 40 Ultra'],
  },
  {
    slug: 'fix-moto-g84-speaker',
    name: 'Motorola Moto G84 & G54',
    shortName: 'Moto G84',
    brand: 'Motorola',
    category: 'smartphone',
    ipRating: 'Water-repellent',
    compat: ['Moto G84 5G', 'Moto G54 5G', 'Moto G34 5G'],
    customTips: [
      'Check the 3.5mm audio jack: the top edge features an analog 3.5mm headphone jack. Moisture inside this socket can short headphone detection pins, causing the phone to switch to "headphone mode" and mute the stereo speakers. Gently tap the phone against your palm with the top edge down to expel droplets.',
    ],
    customFaqs: [
      {
        q: 'What should I do if water gets into the Moto G84 3.5mm headphone jack?',
        a: 'Moisture in the 3.5mm headphone jack can short the detection circuit, causing the phone to think headphones are plugged in and muting the loudspeakers. Turn the phone upside down, tap it gently against your hand to shake out loose droplets, and allow it to air-dry. Do not insert cotton swabs or metal pins into the jack.',
      },
      {
        q: 'How does 165 Hz sound clear muffled audio on the Moto G84?',
        a: 'When water covers the fine acoustic mesh of the Moto G84 speakers, surface tension traps a liquid membrane that blocks high and mid frequencies. The 165 Hz resonant wave induces physical vibrations in the speaker diaphragm, creating air pressure pulses that shatter the surface tension and blow water droplets out through the grille holes.',
      },
    ],
  },
];

// -------------------------------------------------------------
// Core Hub Pages (Preserved for backwards compatibility & cluster indexing)
// -------------------------------------------------------------
const coreHubs: Record<string, DeviceData> = {
  'fix-iphone-speaker': {
    slug: 'fix-iphone-speaker',
    name: 'Apple iPhone (All Models)',
    shortName: 'iPhone',
    brand: 'Apple',
    category: 'hub',
    metaTitle: 'Fix iPhone Speaker: Water Eject Sound & Muffled Audio Fix',
    metaDescription:
      'Help eject water from iPhone 17, 16, 15, 14, 13 & 12 speakers. A 165 Hz water eject tone clears muffled audio, bottom speaker ports, and earpiece grilles in 60s.',
    eyebrow: 'Apple iPhone Water Eject & Diagnostics',
    heroHeading: 'Fix iPhone Speaker & Eject Trapped Water',
    heroSubtitle:
      'Play the specialized 165 Hz acoustic pulse to clear muffled iPhone audio, expel water from bottom speaker grilles, and test stereo balance without installing apps.',
    badge: '165 Hz iPhone Water Eject',
    ipRating: 'IP68 (IEC 60529 — maximum depth of 6m up to 30 min on iPhone 12–17)',
    grilleSpecs: 'Laser-machined bottom speaker holes + top earpiece receiver micro-mesh',
    acousticFreq: '165 Hz low-frequency resonant square wave + 82.5 Hz sub-bass',
    recommendedDuration: '60–120 seconds (1–2 cycles)',
    compatibilityList: [
      'iPhone 17 / 17 Pro / 17 Pro Max / iPhone Air',
      'iPhone 16 / 16 Plus / 16 Pro / 16 Pro Max',
      'iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max',
      'iPhone 14 / 14 Plus / 14 Pro / 14 Pro Max',
      'iPhone 13 / 13 mini / 13 Pro / 13 Pro Max',
      'iPhone 12 / 12 mini / 12 Pro / 12 Pro Max',
      'iPhone 11, XR, XS, X, SE Series',
    ],
    overview: [
      'Modern iPhones feature IP68 water resistance, but water surface tension frequently traps microscopic droplets inside the bottom speaker grilles and top earpiece receiver mesh. This creates a muffled, distorted, or extremely quiet audio output even after drying the outer chassis.',
      'Unlike the Apple Watch, iOS does not provide a native built-in water eject button in the Control Center. Fix The Speaker plays a low 165 Hz tone directly in Safari or Chrome so the speaker’s own vibration can help push trapped droplets out of the grille.',
    ],
    steps: [
      {
        name: 'Disconnect Accessories & Cables',
        text: 'Unplug any Lightning or USB-C charging cables and disconnect Bluetooth headphones or AirPods so audio plays through the iPhone built-in speakers.',
      },
      {
        name: 'Set Master Volume to 100%',
        text: 'Turn your iPhone media volume to maximum using the side volume buttons to achieve peak diaphragm displacement and air velocity.',
      },
      {
        name: 'Orient iPhone Vertically Facing Down',
        text: 'Hold your iPhone upright with the bottom speaker and charging port facing downward over a clean, dry microfiber cloth or paper towel.',
      },
      {
        name: 'Start the 165 Hz Water Eject Cycle',
        text: 'Tap the Start Ejection button and let the pulsing 165 Hz sound run for the full 60-second cycle. Gently shake the device downward as water droplets emerge.',
      },
      {
        name: 'Wipe Exterior & Test Stereo Balance',
        text: 'Wipe away expelled water with a lint-free cloth, then switch to the Speaker Test mode to verify crisp left and right channel audio.',
      },
    ],
    technicalTips: [
      'Never insert cotton swabs, toothpicks, or metal pins into the iPhone speaker holes, as this will puncture the acoustic water-resistant gasket membrane.',
      'Do not use high-pressure compressed air cans or blow dryers on hot settings; heat degrades the waterproof adhesive seal.',
      'If your iPhone displays a "Liquid Detected in Lightning/USB-C Connector" alert, allow the port to air dry completely before connecting any charging cable.',
    ],
    faqs: [
      {
        q: 'Does iPhone have a built-in water eject feature like Apple Watch?',
        a: 'No. While Apple Watch has a built-in Water Lock ejection sound in watchOS, iOS does not include a native button in Control Center. Fix The Speaker provides a similar 165 Hz acoustic pulse directly in your browser without requiring Siri Shortcuts or app store downloads.',
      },
      {
        q: 'Is it OK to play this tone at full volume on an iPhone?',
        a: 'It is an ordinary audio tone played at the volume you set, like music. Keep the phone away from your ears, stop if you hear rattling or distortion, and do not run it on a speaker that was already damaged.',
      },
      {
        q: 'Why does my iPhone earpiece speaker sound quiet after getting wet?',
        a: 'The top earpiece speaker has a very fine protective mesh where surface tension easily traps water droplets. Run the 165 Hz Water Eject mode while tilting the top edge of your iPhone downward to clear the earpiece grille.',
      },
      {
        q: 'How many cycles should I run on an iPhone?',
        a: 'For light water splashes or rain, one 60-second cycle is usually sufficient. For deeper exposure or muffled sound, run 2 to 3 consecutive cycles while wiping away expelled droplets.',
      },
    ],
    relatedSlugs: ['fix-iphone-16-pro-speaker', 'fix-iphone-15-pro-speaker', 'clean-airpods-speaker', 'fix-apple-watch-speaker'],
  },

  'eject-water-samsung-galaxy': {
    slug: 'eject-water-samsung-galaxy',
    name: 'Samsung Galaxy (All Models)',
    shortName: 'Samsung Galaxy',
    brand: 'Samsung',
    category: 'hub',
    metaTitle: 'Water Eject Samsung: Free Instant Tool, All Galaxy Phones',
    metaDescription:
      'Free water eject sound for every Samsung Galaxy phone: S, Z Fold, Z Flip, A series. Starts instantly in your browser, no app. Helps clear muffled audio.',
    eyebrow: 'Samsung Galaxy Acoustic Water Eject',
    heroHeading: 'Eject Water from Samsung Galaxy Speakers',
    heroSubtitle:
      'Clear muffled stereo sound on Samsung Galaxy S, Z, and A-series devices. The 165 Hz tone can help push trapped moisture out of the speaker ports.',
    badge: 'Samsung Galaxy Water Eject',
    ipRating: 'IP68 (Galaxy S-Series) / IP48/IPX8 (Galaxy Z Fold & Flip Series)',
    grilleSpecs: 'Bottom acoustic slot / circular micro-ports + top stereo receiver slit',
    acousticFreq: '165 Hz tuned square wave with harmonic acoustic resonance',
    recommendedDuration: '60–120 seconds',
    compatibilityList: [
      'Samsung Galaxy S25 / S25+ / S25 Ultra',
      'Samsung Galaxy S24 / S24+ / S24 Ultra / S24 FE',
      'Samsung Galaxy S23 / S23+ / S23 Ultra / S23 FE',
      'Samsung Galaxy S22, S21, S20 Series',
      'Samsung Galaxy Z Fold 6, Z Fold 5, Z Flip 6, Z Flip 5',
      'Samsung Galaxy A55, A54, A35, A34, A15 Series',
    ],
    overview: [
      'Samsung Galaxy devices feature advanced stereo speaker systems tuned by AKG with Dolby Atmos support. When exposed to water during workouts, rain, or swimming, moisture creates a barrier across the bottom speaker acoustic chamber and upper bezel slit, muffling sound and dulling high frequencies.',
      'Fix The Speaker uses acoustic resonance to drive high air pressure through Samsung speaker channels, breaking surface tension and forcing trapped moisture out of the bottom port and earpiece.',
    ],
    steps: [
      {
        name: 'Disconnect Charger & Galaxy Buds',
        text: 'Remove the USB-C cable and disconnect Galaxy Buds or Bluetooth audio devices so the sound outputs through the built-in stereo speakers.',
      },
      {
        name: 'Max Out Media Volume',
        text: 'Use the volume rocker to raise Media Volume to 100%.',
      },
      {
        name: 'Position the Phone Facing Downward',
        text: 'Hold your Galaxy phone vertically with the bottom USB-C and speaker grille pointed toward a dry cloth or paper towel.',
      },
      {
        name: 'Trigger the 165 Hz Water Ejection Sound',
        text: 'Tap Start Ejection. Allow the full 60-second tone to play while giving the phone gentle downward taps against your palm.',
      },
      {
        name: 'Dry Exterior and Test Both Channels',
        text: 'Wipe all moisture off the phone frame, then run the Speaker Test mode to confirm clear stereo separation from both the top and bottom drivers.',
      },
    ],
    technicalTips: [
      'If One UI displays a "Moisture detected in your charger/USB port" notification, do not charge the phone via cable until the icon disappears; use wireless charging if urgent.',
      'Galaxy Z Fold and Z Flip foldables have unique hinge clearances; avoid running high pressure water along the hinge line.',
      'Never use rubbing alcohol inside the speaker grille as it can dissolve internal acoustic adhesives and water seals.',
    ],
    faqs: [
      {
        q: 'Why does my Samsung Galaxy sound quiet and distorted after water exposure?',
        a: 'Water droplets get trapped across the protective mesh behind the bottom speaker slot and the narrow top ear speaker slit. The surface tension dampens membrane vibrations until an acoustic ejection sound forces the droplets out.',
      },
      {
        q: 'Does this work on both Galaxy S Ultra and Galaxy A series phones?',
        a: 'It runs on any Galaxy phone with a current browser such as Samsung Internet, Chrome or Firefox. Results depend on how much water is trapped and where, so some phones need a second cycle and time to air dry.',
      },
      {
        q: 'What should I do if Samsung displays a moisture alert?',
        a: 'The moisture warning protects the USB-C port from short-circuiting. Run the water eject tone with the phone facing downward to clear the speaker, dry the port with a tissue corner, and let it rest in a well-ventilated room.',
      },
      {
        q: 'Can I use this on Galaxy Z Fold or Z Flip?',
        a: 'Yes, unfold the device fully and run the 165 Hz tone while orienting the primary speaker edge downward.',
      },
    ],
    relatedSlugs: ['eject-water-samsung-galaxy-s24-ultra', 'fix-samsung-galaxy-z-fold-6-speaker', 'fix-android-speaker', 'fix-iphone-speaker'],
  },

  'clean-airpods-speaker': {
    slug: 'clean-airpods-speaker',
    name: 'Apple AirPods & AirPods Pro (All Generations)',
    shortName: 'AirPods',
    brand: 'Apple',
    category: 'hub',
    metaTitle: 'Clean AirPods Speaker Mesh: Water Eject & Earwax Sound Cleaner',
    metaDescription:
      'Eject water and clear earwax from AirPods Pro and AirPods 2, 3 & 4 speaker mesh. 165 Hz tone and high-frequency sweep restore muffled earbud sound in 60s.',
    eyebrow: 'AirPods Speaker Cleaning & Water Eject',
    heroHeading: 'Clean AirPods Speaker Mesh & Eject Water',
    heroSubtitle:
      'Restore clear, loud sound to muffled AirPods and AirPods Pro. Eject sweat, water, and dislodge earwax from acoustic mesh grilles using tuned sound frequencies.',
    badge: 'AirPods Mesh Cleaner & Water Eject',
    ipRating: 'IP54 / IPX4 (AirPods 3/4 & AirPods Pro 1/2 sweat and water resistance)',
    grilleSpecs: 'High-density stainless steel acoustic mesh and black acoustic side vents',
    acousticFreq: '165 Hz water pulse + 2.5 kHz–14.5 kHz harmonic dust/wax sweep',
    recommendedDuration: '60 seconds per mode',
    compatibilityList: [
      'AirPods Pro 2 (USB-C & Lightning)',
      'AirPods Pro (1st Generation)',
      'AirPods 4 (Active Noise Cancellation & Standard)',
      'AirPods 3 (3rd Generation)',
      'AirPods 2 & 1 (Original Generation)',
      'AirPods Max (Over-Ear)',
    ],
    overview: [
      'AirPods and AirPods Pro frequently suffer from muffled volume, quiet output on one side, or weak bass response due to sweat, water droplets, or earwax build-up blocking the fine black acoustic mesh grilles.',
      'By placing your AirPods outside of your ears and routing audio through them, Fix The Speaker uses low-frequency diaphragm pulses to expel moisture and high-frequency harmonic sweeps to dislodge compacted wax particles.',
    ],
    steps: [
      {
        name: 'CRITICAL: Remove AirPods from Your Ears',
        text: 'Always take both AirPods out of your ears before starting. High-volume frequency sweeps can cause hearing discomfort if worn in the ear canal.',
      },
      {
        name: 'Remove Silicone Ear Tips (AirPods Pro)',
        text: 'Pull off the silicone ear tips to expose the primary black acoustic speaker mesh directly.',
      },
      {
        name: 'Point the Speaker Mesh Downward on a Tissue',
        text: 'Place both AirPods with their main acoustic openings facing down on a clean dry tissue or microfiber cloth.',
      },
      {
        name: 'Set Volume to Maximum & Run Water Eject',
        text: 'Ensure audio is playing through the connected AirPods, turn volume to 100%, and run the 60-second Water Eject mode.',
      },
      {
        name: 'Run Dust Cleaner & Gently Brush Mesh',
        text: 'Switch to Dust Cleaner mode to vibrate loose dried earwax, then gently brush the mesh with a clean, dry, soft-bristled toothbrush.',
      },
    ],
    technicalTips: [
      'NEVER submerge AirPods in water or rinse them under running taps; only the outer chassis of certain models is water-resistant, not waterproof.',
      'Do not use sharp metal objects (like needles or safety pins) to scrape the mesh, as this will puncture the delicate transducer driver inside.',
      'Ensure the AirPods charging case is completely dry before placing cleaned AirPods back inside.',
    ],
    faqs: [
      {
        q: 'Why is one of my AirPods significantly quieter than the other?',
        a: 'Uneven volume is almost always caused by microscopic earwax or sweat clogging the acoustic mesh on the quiet side. Gently brushing the mesh with a dry soft brush, together with the Dust Cleaner mode, often helps. If one side stays quiet, Apple Support can check it.',
      },
      {
        q: 'Is it safe to play high volume tones through AirPods?',
        a: 'Only with the AirPods out of your ears. Never play the tones while wearing them. Rest them on a flat surface with the speaker mesh facing down, and stop if you hear distortion.',
      },
      {
        q: 'What should I do if my AirPods fell in water or the washing machine?',
        a: 'Dry the outside immediately, remove silicone tips, orient the main speaker ports downward on a towel, and run 2–3 cycles of the 165 Hz Water Eject tone. Let them dry in a ventilated area for 12 hours before charging.',
      },
      {
        q: 'Can this remove earwax from AirPods mesh?',
        a: 'It can help a little. The Dust Cleaner tone vibrates the mesh, which may loosen light debris, but dried wax mainly comes off with a dry soft brush. Never use liquids or sharp objects on the mesh.',
      },
    ],
    relatedSlugs: ['clean-airpods-pro-2-speaker', 'clean-airpods-4-speaker', 'fix-iphone-speaker', 'fix-apple-watch-speaker'],
  },

  'fix-apple-watch-speaker': {
    slug: 'fix-apple-watch-speaker',
    name: 'Apple Watch (All Series, SE & Ultra)',
    shortName: 'Apple Watch',
    brand: 'Apple',
    category: 'hub',
    metaTitle: 'Fix Apple Watch Speaker: Clear Water with Water Lock',
    metaDescription:
      'How to clear water from an Apple Watch speaker with the built-in Water Lock, what to do when it still sounds muffled, and how to clear your iPhone speaker too.',
    eyebrow: 'Apple Watch Water Lock Guide',
    heroHeading: 'Fix Apple Watch Speaker & Clear Trapped Water',
    heroSubtitle:
      'Your Apple Watch clears its own speaker with Water Lock. This page explains how to use it, what to try when sound stays muffled, and lets you clear water from the iPhone or other phone you are browsing on.',
    badge: 'Apple Watch Water Lock',
    ipRating: 'WR50 (50m water resistance) / Ultra: WR100 (100m, EN13319)',
    grilleSpecs: 'Side speaker slots + microphone ports',
    acousticFreq: 'Use the watch’s built-in Water Lock; this site’s tone plays on the device you open it on',
    recommendedDuration: 'One Water Lock cycle; repeat if still muffled',
    compatibilityList: [
      'Apple Watch Ultra 2 & Ultra (49mm)',
      'Apple Watch Series 10, Series 9, Series 8',
      'Apple Watch Series 7, Series 6, Series 5, Series 4',
      'Apple Watch SE (1st & 2nd Generation)',
    ],
    overview: [
      'Apple Watch is built for swimming, but after you leave the water, droplets can sit in the side speaker slots and make alarms, calls and Siri sound faint or muffled.',
      'A web page cannot play sound through the Apple Watch speaker, so the tone on this page will not clear the watch itself. The watch has its own tool for that: Water Lock, which plays a sound from the watch speaker to push water out. Use Water Lock for the watch, and use the tool above if the iPhone you were carrying also got wet.',
    ],
    steps: [
      {
        name: 'Turn On Water Lock Before Water Activities',
        text: 'Open Control Center on the watch and tap the water drop icon. Water Lock stops accidental taps while the screen is wet.',
      },
      {
        name: 'Turn Off Water Lock to Eject Water',
        text: 'When you are out of the water, turn off Water Lock as your watch model prompts you (turning or pressing the Digital Crown). The watch plays a sound through its speaker to push water out.',
      },
      {
        name: 'Hold the Speaker Side Down',
        text: 'Keep the speaker slots on the left side of the case facing down over a dry towel while the sound plays, so droplets fall away.',
      },
      {
        name: 'Repeat If Sound Is Still Muffled',
        text: 'If alarms or calls still sound quiet, turn Water Lock on and off again, then let the watch air dry at room temperature.',
      },
      {
        name: 'Clear Your iPhone Speaker Too',
        text: 'If your iPhone also got wet, open this page on the iPhone and run the Water Eject tool above with the bottom speaker facing down.',
      },
    ],
    technicalTips: [
      'After salt water or chlorinated pool water, rinse the watch under fresh running tap water and dry it with a lint-free cloth, as Apple recommends.',
      'Never insert paperclips or pins into the microphone hole or speaker slot; you can damage the internal mesh.',
      'Do not use heat, such as a hair dryer, to dry the watch.',
    ],
    faqs: [
      {
        q: 'Can this website play the water eject sound through my Apple Watch?',
        a: 'No. Web pages cannot route sound to the Apple Watch speaker, and the watch is not a Bluetooth speaker for your phone. To clear water from the watch, use its built-in Water Lock, which plays the ejection sound from the watch itself.',
      },
      {
        q: 'Why does my Apple Watch sound muffled after swimming?',
        a: 'Water can stay in the speaker slots and on the internal mesh, which dampens the sound. Running Water Lock again and letting the watch air dry usually brings the volume back. If it stays muffled for more than a day, contact Apple Support.',
      },
      {
        q: 'Can I use Water Lock after swimming in the ocean?',
        a: 'Yes. Rinse the watch under fresh tap water first to remove salt, dry it with a lint-free cloth, then use Water Lock to clear the rinse water from the speaker.',
      },
      {
        q: 'What does the tool on this page do, then?',
        a: 'It plays a low tone through the speaker of the phone, tablet or computer you open it on. That helps when the iPhone or Android phone you were carrying also got wet.',
      },
    ],
    relatedSlugs: ['eject-water-apple-watch-ultra-2', 'eject-water-apple-watch-series-10', 'fix-iphone-speaker', 'clean-airpods-speaker'],
  },

  'fix-android-speaker': {
    slug: 'fix-android-speaker',
    name: 'Universal Android Phones',
    shortName: 'Android',
    brand: 'Universal',
    category: 'hub',
    metaTitle: 'Fix Android Speaker: Free Instant Water Eject Sound, No App',
    metaDescription:
      'Free water eject sound for any Android phone: Pixel, Samsung, Xiaomi, OnePlus, Motorola. Instant, in your browser, no app. Helps clear muffled audio.',
    eyebrow: 'Universal Android Speaker Cleaner & Water Eject',
    heroHeading: 'Fix Android Phone Speaker & Eject Water',
    heroSubtitle:
      'Clear muffled audio, eject trapped water, and clean dust from Google Pixel, Xiaomi, OnePlus, Moto, and all Android smartphone speakers using 165 Hz acoustic sound.',
    badge: 'Universal Android Water Eject',
    ipRating: 'IP68 / IP67 / IP54 (Varies by Android manufacturer)',
    grilleSpecs: 'Bottom USB-C acoustic speaker ports + top stereo earpiece speaker',
    acousticFreq: '165 Hz square wave resonance + 2.5 kHz–14.5 kHz turbo dust sweep',
    recommendedDuration: '60–120 seconds',
    compatibilityList: [
      'Google Pixel 9, 8, 7, 6 Series',
      'Samsung Galaxy S25, S24, S23, Z Series',
      'Xiaomi 14, 13, Redmi Note & POCO Series',
      'OnePlus 13, 12, 11, Nord Series',
      'Vivo, Oppo, Realme, Motorola Series',
    ],
    overview: [
      'Android smartphones utilize stereo speaker configurations where the bottom firing port provides bass and the earpiece provides treble. When water enters these ports, surface tension blocks acoustic sound waves, causing muffled, buzzing, or cracking sound.',
      'Fix The Speaker synthesizes a high-amplitude 165 Hz square wave in your Android browser to displace air rapidly through the speaker channels, expelling trapped moisture and restoring full audio clarity.',
    ],
    steps: [
      {
        name: 'Unplug USB-C Cable & Disconnect Headphones',
        text: 'Disconnect any wired or Bluetooth audio devices so playback routes through the Android phone built-in speaker system.',
      },
      {
        name: 'Increase Media Volume to 100%',
        text: 'Press the Volume Up button and ensure Media Volume (not Call or Notification volume) is set to maximum.',
      },
      {
        name: 'Hold Android Device Speaker-Down',
        text: 'Hold the phone vertically with the bottom speaker grille pointing downward over a clean towel or tissue.',
      },
      {
        name: 'Play the 165 Hz Water Eject Frequency',
        text: 'Tap Start Ejection to begin the 60-second acoustic pulse. Gently tap the phone frame against your palm to help droplets escape.',
      },
      {
        name: 'Run Dust Cleaner & Perform Stereo Test',
        text: 'Switch to Dust Cleaner mode to loosen any dried residue, then run the Speaker Test to verify balanced left and right channel output.',
      },
    ],
    technicalTips: [
      'If your Android device displays a "Liquid or debris in USB port" system notification, do not charge via cable until the port is completely dry.',
      'Avoid using hair dryers or heat guns; high temperatures melt the internal adhesive gaskets that provide water resistance.',
      'Never poke needles, SIM ejector tools, or toothpicks into the speaker holes as this can tear the waterproof acoustic mesh membrane.',
    ],
    faqs: [
      {
        q: 'Does this water eject sound work on all Android phone brands?',
        a: 'The tool runs in any current mobile browser (Chrome, Samsung Internet, Firefox, Brave, Opera), so it plays on Pixel, Xiaomi, OnePlus, Motorola, Sony, Oppo, Vivo, Realme and other Android phones. How well it clears water depends on the phone and how much water got in.',
      },
      {
        q: 'Why does my Android speaker sound crackly after getting wet?',
        a: 'Crackling occurs when water droplets sit directly on the moving speaker diaphragm. As the diaphragm vibrates, it hits the trapped liquid. Playing the 165 Hz tone with the speaker facing down can shake those droplets loose; if crackling continues after the phone has dried, the speaker may be damaged.',
      },
      {
        q: 'How long should I play the sound to eject water from an Android phone?',
        a: 'Run one 60-second cycle. If sound is still slightly muffled, wipe the grille with a microfiber cloth and run a second cycle.',
      },
      {
        q: 'Can this fix a blown or torn speaker on Android?',
        a: 'No. The tool expels water and cleans dust. If the speaker cone itself is physically torn from dropping the device or extreme electrical overload, it must be replaced by a repair technician.',
      },
    ],
    relatedSlugs: ['eject-water-samsung-galaxy', 'fix-pixel-9-pro-speaker', 'fix-xiaomi-14-speaker', 'fix-oneplus-12-speaker'],
  },
};

// -------------------------------------------------------------
// Build the Master Dictionary
// -------------------------------------------------------------
const allBuiltDevices: Record<string, DeviceData> = { ...coreHubs };

for (const raw of rawCatalog) {
  allBuiltDevices[raw.slug] = buildDeviceData(raw);
}

// Automatically link related devices if none were explicitly set
for (const slug of Object.keys(allBuiltDevices)) {
  const item = allBuiltDevices[slug];
  if (!item.relatedSlugs || item.relatedSlugs.length === 0) {
    // Pick other devices from the same brand or category
    const brandPeers = Object.values(allBuiltDevices)
      .filter((d) => d.slug !== slug && (d.brand === item.brand || d.category === item.category))
      .slice(0, 4)
      .map((d) => d.slug);

    item.relatedSlugs = brandPeers.length > 0 ? brandPeers : ['fix-iphone-speaker', 'eject-water-samsung-galaxy', 'clean-airpods-speaker', 'fix-android-speaker'];
  }
}

export const devices: Record<string, DeviceData> = allBuiltDevices;
export const deviceList: DeviceData[] = Object.values(devices);
