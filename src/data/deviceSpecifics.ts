import type { DeviceFAQ } from './devices';
import type { SupportedLang } from '../i18n/ui';

// Device-specific section for the pages in src/data/indexable-devices.ts.
// Every fact here comes from the manufacturer pages listed in `sources` (checked October 2026).
// If a fact (for example the exact grille position) is not on an official page, it is left out.

export interface DeviceSpecificSource {
  label: string;
  url: string;
}

export interface DeviceModelLink {
  name: string;
  url: string;
  description: string;
}

export interface DeviceSpecificContent {
  speakers?: string;
  speakersTitle?: string;
  ipRating?: string;
  ipRatingTitle?: string;
  manufacturerGuidance?: string;
  manufacturerGuidanceTitle?: string;
  steps?: string[];
  stepsTitle?: string;
  serviceGuidance?: string;
  serviceGuidanceTitle?: string;
  faq?: DeviceFAQ;
  sources: DeviceSpecificSource[];
  // Hub specific
  hubGuidanceTitle?: string;
  hubGuidance?: string;
  pickYourModelTitle?: string;
  pickYourModel?: DeviceModelLink[];
}

export const deviceSpecificLabels: Partial<
  Record<SupportedLang, { eyebrow: string; speakers: string; ipRating: string; steps: string; sources: string }>
> = {
  en: {
    eyebrow: 'Model-specific notes',
    speakers: 'Where the speakers are',
    ipRating: 'Water rating',
    steps: 'Steps for this model',
    sources: 'Sources',
  },
  es: {
    eyebrow: 'Notas específicas del modelo',
    speakers: 'Dónde están los altavoces',
    ipRating: 'Resistencia al agua',
    steps: 'Pasos para este modelo',
    sources: 'Fuentes',
  },
  it: {
    eyebrow: 'Note specifiche del modello',
    speakers: 'Dove sono gli altoparlanti',
    ipRating: 'Resistenza all’acqua',
    steps: 'Passaggi per questo modello',
    sources: 'Fonti',
  },
};

// -------------------------------------------------------------
// Official sources
// -------------------------------------------------------------
const SRC = {
  iphone17ProMaxSpecs: { label: 'Apple: iPhone 17 Pro Max tech specs', url: 'https://support.apple.com/en-us/125091' },
  iphone17Specs: { label: 'Apple: iPhone 17 tech specs', url: 'https://support.apple.com/en-us/125089' },
  appleWater: { label: 'Apple: splash, water, and dust resistance of iPhone', url: 'https://support.apple.com/en-us/108039' },
  appleLiquidAlert: { label: 'Apple: if you see a liquid-detection alert', url: 'https://support.apple.com/en-us/102643' },
  pixelSpecs: { label: 'Google: Pixel phone hardware tech specs', url: 'https://support.google.com/pixelphone/answer/7158570' },
  pixelDiagram: { label: 'Google: Pixel phone hardware diagram', url: 'https://support.google.com/pixelphone/answer/7157629' },
  pixelWater: { label: 'Google: help prevent water damage to your Pixel', url: 'https://support.google.com/pixelphone/answer/7533279' },
  budsSpecs: { label: 'Google Store: Pixel Buds Pro 2 tech specs', url: 'https://store.google.com/product/pixel_buds_pro_2_specs' },
  budsClean: { label: 'Google: clean your Google Pixel Buds', url: 'https://support.google.com/googlepixelbuds/answer/9112670' },
  samsungIp: { label: 'Samsung: Galaxy dust and water resistance (IP rating)', url: 'https://www.samsung.com/us/support/answer/ANS10001610/' },
  samsungMoisture: {
    label: 'Samsung: water drop icon and device will not charge',
    url: 'https://www.samsung.com/uk/support/mobile-devices/my-device-displays-a-water-drop-icon-and-will-not-charge/',
  },
  s25Specs: {
    label: 'Samsung: Galaxy S25 series specifications',
    url: 'https://www.samsung.com/hk_en/news/product/Samsung-Galaxy-S25-Series-Revolutionizing-Mobile-AI-Standard/',
  },
  s24Specs: {
    label: 'Samsung: Galaxy S24 series specifications',
    url: 'https://www.samsung.com/hk_en/news/product/samsung-galaxy-s24-series-introducing-a-new-era-of-mobile-ai-with-the-groundbreaking-implementation-of-galaxy-ai/',
  },
  s22UltraSpecs: {
    label: 'Samsung Newsroom: Galaxy S22 Ultra specifications',
    url: 'https://news.samsung.com/uk/samsung-galaxy-s22-ultra-offers-the-ultimate-and-most-premium-s-series-experience-yet',
  },
  fold6Specs: {
    label: 'Samsung Newsroom: Galaxy Z Fold6 specifications',
    url: 'https://news.samsung.com/global/samsung-galaxy-z-fold-6-and-z-flip-6-elevate-galaxy-ai-to-new-heights',
  },
  edge50UltraSpecs: {
    label: 'Motorola: motorola edge 50 ultra specifications',
    url: 'https://en-us.support.motorola.com/app/answers/detail/a_id/187312',
  },
  edge50UltraPage: {
    label: 'Motorola: motorola edge 50 ultra product page',
    url: 'https://www.motorola.com/gb/en/p/phones/motorola-edge/50-ultra/pmipmgn36m2',
  },
  g84Page: { label: 'Motorola: moto g84 5G product page', url: 'https://www.motorola.com/au/en/p/phones/moto-g/84-5g/pmipmgf35mx' },
  redmi13cFaq: { label: 'Xiaomi: REDMI 13C FAQ', url: 'https://www.mi.com/global/support/faq/details/KA-47262/' },
  redmi13c5gFaq: { label: 'Xiaomi: REDMI 13C 5G FAQ', url: 'https://www.mi.com/global/support/faq/details/KA-142672/' },
  redmi13cSpecs: { label: 'Xiaomi: Redmi 13C specs', url: 'https://www.mi.com/global/product/redmi-13c/specs/' },
  redmiNote13Specs: { label: 'Xiaomi: Redmi Note 13 specs', url: 'https://www.mi.com/global/product/redmi-note-13/specs/' },
  redmiNote135gSpecs: { label: 'Xiaomi: Redmi Note 13 5G specs', url: 'https://www.mi.com/global/product/redmi-note-13-5g/specs/' },
  realme12ProPlus: { label: 'realme: realme 12 Pro+ 5G', url: 'https://www.realme.com/global/realme-12-pro-plus' },
  realme12ProPlusSpecs: {
    label: 'realme: realme 12 Pro+ 5G specifications',
    url: 'https://www.realme.com/ph/realme-12-pro-plus-official/specs',
  },
  samsungService: {
    label: 'Samsung: repair services and support',
    url: 'https://www.samsung.com/us/support/service/',
  },
  pixelRepair: {
    label: 'Google: get your Pixel phone repaired',
    url: 'https://support.google.com/pixelphone/answer/9004345',
  },
  budsSupport: {
    label: 'Google: Pixel Buds Help and support',
    url: 'https://support.google.com/googlepixelbuds/',
  },
  xiaomiSupport: {
    label: 'Xiaomi: customer support and service centers',
    url: 'https://www.mi.com/global/support/',
  },
  appleWatchWaterLock: {
    label: 'Apple: how to use Water Lock and eject water from Apple Watch',
    url: 'https://support.apple.com/en-us/108352',
  },
  appleWatchWater: {
    label: 'Apple: about Apple Watch water resistance',
    url: 'https://support.apple.com/en-us/109522',
  },
  appleWatchRepair: {
    label: 'Apple: Apple Watch service and repair',
    url: 'https://support.apple.com/watch/repair',
  },
  iphone16ProMaxSpecs: {
    label: 'Apple: iPhone 16 Pro Max tech specs',
    url: 'https://support.apple.com/en-us/121033',
  },
  appleRepair: {
    label: 'Apple: iPhone repair and service',
    url: 'https://support.apple.com/iphone/repair',
  },
} satisfies Record<string, DeviceSpecificSource>;

