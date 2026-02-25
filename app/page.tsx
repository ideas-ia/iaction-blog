import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";
import { LazySection } from "@/components/lazy-section";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site";

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

const structuredData = {
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
      description: siteConfig.description,
      inLanguage: ["es", "en"],
      publisher: {
        "@id": `${siteConfig.url}#organization`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}#service`,
      name: "Servicios de IA para empresas",
      description: siteConfig.description,
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
  ],
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <HeroSection />
        <LazySection>
          <ProblemsSection />
        </LazySection>
        <LazySection>
          <ServicesSection />
        </LazySection>
        <LazySection>
          <SolutionsSection />
        </LazySection>
        <LazySection>
          <ProcessSection />
        </LazySection>
        <LazySection>
          <TechMarqueeSection />
        </LazySection>
        <LazySection>
          <ResultsSection />
        </LazySection>
        <LazySection>
          <FaqSection />
        </LazySection>
        <LazySection>
          <ContactSection />
        </LazySection>
      </main>
      <LazySection>
        <Footer />
      </LazySection>
    </div>
  );
}
