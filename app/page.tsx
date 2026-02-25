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

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
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
