import dynamic from "next/dynamic";
import { CursorGlow } from "@/components/cursor-glow";
import { DemosSection } from "@/components/demos-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProblemsSection } from "@/components/problems-section";
import { ProcessSection } from "@/components/process-section";
import { ResultsSection } from "@/components/results-section";
import { ServicesSection } from "@/components/services-section";
import { SolutionsSection } from "@/components/solutions-section";
import { TechMarqueeSection } from "@/components/tech-marquee-section";
import { siteConfig } from "@/lib/site";
import { type Locale, translations } from "@/lib/translations";

const ContactSection = dynamic(() =>
  import("@/components/contact-section").then((module) => module.ContactSection)
);
const buildStructuredData = (lang: Locale) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.ogImage}`,
      email: siteConfig.email,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: translations[lang].meta.description,
      inLanguage: lang,
      publisher: {
        "@id": `${siteConfig.url}#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}#service`,
      name: "Servicios de IA para empresas",
      description: translations[lang].meta.description,
      url: siteConfig.url,
      provider: {
        "@id": `${siteConfig.url}#organization`,
      },
      areaServed: "Latinoamérica",
      serviceType: [
        "Automatización de procesos con IA",
        "Chatbots e interfaces IA",
        "Integraciones inteligentes",
        "Análisis de datos con IA",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}${lang === "en" ? "/en" : ""}#faq`,
      inLanguage: lang,
      mainEntity: translations[lang].faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
});

export default async function Page({ params }: PageProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  const t = translations[lang];
  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json">
        {JSON.stringify(buildStructuredData(lang)).replace(/</g, "\\u003c")}
      </script>
      <Navbar />
      <CursorGlow />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <HeroSection t={t} />
        <div className="cv-auto">
          <ProblemsSection t={t} />
        </div>
        <div className="cv-auto">
          <ServicesSection t={t} />
        </div>
        <div className="cv-auto">
          <SolutionsSection t={t} />
        </div>
        <div className="cv-auto">
          <ProcessSection t={t} />
        </div>
        <div className="cv-auto">
          <TechMarqueeSection t={t} />
        </div>
        <div className="cv-auto">
          <ResultsSection t={t} />
        </div>
        <div className="cv-auto">
          <DemosSection />
        </div>
        <div className="cv-auto">
          <FaqSection t={t} />
        </div>
        <div className="cv-auto">
          <ContactSection />
        </div>
      </main>
      <div className="cv-auto">
        <Footer t={t} />
      </div>
    </div>
  );
}
