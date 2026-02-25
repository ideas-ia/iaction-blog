"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n-context";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-14 rounded-full bg-muted" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? t.theme.switchToLight : t.theme.switchToDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border border-border bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span
        className={`pointer-events-none flex h-6 w-6 items-center justify-center rounded-full bg-primary shadow-sm transition-transform ${
          isDark ? "translate-x-7" : "translate-x-0.5"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-primary-foreground" aria-hidden="true" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-primary-foreground" aria-hidden="true" />
        )}
      </span>
    </button>
  );
}
