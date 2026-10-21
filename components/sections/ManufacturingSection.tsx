import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";

const capabilities = [
  {
    title: "Agricultural sourcing",
    description: "Build dependable relationships with suppliers and producers.",
    image: "/images/farms/cassava.jpg",
    alt: "Freshly harvested cassava roots piled together",
  },
  {
    title: "Aggregation",
    description: "Bring agricultural commodities together for consistent production.",
    image: "/images/logistics/warehouse-racking-branded-sacks.jpg",
    alt: "Warehouse racking with branded agricultural commodity sacks",
  },
  {
    title: "Processing",
    description: "Turn raw materials into value-added food products.",
    image: "/images/processing/peanuts-deskinning-grading-table.jpg",
    alt: "Mechanical and manual sorting of golden roasted peanuts",
  },
  {
    title: "Manufacturing",
    description: "Produce and package food to defined specifications.",
    image: "/images/processing/industrial-mixing-sifter-tanks.jpg",
    alt: "Industrial mixing and sifter tanks in manufacturing facility",
  },
  {
    title: "Brand development",
    description: "Develop products and brands for consumer and business markets.",
    image: "/images/farms/plantain-plantation-irrigation.jpg",
    alt: "Plantain plantation with irrigation system",
  },
  {
    title: "Distribution and trade",
    description: "Build routes to market across Africa and internationally.",
    image: "/images/logistics/container-bottled-products-export.jpg",
    alt: "Stationary container with bottled products ready for export",
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
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <ScrollReveal
              as="li"
              key={capability.title}
              delay={0.05 * index}
              className="group list-none overflow-hidden rounded-3xl border border-white/20 bg-white/5 transition duration-300 hover:border-yellow-400/50 hover:bg-white/10"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-purple-900/40">
                <LazyImage
                  src={capability.image}
                  alt={capability.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  wrapperClassName="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-heading-2 font-black">
                  {capability.title}
                </h3>
                <p className="mt-3 font-sans text-body-md leading-relaxed text-white/85">
                  {capability.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ul>
      </SectionContainer>
    </MotionSection>
  );
}
