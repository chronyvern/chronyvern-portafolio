// ============================================================
//  CONFIGURACIÓN NO-TRADUCIBLE (datos técnicos y enlaces)
//  Los textos de la web están en src/lib/i18n.ts (ES/EN/JP).
// ============================================================

export type Social = {
  label: string;
  href: string;
};

export type Ych = {
  title: string;
  src: string;
  price: string;
  slots: string;
  status: "Abierto" | "Cerrado" | "Vendido";
  link: string;
};

export type Adoptable = {
  title: string;
  src: string;
  sb: string;
  mi: string;
  ab: string;
  status: "Abierto" | "Cerrado" | "Vendido";
  link: string;
};

export const site = {
  // Nombre artístico
  name: "chronyvern",

  // Título de la pestaña del navegador y descripción para buscadores
  title: "chronyvern — 2D Furry & Anime Art",
  description:
    "Furry & anime 2D illustration for an adult audience (18+). Commissions open.",

  // Tu correo de contacto
  email: "chronyvern@gmail.com",

  // Tu página de Ko-fi
  koFi: "https://ko-fi.com/chronyvern",

  // ¿Aceptas comisiones ahora? true = "Abiertas" / false = "Cerradas"
  commissionsOpen: true,

  // Pago con crypto (USDT en Tron). La dirección es fija, no cambia.
  crypto: {
    coin: "USDT",
    network: "Tron (TRC-20)",
    address: "TF3HQZ8EH6QWMWkoDqi8gayfaaKC53Zvk7",
  },

  // Enlaces a tus redes (los nombres son iguales en todos los idiomas)
  socials: [
    { label: "FurAffinity", href: "https://www.furaffinity.net/user/chronyvern" },
    { label: "e621", href: "https://e621.net/users/2769954" },
    { label: "Pixiv", href: "https://www.pixiv.net/en/users/128107090" },
    { label: "Bluesky", href: "https://bsky.app/profile/chronyvern.bsky.social" },
    { label: "X", href: "https://x.com/chronyvern" },
    { label: "Ko-fi", href: "https://ko-fi.com/chronyvern" },
    { label: "Artconomy", href: "https://artconomy.com/profile/chronyvern/about/" },
    { label: "VGen", href: "https://vgen.co/chronyvern/requested" },
  ] as Social[],

  // YCH: déjalo vacío ([]) y la sección se ocultará automáticamente.
  ych: [] as Ych[],

  // Adoptables: déjalo vacío ([]) y la sección se ocultará automáticamente.
  adoptables: [] as Adoptable[],
};
