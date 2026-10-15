import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { IMPACT_METRICS, IMPACT_SCORECARD } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/MotionSection";

export const metadata = {
  title: "Impact",
  description:
    "Explore the business focus areas behind AcresxManna's agro-processing and food manufacturing work.",
};

const impactStories = [
  {
    title: "Agricultural value addition",
    caption: "Empowering smallholder farmers with modern shade house agriculture, drip irrigation and high-yield crop agronomy.",
    image: "/images/farms/farmers-harvesting-shadehouse-tomatoes.jpg",
  },
  {
    title: "Local production and employment",
    caption: "Creating sustainable jobs and technical training in quality sorting, hygienic food handling, and manufacturing.",
    image: "/images/processing/full-facility-sorting-hall.jpg",
  },
  {
    title: "Stronger supply chains",
    caption: "Bridging the gap between rural smallholder growers and industrial-scale agro-processing facilities.",
    image: "/images/farms/plantain-plantation-irrigation.jpg",
  },
  {
    title: "African food in global markets",
    caption: "Scaling containerized export pathways so high-grade African food items compete with distinction globally.",
    image: "/images/logistics/shipping-container-export-ready.jpg",
  },
];

export default function ImpactPage() {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">Our focus</Eyebrow>
        <h1 className="mx-auto max-w-5xl font-display text-display-1 font-black">
          Processing creates value. Value creates opportunity.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          AcresxManna is building its business around agricultural
          value-addition, local production and access to markets. We will
          publish measurable impact information when verified data is
          available.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="bogolan" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactStories.map((item, index) => (
            <ScrollReveal
              as="article"
              key={item.title}
              delay={0.04 * index}
              className="group overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card transition duration-300 hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm backdrop-blur-sm">
                    Focus {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-heading-2 font-black text-charcoal-900">
                  {item.title}
                </h2>
                <p className="mt-2 font-sans text-body-sm leading-relaxed text-charcoal-600">
                  {item.caption}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Spotlight on Smallholder Innovation */}
      <SectionContainer size="wide" className="mt-20">
        <div className="overflow-hidden rounded-3xl bg-purple-700 text-white shadow-card lg:grid lg:grid-cols-12">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:col-span-5">
            <Image
              src="/images/farms/farmer-papaya-cultivation.jpg"
              alt="Farmer inspecting high-yield dwarf hybrid papaya trees"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 40vw"
            />
          </div>
          <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-center">
            <Eyebrow className="mb-4 text-yellow-400">Community & Agronomy</Eyebrow>
            <h2 className="font-display text-display-2 font-black leading-tight">
              Championing farmers with resilient agronomy.
            </h2>
            <p className="mt-4 font-sans text-body-lg leading-relaxed text-white/90">
              Through partnerships with local growers, we introduce dwarf hybrid crop varieties, pest-resistant seed stock, and protected shade structures. This boosts harvest volume per hectare and shields farming families from climate volatility.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="rounded-full bg-white/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-yellow-300 border border-white/15">
                Seedling Nurturing
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-yellow-300 border border-white/15">
                Direct Offtake Contracts
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-yellow-300 border border-white/15">
                Female Workforce Empowerment
              </span>
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-20">
        <div className="mb-8 max-w-3xl">
          <Eyebrow className="mb-4">Impact scorecard</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            Coming soon: we only publish numbers we can stand behind.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_SCORECARD.map((metric) => (
            <article
              key={metric}
              className="rounded-3xl border border-cream-200 bg-cream-50 p-6"
            >
              <p className="font-display text-heading-2 font-black">{metric}</p>
              <p className="mt-4 font-mono text-label font-bold uppercase tracking-[0.1em] text-purple-700">
                Coming soon
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="mt-20 text-center">
        <p className="mx-auto max-w-4xl font-display text-heading-1 font-bold leading-relaxed">
          We want our growth measured not only by the products we sell, but by
          the productive capacity and economic opportunities we help create.
        </p>
        <Button href="/contact" variant="primary" size="lg">
          Talk to our team
        </Button>
      </SectionContainer>
    </main>
  );
}
