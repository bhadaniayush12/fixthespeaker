import type { DeviceData, HowToStep, DeviceFAQ } from '../data/devices';
import type { SupportedLang } from './ui';

interface LocalizedDeviceContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroHeading: string;
  heroSubtitle: string;
  badge: string;
  grilleSpecs: string;
  acousticFreq: string;
  recommendedDuration: string;
  overview: string[];
  steps: HowToStep[];
  technicalTips: string[];
  faqs: DeviceFAQ[];
}

// -------------------------------------------------------------
// Language-Specific Content Builders
// -------------------------------------------------------------

function buildSpanish(device: DeviceData): LocalizedDeviceContent {
  const isEarbuds = device.category === 'earbuds';
  const isWatch = device.category === 'smartwatch';
  const isTablet = device.category === 'tablet';
  const isLaptop = device.category === 'laptop';

  const steps: HowToStep[] = isEarbuds
    ? [
        {
          name: 'Retira los auriculares de tus oídos',
          text: `Sácate ambos auriculares ${device.shortName} antes de iniciar. Las frecuencias de sonido de alto volumen nunca deben reproducirse dentro del canal auditivo.`,
        },
        {
          name: 'Quita las almohadillas de silicona',
          text: 'Si tienen almohadillas de silicona, retíralas para que la malla acústica negra quede expuesta al aire libre.',
        },
        {
          name: 'Coloca la malla del altavoz hacia abajo',
          text: `Apoya los ${device.shortName} con las aberturas de los altavoces orientadas hacia abajo sobre una servilleta o paño seco.`,
        },
        {
          name: 'Reproduce el tono de expulsión de agua 165 Hz',
          text: 'Asegúrate de que el audio se reproduzca por los auriculares conectados, sube el volumen al 100% y deja correr el ciclo de 60 segundos.',
        },
        {
          name: 'Limpia la malla y comprueba el estéreo',
          text: 'Usa el modo Limpiar Polvo para aflojar restos de cera seca, cepilla suavemente con un cepillo de cerdas suaves y prueba el sonido.',
        },
      ]
    : isWatch
    ? [
        {
          name: 'Quítate el reloj de la muñeca',
          text: `Desabrocha la correa de tu ${device.shortName} para que las cavidades acústicas laterales no queden obstruidas.`,
        },
        {
          name: 'Orienta la rejilla del altavoz hacia abajo',
          text: 'Sostén el reloj con las ranuras de los altavoces apuntando hacia abajo sobre una toalla limpia y seca.',
        },
        {
          name: 'Sube el volumen al 100%',
          text: 'Ajusta el volumen multimedia al máximo para lograr la mayor excursión del diafragma acústico.',
        },
        {
          name: 'Inicia el tono de expulsión de 165 Hz',
          text: `Toca Iniciar Expulsión y deja que el sonido a 165 Hz vibre durante los 60 segundos completos en tu ${device.shortName}.`,
        },
        {
          name: 'Seca el exterior y prueba el micrófono/altavoz',
          text: 'Limpia las gotas expulsadas con un paño de microfibra y verifica la claridad de las respuestas de voz.',
        },
      ]
    : isTablet || isLaptop
    ? [
        {
          name: 'Desconecta cargadores y accesorios',
          text: `Desconecta auriculares, cables USB-C y cargadores de tu ${device.shortName}.`,
        },
        {
          name: 'Sube el volumen multimedia al 100%',
          text: 'Ajusta el volumen del sistema al máximo para generar suficiente presión acústica.',
        },
        {
          name: 'Inclina el dispositivo hacia las rejillas',
          text: 'Orienta el dispositivo de forma que las aberturas de los altavoces miren hacia abajo sobre un paño seco.',
        },
        {
          name: 'Ejecuta el ciclo de expulsión de agua a 165 Hz',
          text: 'Inicia la herramienta y permite que las vibraciones de baja frecuencia empujen la humedad fuera de las cámaras sonoras.',
        },
        {
          name: 'Seca el contorno y prueba el estéreo',
          text: 'Limpia las rejillas y ejecuta la Prueba de Altavoz para verificar el balance de los canales izquierdo y derecho.',
        },
      ]
    : [
        {
          name: 'Desconecta cables y auriculares Bluetooth',
          text: `Desconecta cables de carga y auriculares inalámbricos para que el audio suene por los altavoces de tu ${device.shortName}.`,
        },
        {
          name: 'Sube el volumen multimedia al 100%',
          text: 'Usa los botones laterales para ajustar el volumen multimedia al máximo y lograr la máxima presión de aire.',
        },
        {
          name: 'Sostén el teléfono boca abajo',
          text: `Mantén tu ${device.shortName} en posición vertical con el altavoz inferior apuntando hacia una toalla o paño seco.`,
        },
        {
          name: 'Inicia el sonido de expulsión de agua a 165 Hz',
          text: 'Toca Iniciar Expulsión y deja sonar el tono de 60 segundos mientras das suaves golpes hacia abajo contra la palma de tu mano.',
        },
        {
          name: 'Seca la rejilla y prueba el sonido',
          text: 'Limpia el exterior con un paño de microfibra y ejecuta la Prueba de Altavoz para comprobar la claridad estéreo.',
        },
      ];

  const technicalTips = isEarbuds
    ? [
        `Nunca sumerjas tus ${device.shortName} en agua ni los laves bajo el grifo.`,
        'Asegúrate de que el estuche de carga y los auriculares estén 100% secos antes de guardarlos.',
        'Nunca utilices agujas ni objetos punzantes para limpiar la malla acústica, ya que romperías la membrana interna.',
      ]
    : isWatch
    ? [
        `Enjuaga tu ${device.shortName} con agua dulce tibia tras nadar en el mar o piscinas con cloro antes de expulsar el agua.`,
        'Nunca insertes alfileres en los orificios del micrófono ni en la ranura del altavoz.',
        'No coloques el reloj en el cargador magnético si aún quedan gotas visibles.',
      ]
    : [
        'Si tu teléfono muestra una alerta de "Líquido detectado en el puerto USB", no conectes el cable de carga hasta que esté totalmente seco.',
        'No uses secadores de pelo con aire caliente; el calor excesivo degrada los sellos adhesivos impermeables.',
        'Nunca introduzcas palillos ni clips en los orificios de los altavoces.',
      ];

  const faqs: DeviceFAQ[] = [
    {
      q: `¿Cómo expulsa el sonido de 165 Hz el agua de ${device.shortName}?`,
      a: `La frecuencia de 165 Hz coincide con la resonancia mecánica de las microcámaras de altavoz. Al vibrar intensamente, desplaza ráfagas de aire que rompen la tensión superficial del agua atrapada en la malla acústica de ${device.shortName}, expulsándola hacia el exterior.`,
    },
    {
      q: `¿Es seguro reproducir este tono en ${device.shortName}?`,
      a: `Sí, es 100% seguro. El sonido funciona estrictamente dentro de los límites de potencia y frecuencia de audio diseñados para los transductores de ${device.name}.`,
    },
    {
      q: `¿Por qué el altavoz de mi ${device.shortName} suena apagado tras mojarse?`,
      a: `Al entrar agua en la rejilla, la tensión superficial forma una película líquida que bloquea la vibración de las ondas sonoras. Al expulsar el agua, el sonido recupera su volumen y nitidez originales.`,
    },
    {
      q: `¿Cuántos ciclos de limpieza debo ejecutar?`,
      a: `Para salpicaduras leves, un ciclo de 60 segundos suele ser suficiente. Para una mayor exposición, ejecuta de 2 a 3 ciclos consecutivos manteniendo el altavoz boca abajo.`,
    },
  ];

  return {
    metaTitle: `Arreglar altavoz de ${device.name}: Sonido para expulsar agua y limpiar audio`,
    metaDescription: `Expulsa agua del altavoz de ${device.name} al instante. El tono de 165 Hz elimina el audio apagado, limpia los puertos y rejillas en 60s.`,
    eyebrow: `Expulsión de Agua y Diagnóstico para ${device.shortName}`,
    heroHeading: `Arreglar altavoz de ${device.shortName} y expulsar agua`,
    heroSubtitle: `Reproduce el pulso acústico de 165 Hz para eliminar el sonido distorsionado y expulsar el agua de los altavoces de ${device.name} sin instalar apps.`,
    badge: `Expulsor de Agua 165 Hz · ${device.shortName}`,
    grilleSpecs: isEarbuds
      ? 'Malla acústica de microfiltro y puertos de alivio de presión'
      : isWatch
      ? 'Ranuras acústicas laterales con membrana resistente al agua'
      : isTablet || isLaptop
      ? 'Rejillas de altavoces estéreo multicanal con microperforaciones'
      : 'Ranuras inferiores de precisión y microrejilla de auricular superior',
    acousticFreq: 'Onda cuadrada resonante a 165 Hz + barrido armónico',
    recommendedDuration: '60 a 120 segundos (1 a 2 ciclos)',
    overview: [
      `El ${device.name} cuenta con protección ${device.ipRating}, pero la tensión superficial del agua suele atrapar gotas microscópicas dentro de la rejilla acústica tras exponerse a lluvia, sudor o agua. Esto causa un audio sordo y distorsionado.`,
      `Fix The Speaker genera ondas sonoras de resonancia a 165 Hz directamente en tu navegador para desalojar las gotas de agua atrapadas y limpiar los altavoces de forma rápida y segura.`,
    ],
    steps,
    technicalTips,
    faqs,
  };
}

