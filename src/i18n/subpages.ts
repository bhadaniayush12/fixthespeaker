import type { SupportedLang } from './ui';

export interface PageSection {
  title?: string;
  paragraphs: string[];
  list?: string[];
}

export interface AboutContent {
  title: string;
  description: string;
  heading: string;
  eyebrow: string;
  intro: string;
  sections: PageSection[];
}

export interface LegalContent {
  title: string;
  description: string;
  heading: string;
  eyebrow: string;
  updated: string;
  intro: string;
  sections: PageSection[];
}

export interface ContactContent {
  title: string;
  description: string;
  heading: string;
  eyebrow: string;
  intro: string;
  buttonText: string;
  detailsTitle: string;
  detailsList: string[];
  beforeTitle: string;
  beforeText: string;
  linksText: string;
}

export const subpagesContent: Record<
  SupportedLang,
  {
    about: AboutContent;
    privacy: LegalContent;
    terms: LegalContent;
    contact: ContactContent;
  }
> = {
  en: {
    about: {
      title: 'About Fix The Speaker: Free Water Eject & Speaker Cleaner',
      description:
        'Fix The Speaker is a free, browser-based acoustic utility that uses 165 Hz sound waves to eject water and loosen dust from phone and laptop speakers.',
      heading: 'About Fix The Speaker',
      eyebrow: 'About Us',
      intro:
        'Fix The Speaker (fixthespeaker.com) is a free, privacy-first web utility engineered to restore muffled smartphone and laptop speakers. Using tailored sound frequencies generated client-side via the HTML5 Web Audio API, the tool pushes trapped liquid out through speaker grilles and dislodges fine dust particles in 60 seconds—with no app installations or sign-ups required.',
      sections: [
        {
          title: 'Why Fix The Speaker Was Created',
          paragraphs: [
            'Smartphone speakers frequently become muffled after exposure to water from rain, workouts, showers, or accidental spills. Surface tension often traps microscopic droplets inside the dense mesh speaker grille, muting sound output and distorting audio clarity.',
            'While popular advice often suggests burying electronics in rice (which can introduce starch dust into charging ports and microphone membranes) or waiting days for natural evaporation, acoustic physics provides a safe, active solution. Fix The Speaker was designed to deliver instant, accessible speaker cleaning across all devices without invasive bloatware or deceptive downloads.',
          ],
        },
        {
          title: 'How It Works: The Acoustic Physics',
          paragraphs: [
            'All audio tones are synthesized dynamically within your web browser using standard Web Audio oscillators. The tool operates across three dedicated acoustic modes:',
          ],
          list: [
            '165 Hz Water Eject Pulse: Emits a low-frequency square wave optimized to match the mechanical resonant displacement of smartphone micro-speakers. This rapid back-and-forth diaphragm excursion creates high-velocity air pressure pulses behind the speaker mesh, breaking water droplet surface tension and pushing moisture out through the exterior grille.',
            '2.5 kHz – 14.5 kHz Dust Cleaner Sweep: Plays a high-frequency harmonic sweep that generates intense micro-vibrations across the acoustic mesh. These rapid vibrations loosen dried lint, dust, and sand particles so they can be easily brushed away with a dry microfiber cloth or soft toothbrush.',
            'Dual-Channel Stereo Diagnostic Test: Generates calibrated test tones isolated to the left channel, right channel, and stereo center, allowing users to verify channel balance and sound clarity after cleaning.',
          ],
        },
        {
          title: 'Safe Device Cleaning Guidelines',
          paragraphs: [
            'To achieve optimal results while protecting your device hardware, we recommend the following procedure:',
          ],
          list: [
            'Disconnect all wired headphones, earbuds, and charging cables from the device.',
            'Set your device master media volume to 100% for maximum acoustic displacement.',
            'Hold the device with the affected speaker grille facing downward over a dry cloth or paper towel.',
            'Activate the Water Eject tone and allow it to run for the full 60-second cycle.',
            'Wipe away expelled water droplets immediately with a clean, lint-free cloth.',
            'Run the Dust Cleaner mode if lint or debris remains visible along the mesh.',
          ],
        },
        {
          title: 'Hardware Scope & Limitations',
          paragraphs: [
            'Fix The Speaker is designed solely for expelling free moisture and debris from the acoustic chamber and exterior grille. It cannot repair internal electronic short-circuits, corroded logic boards, or physically torn speaker cones caused by prolonged water immersion.',
            'If your device was submerged in liquid, displays a persistent liquid-detection warning in the charging port, or continues to crackle after multiple cleaning cycles, turn off the device, allow it to dry in a ventilated area, and consult an authorized service center.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy | Fix The Speaker',
      description:
        'Privacy Policy for Fix The Speaker. Details our zero-audio collection policy, Google Analytics 4 tracking, Consent Mode v2, and third-party advertising disclosures.',
      heading: 'Privacy Policy',
      eyebrow: 'Legal & Compliance',
      updated: '2026-09-07',
      intro:
        'This Privacy Policy outlines how Fix The Speaker ("we", "our", or "the Service") handles information when you visit fixthespeaker.com. We are committed to transparency: our tool operates entirely in your browser and never accesses your microphone, records audio, or collects personal audio streams.',
      sections: [
        {
          title: '1. Zero Audio Data & Client-Side Operation',
          paragraphs: [
            'Fix The Speaker uses the client-side HTML5 Web Audio API to synthesize acoustic sound frequencies directly on your device CPU. All tone generation, frequency sweeps, and stereo balance tests occur entirely within your local browser sandbox.',
            'We do not request microphone access permissions, we never record or transmit incoming audio, and we do not require account creation, passwords, or personal credentials to use any cleaning features.',
          ],
        },
        {
          title: '2. Information Collected Automatically',
          paragraphs: [
            'When you access our website, standard web server hosting logs (provided via Cloudflare) automatically collect technical network telemetry necessary for delivering web assets, mitigating cyberattacks (such as DDoS), and ensuring site reliability. This data includes:',
          ],
          list: [
            'Internet Protocol (IP) address (anonymized and redacted in analytics reporting)',
            'Browser type, user agent string, and operating system',
            'Referral URL, pages visited, and timestamp of access',
            'Language preference and generic screen resolution',
          ],
        },
        {
          title: '3. Cookies, Local Storage & Consent Mode v2',
          paragraphs: [
            'Our website uses browser local storage and essential cookies to maintain core user preferences. Specifically, we store:',
          ],
          list: [
            'fixthespeaker_cookie_consent_v1: Records your cookie preferences (analytics and advertising choices) so we honor your selections on subsequent visits.',
            'theme: Stores your dark mode / light mode interface preference.',
          ],
        },
        {
          title: '4. Google Analytics 4 (GA4) Tracking',
          paragraphs: [
            'We use Google Analytics 4 (Measurement ID: G-924DECLM9L) to analyze aggregated traffic trends and user interaction patterns. In compliance with Google Consent Mode v2, analytical and advertising storage tags (ad_storage, analytics_storage, ad_user_data, ad_personalization) are set to "denied" by default when you first load the site.',
            'Google Analytics only activates if you explicitly grant permission through our cookie banner. You can manage or revoke your consent at any time by clicking the "Cookie Settings" link located in the website footer.',
          ],
        },
        {
          title: '5. Third-Party Advertising & Google AdSense Disclosures',
          paragraphs: [
            'We may display third-party advertisements via Google AdSense and affiliated advertising networks to support the free operation of Fix The Speaker. Please review the following mandatory disclosures:',
          ],
          list: [
            'Third-party vendors, including Google, use cookies to serve ads based on a user\'s prior visits to this website or other websites on the Internet.',
            'Google\'s use of advertising cookies enables it and its partners to serve ads to users based on their visits to our site and/or other sites across the Internet.',
            'Users may opt out of personalized advertising by visiting Google Ads Settings (https://adssettings.google.com).',
            'Alternatively, you can opt out of third-party vendors\' use of cookies for personalized advertising by visiting AboutAds (http://www.aboutads.info/choices) or the Network Advertising Initiative (http://www.networkadvertising.org/choices/).',
          ],
        },
        {
          title: '6. GDPR & UK Data Protection Rights',
          paragraphs: [
            'If you reside in the European Economic Area (EEA), United Kingdom, or Switzerland, you have specific rights under the General Data Protection Regulation (GDPR) and UK GDPR, including the right to access, rectify, or request erasure of personal data, as well as the right to withdraw cookie consent at any time without affecting your access to the speaker cleaning utility.',
          ],
        },
        {
          title: '7. California Consumer Privacy Act (CCPA / CPRA)',
          paragraphs: [
            'Under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), California residents have the right to know what personal information is collected, request its deletion, and opt out of the sale or sharing of personal information. Fix The Speaker does not sell personal information to third-party data brokers.',
          ],
        },
        {
          title: '8. Newsletter Subscription Data',
          paragraphs: [
            'If you choose to subscribe to our notification list using the form on the website, we collect the following data on your behalf and store it securely via our third-party email delivery provider (Cloudflare Workers KV):',
          ],
          list: [
            'Email address: used solely to send you product update notifications.',
            'IP address: collected at the time of subscription for spam-prevention and geographic analytics purposes.',
            'Country: inferred from the IP address at the time of subscription for regional analytics.',
          ],
        },
        {
          title: '8a. Newsletter Data Rights & Deletion',
          paragraphs: [
            'We do not sell or share your newsletter subscription data with third-party advertisers.',
            'You may unsubscribe at any time using the link included in every notification email. To request complete deletion of your subscription data (email, IP address, and country record), please contact us at support@fixthespeaker.com and we will process your request within 30 days.',
          ],
        },
        {
          title: '9. Privacy Inquiries & Policy Updates',
          paragraphs: [
            'We may periodically update this Privacy Policy to reflect technical or regulatory requirements. Any modifications will be posted here with the revised "Last updated" date.',
            'If you have questions regarding this Privacy Policy or our data handling practices, please contact us at support@fixthespeaker.com.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms of Use | Fix The Speaker',
      description:
        'Terms of Use for Fix The Speaker. Read our terms regarding fair use of audio frequencies, hearing safety, and electronic device disclaimers.',
      heading: 'Terms of Use',
      eyebrow: 'Legal Agreement',
      updated: '2026-09-06',
      intro:
        'These Terms of Use ("Terms") constitute a legally binding agreement between you and Fix The Speaker (fixthespeaker.com). By accessing or using our website and acoustic tools, you acknowledge that you have read, understood, and agree to be bound by these Terms.',
      sections: [
        {
          title: '1. Service Scope & Permitted Use',
          paragraphs: [
            'Fix The Speaker provides a free, web-based acoustic generator that produces sound waves intended to dislodge moisture, lint, and dust particles from the exterior grilles of smartphone and computer speakers. You agree to use the Service solely for lawful personal or diagnostic purposes in accordance with these Terms.',
          ],
        },
        {
          title: '2. Hearing & Acoustic Safety Precautions',
          paragraphs: [
            'Fix The Speaker generates high-volume tones, square waves, and frequency sweeps between 165 Hz and 14.5 kHz. You acknowledge and agree to the following safety requirements:',
          ],
          list: [
            'Remove all wired or wireless headphones, earbuds, and in-ear monitors before triggering any audio generator tone.',
            'Do not hold your device speaker grille directly against your ear while cleaning frequencies are playing.',
            'Exercise caution around pets, infants, and individuals sensitive to high-frequency or high-volume sound.',
            'You assume full responsibility for adjusting the playback volume to an appropriate level on your device.',
          ],
        },
        {
          title: '3. Electronics & Hardware Safety Disclaimer',
          paragraphs: [
            'Fix The Speaker utilizes acoustic vibration to clear water droplets from physical speaker meshes. The Service does not provide electronic or physical component repairs.',
          ],
          list: [
            'No Water Damage Repair Guarantee: Sound waves cannot repair internal circuit corrosion, short-circuited motherboards, damaged lithium-ion batteries, or defective micro-driver coils.',
            'Charging Safety: Never connect a charging cable to a device with moisture in its ports. Follow manufacturer guidelines and ensure all ports are completely dry before recharging.',
            'Pre-Existing Defects: Fix The Speaker is not liable for speaker failure resulting from pre-existing hardware degradation or excessive volume playback beyond manufacturer limits.',
          ],
        },
        {
          title: '4. Disclaimer of Warranties',
          paragraphs: [
            'The Service and all audio generators are provided on an "AS IS" and "AS AVAILABLE" basis without warranty of any kind, whether express, implied, or statutory. We expressly disclaim all warranties of merchantability, fitness for a particular purpose, and non-infringement.',
            'We make no representation that the Service will completely restore your device audio quality or prevent permanent water damage if liquid has breached internal water seals.',
          ],
        },
        {
          title: '5. Limitation of Liability',
          paragraphs: [
            'To the maximum extent permitted by applicable law, in no event shall Fix The Speaker, its operators, affiliates, or contributors be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from the use of, or inability to use, the website or audio frequencies.',
          ],
        },
        {
          title: '6. Intellectual Property & Prohibited Activities',
          paragraphs: [
            'All content, design assets, branding, interface code, and layout elements on fixthespeaker.com are the exclusive property of Fix The Speaker. You may not scrape, mirror, reverse-engineer, frame, or automate traffic to our servers without prior written authorization.',
          ],
        },
        {
          title: '7. Governing Law & Amendments',
          paragraphs: [
            'We reserve the right to update or modify these Terms at any time. Continued use of the website following changes constitutes acceptance of the modified Terms.',
            'If you have inquiries concerning these Terms of Use, please reach out to support@fixthespeaker.com.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact Us | Fix The Speaker',
      description:
        'Contact the Fix The Speaker team for technical support, bug reports, feature requests, or partnership inquiries.',
      heading: 'Contact Us',
      eyebrow: 'Support & Inquiries',
      intro:
        'Have a question, feedback, or need to report a technical bug with our speaker cleaning tool? We value your input and are here to help. Reach out to our team using the contact details below.',
      buttonText: 'Email support@fixthespeaker.com',
      detailsTitle: 'Helpful Details to Include in Bug Reports',
      detailsList: [
        'Device Make & Model (e.g., iPhone 15 Pro, Samsung Galaxy S24, MacBook Air M2).',
        'Operating System & Version (e.g., iOS 18.2, Android 14, macOS Sequoia).',
        'Web Browser & Version (e.g., Mobile Safari, Google Chrome 128, Firefox).',
        'Specific Cleaning Mode Run (Water Eject 165 Hz, Dust Cleaner Sweep, or Stereo Test).',
        'Type of Exposure (Fresh water, pool water, salt water, or dust/lint).',
      ],
      beforeTitle: 'Technical Support Advisory',
      beforeText:
        'Fix The Speaker provides browser-based acoustic assistance. We cannot inspect or repair physical device hardware over email. If your smartphone has sustained internal water intrusion or displays charging warnings, please power it down and consult an authorized technician.',
      linksText: 'For legal terms and privacy policies, please review our Privacy Policy and Terms of Use.',
    },
  },
  es: {
    about: {
      title: 'Acerca de Fix The Speaker: Limpiador Gratuito de Altavoces',
      description:
        'Fix The Speaker es una herramienta web gratuita que usa ondas de sonido para expulsar agua y desincrustar polvo del móvil.',
      heading: 'Acerca de Fix The Speaker',
      eyebrow: 'Acerca de',
      intro:
        'Fix The Speaker es una microherramienta web gratuita que cumple un propósito clave: limpiar la rejilla del altavoz del móvil mediante frecuencias de sonido. Reproduce un tono, mantén el altavoz boca abajo y el agua atrapada será expulsada en 60 segundos.',
      sections: [
        {
          title: 'Por qué existe',
          paragraphs: [
            'Casi todos los móviles suenan apagados o distorsionados tras mojarse en la lluvia, la piscina o la ducha. La solución es pura física acústica, pero a menudo se recomienda el mito del arroz. Creamos una herramienta honesta, rápida y sin publicidad invasiva.',
          ],
        },
        {
          title: 'Cómo funciona',
          paragraphs: [
            'Todos los tonos se generan en tu navegador con la Web Audio API. Sin descargas ni registros.',
          ],
          list: [
            'Expulsar Agua: Emite una onda cuadrada de 165 Hz que hace vibrar la membrana con máxima amplitud para empujar el agua fuera.',
            'Limpiar Polvo: Barrido de alta frecuencia (2,5 kHz a 14,5 kHz) para soltar pelusas y polvo adherido.',
            'Prueba de Altavoz: Verifica el canal izquierdo, derecho y estéreo para comprobar el balance sonoro.',
          ],
        },
        {
          title: 'Qué no puede hacer',
          paragraphs: [
            'Expulsa el agua de la rejilla exterior. No repara fallos eléctricos internos en la placa base.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Política de Privacidad | Fix The Speaker',
      description: 'Política de privacidad y protección de datos de Fix The Speaker.',
      heading: 'Política de Privacidad',
      eyebrow: 'Legal',
      updated: '2026-09-03',
      intro:
        'Esta política detalla cómo se gestionan los datos en Fix The Speaker. La herramienta funciona 100% en tu navegador y no recopila datos personales.',
      sections: [
        {
          title: 'Datos que procesa la herramienta',
          paragraphs: [
            'El sonido se genera localmente en tu dispositivo mediante Web Audio API. No grabamos audio ni solicitamos acceso al micrófono.',
          ],
        },
        {
          title: 'Cookies y registros',
          paragraphs: [
            'Los registros de servidor registran datos técnicos básicos de navegación para garantizar la seguridad y rapidez del servicio.',
          ],
        },
        {
          title: 'Datos de suscripción al boletín',
          paragraphs: [
            'Si te suscribes a nuestra lista de notificaciones, recopilamos tu dirección de correo electrónico, dirección IP y país de forma segura mediante Cloudflare Workers KV. No vendemos estos datos. Para solicitar la eliminación, escríbenos a support@fixthespeaker.com.',
          ],
        },
      ],
    },
    terms: {
      title: 'Términos de Uso | Fix The Speaker',
      description: 'Condiciones y términos de uso de Fix The Speaker.',
      heading: 'Términos de Uso',
      eyebrow: 'Legal',
      updated: '2026-09-03',
      intro:
        'Al utilizar este sitio web, aceptas los presentes términos y condiciones de servicio.',
      sections: [
        {
          title: 'Descripción del servicio',
          paragraphs: [
            'Fix The Speaker es una utilidad web gratuita para expulsar agua y limpiar el polvo de altavoces de dispositivos móviles.',
          ],
        },
        {
          title: 'Uso bajo tu propia responsabilidad',
          paragraphs: [
            'Asegúrate de ajustar un volumen adecuado y no colocar el altavoz pegado a los oídos durante los tonos agudos.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contacto | Fix The Speaker',
      description: 'Ponte en contacto con el equipo de Fix The Speaker para dudas o sugerencias.',
      heading: 'Contacto',
      eyebrow: 'Contacto',
      intro:
        '¿Tienes alguna duda, sugerencia o has encontrado un error? Escríbenos un correo y te responderemos lo antes posible.',
      buttonText: 'Enviar email a hello@fixthespeaker.com',
      detailsTitle: 'Datos útiles a incluir',
      detailsList: [
        'Modelo de smartphone y versión del sistema operativo.',
        'Navegador utilizado (Safari, Chrome, etc.).',
        'Modo ejecutado (Expulsar Agua, Limpiar Polvo o Prueba).',
      ],
      beforeTitle: 'Antes de escribir',
      beforeText:
        'No podemos reparar averías físicas por email. Si tu altavoz sigue sin funcionar tras varios ciclos, acude a un servicio técnico oficial.',
      linksText: 'Consulta nuestra Política de Privacidad y Términos de Uso.',
    },
  },
  ja: {
    about: {
      title: 'Fix The Speakerについて: 無料のスピーカー水抜きツール',
      description:
        'Fix The Speakerは音波振動でスマホスピーカーの水やホコリを排出する無料のWebツールです。',
      heading: '当サイトについて',
      eyebrow: '概要',
      intro:
        'Fix The Speakerは、スマホのスピーカーグリルに入った水やホコリを音波の力で排出する無料Webツールです。アプリ不要でブラウザから60秒で利用できます。',
      sections: [
        {
          title: '開発の背景',
          paragraphs: [
            'お風呂や雨で濡れたスマホのスピーカーがこもるトラブルは日常茶飯事です。生米に入れるなどの不確実な方法ではなく、音波物理学に基づいた安全な解決策を提供します。',
          ],
        },
        {
          title: '動作原理',
          paragraphs: [
            'Web Audio APIを用いて端末内で直接音波を合成します。録音やデータ送信は一切行いません。',
          ],
          list: [
            '水抜き音：165Hzの強力なパルス矩形波で振動板を大きく動かし、水滴を押し出します。',
            'ホコリ掃除：2.5kHz〜14.5kHzの高周波スイープで固着したゴミを浮かせます。',
            'スピーカーテスト：左右のチャンネルを個別に鳴らして音質を確認します。',
          ],
        },
      ],
    },
    privacy: {
      title: 'プライバシーポリシー | Fix The Speaker',
      description: 'Fix The Speakerのプライバシーポリシーとデータ保護方針について。',
      heading: 'プライバシーポリシー',
      eyebrow: '法的情報',
      updated: '2026-09-03',
      intro:
        '当サービスはお客様のプライバシーを最優先に考えており、マイクへのアクセスや音声の録音は一切行いません。',
      sections: [
        {
          title: '処理する情報',
          paragraphs: [
            'すべての音波はご利用のブラウザ内で完結して生成されます。個人情報の入力は一切不要です。',
          ],
        },
        {
          title: 'ニュースレター登録データ',
          paragraphs: [
            'ニュースレターに登録された場合、メールアドレス・IPアドレス・国情報をCloudflare Workers KV経由で安全に保存します。これらのデータを第三者に販売することはありません。削除をご希望の場合はsupport@fixthespeaker.comまでご連絡ください。',
          ],
        },
      ],
    },
    terms: {
      title: '利用規約 | Fix The Speaker',
      description: 'Fix The Speakerのサービス利用規約。',
      heading: '利用規約',
      eyebrow: '法的情報',
      updated: '2026-09-03',
      intro: '本サイトをご利用いただくにあたり、以下の規約に同意いただいたものとみなします。',
      sections: [
        {
          title: '免責事項',
          paragraphs: [
            '本ツールはスピーカーグリルの水分排出を補助するものであり、基板内部の水没故障を修理するものではありません。',
          ],
        },
      ],
    },
    contact: {
      title: 'お問い合わせ | Fix The Speaker',
      description: 'Fix The Speakerに関するお問い合わせ・不具合報告はこちらから。',
      heading: 'お問い合わせ',
      eyebrow: 'お問い合わせ',
      intro: 'ご質問や改善のご提案がございましたら、お気軽にメールでお問い合わせください。',
      buttonText: 'メールを送信: hello@fixthespeaker.com',
      detailsTitle: '記載いただくとスムーズな情報',
      detailsList: [
        'ご使用の機種・OS（例: iPhone 15 / iOS 18）',
        'ご利用のブラウザ（Safari、Chrome等）',
        '実行したモード（水抜き、ホコリ掃除、テスト）',
      ],
      beforeTitle: 'お問い合わせの前に',
      beforeText:
        'メールでのハードウェア修理対応はいたしかねます。物理故障の疑いがある場合はメーカー修理をご検討ください。',
      linksText: 'プライバシーポリシーおよび利用規約もあわせてご確認ください。',
    },
  },
  fr: {
    about: {
      title: 'À propos de Fix The Speaker : Nettoyeur de Haut-Parleur Gratuit',
      description:
        'Fix The Speaker utilise des ondes acoustiques pour éjecter l’eau et la poussière de votre smartphone.',
      heading: 'À propos de Fix The Speaker',
      eyebrow: 'À propos',
      intro:
        'Fix The Speaker est un micro-outil web gratuit conçu pour évacuer l’eau et les poussières de la grille acoustique de votre téléphone grâce aux fréquences sonores.',
      sections: [
        {
          title: 'Pourquoi ce site existe',
          paragraphs: [
            'Après une immersion ou sous la pluie, le son devient étouffé. Notre outil en ligne résout ce problème en 60 secondes sans installer d’application.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Politique de Confidentialité | Fix The Speaker',
      description: 'Politique de confidentialité et protection des données.',
      heading: 'Politique de Confidentialité',
      eyebrow: 'Légal',
      updated: '2026-09-03',
      intro: 'Cet outil fonctionne entièrement dans votre navigateur. Aucun enregistrement micro n’est effectué.',
      sections: [
        {
          title: 'Données traitées',
          paragraphs: ['Le son est généré localement avec Web Audio API sans transmission de données.'],
        },
        {
          title: 'Données d’abonnement à la newsletter',
          paragraphs: [
            'Si vous vous abonnez à notre liste de notifications, nous collectons votre adresse e-mail, adresse IP et pays via Cloudflare Workers KV. Ces données ne sont pas vendues. Pour en demander la suppression, écrivez à support@fixthespeaker.com.',
          ],
        },
      ],
    },
    terms: {
      title: 'Conditions d’Utilisation | Fix The Speaker',
      description: 'Conditions générales d’utilisation du service Fix The Speaker.',
      heading: 'Conditions d’Utilisation',
      eyebrow: 'Légal',
      updated: '2026-09-03',
      intro: 'En utilisant ce site web, vous acceptez les présentes conditions générales.',
      sections: [
        {
          title: 'Limitation de responsabilité',
          paragraphs: ['L’outil évacue l’eau de la grille mais ne répare pas les dommages électroniques internes.'],
        },
      ],
    },
    contact: {
      title: 'Contact | Fix The Speaker',
      description: 'Contactez-nous pour toute question ou suggestion.',
      heading: 'Contact',
      eyebrow: 'Contact',
      intro: 'Une question ou un retour ? Envoyez-nous un email.',
      buttonText: 'Envoyer un email : hello@fixthespeaker.com',
      detailsTitle: 'Informations utiles',
      detailsList: ['Modèle de smartphone', 'Navigateur utilisé', 'Mode testé'],
      beforeTitle: 'Avant de nous écrire',
      beforeText: 'Nous ne réparons pas les pannes physiques par email.',
      linksText: 'Consultez notre Politique de Confidentialité et nos Conditions d’Utilisation.',
    },
  },
  de: {
    about: {
      title: 'Über Fix The Speaker: Kostenloser Lautsprecher-Reiniger',
      description: 'Fix The Speaker nutzt 165-Hz-Schallwellen, um Wasser und Staub aus Handy-Lautsprechern zu entfernen.',
      heading: 'Über Fix The Speaker',
      eyebrow: 'Über uns',
      intro:
        'Fix The Speaker ist ein kostenloses Web-Tool, das Wasser und Schmutz mithilfe gezielter Schallwellen in 60 Sekunden aus dem Lautsprechergitter drückt.',
      sections: [
        {
          title: 'Funktionsweise',
          paragraphs: [
            'Rechteckwellen bei 165 Hz bringen die Lautsprechermembran in maximale Schwingung und schleudern gefangenes Wasser heraus.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung | Fix The Speaker',
      description: 'Datenschutzerklärung und Hinweise zur Datenverarbeitung.',
      heading: 'Datenschutzerklärung',
      eyebrow: 'Rechtliches',
      updated: '2026-09-03',
      intro: 'Wir erfassen keine persönlichen Daten und benötigen keinen Mikrofonzugriff.',
      sections: [
        {
          title: 'Lokale Ausführung',
          paragraphs: ['Die Tonerzeugung erfolgt vollständig lokal über die HTML5 Web Audio API.'],
        },
        {
          title: 'Newsletter-Abonnementdaten',
          paragraphs: [
            'Wenn Sie sich für unsere Benachrichtigungsliste anmelden, speichern wir Ihre E-Mail-Adresse, IP-Adresse und Ihr Land sicher über Cloudflare Workers KV. Diese Daten werden nicht verkauft. Zur Löschung wenden Sie sich bitte an support@fixthespeaker.com.',
          ],
        },
      ],
    },
    terms: {
      title: 'Nutzungsbedingungen | Fix The Speaker',
      description: 'Nutzungsbedingungen für Fix The Speaker.',
      heading: 'Nutzungsbedingungen',
      eyebrow: 'Rechtliches',
      updated: '2026-09-03',
      intro: 'Mit der Nutzung dieser Website erklären Sie sich mit den folgenden Bedingungen einverstanden.',
      sections: [
        {
          title: 'Haftungsausschluss',
          paragraphs: ['Das Tool entfernt Wasser aus dem Gitter, ersetzt aber keine Hardware-Reparatur.'],
        },
      ],
    },
    contact: {
      title: 'Kontakt | Fix The Speaker',
      description: 'Kontaktieren Sie das Team von Fix The Speaker bei Fragen oder Feedback.',
      heading: 'Kontakt',
      eyebrow: 'Kontakt',
      intro: 'Haben Sie Fragen oder Verbesserungsvorschläge? Schreiben Sie uns eine E-Mail.',
      buttonText: 'E-Mail senden: hello@fixthespeaker.com',
      detailsTitle: 'Hilfreiche Angaben',
      detailsList: ['Gerätemodell und Betriebssystem', 'Verwendeter Browser', 'Ausgeführter Modus'],
      beforeTitle: 'Wichtiger Hinweis',
      beforeText: 'Hardwaredefekte können nicht per E-Mail repariert werden.',
      linksText: 'Bitte beachten Sie auch unsere Datenschutzerklärung und Nutzungsbedingungen.',
    },
  },
  pt: {
    about: {
      title: 'Sobre o Fix The Speaker: Limpador de Alto-Falante Grátis',
      description: 'Ferramenta online que usa frequências sonoras para ejetar água e poeira do celular.',
      heading: 'Sobre o Fix The Speaker',
      eyebrow: 'Sobre',
      intro:
        'Fix The Speaker é uma ferramenta web gratuita para desentupir e secar alto-falantes de smartphones usando vibrações sonoras em 60 segundos.',
      sections: [
        {
          title: 'Como funciona',
          paragraphs: [
            'O tom pulsante de 165 Hz move o diafragma do alto-falante gerando rajadas de ar que expelem a água da grade.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Política de Privacidade | Fix The Speaker',
      description: 'Política de privacidade de dados do Fix The Speaker.',
      heading: 'Política de Privacidade',
      eyebrow: 'Legal',
      updated: '2026-09-03',
      intro: 'Não gravamos áudio, não pedimos acesso ao microfone e nada é enviado para servidores.',
      sections: [
        {
          title: 'Processamento local',
          paragraphs: ['Todo o som é gerado no seu próprio navegador através da Web Audio API.'],
        },
        {
          title: 'Dados de assinatura da newsletter',
          paragraphs: [
            'Se você se inscrever na nossa lista de notificações, coletamos seu e-mail, endereço IP e país de forma segura via Cloudflare Workers KV. Esses dados não são vendidos. Para solicitar a exclusão, entre em contato pelo support@fixthespeaker.com.',
          ],
        },
      ],
    },
    terms: {
      title: 'Termos de Uso | Fix The Speaker',
      description: 'Termos e condições de uso do Fix The Speaker.',
      heading: 'Termos de Uso',
      eyebrow: 'Legal',
      updated: '2026-09-03',
      intro: 'Ao utilizar este site, você concorda com os seguintes termos e condições.',
      sections: [
        {
          title: 'Responsabilidade',
          paragraphs: ['A ferramenta ejeta água da grade acústica, mas não conserta danos físicos na placa.'],
        },
      ],
    },
    contact: {
      title: 'Contato | Fix The Speaker',
      description: 'Fale conosco para dúvidas, sugestões ou relatar problemas.',
      heading: 'Contato',
      eyebrow: 'Contato',
      intro: 'Encontrou algum problema ou tem sugestões? Envie-nos um e-mail.',
      buttonText: 'Enviar e-mail: hello@fixthespeaker.com',
      detailsTitle: 'Detalhes úteis para incluir',
      detailsList: ['Modelo do aparelho', 'Navegador utilizado', 'Modo executado'],
      beforeTitle: 'Antes de escrever',
      beforeText: 'Não realizamos conserto de hardware por e-mail.',
      linksText: 'Consulte nossa Política de Privacidade e Termos de Uso.',
    },
  },
  ko: {
    about: {
      title: 'Fix The Speaker 소개: 무료 스마트폰 스피커 물빼기',
      description: '165Hz 음파 진동으로 스마트폰 스피커의 물과 먼지를 제거하는 무료 웹 유틸리티입니다.',
      heading: '서비스 소개',
      eyebrow: '소개',
      intro:
        'Fix The Speaker는 스마트폰 스피커 그릴에 들어간 물방울과 먼지를 음파 진동으로 배출하는 무료 웹 도구입니다. 어플 설치 없이 60초 만에 소리를 복구합니다.',
      sections: [
        {
          title: '원리',
          paragraphs: [
            '165Hz 사각파 진동이 스피커 진동판을 최대로 움직여 강한 공기압으로 물방울을 외부로 밀어냅니다.',
          ],
        },
      ],
    },
    privacy: {
      title: '개인정보처리방침 | Fix The Speaker',
      description: 'Fix The Speaker 개인정보 보호 방침 안내.',
      heading: '개인정보처리방침',
      eyebrow: '법적고지',
      updated: '2026-09-03',
      intro: '당사는 마이크 접근 권한을 요구하지 않으며, 어떠한 개인 오디오 데이터도 수집하지 않습니다.',
      sections: [
        {
          title: '데이터 처리',
          paragraphs: ['모든 음파는 브라우저 내부 Web Audio API를 통해 로컬에서 생성됩니다.'],
        },
        {
          title: '뉴스레터 구독 데이터',
          paragraphs: [
            '뉴스레터를 구독하실 경우 이메일 주소, IP 주소, 국가 정보를 Cloudflare Workers KV를 통해 안전하게 저장합니다. 해당 데이터는 판매되지 않습니다. 삭제 요청은 support@fixthespeaker.com으로 연락해 주세요.',
          ],
        },
      ],
    },
    terms: {
      title: '이용약관 | Fix The Speaker',
      description: 'Fix The Speaker 서비스 이용약관.',
      heading: '이용약관',
      eyebrow: '법적고지',
      updated: '2026-09-03',
      intro: '본 웹사이트를 이용함으로써 다음 약관에 동의하는 것으로 간주됩니다.',
      sections: [
        {
          title: '면책조항',
          paragraphs: ['본 도구는 스피커 망의 수분을 털어내는 용도이며, 내부 메인보드 침수 고장은 수리할 수 없습니다.'],
        },
      ],
    },
    contact: {
      title: '문의하기 | Fix The Speaker',
      description: 'Fix The Speaker 관련 문의 및 버그 신고.',
      heading: '문의하기',
      eyebrow: '문의하기',
      intro: '의견이나 질문이 있으시면 언제든지 이메일로 연락주세요.',
      buttonText: '이메일 보내기: hello@fixthespeaker.com',
      detailsTitle: '함께 적어주시면 좋은 정보',
      detailsList: ['스마트폰 기종 및 OS 버전', '사용하신 브라우저', '실행한 모드'],
      beforeTitle: '문의 전 확인사항',
      beforeText: '이메일을 통한 물리적 하드웨어 수리는 지원하지 않습니다.',
      linksText: '개인정보처리방침 및 이용약관을 확인하세요.',
    },
  },
  it: {
    about: {
      title: 'Informazioni su Fix The Speaker: Pulizia Altoparlante Gratuita',
      description:
        'Fix The Speaker utilizza onde sonore a 165 Hz per espellere acqua e polvere dagli altoparlanti del telefono.',
      heading: 'Informazioni su Fix The Speaker',
      eyebrow: 'Chi siamo',
      intro:
        'Fix The Speaker è uno strumento online gratuito che sfrutta la potenza delle onde sonore per espellere acqua e polvere dalla griglia acustica dello smartphone in 60 secondi.',
      sections: [
        {
          title: 'Come funziona',
          paragraphs: [
            'L’onda quadra a 165 Hz spinge la membrana dell’altoparlante alla massima escursione, generando getti d’aria che espellono le gocce d’acqua.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Informativa sulla Privacy | Fix The Speaker',
      description: 'Informativa sulla privacy e protezione dei dati personali.',
      heading: 'Informativa sulla Privacy',
      eyebrow: 'Legale',
      updated: '2026-09-03',
      intro: 'Non registriamo audio né richiediamo l’accesso al microfono. Il tool è sicuro al 100%.',
      sections: [
        {
          title: 'Dati trattati',
          paragraphs: ['Il suono viene generato localmente nel browser tramite Web Audio API.'],
        },
        {
          title: 'Dati di iscrizione alla newsletter',
          paragraphs: [
            'Se ti iscrivi alla nostra lista di notifiche, raccogliamo il tuo indirizzo e-mail, indirizzo IP e paese tramite Cloudflare Workers KV in modo sicuro. Questi dati non vengono venduti. Per richiederne la cancellazione, scrivi a support@fixthespeaker.com.',
          ],
        },
      ],
    },
    terms: {
      title: 'Termini di Utilizzo | Fix The Speaker',
      description: 'Termini e condizioni di utilizzo del servizio.',
      heading: 'Termini di Utilizzo',
      eyebrow: 'Legale',
      updated: '2026-09-03',
      intro: 'Utilizzando questo sito web, accetti i seguenti termini e condizioni di servizio.',
      sections: [
        {
          title: 'Limitazione di responsabilità',
          paragraphs: ['Lo strumento espelle l’acqua dalla griglia acustica ma non ripara danni fisici ai circuiti.'],
        },
      ],
    },
    contact: {
      title: 'Contatti | Fix The Speaker',
      description: 'Contattaci per domande, suggerimenti o segnalazioni.',
      heading: 'Contatti',
      eyebrow: 'Contatti',
      intro: 'Hai domande o suggerimenti? Inviaci un’email.',
      buttonText: 'Invia email: hello@fixthespeaker.com',
      detailsTitle: 'Dettagli utili da includere',
      detailsList: ['Modello del telefono', 'Browser utilizzato', 'Modalità eseguita'],
      beforeTitle: 'Prima di scrivere',
      beforeText: 'Non effettuiamo riparazioni hardware fisiche via email.',
      linksText: 'Consulta la nostra Informativa sulla Privacy e i Termini di Utilizzo.',
    },
  },
};
