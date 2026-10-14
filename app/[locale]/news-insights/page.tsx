import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "News and Insights",
  description:
    "Follow the developments, partnerships and thinking behind our work in agro-processing, food manufacturing and agricultural value addition.",
};

export default function NewsInsightsPage() {
  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">News & insights</Eyebrow>
        <h1 className="font-display font-black text-display-1 text-balance mx-auto max-w-5xl">
          Ideas, progress and perspectives shaping African food.
        </h1>
        <p className="mt-8 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          Follow the developments, partnerships and thinking behind our work
          in agro-processing, food manufacturing and agricultural value
          addition.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="bogolan" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {[
            "Company News",
            "Products & Innovation",
            "Industry Insights",
            "Supply Chain",
            "Global Trade",
          ].map((category) => (
            <span
              key={category}
              className="rounded-full border border-purple-700/20 bg-white px-4 py-2 font-sans text-sm font-semibold text-purple-700"
            >
              {category}
            </span>
          ))}
        </div>
        <div className="rounded-3xl border border-cream-200 bg-white p-8 text-center shadow-card">
          <Eyebrow className="mb-4">Coming soon</Eyebrow>
          <p className="font-sans text-body-lg text-charcoal-700">
            Our first stories are coming soon.
          </p>
        </div>
        <div className="mt-10 text-center">
          <p className="font-sans text-body-md text-charcoal-700">
            In the meantime, explore our products or get in touch with our team.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="mt-4">
            Contact Our Team
          </Button>
        </div>
      </SectionContainer>
    </main>
  );
}