function buildJapanese(device: DeviceData): LocalizedDeviceContent {
  const isEarbuds = device.category === 'earbuds';
  const isWatch = device.category === 'smartwatch';
  const isTablet = device.category === 'tablet';
  const isLaptop = device.category === 'laptop';

  const steps: HowToStep[] = isEarbuds
    ? [
        {
          name: 'イヤホンを耳から外す',
          text: `水抜きを開始する前に、必ず両耳の${device.shortName}を外してください。大音量の周波数スイープ音を耳元で直接鳴らさないでください。`,
        },
        {
          name: 'イヤーピースを取り外す',
          text: 'シリコンイヤーピースが付いている場合は外し、スピーカーメッシュを露出させます。',
        },
        {
          name: 'スピーカー面を下にして置く',
          text: `乾いたタオルやティッシュの上に、${device.shortName}のスピーカー開口部を下に向けて置きます。`,
        },
        {
          name: '165Hz水抜き音を再生する',
          text: '接続されたイヤホンから音が出ることを確認し、音量を100%にして60秒間の水抜きサイクルを実行します。',
        },
        {
          name: 'メッシュを払いステレオ診断を行う',
          text: 'ホコリ掃除モードで固着した耳垢を浮かせ、柔らかい乾いたブラシで優しく払い落として動作確認します。',
        },
      ]
    : isWatch
    ? [
        {
          name: 'ウォッチを手首から外す',
          text: `スピーカーの開口部がふさがれないよう、${device.shortName}のバンドを外して手首から外します。`,
        },
        {
          name: '側面のスピーカー穴を下に向ける',
          text: 'ウォッチ側面のスピーカー穴を下に向けて乾いた布の上に構えます。',
        },
        {
          name: '接続端末の音量を100%にする',
          text: 'スピーカー振動板を最大限に動かすため、音量を最大に設定します。',
        },
        {
          name: '165Hz水抜き音を再生する',
          text: `「水抜きを開始」をタップし、${device.shortName}から60秒間連続してパルス音を鳴らします。`,
        },
        {
          name: '水分を拭き取りマイク・スピーカーを確認',
          text: '飛び出た水滴を拭き取り、Siriや音声通話のクリアさを確認します。',
        },
      ]
    : isTablet || isLaptop
    ? [
        {
          name: '充電ケーブルや周辺機器を外す',
          text: `${device.shortName}からUSBケーブルやイヤホンを外します。`,
        },
        {
          name: 'システム音量を100%にする',
          text: '十分な音圧を発生させるため、音量を最大にします。',
        },
        {
          name: 'スピーカー部を下に向ける',
          text: '側部や下部のスピーカー穴が下を向くよう、タオル等の上で傾けます。',
        },
        {
          name: '165Hz水抜き音を実行する',
          text: '水抜き音を再生し、低周波振動で内部の湿気を押し出します。',
        },
        {
          name: '周囲を拭き取りステレオテストを行う',
          text: 'グリルを拭き、左右スピーカーの音質バランスを確認します。',
        },
      ]
    : [
        {
          name: 'ケーブル・Bluetooth機器を外す',
          text: `${device.shortName}の内蔵スピーカーから音が出るよう、充電ケーブルやイヤホンを外します。`,
        },
        {
          name: 'メディア音量を100%にする',
          text: '側面の音量ボタンでメディア音量を最大（100%）に設定します。',
        },
        {
          name: 'スピーカーを下に向けて構える',
          text: `本体下部のスピーカー開口部を下に向けて、乾いたタオルの上で縦に持ちます。`,
        },
        {
          name: '165Hz水抜き音を再生する',
          text: '水抜きボタンをタップし、60秒間のパルス音を鳴らしながら、手のひらで軽くトントンと振動を与えます。',
        },
        {
          name: '水分を拭き取りスピーカーテストを行う',
          text: '拭き取った後、スピーカーテストでクリアな音質が戻ったか確認します。',
        },
      ];

  const technicalTips = isEarbuds
    ? [
        `${device.shortName}を水道の流水で丸洗いしないでください。`,
        'イヤホンと充電ケースが完全に乾くまで、ケースに収納して充電しないでください。',
        '針や爪楊枝などの鋭利なものでメッシュを突かないでください。内部の振動膜が破れます。',
      ]
    : isWatch
    ? [
        `海水やプールで使用した後は、真水で軽くすすいで塩分を落としてから水抜きを実行してください。`,
        'マイク穴やスピーカー穴にクリップ等を差し込まないでください。',
        '水分が残っている状態で充電器に乗せないでください。',
      ]
    : [
        '「充電ポートで液体が検出されました」等の警告が出ている場合は、完全に乾くまで充電ケーブルを挿さないでください。',
        'ドライヤーの熱風は内部の防水粘着シールを劣化させるため使用しないでください。',
        'スピーカー穴に綿棒や金属ピンを差し込まないでください。',
      ];

  const faqs: DeviceFAQ[] = [
    {
      q: `165Hzの音波でなぜ${device.shortName}から水が抜けるのですか？`,
      a: `165Hzの周波数はスマホ・イヤホンの小型スピーカーチャンバーの共振周波数に最適化されています。振動板が激しく往復運動することで強い空気圧が発生し、メッシュに張り付いた水の表面張力を破壊して水滴を押し出します。`,
    },
    {
      q: `この音を${device.shortName}で鳴らしても安全ですか？`,
      a: `はい、100%安全です。${device.name}のスピーカーとアンプ回路の許容定格範囲内で動作するよう設計されています。`,
    },
    {
      q: `水に濡れた後、音がこもる原因は何ですか？`,
      a: `スピーカーの保護メッシュに水滴が膜を張り、振動板の動きを抑えてしまうためです。音波で水滴を排出することで元のクリアな音質に戻ります。`,
    },
    {
      q: `何回実行すればいいですか？`,
      a: `軽い濡れであれば60秒（1回）で完了します。水没等で水分が多い場合は、スピーカーを下に向けて2〜3回繰り返してください。`,
    },
  ];

  return {
    metaTitle: `${device.name}のスピーカー水抜き音 & ホコリ掃除ツール`,
    metaDescription: `${device.name}のスピーカーに入った水分を165Hzの特殊音波で強力に排出。こもった音や下部スピーカーグリル・上部受話口の水分を60秒で除去します。`,
    eyebrow: `${device.shortName} スピーカー水抜き & 診断`,
    heroHeading: `${device.shortName} スピーカーの水抜き & こもり解消`,
    heroSubtitle: `アプリ不要で165Hzの特殊音波パルスを再生し、${device.name}のスピーカー内部に詰まった水滴を押し出しクリアな音質を復元します。`,
    badge: `165 Hz ${device.shortName} 水抜き音`,
    grilleSpecs: isEarbuds
      ? '微細音響メッシュ＆気圧調整ベント'
      : isWatch
      ? '耐水メンブレン付き側面音響スロット'
      : isTablet || isLaptop
      ? '精密加工マルチスピーカーグリル'
      : '高精度切削ボトム音響ポート＆上部レシーバーマイクロメッシュ',
    acousticFreq: '165 Hz 低周波共振矩形波 ＋ 高調波スイープ',
    recommendedDuration: '60〜120秒（1〜2サイクル）',
    overview: [
      `${device.name}は${device.ipRating}の防水仕様を備えていますが、雨や汗、水没後にスピーカーの微細メッシュ内に水滴が表面張力で閉じ込められ、音がこもったり小さくなったりします。`,
      `Fix The Speakerはブラウザ上で高振幅の165Hz共振音波を直接生成し、スピーカー内の水滴を安全かつ迅速に排出します。`,
    ],
    steps,
    technicalTips,
    faqs,
  };
}

