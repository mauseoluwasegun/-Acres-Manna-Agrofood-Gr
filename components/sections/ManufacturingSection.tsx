import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";

const capabilities = [
  {
    title: "Agricultural sourcing",
    description: "Build dependable relationships with suppliers and producers.",
    image: "/images/farms/farmers-harvesting-shadehouse-tomatoes.jpg",
    alt: "AcresxManna farmers harvesting vine tomatoes in modern greenhouse shade structures",
  },
  {
    title: "Aggregation",
    description: "Bring agricultural commodities together for consistent production.",
    image: "/images/products/happyman-foods-commodity-sacks.jpg",
    alt: "Aggregated commodities packaged in HappyMan Foods commercial sacks",
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
    image: "/images/processing/hygienic-nut-sorting-team.jpg",
    alt: "Hygienic sorting and food manufacturing operations at our processing facility",
  },
  {
    title: "Brand development",
    description: "Develop products and brands for consumer and business markets.",
    image: "/images/products/african-food-king-hibiscus-tea.jpg",
    alt: "African Food King premium herbal tea collection packaging",
  },
  {
    title: "Distribution and trade",
    description: "Build routes to market across Africa and internationally.",
    image: "/images/logistics/freight-container-truck-dispatch.jpg",
    alt: "Heavy-duty export shipping containers dispatched for regional and global trade",
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
                <Image
                  src={capability.image}
                  alt={capability.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
