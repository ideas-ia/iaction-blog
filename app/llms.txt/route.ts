import { siteConfig } from "@/lib/site";
import { translations } from "@/lib/translations";

export const dynamic = "force-static";

// llms.txt (llmstxt.org): resumen en Markdown para agentes, generado desde las mismas traducciones del sitio.
export function GET() {
  const t = translations.es;
  const list = (items: string[]) => items.map((i) => `- ${i}`).join("\n");

  const body = `# ${siteConfig.name}

> ${t.meta.description}

Estudio chileno de ingeniería de IA aplicada: agentes, automatización inteligente y data intelligence.

## Páginas
- [Sitio en español](${siteConfig.url}/): servicios, soluciones, proceso y preguntas frecuentes
- [Site in English](${siteConfig.url}/en): English version of the site
- [Contacto](${siteConfig.url}/#contacto): formulario para solicitar una evaluación

## Servicios
${list(t.services.items.map((s) => `**${s.title}** (${s.summary}): ${s.benefits.join("; ")}`))}

## Dónde aplicamos IA
${list(t.solutions.items.map((s) => `**${s.title}**: ${s.description}`))}

## Proceso
${list(t.process.steps.map((s) => `**${s.title}**: ${s.description}`))}

## Preguntas frecuentes
${t.faq.items.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")}

## Contacto
- [Email](mailto:${siteConfig.email})
- [Formulario de contacto](${siteConfig.url}/#contacto)
`;

  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
