import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SITE_LOCATIONS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/MotionSection";

export const metadata = {
  title: "Infrastructure",
  description:
    "How AcresxManna is building production, quality assurance and supply chain capacity for African food manufacturing.",
};

export default function InfrastructurePage() {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide">
        <Eyebrow className="mb-5">Our operations</Eyebrow>
        <h1 className="max-w-5xl font-display text-display-1 font-black">
          Building the capacity behind African food.
        </h1>
        <p className="mt-8 max-w-3xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          Our ambition needs more than agricultural supply. It needs
          production infrastructure, people, systems and partnerships to turn
          raw materials into consistent, market-ready food. AcresxManna Ltd
          manufactures and exports from Nigeria; we are building further
          capability as demand, investment and readiness allow.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Production and processing",
              status: "Operating today",
              description:
                "AcresxManna Ltd manufactures food products at its factory and headquarters in Moniya, Ibadan. Further production capacity and process improvements are part of our development ambitions.",
            },
            {
              title: "Quality information",
              status: "Built into the work",
              description:
                "Quality requirements are product- and market-specific. We confirm specifications and compliance details for each enquiry, and do not publish unverified certification claims.",
            },
            {
              title: "Supply chain and warehousing",
              status: "Operating today",
              description:
                "Our confirmed locations include the factory and headquarters in Moniya, the Nigerian office in Lagos, and the UK warehouse and office in Hertford.",
            },
            {
              title: "Infrastructure for growth",
              status: "Building next",
              description:
                "Planned development includes additional production capacity, more efficient processing and packaging, improved storage and inventory control, and wider product capability.",
            },
          ].map((item, index) => (
            <ScrollReveal
              as="article"
              key={item.title}
              delay={0.05 * index}
              className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card"
            >
              <Eyebrow className="mb-4">{item.status}</Eyebrow>
              <h2 className="font-display text-heading-2 font-black">
                {item.title}
              </h2>
              <p className="mt-4 font-sans text-body-md leading-relaxed text-charcoal-700">
                {item.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <div className="grid gap-4 md:grid-cols-3">
          {SITE_LOCATIONS.map(({ label, address }) => (
            <address
              key={label}
              className="rounded-3xl border border-cream-200 bg-white p-6 not-italic shadow-card"
            >
              <Eyebrow className="mb-4">{label}</Eyebrow>
              <p className="font-sans text-body-md leading-relaxed text-charcoal-700">
                {address}
              </p>
            </address>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer className="mt-16 text-center">
        <Button href="/contact?type=visit" variant="primary" size="lg">
          Enquire about visiting
        </Button>
      </SectionContainer>
    </main>
  );
}
