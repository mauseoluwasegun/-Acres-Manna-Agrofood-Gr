import { SectionContainer } from "@/components/layout/SectionContainer";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  {
    number: "01",
    title: "Source",
    description:
      "Build supply relationships and understand raw material quality, availability and seasonality.",
  },
  {
    number: "02",
    title: "Process and manufacture",
    description:
      "AcresxManna Ltd manufactures food products through its Nigerian operations.",
  },
  {
    number: "03",
    title: "Package and build brands",
    description:
      "Products are packed to client requirements and sold under the HappyMan Foods brand.",
  },
  {
    number: "04",
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
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <ScrollReveal
                as="li"
                key={step.number}
                delay={0.05 * index}
                className="list-none rounded-3xl border border-cream-200 bg-white p-6 shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 font-mono font-bold text-purple-700">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-heading-2 font-black">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {step.description}
                </p>
              </ScrollReveal>
            ))}
          </ol>
        </SectionContainer>
      </section>
    </>
  );
}
