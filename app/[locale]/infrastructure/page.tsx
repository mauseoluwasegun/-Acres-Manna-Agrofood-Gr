import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const INFRASTRUCTURE_CARDS = [
  {
    title: "Source",
    description: "Dependable supply relationships built around raw material quality, availability and seasonality.",
    accent: "forest",
  },
  {
    title: "Process & Manufacture",
    description: "Consistent products from controlled production, defined procedures and trained teams.",
    accent: "mango",
  },
  {
    title: "Package & Brand",
    description: "Packaging, presentation and quality specifications designed for trusted market-ready output.",
    accent: "terracotta",
  },
  {
    title: "Connect to Markets",
    description: "Distribution and trade relationships to move African food beyond the farm gate.",
    accent: "indigo",
  },
];

export default function InfrastructurePage() {
  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">Operating capability</Eyebrow>
        <h1 className="font-display font-black text-display-1 text-balance mx-auto max-w-4xl">
          Building value across <em>the food chain.</em>
        </h1>
        <p className="mt-8 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          Acres & Manna is building the systems, processes and partnerships needed to turn agricultural resources into competitive food products and commercial opportunity.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {INFRASTRUCTURE_CARDS.map((item, index) => (
            <article
              key={item.title}
              className="group relative rounded-soft-lg border border-cream-100 bg-white/70 p-7 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-500/10 font-mono text-label uppercase tracking-[0.12em] text-terracotta-700">
                  0{index + 1}
                </span>
                <Eyebrow accent={item.accent as any}>{item.title}</Eyebrow>
              </div>
              <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="/contact?type=partner" variant="primary" size="lg">
            Let&apos;s Talk
          </Button>
        </div>
      </SectionContainer>
    </main>
  );
}
