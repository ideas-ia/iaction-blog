import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa6";
import { ThemeLogo } from "@/components/theme-logo";
import { siteConfig } from "@/lib/site";
import type { Translations } from "@/lib/translations";

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  {
    icon: Mail,
    href: `mailto:${siteConfig.email}?subject=${encodeURIComponent("Consulta desde iaction.cl")}&body=${encodeURIComponent("Hola, me gustaría automatizar:\n\nProceso: \nVolumen aproximado: \nPlazo: \n\nNombre y empresa: ")}`,
    label: "Email",
  },
];

export function Footer({ t }: { t: Translations }) {
  const links = [
    { label: t.nav.services, href: "#servicios" },
    { label: t.nav.process, href: "#proceso" },
    { label: t.nav.results, href: "#resultados" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contacto" },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <a
            href="/"
            className="flex items-center gap-2 rounded-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="iaction inicio"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
              <ThemeLogo size={32} />
            </div>
            <span className="font-display text-base font-semibold text-foreground">iaction</span>
          </a>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            {t.footer.tagline}
          </p>
        </div>

        <nav
          aria-label="Enlaces del pie"
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={social.label}
            >
              <social.icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} iaction. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