function buildFrench(device: DeviceData): LocalizedDeviceContent {
  const isEarbuds = device.category === 'earbuds';
  const isWatch = device.category === 'smartwatch';
  const isTablet = device.category === 'tablet';
  const isLaptop = device.category === 'laptop';

  const steps: HowToStep[] = isEarbuds
    ? [
        {
          name: 'Retirez les écouteurs de vos oreilles',
          text: `Enlevez vos ${device.shortName} avant de démarrer. Les sons à fort volume ne doivent jamais être joués directement dans le conduit auditif.`,
        },
        {
          name: 'Retirez les embouts en silicone',
          text: 'Retirez les embouts en silicone pour exposer directement la grille acoustique noire à l’air libre.',
        },
        {
          name: 'Placez la grille du haut-parleur vers le bas',
          text: `Déposez les ${device.shortName} avec la grille acoustique orientée vers le bas sur un mouchoir sec ou un chiffon.`,
        },
        {
          name: 'Lancez l’éjection d’eau à 165 Hz',
          text: 'Assurez-vous que le son sort par les écouteurs, montez le volume à 100% et laissez tourner le cycle de 60 secondes.',
        },
        {
          name: 'Brossez délicatement et testez le son',
          text: 'Activez le mode Nettoyer Poussière pour décoller le cérumen sec, brossez délicatement avec une brosse à dents souple et testez l’audio.',
        },
      ]
    : isWatch
    ? [
        {
          name: 'Retirez la montre de votre poignet',
          text: `Détachez le bracelet de votre ${device.shortName} pour que les cavités du haut-parleur soient dégagées.`,
        },
        {
          name: 'Orientez les ouvertures du haut-parleur vers le bas',
          text: 'Tenez la montre avec les fentes du haut-parleur dirigées vers le bas au-dessus d’un linge sec.',
        },
        {
          name: 'Réglez le volume à 100%',
          text: 'Montez le volume au maximum pour obtenir une excursion maximale de la membrane.',
        },
        {
          name: 'Lancez l’éjection d’eau à 165 Hz',
          text: `Appuyez sur Démarrer et laissez le son vibrer pendant 60 secondes sur votre ${device.shortName}.`,
        },
        {
          name: 'Séchez le boîtier et vérifiez le micro/haut-parleur',
          text: 'Essuyez les gouttes expulsées avec un chiffon en microfibre et vérifiez la clarté audio.',
        },
      ]
    : isTablet || isLaptop
    ? [
        {
          name: 'Débranchez chargeurs et accessoires',
          text: `Déconnectez tout câble ou casque branché sur votre ${device.shortName}.`,
        },
        {
          name: 'Réglez le volume système à 100%',
          text: 'Augmentez le volume au maximum dans vos réglages audio.',
        },
        {
          name: 'Inclinez l’appareil vers les grilles',
          text: 'Inclinez l’appareil pour que les fentes des haut-parleurs soient dirigées vers le bas sur un tissu sec.',
        },
        {
          name: 'Lancez le cycle d’éjection 165 Hz',
          text: 'Démarrez l’outil et laissez les vibrations acoustiques expulser l’humidité piégée.',
        },
        {
          name: 'Séchez et effectuez le test stéréo',
          text: 'Essuyez les grilles et lancez le Test Haut-Parleur pour vérifier l’équilibre des canaux.',
        },
      ]
    : [
        {
          name: 'Débranchez câbles et écouteurs Bluetooth',
          text: `Déconnectez les câbles et appareils audio Bluetooth pour que le son sorte par les haut-parleurs de votre ${device.shortName}.`,
        },
        {
          name: 'Montez le volume média à 100%',
          text: 'Utilisez les boutons latéraux pour régler le volume multimédia à son niveau maximal.',
        },
        {
          name: 'Tenez le téléphone orienté vers le bas',
          text: `Maintenez votre ${device.shortName} verticalement avec le haut-parleur inférieur pointé vers un chiffon propre et sec.`,
        },
        {
          name: 'Lancez le son d’éjection d’eau à 165 Hz',
          text: 'Appuyez sur Lancer l’Éjection et laissez tourner le son pendant 60 secondes en tapotant doucement le châssis contre votre paume.',
        },
        {
          name: 'Séchez la grille et lancez le test audio',
          text: 'Essuyez l’extérieur avec un chiffon doux, puis lancez le Test Haut-Parleur pour confirmer la clarté du son.',
        },
      ];

  const technicalTips = isEarbuds
    ? [
        `Ne plongez jamais vos ${device.shortName} sous l’eau courante.`,
        'Assurez-vous que les écouteurs et le boîtier sont 100% secs avant de les ranger.',
        'N’insérez pas d’objets pointus dans la grille pour ne pas percer la membrane.',
      ]
    : isWatch
    ? [
        `Rincez votre ${device.shortName} à l’eau douce après une baignade en mer ou en piscine avant d'éjecter l'eau.`,
        'N’insérez jamais d’épingles dans les micros ou les haut-parleurs.',
        'Ne posez pas la montre sur son chargeur si des gouttes sont visibles.',
      ]
    : [
        'Si votre smartphone affiche une notification de liquide dans le port USB-C/Lightning, ne branchez aucun câble avant séchage complet.',
        'N’utilisez pas de sèche-cheveux à air chaud ; la chaleur fragilise les joints d’étanchéité.',
        'N’insérez jamais d’épingles ou d’objets métalliques dans les trous du haut-parleur.',
      ];

  const faqs: DeviceFAQ[] = [
    {
      q: `Comment le son 165 Hz éjecte-t-il l’eau de ${device.shortName} ?`,
      a: `La fréquence de 165 Hz correspond à la résonance acoustique des micro-haut-parleurs. La membrane vibre à grande amplitude pour chasser l’eau piégée par la pression de l’air.`,
    },
    {
      q: `Ce son est-il sans danger pour ${device.shortName} ?`,
      a: `Oui, 100% sécurisé. Le son respecte scrupuleusement les spécifications des composants de ${device.name}.`,
    },
    {
      q: `Pourquoi le son est-il étouffé après être tombé dans l’eau ?`,
      a: `L’eau forme un film sur la grille par tension superficielle, bloquant la diffusion du son. L’éjection rétablit la clarté instantanément.`,
    },
    {
      q: `Combien de cycles faut-il lancer ?`,
      a: `1 cycle de 60 secondes suffit pour les éclaboussures. Lancez 2 à 3 cycles en cas d’immersion prolongée.`,
    },
  ];

  return {
    metaTitle: `Réparer le haut-parleur ${device.name} : Son pour éjecter l’eau`,
    metaDescription: `Éjectez l’eau du haut-parleur ${device.name} instantanément. La fréquence de 165 Hz débouche les grilles et élimine le son étouffé en 60s.`,
    eyebrow: `Éjection d’Eau & Diagnostic ${device.shortName}`,
    heroHeading: `Réparer le haut-parleur ${device.shortName} et éjecter l’eau`,
    heroSubtitle: `Jouez le son acoustique pulsé de 165 Hz pour déboucher le haut-parleur de ${device.name} et chasser l’eau sans aucune application.`,
    badge: `Éjection d’Eau 165 Hz · ${device.shortName}`,
    grilleSpecs: isEarbuds
      ? 'Grille acoustique micro-perforée et évents de décompression'
      : isWatch
      ? 'Fentes acoustiques latérales avec membrane étanche'
      : isTablet || isLaptop
      ? 'Grilles de haut-parleurs stéréo multi-canaux'
      : 'Ports acoustiques inférieurs usinés de précision et micro-grille supérieure',
    acousticFreq: 'Onde carrée résonante basse fréquence 165 Hz + balayage harmonique',
    recommendedDuration: '60 à 120 secondes (1 à 2 cycles)',
    overview: [
      `Le ${device.name} bénéficie d’un indice ${device.ipRating}, mais des gouttes d’eau restent souvent piégées dans la grille acoustique après une exposition à la pluie ou à l’eau.`,
      `Fix The Speaker génère des ondes sonores calibrées à 165 Hz dans votre navigateur pour chasser l’eau et nettoyer la grille en toute sécurité.`,
    ],
    steps,
    technicalTips,
    faqs,
  };
}

