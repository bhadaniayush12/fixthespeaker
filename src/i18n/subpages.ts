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
      title: 'About Fix The Speaker: Free Phone Speaker Cleaner',
      description:
        'Fix The Speaker is a free, browser-based phone speaker cleaner that uses sound waves to eject water and loosen dust. Learn how and why it was built.',
      heading: 'About Fix The Speaker',
      eyebrow: 'About',
      intro:
        'Fix The Speaker is a free micro-tool that does one thing well: it uses sound waves to clear a phone speaker grille. Play a tone, hold the phone speaker-down, and trapped water is pushed out in about 60 seconds. A second mode loosens dust and lint, and a third checks that both channels are working.',
      sections: [
        {
          title: 'Why it exists',
          paragraphs: [
            'Almost every smartphone sounds muffled at some point, usually after rain, a shower or a spilled drink. The fix is simple acoustic physics, yet most people are told to bury their phone in rice or wait days for it to dry. We built a tool that is honest about what it can do, works instantly on any device, and does not bury the button under ads and clutter.',
          ],
        },
        {
          title: 'How it works',
          paragraphs: [
            'Every tone is generated in your browser with the Web Audio API. Nothing is downloaded, nothing is recorded and the tool never asks for microphone access.',
          ],
          list: [
            'Water Eject: Plays a 165 Hz pulsing bass square wave that moves the speaker diaphragm in large physical strokes, pushing droplets out through the mesh grille.',
            'Dust Cleaner: Sweeps between 2.5 kHz and 14.5 kHz to vibrate loose dried lint, sand and dust particles so they can be brushed off.',
            'Speaker Test: Plays isolated tones through the left channel, the right channel, and then both in stereo so you can diagnose audio balance.',
          ],
        },
        {
          title: 'What it will not do',
          paragraphs: [
            'This tool ejects water from the acoustic speaker grille. It does not repair internal hardware damage or short-circuited logic boards. If your phone was submerged, shows a liquid warning in the charging port, or still crackles after several dry cycles, have it inspected by a certified technician.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy | Fix The Speaker',
      description:
        'Privacy policy for Fix The Speaker, the free phone speaker cleaner. Learn what data is collected, how cookies work, and your choices.',
      heading: 'Privacy Policy',
      eyebrow: 'Legal',
      updated: '2026-09-03',
      intro:
        'This policy explains what information Fix The Speaker collects, how it is used and the choices you have. The short version: the tool itself collects nothing, and any processing comes solely from standard hosting logs and analytics services.',
      sections: [
        {
          title: 'Information the tool processes',
          paragraphs: [
            'The speaker cleaning tool runs entirely client-side in your browser. Sound is synthesized locally on your device with the Web Audio API. We do not record audio, request microphone permissions, create accounts, or ask you to enter personal information.',
          ],
        },
        {
          title: 'Information collected automatically',
          paragraphs: [
            'Like most websites, our hosting provider records standard technical data in server logs (such as IP address, browser type, referring page and timestamps) to keep the site secure and fast.',
          ],
        },
        {
          title: 'Cookies and analytics',
          paragraphs: [
            'We may use basic analytics to understand general visitor metrics in an aggregated form. You can disable cookies in your browser settings at any time, and the speaker cleaning tool will continue to work without restriction.',
          ],
        },
        {
          title: 'Third-party services',
          paragraphs: [
            'Fonts are served via Google Fonts. No personal data is sold or shared with external data brokers.',
          ],
        },
        {
          title: 'Your rights and changes',
          paragraphs: [
            'You may contact us regarding any privacy inquiries. We may update this policy occasionally, with the revision date noted at the top.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms of Use | Fix The Speaker',
      description:
        'Terms of use for Fix The Speaker, the free phone speaker cleaner. Read the conditions, disclaimers and limitations that apply.',
      heading: 'Terms of Use',
      eyebrow: 'Legal',
      updated: '2026-09-03',
      intro:
        'By accessing and using Fix The Speaker (fixthespeaker.com), you agree to these terms. If you do not agree, please do not use the service.',
      sections: [
        {
          title: 'What the service is',
          paragraphs: [
            'Fix The Speaker is a free, web-based utility that plays audio frequencies through your device speakers to help eject liquid, loosen lint, and test stereo channels. It is provided for informational and utility purposes only.',
          ],
        },
        {
          title: 'Use at your own risk',
          paragraphs: [
            'The tool plays audio tones at the volume you choose on your device. You are responsible for setting a comfortable volume, keeping the phone away from your ears during high-frequency cleaning, removing earbuds before starting, and following on-screen instructions.',
          ],
        },
        {
          title: 'No repair guarantee',
          paragraphs: [
            'This tool physically pushes water from the speaker grille. It does not fix internal hardware failures or water-damaged electronics. We make no warranty that your speaker will be 100% restored if physical driver damage exists.',
          ],
        },
        {
          title: 'Disclaimer of warranties & limitation of liability',
          paragraphs: [
            'The site and tool are provided "as is" without warranty of any kind. Fix The Speaker and its operators shall not be liable for any indirect or consequential damages arising from the use of the site.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact | Fix The Speaker',
      description:
        'Contact Fix The Speaker with questions, bug reports or feedback about our free phone speaker cleaner tool.',
      heading: 'Contact Us',
      eyebrow: 'Get in Touch',
      intro:
        'Found a bug, have a suggestion, or want to share feedback about the speaker cleaner? Send us an email and we will get back to you promptly.',
      buttonText: 'Email hello@fixthespeaker.com',
      detailsTitle: 'Helpful details to include',
      detailsList: [
        'Your smartphone/laptop device model and operating system.',
        'The browser you used (Safari, Chrome, Firefox, etc.).',
        'Which cleaning mode was running (Water Eject, Dust Cleaner, or Speaker Test).',
        'Whether your phone was exposed to fresh water, salt water, or dust.',
      ],
      beforeTitle: 'Before you write',
      beforeText:
        'We cannot physically repair hardware over email. If your speaker still crackles after several cleaning cycles or shows a liquid-detection alert, please visit a certified service center.',
      linksText: 'For legal and data details, see our Privacy Policy and Terms of Use.',
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
