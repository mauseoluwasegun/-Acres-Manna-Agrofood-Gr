import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata = {
  title: "Investors and Partners",
  description:
    "Discuss investor, agricultural supplier, distribution and manufacturing partnerships with AcresxManna.",
};

const WHAT_WE_BUILD = [
  {
    title: "Production capacity",
    description:
      "Building the production capability behind African agro-processing and food manufacturing.",
  },
  {
    title: "Working capital",
    description:
      "The resources needed for raw materials, production cycles, packaging, inventory and fulfilment.",
  },
  {
    title: "Product development",
    description:
      "Developing food products that connect African agricultural resources with buyer needs.",
  },
  {
    title: "Market development",
    description:
      "Building commercial relationships and routes to market in Africa and internationally.",
  },
];

const PEOPLE = [
  ["Investors", "Long-term interest in African agro-processing, food manufacturing and value addition."],
  ["Agricultural suppliers", "Suitable raw materials and a willingness to work to agreed specifications."],
  ["Distributors", "Retailers, wholesalers, distributors and importers interested in African food products."],
  ["Buyers", "Food businesses and buyers interested in product or supply discussions."],
  ["Industrial and strategic partners", "Processing, packaging, logistics, technology or market-access capabilities."],
];

export default function InvestorsPartnersPage() {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide">
        <Eyebrow className="mb-5">Investors and partners</Eyebrow>
        <h1 className="max-w-5xl font-display text-display-1 font-black">
          Building Africa&apos;s next generation of agro-processing capacity.
        </h1>
        <p className="mt-8 max-w-3xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          AcresxManna is focused on transforming African agricultural
          resources into competitive food through processing, manufacturing
          and market development. Growth depends on production capacity,
          working capital, supply relationships, market access and operational
          systems.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <Eyebrow className="mb-5">What we&apos;re building</Eyebrow>
        <div className="grid gap-5 md:grid-cols-2">
          {WHAT_WE_BUILD.map((item, index) => (
            <ScrollReveal
              as="article"
              key={item.title}
              delay={0.05 * index}
              className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card"
            >
              <h2 className="font-display text-heading-1 font-black">
                {item.title}
              </h2>
              <p className="mt-4 font-sans text-body-md leading-relaxed text-charcoal-700">
                {item.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <Eyebrow className="mb-5">Who we&apos;d love to meet</Eyebrow>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PEOPLE.map(([title, description]) => (
            <article
              key={title}
              className="rounded-3xl border border-cream-200 bg-cream-50 p-6"
            >
              <h2 className="font-display text-heading-2 font-black">{title}</h2>
              <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                {description}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="mb-5">Start a conversation</Eyebrow>
            <h2 className="font-display text-display-2 font-black">
              Let&apos;s build African food capacity together.
            </h2>
            <p className="mt-6 font-sans text-body-md leading-relaxed text-charcoal-700">
              We welcome people and organisations who can contribute capital,
              capabilities, supply, technology or market access. Fundraising
              amounts, valuations, equity terms and financial projections are
              not published.
            </p>
          </div>
          <div className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card">
            <EnquiryForm
              enquiryType="investor"
              submitLabel="Start a partnership conversation"
              showCompany
            />
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
