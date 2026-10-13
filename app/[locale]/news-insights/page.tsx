import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const ARTICLES = [
  {
    title: "Why African food processing matters",
    tag: "Insight",
    description: "The value in agriculture does not stop at harvest. More value is created when commodities are processed, packaged and brought to market with quality and consistency.",
    accent: "forest",
  },
  {
    title: "The power of dependable supply",
    tag: "Operations",
    description: "A trusted supply base is the foundation of manufacturing. Production works best when raw material quality, seasonality and flow are managed carefully.",
    accent: "mango",
  },
  {
    title: "From raw commodities to finished food",
    tag: "Strategy",
    description: "When African food companies build capability across sourcing, processing and distribution, they create stronger commercial and community outcomes.",
    accent: "terracotta",
  },
  {
    title: "Why customer trust matters",
    tag: "Market access",
    description: "For buyers and distributors, consistency, product quality and disciplined execution are what turn interest into long-term supply partnerships.",
    accent: "indigo",
  },
];

export default function NewsInsightsPage() {
  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">News & insights</Eyebrow>
        <h1 className="font-display font-black text-display-1 text-balance mx-auto max-w-5xl">
          Stories from the <em>food value chain.</em>
        </h1>
        <p className="mt-8 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          We share the thinking behind African food processing, market development and the practical work of turning agricultural resources into commercial value.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="bogolan" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {ARTICLES.map((article) => (
            <article
              key={article.title}
              className="rounded-soft-lg border border-cream-100 bg-white/70 p-7 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <Eyebrow accent={article.accent as any} className="mb-3">
                {article.tag}
              </Eyebrow>
              <h2 className="font-display font-black text-heading-1 mb-3">{article.title}</h2>
              <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">{article.description}</p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="mt-20 text-center">
        <Button href="/contact?type=partner" variant="secondary" size="lg">
          Say Hello
        </Button>
      </SectionContainer>
    </main>
  );
}
