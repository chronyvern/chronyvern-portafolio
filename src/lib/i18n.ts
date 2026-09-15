// ============================================================
//  TEXTOS DE LA WEB EN TRES IDIOMAS (ES / EN / JA)
//  Edita aquí cualquier frase y se actualizará en toda la web.
// ============================================================

export type Lang = "es" | "en" | "ja";

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "ja", label: "日本語" },
];

type CommissionItem = { name: string; price: string; description: string };
type Extra = { name: string; price: string };
type Payment = { name: string; href: string; active: boolean; note: string };

type Dict = {
  nav: { gallery: string; commissions: string; about: string; contact: string };
  hero: {
    tagline: string;
    description: string;
    viewGallery: string;
    commissionMe: string;
  };
  gallery: { title: string; subtitle: string; empty: string };
  commissions: {
    title: string;
    open: string;
    closed: string;
    subtitle: string;
    items: CommissionItem[];
    extrasTitle: string;
    extras: Extra[];
    termsTitle: string;
    terms: string[];
    paymentsTitle: string;
    activeLabel: string;
    soonLabel: string;
    payments: Payment[];
    support: string;
  };
  about: { title: string; paragraphs: string[] };
  contact: { title: string; subtitle: string };
  footer: { adult: string; rights: string };
};

export const t: Record<Lang, Dict> = {
  es: {
    nav: {
      gallery: "Galería",
      commissions: "Comisiones",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      tagline: "Furry · Anime · Arte adulto",
      description:
        "Ilustración 2D de furry y anime para un público adulto.",
      viewGallery: "Ver galería",
      commissionMe: "Encargar una comisión",
    },
    gallery: {
      title: "Galería",
      subtitle: "Lo último que he subido a e621. Toca una pieza para verla completa.",
      empty: "Aún no hay imágenes — estoy trayéndolas de e621…",
    },
    commissions: {
      title: "Comisiones",
      open: "Abiertas",
      closed: "Cerradas",
      subtitle: "Precios base. Se pide el 50% por adelantado para reservar tu espacio.",
      items: [
        { name: "Boceto", price: "desde 8 USD", description: "Rápido y suelto. Ideal para ver tu idea antes de comprometerte." },
        { name: "Lineart", price: "desde 14 USD", description: "Línea limpia. Perfecto si quieres colorearlo tú o usarlo de base." },
        { name: "Color plano", price: "desde 20 USD", description: "Colores base. Se ve terminado sin el coste del render." },
        { name: "Full color", price: "desde 32 USD", description: "Con luces y sombras. El acabado completo." },
        { name: "Página de cómic (B/N)", price: "desde 40 USD", description: "4–6 viñetas normales en blanco y negro." },
        { name: "Página de cómic (color)", price: "desde 55 USD", description: "4–6 viñetas normales a color." },
      ],
      extrasTitle: "Extras",
      extras: [
        { name: "Personaje extra", price: "+50–70%" },
        { name: "Fondo con detalle", price: "+10–25 USD" },
        { name: "Diseño de personaje desde cero (sin referencias)", price: "+15–25 USD" },
        { name: "Uso comercial", price: "+50–100%" },
        { name: "Entrega urgente (menos de 5–7 días)", price: "+30–50%" },
      ],
      termsTitle: "Condiciones",
      terms: [
        "🎉 Promo de lanzamiento: 20% OFF en tu primera comisión.",
        "50% de adelanto para empezar.",
        "Máximo 2–3 rondas de revisiones.",
        "El tiempo de entrega depende del tipo de pieza.",
        "Los precios pueden subir si la pieza es más compleja o explícita.",
      ],
      paymentsTitle: "Métodos de pago",
      activeLabel: "Activo",
      soonLabel: "Próximamente",
      payments: [
        { name: "Ko-fi", href: "https://ko-fi.com/chronyvern", active: true, note: "Pago con PayPal o tarjeta" },
        { name: "Crypto (USDT · USDC)", href: "", active: true, note: "Pregunta por la dirección" },
        { name: "Artconomy", href: "", active: false, note: "Escrow y tarjeta" },
        { name: "VGen", href: "", active: false, note: "Comisiones con buffer" },
      ],
      support: "☕ Apóyame en Ko-fi",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Hola, soy chronyvern. Tengo 30 años y llevo un año dibujando en tradicional y dos meses en digital.",
        "Me muevo sobre todo entre el furry y el anime: Pokémon, futanari, fan art y escenas picantes. Me encanta dibujar mujeres con cuerpos voluptuosos y curvas generosas, y le pongo especial cariño a las caras: bonitas, detalladas y con una expresión un poco pícara. Las escenas de sexo no me suponen ningún problema.",
        "Antes de esto fui (o sigo siendo) gamer de corazón: Aion, WoW, Smite, FIFA, Minecraft, Dragon Ball y muchos más. De ahí saco un montón de ideas para fan art.",
        "Si te gusta mi estilo y quieres ver tu idea hecha realidad, escríbeme. Acepto comisiones.",
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Quieres encargar una comisión o solo saludar? Escríbeme por aquí.",
    },
    footer: {
      adult: "Contenido solo para adultos (+18).",
      rights: "© {year} {name}. Todos los derechos reservados.",
    },
  },

  en: {
    nav: {
      gallery: "Gallery",
      commissions: "Commissions",
      about: "About",
      contact: "Contact",
    },
    hero: {
      tagline: "Furry · Anime · Adult art",
      description:
        "2D furry & anime illustration for an adult audience.",
      viewGallery: "View gallery",
      commissionMe: "Commission me",
    },
    gallery: {
      title: "Gallery",
      subtitle: "My latest uploads on e621. Tap a piece to see it in full.",
      empty: "No images yet — fetching from e621…",
    },
    commissions: {
      title: "Commissions",
      open: "Open",
      closed: "Closed",
      subtitle: "Base prices. A 50% deposit is required to book your slot.",
      items: [
        { name: "Sketch", price: "from $8 USD", description: "Quick and loose. Great for seeing your idea before committing." },
        { name: "Lineart", price: "from $14 USD", description: "Clean linework. Perfect if you want to color it yourself or use it as a base." },
        { name: "Flat color", price: "from $20 USD", description: "Base colors. Looks finished without the cost of full rendering." },
        { name: "Full color", price: "from $32 USD", description: "With lights and shadows. The complete finish." },
        { name: "Comic page (B/W)", price: "from $40 USD", description: "4–6 standard panels in black and white." },
        { name: "Comic page (color)", price: "from $55 USD", description: "4–6 standard panels in color." },
      ],
      extrasTitle: "Extras",
      extras: [
        { name: "Extra character", price: "+50–70%" },
        { name: "Detailed background", price: "+$10–25 USD" },
        { name: "Character design from scratch (no refs)", price: "+$15–25 USD" },
        { name: "Commercial use", price: "+50–100%" },
        { name: "Rush delivery (under 5–7 days)", price: "+30–50%" },
      ],
      termsTitle: "Terms",
      terms: [
        "🎉 Launch promo: 20% OFF your first commission.",
        "50% deposit to start.",
        "Up to 2–3 rounds of revisions.",
        "Delivery time depends on the piece.",
        "Prices may increase for more complex or explicit pieces.",
      ],
      paymentsTitle: "Payment methods",
      activeLabel: "Active",
      soonLabel: "Coming soon",
      payments: [
        { name: "Ko-fi", href: "https://ko-fi.com/chronyvern", active: true, note: "Pay via PayPal or card" },
        { name: "Crypto (USDT · USDC)", href: "", active: true, note: "Ask for the address" },
        { name: "Artconomy", href: "", active: false, note: "Escrow & card" },
        { name: "VGen", href: "", active: false, note: "Buffered commissions" },
      ],
      support: "☕ Support me on Ko-fi",
    },
    about: {
      title: "About",
      paragraphs: [
        "Hi, I'm chronyvern. I'm 30, and I've been drawing traditionally for a year and digitally for two months.",
        "I mostly do furry and anime: Pokémon, futanari, fan art and spicy scenes. I love drawing women with voluptuous bodies and generous curves, and I put special care into faces: pretty, detailed, with a slightly mischievous expression. Explicit scenes are no problem for me.",
        "Before this I was (or still am) a gamer at heart: Aion, WoW, Smite, FIFA, Minecraft, Dragon Ball and many more. I get a lot of fan-art ideas from there.",
        "If you like my style and want to see your idea brought to life, message me. I'm open for commissions.",
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Want to commission me or just say hi? Message me here.",
    },
    footer: {
      adult: "Adults only content (18+).",
      rights: "© {year} {name}. All rights reserved.",
    },
  },

  ja: {
    nav: {
      gallery: "ギャラリー",
      commissions: "コミッション",
      about: "自己紹介",
      contact: "お問い合わせ",
    },
    hero: {
      tagline: "Furry · Anime · アダルトアート",
      description: "大人向けのFurry・アニメ風2Dイラスト。",
      viewGallery: "ギャラリーを見る",
      commissionMe: "コミッションを依頼する",
    },
    gallery: {
      title: "ギャラリー",
      subtitle: "e621に投稿した最新作。タップで全体を表示できます。",
      empty: "まだ画像がありません — e621から取得中…",
    },
    commissions: {
      title: "コミッション",
      open: "受付中",
      closed: "受付停止",
      subtitle: "基本料金です。ご予約には50%の前払いをお願いします。",
      items: [
        { name: "ラフ", price: "8米ドルから", description: "素早いラフ。本制作の前にアイデアを確認したい方に。" },
        { name: "線画", price: "14米ドルから", description: "綺麗な線画。ご自身で着色したい方や下地として使いたい方に。" },
        { name: "ベタ塗り", price: "20米ドルから", description: "ベースカラー。フルレンダリングなしでも完成見え。" },
        { name: "フルカラー", price: "32米ドルから", description: "光と影を入れた完成品。" },
        { name: "漫画ページ（モノクロ）", price: "40米ドルから", description: "白黒の通常コマ4〜6枚。" },
        { name: "漫画ページ（カラー）", price: "55米ドルから", description: "カラーの通常コマ4〜6枚。" },
      ],
      extrasTitle: "オプション",
      extras: [
        { name: "追加キャラクター", price: "+50〜70%" },
        { name: "背景の描き込み", price: "+10〜25米ドル" },
        { name: "キャラクターデザイン（資料なし）", price: "+15〜25米ドル" },
        { name: "商用利用", price: "+50〜100%" },
        { name: "特急納品（5〜7日未満）", price: "+30〜50%" },
      ],
      termsTitle: "条件",
      terms: [
        "🎉 初回限定：初めてのご依頼は20%OFF。",
        "開始時に50%の前払い。",
        "修正は2〜3回まで。",
        "納期は作品の種類によって異なります。",
        "複雑・過激な内容は追加料金がかかる場合があります。",
      ],
      paymentsTitle: "お支払い方法",
      activeLabel: "利用可",
      soonLabel: "近日対応",
      payments: [
        { name: "Ko-fi", href: "https://ko-fi.com/chronyvern", active: true, note: "PayPalまたはカード払い" },
        { name: "Crypto (USDT · USDC)", href: "", active: true, note: "アドレスはお問い合わせください" },
        { name: "Artconomy", href: "", active: false, note: "エスクロー・カード" },
        { name: "VGen", href: "", active: false, note: "バッファ式コミッション" },
      ],
      support: "☕ Ko-fiで応援する",
    },
    about: {
      title: "自己紹介",
      paragraphs: [
        "chronyvern（クロニバーン）です。30歳。アナログ歴1年、デジタル歴2か月。",
        "主にFurryとアニメ風の絵を描いています：ポケモン、ふたなり、ファンアート、ちょっとえっちなシーンなど。豊満で曲線的な女性を描くのが好きで、特に顔にはこだわっています。セックスシーンも問題なく描けます。",
        "以前から（今も）ゲーマーで：Aion、WoW、Smite、FIFA、Minecraft、ドラゴンボールなど。そこからファンアートのアイデアをたくさんもらっています。",
        "作風が気に入ったら、ぜひお気軽にご相談ください。コミッション受付中です。",
      ],
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "ご依頼やご質問はこちらからどうぞ。",
    },
    footer: {
      adult: "18歳以上向けコンテンツです。",
      rights: "© {year} {name}. All rights reserved.",
    },
  },
};
