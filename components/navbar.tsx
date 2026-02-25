"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();
  const mobileMenuId = "mobile-navigation";

  const navLinks = [
    { label: t.nav.services, href: "#servicios" },
    { label: t.nav.solutions, href: "#soluciones" },
    { label: t.nav.process, href: "#proceso" },
    { label: t.nav.results, href: "#resultados" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="iaction inicio"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Image
              src="/android-icon-48x48.png"
              alt="iaction logo"
              width={20}
              height={20}
              className="rounded-sm"
              sizes="20px"
              priority
            />
          </div>
          <span className="font-display text-lg font-bold text-foreground">iaction</span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild size="sm">
            <a href="#contacto">{t.nav.contact}</a>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-1 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={mobileOpen}
          aria-controls={mobileMenuId}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          id={mobileMenuId}
          className="border-t border-border bg-background px-6 pb-4 pt-2 md:hidden"
        >
          <nav aria-label="Navegación móvil" className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
              <Button asChild size="sm">
                {/* biome-ignore lint/a11y/useValidAnchor: in-page section link inside Button asChild */}
                <a href="#contacto" onClick={() => setMobileOpen(false)}>
                  {t.nav.contact}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