function buildGerman(device: DeviceData): LocalizedDeviceContent {
  const isEarbuds = device.category === 'earbuds';
  const isWatch = device.category === 'smartwatch';
  const isTablet = device.category === 'tablet';
  const isLaptop = device.category === 'laptop';

  const steps: HowToStep[] = isEarbuds
    ? [
        {
          name: 'Kopfhörer aus den Ohren nehmen',
          text: `Nehmen Sie beide ${device.shortName} aus den Ohren. Laute Frequenztöne dürfen niemals im Gehörgang abgespielt werden.`,
        },
        {
          name: 'Silikon-Aufsätze abnehmen',
          text: 'Entfernen Sie die Silikon-Ohrpolster, damit das Lautsprechergitter frei liegt.',
        },
        {
          name: 'Lautsprecheröffnung nach unten legen',
          text: `Legen Sie die ${device.shortName} mit der Gitteröffnung nach unten auf ein trockenes Tuch.`,
        },
        {
          name: '165-Hz-Wasser-Auswurf starten',
          text: 'Lautstärke auf 100% stellen und den 60-Sekunden-Auswurfton abspielen.',
        },
        {
          name: 'Gitter sanft bürsten & Audio testen',
          text: 'Mit dem Staubreiniger-Modus getrocknetes Ohrenschmalz lockern, mit einer weichen Bürste abwischen und testen.',
        },
      ]
    : isWatch
    ? [
        {
          name: 'Uhr vom Handgelenk nehmen',
          text: `Lösen Sie das Armband Ihrer ${device.shortName}, damit die seitlichen Lautsprecheröffnungen frei liegen.`,
        },
        {
          name: 'Lautsprecher nach unten halten',
          text: 'Halten Sie die Uhr mit den Lautsprecherschlitzen nach unten über ein Tuch.',
        },
        {
          name: 'Lautstärke auf 100% stellen',
          text: 'Maximale Lautstärke für die höchste Membranauslenkung einstellen.',
        },
        {
          name: '165-Hz-Schallimpuls abspielen',
          text: `Tippen Sie auf Auswurf Starten und lassen Sie den 165-Hz-Ton 60 Sekunden lang laufen.`,
        },
        {
          name: 'Gehäuse abtrocknen & testen',
          text: 'Austretendes Wasser abwischen und die Klangwiedergabe überprüfen.',
        },
      ]
    : isTablet || isLaptop
    ? [
        {
          name: 'Kabel & Zubehör trennen',
          text: `Trennen Sie Ladekabel und Kopfhörer von Ihrem ${device.shortName}.`,
        },
        {
          name: 'Systemlautstärke auf 100% erhöhen',
          text: 'Stellen Sie die Ausgabelautstärke auf das Maximum, um genügend Schalldruck zu erzeugen.',
        },
        {
          name: 'Gerät mit Lautsprechern nach unten neigen',
          text: 'Neigen Sie das Gerät so, dass die Lautsprecherschlitze nach unten auf ein trockenes Tuch zeigen.',
        },
        {
          name: '165-Hz-Wasser-Auswurf starten',
          text: 'Starten Sie den Ton, um die Feuchtigkeit durch Resonanzschwingungen aus den Kammern zu drücken.',
        },
        {
          name: 'Gitter abtrocknen & Stereo testen',
          text: 'Wischen Sie die Öffnungen ab und testen Sie die Audiowiedergabe.',
        },
      ]
    : [
        {
          name: 'Kabel & Bluetooth trennen',
          text: `Trennen Sie Ladekabel und Bluetooth-Kopfhörer, damit der Ton über die internen Lautsprecher Ihrer ${device.shortName} ausgegeben wird.`,
        },
        {
          name: 'Medienlautstärke auf 100% erhöhen',
          text: 'Nutzen Sie die Lautstärketasten, um die Medienlautstärke auf das Maximum zu stellen.',
        },
        {
          name: 'Gerät mit Lautsprecher nach unten halten',
          text: `Halten Sie Ihr ${device.shortName} senkrecht mit den unteren Lautsprecheröffnungen nach unten über ein trockenes Tuch.`,
        },
        {
          name: '165-Hz-Wasser-Auswurf starten',
          text: 'Tippen Sie auf Auswurf Starten und klopfen Sie das Gerät während des Tons leicht gegen den Handballen.',
        },
        {
          name: 'Gitter abtrocknen & Lautsprecher-Test durchführen',
          text: 'Trocknen Sie die Außenseite ab und prüfen Sie mit dem Lautsprecher-Test die Stereo-Kanäle.',
        },
      ];

  const technicalTips = isEarbuds
    ? [
        `Tauchen Sie Ihre ${device.shortName} niemals unter fließendes Wasser.`,
        'Ladecase und Kopfhörer vor dem Einsetzen vollständig trocknen lassen.',
        'Keine spitzen Gegenstände in das Lautsprechergitter einführen.',
      ]
    : isWatch
    ? [
        `Nach dem Schwimmen im Meer oder Pool mit Süßwasser abspülen, bevor Sie Wasser auswerfen.`,
        'Keine Nadeln in Mikrofon- oder Lautsprecheröffnungen stecken.',
        'Nicht auf das magnetische Ladegerät legen, wenn noch Tropfen sichtbar sind.',
      ]
    : [
        'Falls eine Meldung über Flüssigkeit im Ladeanschluss erscheint, warten Sie mit dem Laden, bis alles trocken ist.',
        'Verwenden Sie keine heiße Föhnluft, da Hitze die Klebedichtungen beschädigt.',
        'Führen Sie niemals Nadeln oder spitze Gegenstände in die Lautsprecheröffnungen ein.',
      ];

  const faqs: DeviceFAQ[] = [
    {
      q: `Wie schleudert der 165-Hz-Ton Wasser aus der ${device.shortName}?`,
      a: `Die 165-Hz-Schwingung bringt die Membran in maximale Bewegung. Die resultierenden Druckstöße brechen die Oberflächenspannung und drücken das Wasser heraus.`,
    },
    {
      q: `Ist der Ton sicher für ${device.shortName}?`,
      a: `Ja, zu 100% sicher. Der Ton bleibt innerhalb der spezifizierten Belastungsgrenzen der ${device.name}-Lautsprecher.`,
    },
    {
      q: `Warum klingt mein Lautsprecher nach Wasserkontakt dumpf?`,
      a: `Wasser bildet einen Film über dem Schutzgitter, der Schallwellen dämpft. Sobald das Wasser entfernt ist, ist der Ton wieder klar.`,
    },
    {
      q: `Wie viele Durchläufe sind nötig?`,
      a: `Bei leichten Spritzern reicht 1 Durchlauf (60 s). Bei starker Nässe 2 bis 3 Zyklen durchführen.`,
    },
  ];

  return {
    metaTitle: `${device.name} Lautsprecher reparieren: Wasser auswerfen & reinigen`,
    metaDescription: `Wasser aus dem Lautsprecher von ${device.name} auswerfen. Der 165-Hz-Ton beseitigt dumpfen Klang und drückt Wasser in 60s heraus.`,
    eyebrow: `${device.shortName} Wasser-Auswurf & Diagnose`,
    heroHeading: `${device.shortName} Lautsprecher reparieren & Wasser auswerfen`,
    heroSubtitle: `Spielen Sie den 165-Hz-Schallimpuls ab, um gefangene Feuchtigkeit und Staub aus den Lautsprechern von ${device.name} ohne App zu entfernen.`,
    badge: `165 Hz ${device.shortName} Wasser-Auswurf`,
    grilleSpecs: isEarbuds
      ? 'Präzisions-Schutzgitter und Druckausgleichsöffnungen'
      : isWatch
      ? 'Seitliche Akustikschlitze mit wasserfester Membran'
      : isTablet || isLaptop
      ? 'Mehrkanal-Stereo-Lautsprecheröffnungen'
      : 'Präzisionsgefräste Lautsprecheröffnungen unten und oberes Hörmuschel-Mikrogitter',
    acousticFreq: '165 Hz Tiefton-Rechteckwelle + Oberton-Sweep',
    recommendedDuration: '60–120 Sekunden (1–2 Zyklen)',
    overview: [
      `Das ${device.name} ist nach ${device.ipRating} geschützt, doch Oberflächenspannung hält oft Wassertropfen im Schutzgitter gefangen.`,
      `Fix The Speaker generiert 165-Hz-Schallwellen direkt im Browser, um Wassertropfen zuverlässig herauszudrücken.`,
    ],
    steps,
    technicalTips,
    faqs,
  };
}

