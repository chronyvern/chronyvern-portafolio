"use client";

import { useSyncExternalStore, useState } from "react";

// Clave con la que guardamos la confirmación de edad en el navegador
const STORAGE_KEY = "chronyvern-age-verified";

// Lee si la edad ya fue confirmada en este navegador.
// Solo se ejecuta en el cliente (en el navegador), nunca en el servidor.
function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY) === "18";
}

// Valor que se usa durante el renderizado en el servidor, donde no existe
// localStorage. Devolvemos false para que la pantalla se muestre por defecto.
function getServerSnapshot() {
  return false;
}

// React usa esta función para "suscribirse" a cambios. El evento "storage"
// se dispara cuando otra pestaña del navegador cambia localStorage, así que
// si el usuario confirma en una pestaña, las demás también se actualizan.
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export default function AgeGate() {
  // Valor guardado en el navegador (true si ya confirmó ser mayor de edad)
  const saved = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Estado local para el clic en el botón "Entrar"
  const [clicked, setClicked] = useState(false);

  // Está verificado si ya lo guardó antes O si acaba de pulsar "Entrar"
  const verified = saved || clicked;

  function confirmAge() {
    localStorage.setItem(STORAGE_KEY, "18");
    setClicked(true);
  }

  // Si ya está verificado, no mostramos la pantalla de aviso
  if (verified) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-8 text-center shadow-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">
          Aviso de contenido
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-foreground">
          Contenido para adultos
        </h1>
        <p className="mt-4 text-sm leading-6 text-muted">
          Este sitio contiene material explícito destinado únicamente a personas
          mayores de 18 años. Al continuar, confirmas que tienes la edad legal
          para ver este contenido en tu país.
        </p>
        <div className="mt-7 flex flex-col gap-3">
          <button
            type="button"
            onClick={confirmAge}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-400"
          >
            Tengo 18 años o más — Entrar
          </button>
          <a
            href="https://www.google.com"
            className="rounded-full border border-white/10 px-6 py-3 text-sm text-muted transition-colors hover:border-white/25 hover:text-foreground"
          >
            Soy menor de edad — Salir
          </a>
        </div>
        <p className="mt-6 text-xs text-zinc-600">
          Tu elección se guarda en este navegador.
        </p>
      </div>
    </div>
  );
}
