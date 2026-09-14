import Image from "next/image";
import { site } from "@/lib/site";
import { getE621Posts, postImageUrl } from "@/lib/e621";

const navLinks = [
  { label: "Galería", href: "#galeria" },
  { label: "Comisiones", href: "#comisiones" },
  ...(site.ych.length > 0 ? [{ label: "YCH", href: "#ych" }] : []),
  ...(site.adoptables.length > 0 ? [{ label: "Adoptables", href: "#adoptables" }] : []),
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

function statusBadge(status: string) {
  if (status === "Abierto") return "bg-accent/15 text-accent";
  if (status === "Cerrado") return "bg-amber-500/15 text-amber-400";
  return "bg-zinc-800 text-zinc-500";
}

export default async function Home() {
  const posts = await getE621Posts();
  return (
    <div className="flex-1">
      {/* Barra de navegación */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="text-lg font-bold tracking-tight text-foreground">
            {site.name}
          </a>
          <div className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#comisiones"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-rose-400"
          >
            Comisiones
          </a>
        </nav>
      </header>

      <main id="inicio">
        {/* PORTADA (HERO) */}
        <section className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
            {site.tagline}
          </p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            {site.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            {site.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#galeria"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-400"
            >
              Ver galería
            </a>
            <a
              href="#comisiones"
              className="rounded-full border border-white/10 px-6 py-3 text-sm text-muted transition-colors hover:border-white/25 hover:text-foreground"
            >
              Encargar comisión
            </a>
          </div>
        </section>

        {/* GALERÍA (se llena sola desde e621) */}
        <section id="galeria" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Galería</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Lo último que he subido a e621. Toca una pieza para verla completa.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 ? (
              posts.map((post) => {
                const src = postImageUrl(post);
                if (!src) return null;
                return (
                  <a
                    key={post.id}
                    href={`https://e621.net/posts/${post.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`e621 post ${post.id}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                );
              })
            ) : (
              <p className="col-span-full text-sm text-muted">
                Aún no hay imágenes — estoy trayéndolas de e621…
              </p>
            )}
          </div>
        </section>

        {/* COMISIONES */}
        <section id="comisiones" className="border-t border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Comisiones</h2>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${site.commissionsOpen ? "bg-accent/15 text-accent" : "bg-amber-500/15 text-amber-400"}`}>
                {site.commissionsOpen ? "Abiertas" : "Cerradas"}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-muted">
              Tarifas orientativas. Se pide el 50% por adelantado para reservar tu turno.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {site.commissions.map((c) => (
                <div
                  key={c.name}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent/40"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                    <span className="text-lg font-bold text-accent">{c.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{c.description}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-12 text-xl font-semibold text-foreground">Extras</h3>
            <ul className="mt-4 divide-y divide-white/10">
              {site.extras.map((e) => (
                <li key={e.name} className="flex items-center justify-between gap-4 py-3">
                  <span className="text-muted">{e.name}</span>
                  <span className="font-semibold text-accent">{e.price}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl font-semibold text-foreground">Condiciones</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {site.terms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl font-semibold text-foreground">Métodos de pago</h3>
            <ul className="mt-4 divide-y divide-white/10">
              {site.paymentMethods.map((m) => (
                <li
                  key={m.name}
                  className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <span className="text-foreground">{m.name}</span>
                    <span className="ml-2 text-xs text-muted">{m.note}</span>
                  </div>
                  {m.href ? (
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-accent hover:underline"
                    >
                      {m.status} →
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-600">{m.status}</span>
                  )}
                </li>
              ))}
            </ul>
            <a
              href={site.koFi}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-400"
            >
              ☕ Apóyame en Ko-fi
            </a>
          </div>
        </section>

        {/* YCH (se oculta si no hay contenido) */}
        {site.ych.length > 0 && (
        <section id="ych" className="border-t border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">YCH</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Poses listas para tu personaje. Elige una y encarga tu slot.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {site.ych.map((y) => (
                <div key={y.title} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                  {y.src ? (
                    <div className="relative aspect-square">
                      <Image
                        src={y.src}
                        alt={y.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-square flex-col items-center justify-center gap-2 border-b border-dashed border-white/15 text-center">
                      <span className="text-2xl">🖼️</span>
                      <p className="text-xs text-zinc-600">Añade tu base YCH</p>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold text-foreground">{y.title}</h3>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadge(y.status)}`}>
                        {y.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted">
                      {y.price} · {y.slots}
                    </p>
                    {y.link ? (
                      <a
                        href={y.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
                      >
                        Pujar / comprar →
                      </a>
                    ) : (
                      <p className="mt-3 text-xs text-zinc-600">Enlace próximamente</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* ADOPTABLES (se oculta si no hay contenido) */}
        {site.adoptables.length > 0 && (
        <section id="adoptables" className="border-t border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Adoptables</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Diseños de personajes listos para adoptar. SB = puja inicial, AB = llévatelo ya.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {site.adoptables.map((a) => (
                <div key={a.title} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                  {a.src ? (
                    <div className="relative aspect-square">
                      <Image
                        src={a.src}
                        alt={a.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-square flex-col items-center justify-center gap-2 border-b border-dashed border-white/15 text-center">
                      <span className="text-2xl">🖼️</span>
                      <p className="text-xs text-zinc-600">Añade tu adoptable</p>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold text-foreground">{a.title}</h3>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadge(a.status)}`}>
                        {a.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted">
                      SB: {a.sb} · MI: {a.mi} · AB: {a.ab}
                    </p>
                    {a.link ? (
                      <a
                        href={a.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
                      >
                        Pujar / comprar →
                      </a>
                    ) : (
                      <p className="mt-3 text-xs text-zinc-600">Enlace próximamente</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="border-t border-white/10">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Sobre mí</h2>
            <div className="mt-6 space-y-4">
              {site.bio.map((parrafo, i) => (
                <p key={i} className="leading-8 text-muted">
                  {parrafo}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="border-t border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Contacto</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              ¿Quieres encargar una comisión o solo saludar? Escríbeme por aquí.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block rounded-full border border-white/10 px-6 py-3 text-sm text-foreground transition-colors hover:border-accent/50"
            >
              {site.email}
            </a>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* PIE DE PÁGINA */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p className="text-xs text-zinc-600">Contenido solo para adultos (+18).</p>
        </div>
      </footer>
    </div>
  );
}