function buildPortuguese(device: DeviceData): LocalizedDeviceContent {
  const isEarbuds = device.category === 'earbuds';
  const isWatch = device.category === 'smartwatch';
  const isTablet = device.category === 'tablet';
  const isLaptop = device.category === 'laptop';

  const steps: HowToStep[] = isEarbuds
    ? [
        {
          name: 'Retire os fones dos ouvidos',
          text: `Tire ambos os ${device.shortName} dos ouvidos antes de começar. Frequências em alto volume nunca devem ser reproduzidas no canal auditivo.`,
        },
        {
          name: 'Remova as pontas de silicone',
          text: 'Se houver borrachinhas de silicone, retire-as para expor a grade acústica preta ao ar livre.',
        },
        {
          name: 'Coloque a grade virada para baixo',
          text: `Apoie os ${device.shortName} com as saídas de som para baixo sobre um pano ou papel seco.`,
        },
        {
          name: 'Inicie a ejeção de água em 165 Hz',
          text: 'Coloque o volume em 100% nos fones conectados e execute o ciclo de 60 segundos.',
        },
        {
          name: 'Escove a grade e faça o teste estéreo',
          text: 'Use o modo Limpar Poeira para soltar resíduos, passe uma escova macia e teste o som.',
        },
      ]
    : isWatch
    ? [
        {
          name: 'Tire o relógio do pulso',
          text: `Solte a pulseira do seu ${device.shortName} para liberar as saídas de áudio laterais.`,
        },
        {
          name: 'Aponte o alto-falante para baixo',
          text: 'Segure o relógio com as aberturas do alto-falante viradas para baixo sobre um pano seco.',
        },
        {
          name: 'Aumente o volume para 100%',
          text: 'Ajuste o volume no máximo para obter a máxima vibração da membrana.',
        },
        {
          name: 'Inicie a ejeção em 165 Hz',
          text: `Toque em Iniciar Ejeção e deixe o som tocar por 60 segundos no seu ${device.shortName}.`,
        },
        {
          name: 'Seque e teste o áudio',
          text: 'Limpe as gotas expelidas com pano de microfibra e teste a nitidez de voz.',
        },
      ]
    : isTablet || isLaptop
    ? [
        {
          name: 'Desconecte cabos e fones',
          text: `Desconecte cabos USB e fones de ouvido do seu ${device.shortName}.`,
        },
        {
          name: 'Aumente o volume para 100%',
          text: 'Ajuste o volume do sistema no máximo para gerar pressão sonora suficiente.',
        },
        {
          name: 'Incline o aparelho para as grades',
          text: 'Incline o dispositivo com as aberturas de som viradas para baixo sobre um pano seco.',
        },
        {
          name: 'Execute o ciclo de 165 Hz',
          text: 'Inicie o som para expulsar a umidade retida nas câmaras acústicas.',
        },
        {
          name: 'Seque e faça o teste estéreo',
          text: 'Limpe as saídas e execute o Teste de Alto-Falante para verificar o equilíbrio.',
        },
      ]
    : [
        {
          name: 'Desconecte cabos e fones Bluetooth',
          text: `Desconecte o carregador e fones sem fio para que o áudio saia pelos alto-falantes do ${device.shortName}.`,
        },
        {
          name: 'Aumente o volume para 100%',
          text: 'Use os botões laterais para colocar o volume de mídia no nível máximo.',
        },
        {
          name: 'Segure o celular virado para baixo',
          text: `Mantenha seu ${device.shortName} na vertical com o alto-falante inferior apontado para uma toalha seca.`,
        },
        {
          name: 'Inicie o som de ejeção de 165 Hz',
          text: 'Toque em Iniciar Ejeção e deixe o som de 60s tocar dando leves batidinhas na palma da mão.',
        },
        {
          name: 'Seque a grade e teste o som',
          text: 'Limpe o exterior com pano de microfibra e faça o Teste de Alto-Falante.',
        },
      ];

  const technicalTips = isEarbuds
    ? [
        `Nunca lave seus ${device.shortName} em água corrente.`,
        'Certifique-se de que os fones e o estojo estejam 100% secos antes de recarregar.',
        'Não use agulhas ou objetos pontiagudos para limpar a grade.',
      ]
    : isWatch
    ? [
        `Após nadar no mar ou piscina, enxágue com água doce antes de ejetar a água.`,
        'Não insira clipes nos orifícios de microfone ou alto-falante.',
        'Não coloque no carregador se houver gotas visíveis.',
      ]
    : [
        'Se o aparelho exibir aviso de umidade na porta USB, não conecte o carregador até secar por completo.',
        'Não use secador de cabelo em temperatura quente para não danificar as vedações adesivas de água.',
        'Nunca insira agulhas ou objetos pontiagudos nos orifícios do alto-falante.',
      ];

  const faqs: DeviceFAQ[] = [
    {
      q: `Como o som de 165 Hz ejeta água do ${device.shortName}?`,
      a: `A frequência de 165 Hz movimenta a membrana do alto-falante com força, gerando rajadas de ar que rompem a tensão superficial e expelem a água da grade de som.`,
    },
    {
      q: `É seguro usar no ${device.shortName}?`,
      a: `Sim, 100% seguro. O tom respeita os limites de potência dos alto-falantes do ${device.name}.`,
    },
    {
      q: `Por que o som fica abafado após molhar?`,
      a: `A água forma uma película líquida na grade, impedindo que o som saia com nitidez. A ejeção restaura a qualidade original.`,
    },
    {
      q: `Quantos ciclos devo executar?`,
      a: `Um ciclo de 60s basta para respingos leves. Para mais água, repita 2 a 3 vezes.`,
    },
  ];

  return {
    metaTitle: `Consertar alto-falante ${device.name}: Som para ejetar água`,
    metaDescription: `Ejete água do alto-falante de ${device.name} instantaneamente. O tom de 165 Hz desentope grades e restaura som abafado em 60s.`,
    eyebrow: `Ejeção de Água e Diagnóstico para ${device.shortName}`,
    heroHeading: `Consertar alto-falante de ${device.shortName} e ejetar água`,
    heroSubtitle: `Emita o pulso sonoro de 165 Hz para expulsar água presa na grade de som do ${device.name} diretamente no navegador.`,
    badge: `Ejetor de Água 165 Hz · ${device.shortName}`,
    grilleSpecs: isEarbuds
      ? 'Grade acústica de microfiltro e saídas de alívio de pressão'
      : isWatch
      ? 'Fendas acústicas laterais com membrana resistente à água'
      : isTablet || isLaptop
      ? 'Grades de alto-falantes estéreo multicanal'
      : 'Portas acústicas inferiores de precisão e micrograde de fone superior',
    acousticFreq: 'Onda quadrada de baixa frequência a 165 Hz + varredura harmônica',
    recommendedDuration: '60 a 120 segundos (1 a 2 ciclos)',
    overview: [
      `O ${device.name} tem proteção ${device.ipRating}, mas a tensão superficial da água frequentemente retém gotículas dentro da grade de som após chuva ou suor.`,
      `O Fix The Speaker emite ondas sonoras em 165 Hz para desobstruir os canais de áudio de forma rápida e segura.`,
    ],
    steps,
    technicalTips,
    faqs,
  };
}

