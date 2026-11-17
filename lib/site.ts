export const siteConfig = {
  name: "iaction",
  description:
    "Estudio de IA aplicada: diseñamos, desarrollamos e integramos sistemas de inteligencia artificial que automatizan operaciones, conectan plataformas y transforman datos en decisiones.",
  locale: "es_ES",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.iaction.cl",
  ogImage: "/android-icon-192x192.png",
  email: "contacto@iaction.cl",
  keywords: [
    "automatización con IA",
    "inteligencia artificial para empresas",
    "chatbots con IA",
    "integraciones inteligentes",
    "consultoría IA",
    "desarrollo de soluciones IA",
    "optimización de procesos",
    "agentes de IA",
    "speech analytics",
    "automatización documental",
  ],
} as const;
