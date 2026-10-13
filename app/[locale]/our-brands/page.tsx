import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PatternFramedImage } from "@/components/ui/PatternFrame";

const BRAND_CARDS = [
  {
    name: "HappyMan Foods",
    role: "The brand we sell our products under",
    status: "Active",
    description:
      "The signature consumer-facing food brand used to present Acres & Manna products in African and international markets.",
    accent: "mango" as const,
    image: "/images/product-jollof.jpg",
  },
  {
    name: "Maluza Foods Co.",
    role: "Bakery and food retail development",
    status: "Live",
    description:
      "A bakery-focused venture developing products and sales points in and around Ibadan, with a growing local presence.",
    accent: "forest" as const,
    image: "/images/processing-facility.jpg",
  },
  {
    name: "UncleTobi",
    role: "Online grocery concept",
    status: "Coming soon",
    description:
      "An online grocery proposition designed to aggregate suppliers and create a convenient digital retail channel for consumers.",
    accent: "terracotta" as const,
    image: "/images/farm-origin.jpg",
  },
];

export default function OurBrandsPage() {
  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">Our ecosystem</Eyebrow>
        <h1 className="font-display font-black text-display-1 text-balance mx-auto max-w-4xl">
          One platform. <em>Multiple opportunities.</em>
        </h1>
        <p className="mt-8 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          Our wider ecosystem brings together food products, a bakery and an online grocery concept, each with its own role in building a stronger African food value chain.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
          {BRAND_CARDS.map((brand) => (
            <article
              key={brand.name}
              className="group relative rounded-soft-lg overflow-hidden border border-cream-100 bg-white/70 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
            >
              <PatternFramedImage
                src={brand.image}
                alt={brand.name}
                width={700}
                height={820}
                thickness="medium"
                pattern={brand.accent === "mango" ? "woven" : brand.accent === "forest" ? "mudcloth" : "ankara"}
                cornerAccent={brand.accent}
                className="aspect-[4/5]"
              />
              <div className="p-6 sm:p-7">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <Eyebrow accent={brand.accent}>{brand.status}</Eyebrow>
                </div>
                <h2 className="font-display font-black text-heading-1 mb-2">{brand.name}</h2>
                <p className="font-mono text-label uppercase tracking-[0.12em] text-charcoal-700/70 mb-3">
                  {brand.role}
                </p>
                <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">
                  {brand.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            href="/products"
            variant="secondary"
            size="lg"
            className="max-w-full whitespace-normal text-center"
          >
            Explore Our Products
          </Button>
        </div>
      </SectionContainer>
    </main>
  );
}
