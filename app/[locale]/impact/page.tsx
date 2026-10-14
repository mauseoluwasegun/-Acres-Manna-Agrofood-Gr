import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { IMPACT_METRICS, IMPACT_SCORECARD } from "@/lib/constants";

export const metadata = {
  title: "Impact",
  description:
    "Explore the business focus areas behind AcresxManna's agro-processing and food manufacturing work.",
};

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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {IMPACT_METRICS.map((area, index) => (
            <article
              key={area}
              className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card"
            >
              <Eyebrow className="mb-4">
                Focus area {String(index + 1).padStart(2, "0")}
              </Eyebrow>
              <h2 className="font-display text-heading-1 font-black">{area}</h2>
            </article>
          ))}
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