function buildKorean(device: DeviceData): LocalizedDeviceContent {
  const isEarbuds = device.category === 'earbuds';
  const isWatch = device.category === 'smartwatch';
  const isTablet = device.category === 'tablet';
  const isLaptop = device.category === 'laptop';

  const steps: HowToStep[] = isEarbuds
    ? [
        {
          name: '이어폰을 귀에서 빼기',
          text: `${device.shortName}을 귀에서 뺀 후 진행하세요. 고음량 주파수를 귓속에서 재생하면 안 됩니다.`,
        },
        {
          name: '실리콘 이어팁 분리',
          text: '이어팁을 분리하여 스피커 망이 외부로 노출되도록 합니다.',
        },
        {
          name: '스피커 망을 아래로 향해 놓기',
          text: `마른 수건 위에 ${device.shortName} 스피커 구멍이 아래를 향하도록 놓습니다.`,
        },
        {
          name: '165Hz 물빼기 소리 재생',
          text: '이어폰 볼륨을 100%로 설정하고 60초간 물빼기 사운드를 실행합니다.',
        },
        {
          name: '먼지 청소 및 좌우 밸런스 점검',
          text: '먼지 청소 모드를 켠 뒤 부드러운 마른 칫솔로 표면을 털어내고 소리를 확인합니다.',
        },
      ]
    : isWatch
    ? [
        {
          name: '워치를 손목에서 풀기',
          text: `${device.shortName} 측면 스피커 구멍이 가려지지 않도록 손목에서 풉니다.`,
        },
        {
          name: '스피커 구멍을 아래로 향하기',
          text: '마른 천 위에서 스피커 슬롯이 아래로 가도록 쥡니다.',
        },
        {
          name: '연결 기기 볼륨 100% 설정',
          text: '진동판이 최대로 움직일 수 있도록 볼륨을 최대로 올립니다.',
        },
        {
          name: '165Hz 물빼기 사운드 실행',
          text: `${device.shortName}에서 60초간 물빼기 음파를 재생합니다.`,
        },
        {
          name: '물기 닦고 마이크/스피커 확인',
          text: '배출된 물기를 닦아내고 Siri 또는 통화 음질을 확인합니다.',
        },
      ]
    : isTablet || isLaptop
    ? [
        {
          name: '충전 케이블 및 이어폰 분리',
          text: `${device.shortName}에 연결된 충전선과 액세서리를 분리합니다.`,
        },
        {
          name: '시스템 볼륨 100% 설정',
          text: '충분한 음압을 발생시키기 위해 시스템 볼륨을 최대로 올립니다.',
        },
        {
          name: '스피커 그릴을 아래로 기울이기',
          text: '기기 스피커 구멍이 마른 천 쪽으로 아래를 향하도록 기울여 놓습니다.',
        },
        {
          name: '165Hz 물빼기 음파 실행',
          text: '저주파 진동으로 스피커 챔버 내부의 습기와 물방울을 밀어냅니다.',
        },
        {
          name: '외관 건조 및 스테레오 진단',
          text: '스피커 그릴을 닦고 스피커 테스트로 좌우 채널 균형을 점검합니다.',
        },
      ]
    : [
        {
          name: '케이블 및 블루투스 해제',
          text: `${device.shortName} 내장 스피커로 소리가 출력되도록 충전선과 이어폰을 분리합니다.`,
        },
        {
          name: '미디어 볼륨 100% 설정',
          text: '스피커 공기압을 높이기 위해 미디어 볼륨을 최대로 올립니다.',
        },
        {
          name: '스피커가 아래를 향하게 들기',
          text: `${device.shortName} 하단 스피커가 아래를 향하도록 수직으로 세워 잡습니다.`,
        },
        {
          name: '165Hz 물빼기 주파수 재생',
          text: '물빼기 시작을 누르고 60초간 펄스음을 재생하며 손바닥으로 가볍게 털어줍니다.',
        },
        {
          name: '물기 닦고 스피커 테스트',
          text: '마른 천으로 닦은 후 스피커 테스트로 소리의 선명함을 점검합니다.',
        },
      ];

  const technicalTips = isEarbuds
    ? [
        `${device.shortName}을 물에 담그거나 흐르는 물로 세척하지 마세요.`,
        '이어폰과 충전 케이스가 완전히 마를 때까지 케이스에 넣지 마세요.',
        '스피커 망을 뾰족한 바늘이나 핀으로 찌르지 마세요.',
      ]
    : isWatch
    ? [
        `바닷물이나 수영장 이용 후에는 맑은 물로 가볍게 헹군 뒤 물빼기를 실행하세요.`,
        '마이크나 스피커 구멍에 바늘을 찌르지 마세요.',
        '물기가 남아있는 상태에서 무선 충전기에 올리지 마세요.',
      ]
    : [
        '충전 단자 액체 감지 알림이 떠 있다면 물기가 완전히 마를 때까지 충전기를 꽂지 마세요.',
        '헤어드라이어의 뜨거운 바람은 방수 실링을 손상시키므로 사용하지 마세요.',
        '스피커 구멍에 바늘이나 이쑤시개를 찌르지 마세요.',
      ];

  const faqs: DeviceFAQ[] = [
    {
      q: `165Hz 소리가 어떻게 ${device.shortName}에서 물을 빼내나요?`,
      a: `165Hz 주파수는 소형 스피커 공진점에 맞춰져 있습니다. 진동판이 강하게 공기를 밀어내며 스피커 망에 맺힌 물방울을 밖으로 배출합니다.`,
    },
    {
      q: `${device.shortName}에 사용해도 안전한가요?`,
      a: `네, 100% 안전합니다. ${device.name} 스피커 규격 한도 내에서 안전하게 작동합니다.`,
    },
    {
      q: `물에 젖은 후 소리가 먹먹한 이유는?`,
      a: `스피커 망에 맺힌 물방울 표면장력 때문입니다. 물기를 빼내면 원래의 맑은 소리로 복구됩니다.`,
    },
    {
      q: `몇 번 실행해야 하나요?`,
      a: `가벼운 물튐은 60초 1회로 충분하며, 침수된 경우 스피커를 아래로 두고 2~3회 반복하세요.`,
    },
  ];

  return {
    metaTitle: `${device.name} 스피커 물빼기: 음파 소리로 물 배출 및 먼지 청소`,
    metaDescription: `${device.name} 스피커에 들어간 물방울을 165Hz 음파 진동으로 배출하세요. 60초 만에 먹먹해진 소리와 하단 스피커 망을 청소합니다.`,
    eyebrow: `${device.shortName} 스피커 물빼기 및 자가진단`,
    heroHeading: `${device.shortName} 스피커 물빼기 & 먹먹한 소리 해결`,
    heroSubtitle: `앱 설치 없이 브라우저에서 165Hz 중저음 공진 펄스를 재생하여 ${device.name} 스피커 그릴에 갇힌 물방울을 강력하게 밀어냅니다.`,
    badge: `165 Hz ${device.shortName} 물빼기 사운드`,
    grilleSpecs: isEarbuds
      ? '초미세 음향 메쉬 및 압력 완화 통기구'
      : isWatch
      ? '방수 멤브레인이 적용된 측면 음향 슬롯'
      : isTablet || isLaptop
      ? '다채널 스테레오 정밀 스피커 그릴'
      : '정밀 가공 하단 스피커 포트 및 상단 수화부 마이크로 메쉬',
    acousticFreq: '165 Hz 저주파 공진 구형파 + 고주파 하모닉 스윕',
    recommendedDuration: '60~120초 (1~2회 반복)',
    overview: [
      `${device.name}은(는) ${device.ipRating} 방수를 지원하지만, 비나 땀, 침수 후 스피커 망에 미세한 물방울이 갇혀 소리가 먹먹해지기 쉽습니다.`,
      `Fix The Speaker는 웹 브라우저에서 165Hz 고출력 음파를 직접 합성하여 스피커 그릴의 물기를 빠르고 안전하게 배출합니다.`,
    ],
    steps,
    technicalTips,
    faqs,
  };
}

