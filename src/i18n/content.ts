import type { SupportedLang } from './ui';

export interface FAQItem {
  q: string;
  a: string;
}

export interface SEOContent {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  articleHeading: string;
  articleIntro: string;
  sections: {
    heading: string;
    paragraphs: string[];
    listType?: 'ul' | 'ol';
    listItems?: string[];
  }[];
  faqs: FAQItem[];
}

export const seoContent: Record<SupportedLang, SEOContent> = {
  en: {
    title: 'Fix The Speaker: Water Eject Sound & Phone Speaker Cleaner',
    description:
      'Free browser tool for a muffled phone speaker: play a low-frequency water eject tone or a dust cleaner sweep through your speaker. No app to install.',
    keywords: [
      'fix the speaker',
      'how to fix the speaker on my iphone',
      'water eject',
      'clean my speaker dust',
      'water eject on iphone',
      'speaker water eject',
      'water eject sound',
      'water eject shortcut',
      'clear water from phone speaker',
      'fix muffled speaker',
      'fix crackling phone speaker',
      'speaker cleaner sound wave',
      'how to get water out of phone speaker',
    ],
    canonicalPath: '/',
    articleHeading: 'How to Fix the Speaker on Your iPhone & Android with Water Eject Sound Waves',
    articleIntro:
      'Dropped your phone in a pool, sink or bath, or got caught in heavy rain? Water sitting in the speaker grille can make the sound muffled, quiet or crackly until it dries. Fix The Speaker is a free tool that runs in your browser: it plays a low-frequency tone through your speaker, which many people use after water exposure while the phone dries. Results vary, and it cannot repair a speaker that is damaged.',
    sections: [
      {
        heading: 'What the Water Eject Tone Does',
        paragraphs: [
          'The Water Eject mode plays a low-frequency tone (165 Hz) through your speaker for 60 seconds. The speaker moves as it plays any sound, and with the grille facing down that movement can help shake loose droplets sitting in the opening.',
          'It is not a repair. It does not dry the inside of the phone, and it cannot fix a speaker that was damaged by water, a drop or wear. If the sound is still muffled once the phone is completely dry, contact the manufacturer or a repair shop. Our guide on whether water eject sounds work goes into what is and is not known.',
        ],
      },
      {
        heading: 'The Three Modes',
        paragraphs: ['The tool has three modes. Each plays a different sound through the speaker of the device you open it on:'],
        listType: 'ul',
        listItems: [
          'Water Eject: a low-frequency tone, for use after rain, a splash or a spill.',
          'Dust Cleaner: a high-frequency sweep. Lint and dust in the grille mostly come off with a soft, dry brush; the sweep is an optional extra before brushing.',
          'Speaker Test: plays a tone on the left, the right and both channels, so you can hear whether one side is quieter than the other.',
        ],
      },
      {
        heading: 'Step-by-Step Guide: How to Fix the Speaker on My iPhone or Android',
        paragraphs: [
          'Follow these steps to give the water eject tone the best chance of clearing your speaker:',
        ],
        listType: 'ol',
        listItems: [
          'Remove Protective Cases: Thick silicone or leather cases trap expelled water against the exterior speaker port. Always take off the case first.',
          'Face Speaker Grille Downward: Hold your iPhone or Android phone vertically over a soft microfiber cloth or paper towel with the bottom speaker pointing down.',
          'Turn the Volume Up: Raise the media volume, and keep the phone away from your ears while the tone plays.',
          'Start Water Eject and Let the 60-Second Cycle Finish: Tap Start Ejection and let it run. Wipe away any water, and run another cycle if the sound is still muffled.',
          'Check with Speaker Test: Once the phone is wiped dry, switch to Speaker Test and listen to each side.',
        ],
      },
      {
        heading: 'Skip the Rice, Heat and Pins',
        paragraphs: [
          'Some popular fixes do more harm than good. Apple, for example, advises against them for a wet iPhone:',
          'Do not put the phone in a bag of rice. Apple warns that small particles of rice can get into the phone and damage it.',
          'Do not dry it with a hair dryer, another heat source or compressed air.',
          'Do not push cotton swabs, paper towels, pins or needles into the speaker grille or the charging port.',
          'Instead, wipe the phone, let it dry somewhere with some airflow, and wait until it is completely dry before charging it with a cable.',
        ],
      },
      {
        heading: 'Universal Compatibility: iPhone, Samsung, Pixel, Smartwatches & Laptops',
        paragraphs: [
          'Fix The Speaker operates natively within modern web browsers using the standard HTML5 Web Audio API. It runs in any current browser with no installation:',
          'iPhone 16 / 15 / 14 / 13 / 12 / SE (iOS Safari), Samsung Galaxy S24 / S23 / A-series, Google Pixel 9 / 8 / 7, iPad, and MacBook or Windows laptop speakers. (Apple Watch cannot play web audio through its own speaker; use its built-in Water Lock.)',
        ],
      },
    ],
    faqs: [
      {
        q: 'How does the water eject sound fix the speaker on my iPhone?',
        a: 'It plays a low-frequency tone through the iPhone speaker. Many people use it after water exposure, holding the phone with the speaker facing down so the vibration can help shake out droplets in the grille. Results vary: it does not dry the inside of the phone and cannot repair a damaged speaker.',
      },
      {
        q: 'Is this water eject sound safe for my phone speakers?',
        a: '165 Hz is an ordinary bass note that phone speakers play every day in music. Keep the phone away from your ears at full volume, stop if you hear rattling or distortion, and do not use it on a speaker that is already damaged.',
      },
      {
        q: 'How long should I run the speaker water eject sound?',
        a: 'Start with one 60-second cycle. If the sound is still muffled or quiet, wipe the grille with a lint-free cloth and run another, then let the phone dry. If it stays muffled once the phone is completely dry, the problem may not be water.',
      },
      {
        q: 'How is this different from the Apple Watch water eject or Siri water eject shortcut?',
        a: 'Apple Watch has its own Water Lock feature, which plays a sound from the watch speaker; this website cannot play sound through the watch. Our tool uses a similar idea, a low tone played through the speaker, for phones, tablets and laptops in any web browser, with no shortcut or app to install.',
      },
      {
        q: 'How do I clean my speaker dust with sound?',
        a: 'Dust and lint mostly come off with a soft, dry toothbrush brushed gently over the grille. The Dust Cleaner mode plays a high-frequency sweep you can run first, but brushing does most of the work.',
      },
      {
        q: 'Why does my speaker still sound muffled after water ejection?',
        a: 'Water may still be drying, or lint or dirt may be blocking the grille. Let the device air dry in a well-ventilated area, brush the grille gently, and check with Speaker Test. If it is still muffled once fully dry, the speaker may be damaged and need a repair.',
      },
      {
        q: 'Does this tool require microphone access or record anything?',
        a: 'No. The sounds are generated on your device with the Web Audio API. The site never asks for microphone access, and nothing is recorded or uploaded.',
      },
      {
        q: 'Can I use this water eject tool on AirPods, earbuds, or Bluetooth speakers?',
        a: 'Yes, provided your browser audio output is routed to the connected Bluetooth device. Always remove earbuds from your ears before playing high-volume tones.',
      },
    ],
  },
  es: {
    title: 'Arreglar Altavoz: Expulsar Agua y Limpiar Altavoz del Móvil',
    description:
      'Herramienta gratuita para arreglar el altavoz de mi iPhone y Android. Sonido de 165 Hz para expulsar agua y limpiar el polvo del altavoz en 60 segundos.',
    keywords: [
      'arreglar altavoz',
      'expulsar agua',
      'como sacar agua del altavoz de mi iphone',
      'limpiar altavoz movil',
      'sonido para expulsar agua',
      'quitar agua del altavoz',
      'atajo expulsar agua iphone',
      'altavoz movil suena bajo',
      'limpiar altavoz celular agua',
      'sonido para limpiar altavoz',
    ],
    canonicalPath: '/es',
    articleHeading: 'Cómo arreglar el altavoz de tu móvil y expulsar agua con ondas de sonido',
    articleIntro:
      '¿Se te ha caído el móvil al agua, a la piscina o te ha pillado la lluvia? Cuando el agua entra en el altavoz del teléfono, la tensión superficial retiene las gotas en la malla acústica, haciendo que el audio suene apagado, distorsionado o muy bajo. Fix The Speaker es una solución online gratuita para expulsar agua y desatascar el altavoz en 60 segundos sin necesidad de instalar apps.',
    sections: [
      {
        heading: 'Cómo funciona el sonido para expulsar agua a 165 Hz',
        paragraphs: [
          'El altavoz del móvil funciona mediante una membrana que vibra rápidamente accionada por una bobina electromagnética. Cuando entra agua, las microgotas forman una película líquida sobre los orificios de la rejilla exterior debido a la tensión superficial.',
          'Nuestra herramienta genera un tono pulsante de 165 Hz con onda cuadrada. A esta frecuencia exacta, el diafragma del altavoz realiza su máximo desplazamiento mecánico, generando ráfagas de presión de aire continuas.',
          'Esta presión empuja las gotas de agua desde el interior hacia el exterior de la rejilla. Al colocar el móvil boca abajo, la gravedad ayuda a que el agua caiga sobre un paño seco.',
        ],
      },
      {
        heading: 'Modo Expulsar Agua vs. Modo Limpiar Polvo',
        paragraphs: [
          'Diferentes problemas requieren diferentes frecuencias de vibración acústica:',
        ],
        listType: 'ul',
        listItems: [
          'Modo Expulsar Agua (165 Hz Graves): Diseñado para expulsar líquidos tras contacto con agua, lluvia o sudor. Crea una fuerte presión de aire.',
          'Modo Limpiar Polvo (2,5 kHz a 14,5 kHz Barrido Turbo): Emite microvibraciones agudas que despegan pelusas, polvo y arena incrustada en la malla protectora.',
          'Modo Prueba de Altavoz (Estéreo): Comprueba de forma independiente los canales izquierdo y derecho para verificar si el sonido se ha recuperado al 100%.',
        ],
      },
      {
        heading: 'Paso a paso para arreglar el altavoz mojado de tu iPhone o Android',
        paragraphs: [
          'Sigue estos pasos para obtener el mejor resultado posible:',
        ],
        listType: 'ol',
        listItems: [
          'Quita la funda: Las fundas retienen el agua expulsada contra el borde del altavoz.',
          'Coloca el altavoz hacia abajo: Sujeta el teléfono en posición vertical sobre un paño seco o toalla de papel.',
          'Sube el volumen al 100%: La potencia sonora máxima es clave para que el diafragma empuje el agua con fuerza.',
          'Pulsa Iniciar Expulsión y espera 60 segundos: Deja que el sonido actúe. Seca las gotas y repite 2 o 3 veces si es necesario.',
          'Comprueba con la Prueba de Altavoz: Verifica que ambos canales emitan un sonido nítido y potente.',
        ],
      },
      {
        heading: 'Por qué no debes meter el móvil en arroz ni usar secadores',
        paragraphs: [
          'El arroz contiene almidón y polvo fino que penetra en los orificios, formando una pasta que bloquea el altavoz de forma permanente.',
          'El aire caliente de los secadores derrite los sellos adhesivos de impermeabilidad del smartphone y empuja el agua hacia la placa base.',
          'Los alfileres o hisopos pueden perforar la membrana impermeable IP68 del altavoz, destruyendo su protección.',
          'Un tono de sonido no requiere introducir nada en el altavoz, por eso es una opción menos invasiva que las agujas o los hisopos.',
        ],
      },
      {
        heading: 'Compatibilidad universal: iPhone, Samsung, Xiaomi, Smartwatches y Portátiles',
        paragraphs: [
          'Fix The Speaker funciona directamente en el navegador mediante la API estándar Web Audio de HTML5. Funciona en iPhone 16/15/14/13/12/SE (Safari), Samsung Galaxy, Google Pixel, Xiaomi, iPad y altavoces de portátiles. (El Apple Watch no puede reproducir audio web por su altavoz; usa su función integrada «Water Lock».)',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Cómo funciona el sonido para expulsar agua del altavoz?',
        a: 'Genera una onda de 165 Hz que hace vibrar la membrana del altavoz al máximo, empujando las gotas de agua fuera de la rejilla mediante presión de aire.',
      },
      {
        q: '¿Es seguro usar este tono en mi iPhone o Android?',
        a: '165 Hz es una nota grave normal que los altavoces del móvil reproducen a diario con la música. Mantén el teléfono lejos de los oídos, detente si oyes distorsión y no lo uses en un altavoz ya dañado.',
      },
      {
        q: '¿Cuántas veces debo reproducir el sonido?',
        a: 'Un ciclo de 60 segundos suele ser suficiente. Si el sonido sigue sonando bajo o distorsionado, seca la rejilla y repite 2 o 3 veces.',
      },
      {
        q: '¿Es igual que el atajo expulsar agua de Siri o Apple Watch?',
        a: 'Se basa en una idea parecida (un tono grave a todo volumen), pero para móviles, tabletas y portátiles desde el navegador. El Apple Watch usa su propia función «Water Lock»; esta web no puede reproducir sonido en el reloj.',
      },
      {
        q: '¿Cómo limpio el polvo del altavoz con sonido?',
        a: 'Utiliza el modo Limpiar Polvo. El barrido de alta frecuencia hace vibrar la malla para soltar partículas secas, que luego puedes retirar con un cepillo de dientes suave.',
      },
      {
        q: '¿Se necesita descargar alguna app o dar permisos de micrófono?',
        a: 'No. Funciona 100% online en cualquier navegador (Safari, Chrome, Firefox) sin descargas, sin registros y sin acceso al micrófono.',
      },
    ],
  },
  ja: {
    title: 'Fix The Speaker: スピーカーの水抜き音 & ホコリ掃除ツール',
    description:
      'iPhone・Android対応の無料スピーカー水抜きツール。165Hzの特殊音波でスピーカーに入った水やホコリを60秒で強力排出。',
    keywords: [
      'スピーカー 水抜き',
      'スピーカー 水抜き 音',
      'iphone スピーカー 水抜き',
      'スピーカー 掃除',
      'スピーカー 音 こもる',
      '水抜き ショートカット',
      'スピーカー ホコリ 除去',
      'スマホ スピーカー 水没',
      'スピーカー 水抜き web',
    ],
    canonicalPath: '/ja',
    articleHeading: 'スマホのスピーカーに入った水を音波（165Hz水抜き音）で排出・修理する方法',
    articleIntro:
      'スマホをお風呂、プール、雨、トイレなどで水没させてしまい、スピーカーの音が小さくなったり、こもったりしていませんか？スピーカーグリルに入り込んだ水分は、表面張力によって微細なメッシュ穴に留まります。Fix The Speakerは、アプリのインストール不要で、ブラウザから165Hzの強力な水抜き音を再生し、水滴を外へ押し出す無料のWebツールです。',
    sections: [
      {
        heading: '水抜き音の仕組み：なぜ165Hzの音波で水が抜けるのか？',
        paragraphs: [
          'スマホのスピーカーは、電気信号を受けて振動板が前後に動くことで音を出します。水滴がメッシュを塞ぐと、音がこもって聞こえなくなります。',
          '本ツールが再生する165Hzの矩形波（パルス音）は、スマホの小型スピーカーが最も大きく振動する周波数帯に調整されています。',
          'この強力な空気圧の押し出しにより、メッシュに詰まった水滴が物理的に外へと押し出されます。スピーカーを下に向けることで、重力とともに水滴が排出されます。',
        ],
      },
      {
        heading: '水抜きモードとホコリ掃除モードの使い分け',
        paragraphs: [
          'スピーカーのトラブルの原因に合わせて、適切なモードを選択してください：',
        ],
        listType: 'ul',
        listItems: [
          '水抜きモード（165Hz 重低音パルス）：水没、お風呂での水滴侵入、雨濡れに最適。強力な空気圧で水を押し出します。',
          'ホコリ掃除モード（2.5kHz〜14.5kHz ターボスイープ）：ポケットの糸くずや砂埃の除去に最適。高周波微振動でこびりついた汚れを浮かせます。',
          'スピーカーテスト（左右ステレオ診断）：左・右・両方から音を鳴らし、音質や音量が正常に戻ったかを確認できます。',
        ],
      },
      {
        heading: '効果的な水抜きの4つの手順',
        paragraphs: [
          '水抜き効果を最大限に高めるための正しい手順です：',
        ],
        listType: 'ol',
        listItems: [
          'スマホケースを外す：ケースがスピーカー穴を塞ぎ、排出された水を溜め込んでしまうのを防ぎます。',
          'スピーカーを下に向ける：スマホを縦に持ち、ティッシュやタオルの上でスピーカー穴を下向きに保ちます。',
          '音量を最大（100%）に設定する：振動板の振幅を最大にするため、メディア音量を最大にします。',
          '水抜き音を再生して60秒待つ：水滴が押し出されてきたら優しく拭き取り、必要に応じて2〜3回繰り返します。',
          'スピーカーテストで確認：音が左右均等にクリアに聞こえるか診断します。',
        ],
      },
      {
        heading: '生米・ドライヤー・つまようじが危険な理由',
        paragraphs: [
          'お米に入れるとデンプン粉が内部に入り込み、水分と混ざって固着する原因になります。',
          'ドライヤーの熱風は防水パッキンを溶かし、風圧で水を基板奥へと押し込んでしまいます。',
          'つまようじや綿棒はスピーカー内部の防水保護膜を破ってしまう恐れがあります。音波による水抜きは、何も差し込まずに済む方法です。',
        ],
      },
      {
        heading: '対応機種：iPhone、Android、iPad、ノートパソコン',
        paragraphs: [
          'Fix The SpeakerはHTML5 Web Audio APIを採用しており、iPhone (Safari)、Android (Chrome)、iPad、MacBook、Windows PCなど、あらゆるデバイスのブラウザでそのまま動作します。',
        ],
      },
    ],
    faqs: [
      {
        q: 'スピーカーの水抜き音は本当に効果がありますか？',
        a: 'はい。165Hzのパルス音波によってスピーカー振動板を最大ストロークで動かし、空気圧でメッシュに詰まった水滴を物理的に押し出します。',
      },
      {
        q: 'スマホのスピーカーが壊れる心配はありませんか？',
        a: '165Hzは音楽でも普段から再生される低音です。最大音量時は耳から離し、音割れが聞こえたら停止してください。すでに故障したスピーカーには使用しないでください。',
      },
      {
        q: '水抜きは何回行えばよいですか？',
        a: '通常は1回（60秒）で水が抜けます。音がまだこもっている場合は、水分を拭き取った後、2〜3回繰り返してください。',
      },
      {
        q: 'Apple Watchの水抜き機能やSiriショートカットと同じですか？',
        a: '低音を最大音量で鳴らすという考え方は似ていますが、本ツールはiPhone・Android・パソコンのブラウザ用です。Apple Watch本体の水抜きは、時計に内蔵された「水濡れロック（Water Lock）」を使ってください。',
      },
      {
        q: 'ホコリ掃除モードの使い方は？',
        a: 'ホコリ掃除モードを再生すると高周波スイープがゴミを浮かせます。再生後に乾いた清潔な歯ブラシで表面を優しく払ってください。',
      },
      {
        q: 'アプリをインストールする必要はありますか？',
        a: '不要です。SafariやChromeなどのブラウザでアクセスするだけで、登録やマイク権限なしでいつでもすぐに利用できます。',
      },
    ],
  },
  fr: {
    title: "Réparer le Haut-Parleur : Éjecter l'Eau & Nettoyer la Poussière",
    description:
      "Outil en ligne gratuit pour réparer le haut-parleur de votre iPhone ou Android. Son de 165 Hz pour éjecter l'eau et décoller la poussière en 60 secondes.",
    keywords: [
      'réparer le haut-parleur',
      'éjecter eau',
      'comment enlever l eau des haut parleurs iphone',
      'nettoyer poussiere haut parleur',
      'son pour ejecter l eau',
      'raccourci ejecter eau',
      'haut parleur gresille eau',
      'son etouffe telephone eau',
    ],
    canonicalPath: '/fr',
    articleHeading: "Comment réparer le haut-parleur de son smartphone et éjecter l'eau avec le son",
    articleIntro:
      "Votre téléphone est tombé dans l'eau, les toilettes ou a pris la pluie ? Les gouttelettes bloquées par tension superficielle étouffent le son et provoquent des grésillements. Fix The Speaker est une alternative gratuite au raccourci Siri Water Eject, générant une onde acoustique de 165 Hz qui chasse l'eau et décolle les poussières de votre haut-parleur en 60 secondes sans installer d'application.",
    sections: [
      {
        heading: "Le principe de l'éjection d'eau par fréquence 165 Hz",
        paragraphs: [
          "Un haut-parleur de smartphone fonctionne grâce à une fine membrane mise en mouvement par une bobine électromagnétique. Lorsque de l'eau s'infiltre, la tension superficielle retient les gouttelettes contre la grille acoustique.",
          "Fix The Speaker émet une onde carrée pulsée à 165 Hz. À cette fréquence de résonance, la membrane effectue son excursion physique maximale, produisant des impulsions d'air sous pression.",
          "Ce souffle pousse l'eau hors des micro-perforations de la grille. En maintenant le téléphone vers le bas, la gravité évacue le liquide sur un tissu sec.",
        ],
      },
      {
        heading: "Éjection d'eau vs Nettoyage poussière : quel mode choisir ?",
        paragraphs: [
          'Chaque type d’obstruction nécessite une fréquence acoustique adaptée :',
        ],
        listType: 'ul',
        listItems: [
          "Mode Éjecter l'Eau (165 Hz Basses Puissantes) : Spécialement calibré pour l'évacuation des liquides après une chute dans l'eau ou la transpiration.",
          'Mode Nettoyer Poussière (Balayage turbo 2,5 kHz à 14,5 kHz) : Émet des micro-vibrations aiguës pour détacher la poussière et les peluches de poche incrustées.',
          'Mode Test Haut-Parleur (Stéréo) : Vérifie indépendamment les canaux gauche et droit pour s’assurer que le son a retrouvé sa puissance d’origine.',
        ],
      },
      {
        heading: 'Guide pas à pas pour réparer votre haut-parleur',
        paragraphs: [
          'Suivez ces étapes pour une efficacité maximale :',
        ],
        listType: 'ol',
        listItems: [
          'Retirez la coque de protection pour ne pas bloquer les sorties audio.',
          'Orientez le haut-parleur vers le bas au-dessus d’un essuie-tout ou chiffon sec.',
          'Réglez le volume multimédia à 100%.',
          "Lancez l'éjection et laissez tourner le cycle de 60 secondes.",
          'Séchez les gouttes et effectuez le test audio stéréo.',
        ],
      },
      {
        heading: 'Pourquoi éviter le riz, le sèche-cheveux et les aiguilles',
        paragraphs: [
          'Le riz dépose de l’amidon qui forme une pâte corrosive à l’intérieur du port audio.',
          'La chaleur du sèche-cheveux fait fondre les joints d’étanchéité IP68 et pousse l’humidité vers la carte mère.',
          'Les aiguilles percent la membrane acoustique étanche. Un son ne nécessite d’insérer aucun objet dans le haut-parleur, ce qui le rend moins invasif.',
        ],
      },
      {
        heading: 'Compatibilité universelle',
        paragraphs: [
          'Compatible avec iPhone 16/15/14/13/12, Samsung Galaxy, Google Pixel, Xiaomi, iPad et ordinateurs portables. (L’Apple Watch ne peut pas lire l’audio web sur son haut-parleur : utilisez sa fonction intégrée « Water Lock ».)',
        ],
      },
    ],
    faqs: [
      {
        q: "Comment fonctionne le son d'éjection d'eau ?",
        a: "Il émet une impulsion à 165 Hz qui fait vibrer la membrane à son amplitude maximale, poussant l'eau hors de la grille acoustique par pression d'air.",
      },
      {
        q: 'Est-ce sans danger pour mon smartphone ?',
        a: '165 Hz est une note grave ordinaire que les haut-parleurs jouent tous les jours avec la musique. Éloignez le téléphone de vos oreilles, arrêtez en cas de distorsion et ne l’utilisez pas sur un haut-parleur déjà endommagé.',
      },
      {
        q: 'Combien de fois dois-je lancer le son ?',
        a: 'Un cycle de 60 secondes suffit généralement. Si le son reste étouffé, essuyez la grille et répétez 2 ou 3 fois.',
      },
      {
        q: 'Est-ce identique au raccourci Water Eject sur Apple Watch ?',
        a: 'L’idée est proche (un son grave à plein volume), mais pour les téléphones, tablettes et ordinateurs dans le navigateur. Sur l’Apple Watch, utilisez sa fonction intégrée « Water Lock » : ce site ne peut pas jouer de son sur la montre.',
      },
      {
        q: 'Faut-il installer une application ?',
        a: 'Non. Tout fonctionne directement en ligne dans votre navigateur web sans compte ni téléchargement.',
      },
    ],
  },
  de: {
    title: 'Lautsprecher Reparieren: Wasser Auswerfen & Lautsprecher Reinigen',
    description:
      'Kostenloses Tool zum Wasser Auswerfen und Lautsprecher Reinigen für iPhone und Android mit 165 Hz Schallwellen in 60 Sekunden.',
    keywords: [
      'Lautsprecher reparieren',
      'Wasser auswerfen',
      'Wasser aus Handy Lautsprecher entfernen',
      'Lautsprecher reinigen',
      'Wasser auswerfen Ton',
      'Wasser auswerfen Kurzbefehl',
      'Handy Lautsprecher klingt dumpf',
    ],
    canonicalPath: '/de',
    articleHeading: 'Handy-Lautsprecher reparieren und Wasser mit 165-Hz-Schallwellen entfernen',
    articleIntro:
      'Smartphone ins Wasser gefallen oder im Regen nass geworden? Wenn Flüssigkeit in das Lautsprechergitter gelangt, hält die Oberflächenspannung Wassertropfen fest. Das führt zu gedämpftem Klang und Verzerrungen. Fix The Speaker ist ein kostenloses Online-Tool, das mit 165-Hz-Schallwellen Wasser und Schmutz in 60 Sekunden aus dem Lautsprecher drückt.',
    sections: [
      {
        heading: 'Die Physik des Wasser-Auswurfs: Wie 165-Hz-Schallwellen wirken',
        paragraphs: [
          'Smartphone-Lautsprecher nutzen eine ultradünne Membran. Bei 165 Hz arbeitet diese Membran in ihrer mechanischen Resonanz mit maximalem Hub.',
          'Die erzeugten Rechteckwellen erzeugen starke Luftdruckstöße hinter dem Gitter, die gefangene Wassertropfen durch die mikroskopischen Öffnungen herausdrücken.',
        ],
      },
      {
        heading: 'Wasser Auswerfen vs. Staub Reinigen: Die richtige Frequenz wählen',
        paragraphs: [
          'Unterschiedliche Verunreinigungen erfordern angepasste Frequenzen:',
        ],
        listType: 'ul',
        listItems: [
          'Wasser-Auswurf-Modus (165 Hz Bass-Impuls): Ideal nach Wasserkontakt für maximale Luftverdrängung.',
          'Staub-Reinigungs-Modus (2,5 kHz bis 14,5 kHz Turbo-Sweep): Löst tiefsitzenden Hosentaschenstaub und Sand mit hochfrequenten Mikrovibrationen.',
          'Lautsprecher-Test (Stereo-Diagnose): Testet den linken und rechten Kanal separat zur Überprüfung der Klangqualität.',
        ],
      },
      {
        heading: 'Schritt-für-Schritt-Anleitung für iPhone und Android',
        paragraphs: [
          'Befolgen Sie diese Schritte für das beste Ergebnis:',
        ],
        listType: 'ol',
        listItems: [
          'Schutzhülle abnehmen, um den Lautsprecher nicht zu blockieren.',
          'Smartphone mit dem Lautsprecher nach unten über ein Tuch halten.',
          'Lautstärke auf 100% stellen.',
          'Auswurf starten und 60 Sekunden laufen lassen.',
          'Ausgetretene Tropfen abwischen und mit dem Lautsprecher-Test prüfen.',
        ],
      },
      {
        heading: 'Warum Reis, Föhn und Nadeln gefährlich sind',
        paragraphs: [
          'Reisstärke verklebt das Gitter dauerhaft.',
          'Föhnhitze beschädigt die internen Dichtungen und drückt Feuchtigkeit tiefer ins Gehäuse.',
          'Nadeln durchstechen die wasserfeste IP68-Membran. Ein Ton kommt ohne Einführen von Gegenständen aus und ist daher weniger invasiv.',
        ],
      },
      {
        heading: 'Universelle Kompatibilität',
        paragraphs: [
          'Funktioniert in aktuellen Browsern auf iPhone 16/15/14/13/12, Samsung Galaxy, Google Pixel, Xiaomi, iPad und Laptops. (Die Apple Watch kann Web-Audio nicht über ihren Lautsprecher abspielen; nutze dort die integrierte Wassersperre (Water Lock).)',
        ],
      },
    ],
    faqs: [
      {
        q: 'Wie funktioniert der Wasser-Auswurf-Ton?',
        a: 'Er bringt die Lautsprechermembran bei 165 Hz in maximale Schwingung, sodass gezielte Luftdruckwellen das Wasser aus dem Gitter pressen.',
      },
      {
        q: 'Ist die Anwendung sicher für mein Smartphone?',
        a: '165 Hz ist ein gewöhnlicher Basston, den Handy-Lautsprecher täglich bei Musik wiedergeben. Halte das Gerät vom Ohr fern, stoppe bei Verzerrungen und verwende es nicht bei bereits beschädigten Lautsprechern.',
      },
      {
        q: 'Wie oft sollte der Ton abgespielt werden?',
        a: 'Ein Durchgang von 60 Sekunden reicht meistens. Bei hartnäckiger Feuchtigkeit 2–3 Mal wiederholen.',
      },
      {
        q: 'Muss eine App installiert werden?',
        a: 'Nein, das Tool läuft vollständig kostenlos und datensicher im Webbrowser.',
      },
    ],
  },
  pt: {
    title: 'Consertar Alto-Falante: Ejetar Água e Limpar Poeira do Celular',
    description:
      'Ferramenta grátis para consertar o alto-falante do iPhone e Android. Som de 165 Hz para ejetar água e tirar poeira do celular em 60 segundos.',
    keywords: [
      'consertar alto-falante',
      'ejetar agua',
      'como tirar agua do alto-falante do iphone',
      'limpar poeira do alto-falante',
      'som para tirar agua do celular',
      'atalho ejetar agua',
      'som abafado celular agua',
    ],
    canonicalPath: '/pt',
    articleHeading: 'Como consertar o alto-falante do celular e ejetar água com frequências sonoras',
    articleIntro:
      'Seu celular caiu na água, na piscina ou pegou chuva e o som ficou abafado ou chiando? As gotas presas na grade impedem a passagem do ar. Fix The Speaker é uma ferramenta online gratuita que reproduz um som de 165 Hz para expulsar a água e limpar a poeira em 60 segundos sem instalar nada.',
    sections: [
      {
        heading: 'Como o som de 165 Hz ejeta a água do alto-falante',
        paragraphs: [
          'O alto-falante do smartphone move o ar por meio de uma membrana vibratória. Gotas de líquido ficam retidas nos orifícios pela tensão superficial.',
          'Ao emitir uma onda quadrada de 165 Hz, a membrana atinge seu deslocamento mecânico máximo, empurrando as gotas para fora por meio de pulsos de pressão de ar.',
        ],
      },
      {
        heading: 'Ejetar Água vs Limpar Poeira: Qual modo escolher?',
        paragraphs: [
          'Diferentes problemas exigem diferentes frequências sonoras:',
        ],
        listType: 'ul',
        listItems: [
          'Modo Ejetar Água (165 Hz Graves Potentes): Desenvolvido para expulsar líquidos após chuva, piscina ou suor.',
          'Modo Limpar Poeira (2,5 kHz a 14,5 kHz Varredura Turbo): Vibrações agudas que soltam fiapos de bolso e areia.',
          'Modo Testar Alto-Falante (Estéreo): Verifica os canais esquerdo e direito para garantir que o som voltou ao normal.',
        ],
      },
      {
        heading: 'Passo a passo para recuperar o som do seu celular',
        paragraphs: [
          'Siga estes passos simples:',
        ],
        listType: 'ol',
        listItems: [
          'Tire a capa de proteção do celular.',
          'Segure o aparelho com o alto-falante virado para baixo sobre um pano seco.',
          'Coloque o volume de mídia em 100%.',
          'Inicie a ejeção e aguarde os 60 segundos.',
          'Seque as gotas expelidas e faça o teste de som.',
        ],
      },
      {
        heading: 'Por que não usar arroz nem secador de cabelo',
        paragraphs: [
          'O arroz solta pó que vira uma pasta e entope o alto-falante permanentemente.',
          'O secador derrete a vedação de borracha impermeável do celular e empurra a umidade para a placa-mãe.',
          'As ondas sonoras são um método não invasivo: apenas deslocam o ar para empurrar a água para fora.',
        ],
      },
      {
        heading: 'Compatibilidade com todos os dispositivos',
        paragraphs: [
          'Funciona no iPhone 16/15/14/13/12, Samsung Galaxy, Motorola, Xiaomi, iPad e caixas de som Bluetooth. (O Apple Watch não reproduz áudio da web no próprio alto-falante; use o recurso integrado Water Lock.)',
        ],
      },
    ],
    faqs: [
      {
        q: 'Como o som para tirar água do celular funciona?',
        a: 'Ele reproduz um tom de 165 Hz que empurra a água presa na grade acústica por meio de pressão de ar gerada pela vibração da membrana.',
      },
      {
        q: 'É seguro para o meu celular?',
        a: '165 Hz é uma nota grave comum que os alto-falantes do celular tocam todos os dias com música. Mantenha o aparelho longe dos ouvidos, pare se ouvir distorção e não use em um alto-falante já danificado.',
      },
      {
        q: 'Quantas vezes devo executar o som?',
        a: 'Um ciclo de 60 segundos resolve na maioria dos casos. Se ainda estiver abafado, repita 2 ou 3 vezes.',
      },
      {
        q: 'Preciso baixar algum aplicativo?',
        a: 'Não. Funciona diretamente no seu navegador de internet sem precisar baixar nada.',
      },
    ],
  },
  ko: {
    title: '스피커 물빼기: 스마트폰 스피커 물 빼는 소리 & 먼지 청소',
    description:
      '아이폰 및 갤럭시 스피커 물빼기 무료 웹 도구. 165Hz 특수 음파로 스마트폰 스피커의 물과 먼지를 60초 만에 완벽 배출.',
    keywords: [
      '스피커 물빼기',
      '스마트폰 스피커 물빼기',
      '아이폰 스피커 물빼기',
      '스피커 물 빼는 소리',
      '스피커 먼지 청소',
      '스피커 먹먹함 해결',
      '물빼기 단축어',
      '핸드폰 물빼기 소리',
    ],
    canonicalPath: '/ko',
    articleHeading: '165Hz 음파 사운드로 스마트폰 스피커 물빼기 및 먹먹한 소리 해결 방법',
    articleIntro:
      '스마트폰이 물에 빠졌거나 비에 맞아 스피커 소리가 작아지고 먹먹해지셨나요? Fix The Speaker는 별도의 어플 설치 없이 브라우저에서 165Hz 펄스 음파를 재생하여 스피커 망에 맺힌 물방울을 60초 만에 밀어내는 무료 웹 유틸리티입니다.',
    sections: [
      {
        heading: '스피커 물빼기 소리의 원리 (165Hz 사각파 진동)',
        paragraphs: [
          '스피커 그릴에 들어간 물방울은 표면장력으로 인해 촘촘한 구멍 사이에 머물러 소리의 전달을 차단합니다.',
          '165Hz 주파수의 강력한 진동은 스피커 진동판을 최대로 움직여 강한 공기압을 발생시킵니다. 이 압력이 물방울을 스피커 외부로 밀어냅니다.',
        ],
      },
      {
        heading: '물빼기 모드 vs 먼지 청소 모드 비교',
        paragraphs: [
          '증상에 따라 알맞은 모드를 선택하세요:',
        ],
        listType: 'ul',
        listItems: [
          '물빼기 모드 (165Hz 중저음 펄스): 물에 빠졌을 때 수분을 밖으로 밀어내는 최적의 주파수입니다.',
          '먼지 청소 모드 (2.5kHz ~ 14.5kHz 고주파 스윕): 주머니 보풀과 미세먼지를 털어내는 고주파 진동을 발생시킵니다.',
          '스피커 테스트 모드 (좌우 진단): 소리가 정상적으로 맑게 나오는지 좌우 밸런스를 점검합니다.',
        ],
      },
      {
        heading: '스피커 물빼기 효과를 높이는 4단계 방법',
        paragraphs: [
          '다음 단계대로 진행하시면 물이 가장 잘 빠집니다:',
        ],
        listType: 'ol',
        listItems: [
          '스마트폰 케이스를 분리합니다.',
          '스피커 구멍이 아래를 향하도록 휴지나 수건 위에 수직으로 세웁니다.',
          '미디어 음량을 100% 최대로 올립니다.',
          '물빼기 버튼을 누르고 60초 동안 소리가 끝나기를 기다립니다.',
          '흘러나온 물기를 닦아내고 스피커 테스트로 확인합니다.',
        ],
      },
      {
        heading: '쌀통에 넣기, 드라이기, 바늘 사용이 위험한 이유',
        paragraphs: [
          '쌀가루가 기기 안으로 들어가 물과 섞여 굳으면 스피커가 영구 손상됩니다.',
          '드라이기의 뜨거운 열기는 방수 실링을 녹이고 물을 내부 메인보드로 밀어 넣습니다.',
          '바늘이나 이쑤시개는 방수 메시를 찢을 수 있습니다. 음파 배출은 아무것도 넣지 않아도 되는 방법입니다.',
        ],
      },
      {
        heading: '모든 기기 호환',
        paragraphs: [
          '아이폰 16/15/14/13, 갤럭시 S24/S23, 아이패드, 애플워치, 노트북 등 모든 스마트 기기에서 작동합니다.',
        ],
      },
    ],
    faqs: [
      {
        q: '스피커 물 빼는 소리는 정말 효과가 있나요?',
        a: '네. 165Hz 음파가 스피커 진동판을 강하게 털어내어 그릴에 낀 물방울을 공기압으로 밀어냅니다.',
      },
      {
        q: '스마트폰 스피커에 무리가 가지 않나요?',
        a: '165Hz는 음악에서도 평소에 재생되는 저음입니다. 최대 음량일 때는 귀에서 떨어뜨리고, 소리가 찢어지면 멈추세요. 이미 고장 난 스피커에는 사용하지 마세요.',
      },
      {
        q: '소리는 몇 번이나 재생해야 하나요?',
        a: '대부분 1회(60초)로 해결되며, 물기가 많이 남아있으면 2~3회 반복하세요.',
      },
      {
        q: '어플을 설치해야 하나요?',
        a: '아닙니다. 사파리나 크롬 브라우저에서 바로 무료로 사용 가능합니다.',
      },
    ],
  },
  it: {
    title: 'Riparare Altoparlante: Espellere Acqua e Pulire Polvere dal Telefono',
    description:
      "Strumento online gratuito per riparare l'altoparlante di iPhone e Android. Suono a 165 Hz per espellere acqua e pulire la polvere in 60 secondi.",
    keywords: [
      'riparare altoparlante',
      'espellere acqua',
      'come togliere l acqua dall altoparlante iphone',
      'pulire polvere altoparlante',
      'suono per espellere acqua',
      'comando rapido espelli acqua',
      'altoparlante telefono gracchia',
    ],
    canonicalPath: '/it',
    articleHeading: "Come riparare l'altoparlante del telefono ed espellere l'acqua con il suono",
    articleIntro:
      "Telefono caduto in acqua o bagnato dalla pioggia? Le gocce d'acqua intrappolate nella retina soffocano il volume e fanno gracchiare l'audio. Fix The Speaker è uno strumento online gratuito che genera un'onda sonora a 165 Hz per espellere l'acqua e pulire la polvere in 60 secondi senza installare app.",
    sections: [
      {
        heading: "Come funziona il suono per espellere l'acqua a 165 Hz",
        paragraphs: [
          "L'altoparlante del telefono sposta l'aria mediante una membrana. L'acqua crea una barriera liquida sui fori della griglia.",
          "Fix The Speaker emette un'onda quadra a 165 Hz. A questa frequenza la membrana raggiunge la massima escursione, spingendo le gocce fuori dalla griglia con getti d'aria continui.",
        ],
      },
      {
        heading: 'Modalità Espelli Acqua vs Pulisci Polvere',
        paragraphs: [
          'Ogni problema richiede la giusta frequenza acustica:',
        ],
        listType: 'ul',
        listItems: [
          'Modalità Espelli Acqua (165 Hz Bassi Potenti): Progettata per espellere liquidi dopo pioggia o cadute in acqua.',
          'Modalità Pulisci Polvere (Sweep 2,5 kHz - 14,5 kHz): Micro-vibrazioni ad alta frequenza per staccare polvere e lanugine.',
          'Modalità Test Altoparlante (Stereo): Verifica i canali sinistro e destro per assicurarsi che il volume sia tornato al 100%.',
        ],
      },
      {
        heading: 'Guida passo-passo per il tuo iPhone o Android',
        paragraphs: [
          'Segui questi passaggi:',
        ],
        listType: 'ol',
        listItems: [
          'Rimuovi la cover di protezione.',
          "Tieni il telefono con l'altoparlante rivolto verso il basso sopra un panno asciutto.",
          'Imposta il volume al 100%.',
          "Avvia l'espulsione e attendi 60 secondi.",
          'Asciuga le gocce e verifica con il test altoparlante.',
        ],
      },
      {
        heading: 'Perché evitare riso, asciugacapelli e spilli',
        paragraphs: [
          'L’amido di riso crea una pasta che ostruisce la griglia per sempre.',
          'Il calore del phon danneggia le guarnizioni impermeabili.',
          'Gli aghi possono forare la membrana IP68. Il suono non richiede di inserire nulla nell’altoparlante, quindi è meno invasivo.',
        ],
      },
      {
        heading: 'Compatibilità universale',
        paragraphs: [
          'Compatibile con iPhone 16/15/14/13/12, Samsung Galaxy, Google Pixel, Xiaomi, iPad e computer. (Apple Watch non può riprodurre audio web dal proprio altoparlante: usa la funzione integrata Water Lock.)',
        ],
      },
    ],
    faqs: [
      {
        q: "Come funziona il suono per espellere l'acqua?",
        a: "Fa vibrare la membrana dell'altoparlante a 165 Hz per spingere l'acqua fuori dai fori della griglia con potenti getti d'aria.",
      },
      {
        q: 'È sicuro per il telefono?',
        a: '165 Hz è una normale nota bassa che gli altoparlanti riproducono ogni giorno con la musica. Tieni il telefono lontano dalle orecchie, fermati se senti distorsione e non usarlo su un altoparlante già danneggiato.',
      },
      {
        q: 'Quante volte devo eseguirlo?',
        a: 'Un ciclo di 60 secondi è sufficiente nella maggior parte dei casi. Ripeti 2 o 3 volte se necessario.',
      },
      {
        q: 'Bisogna installare applicazioni?',
        a: 'No, funziona direttamente nel browser web senza registrazione.',
      },
    ],
  },
};
