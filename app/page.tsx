import { ContactSection } from "@/components/contact-section";
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
        <ProblemsSection />
        <ServicesSection />
        <SolutionsSection />
        <ProcessSection />
        <TechMarqueeSection />
        <ResultsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
