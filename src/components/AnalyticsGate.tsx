"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

const KEY = "chronyvern-nocount";

// Analítica con opción de "no contarme a mí":
// - Visita tu web con  ?nocount=1  una sola vez en cada dispositivo
//   y a partir de ahí ese dispositivo ya no se cuenta en las visitas.
// - Para volver a contarlo: visita con  ?count=1
export default function AnalyticsGate() {
  const [state, setState] = useState<"loading" | "track" | "ignore">("loading");

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("nocount") === "1") {
        localStorage.setItem(KEY, "1");
      } else if (params.get("count") === "1") {
        localStorage.removeItem(KEY);
      }
      setState(localStorage.getItem(KEY) === "1" ? "ignore" : "track");
    } catch {
      setState("track");
    }
  }, []);

  if (state !== "track") return null;
  return <Analytics />;
}