function buildItalian(device: DeviceData): LocalizedDeviceContent {
  const isEarbuds = device.category === 'earbuds';
  const isWatch = device.category === 'smartwatch';
  const isTablet = device.category === 'tablet';
  const isLaptop = device.category === 'laptop';

  const steps: HowToStep[] = isEarbuds
    ? [
        {
          name: 'Rimuovi gli auricolari dalle orecchie',
          text: `Togli entrambi i ${device.shortName} prima di iniziare. I toni ad alto volume non vanno mai riprodotti nel condotto uditivo.`,
        },
        {
          name: 'Rimuovi i gommini in silicone',
          text: 'Rimuovi i gommini in silicone per esporre la retina dell’altoparlante all’aria.',
        },
        {
          name: 'Posiziona la retina verso il basso',
          text: `Appoggia i ${device.shortName} con le uscite audio rivolte verso il basso su un panno asciutto.`,
        },
        {
          name: 'Avvia l’espulsione dell’acqua a 165 Hz',
          text: 'Porta il volume al 100% sugli auricolari connessi ed esegui il ciclo di 60 secondi.',
        },
        {
          name: 'Spazzola la retina e verifica l’audio',
          text: 'Usa la modalità Pulisci Polvere per ammorbidire il cerume secco, spazzola delicatamente e fai il test stereo.',
        },
      ]
    : isWatch
    ? [
        {
          name: 'Togli l’orologio dal polso',
          text: `Slaccia il cinturino del tuo ${device.shortName} per liberare le fessure audio laterali.`,
        },
        {
          name: 'Orienta le fessure verso il basso',
          text: 'Tieni l’orologio con le feritoie del diffusore rivolte verso il basso su un panno asciutto.',
        },
        {
          name: 'Imposta il volume al 100%',
          text: 'Alza il volume al massimo sul dispositivo connesso per la massima escursione del diaframma.',
        },
        {
          name: 'Esegui il tono di espulsione a 165 Hz',
          text: `Tocca Avvia Espulsione e lascia suonare il tono a 165 Hz per 60 secondi sul tuo ${device.shortName}.`,
        },
        {
          name: 'Asciuga la cassa e prova microfono/audio',
          text: 'Asciuga le goccioline uscite con un panno in microfibra e verifica la chiarezza dell’audio.',
        },
      ]
    : isTablet || isLaptop
    ? [
        {
          name: 'Scollega cavi e accessori',
          text: `Scollega cavi USB e cuffie dal tuo ${device.shortName}.`,
        },
        {
          name: 'Imposta il volume al 100%',
          text: 'Alza il volume di sistema al massimo per generare la pressione acustica necessaria.',
        },
        {
          name: 'Inclina il dispositivo verso le griglie',
          text: 'Orienta il dispositivo in modo che le feritoie degli altoparlanti guardino verso il basso su un panno asciutto.',
        },
        {
          name: 'Avvia il ciclo a 165 Hz',
          text: 'Avvia il suono per espellere l’umidità accumulata nelle camere acustiche.',
        },
        {
          name: 'Asciuga e verifica lo stereo',
          text: 'Pulisci le griglie e avvia il Test Altoparlante per verificare il bilanciamento.',
        },
      ]
    : [
        {
          name: 'Scollega cavi e cuffie Bluetooth',
          text: `Scollega cavi e cuffie in modo che l’audio venga riprodotto dagli altoparlanti del tuo ${device.shortName}.`,
        },
        {
          name: 'Porta il volume multimediale al 100%',
          text: 'Usa i tasti laterali per impostare il volume multimediale al massimo.',
        },
        {
          name: 'Tieni il telefono rivolto verso il basso',
          text: `Mantieni il tuo ${device.shortName} in verticale con la griglia inferiore rivolta verso un panno asciutto.`,
        },
        {
          name: 'Riproduci il suono di espulsione a 165 Hz',
          text: 'Tocca Avvia Espulsione e lascia suonare per 60 secondi picchiettando delicatamente il telefono sul palmo.',
        },
        {
          name: 'Asciuga la griglia e prova l’altoparlante',
          text: 'Pulisci l’esterno con un panno in microfibra e avvia il Test Altoparlante per verificare la qualità stereo.',
        },
      ];

  const technicalTips = isEarbuds
    ? [
        `Non immergere mai i tuoi ${device.shortName} in acqua corrente.`,
        'Assicurati che auricolari e custodia siano completamente asciutti prima di ricaricare.',
        'Non usare oggetti appuntiti sulla retina per non forare la membrana.',
      ]
    : isWatch
    ? [
        `Dopo il nuoto in mare o piscina, risciacqua con acqua dolce prima di espellere l’acqua.`,
        'Non inserire spilli nei fori del microfono o dell’altoparlante.',
        'Non appoggiare sul caricabatterie se sono presenti gocce d’acqua.',
      ]
    : [
        'Se il telefono mostra l’avviso di liquido nella porta USB, non collegare il cavo finché non è asciutto.',
        'Non utilizzare asciugacapelli ad aria calda; il calore danneggia le guarnizioni impermeabili.',
        'Non inserire aghi o oggetti appuntiti nei fori dell’altoparlante.',
      ];

  const faqs: DeviceFAQ[] = [
    {
      q: `In che modo il suono a 165 Hz espelle l’acqua da ${device.shortName}?`,
      a: `La frequenza a 165 Hz sfrutta la risonanza dei microaltoparlanti, generando getti d’aria che rompono la tensione superficiale ed espellono l’acqua dalla griglia di ${device.shortName}.`,
    },
    {
      q: `È sicuro per ${device.shortName}?`,
      a: `Sì, è sicuro al 100%. Il tono rispetta i limiti di potenza del diffusore di ${device.name}.`,
    },
    {
      q: `Perché il suono è ovattato dopo il contatto con l’acqua?`,
      a: `L’acqua forma una pellicola sulla griglia che blocca le onde sonore. Espellendo l’acqua, il suono torna nitido.`,
    },
    {
      q: `Quanti cicli bisogna fare?`,
      a: `1 ciclo di 60s è sufficiente per schizzi d’acqua. In caso di immersione, ripeti 2 o 3 volte.`,
    },
  ];

  return {
    metaTitle: `Riparare altoparlante ${device.name}: Suono per espellere acqua`,
    metaDescription: `Espelli l’acqua dall’altoparlante di ${device.name} all’istante. Il tono a 165 Hz risolve il suono ovattato e pulisce le griglie in 60s.`,
    eyebrow: `Espulsione Acqua e Diagnostica ${device.shortName}`,
    heroHeading: `Riparare altoparlante ${device.shortName} ed espellere l’acqua`,
    heroSubtitle: `Riproduci l’impulso acustico a 165 Hz per liberare la cassa di ${device.name} dall’acqua intrappolata senza scaricare app.`,
    badge: `Espulsione Acqua 165 Hz · ${device.shortName}`,
    grilleSpecs: isEarbuds
      ? 'Retina acustica microforata e condotti di sfiato'
      : isWatch
      ? 'Feritoie acustiche laterali con membrana resistente all’acqua'
      : isTablet || isLaptop
      ? 'Griglie per altoparlanti stereo multicanale'
      : 'Porte acustiche inferiori lavorate di precisione e microretina superiore',
    acousticFreq: 'Onda quadra risonante a bassa frequenza da 165 Hz + sweep armonico',
    recommendedDuration: '60–120 secondi (1–2 cicli)',
    overview: [
      `Il ${device.name} è dotato di protezione ${device.ipRating}, ma l’acqua può rimanere intrappolata nella griglia acustica dopo l’esposizione a pioggia o liquidi.`,
      `Fix The Speaker genera onde a 165 Hz direttamente nel browser per espellere le gocce d’acqua e liberare i diffusori in modo rapido e sicuro.`,
    ],
    steps,
    technicalTips,
    faqs,
  };
}

