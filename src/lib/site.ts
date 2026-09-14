// ============================================================
//  CONFIGURACIÓN DE TU SITIO
//  Edita TODO tu contenido desde este único archivo.
//  Cambia textos, enlaces y precios aquí, y se actualizará
//  automáticamente en toda la web.
// ============================================================

export type Social = {
  label: string;
  href: string;
};

export type Commission = {
  name: string;
  price: string;
  description: string;
};

export type Extra = {
  name: string;
  price: string;
};

export type PaymentMethod = {
  name: string;
  note: string;
  status: string;
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
  // Nombre artístico (aparece en la portada y el pie de página)
  name: "chronyvern",

  // Título de la pestaña del navegador
  title: "chronyvern — Ilustración 2D & Cómic",

  // Frase pequeña que aparece arriba en la portada
  tagline: "Furry · Anime · Arte adulto",

  // Descripción corta (para buscadores y texto de la portada)
  description:
    "Portafolio de chronyvern: ilustración 2D de furry y anime para un público adulto.",

  // Tu correo de contacto
  email: "chronyvern@gmail.com",

  // Tu página de Ko-fi (para tips y apoyo)
  koFi: "https://ko-fi.com/chronyvern",

  // Biografía para la sección "Sobre mí" (cada texto es un párrafo)
  bio: [
    "Hola, soy chronyvern. Tengo 30 años y llevo un año dibujando en tradicional y dos meses en digital.",
    "Me muevo sobre todo entre el furry y el anime: Pokémon, futanari, fan art y escenas picantes. Me encanta dibujar mujeres con cuerpos voluptuosos y curvas generosas, y le pongo especial cariño a las caras: bonitas, detalladas y con una expresión un poco pícara. Las escenas de sexo no me suponen ningún problema.",
    "Antes de esto fui (o sigo siendo) gamer de corazón: Aion, WoW, Smite, FIFA, Minecraft, Dragon Ball y muchos más. De ahí saco un montón de ideas para fan art.",
    "Si te gusta mi estilo y quieres ver tu idea hecha realidad, escríbeme. Acepto comisiones.",
  ],

  // Enlaces a tus redes
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

  // Tarifas de comisiones (edita nombres, precios y descripciones)
  commissions: [
    { name: "Boceto", price: "10–15 USD", description: "Rápido y suelto. Ideal para ver la idea antes de comprometerte." },
    { name: "Lineart", price: "18–25 USD", description: "Línea limpia. Perfecto si después quieres colorearlo tú o usarlo de base." },
    { name: "Color plano", price: "25–35 USD", description: "Colores base, se ve terminado sin el coste del render." },
    { name: "Full color", price: "40–60 USD", description: "Con luces y sombras. El acabado completo." },
    { name: "Página de cómic (B/N)", price: "50–75 USD", description: "4–6 viñetas normales en blanco y negro." },
    { name: "Página de cómic (color)", price: "80–110 USD", description: "4–6 viñetas normales a color." },
  ] as Commission[],

  // Extras opcionales
  extras: [
    { name: "Personaje extra", price: "+50–70%" },
    { name: "Fondo con algo de detalle", price: "+10–25 USD" },
    { name: "Diseño de personaje desde cero (sin refs)", price: "+15–25 USD" },
    { name: "Uso comercial", price: "+50–100%" },
    { name: "Entrega urgente (menos de 5–7 días)", price: "+30–50%" },
  ] as Extra[],

  // Condiciones de las comisiones
  terms: [
    "50% de adelanto para empezar.",
    "Máximo 2–3 rondas de revisiones.",
    "El tiempo de entrega depende del tipo de pieza.",
    "Los precios pueden subir si la pieza es más compleja o explícita.",
  ],

  // Métodos de pago (status: "Activo" o "Próximamente"; href: enlace o "")
  paymentMethods: [
    { name: "Ko-fi", note: "Tips y piezas chicas", status: "Activo", href: "https://ko-fi.com/chronyvern" },
    { name: "Artconomy", note: "Tarjeta + comisiones", status: "Activo", href: "https://artconomy.com/profile/chronyvern/about/" },
    { name: "VGen", note: "Comisiones con buffer", status: "Activo", href: "https://vgen.co/chronyvern/requested" },
    { name: "Cripto (USDT · USDC · SOL · ETH · BTC · XMR)", note: "La red se confirma en cada pedido", status: "Próximamente", href: "" },
  ] as PaymentMethod[],

  // Galería: guarda tus imágenes en la carpeta "public" y escribe aquí
  // su ruta. Ejemplo: { title: "Mi dibujo", src: "/mi-dibujo.jpg" }.
  // Si "src" está vacío, se muestra una tarjeta de ejemplo.
  gallery: [
    { title: "Obra 1", src: "" },
    { title: "Obra 2", src: "" },
    { title: "Obra 3", src: "" },
    { title: "Obra 4", src: "" },
    { title: "Obra 5", src: "" },
    { title: "Obra 6", src: "" },
  ],

  // YCH ("Your Character Here"): poses listas para el personaje del comprador.
  // "src" = imagen en public/, "status" = Abierto | Cerrado | Vendido.
  ych: [
    { title: "YCH 1", src: "", price: "30 USD", slots: "3 slots", status: "Abierto", link: "" },
    { title: "YCH 2", src: "", price: "Subasta", slots: "1 slot", status: "Abierto", link: "" },
    { title: "YCH 3", src: "", price: "25 USD", slots: "2 slots", status: "Cerrado", link: "" },
  ] as Ych[],

  // Adoptables: diseños de personajes listos para adoptar.
  // "sb" = puja inicial, "mi" = incremento mínimo, "ab" = auto-buy.
  adoptables: [
    { title: "Adoptable 1", src: "", sb: "30 USD", mi: "5 USD", ab: "150 USD", status: "Abierto", link: "" },
    { title: "Adoptable 2", src: "", sb: "20 USD", mi: "5 USD", ab: "100 USD", status: "Abierto", link: "" },
    { title: "Adoptable 3", src: "", sb: "25 USD", mi: "5 USD", ab: "—", status: "Vendido", link: "" },
  ] as Adoptable[],
};

// ------------------------------------------------------------
// PLAN DE PAGOS (orden recomendado):
// 1. Ko-fi — ya activo (tips y piezas chicas)
// 2. Cripto — USDT/USDC/SOL/ETH/BTC/XMR (a prueba de baneos)
//    → wallet multi-moneda (Exodus) + NOWPayments o BTCPay para facturas
// 3. Artconomy — tarjeta + escrow (permite adulto, sin contenido "menor")
// 4. VGen — visibilidad + buffer (permite NSFW etiquetado, sin "menores")
// 5. SubscribeStar Adult — si algún día quieres suscripciones tipo Patreon
// ------------------------------------------------------------
// ⚠️ AVISO LEGAL 2025: Artconomy, VGen y casi todas las plataformas
// prohíben contenido que "aparezca como menor de edad" (incluido
// "aged-up" de personajes jóvenes). Dibuja personajes claramente adultos.
// ------------------------------------------------------------
