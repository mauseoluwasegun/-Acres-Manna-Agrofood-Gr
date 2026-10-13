import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const MARKET_VALUES = [
  { label: "Current focus", value: "Export today", description: "Our export model is active, while Nigerian retail is planned through physical stores and the UncleTobi concept." },
  { label: "Production base", value: "Nigeria + West Africa", description: "We build from African supply and processing capability, with quality standards built for both local and international buyers." },
  { label: "Commercial goal", value: "Scale through trade", description: "We are building the product range, packaging standards and distribution routes needed to compete beyond raw commodities." },
  { label: "Operating model", value: "Strategic reach", description: "Acres & Manna Ltd manufactures, signs customer contracts and exports. The UK-facing business supports buyer relationships and invoicing." },
];

const MARKETS = [
  { title: "African markets", text: "Strengthening local processing, product quality and supply consistency for the continent's food economy." },
  { title: "Export markets", text: "Building routes to market for African food products through disciplined manufacturing, packaging and commercial relationships." },
  { title: "Retail and food service", text: "Providing dependable ingredients and ready-to-sell food products for buyers, distributors and retailers." },
  { title: "Strategic partnerships", text: "Working with suppliers, distributors, manufacturers and commercial partners who value African agri-food potential." },
];

export default function GlobalMarketsPage() {
  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">Global ambition</Eyebrow>
        <h1 className="font-display font-black text-display-1 text-balance mx-auto max-w-5xl">
          Built in Africa. <em>Designed to compete globally.</em>
        </h1>
        <p className="mt-8 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          We are going beyond raw commodities. We are building the processing capability, product portfolio and commercial relationships needed to compete in African and international food markets.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {MARKET_VALUES.map((item) => (
            <article
              key={item.label}
              className="rounded-soft-lg border border-cream-100 bg-white/70 p-6 shadow-card"
            >
              <p className="font-mono text-label uppercase tracking-[0.12em] text-terracotta-700">{item.label}</p>
              <h2 className="mt-4 font-display font-black text-heading-2">{item.value}</h2>
              <p className="mt-3 font-sans text-body-md text-charcoal-700 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {MARKETS.map((market) => (
            <article
              key={market.title}
              className="rounded-soft-lg border border-cream-100 bg-cream-50 p-7 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <Eyebrow accent="mango" className="mb-3">Market route</Eyebrow>
              <h3 className="font-display font-black text-heading-1 mb-3">{market.title}</h3>
              <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">{market.text}</p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="mt-20 text-center">
        <Button href="/contact?type=partner" variant="primary" size="lg">
          Let&apos;s Talk
        </Button>
      </SectionContainer>
    </main>
  );
}
