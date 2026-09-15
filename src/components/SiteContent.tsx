"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";
import { t, LANGUAGES, type Lang } from "@/lib/i18n";
import { type E621Post, postImageUrl } from "@/lib/e621";

function statusBadge(status: string) {
  if (status === "Abierto") return "bg-accent/15 text-accent";
  if (status === "Cerrado") return "bg-amber-500/15 text-amber-400";
  return "bg-zinc-800 text-zinc-500";
}

export default function SiteContent({ posts }: { posts: E621Post[] }) {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("chronyvern-lang");
      if (saved === "es" || saved === "en" || saved === "ja") {
        setLang(saved);
      } else if (typeof navigator !== "undefined") {
        const l = (navigator.language || "").toLowerCase();
        if (l.startsWith("es")) setLang("es");
        else if (l.startsWith("ja")) setLang("ja");
      }
    } catch {
      /* localStorage no disponible */
    }
  }, []);

  function changeLang(l: Lang) {
    setLang(l);
    try {
      localStorage.setItem("chronyvern-lang", l);
    } catch {
      /* ignorar */
    }
  }

  const d = t[lang];

  const navLinks = [
    { label: d.nav.gallery, href: "#galeria" },
    { label: d.nav.commissions, href: "#comisiones" },
    ...(site.ych.length > 0 ? [{ label: "YCH", href: "#ych" }] : []),
    ...(site.adoptables.length > 0 ? [{ label: "Adoptables", href: "#adoptables" }] : []),
    { label: d.nav.about, href: "#sobre-mi" },
    { label: d.nav.contact, href: "#contacto" },
  ];

  const year = new Date().getFullYear();

  return (
    <div className="flex-1">
      {/* Barra de navegación */}
      <header className="glass-nav sticky top-0 z-40 border-b border-white/10">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-3">
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

          <div className="flex items-center gap-2">
            {/* Selector de idioma */}
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
              {LANGUAGES.map((l) => {
                const active = mounted && lang === l.code;
                return (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => changeLang(l.code)}
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                      active
                        ? "bg-accent text-white"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                );
              })}
            </div>

            <a
              href="#comisiones"
              className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-rose-400 sm:inline-flex"
            >
              {d.nav.commissions}
            </a>
          </div>
        </nav>
      </header>

      <main id="inicio">
        {/* PORTADA (HERO) */}
        <section className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
          <div className="glass rounded-3xl px-6 py-14 sm:px-12">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
              {d.hero.tagline}
            </p>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
              {site.name}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              {d.hero.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#galeria"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-400"
              >
                {d.hero.viewGallery}
              </a>
              <a
                href="#comisiones"
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-muted transition-colors hover:border-white/25 hover:text-foreground"
              >
                {d.hero.commissionMe}
              </a>
            </div>
          </div>
        </section>

        {/* GALERÍA (se llena sola desde e621) */}
        <section id="galeria" className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">{d.gallery.title}</h2>
          <p className="mt-3 max-w-2xl text-muted">{d.gallery.subtitle}</p>
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
                    className="glass group relative aspect-square overflow-hidden rounded-2xl"
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
              <p className="col-span-full text-sm text-muted">{d.gallery.empty}</p>
            )}
          </div>
        </section>

        {/* COMISIONES */}
        <section id="comisiones" className="border-t border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">{d.commissions.title}</h2>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  site.commissionsOpen
                    ? "bg-accent/15 text-accent"
                    : "bg-amber-500/15 text-amber-400"
                }`}
              >
                {site.commissionsOpen ? d.commissions.open : d.commissions.closed}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-muted">{d.commissions.subtitle}</p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {d.commissions.items.map((c) => (
                <div
                  key={c.name}
                  className="glass rounded-2xl p-6 transition-colors hover:border-accent/40"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                    <span className="text-lg font-bold text-accent">{c.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{c.description}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-12 text-xl font-semibold text-foreground">{d.commissions.extrasTitle}</h3>
            <ul className="mt-4 divide-y divide-white/10">
              {d.commissions.extras.map((e) => (
                <li key={e.name} className="flex items-center justify-between gap-4 py-3">
                  <span className="text-muted">{e.name}</span>
                  <span className="font-semibold text-accent">{e.price}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl font-semibold text-foreground">{d.commissions.termsTitle}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {d.commissions.terms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl font-semibold text-foreground">{d.commissions.paymentsTitle}</h3>
            <ul className="mt-4 divide-y divide-white/10">
              {d.commissions.payments.map((m) => (
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
                      {m.active ? d.commissions.activeLabel : d.commissions.soonLabel} →
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-600">
                      {m.active ? d.commissions.activeLabel : d.commissions.soonLabel}
                    </span>
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
              {d.commissions.support}
            </a>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="border-t border-white/10">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <div className="glass rounded-3xl p-8 sm:p-10">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">{d.about.title}</h2>
              <div className="mt-6 space-y-4">
                {d.about.paragraphs.map((parrafo, i) => (
                  <p key={i} className="leading-8 text-muted">
                    {parrafo}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="border-t border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">{d.contact.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">{d.contact.subtitle}</p>
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
                  className="glass rounded-full px-4 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-foreground"
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
          <p>{d.footer.rights.replace("{year}", String(year)).replace("{name}", site.name)}</p>
          <p className="text-xs text-zinc-600">{d.footer.adult}</p>
        </div>
      </footer>
    </div>
  );
}
