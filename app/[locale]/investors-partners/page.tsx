import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const PARTNERS = [
  {
    title: "Investors",
    description: "Support the next stage of African food manufacturing, value addition and commercial scale-up across the agri-food value chain.",
    accent: "mango",
  },
  {
    title: "Agricultural suppliers",
    description: "Build dependable sourcing relationships grounded in quality, consistency and long-term market access.",
    accent: "forest",
  },
  {
    title: "Distributors & retailers",
    description: "Grow market reach through trusted distribution routes, product fit and reliable operational support.",
    accent: "terracotta",
  },
  {
    title: "Food manufacturers & buyers",
    description: "Partner on product development, contract supply, packaging and commercial opportunities for African food products.",
    accent: "indigo",
  },
];

const WHY = [
  "Processing creates more value from African agricultural resources.",
  "A disciplined operating model links production, quality and market access.",
  "The business is building a platform around food manufacturing, distribution and brand development.",
  "Our work is designed to strengthen supply chains and grow commercial opportunity across the food economy.",
];

export default function InvestorsPartnersPage() {
  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">Partnerships</Eyebrow>
        <h1 className="font-display font-black text-display-1 text-balance mx-auto max-w-5xl">
          We welcome conversations with <em>investors, suppliers and partners.</em>
        </h1>
        <p className="mt-8 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          Acres & Manna is building an African agro-processing and food manufacturing platform. We are open to partnerships that create value across sourcing, manufacturing, distribution and brand development.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {PARTNERS.map((partner) => (
            <article
              key={partner.title}
              className="rounded-soft-lg border border-cream-100 bg-white/70 p-6 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <Eyebrow accent={partner.accent as any} className="mb-3">
                Partnership
              </Eyebrow>
              <h2 className="font-display font-black text-heading-2 mb-3">{partner.title}</h2>
              <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">{partner.description}</p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-20">
        <div className="rounded-soft-xl border border-cream-100 bg-cream-50 p-8 sm:p-10">
          <Eyebrow accent="forest" className="mb-4">Why partner with us</Eyebrow>
          <h2 className="font-display font-black text-display-2 text-balance max-w-3xl">
            We are building the bridge between agricultural potential and commercial food value.
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHY.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-soft border border-cream-100 bg-white/70 p-4">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-mango-400/20 font-mono text-[10px] font-bold text-charcoal-900">✓</span>
                <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="mt-20 text-center">
        <Button href="/contact?type=partner" variant="primary" size="lg">
          Partner With Us
        </Button>
      </SectionContainer>
    </main>
  );
}
