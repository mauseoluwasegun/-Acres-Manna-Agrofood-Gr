import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const IMPACT_METRICS = [
  { value: "10,000+", label: "Farmers supported" },
  { value: "85", label: "Communities reached" },
  { value: "36+", label: "Products developed" },
  { value: "24+", label: "Markets served" },
  { value: "420+", label: "Jobs created" },
  { value: "15,000 t/yr", label: "Production capacity" },
];

const IMPACT_STORIES = [
  {
    title: "Agricultural value addition",
    description: "Turning raw agricultural resources into finished food products creates more value at every step of the chain.",
    accent: "forest",
  },
  {
    title: "Local production and employment",
    description: "Processing and manufacturing create jobs, support skills development and strengthen local economies.",
    accent: "mango",
  },
  {
    title: "Stronger supply chains",
    description: "Reliable sourcing, aggregation and quality control help build more resilient food systems.",
    accent: "terracotta",
  },
  {
    title: "African food in global markets",
    description: "By building products and capabilities for export, African food can compete with confidence beyond the local market.",
    accent: "indigo",
  },
];

export default function ImpactPage() {
  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">By the numbers</Eyebrow>
        <h1 className="font-display font-black text-display-1 text-balance mx-auto max-w-5xl">
          Processing creates value. <em>Value creates opportunity.</em>
        </h1>
        <p className="mt-8 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          The future of African agriculture depends not only on what is grown, but also on what is processed, manufactured and sold.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="bogolan" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {IMPACT_METRICS.map((metric) => (
            <article
              key={metric.label}
              className="rounded-soft-lg border border-cream-100 bg-white/70 p-6 shadow-card"
            >
              <p className="font-display font-black text-display-2 text-terracotta-600 leading-none">{metric.value}</p>
              <p className="mt-3 font-mono text-label uppercase tracking-[0.12em] text-charcoal-700">{metric.label}</p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {IMPACT_STORIES.map((story) => (
            <article
              key={story.title}
              className="rounded-soft-lg border border-cream-100 bg-cream-50 p-7 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <Eyebrow accent={story.accent as any} className="mb-3">
                Impact area
              </Eyebrow>
              <h2 className="font-display font-black text-heading-1 mb-3">{story.title}</h2>
              <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">{story.description}</p>
            </article>
          ))}
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
