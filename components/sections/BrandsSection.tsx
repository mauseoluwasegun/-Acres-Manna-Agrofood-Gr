import { SectionContainer } from "@/components/layout/SectionContainer";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const brands = [
  {
    name: "HappyMan Foods",
    status: "Active",
    description:
      "The brand AcresxManna uses to sell all of its products.",
  },
  {
    name: "Maluza Foods Co.",
    status: "Live",
    description:
      "A bakery developing new products and opening new stalls in and around Ibadan.",
  },
  {
    name: "UncleTobi",
    status: "Coming soon",
    description:
      "An online grocery concept that aggregates suppliers for retail. Launch date to be announced.",
  },
];

export function BrandsSection() {
  return (
    <>
      <PatternDivider pattern="ankara" thickness="medium" eyebrow="Our ecosystem" />
      <section className="bg-white py-16 sm:py-24">
        <SectionContainer size="wide">
          <div className="mb-10 max-w-3xl">
            <Eyebrow className="mb-5">Our brands</Eyebrow>
            <h2 className="font-display text-display-1 font-black">
              One platform. Multiple opportunities.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {brands.map((brand, index) => (
              <ScrollReveal
                as="article"
                key={brand.name}
                delay={0.05 * index}
                className="rounded-3xl border border-cream-200 bg-cream-50 p-7 shadow-card"
              >
                <Eyebrow className="mb-4">{brand.status}</Eyebrow>
                <h3 className="font-display text-heading-2 font-black">
                  {brand.name}
                </h3>
                <p className="mt-4 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {brand.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/our-brands" variant="secondary" size="lg">
              Explore our brands
            </Button>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
