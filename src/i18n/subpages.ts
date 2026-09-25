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
      description:
        'Política de privacidad de Fix The Speaker. Conoce nuestra política de cero recolección de audio, analítica con GA4, Consent Mode v2 y avisos de publicidad de terceros.',
      heading: 'Política de Privacidad',
      eyebrow: 'Legal y Cumplimiento',
      updated: '2026-09-07',
      intro:
        'Esta Política de Privacidad describe cómo Fix The Speaker («nosotros», «nuestro» o «el Servicio») gestiona la información cuando visitas fixthespeaker.com. Estamos comprometidos con la transparencia: nuestra herramienta funciona íntegramente en tu navegador y nunca accede a tu micrófono, no graba audio ni recopila transmisiones de audio personales.',
      sections: [
        {
          title: '1. Cero Datos de Audio y Funcionamiento en el Lado del Cliente',
          paragraphs: [
            'Fix The Speaker utiliza la API HTML5 Web Audio en el lado del cliente para sintetizar frecuencias sonoras acústicas directamente en la CPU de tu dispositivo. Toda la generación de tonos, barridos de frecuencia y pruebas de balance estéreo ocurren exclusivamente en el entorno aislado (sandbox) de tu navegador local.',
            'No solicitamos permisos de acceso al micrófono, nunca grabamos ni transmitimos audio entrante, y no requerimos la creación de cuentas, contraseñas ni credenciales personales para utilizar ninguna de las funciones de limpieza.',
          ],
        },
        {
          title: '2. Información Recopilada Automáticamente',
          paragraphs: [
            'Cuando accedes a nuestro sitio web, los registros estándar del servidor de alojamiento (proporcionados a través de Cloudflare) recopilan automáticamente telemetría técnica de red necesaria para entregar los recursos web, mitigar ciberataques (como ataques DDoS) y garantizar la estabilidad del sitio. Estos datos incluyen:',
          ],
          list: [
            'Dirección de Protocolo de Internet (IP) (anonimizada y ofuscada en los informes analíticos)',
            'Tipo de navegador, cadena de agente de usuario y sistema operativo',
            'URL de referencia, páginas visitadas y fecha/hora de acceso',
            'Preferencia de idioma y resolución de pantalla genérica',
          ],
        },
        {
          title: '3. Cookies, Almacenamiento Local y Consent Mode v2',
          paragraphs: [
            'Nuestro sitio web utiliza el almacenamiento local del navegador y cookies esenciales para mantener las preferencias básicas del usuario. En concreto, almacenamos:',
          ],
          list: [
            'fixthespeaker_cookie_consent_v1: Registra tus preferencias de cookies (opciones de analítica y publicidad) para respetar tus decisiones en visitas posteriores.',
            'theme: Guarda tu preferencia de interfaz de modo oscuro o claro.',
          ],
        },
        {
          title: '4. Seguimiento con Google Analytics 4 (GA4)',
          paragraphs: [
            'Utilizamos Google Analytics 4 (ID de medición: G-924DECLM9L) para analizar tendencias agregadas de tráfico y patrones de interacción de los usuarios. En cumplimiento con Google Consent Mode v2, las etiquetas de almacenamiento analítico y publicitario (ad_storage, analytics_storage, ad_user_data, ad_personalization) se establecen en «denied» (denegadas) de forma predeterminada cuando cargas el sitio por primera vez.',
            'Google Analytics solo se activa si otorgas tu consentimiento explícito a través de nuestro banner de cookies. Puedes gestionar o revocar tu consentimiento en cualquier momento haciendo clic en el enlace «Configuración de cookies» ubicado en el pie de página del sitio web.',
          ],
        },
        {
          title: '5. Publicidad de Terceros y Avisos de Google AdSense',
          paragraphs: [
            'Podemos mostrar anuncios de terceros a través de Google AdSense y redes publicitarias afiliadas para respaldar el funcionamiento gratuito de Fix The Speaker. Por favor, revisa las siguientes declaraciones obligatorias:',
          ],
          list: [
            'Los proveedores de terceros, incluido Google, utilizan cookies para publicar anuncios basados en las visitas previas del usuario a este sitio web o a otros sitios de Internet.',
            'El uso de cookies publicitarias por parte de Google permite a este y a sus socios mostrar anuncios a los usuarios en función de sus visitas a nuestro sitio y/o a otros sitios de Internet.',
            'Los usuarios pueden inhabilitar la publicidad personalizada accediendo a la Configuración de Anuncios de Google (https://adssettings.google.com).',
            'Alternativamente, puedes inhabilitar el uso de cookies de proveedores externos para la publicidad personalizada visitando AboutAds (http://www.aboutads.info/choices) o la Network Advertising Initiative (http://www.networkadvertising.org/choices/).',
          ],
        },
        {
          title: '6. Derechos de Protección de Datos bajo el RGPD y RGPD del Reino Unido',
          paragraphs: [
            'Si resides en el Espacio Económico Europeo (EEE), el Reino Unido o Suiza, cuentas con derechos específicos en virtud del Reglamento General de Protección de Datos (RGPD) y el RGPD del Reino Unido, incluidos los derechos de acceso, rectificación o supresión de tus datos personales, así como el derecho a retirar el consentimiento de cookies en cualquier momento sin que ello afecte tu acceso a la utilidad de limpieza del altavoz.',
          ],
        },
        {
          title: '7. Ley de Privacidad del Consumidor de California (CCPA / CPRA)',
          paragraphs: [
            'De conformidad con la Ley de Privacidad del Consumidor de California (CCPA) y la Ley de Derechos de Privacidad de California (CPRA), los residentes de California tienen derecho a conocer qué información personal se recopila, solicitar su eliminación y optar por no vender ni compartir dicha información personal. Fix The Speaker no vende información personal a intermediarios de datos (data brokers).',
          ],
        },
        {
          title: '8. Datos de Suscripción al Boletín Informativo',
          paragraphs: [
            'Si decides suscribirte a nuestra lista de notificaciones a través del formulario del sitio web, recopilamos los siguientes datos en tu nombre y los almacenamos de forma segura mediante nuestro proveedor externo de entrega de correo electrónico (Cloudflare Workers KV):',
          ],
          list: [
            'Dirección de correo electrónico: utilizada exclusivamente para enviarte avisos de actualizaciones del producto.',
            'Dirección IP: recopilada en el momento de la suscripción para prevención de spam y analítica geográfica.',
            'País: deducido a partir de la dirección IP en el momento de la suscripción con fines analíticos regionales.',
          ],
        },
        {
          title: '8a. Derechos y Supresión de Datos del Boletín',
          paragraphs: [
            'No vendemos ni compartimos los datos de tu suscripción al boletín con anunciantes externos.',
            'Puedes cancelar tu suscripción en cualquier momento utilizando el enlace incluido en cada correo de notificación. Para solicitar la eliminación total de tus datos de suscripción (correo electrónico, dirección IP y registro de país), ponte en contacto con nosotros en support@fixthespeaker.com y procesaremos tu solicitud en un plazo de 30 días.',
          ],
        },
        {
          title: '9. Consultas de Privacidad y Actualizaciones de la Política',
          paragraphs: [
            'Podemos actualizar periódicamente esta Política de Privacidad para reflejar cambios técnicos o exigencias regulatorias. Cualquier modificación se publicará en esta página con la fecha revisada de «Última actualización».',
            'Si tienes alguna pregunta acerca de esta Política de Privacidad o de nuestras prácticas de tratamiento de datos, contáctanos en support@fixthespeaker.com.',
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
      buttonText: 'Enviar email a support@fixthespeaker.com',
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
      description:
        'Fix The Speakerのプライバシーポリシー。音声データの非収集方針、Googleアナリティクス4、同意モードv2、サードパーティ広告に関する開示事項について詳しく説明します。',
      heading: 'プライバシーポリシー',
      eyebrow: '法的情報とコンプライアンス',
      updated: '2026-09-07',
      intro:
        '本プライバシーポリシーは、fixthespeaker.comをご利用いただく際の情報のお取り扱いについて説明するものです。当サービスは透明性を重視しており、ツールは完全にブラウザ内で動作し、マイクへのアクセス、音声の録音、個人音声ストリームの収集を行うことは一切ありません。',
      sections: [
        {
          title: '1. 音声データの非収集とクライアントサイド動作',
          paragraphs: [
            'Fix The Speakerは、端末のCPU上で直接音波周波数を合成するためにクライアントサイドのHTML5 Web Audio APIを使用しています。すべてのトーン生成、周波数スイープ、ステレオバランステストはお使いのブラウザのローカルサンドボックス内でのみ実行されます。',
            'マイクのアクセス許可を求めることはなく、受信音声を録音・送信することもありません。また、クリーニング機能のご利用にあたってアカウント作成やパスワード、個人認証情報の入力は一切不要です。',
          ],
        },
        {
          title: '2. 自動的に収集される情報',
          paragraphs: [
            '当サイトにアクセスすると、Webアセットの配信、サイバー攻撃（DDoSなど）の緩和、およびサイトの信頼性確保に必要なネットワーク技術テレメトリが、標準的なホスティングサーバーログ（Cloudflare経由）により自動的に記録されます。これには以下の情報が含まれます：',
          ],
          list: [
            'インターネットプロトコル（IP）アドレス（アナリティクスレポートでは匿名化・非表示化されます）',
            'ブラウザの種類、ユーザーエージェント文字列、オペレーティングシステム',
            '参照元URL、訪問したページ、アクセス日時',
            '言語設定および一般的な画面解像度',
          ],
        },
        {
          title: '3. Cookie、ローカルストレージおよび同意モードv2',
          paragraphs: [
            '当サイトでは、基本的なユーザー設定を維持するためにブラウザのローカルストレージおよび必須Cookieを使用しています。具体的には以下のデータを保持します：',
          ],
          list: [
            'fixthespeaker_cookie_consent_v1: 次回以降の訪問時にも選択内容を反映できるよう、Cookie設定（分析および広告の選択）を記録します。',
            'theme: ダークモード/ライトモードの表示設定を保存します。',
          ],
        },
        {
          title: '4. Googleアナリティクス4（GA4）によるアクセス解析',
          paragraphs: [
            '当サイトでは、集計されたトラフィック動向や利用傾向を分析するためにGoogleアナリティクス4（測定ID: G-924DECLM9L）を使用しています。Google同意モードv2（Consent Mode v2）に基づき、初回アクセス時には分析および広告用ストレージタグ（ad_storage、analytics_storage、ad_user_data、ad_personalization）はデフォルトで「拒否（denied）」に設定されています。',
            'Googleアナリティクスは、Cookieバナーで明示的に同意をいただいた場合にのみ有効化されます。フッターにある「Cookie設定」リンクから、いつでも同意の変更や撤回が可能です。',
          ],
        },
        {
          title: '5. 第三者配信広告およびGoogle AdSenseに関する開示事項',
          paragraphs: [
            'Fix The Speakerの無料提供を維持するため、Google AdSenseおよび提携広告ネットワークによる第三者配信広告を掲載する場合があります。以下の必須開示事項をご確認ください：',
          ],
          list: [
            'Googleを含む第三者配信事業者は、Cookieを使用して、ユーザーが当サイトや他のウェブサイトに過去にアクセスした際の情報に基づいて広告を配信します。',
            'Googleが広告Cookieを使用することにより、ユーザーが当サイトや他のウェブサイトにアクセスした際の情報に基づいて、Googleやそのパートナーが適切な広告をユーザーに表示できます。',
            'ユーザーは、Google広告設定（https://adssettings.google.com）にアクセスして、パーソナライズ広告を無効にできます。',
            'また、AboutAds（http://www.aboutads.info/choices）またはNetwork Advertising Initiative（http://www.networkadvertising.org/choices/）にアクセスして、パーソナライズ広告に使われる第三者配信事業者のCookieを無効にすることもできます。',
          ],
        },
        {
          title: '6. GDPRおよび英国データ保護規則に基づく権利',
          paragraphs: [
            '欧州経済領域（EEA）、英国、またはスイスにお住まいの方は、一般データ保護規則（GDPR）および英国GDPRに基づき、個人データへのアクセス、訂正、削除を要求する権利、ならびにスピーカークリーニング機能へのアクセスに影響を与えることなくいつでもCookie同意を撤回する権利を有しています。',
          ],
        },
        {
          title: '7. カリフォルニア州消費者プライバシー法（CCPA / CPRA）',
          paragraphs: [
            'カリフォルニア州消費者プライバシー法（CCPA）およびカリフォルニア州プライバシー権法（CPRA）に基づき、カリフォルニア州居住者は収集される個人情報を把握し、その削除を要求し、個人情報の販売や共有をオプトアウトする権利があります。Fix The Speakerは個人情報をデータブローカー等に販売することはありません。',
          ],
        },
        {
          title: '8. ニュースレター登録データ',
          paragraphs: [
            'サイト上のフォームから更新通知リストに登録された場合、以下の情報が収集され、外部メール配信プロバイダー（Cloudflare Workers KV）を通じて安全に保管されます：',
          ],
          list: [
            'メールアドレス：製品アップデートのお知らせを送信する目的でのみ使用されます。',
            'IPアドレス：スパム防止および地域分析の目的で登録時に収集されます。',
            '国情報：地域統計分析のため、登録時のIPアドレスから推定されます。',
          ],
        },
        {
          title: '8a. ニュースレターデータの権利と削除',
          paragraphs: [
            'ニュースレターの登録データをサードパーティの広告主へ販売または共有することはありません。',
            '配信されるすべての通知メール内のリンクからいつでも登録を解除できます。登録データ（メールアドレス、IPアドレス、国情報）の完全な削除をご希望の場合は、support@fixthespeaker.comまでご連絡ください。30日以内に削除手続きを行います。',
          ],
        },
        {
          title: '9. お問い合わせおよびプライバシーポリシーの改定',
          paragraphs: [
            '技術的要件や法令の改正に伴い、本プライバシーポリシーを定期的に更新する場合があります。変更があった場合は、更新日を改定の上、本ページにて公表いたします。',
            '本プライバシーポリシーまたは当サイトのデータ保護に関するお問い合わせは、support@fixthespeaker.comまでお願いいたします。',
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
      buttonText: 'メールを送信: support@fixthespeaker.com',
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
      description:
        'Politique de confidentialité de Fix The Speaker : découvrez notre politique de non-collecte audio, l’analyse GA4, Consent Mode v2 et les mentions publicitaires tierces.',
      heading: 'Politique de Confidentialité',
      eyebrow: 'Légal & Conformité',
      updated: '2026-09-07',
      intro:
        'La présente Politique de Confidentialité détaille la manière dont Fix The Speaker (« nous », « notre » ou « le Service ») traite les informations lors de vos visites sur fixthespeaker.com. Nous nous engageons à une totale transparence : notre outil fonctionne exclusivement dans votre navigateur et n’accède jamais à votre microphone, n’enregistre aucun son et ne collecte aucun flux audio personnel.',
      sections: [
        {
          title: '1. Aucune Donnée Audio & Exécution Côté Client',
          paragraphs: [
            'Fix The Speaker utilise l’API HTML5 Web Audio côté client pour générer des fréquences sonores acoustiques directement sur le processeur de votre appareil. Toutes les émissions sonores, balayages de fréquences et tests de balance stéréo s’effectuent strictement dans le bac à sable (sandbox) local de votre navigateur.',
            'Nous ne demandons aucune autorisation d’accès au micro, nous n’enregistrons ni ne transmettons jamais d’audio, et nous n’exigeons aucun compte utilisateur, mot de passe ou identifiant pour utiliser nos fonctionnalités de nettoyage.',
          ],
        },
        {
          title: '2. Données Collectées Automatiquement',
          paragraphs: [
            'Lorsque vous visitez notre site, les journaux d’hébergement serveur standards (fournis par Cloudflare) collectent automatiquement les données télémétriques de réseau nécessaires à la diffusion des fichiers, à la prévention des cyberattaques (telles que les attaques DDoS) et à la stabilité du site. Ces données comprennent :',
          ],
          list: [
            'L’adresse IP (Internet Protocol) (anonymisée et tronquée dans les rapports d’analyse)',
            'Le type de navigateur, la chaîne user-agent et le système d’exploitation',
            'L’URL de référence, les pages consultées et l’horodatage de la visite',
            'La langue préférée et la résolution d’écran générique',
          ],
        },
        {
          title: '3. Cookies, Stockage Local & Consent Mode v2',
          paragraphs: [
            'Notre site utilise le stockage local du navigateur ainsi que des cookies essentiels afin de mémoriser vos préférences clés. En particulier, nous conservons :',
          ],
          list: [
            'fixthespeaker_cookie_consent_v1 : Enregistre vos choix en matière de cookies (analytics et publicité) afin de les respecter lors de vos prochaines visites.',
            'theme : Mémorise votre choix d’interface en mode sombre ou clair.',
          ],
        },
        {
          title: '4. Suivi Google Analytics 4 (GA4)',
          paragraphs: [
            'Nous utilisons Google Analytics 4 (Identifiant de mesure : G-924DECLM9L) pour analyser les tendances de fréquentation globale et les interactions. Conformément à Google Consent Mode v2, les balises de stockage analytique et publicitaire (ad_storage, analytics_storage, ad_user_data, ad_personalization) sont réglées sur « refusé » (denied) par défaut lors de votre premier accès au site.',
            'Google Analytics ne s’active que si vous donnez votre consentement explicite via notre bandeau de cookies. Vous pouvez modifier ou révoquer votre consentement à tout moment en cliquant sur le lien « Paramètres des cookies » situé dans le pied de page du site.',
          ],
        },
        {
          title: '5. Publicités de Tiers & Mentions Google AdSense',
          paragraphs: [
            'Nous pouvons diffuser des annonces publicitaires de tiers via Google AdSense et des régies publicitaires partenaires afin d’assurer la gratuité de Fix The Speaker. Veuillez prendre connaissance des mentions obligatoires suivantes :',
          ],
          list: [
            'Des fournisseurs tiers, y compris Google, utilisent des cookies pour diffuser des annonces en fonction des visites antérieures des internautes sur ce site web ou sur d’autres pages Internet.',
            'Grâce aux cookies publicitaires, Google et ses partenaires peuvent diffuser des annonces auprès de vos utilisateurs en fonction de leur navigation sur vos sites et/ou d’autres sites Internet.',
            'Les utilisateurs peuvent désactiver la publicité personnalisée dans les Paramètres des annonces Google (https://adssettings.google.com).',
            'Vous pouvez également refuser l’utilisation de cookies par des tiers pour la publicité personnalisée en consultant AboutAds (http://www.aboutads.info/choices) ou la Network Advertising Initiative (http://www.networkadvertising.org/choices/).',
          ],
        },
        {
          title: '6. Droits RGPD & Réglementation Britannique sur les Données',
          paragraphs: [
            'Si vous résidez dans l’Espace Économique Européen (EEE), au Royaume-Uni ou en Suisse, vous disposez de droits garantis par le Règlement Général sur la Protection des Données (RGPD) et le RGPD britannique, incluant le droit d’accès, de rectification et d’effacement de vos données, ainsi que le droit de retirer votre consentement aux cookies à tout moment sans restreindre l’accès à notre outil de nettoyage d’enceinte.',
          ],
        },
        {
          title: '7. Loi Californienne sur la Protection de la Vie Privée (CCPA / CPRA)',
          paragraphs: [
            'Conformément au California Consumer Privacy Act (CCPA) et au California Privacy Rights Act (CPRA), les résidents de Californie ont le droit d’accéder aux informations personnelles collectées, d’en demander la suppression et de refuser leur vente ou leur partage. Fix The Speaker ne vend aucune donnée personnelle à des courtiers en données (data brokers).',
          ],
        },
        {
          title: '8. Données d’Abonnement à la Newsletter',
          paragraphs: [
            'Si vous choisissez de vous inscrire à notre liste de notification via le formulaire du site, nous recueillons les informations suivantes et les stockons en toute sécurité auprès de notre prestataire de diffusion d’e-mails (Cloudflare Workers KV) :',
          ],
          list: [
            'Adresse e-mail : utilisée uniquement pour vous envoyer des notifications d’actualités sur le produit.',
            'Adresse IP : collectée au moment de l’inscription à des fins de prévention des abus (spam) et d’analyse géographique.',
            'Pays : déduit de l’adresse IP au moment de l’inscription pour des statistiques régionales.',
          ],
        },
        {
          title: '8a. Droits et Suppression des Données de Newsletter',
          paragraphs: [
            'Nous ne vendons ni ne partageons vos données d’abonnement avec des annonceurs tiers.',
            'Vous pouvez vous désabonner à tout instant grâce au lien présent dans chaque e-mail de notification. Pour demander la suppression définitive de vos données (e-mail, adresse IP et pays associé), écrivez-nous à support@fixthespeaker.com et nous traiterons votre demande sous 30 jours.',
          ],
        },
        {
          title: '9. Questions sur la Confidentialité & Modifications',
          paragraphs: [
            'Nous pouvons mettre à jour régulièrement cette Politique de Confidentialité afin de respecter les évolutions techniques ou réglementaires. Toute modification sera publiée ici avec une date de « Dernière mise à jour » actualisée.',
            'Pour toute question relative à cette Politique de Confidentialité ou à la gestion de vos données, vous pouvez nous contacter à support@fixthespeaker.com.',
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
      buttonText: 'Envoyer un email : support@fixthespeaker.com',
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
      description:
        'Datenschutzerklärung für Fix The Speaker: Informationen zu Audio-Datenschutz, Google Analytics 4, Consent Mode v2 und Angaben zu Werbepartnern.',
      heading: 'Datenschutzerklärung',
      eyebrow: 'Rechtliches & Datenschutz',
      updated: '2026-09-07',
      intro:
        'Diese Datenschutzerklärung erläutert, wie Fix The Speaker („wir“, „unser“ oder „der Dienst“) Daten beim Besuch von fixthespeaker.com verarbeitet. Transparenz ist uns wichtig: Unser Tool läuft vollständig in Ihrem Webbrowser, greift niemals auf Ihr Mikrofon zu, zeichnet keinen Ton auf und erfasst keine Audiodaten.',
      sections: [
        {
          title: '1. Keine Audiodatenerfassung & Lokale Ausführung',
          paragraphs: [
            'Fix The Speaker verwendet die clientseitige HTML5 Web Audio API, um akustische Frequenzen direkt auf dem Hauptprozessor Ihres Geräts zu erzeugen. Die Klangerzeugung, Frequenzläufe und Stereobalanctests finden ausschließlich in der lokalen Sandbox Ihres Browsers statt.',
            'Wir fordern keinerlei Zugriffsberechtigung auf das Mikrofon an, nehmen niemals Audio auf oder übertragen solches und verlangen für die Nutzung unserer Reinigungsfunktionen kein Benutzerkonto, Passwort oder persönliche Anmeldedaten.',
          ],
        },
        {
          title: '2. Automatisch erfasste Informationen',
          paragraphs: [
            'Beim Aufruf unserer Website erfassen standardmäßige Server-Hosting-Protokolle (über Cloudflare) automatisiert technische Netzwerk-Telemetriedaten, die zur Auslieferung von Webinhalten, zur Abwehr von Cyberangriffen (z. B. DDoS) und zur Gewährleistung der Stabilität erforderlich sind. Diese Daten umfassen:',
          ],
          list: [
            'IP-Adresse (in Analysereports anonymisiert und gekürzt)',
            'Browsertyp, User-Agent-String und Betriebssystem',
            'Referrer-URL, besuchte Seiten sowie Datum und Uhrzeit des Zugriffs',
            'Spracheinstellung und ungefähre Bildschirmauflösung',
          ],
        },
        {
          title: '3. Cookies, Lokaler Speicher & Consent Mode v2',
          paragraphs: [
            'Unsere Website nutzt den lokalen Browserspeicher sowie essenzielle Cookies, um grundlegende Benutzereinstellungen zu sichern. Konkret speichern wir:',
          ],
          list: [
            'fixthespeaker_cookie_consent_v1: Speichert Ihre Cookie-Präferenzen (für Analytik und Werbung), damit Ihre Entscheidung bei künftigen Besuchen gewahrt bleibt.',
            'theme: Sichert Ihre Einstellung für den Dunkelmodus oder Hellmodus.',
          ],
        },
        {
          title: '4. Erfassung mit Google Analytics 4 (GA4)',
          paragraphs: [
            'Wir setzen Google Analytics 4 (Mess-ID: G-924DECLM9L) ein, um aggregierte Nutzertrends und Interaktionsmuster zu analysieren. In Übereinstimmung mit Google Consent Mode v2 sind die Tags für Analyse- und Werbespeicher (ad_storage, analytics_storage, ad_user_data, ad_personalization) beim ersten Seitenaufruf standardmäßig auf „abgelehnt“ (denied) gesetzt.',
            'Google Analytics wird erst dann geladen, wenn Sie über unser Cookie-Banner ausdrücklich Ihre Zustimmung erteilen. Sie können Ihre Einwilligung jederzeit über den Link „Cookie-Einstellungen“ in der Fußzeile der Website anpassen oder widerrufen.',
          ],
        },
        {
          title: '5. Werbung von Drittanbietern & Hinweise zu Google AdSense',
          paragraphs: [
            'Zur Finanzierung des kostenlosen Betriebs von Fix The Speaker binden wir Werbeanzeigen von Drittanbietern über Google AdSense und verbundene Werbenetzwerke ein. Bitte beachten Sie die folgenden Pflichtangaben:',
          ],
          list: [
            'Drittanbieter, einschließlich Google, verwenden Cookies zur Bereitstellung von Anzeigen auf Grundlage vorheriger Besuche eines Nutzers auf dieser Website oder anderen Websites im Internet.',
            'Der Einsatz von Werbe-Cookies ermöglicht Google und seinen Partnern die Anzeigenschaltung basierend auf den Besuchen der Nutzer auf unserer Website und/oder anderen Websites im Internet.',
            'Nutzer können personalisierte Werbung in den Google-Einstellungen für Werbung (https://adssettings.google.com) deaktivieren.',
            'Alternativ können Sie die Verwendung von Cookies für personalisierte Werbung durch Drittanbieter über AboutAds (http://www.aboutads.info/choices) oder die Network Advertising Initiative (http://www.networkadvertising.org/choices/) ablehnen.',
          ],
        },
        {
          title: '6. Datenschutzrechte nach DSGVO & UK-DSGVO',
          paragraphs: [
            'Wenn Sie im Europäischen Wirtschaftsraum (EWR), im Vereinigten Königreich oder in der Schweiz ansässig sind, stehen Ihnen nach der Datenschutz-Grundverordnung (DSGVO) und der UK-DSGVO bestimmte Rechte zu, darunter das Recht auf Auskunft, Berichtigung oder Löschung personenbezogener Daten sowie das Recht, erteilte Cookie-Einwilligungen jederzeit zu widerrufen, ohne dass die Funktionalität der Lautsprecherreinigung eingeschränkt wird.',
          ],
        },
        {
          title: '7. California Consumer Privacy Act (CCPA / CPRA)',
          paragraphs: [
            'Gemäß dem California Consumer Privacy Act (CCPA) und dem California Privacy Rights Act (CPRA) haben Einwohner Kaliforniens das Recht zu erfahren, welche personenbezogenen Daten erfasst werden, deren Löschung zu verlangen und dem Verkauf oder der Weitergabe zu widersprechen. Fix The Speaker verkauft keine personenbezogenen Daten an Datenhändler (Data Broker).',
          ],
        },
        {
          title: '8. Newsletter-Abonnementdaten',
          paragraphs: [
            'Wenn Sie sich über das Formular für unseren Benachrichtigungsdienst eintragen, erfassen wir die folgenden Angaben und speichern diese sicher über unseren E-Mail-Dienstleister (Cloudflare Workers KV):',
          ],
          list: [
            'E-Mail-Adresse: dient ausschließlich dem Versand von Produktaktualisierungen.',
            'IP-Adresse: wird zum Zeitpunkt der Anmeldung zur Spam-Prävention und für geografische Analysen erfasst.',
            'Land: wird anhand der IP-Adresse bei der Anmeldung für regionale Auswertungen ermittelt.',
          ],
        },
        {
          title: '8a. Rechte & Löschung der Newsletter-Daten',
          paragraphs: [
            'Wir verkaufen oder übermitteln Ihre Newsletter-Abonnementdaten nicht an werbetreibende Dritte.',
            'Sie können den Newsletter jederzeit über den Link in jeder Benachrichtigungs-E-Mail abbestellen. Um die vollständige Löschung Ihrer Daten (E-Mail-Adresse, IP-Adresse und Land) zu veranlassen, schreiben Sie uns bitte an support@fixthespeaker.com. Wir bearbeiten Ihre Anfrage innerhalb von 30 Tagen.',
          ],
        },
        {
          title: '9. Datenschutzanfragen & Richtlinienänderungen',
          paragraphs: [
            'Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, um technischen oder rechtlichen Änderungen Rechnung zu tragen. Überarbeitungen werden an dieser Stelle mit dem aktualisierten Datum veröffentlicht.',
            'Bei Fragen zu dieser Datenschutzerklärung oder zu unserem Umgang mit Ihren Daten wenden Sie sich bitte an support@fixthespeaker.com.',
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
      buttonText: 'E-Mail senden: support@fixthespeaker.com',
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
      description:
        'Política de Privacidade do Fix The Speaker. Conheça nossa política de zero coleta de áudio, rastreamento GA4, Consent Mode v2 e divulgações de anúncios de terceiros.',
      heading: 'Política de Privacidade',
      eyebrow: 'Legal e Conformidade',
      updated: '2026-09-07',
      intro:
        'Esta Política de Privacidade descreve como o Fix The Speaker ("nós", "nosso" ou "o Serviço") trata as informações ao visitar fixthespeaker.com. Temos o compromisso com a transparência: nossa ferramenta opera integralmente no seu navegador e nunca acessa seu microfone, não grava áudios e não coleta transmissões pessoais de som.',
      sections: [
        {
          title: '1. Zero Dados de Áudio e Operação no Cliente',
          paragraphs: [
            'O Fix The Speaker utiliza a API HTML5 Web Audio no lado do cliente para sintetizar frequências sonoras diretamente no processador do seu aparelho. Toda geração de tons, varreduras de frequência e testes de balanço estéreo ocorrem unicamente no ambiente isolado (sandbox) do seu navegador local.',
            'Não solicitamos permissões de acesso ao microfone, nunca gravamos ou transmitimos sinais de áudio e não exigimos criação de conta, senhas ou credenciais pessoais para o uso dos recursos de limpeza.',
          ],
        },
        {
          title: '2. Informações Coletadas Automaticamente',
          paragraphs: [
            'Ao acessar nosso site, registros padrão de servidores de hospedagem (fornecidos via Cloudflare) coletam automaticamente dados telemétricos técnicos de rede indispensáveis para entregar os arquivos web, mitigar ciberataques (como ataques DDoS) e garantir a estabilidade do serviço. Esses dados englobam:',
          ],
          list: [
            'Endereço de Protocolo de Internet (IP) (anonimizado e mascarado em relatórios estatísticos)',
            'Tipo de navegador, sequência de agente do usuário (user agent) e sistema operacional',
            'URL de referência, páginas acessadas e data/hora do acesso',
            'Preferência de idioma e resolução genérica de tela',
          ],
        },
        {
          title: '3. Cookies, Armazenamento Local e Consent Mode v2',
          paragraphs: [
            'Nosso site utiliza armazenamento local do navegador e cookies essenciais para manter preferências básicas de navegação. Especificamente, armazenamos:',
          ],
          list: [
            'fixthespeaker_cookie_consent_v1: Registra suas opções de cookies (analítica e publicidade) para respeitar suas escolhas em acessos futuros.',
            'theme: Guarda sua preferência de exibição em modo escuro ou claro.',
          ],
        },
        {
          title: '4. Rastreamento com Google Analytics 4 (GA4)',
          paragraphs: [
            'Utilizamos o Google Analytics 4 (ID de métrica: G-924DECLM9L) para entender tendências de tráfego agregado e padrões de navegação. Em consonância com o Google Consent Mode v2, as tags de armazenamento para análise e publicidade (ad_storage, analytics_storage, ad_user_data, ad_personalization) permanecem configuradas como "negadas" (denied) por padrão no seu primeiro acesso.',
            'O Google Analytics só é ativado se você conceder consentimento expresso por meio do nosso banner de cookies. Você pode alterar ou revogar sua permissão a qualquer momento clicando no link "Configurações de Cookies" no rodapé do site.',
          ],
        },
        {
          title: '5. Publicidade de Terceiros e Divulgações do Google AdSense',
          paragraphs: [
            'Podemos exibir anúncios de terceiros via Google AdSense e redes de publicidade parceiras para manter o Fix The Speaker gratuito. Por favor, leia atentamente as declarações obrigatórias a seguir:',
          ],
          list: [
            'Fornecedores terceiros, incluindo o Google, utilizam cookies para veicular anúncios com base em visitas anteriores dos usuários a este site ou a outros sites na Internet.',
            'Com o uso de cookies de publicidade, o Google e seus parceiros podem veicular anúncios aos seus usuários com base nas visitas feitas ao seu site e/ou a outros sites na Internet.',
            'Os usuários podem desativar a publicidade personalizada acessando as Configurações de Anúncios do Google (https://adssettings.google.com).',
            'Como alternativa, você pode desativar o uso de cookies de fornecedores terceiros para publicidade personalizada visitando AboutAds (http://www.aboutads.info/choices) ou a Network Advertising Initiative (http://www.networkadvertising.org/choices/).',
          ],
        },
        {
          title: '6. Direitos sob o RGPD / GDPR e Legislação do Reino Unido',
          paragraphs: [
            'Se você reside no Espaço Econômico Europeu (EEE), no Reino Unido ou na Suíça, possui direitos protegidos pelo Regulamento Geral sobre a Proteção de Dados (GDPR) e pelo GDPR do Reino Unido, incluindo o direito de acessar, retificar ou solicitar a exclusão de dados pessoais, além do direito de retirar seu consentimento de cookies a qualquer momento sem afetar o uso da ferramenta.',
          ],
        },
        {
          title: '7. Lei de Privacidade do Consumidor da Califórnia (CCPA / CPRA)',
          paragraphs: [
            'Sob a California Consumer Privacy Act (CCPA) e a California Privacy Rights Act (CPRA), residentes da Califórnia têm o direito de saber quais informações pessoais são coletadas, solicitar sua exclusão e optar por não vender ou compartilhar dados pessoais. O Fix The Speaker não vende informações pessoais a intermediários de dados.',
          ],
        },
        {
          title: '8. Dados de Inscrição na Newsletter',
          paragraphs: [
            'Caso opte por se cadastrar na nossa lista de novidades pelo formulário no site, coletamos as informações descritas a seguir e as armazenamos com segurança por meio do nosso provedor externo de envio de e-mails (Cloudflare Workers KV):',
          ],
          list: [
            'Endereço de e-mail: usado exclusivamente para enviar novidades sobre o produto.',
            'Endereço IP: coletado no momento do cadastro para prevenção contra abusos e segurança geográfica.',
            'País: identificado a partir do endereço IP no momento da assinatura para fins estatísticos regionais.',
          ],
        },
        {
          title: '8a. Direitos e Exclusão de Dados da Newsletter',
          paragraphs: [
            'Não comercializamos nem compartilhamos os dados da sua inscrição com anunciantes terceiros.',
            'Você pode cancelar o recebimento a qualquer momento pelo link presente em cada mensagem. Para requerer a remoção completa do seu cadastro (e-mail, IP e registro de país), envie um e-mail para support@fixthespeaker.com e atenderemos sua solicitação em até 30 dias.',
          ],
        },
        {
          title: '9. Contato sobre Privacidade e Atualizações',
          paragraphs: [
            'Esta Política de Privacidade poderá ser atualizada periodicamente para adequação a requisitos técnicos ou legais. Quaisquer alterações serão divulgadas nesta página com a indicação da data de revisão.',
            'Se tiver dúvidas sobre esta Política de Privacidade ou sobre nossas práticas de dados, entre em contato pelo e-mail support@fixthespeaker.com.',
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
      buttonText: 'Enviar e-mail: support@fixthespeaker.com',
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
      description:
        'Fix The Speaker 개인정보처리방침. 오디오 데이터 비수집 원칙, Google 애널리틱스 4 추적, 동의 모드 v2 및 제3자 광고 고지 사항을 안내합니다.',
      heading: '개인정보처리방침',
      eyebrow: '법적고지 및 규정준수',
      updated: '2026-09-07',
      intro:
        '본 개인정보처리방침은 귀하가 fixthespeaker.com을 방문할 때 Fix The Speaker("당사", "서비스")가 정보를 처리하는 방식을 규정합니다. 당사는 투명성을 핵심 원칙으로 삼고 있으며, 본 도구는 브라우저 내부에서만 독립적으로 실행되어 마이크에 접근하거나 음성을 녹음 및 수집하지 않습니다.',
      sections: [
        {
          title: '1. 오디오 데이터 무수집 및 클라이언트측 구동',
          paragraphs: [
            'Fix The Speaker는 클라이언트측 HTML5 Web Audio API를 활용하여 기기의 CPU에서 직접 음파 주파수를 합성합니다. 모든 사운드 생성, 주파수 스윕 및 스테레오 밸런스 테스트는 사용자 브라우저의 로컬 샌드박스 내부에서만 작동합니다.',
            '당사는 마이크 접근 권한을 일체 요청하지 않으며, 오디오를 녹음하거나 외부로 전송하지 않습니다. 또한 스피커 청소 기능을 이용하기 위해 계정 생성, 비밀번호 또는 개인 식별 정보를 입력할 필요가 없습니다.',
          ],
        },
        {
          title: '2. 자동 수집되는 정보',
          paragraphs: [
            '사용자가 웹사이트에 접속하면 웹 리소스 전송, 사이버 공격(DDoS 등) 차단 및 서비스 가용성 유지를 위해 표준 웹 호스팅 로그(Cloudflare 제공)를 통해 네트워크 기술 정보가 자동으로 수집됩니다. 수집되는 정보는 다음과 같습니다:',
          ],
          list: [
            '인터넷 프로토콜(IP) 주소 (통계 분석 보고서에서는 익명화 및 마스킹 처리됨)',
            '브라우저 종류, 사용자 에이전트(User-Agent) 문자열 및 운영체제',
            '참조 URL, 방문한 페이지 및 접속 일시',
            '기본 언어 설정 및 화면 해상도 정보',
          ],
        },
        {
          title: '3. 쿠키, 로컬 스토리지 및 동의 모드 v2',
          paragraphs: [
            '당사 웹사이트는 필수적인 사용자 환경 설정을 유지하기 위해 브라우저 로컬 스토리지와 필수 쿠키를 사용합니다. 저장되는 항목은 다음과 같습니다:',
          ],
          list: [
            'fixthespeaker_cookie_consent_v1: 다음 방문 시에도 사용자의 선택을 유지할 수 있도록 쿠키 기본 설정(분석 및 광고 동의 여부)을 기록합니다.',
            'theme: 다크 모드 / 라이트 모드 인터페이스 테마 설정을 저장합니다.',
          ],
        },
        {
          title: '4. Google 애널리틱스 4 (GA4) 추적',
          paragraphs: [
            '당사는 총 트래픽 동향과 서비스 이용 패턴을 분석하기 위해 Google 애널리틱스 4(측정 ID: G-924DECLM9L)를 사용합니다. Google 동의 모드 v2(Consent Mode v2)를 준수하여 사이트 초기 방문 시 분석 및 광고 스토리지 태그(ad_storage, analytics_storage, ad_user_data, ad_personalization)는 기본적으로 "거부(denied)" 상태로 설정됩니다.',
            'Google 애널리틱스는 사용자가 쿠키 배너를 통해 명시적으로 동의한 경우에만 활성화됩니다. 웹사이트 하단의 "쿠키 설정" 링크를 클릭하여 언제든지 동의 상태를 수정하거나 철회할 수 있습니다.',
          ],
        },
        {
          title: '5. 제3자 광고 및 Google AdSense 관련 고지',
          paragraphs: [
            'Fix The Speaker의 무료 서비스 운영을 지원하기 위해 Google AdSense 및 제휴 광고 네트워크를 통한 제3자 광고를 게재할 수 있습니다. 다음 필수 고지 사항을 확인하시기 바랍니다:',
          ],
          list: [
            'Google을 포함한 제3자 공급업체는 사용자가 본 웹사이트나 다른 웹사이트를 이전에 방문한 기록을 바탕으로 쿠키를 사용하여 광고를 게재합니다.',
            'Google의 광고 쿠키 사용으로 Google과 파트너는 사용자의 본 사이트 및 다른 웹사이트 방문 기록을 바탕으로 적절한 광고를 사용자에게 게재할 수 있습니다.',
            '사용자는 Google 광고 설정(https://adssettings.google.com)을 방문하여 맞춤형 광고 게재를 비활성화할 수 있습니다.',
            '또는 AboutAds(http://www.aboutads.info/choices) 또는 Network Advertising Initiative(http://www.networkadvertising.org/choices/)를 방문하여 맞춤형 광고에 사용되는 제3자 업체의 쿠키를 비활성화할 수 있습니다.',
          ],
        },
        {
          title: '6. GDPR 및 영국 데이터 보호 규정 권리',
          paragraphs: [
            '유럽 경제 지역(EEA), 영국 또는 스위스에 거주하는 이용자는 일반 데이터 보호 규정(GDPR) 및 영국 GDPR에 따라 개인정보에 대한 접근, 정정, 삭제를 요구할 권리가 있으며, 스피커 청소 기능 이용에 제한 없이 언제든지 쿠키 동의를 철회할 권리를 갖습니다.',
          ],
        },
        {
          title: '7. 캘리포니아 소비자 프라이버시법 (CCPA / CPRA)',
          paragraphs: [
            '캘리포니아 소비자 프라이버시법(CCPA) 및 캘리포니아 개인정보 보호 권리법(CPRA)에 따라 캘리포니아 거주자는 수집되는 개인정보의 내역을 확인하고, 삭제를 요청하며, 개인정보의 판매 또는 공유를 거부할 권리가 있습니다. Fix The Speaker는 개인정보를 제3자 데이터 중개업체에 판매하지 않습니다.',
          ],
        },
        {
          title: '8. 뉴스레터 구독 데이터',
          paragraphs: [
            '웹사이트 양식을 통해 업데이트 알림 목록을 구독하시는 경우, 다음 정보가 수집되며 타사 이메일 전송 제공업체(Cloudflare Workers KV)를 통해 안전하게 보관됩니다:',
          ],
          list: [
            '이메일 주소: 제품 업데이트 알림을 전달하는 목적으로만 사용됩니다.',
            'IP 주소: 스팸 방지 및 지역별 통계 분석을 위해 구독 시 수집됩니다.',
            '국가 정보: 지역별 통계를 위해 구독 시점의 IP 주소를 기반으로 추정됩니다.',
          ],
        },
        {
          title: '8a. 뉴스레터 데이터 권리 및 삭제 요청',
          paragraphs: [
            '당사는 뉴스레터 구독 데이터를 제3자 광고주에게 판매하거나 공유하지 않습니다.',
            '수신되는 모든 알림 이메일에 포함된 링크를 통해 언제든지 구독을 취소할 수 있습니다. 등록된 정보(이메일, IP 주소 및 국가 기록)의 완전한 삭제를 원하실 경우 support@fixthespeaker.com으로 문의해 주시면 30일 이내에 삭제 처리됩니다.',
          ],
        },
        {
          title: '9. 개인정보 관련 문의 및 방침 변경',
          paragraphs: [
            '본 개인정보처리방침은 기술적 필요 또는 관련 법령 변경에 따라 주기적으로 개정될 수 있습니다. 개정 사항은 "최종 수정일"을 갱신하여 본 페이지에 공지됩니다.',
            '본 개인정보처리방침이나 데이터 처리에 관한 질문이 있으신 경우 support@fixthespeaker.com으로 문의해 주시기 바랍니다.',
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
      buttonText: '이메일 보내기: support@fixthespeaker.com',
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
      description:
        'Informativa sulla Privacy di Fix The Speaker. Scopri la nostra politica di non raccolta audio, tracciamento con GA4, Consent Mode v2 e annunci di terze parti.',
      heading: 'Informativa sulla Privacy',
      eyebrow: 'Legale & Conformità',
      updated: '2026-09-07',
      intro:
        'La presente Informativa sulla Privacy descrive le modalità di gestione delle informazioni da parte di Fix The Speaker ("noi", "nostro" o "il Servizio") durante la consultazione di fixthespeaker.com. Il nostro impegno verso la trasparenza è totale: lo strumento funziona interamente nel tuo browser e non accede mai al microfono, non registra audio e non raccoglie flussi sonori personali.',
      sections: [
        {
          title: '1. Nessun Dato Audio & Funzionamento Lato Client',
          paragraphs: [
            'Fix The Speaker sfrutta l’API HTML5 Web Audio lato client per sintetizzare le frequenze sonore acustiche direttamente sul processore del tuo dispositivo. Tutta la generazione dei toni, le scansioni di frequenza e i test di bilanciamento stereo avvengono unicamente nell’ambiente isolato (sandbox) del tuo browser locale.',
            'Non richiediamo permessi di accesso al microfono, non registriamo né trasmettiamo mai audio in entrata e non richiediamo la creazione di un account, password o credenziali personali per usufruire delle funzioni di pulizia.',
          ],
        },
        {
          title: '2. Informazioni Raccolte Automaticamente',
          paragraphs: [
            'Quando accedi al nostro sito web, i registri standard del server di hosting (forniti tramite Cloudflare) archiviano in modo automatico i dati tecnici di telemetria di rete necessari all’erogazione dei contenuti, alla prevenzione degli attacchi informatici (come gli attacchi DDoS) e alla stabilità del sito. Questi dati includono:',
          ],
          list: [
            'Indirizzo IP (Internet Protocol) (anonimizzato e mascherato nei report di analisi)',
            'Tipo di browser, stringa user agent e sistema operativo',
            'URL di riferimento, pagine consultate e data/ora dell’accesso',
            'Preferenza linguistica e risoluzione generica dello schermo',
          ],
        },
        {
          title: '3. Cookie, Archiviazione Locale & Consent Mode v2',
          paragraphs: [
            'Il nostro sito utilizza l’archiviazione locale del browser e cookie tecnici essenziali per memorizzare le preferenze fondamentali dell’utente. In particolare, memorizziamo:',
          ],
          list: [
            'fixthespeaker_cookie_consent_v1: Registra le tue preferenze sui cookie (scelte analitiche e pubblicitarie) per rispettare le tue decisioni nelle visite successive.',
            'theme: Salva la tua scelta dell’interfaccia grafica in modalità scura o chiara.',
          ],
        },
        {
          title: '4. Monitoraggio con Google Analytics 4 (GA4)',
          paragraphs: [
            'Utilizziamo Google Analytics 4 (ID di misurazione: G-924DECLM9L) per analizzare le tendenze di traffico aggregato e i modelli di interazione. In conformità con Google Consent Mode v2, i tag di archiviazione analitica e pubblicitaria (ad_storage, analytics_storage, ad_user_data, ad_personalization) sono impostati su "negato" (denied) per impostazione predefinita al primo caricamento del sito.',
            'Google Analytics si attiva esclusivamente se concedi il tuo consenso esplicito tramite il nostro banner dei cookie. Puoi modificare o revocare il tuo consenso in qualsiasi momento cliccando sul link "Impostazioni Cookie" situato nel piè di pagina del sito.',
          ],
        },
        {
          title: '5. Pubblicità di Terze Parti & Informativa Google AdSense',
          paragraphs: [
            'Possiamo pubblicare annunci pubblicitari di terze parti tramite Google AdSense e reti pubblicitarie affiliate per sostenere il funzionamento gratuito di Fix The Speaker. Ti invitiamo a prendere visione delle seguenti comunicazioni obbligatorie:',
          ],
          list: [
            'Fornitori terzi, tra cui Google, utilizzano i cookie per pubblicare annunci sulla base delle precedenti visite dell’utente a questo sito web o ad altri siti Internet.',
            'L’impiego dei cookie pubblicitari consente a Google e ai suoi partner di pubblicare annunci per gli utenti in base alle loro visite al nostro sito e/o ad altri siti web.',
            'Gli utenti possono disattivare la pubblicità personalizzata visitando le Impostazioni annunci di Google (https://adssettings.google.com).',
            'In alternativa, puoi disattivare l’uso dei cookie da parte di fornitori terzi per la pubblicità personalizzata visitando AboutAds (http://www.aboutads.info/choices) o la Network Advertising Initiative (http://www.networkadvertising.org/choices/).',
          ],
        },
        {
          title: '6. Diritti di Protezione Dati GDPR & UK GDPR',
          paragraphs: [
            'Se risiedi nello Spazio Economico Europeo (SEE), nel Regno Unito o in Svizzera, godi di diritti specifici ai sensi del Regolamento Generale sulla Protezione dei Dati (GDPR) e del GDPR del Regno Unito, compresi i diritti di accesso, rettifica o cancellazione dei dati personali, nonché il diritto di revocare il consenso ai cookie in qualunque momento senza pregiudicare l’accesso allo strumento di pulizia.',
          ],
        },
        {
          title: '7. California Consumer Privacy Act (CCPA / CPRA)',
          paragraphs: [
            'In base al California Consumer Privacy Act (CCPA) e al California Privacy Rights Act (CPRA), i residenti in California hanno il diritto di conoscere quali informazioni personali vengono raccolte, chiederne la cancellazione e opporsi alla vendita o alla condivisione di tali informazioni. Fix The Speaker non vende informazioni personali a società di intermediazione dati (data broker).',
          ],
        },
        {
          title: '8. Dati di Iscrizione alla Newsletter',
          paragraphs: [
            'Se decidi di iscriverti alla nostra lista di notifiche tramite il modulo del sito web, raccogliamo i seguenti dati archiviandoli in modo protetto tramite il nostro fornitore terzo di recapito e-mail (Cloudflare Workers KV):',
          ],
          list: [
            'Indirizzo e-mail: utilizzato unicamente per inviarti aggiornamenti relativi al prodotto.',
            'Indirizzo IP: raccolto al momento dell’iscrizione a fini di prevenzione dello spam e analisi geografica.',
            'Paese: desunto dall’indirizzo IP al momento della registrazione per statistiche regionali.',
          ],
        },
        {
          title: '8a. Diritti e Cancellazione dei Dati della Newsletter',
          paragraphs: [
            'Non vendiamo né cediamo a inserzionisti terzi i dati di iscrizione alla newsletter.',
            'Puoi annullare l’iscrizione in qualsiasi momento utilizzando il link presente in ciascuna e-mail di notifica. Per richiedere la cancellazione definitiva dei tuoi dati (indirizzo e-mail, IP e paese registrato), contattaci all’indirizzo support@fixthespeaker.com ed evaderemo la richiesta entro 30 giorni.',
          ],
        },
        {
          title: '9. Domande sulla Privacy & Aggiornamenti dell’Informativa',
          paragraphs: [
            'La presente Informativa sulla Privacy potrà essere periodicamente aggiornata per conformarsi a requisiti tecnici o normativi. Ogni modifica sarà resa nota su questa pagina con la data di "Ultimo aggiornamento" revisionata.',
            'Per qualsiasi domanda relativa alla presente Informativa sulla Privacy o al trattamento dei tuoi dati personali, ti invitiamo a scriverci a support@fixthespeaker.com.',
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
      buttonText: 'Invia email: support@fixthespeaker.com',
      detailsTitle: 'Dettagli utili da includere',
      detailsList: ['Modello del telefono', 'Browser utilizzato', 'Modalità eseguita'],
      beforeTitle: 'Prima di scrivere',
      beforeText: 'Non effettuiamo riparazioni hardware fisiche via email.',
      linksText: 'Consulta la nostra Informativa sulla Privacy e i Termini di Utilizzo.',
    },
  },
};
