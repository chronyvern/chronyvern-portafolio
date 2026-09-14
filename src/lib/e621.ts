// ============================================================
//  GALERÍA AUTOMÁTICA DESDE e621
//  La galería de tu portafolio se rellena SOLA con tus posts
//  de e621. Así no tienes que subir tus dibujos dos veces:
//  sigues publicando en e621 y aquí se actualiza cada ~5 min.
// ============================================================

export type E621Post = {
  id: number;
  file?: { url?: string };
  sample?: { url?: string };
  preview?: { url?: string };
};

// Tu ID de usuario en e621: https://e621.net/users/2769954
const E621_USER_ID = "2769954";

// Cuántas imágenes mostrar en la galería
const LIMIT = 60;

const HEADERS = {
  // e621 exige un User-Agent propio (bloquea los genéricos)
  "User-Agent": "chronyvern-portafolio/1.0 (portafolio personal)",
};

export async function getE621Posts(): Promise<E621Post[]> {
  try {
    // 1) Sacar el nombre de usuario desde el ID
    const userRes = await fetch(`https://e621.net/users/${E621_USER_ID}.json`, {
      headers: HEADERS,
      next: { revalidate: 3600 },
    });
    if (!userRes.ok) return [];
    const user = await userRes.json();
    const name: string | undefined = user?.name;
    if (!name) return [];

    // 2) Traer los posts subidos por ese usuario (más recientes primero)
    const postsRes = await fetch(
      `https://e621.net/posts.json?tags=user:${encodeURIComponent(name)}&limit=${LIMIT}`,
      { headers: HEADERS, next: { revalidate: 300 } }
    );
    if (!postsRes.ok) return [];
    const data = await postsRes.json();
    return Array.isArray(data?.posts) ? data.posts : [];
  } catch {
    // Si la API falla o está caída, simplemente no mostramos galería
    return [];
  }
}

// Devuelve la mejor URL de imagen disponible para una tarjeta
export function postImageUrl(post: E621Post): string {
  return post.sample?.url || post.file?.url || post.preview?.url || "";
}
