import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { type Locale, translations } from "@/lib/translations";
import { type DemoSlug, demos } from "../demos";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/demos/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const demo = demos[slug as DemoSlug]?.[lang as Locale];
  // Placeholder: no indexar hasta que la demo exista.
  return demo ? { title: demo.title, description: demo.description, robots: { index: false } } : {};
}

export default async function DemoPage({ params }: PageProps<"/[lang]/demos/[slug]">) {
  const { lang, slug } = await params;
  const demo = demos[slug as DemoSlug]?.[lang as Locale];
  if (!demo) notFound();
  const t = translations[lang as Locale];
  const home = lang === "en" ? "/en" : "/es";
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <span className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
        {t.demos.soon}
      </span>
      <h1 className="text-4xl font-bold sm:text-5xl">{demo.title}</h1>
      <p className="max-w-xl text-lg text-muted-foreground">{demo.description}</p>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Button asChild size="lg">
          <a href={`${lang === "en" ? "/en" : "/"}?demo=${slug}#contacto`}>{t.demos.request}</a>
        </Button>
        <Button asChild size="lg" variant="ghost">
          {/* "/es" y no "/": en el subdominio "/" es la propia demo; "/es" lleva al sitio principal. */}
          <a href={home}>{t.demos.back}</a>
        </Button>
      </div>
    </main>
  );
}
