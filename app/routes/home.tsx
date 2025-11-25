import type { Route } from "./+types/home";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Introduction } from "../components/Introduction";
import { ExpandedRealtorProfile } from "../components/ExpandedRealtorProfile";
import { DualStrategySection } from "../components/DualStrategySection";
import { BuyerRoadmap } from "../components/BuyerRoadmap";
import { SellerRoadmap } from "../components/SellerRoadmap";
import { MoneyTalkSection } from "../components/MoneyTalkSection";
import { StrategicFinancials } from "../components/StrategicFinancials";
import { StagingComparison } from "../components/StagingComparison";
import { VersatilityGrid } from "../components/VersatilityGrid";
import { DesignShowcase } from "../components/DesignShowcase";
import { PricingAndProcess } from "../components/PricingAndProcess";
import { TestimonialsCTA } from "../components/TestimonialsCTA";
import { Footer } from "../components/Footer";
import { EducationalResources } from "../components/EducationalResources";
import { NetSheetCalculator } from "../components/calculators/NetSheetCalculator";
import { ROICalculator } from "../components/calculators/ROICalculator";
import { MortgageCalculator } from "../components/calculators/MortgageCalculator";
import { ClosingCostCalculator } from "../components/calculators/ClosingCostCalculator";
import { Section } from "../components/ui/Section";
import { Container } from "../components/ui/Container";
import { ParticleBackground } from "../components/ui/ParticleBackground";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SmartProfile™ - Your Digital Real Estate Identity" },
    { name: "description", content: "The ultimate interactive presentation builder for real estate professionals." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-luxury-cream text-luxury-black overflow-x-hidden relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      
      {/* What is SmartProfile? */}
      <Introduction />
      
      {/* Primary Focus: The Realtor */}
      <ExpandedRealtorProfile />

      {/* New Content Sections - Logical Flow */}
      <DualStrategySection />
      <BuyerRoadmap />
      <MoneyTalkSection />
      <SellerRoadmap />
      <StrategicFinancials />
      <StagingComparison />
      
      {/* Feature Overview */}
      <VersatilityGrid />
      
      {/* Deep Dive: Interactive Tools */}
      <div id="tools" className="relative">
        <Section className="bg-luxury-charcoal py-12 pb-0">
            <Container>
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Tools That <span className="text-gold-500">Close Deals</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore the suite of interactive calculators included in every SmartProfile.
                    </p>
                </div>
            </Container>
        </Section>
        <NetSheetCalculator />
        <ROICalculator />
        <MortgageCalculator />
        <ClosingCostCalculator />
      </div>
      
      {/* Educational Content */}
      <EducationalResources />

      <DesignShowcase />
      <PricingAndProcess />
      <TestimonialsCTA />
      <Footer />
    </div>
  );
}
