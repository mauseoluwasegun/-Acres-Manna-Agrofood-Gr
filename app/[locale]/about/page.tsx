import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SITE_LOCATIONS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";

export const metadata = {
  title: "About Us",
  description:
    "Learn about AcresxManna, an export-focused Nigerian agro-processing and food manufacturing business.",
};

const responsibilities = [
  {
    title: "AcresxManna Ltd",
    description:
      "The Nigerian entity manufactures, signs customer contracts and exports.",
  },
  {
    title: "UncleTobi.Shop",
    description:
      "The UK-facing entity invoices buyers and operates a warehouse and office in Hertford, United Kingdom.",
  },
];

const values = [
  ["Quality and excellence", "Standards, discipline and consistency that earn confidence."],
  ["Community", "Growth that creates opportunity for suppliers, workers, producers and communities."],
  ["Innovation", "Better ways to process, package and deliver African food."],
  ["Collaboration", "Partnerships, shared expertise and strong commercial relationships."],
  ["Dedication and heart", "Responsibility, resilience and commitment to people."],
  ["Capacity building", "Investing in people, processes, partnerships and infrastructure."],
];

export default function AboutPage() {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide">
        <Eyebrow className="mb-5">About AcresxManna</Eyebrow>
        <h1 className="max-w-5xl font-display text-display-1 font-black">
          We believe Africa should capture more value from its agriculture.
        </h1>
        <p className="mt-8 max-w-3xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          AcresxManna is an export-focused agro-processing and food
          manufacturing business. We connect agricultural sourcing with
          processing, product development and market access. Local retail in
          Nigeria is planned through shops and the UncleTobi online grocery
          concept.
        </p>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-12">
        <div className="grid gap-8 rounded-3xl bg-cream-50 p-7 sm:p-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Eyebrow className="mb-4">Our story</Eyebrow>
            <h2 className="font-display text-display-2 font-black">
              More value can be created after harvest.
            </h2>
          </div>
          <div className="space-y-4 font-sans text-body-md leading-relaxed text-charcoal-700">
            <p>
              Africa has significant agricultural resources, yet much of the
              value in the food economy sits in what happens after harvest. We
              believe more of that value can be captured through processing,
              manufacturing, packaging, quality control and competitive food
              brands.
            </p>
            <p>
              Through our Nigerian operations and UK-facing business, we&apos;re
              building the foundations for a stronger link between African
              food production and international markets. We understand both
              sides: the realities of sourcing and processing in Africa, and
              the quality, consistency and commercial needs of the markets we
              want to serve.
            </p>
          </div>
        </div>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-5 md:grid-cols-2">
          {responsibilities.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card"
            >
              <Eyebrow className="mb-4">Company structure</Eyebrow>
              <h2 className="font-display text-heading-1 font-black">
                {item.title}
              </h2>
              <p className="mt-4 font-sans text-body-md leading-relaxed text-charcoal-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <MotionSection className="mt-16 bg-purple-700 py-16 text-white sm:py-20">
        <SectionContainer size="wide">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-white/20 bg-white/5 p-7">
              <Eyebrow className="mb-4 text-yellow-400">Our vision</Eyebrow>
              <p className="font-display text-heading-1 font-bold leading-relaxed">
                To become Africa&apos;s leading agro-processing and food
                manufacturing company, recognised globally for scale, quality,
                innovation and the value we create from African agriculture.
              </p>
            </article>
            <article className="rounded-3xl border border-white/20 bg-white/5 p-7">
              <Eyebrow className="mb-4 text-yellow-400">Our mission</Eyebrow>
              <p className="font-display text-heading-1 font-bold leading-relaxed">
                To transform African agricultural resources into competitive
                food products through processing, manufacturing, quality
                control, brand development and access to markets.
              </p>
            </article>
          </div>
        </SectionContainer>
      </MotionSection>

      <SectionContainer size="wide" className="mt-16">
        <div className="mb-8 max-w-3xl">
          <Eyebrow className="mb-4">What guides us</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            Values that shape how we build.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([title, description], index) => (
            <ScrollReveal
              as="article"
              key={title}
              delay={0.04 * index}
              className="rounded-[2rem] border border-cream-200 bg-white p-6 shadow-card"
            >
              <h3 className="font-display text-heading-2 font-black">{title}</h3>
              <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                {description}
              </p>
            </ScrollReveal>
          ))}
        </div>
        <blockquote className="mt-10 rounded-3xl bg-cream-50 p-7 font-display text-heading-1 font-bold leading-relaxed text-purple-700">
          Africa&apos;s agricultural wealth should create African industrial
          value: more commodities turned into finished products, more
          production capability built within African economies, and more
          African food businesses competing confidently worldwide.
        </blockquote>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <Eyebrow className="mb-5">Our locations</Eyebrow>
        <div className="grid gap-4 md:grid-cols-3">
          {SITE_LOCATIONS.map(({ label, address }) => (
            <address
              key={label}
              className="rounded-2xl border border-cream-200 bg-cream-50 p-5 not-italic"
            >
              <p className="font-mono text-label font-bold uppercase tracking-[0.1em] text-purple-700">
                {label}
              </p>
              <p className="mt-2 font-sans text-body-md leading-relaxed text-charcoal-700">
                {address}
              </p>
            </address>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer className="mt-16 text-center">
        <Button href="/contact" variant="primary" size="lg">
          Let&apos;s Talk
        </Button>
      </SectionContainer>
    </main>
  );
}