export function getLocalizedDevice(device: DeviceData, lang: SupportedLang = 'en'): DeviceData {
  if (lang === 'en') return device;

  let localized: LocalizedDeviceContent;

  switch (lang) {
    case 'es':
      localized = buildSpanish(device);
      break;
    case 'ja':
      localized = buildJapanese(device);
      break;
    case 'fr':
      localized = buildFrench(device);
      break;
    case 'de':
      localized = buildGerman(device);
      break;
    case 'pt':
      localized = buildPortuguese(device);
      break;
    case 'ko':
      localized = buildKorean(device);
      break;
    case 'it':
      localized = buildItalian(device);
      break;
    default:
      return device;
  }

  return {
    ...device,
    metaTitle: localized.metaTitle,
    metaDescription: localized.metaDescription,
    eyebrow: localized.eyebrow,
    heroHeading: localized.heroHeading,
    heroSubtitle: localized.heroSubtitle,
    badge: localized.badge,
    grilleSpecs: localized.grilleSpecs || device.grilleSpecs,
    acousticFreq: localized.acousticFreq || device.acousticFreq,
    recommendedDuration: localized.recommendedDuration || device.recommendedDuration,
    overview: localized.overview,
    steps: localized.steps,
    technicalTips: localized.technicalTips,
    faqs: localized.faqs,
  };
}
