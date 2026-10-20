import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const brands = [
  {
    name: "African Food King",
    status: "Active",
    description:
      "Authentic African food products bringing vibrant culinary traditions and premium tea lines to global consumers.",
    image: "/images/brands/african-food-king-logo.png",
    alt: "African Food King official brand logo",
    fit: "contain",
  },
  {
    name: "UncleTobi",
    status: "Coming soon",
    description:
      "An online grocery concept that aggregates suppliers for retail and international delivery.",
    image: "/images/brands/uncletobi-logo.png",
    alt: "UncleTobi online grocery concept logo",
    fit: "contain",
  },
  {
    name: "IJGB Foods",
    status: "Active",
    description:
      "African snacks with global swagger — facilitating trade and connecting quality commodities across markets.",
    image: "/images/brands/ijgb-foods-logo.png",
    alt: "IJGB Foods brand logo",
    fit: "contain",
  },
  {
    name: "HappyMan Foods",
    status: "Active",
    description:
      "The flagship brand AcresxManna uses to sell and distribute all of its products.",
    image: "/images/products/happyman-foods-commodity-sacks.jpg",
    alt: "HappyMan Foods 50kg agro-commodity sacks by AcresxManna Ltd.",
    fit: "cover",
  },
  {
    name: "Maluza Foods Co.",
    status: "Live",
    description:
      "A commercial bakery developing new products and opening retail stalls in and around Ibadan.",
    image: "/images/processing/bakery-deck-oven-fresh-bread.jpg",
    alt: "Maluza Foods bakery master baker presenting freshly baked golden loaf from commercial deck ovens",
    fit: "cover",
  },
];

export function BrandsSection() {
  return (
    <>
      <PatternDivider pattern="ankara" thickness="medium" eyebrow="Our ecosystem" />
      <section className="bg-white py-16 sm:py-24">
        <SectionContainer size="wide">
          <div className="mb-10 max-w-3xl">
            <Eyebrow className="mb-5">Our clients</Eyebrow>
            <h2 className="font-display text-display-1 font-black">
              Some of our clients.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, index) => (
              <ScrollReveal
                as="article"
                key={brand.name}
                delay={0.05 * index}
                className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 shadow-card transition duration-300 hover:shadow-card-hover"
              >
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden ${
                    brand.fit === "contain" ? "bg-white" : "bg-cream-200"
                  }`}
                >
                  <Image
                    src={brand.image}
                    alt={brand.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      brand.fit === "contain"
                        ? "object-contain p-6"
                        : "object-cover"
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm backdrop-blur-sm">
                      {brand.status}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
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
