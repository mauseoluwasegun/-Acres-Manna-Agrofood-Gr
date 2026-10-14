import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "What We Do",
  description:
    "How AcresxManna connects agricultural supply with processing, manufacturing, product development and market access.",
};

const CAPABILITIES = [
  {
    title: "Agricultural sourcing",
    description:
      "Dependable supply relationships start with understanding raw material quality, availability and seasonality.",
  },
  {
    title: "Aggregation and supply management",
    description:
      "Coordinating suppliers and incoming materials helps align supply with production needs.",
  },
  {
    title: "Agro-processing",
    description:
      "Transforming commodities into food products with more utility, convenience and value.",
  },
  {
    title: "Food manufacturing",
    description:
      "AcresxManna Ltd manufactures food products in Nigeria for export markets.",
  },
  {
    title: "Quality assurance",
    description:
      "We are building quality assurance into production. We do not publish unverified certification claims.",
  },
  {
    title: "Product and brand development",
    description:
      "AcresxManna sells its products under HappyMan Foods; Maluza Foods Co. is developing bakery products.",
  },
  {
    title: "Distribution and international trade",
    description:
      "Export is our current route to market. Specific export destinations are not published.",
  },
  {
    title: "Contract manufacturing and partnerships",
    description:
      "Contact us to discuss potential partnerships. Capabilities, minimum order quantities and lead times are confirmed case by case.",
  },
];

export default function WhatWeDoPage() {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide">
        <Eyebrow className="mb-5">What we do</Eyebrow>
        <h1 className="max-w-5xl font-display text-display-1 font-black">
          We turn agricultural potential into food products and commercial value.
        </h1>
        <p className="mt-8 max-w-3xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          We connect agricultural supply with processing, manufacturing,
          product development and market access.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <ol className="grid gap-5 sm:grid-cols-2">
          {CAPABILITIES.map((capability, index) => (
            <ScrollReveal
              as="li"
              key={capability.title}
              delay={0.04 * index}
              className="list-none rounded-3xl border border-cream-200 bg-white p-7 shadow-card"
            >
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-mono font-bold text-purple-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-heading-2 font-black">
                    {capability.title}
                  </h2>
                  <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                    {capability.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </SectionContainer>

      <SectionContainer className="mt-16 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-display-2 font-black">
          We&apos;re building one integrated African food business, not a pile
          of disconnected parts.
        </h2>
        <Button
          href="/contact?type=partner"
          variant="primary"
          size="lg"
          className="mt-7"
        >
          Discuss a Commercial Partnership
        </Button>
      </SectionContainer>
    </main>
  );
}
