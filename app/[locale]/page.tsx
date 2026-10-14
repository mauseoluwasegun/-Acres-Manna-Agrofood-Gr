import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { AmbitionSection } from "@/components/sections/AmbitionSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { GlobalAmbitionSection } from "@/components/sections/GlobalAmbitionSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ManufacturingSection } from "@/components/sections/ManufacturingSection";
import { OperatingModelSection } from "@/components/sections/OperatingModelSection";
import { ProductTicker } from "@/components/sections/ProductTicker";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { StakeholderCube } from "@/components/sections/StakeholderCube";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <ProductTicker />
      <AmbitionSection />
      <AboutSection />
      <ManufacturingSection />
      <ProductsSection />
      <OperatingModelSection />
      <StakeholderCube />
      <BrandsSection />
      <ImpactSection />
      <GlobalAmbitionSection />
      <FinalCTASection />
    </main>
  );
}
