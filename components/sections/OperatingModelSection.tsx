import { SectionContainer } from "@/components/layout/SectionContainer";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  {
    title: "Source",
    description:
      "Build supply relationships and understand raw material quality, availability and seasonality.",
  },
  {
    title: "Process and manufacture",
    description:
      "AcresxManna Ltd manufactures food products through its Nigerian operations.",
  },
  {
    title: "Package and build brands",
    description:
      "Products are packed to client requirements and sold under the HappyMan Foods brand.",
  },
  {
    title: "Connect to markets",
    description:
      "Export is active today. Nigerian retail is planned through shops and UncleTobi.",
  },
];

export function OperatingModelSection() {
  return (
    <>
      <PatternDivider pattern="bogolan" thickness="medium" eyebrow="How it connects" />
      <section className="bg-cream-50 py-16 sm:py-24">
        <SectionContainer size="wide">
          <div className="mb-10 max-w-3xl">
            <Eyebrow className="mb-5">Our operating model</Eyebrow>
            <h2 className="font-display text-display-1 font-black">
              Building value across the food chain.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.title}
                delay={0.05 * index}
                className="rounded-3xl border border-cream-200 bg-white p-6 shadow-card"
              >
                <div className="h-1.5 w-8 rounded-full bg-yellow-400" />
                <h3 className="mt-4 font-display text-heading-2 font-black">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {step.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
