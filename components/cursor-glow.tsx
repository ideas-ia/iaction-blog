"use client";

import { useEffect } from "react";

// Mueve el foco del fondo .ai-bg hacia el cursor escribiendo --mx/--my; el dibujo y la suavidad son CSS.
// Solo con mouse y sin "movimiento reducido": en táctil el fondo queda en su posición por defecto.
export function CursorGlow() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let active: HTMLElement | null = null;

    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = (e.target as Element | null)?.closest<HTMLElement>(".ai-bg") ?? null;
        if (active && active !== el) {
          active.style.removeProperty("--mx");
          active.style.removeProperty("--my");
        }
        active = el;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
