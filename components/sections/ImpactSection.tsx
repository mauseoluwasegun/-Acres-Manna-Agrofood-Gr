import { SectionContainer } from "@/components/layout/SectionContainer";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const HOME_IMPACT_CHIPS = [
  "Agricultural value addition",
  "Local production and employment",
  "Stronger supply chains",
  "African food in global markets",
];

export function ImpactSection() {
  return (
    <>
      <PatternDivider pattern="kente" thickness="bold" eyebrow="Our focus" />
      <MotionSection id="impact" className="bg-cream-100 py-20 sm:py-28">
        <SectionContainer size="wide">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <Eyebrow className="mb-5">Building with purpose</Eyebrow>
            <h2 className="font-display text-display-1 font-black leading-tight">
              Processing creates value. Value creates opportunity.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-body-lg leading-relaxed text-charcoal-700">
              The future of African agriculture depends not only on what is
              grown, but also on what is processed, manufactured and sold.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_IMPACT_CHIPS.map((area, index) => (
              <ScrollReveal
                as="article"
                key={area}
                delay={0.05 * index}
                className="rounded-2xl border border-cream-200 bg-white p-6 shadow-card"
              >
                <p className="font-mono text-label font-bold uppercase tracking-[0.12em] text-purple-700">
                  Focus area {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-heading-2 font-black text-charcoal-900">
                  {area}
                </h3>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="secondary" size="lg">
              Talk to our team
            </Button>
          </div>
        </SectionContainer>
      </MotionSection>
    </>
  );
}
