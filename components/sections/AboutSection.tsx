import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { MotionSection } from "@/components/animations/MotionSection";

export function AboutSection() {
  return (
    <>
      <PatternDivider pattern="woven" thickness="medium" eyebrow="Who we are" />
      <MotionSection className="bg-white py-16 sm:py-24">
        <SectionContainer size="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <Eyebrow className="mb-5">Building the platform</Eyebrow>
              <h2 className="font-display text-display-1 font-black leading-tight">
                More than food production. We&apos;re building the platform.
              </h2>
            </div>
            <div>
              <p className="font-sans text-body-lg leading-relaxed text-charcoal-700">
                AcresxManna is building an African agro-processing and food
                manufacturing business that connects agricultural sourcing
                with processing, production, quality assurance, product
                development and market access. Agricultural value shouldn&apos;t
                end at the farm gate. Our principle is simple: connect each
                capability so more value can be created from what Africa grows.
              </p>
              <Button href="/about" variant="secondary" size="lg" className="mt-7">
                About Us
              </Button>
            </div>
          </div>
        </SectionContainer>
      </MotionSection>
    </>
  );
}
