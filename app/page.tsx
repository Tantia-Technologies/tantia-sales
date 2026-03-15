import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProof } from "@/components/sections/SocialProof";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ModuleShowcase } from "@/components/sections/ModuleShowcase";
import { AIAgents } from "@/components/sections/AIAgents";
import { IndustryVerticals } from "@/components/sections/IndustryVerticals";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <ProblemSolution />
      <ModuleShowcase />
      <AIAgents />
      <IndustryVerticals />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
