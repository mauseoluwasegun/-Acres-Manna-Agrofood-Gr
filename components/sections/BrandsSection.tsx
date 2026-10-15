import Image from "next/image";
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
    image: "/images/products/happyman-foods-commodity-sacks.jpg",
    alt: "HappyMan Foods 50kg agro-commodity sacks by AcresxManna Ltd.",
  },
  {
    name: "Maluza Foods Co.",
    status: "Live",
    description:
      "A bakery developing new products and opening new stalls in and around Ibadan.",
    image: "/images/processing/bakery-deck-oven-fresh-bread.jpg",
    alt: "Maluza Foods bakery master baker presenting freshly baked golden loaf from commercial deck ovens",
  },
  {
    name: "UncleTobi",
    status: "Coming soon",
    description:
      "An online grocery concept that aggregates suppliers for retail. Launch date to be announced.",
    image: "/images/products/packaged-snacks-jars.jpg",
    alt: "Packaged consumer snacks and ingredients ready for retail distribution",
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
          <div className="grid gap-6 md:grid-cols-3">
            {brands.map((brand, index) => (
              <ScrollReveal
                as="article"
                key={brand.name}
                delay={0.05 * index}
                className="group overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 shadow-card transition duration-300 hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream-200">
                  <Image
                    src={brand.image}
                    alt={brand.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm backdrop-blur-sm">
                      {brand.status}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-heading-2 font-black">
                    {brand.name}
                  </h3>
                  <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                    {brand.description}
                  </p>
                </div>
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
