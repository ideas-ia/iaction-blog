"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function FaviconSwitcher() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const href = resolvedTheme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg";

    // Update existing SVG favicon link, or create one if absent
    let link = document.querySelector<HTMLLinkElement>("link[rel='icon'][type='image/svg+xml']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/svg+xml";
      document.head.appendChild(link);
    }
    link.href = href;
  }, [resolvedTheme]);

  return null;
}
