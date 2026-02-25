export const siteConfig = {
  name: "iaction",
  description:
    "Desarrollo de soluciones de IA personalizadas que reducen costos operativos hasta un 70%. Automatizaciones, chatbots e integraciones inteligentes.",
  locale: "es_ES",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://iaction.com",
  ogImage: "/android-icon-192x192.png",
  email: "meeh.dev@gmail.com",
  keywords: [
    "automatización con IA",
    "inteligencia artificial para empresas",
    "chatbots con IA",
    "integraciones inteligentes",
    "consultoría IA",
    "desarrollo de soluciones IA",
    "optimización de procesos",
    "SEO con inteligencia artificial",
  ],
} as const;