// -------------------------------------------------------------
// Content per device slug and language
// -------------------------------------------------------------
export const deviceSpecifics: Record<string, Partial<Record<SupportedLang, DeviceSpecificContent>>> = {
  'eject-water-samsung-galaxy': {
    en: {
      hubGuidanceTitle: 'Official Samsung moisture warning and water guidance',
      hubGuidance:
        'Samsung Galaxy smartphones incorporate a protective moisture detection system in One UI. When the sensor detects liquid or high humidity inside the USB charging port or acoustic channels, the system displays a persistent water drop icon and blocks wired cable charging to prevent electrical short-circuits and galvanic pin corrosion (<a href="https://www.samsung.com/uk/support/mobile-devices/my-device-displays-a-water-drop-icon-and-will-not-charge/" target="_blank" rel="noopener">Samsung Support</a>).<br /><br />' +
        'According to Samsung’s official water response steps, you should immediately disconnect any charging cable. Hold your Galaxy phone vertically and gently shake it 5 to 10 times with the USB-C port and bottom speaker opening pointed downward over a dry towel to dislodge standing water droplets. If the device came into contact with liquids other than fresh water—such as chlorinated pool water, seawater, or sugary beverages—Samsung directs users to rinse the phone gently in calm, fresh tap water and immediately dry all surfaces with a clean, soft cloth (<a href="https://www.samsung.com/us/support/answer/ANS10001610/" target="_blank" rel="noopener">Samsung IP Guidance</a>). Never insert cotton swabs, toothpicks, or paper towels into speaker grilles, and never use heat guns or hair dryers.<br /><br />' +
        'If urgent battery power is required while the USB port dries, Samsung confirms that Qi wireless charging can be safely used once the back of the phone is wiped dry. If the water drop alert persists after 24 hours of complete drying, Samsung recommends clearing the USB system cache: navigate to Settings &gt; Apps, tap the Filter and sort icon, enable "Show system apps", select USB Settings &gt; Storage, and tap "Clear cache".',
      pickYourModelTitle: 'Pick your model',
      pickYourModel: [
        {
          name: 'Galaxy S25',
          url: '/eject-water-samsung-galaxy-s25',
          description: 'Official IP68 rating, stereo speaker layout, USB moisture reset, and step-by-step ejection guide.',
        },
        {
          name: 'Galaxy S24 Ultra',
          url: '/eject-water-samsung-galaxy-s24-ultra',
          description: 'Dual speaker modules, IP68 rated titanium chassis and S Pen, and water ejection protocol.',
        },
        {
          name: 'Galaxy S22 Ultra',
          url: '/eject-water-samsung-galaxy-s22-ultra',
          description: 'Stereo acoustic grilles, IP68 water resistance specs, and salt water rinse instructions.',
        },
        {
          name: 'Galaxy Z Fold6',
          url: '/fix-samsung-galaxy-z-fold-6-speaker',
          description: 'IP48 foldable ingress rating, dual speaker acoustic array, and hinge care guidance.',
        },
      ],
      serviceGuidanceTitle: 'When to get it checked',
      serviceGuidance:
        'If your Samsung Galaxy speaker continues to produce raspy, distorted, or quiet audio after 24 hours of drying, or if the moisture warning remains stuck on screen despite clearing the USB cache, internal liquid may have reached the acoustic transducer. Schedule a professional hardware assessment with an authorized technician at an official <a href="https://www.samsung.com/us/support/service/" target="_blank" rel="noopener">Samsung Service Center</a>.',
      sources: [SRC.samsungMoisture, SRC.samsungIp, SRC.samsungService],
    },
  },

  'fix-android-speaker': {
    en: {
      hubGuidanceTitle: 'Official Android platform water and moisture guidance',
      hubGuidance:
        'Android smartphone manufacturers (including Google, Samsung, Xiaomi, and Motorola) engineer acoustic channels with hydrophobic micro-mesh barriers to protect internal speaker transducers from moisture. When water or sweat penetrates these grilles, surface tension traps droplets across the mesh, dampening sound waves and causing muffled, crackly audio (<a href="https://support.google.com/pixelphone/answer/7533279" target="_blank" rel="noopener">Google Pixel Help</a>). Many modern Android devices also feature port-impedance sensors that trigger a "Liquid or debris in USB port" or "Moisture detected" system notification to disable wired charging until the connector dries.<br /><br />' +
        'The consensus manufacturer recovery procedure across Android platforms consists of three fundamental rules: first, immediately disconnect all charging cables, USB-C adapters, and wired headphones to eliminate electrical current from damp contacts. Second, if the phone was exposed to liquids other than fresh water (such as salt water, pool water, or coffee), rinse the affected exterior gently with clean fresh water and pat thoroughly dry with a soft, lint-free microfiber cloth (<a href="https://www.samsung.com/us/support/answer/ANS10001610/" target="_blank" rel="noopener">Samsung IP Guidance</a>). Third, hold the phone vertically with speaker grilles and charging ports facing downward, tapping the frame gently against your palm to shake loose trapped droplets.<br /><br />' +
        'Official support documentation from Google and Samsung explicitly warns against using hair dryers, compressed air cans, or ovens, which melt waterproof acoustic adhesive seals. They also warn against placing phones in uncooked rice, as rice starch particles enter open grilles and solidify when mixed with moisture. Once exterior moisture is wiped clean, playing a low-frequency 165 Hz acoustic wave forces air displacement through the grilles to dislodge remaining water droplets.',
      pickYourModelTitle: 'Pick your model',
      pickYourModel: [
        {
          name: 'Google Pixel 8 Pro',
          url: '/fix-pixel-8-pro-speaker',
          description: 'Dual stereo speakers, IP68 factory compliance rating, and top bezel seam drying steps.',
        },
        {
          name: 'Google Pixel 7',
          url: '/fix-pixel-7-speaker',
          description: 'Top earpiece and bottom stereo speaker layout, IP68 rating, and microphone distinction.',
        },
        {
          name: 'Google Pixel Buds Pro 2',
          url: '/clean-pixel-buds-pro-2-speaker',
          description: '11 mm drivers, IP54 earbuds / IPX4 case, snout mesh cleaning, and drying guidance.',
        },
        {
          name: 'Samsung Galaxy S25',
          url: '/eject-water-samsung-galaxy-s25',
          description: 'IP68 water resistance rating, One UI moisture warning steps, and stereo ejection.',
        },
        {
          name: 'Samsung Galaxy S24 Ultra',
          url: '/eject-water-samsung-galaxy-s24-ultra',
          description: 'Dual speaker modules, IP68 titanium chassis, S Pen care, and USB cache reset.',
        },
        {
          name: 'Samsung Galaxy S22 Ultra',
          url: '/eject-water-samsung-galaxy-s22-ultra',
          description: 'Stereo acoustic grilles, IP68 fresh water rating, and post-water recovery steps.',
        },
        {
          name: 'Samsung Galaxy Z Fold6',
          url: '/fix-samsung-galaxy-z-fold-6-speaker',
          description: 'IP48 foldable protection, dual speaker perimeter array, and hinge drying advice.',
        },
        {
          name: 'Xiaomi Redmi Note 13',
          url: '/fix-redmi-note-13-speaker',
          description: 'Dual stereo speakers, Dolby Atmos certification, and IP54 splash resistance guide.',
        },
        {
          name: 'Xiaomi Redmi 13C',
          url: '/fix-redmi-13c-speaker',
          description: 'Single bottom loudspeaker, 3.5 mm audio jack precautions, and IP52 splash rating.',
        },
        {
          name: 'Motorola Edge 50 Ultra',
          url: '/fix-motorola-edge-50-ultra-speaker',
          description: 'Dual stereo speakers, Dolby Atmos, and official IP68 immersion specifications.',
        },
        {
          name: 'Motorola Moto G84 5G',
          url: '/fix-moto-g84-speaker',
          description: 'Stereo speaker channels, Dolby Atmos, and water-repellent design parameters.',
        },
        {
          name: 'Realme 12 Pro+ 5G',
          url: '/fix-realme-12-pro-plus-speaker',
          description: 'Hi-Res dual stereo speakers, IP65 dust and splash protection, and drying protocol.',
        },
      ],
      serviceGuidanceTitle: 'When to get it checked',
      serviceGuidance:
        'If an Android phone speaker continues to crackle, hiss, or output low volume 24 to 48 hours after drying, liquid may have corroded the voice coil or breached the diaphragm seal. Stop repeating sound pulses and contact the device manufacturer’s authorized repair provider (for example, <a href="https://support.google.com/pixelphone/answer/9004345" target="_blank" rel="noopener">Google Pixel Repair</a> or <a href="https://www.samsung.com/us/support/service/" target="_blank" rel="noopener">Samsung Service</a>).',
      sources: [SRC.pixelWater, SRC.pixelSpecs, SRC.samsungMoisture, SRC.pixelRepair],
    },
  },
  'fix-motorola-edge-50-ultra-speaker': {
    en: {
      speakers:
        'Motorola lists dual stereo speakers with Dolby Atmos for the edge 50 ultra. There is no 3.5 mm headphone jack: audio goes through the USB Type-C port, so the speaker openings and the USB-C port are the places water can sit. Motorola does not publish a grille diagram, so we do not guess exact positions.',
      ipRating:
        'The edge 50 ultra is rated IP68. Motorola says it withstands immersion in up to 1.5 metres of fresh water for up to 30 minutes, is not designed to work while submerged, and should not be exposed to pressurised water or to liquids other than fresh water. Resistance decreases with normal wear.',
      steps: [
        'Do not charge it while it is wet. Motorola’s own note says not to attempt to charge a wet phone, and that includes the TurboPower wireless stand.',
        'Because both speakers play in stereo, run the water eject tone first, then use the Speaker Test to play the left and right channels one at a time and listen for the side that still sounds muffled.',
        'If it got salt water, pool water or a drink on it, that is outside what the IP68 rating covers. Dry it, run the tone, and if the sound stays dull, contact Motorola support rather than repeating cycles.',
      ],
      faq: {
        q: 'Can I use the motorola edge 50 ultra underwater since it is IP68?',
        a: 'No. Motorola states that the edge 50 ultra is tested to withstand immersion in up to 1.5 metres of fresh water for up to 30 minutes, but it is not designed to work while submerged, should not be exposed to pressurised water, and is not waterproof. Damage from conditions beyond the rating is not covered by the warranty.',
      },
      sources: [SRC.edge50UltraSpecs, SRC.edge50UltraPage],
    },
    es: {
      speakers:
        'Motorola indica que el edge 50 ultra tiene altavoces estéreo duales con Dolby Atmos. No tiene conector de auriculares de 3,5 mm: el audio sale por el puerto USB Type-C, así que el agua puede quedarse en las aberturas de los altavoces y en el puerto USB-C. Motorola no publica un esquema de las rejillas, por eso no indicamos posiciones exactas.',
      ipRating:
        'El edge 50 ultra tiene certificación IP68. Según Motorola, resiste la inmersión en hasta 1,5 metros de agua dulce durante un máximo de 30 minutos, no está diseñado para funcionar sumergido y no debe exponerse a agua a presión ni a líquidos que no sean agua dulce. La resistencia disminuye con el uso normal.',
      steps: [
        'No lo cargues mientras esté mojado. La propia nota de Motorola dice que no se debe intentar cargar un teléfono mojado, y eso incluye la base inalámbrica TurboPower.',
        'Como los dos altavoces funcionan en estéreo, reproduce primero el tono de expulsión de agua y después usa la Prueba de Altavoz para escuchar el canal izquierdo y el derecho por separado e identificar el que sigue sonando apagado.',
        'Si le cayó agua salada, agua de piscina o alguna bebida, eso queda fuera de lo que cubre la certificación IP68. Sécalo, reproduce el tono y, si el sonido sigue apagado, contacta con el soporte de Motorola en lugar de repetir ciclos.',
      ],
      faq: {
        q: '¿Puedo usar el motorola edge 50 ultra bajo el agua si es IP68?',
        a: 'No. Motorola indica que el edge 50 ultra está probado para resistir la inmersión en hasta 1,5 metros de agua dulce durante un máximo de 30 minutos, pero no está diseñado para funcionar sumergido, no debe exponerse a agua a presión y no es impermeable. Los daños por condiciones que superen la certificación no están cubiertos por la garantía.',
      },
      sources: [SRC.edge50UltraSpecs, SRC.edge50UltraPage],
    },
  },

  'eject-water-samsung-galaxy-s25': {
    en: {
      speakers:
        'Samsung’s official Galaxy S25 specifications confirm dual stereo speakers. Audio output is divided between an external bottom-firing speaker port positioned adjacent to the USB Type-C connector, and a top stereo earpiece receiver integrated into the narrow micro-slit along the upper bezel seam above the front camera. Samsung’s official water resistance documentation identifies the external speaker port, the top earpiece, and the primary microphone hole at the bottom frame as primary apertures where trapped moisture dampens acoustic volume.',
      ipRating:
        'The Galaxy S25 carries an official IP68 rating under IEC standard 60529 (<a href="https://www.samsung.com/hk_en/news/product/Samsung-Galaxy-S25-Series-Revolutionizing-Mobile-AI-Standard/" target="_blank" rel="noopener">Samsung Galaxy S25 Series Specifications</a>). This rating provides IP6X dust tight certification and IPX8 water resistance tested in up to 1.5 metres of fresh water for up to 30 minutes. Samsung’s official support documentation states that water and dust resistance is not permanent and diminishes with regular daily usage (<a href="https://www.samsung.com/us/support/answer/ANS10001610/" target="_blank" rel="noopener">Samsung Galaxy Dust & Water Resistance Guide</a>). Samsung also emphasizes that the phone is not designed for beach or pool use and that liquid ingress is not covered by the standard warranty.',
      manufacturerGuidance:
        'Samsung’s official moisture handling guidelines instruct users to unplug charging cables immediately if moisture enters the device. When liquid is detected in the charging port or grilles, One UI triggers a persistent water drop notification and suspends cable charging to protect internal electrical circuits. Samsung advises holding the phone vertically and shaking it gently 5 to 10 times with the USB-C port facing downwards to dislodge water droplets, followed by wiping with a clean, dry, lint-free cloth (<a href="https://www.samsung.com/uk/support/mobile-devices/my-device-displays-a-water-drop-icon-and-will-not-charge/" target="_blank" rel="noopener">Samsung Water Drop Warning Help</a>). Allow the phone to air-dry in a well-ventilated room with cool airflow. If exposed to salt water or chlorinated liquids, rinse gently in fresh water and dry thoroughly before running acoustic ejection.',
      steps: [
        'Disconnect any USB-C cables; if the moisture detected water drop icon is visible, keep cable charging disconnected and wipe the phone dry with a soft cloth.',
        'Hold the Galaxy S25 with the bottom speaker port and USB connector pointed downward, tapping the lower frame lightly against your palm 5 to 10 times.',
        'Raise media volume to 100% and run the 165 Hz Water Eject tone for 60 seconds while holding the phone downward over a clean towel.',
        'Flip the phone so the top display bezel earpiece points downward, running a second pulse to force trapped droplets out of the upper acoustic receiver.',
        'Open the Speaker Test diagnostic and play each channel separately to verify that both the bottom speaker and upper receiver sound clean and balanced.',
      ],
      serviceGuidance:
        'If your Galaxy S25 speaker continues to produce distorted, buzzy, or low sound after 24 hours of drying, or if the water drop alert does not clear after clearing the USB Settings cache in system apps, take the phone to an authorized technician at a <a href="https://www.samsung.com/us/support/service/" target="_blank" rel="noopener">Samsung Support Service Center</a>.',
      faq: {
        q: 'Can I charge my Galaxy S25 while the moisture warning is showing?',
        a: 'Not with a cable. When moisture is detected inside the USB-C port, Samsung software halts cable charging to avoid short circuits and port corrosion. Samsung notes that Qi wireless charging can be used safely once the back panel is wiped completely dry.',
      },
      sources: [SRC.s25Specs, SRC.samsungIp, SRC.samsungMoisture, SRC.samsungService],
    },
  },

  'clean-pixel-buds-pro-2-speaker': {
    en: {
      speakers:
        'According to Google’s official technical specifications, each Pixel Buds Pro 2 earbud houses a custom-designed 11 mm dynamic speaker driver (<a href="https://store.google.com/product/pixel_buds_pro_2_specs" target="_blank" rel="noopener">Google Store Pixel Buds Pro 2 Tech Specs</a>). Google’s official cleaning guide specifies three distinct acoustic mesh surfaces on each earbud where liquids, sweat, and earwax accumulate: the snout acoustic mesh located directly underneath the removable silicone ear tip, the rear acoustic vent mesh that balances chamber air pressure, and the exterior microphone grilles. Furthermore, the charging case incorporates its own dedicated speaker on the bottom casing for Find My Device audio chimes.',
      ipRating:
        'The Pixel Buds Pro 2 earbuds carry an official IP54 ingress protection rating, while the charging case carries an IPX4 splash resistance rating under IEC standard 60529 (<a href="https://store.google.com/product/pixel_buds_pro_2_specs" target="_blank" rel="noopener">Google Pixel Buds Pro 2 Specifications</a>). This rating certifies that the earbuds resist dust deposits and splashing water from any angle (such as sweat during workouts or light rain), while the case resists water splashes. Google is clear that neither the earbuds nor the charging case are waterproof, and neither should ever be submerged in water or held under running taps. Resistance decreases over time from regular wear.',
      manufacturerGuidance:
        'Google’s official maintenance guide instructs users to remove the earbuds and charging case from moisture immediately and wipe all exterior surfaces with a clean, soft, dry lint-free cloth (<a href="https://support.google.com/googlepixelbuds/answer/9112670" target="_blank" rel="noopener">Google Pixel Buds Cleaning Guide</a>). To clean trapped earwax or moisture from the snout mesh, Google recommends removing the silicone ear tips and using an extra-soft toothbrush lightly dampened with clean water or micellar water, brushing the mesh gently in small circles for 15 seconds. Blot dry on a paper towel and let the earbuds air dry at room temperature for up to 2 hours before placing them back in the charging case. Never place wet earbuds into the charging case, as moisture on the gold contact pins causes terminal corrosion.',
      steps: [
        'Remove both earbuds from your ears and detach the silicone ear tips so the front snout acoustic mesh is completely open to the air.',
        'Keep the charging case closed and dry; never place damp earbuds inside the charging case to prevent short-circuiting charging contacts.',
        'With the earbuds paired via Bluetooth, hold each bud with the snout mesh facing downward over a towel and run the 165 Hz tone at high volume to eject liquid droplets.',
        'Switch to the Dust Cleaner sweep to loosen any dried wax particles or mineral deposits from the snout and rear vent meshes.',
        'Let the earbuds air dry on a clean towel at room temperature for 1 to 2 hours before reattaching the ear tips and returning them to the case.',
      ],
      serviceGuidance:
        'If a Pixel Buds Pro 2 earbud remains muffled, exhibits continuous static, or produces screeching feedback in Active Noise Cancellation mode after thorough drying, contact official <a href="https://support.google.com/googlepixelbuds/" target="_blank" rel="noopener">Google Pixel Buds Support</a> for hardware diagnostic and replacement options.',
      faq: {
        q: 'Can I rinse Pixel Buds Pro 2 under the tap since they are IP54?',
        a: 'No. IP54 on the earbuds and IPX4 on the case protect against sweat and accidental splashes, not running or pressurized water. Google warns against submerging the earbuds or placing them under a faucet. To clean the mesh safely, use a slightly damp extra-soft toothbrush, blot with a towel, and let air dry for up to 2 hours.',
      },
      sources: [SRC.budsSpecs, SRC.budsClean, SRC.budsSupport],
    },
  },

  'fix-redmi-13c-speaker': {
    en: {
      speakers:
        'Xiaomi confirms that the Redmi 13C has a speaker and a 3.5 mm headphone jack. Unlike the Redmi Note 13, its spec sheet does not list dual speakers. Xiaomi does not publish a grille diagram, so we do not name exact positions; water can also sit in the headphone jack and the USB Type-C port.',
      ipRating:
        'Xiaomi lists the Redmi 13C, and the Redmi 13C 5G, as IP52 for splash and dust resistance. That is a light-splash rating, not protection against submersion. Xiaomi notes that this protection degrades with daily wear, that liquid damage is not covered by the warranty, and says not to charge the phone while it is wet.',
      steps: [
        'Do not charge it until it is dry. Xiaomi’s guidance for the Redmi 13C 5G says not to charge the phone while it is wet.',
        'Disconnect wired headphones and leave the 3.5 mm jack empty so the tone plays through the phone speaker, not the headphones.',
        'IP52 is a low rating. If the phone was dropped in water rather than splashed, turn it off and let it dry fully first; if it stays silent or crackles after drying, contact Xiaomi service rather than running repeated cycles.',
      ],
      faq: {
        q: 'Is the Redmi 13C waterproof?',
        a: 'No. Xiaomi rates the Redmi 13C and Redmi 13C 5G at IP52, which is splash and dust resistance. Xiaomi says the protection degrades with daily wear and that damage from liquids is not covered by the warranty, so keep it away from submersion and do not charge it while it is wet.',
      },
      sources: [SRC.redmi13cFaq, SRC.redmi13c5gFaq, SRC.redmi13cSpecs],
    },
  },

  'eject-water-samsung-galaxy-s24-ultra': {
    en: {
      speakers:
        'Samsung’s official S24 Ultra hardware specifications specify dual stereo speaker modules. The primary bottom-firing speaker is located on the bottom frame directly between the USB Type-C port and the integrated S Pen silo. The upper stereo speaker functions as the earpiece receiver and is recessed into the micro-slit at the junction of the display glass and the titanium frame. Samsung’s official water resistance documentation explicitly identifies the external speaker opening, the top earpiece, and the primary microphone hole beside the USB-C port as key acoustic apertures where surface tension can hold moisture.',
      ipRating:
        'The Galaxy S24 Ultra is rated IP68 under IEC standard 60529 (<a href="https://www.samsung.com/hk_en/news/product/samsung-galaxy-s24-series-introducing-a-new-era-of-mobile-ai-with-the-groundbreaking-implementation-of-galaxy-ai/" target="_blank" rel="noopener">Samsung S24 Series Specifications</a>). This rating denotes IP6X dust tight certification and IPX8 water resistance, tested by Samsung in up to 1.5 metres of fresh water for up to 30 minutes. Samsung’s official support documentation confirms that the built-in S Pen stylus is also individually IP68 certified, and the phone maintains its complete IP68 water seal even when the S Pen is unseated or removed (<a href="https://www.samsung.com/us/support/answer/ANS10001610/" target="_blank" rel="noopener">Samsung IP Rating Guide</a>). Samsung notes that water resistance is not permanent and diminishes over time through normal wear; damage caused by liquid exposure is excluded from Samsung’s standard warranty.',
      manufacturerGuidance:
        'According to Samsung’s official liquid recovery procedure, when a Galaxy device is exposed to fresh water, users must dry the exterior thoroughly with a clean, soft cloth. If the device comes into contact with chlorinated pool water, seawater, or acidic beverages, Samsung instructs users to rinse the phone gently in fresh water and pat dry immediately, preventing corrosive mineral salts from crystallizing inside the acoustic grilles. If One UI displays a "Moisture detected in your charger/USB port" water drop warning, Samsung directs users to unplug all charging cables immediately and gently tap the phone against their hand 5 to 10 times with the USB-C port and bottom speaker facing downward (<a href="https://www.samsung.com/uk/support/mobile-devices/my-device-displays-a-water-drop-icon-and-will-not-charge/" target="_blank" rel="noopener">Samsung Moisture Warning Support</a>). Do not insert cotton swabs or paper into grilles, and avoid using heat guns or hair dryers.',
      steps: [
        'Remove the S Pen from its bottom silo and shake both the stylus and the phone gently 5 to 10 times with the bottom edge facing down over a clean microfiber towel.',
        'Wipe all exterior moisture off the titanium frame, display, and top earpiece micro-slit with a soft lint-free cloth, leaving any charging cables unplugged.',
        'Hold the phone vertically with the bottom speaker grille angled downward, set media volume to 100%, and run the 165 Hz Water Eject tone for the full 60 seconds.',
        'Invert the phone so the top bezel earpiece points downward and play a second cycle to purge trapped water droplets from the upper stereo channel.',
        'Switch to the Speaker Test diagnostic to play the left and right audio channels independently and verify that stereo sound output is crisp and undistorted.',
      ],
      serviceGuidance:
        'If the speaker remains muffled, crackly, or faint after 24 hours of drying at room temperature, or if the moisture detected warning refuses to clear after clearing the USB Settings system cache, schedule an inspection with an authorized technician at an official <a href="https://www.samsung.com/us/support/service/" target="_blank" rel="noopener">Samsung Service Center</a>.',
      faq: {
        q: 'Does the Galaxy S24 Ultra lose its water resistance if the S Pen is removed?',
        a: 'No. Samsung confirms that the S Pen does not need to be inserted for the phone to maintain its IP68 rating, and the S Pen itself is individually rated IP68. You can safely remove the pen to allow both the silo and stylus to air dry while running the water eject tone.',
      },
      sources: [SRC.s24Specs, SRC.samsungIp, SRC.samsungMoisture, SRC.samsungService],
    },
  },

  'fix-pixel-8-pro-speaker': {
    en: {
      speakers:
        'Google’s official Pixel 8 Pro hardware diagram labels two dedicated acoustic speakers: a top speaker situated directly in the hairline seam between the front display glass and the aluminum frame above the front-facing camera, and a bottom speaker located on the bottom edge to the right of the USB Type-C port (<a href="https://support.google.com/pixelphone/answer/7157629" target="_blank" rel="noopener">Google Pixel Hardware Diagram</a>). Google’s schematic also identifies bottom and top microphone openings and explicitly labels the mmWave antenna cover along the top edge, confirming that the antenna window is not an acoustic opening and should not be probed.',
      ipRating:
        'The Pixel 8 Pro is designed to comply with an IP68 dust and water protection rating under IEC standard 60529 when it leaves the factory (<a href="https://support.google.com/pixelphone/answer/7158570" target="_blank" rel="noopener">Google Pixel Tech Specs</a>). Google explicitly clarifies that the device is not waterproof. Water and dust resistance is not a permanent condition and diminishes over time as a consequence of normal wear and tear, phone repairs, disassembly, or drops. Liquid damage voids Google’s manufacturer warranty.',
      manufacturerGuidance:
        'Google’s official water damage prevention documentation outlines precise emergency steps when a Pixel phone gets wet: lift the phone out of the liquid immediately, power it off completely, wipe the exterior dry with a clean, soft cloth, and let it rest horizontally on a flat surface to finish air-drying at room temperature (<a href="https://support.google.com/pixelphone/answer/7533279" target="_blank" rel="noopener">Google Pixel Water Care Guide</a>). Google strictly warns against inserting foreign objects like paper towels, toothpicks, or cotton swabs into the USB-C port or speaker grilles, warns against using ovens, microwave ovens, or hair dryers, and advises against burying the phone in rice. Google also reminds users that chargers, cables, and accessories are not water resistant.',
      steps: [
        'Disconnect all charging cables and accessories; power off the Pixel 8 Pro and wipe the Gorilla Glass Victus 2 display and polished frame with a soft microfiber cloth.',
        'Hold the device vertically with the bottom speaker grille and USB-C port facing downward, tapping the frame gently against your palm over a dry cloth to dislodge standing water.',
        'Power on the phone once exterior surfaces are dry, set media volume to 100%, and run the 165 Hz Water Eject tone for 60 seconds with the bottom edge facing down.',
        'Invert the phone so the top frame points downward and run a second cycle to expel droplets trapped behind the top earpiece receiver seam.',
        'Switch to the Speaker Test diagnostic to listen to the top and bottom drivers separately and ensure balanced, distortion-free stereo reproduction.',
      ],
      serviceGuidance:
        'If your Pixel 8 Pro speaker remains muffled, crackly, or silent after 24 hours of drying at room temperature, internal water may have damaged the acoustic driver or voice coil. Arrange an inspection with an authorized technician through <a href="https://support.google.com/pixelphone/answer/9004345" target="_blank" rel="noopener">Google Pixel Repair &amp; Service</a>.',
      faq: {
        q: 'Is the slot on top of the Pixel 8 Pro frame a speaker?',
        a: 'Google’s Pixel 8 Pro hardware diagram labels a top speaker in the screen bezel seam and a separate mmWave antenna cover on the top frame. The antenna cover is not an acoustic opening and has no speaker behind it. The two speakers are the top earpiece receiver and the bottom loudspeaker.',
      },
      sources: [SRC.pixelDiagram, SRC.pixelSpecs, SRC.pixelWater, SRC.pixelRepair],
    },
  },

  'fix-iphone-17-pro-max-speaker': {
    en: {
      speakers:
        'Apple’s tech specs list a built-in stereo speaker for iPhone 17 Pro Max. Apple does not publish a grille diagram, so we do not name exact positions. Apple’s own check for a muffled speaker is to lay the iPhone speaker side down on a lint-free cloth and see whether water drips out; water in the port can degrade the sound until it evaporates.',
      ipRating:
        'iPhone 17 Pro Max is rated IP68 under IEC 60529, tested to a maximum depth of 6 metres for up to 30 minutes. Apple still advises against swimming or bathing with it, pressurised water such as showers, and saunas, and notes that resistance can decrease with normal wear.',
      steps: [
        'Tap the iPhone gently against your hand with the USB-C connector facing down, then leave it in a dry area with some airflow. A fan blowing cool air into the connector can help.',
        'If a liquid other than water, such as coffee or juice, splashed on it, Apple says to rinse the affected area with tap water and wipe it with a soft, lint-free cloth.',
        'Unplug every cable. Apple advises waiting at least 5 hours before charging with a USB-C cable; once the back is wiped dry, a wireless charger is fine.',
      ],
      faq: {
        q: 'How long should I wait before charging iPhone 17 Pro Max after it got wet?',
        a: 'Apple says to unplug all cables and not charge until the iPhone is completely dry, allowing at least 5 hours before charging with a USB-C cable or connecting an accessory. Wireless charging is fine once the iPhone is wiped dry. Do not use a heat source or push a cotton swab or paper towel into the connector.',
      },
      sources: [SRC.iphone17ProMaxSpecs, SRC.appleWater, SRC.appleLiquidAlert],
    },
    es: {
      speakers:
        'Las especificaciones de Apple indican que el iPhone 17 Pro Max tiene altavoz estéreo integrado. Apple no publica un esquema de las rejillas, así que no indicamos posiciones exactas. La comprobación que propone Apple para un altavoz apagado es colocar el iPhone con el altavoz hacia abajo sobre un paño sin pelusa y ver si gotea agua; el agua en el puerto puede empeorar el sonido hasta que se evapora.',
      ipRating:
        'El iPhone 17 Pro Max tiene certificación IP68 según la norma IEC 60529, probado a una profundidad máxima de 6 metros durante un máximo de 30 minutos. Aun así, Apple desaconseja nadar o bañarse con él, exponerlo a agua a presión como la ducha o usarlo en una sauna, y advierte que la resistencia puede disminuir con el uso normal.',
      steps: [
        'Da golpecitos suaves al iPhone contra la mano con el conector USB-C hacia abajo y déjalo en un lugar seco con algo de ventilación. Un ventilador que sople aire frío hacia el conector puede ayudar.',
        'Si le salpicó un líquido que no sea agua, como café o zumo, Apple indica enjuagar la zona afectada con agua del grifo y secarla con un paño suave y sin pelusa.',
        'Desconecta todos los cables. Apple aconseja esperar al menos 5 horas antes de cargarlo con un cable USB-C; cuando la parte trasera esté seca, puedes usar un cargador inalámbrico.',
      ],
      faq: {
        q: '¿Cuánto tiempo debo esperar para cargar el iPhone 17 Pro Max después de que se moje?',
        a: 'Apple indica desconectar todos los cables y no cargarlo hasta que el iPhone esté completamente seco, esperando al menos 5 horas antes de cargarlo con un cable USB-C o conectar un accesorio. La carga inalámbrica se puede usar cuando el iPhone esté seco. No uses fuentes de calor ni introduzcas bastoncillos de algodón o papel en el conector.',
      },
      sources: [SRC.iphone17ProMaxSpecs, SRC.appleWater, SRC.appleLiquidAlert],
    },
    it: {
      speakers:
        'Le specifiche tecniche di Apple indicano per iPhone 17 Pro Max un altoparlante stereo integrato. Apple non pubblica uno schema delle griglie, quindi non indichiamo posizioni esatte. Il controllo suggerito da Apple per un altoparlante ovattato è appoggiare l’iPhone con l’altoparlante rivolto verso il basso su un panno che non lascia pelucchi e vedere se esce acqua; l’acqua nella porta può peggiorare il suono finché non evapora.',
      ipRating:
        'iPhone 17 Pro Max ha classificazione IP68 secondo la norma IEC 60529, testato a una profondità massima di 6 metri per un massimo di 30 minuti. Apple sconsiglia comunque di nuotare o fare il bagno con l’iPhone, di esporlo ad acqua ad alta pressione come la doccia o di usarlo in sauna, e avverte che la resistenza può diminuire con il normale utilizzo.',
      steps: [
        'Picchietta delicatamente l’iPhone contro il palmo con il connettore USB-C rivolto verso il basso, poi lascialo in un luogo asciutto e ventilato. Un ventilatore che soffia aria fresca nel connettore può aiutare.',
        'Se è stato bagnato da un liquido diverso dall’acqua, come caffè o succo, Apple consiglia di sciacquare la zona interessata con acqua del rubinetto e asciugarla con un panno morbido che non lascia pelucchi.',
        'Scollega tutti i cavi. Apple consiglia di attendere almeno 5 ore prima di ricaricarlo con un cavo USB-C; una volta asciugato il retro, puoi usare un caricabatterie wireless.',
      ],
      faq: {
        q: 'Quanto devo aspettare prima di ricaricare iPhone 17 Pro Max dopo che si è bagnato?',
        a: 'Apple consiglia di scollegare tutti i cavi e di non ricaricare l’iPhone finché non è completamente asciutto, attendendo almeno 5 ore prima di ricaricarlo con un cavo USB-C o collegare un accessorio. La ricarica wireless si può usare quando l’iPhone è asciutto. Non usare fonti di calore e non inserire cotton fioc o carta nel connettore.',
      },
      sources: [SRC.iphone17ProMaxSpecs, SRC.appleWater, SRC.appleLiquidAlert],
    },
  },

  'eject-water-samsung-galaxy-s24': {
    en: {
      speakers:
        'Samsung’s Galaxy S24 series specifications list stereo speakers. Samsung’s water guidance for Galaxy phones names the openings to keep clear: the earpiece, the external speaker and the primary microphone, which salt residue can block once it dries.',
      ipRating:
        'The Galaxy S24 is rated IP68. Samsung’s spec sheet breaks this down as IP6X, dust resistant, and IPX8, water resistant up to 1.5 metres of water for 30 minutes. Samsung notes that this resistance is not permanent and can diminish with normal wear, and that the touch screen may not respond while it is wet.',
      steps: [
        'Dry the screen before you start the tone. Samsung notes that the touch screen may not work properly while it is wet, so the Start button may not respond to a wet finger.',
        'If the water drop icon appears and charging stops, unplug the cable, gently shake the phone 5 to 10 times with the port facing down and leave it in a well-ventilated spot or in front of a fan.',
        'After salt water, rinse it with fresh water and dry it with a clean, soft cloth first, as Samsung advises, so salt does not dry inside the earpiece or speaker.',
      ],
      faq: {
        q: 'Why does my Galaxy S24 show the water drop icon when it did not get wet?',
        a: 'Samsung says the moisture warning can appear without contact with water, because high humidity can trigger it. Dry the phone and restart it once the port is dry. If the icon remains, try another cable, charge in a drier room, or clear the USB Settings cache.',
      },
      sources: [SRC.s24Specs, SRC.samsungIp, SRC.samsungMoisture],
    },
    es: {
      speakers:
        'Las especificaciones de la serie Galaxy S24 de Samsung indican altavoces estéreo. La guía de Samsung sobre resistencia al agua nombra las aberturas que conviene mantener despejadas en los Galaxy: el auricular, el altavoz externo y el micrófono principal, que los restos de sal pueden bloquear al secarse.',
      ipRating:
        'El Galaxy S24 tiene certificación IP68. La ficha técnica de Samsung lo desglosa en IP6X, resistente al polvo, e IPX8, resistente al agua hasta 1,5 metros durante 30 minutos. Samsung advierte que esta resistencia no es permanente y puede disminuir con el uso normal, y que la pantalla táctil puede no responder si está mojada.',
      steps: [
        'Seca la pantalla antes de iniciar el tono. Samsung indica que la pantalla táctil puede no funcionar bien mojada, así que el botón de inicio puede no responder a un dedo húmedo.',
        'Si aparece el icono de la gota de agua y se detiene la carga, desconecta el cable, agita suavemente el teléfono de 5 a 10 veces con el puerto hacia abajo y déjalo en un lugar ventilado o delante de un ventilador.',
        'Si se mojó con agua salada, enjuágalo primero con agua dulce y sécalo con un paño limpio y suave, como aconseja Samsung, para que la sal no se seque dentro del auricular o del altavoz.',
      ],
      faq: {
        q: '¿Por qué mi Galaxy S24 muestra el icono de la gota de agua si no se ha mojado?',
        a: 'Samsung explica que el aviso de humedad puede aparecer sin contacto con el agua, porque la humedad ambiental alta puede activarlo. Seca el teléfono y reinícialo cuando el puerto esté seco. Si el icono sigue apareciendo, prueba otro cable, cárgalo en un lugar más seco o borra la caché de Ajustes USB.',
      },
      sources: [SRC.s24Specs, SRC.samsungIp, SRC.samsungMoisture],
    },
  },

  'fix-pixel-7-speaker': {
    en: {
      speakers:
        'Google’s hardware diagram for the Pixel 7 labels two speakers, a top speaker and a bottom speaker, separate from the top, bottom and rear-facing microphones and the USB-C port. The spec sheet lists stereo speakers and three microphones, so do not mistake the microphone holes for a speaker.',
      ipRating:
        'The Pixel 7 is designed to comply with IP68 under IEC 60529 when it leaves the factory. Google stresses that it is not waterproof, that the accessories are not water resistant, and that resistance diminishes with wear, repair, disassembly or a drop. Google does not publish a test depth for it.',
      steps: [
        'If the Pixel 7 fell in water: lift it out, turn it off, dry it with a soft cloth and set it on a flat surface to finish drying at room temperature, as Google advises.',
        'Run the tone with the bottom edge pointing down to clear the bottom speaker, then flip it so the top edge points down for the top speaker.',
        'Keep the charger and cable away until everything is dry, because Google notes the accessories are not water resistant.',
      ],
      faq: {
        q: 'Which openings on the Pixel 7 are speakers and which are microphones?',
        a: 'Google’s Pixel 7 hardware diagram labels a top speaker and a bottom speaker, plus three separate microphones: top, bottom and rear-facing. The USB-C port is labelled separately too. Only the two speakers need to point down when you run the water eject tone.',
      },
      sources: [SRC.pixelDiagram, SRC.pixelSpecs, SRC.pixelWater],
    },
  },

  'fix-redmi-note-13-speaker': {
    en: {
      speakers:
        'Xiaomi’s spec sheet for the Redmi Note 13 lists dual speakers with Dolby Atmos and a 3.5 mm headphone jack. The Redmi Note 13 5G spec sheet lists the headphone jack and Dolby Atmos but does not list dual speakers. Xiaomi does not publish grille positions, so we do not guess them.',
      ipRating:
        'Both the Redmi Note 13 and Redmi Note 13 5G are rated IP54, tested for splash and dust resistance under IEC 60529. Xiaomi says not to immerse the phone completely or expose it to sea water, chlorinated water or drinks, and that the protection degrades with daily use.',
      steps: [
        'Do not charge it while it is damp. Xiaomi’s spec page says not to charge the phone in a humid condition.',
        'Unplug wired headphones so the 3.5 mm jack is empty and the tone plays through the speaker. On the 4G model, use the Speaker Test afterwards to check both speakers.',
        'If it was submerged, or got sea water, pool water or a drink on it, that is outside the IP54 rating. Turn it off, let it dry fully, and contact Xiaomi service if the sound stays muffled.',
      ],
      faq: {
        q: 'Do the Redmi Note 13 and Redmi Note 13 5G have the same speakers?',
        a: 'Not according to Xiaomi’s spec sheets. The Redmi Note 13 lists dual speakers with Dolby Atmos, while the Redmi Note 13 5G lists Dolby Atmos and a 3.5 mm headphone jack without listing dual speakers. Both are rated IP54 for splash and dust resistance.',
      },
      sources: [SRC.redmiNote13Specs, SRC.redmiNote135gSpecs],
    },
  },

  'fix-iphone-17-speaker': {
    en: {
      speakers:
        'Apple’s tech specs list a built-in stereo speaker and built-in microphones for iPhone 17. Apple does not publish a grille diagram, so we do not name exact positions. To check for trapped water, Apple suggests placing the iPhone speaker side down on a lint-free cloth and seeing whether water drips out.',
      ipRating:
        'iPhone 17 is rated IP68 under IEC 60529, tested to a maximum depth of 6 metres for up to 30 minutes, the same rating Apple lists for iPhone Air and iPhone 17 Pro. It is also resistant to accidental spills of common drinks such as coffee or juice. Resistance is not permanent and can decrease with normal wear.',
      steps: [
        'If iOS shows a liquid-detection alert, unplug the cable at both ends. Charging and accessory connection stay unavailable until the connector and cable are dry.',
        'Dry it by tapping it gently against your hand with the USB-C connector facing down. Do not use heat, compressed air or a bag of rice; Apple warns that rice particles can damage the iPhone.',
        'If the alert keeps coming back, there is still liquid in the connector. Apple says it can take up to 24 hours to dry fully, and a wireless charger can be used once the back is dry.',
      ],
      faq: {
        q: 'Can I take iPhone 17 swimming because it is rated IP68?',
        a: 'Apple advises against it. Even with an IP68 rating, Apple lists swimming or bathing with your iPhone, pressurised or high-velocity water, saunas and intentional submersion as things to avoid. Liquid damage is not covered by Apple’s warranty, though consumer law may give you rights.',
      },
      sources: [SRC.iphone17Specs, SRC.appleWater, SRC.appleLiquidAlert],
    },
    it: {
      speakers:
        'Le specifiche tecniche di Apple indicano per iPhone 17 un altoparlante stereo integrato e microfoni integrati. Apple non pubblica uno schema delle griglie, quindi non indichiamo posizioni esatte. Per verificare se è rimasta acqua, Apple suggerisce di appoggiare l’iPhone con l’altoparlante rivolto verso il basso su un panno che non lascia pelucchi e vedere se esce acqua.',
      ipRating:
        'iPhone 17 ha classificazione IP68 secondo la norma IEC 60529, testato a una profondità massima di 6 metri per un massimo di 30 minuti, la stessa che Apple indica per iPhone Air e iPhone 17 Pro. Resiste anche a schizzi accidentali di bevande comuni come caffè o succo. La resistenza non è permanente e può diminuire con il normale utilizzo.',
      steps: [
        'Se iOS mostra un avviso di rilevamento di liquido, scollega il cavo da entrambe le estremità. Ricarica e collegamento di accessori restano disattivati finché connettore e cavo non sono asciutti.',
        'Asciugalo picchiettandolo delicatamente contro il palmo con il connettore USB-C rivolto verso il basso. Non usare calore, aria compressa o un sacchetto di riso: Apple avverte che i granelli di riso possono danneggiare l’iPhone.',
        'Se l’avviso continua a comparire, c’è ancora liquido nel connettore. Secondo Apple possono servire fino a 24 ore perché si asciughi del tutto; quando il retro è asciutto puoi usare un caricabatterie wireless.',
      ],
      faq: {
        q: 'Posso nuotare con iPhone 17 visto che ha classificazione IP68?',
        a: 'Apple lo sconsiglia. Anche con la classificazione IP68, Apple indica di evitare di nuotare o fare il bagno con l’iPhone, l’acqua ad alta pressione o ad alta velocità, la sauna e l’immersione intenzionale. I danni da liquidi non sono coperti dalla garanzia Apple, anche se la legge a tutela dei consumatori può darti dei diritti.',
      },
      sources: [SRC.iphone17Specs, SRC.appleWater, SRC.appleLiquidAlert],
    },
  },

  'eject-water-samsung-galaxy-s22-ultra': {
    en: {
      speakers:
        'Samsung’s water guidance for Galaxy phones names the earpiece, the external speaker and the primary microphone as the openings to keep clear, because salt left to dry there can block them. Samsung’s S22 Ultra spec sheet does not give grille positions, so we do not guess them.',
      ipRating:
        'The Galaxy S22 Ultra and its S Pen are rated IP68. Samsung bases this on test conditions for submersion in up to 1.5 metres of fresh water for up to 30 minutes, and says it is not advised for beach or pool use. Rinse off residue and dry it if it gets wet.',
      steps: [
        'If it went into the sea or a pool, rinse off the residue with fresh water first, as Samsung advises, then dry it thoroughly with a clean, soft cloth.',
        'If the water drop icon appears, unplug the cable and gently shake the phone 5 to 10 times with the USB-C port facing down, then dry it in a well-ventilated spot or in front of a fan.',
        'If the icon stays once the port is dry, clear the USB cache: Settings > Apps > Filter and sort > Show system apps > USB Settings > Storage > Clear cache.',
      ],
      faq: {
        q: 'Is the Galaxy S22 Ultra safe to use at the beach or pool?',
        a: 'Samsung does not advise it. The S22 Ultra and S Pen are IP68 rated, based on submersion in up to 1.5 metres of fresh water for up to 30 minutes, but Samsung says it is not advised for beach or pool use. If salt or chlorinated water gets on it, rinse it with fresh water and dry it before running the eject tone.',
      },
      sources: [SRC.s22UltraSpecs, SRC.samsungIp, SRC.samsungMoisture],
    },
  },

  'fix-realme-12-pro-plus-speaker': {
    en: {
      speakers:
        'realme lists Dolby Atmos dual stereo speakers with Hi-Res Audio certification for the realme 12 Pro+ 5G. realme does not publish a grille diagram, so we do not name exact positions. Because the two speakers play in stereo, a muffled side shows up clearly in a left and right channel test.',
      ipRating:
        'The realme 12 Pro+ 5G is rated IP65 under IEC 60529:2013. realme describes it as splash-proof and dust-resistant under normal use, says it is not advised for beach or pool use, and notes that water and dust resistance is not permanent and may diminish over time.',
      steps: [
        'Treat any submersion as outside the rating. IP65 means splash-proof and dust-resistant, so if it went into water, turn it off and let it dry fully before running the tone.',
        'Run the eject tone, then play the left and right channels separately in the Speaker Test to find out which of the dual speakers is still muffled.',
        'After beach or pool use, which realme does not advise, dry it fully and contact realme service if the sound stays dull rather than repeating cycles.',
      ],
      faq: {
        q: 'Can the realme 12 Pro+ go in a pool if it is IP65?',
        a: 'No. realme says the 12 Pro+ 5G is splash-proof and dust-resistant under normal use and meets IP65 in laboratory tests, but it is not advised for beach or pool use. IP65 is not a submersion rating, and the resistance can diminish over time with normal wear.',
      },
      sources: [SRC.realme12ProPlus, SRC.realme12ProPlusSpecs],
    },
  },

  'fix-moto-g84-speaker': {
    en: {
      speakers:
        'Motorola says the moto g84 5G has stereo speakers with Dolby Atmos. Motorola does not publish a grille diagram, so we do not name exact positions. With two speakers, the Speaker Test’s left and right channels make it easy to hear which one is still affected.',
      ipRating:
        'Motorola’s product page describes a water-repellent design for the moto g84 5G that helps protect against moderate exposure to water such as accidental spills, splashes or light rain. It is not designed to be submerged or exposed to pressurised water, and it is not waterproof.',
      steps: [
        'If it was splashed or caught in light rain, the exposure the design is meant for, wipe it dry and run the eject tone with the speakers facing down.',
        'If it was submerged or hit by pressurised water, that is outside the design. Turn it off and let it dry fully before running the tone, and do not charge it while it is wet.',
        'Use the Speaker Test to check the left and right channels one at a time once it is dry.',
      ],
      faq: {
        q: 'Is the moto g84 5G waterproof?',
        a: 'No. Motorola describes the moto g84 5G as water-repellent. The design helps protect against accidental spills, splashes or light rain, but Motorola says it is not designed to be submerged in water or exposed to pressurised water, and the protection may diminish over time.',
      },
      sources: [SRC.g84Page],
    },
  },

  'fix-samsung-galaxy-z-fold-6-speaker': {
    en: {
      speakers:
        'Samsung’s water guidance for Galaxy phones names the earpiece, the external speaker and the primary microphone as the openings that salt residue can block. Samsung’s Z Fold6 spec sheet does not give grille positions, so we do not guess them.',
      ipRating:
        'The Galaxy Z Fold6 is rated IP48, not IP68 like the Galaxy S phones. Samsung bases the water part on lab tests of submersion in up to 1.5 metres of fresh water for up to 30 minutes, says it is not advised for beach or pool use, and notes the resistance is not permanent. Rinse off residue and dry it if it gets wet.',
      steps: [
        'Keep sand and grit away from it while it is wet. With an IP48 rating rather than IP68, the Fold6 does not carry the dust rating of the Galaxy S phones, and Samsung does not advise beach use.',
        'If the water drop icon appears, unplug the cable, gently shake it 5 to 10 times with the USB-C port facing down, and dry it in a well-ventilated spot or in front of a fan.',
        'If you need power while the port dries, Samsung says to close a foldable and place it with the back facing the wireless charger, centred on the pad.',
      ],
      faq: {
        q: 'What does the Galaxy Z Fold6 IP48 rating mean for water?',
        a: 'Samsung bases the Z Fold6 water rating on lab tests of submersion in up to 1.5 metres of fresh water for up to 30 minutes. It is not advised for beach or pool use. Its rating is IP48 rather than IP68, so it does not have the dust rating of the Galaxy S phones.',
      },
      sources: [SRC.fold6Specs, SRC.samsungIp, SRC.samsungMoisture],
    },
  },
};

export const getDeviceSpecifics = (slug: string, lang: SupportedLang): DeviceSpecificContent | undefined =>
  deviceSpecifics[slug]?.[lang];
