import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site";
import { type Locale, translations } from "@/lib/translations";

const ProblemsSection = dynamic(() =>
  import("@/components/problems-section").then((module) => module.ProblemsSection)
);
const ServicesSection = dynamic(() =>
  import("@/components/services-section").then((module) => module.ServicesSection)
);
const SolutionsSection = dynamic(() =>
  import("@/components/solutions-section").then((module) => module.SolutionsSection)
);
const ProcessSection = dynamic(() =>
  import("@/components/process-section").then((module) => module.ProcessSection)
);
const TechMarqueeSection = dynamic(() =>
  import("@/components/tech-marquee-section").then((module) => module.TechMarqueeSection)
);
const ResultsSection = dynamic(() =>
  import("@/components/results-section").then((module) => module.ResultsSection)
);
const FaqSection = dynamic(() =>
  import("@/components/faq-section").then((module) => module.FaqSection)
);
const ContactSection = dynamic(() =>
  import("@/components/contact-section").then((module) => module.ContactSection)
);
const Footer = dynamic(() => import("@/components/footer").then((module) => module.Footer));

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
  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json">
        {JSON.stringify(buildStructuredData(lang)).replace(/</g, "\\u003c")}
      </script>
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <HeroSection />
        <div className="cv-auto">
          <ProblemsSection />
        </div>
        <div className="cv-auto">
          <ServicesSection />
        </div>
        <div className="cv-auto">
          <SolutionsSection />
        </div>
        <div className="cv-auto">
          <ProcessSection />
        </div>
        <div className="cv-auto">
          <TechMarqueeSection />
        </div>
        <div className="cv-auto">
          <ResultsSection />
        </div>
        <div className="cv-auto">
          <FaqSection />
        </div>
        <div className="cv-auto">
          <ContactSection />
        </div>
      </main>
      <div className="cv-auto">
        <Footer />
      </div>
    </div>
  );
}
