import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";

const capabilities = [
  {
    title: "Agricultural sourcing",
    description: "Build dependable relationships with suppliers and producers.",
  },
  {
    title: "Aggregation",
    description: "Bring agricultural commodities together for consistent production.",
  },
  {
    title: "Processing",
    description: "Turn raw materials into value-added food products.",
  },
  {
    title: "Manufacturing",
    description: "Produce and package food to defined specifications.",
  },
  {
    title: "Brand development",
    description: "Develop products and brands for consumer and business markets.",
  },
  {
    title: "Distribution and trade",
    description: "Build routes to market across Africa and internationally.",
  },
];

export function ManufacturingSection() {
  return (
    <MotionSection className="bg-purple-700 py-16 text-white sm:py-24">
      <SectionContainer size="wide">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5 text-yellow-400">What we do</Eyebrow>
          <h2 className="font-display text-display-1 font-black leading-tight">
            From agricultural commodities to finished food products.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-body-lg leading-relaxed text-white/85">
            We connect sourcing, processing, manufacturing and market access
            to bring African food products to buyers. Products are packed to
            each client&apos;s requirements; we do not publish standard pack
            sizes or export destinations.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <ScrollReveal
              as="li"
              key={capability.title}
              delay={0.05 * index}
              className="list-none rounded-3xl border border-white/20 bg-white/5 p-6"
            >
              <h3 className="font-display text-heading-2 font-black">
                {capability.title}
              </h3>
              <p className="mt-3 font-sans text-body-md leading-relaxed text-white/85">
                {capability.description}
              </p>
            </ScrollReveal>
          ))}
        </ul>
      </SectionContainer>
    </MotionSection>
  );
}
