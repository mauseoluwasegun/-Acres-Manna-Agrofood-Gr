import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { BusinessFaq } from "@/components/sections/BusinessFaq";

export const metadata = {
  title: "Global Markets",
  description:
    "We’re building a business that connects African food production with customers and opportunities in international markets.",
};

export default function GlobalMarketsPage() {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide">
        <Eyebrow className="mb-5">Global markets</Eyebrow>
        <h1 className="max-w-5xl font-display text-display-1 font-black">
          From African agricultural resources to global food markets.
        </h1>
        <p className="mt-8 max-w-3xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          We&apos;re building a business that connects African food
          production with customers, businesses and opportunities in
          international markets. Export is our current focus; specific
          destinations are not published.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Current route", "Export today"],
            ["Nigerian retail", "Planned through shops and UncleTobi"],
            ["Pack sizes", "Set to each client's requirements"],
          ].map(([label, value]) => (
            <article
              key={label}
              className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card"
            >
              <Eyebrow className="mb-4">{label}</Eyebrow>
              <h2 className="font-display text-heading-1 font-black">{value}</h2>
            </article>
          ))}
        </div>
        <p className="mt-7 font-sans text-body-md text-charcoal-700">
          No specific export destinations or standard pack sizes are published.
        </p>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <div className="mb-8 max-w-3xl">
          <Eyebrow className="mb-4">How we build market access</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            Reliable trade takes more than shipping.
          </h2>
          <p className="mt-4 font-sans text-body-md leading-relaxed text-charcoal-700">
            We are building an approach around market requirements, product
            readiness, commercial partnerships and reliable supply.
          </p>
        </div>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Market development", "Consider demand, competition, regulation and distribution."],
            ["Product readiness", "Confirm documents, packaging and specifications for each destination."],
            ["Commercial partnerships", "Build relationships with importers, distributors, retailers and food businesses."],
            ["Supply reliability", "Develop production and sourcing systems to support consistent orders."],
          ].map(([title, description], index) => (
            <li
              key={title}
              className="list-none rounded-3xl border border-cream-200 bg-white p-6 shadow-card"
            >
              <Eyebrow className="mb-4">Step {index + 1}</Eyebrow>
              <h3 className="font-display text-heading-2 font-black">{title}</h3>
              <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <div className="rounded-3xl border border-cream-200 bg-purple-700 p-8 text-white">
          <Eyebrow className="mb-4 text-yellow-400">UK-facing operations</Eyebrow>
          <h2 className="font-display text-heading-1 font-black">UncleTobi.Shop</h2>
          <p className="mt-4 max-w-3xl font-sans text-body-md leading-relaxed text-white/85">
            AcresxManna Ltd manufactures products, signs customer contracts
            and exports from Nigeria. UncleTobi.Shop invoices buyers and
            operates a warehouse and office in Hertford, United Kingdom.
          </p>
          <p className="mt-4 font-sans text-body-sm text-white/75">
            Export destinations are not published, so no country is presented
            here as an established or target market.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="mt-16 text-center">
        <Button href="/business-enquiries?type=international-trade" variant="primary" size="lg">
        International Trade Enquiries
        </Button>
      </SectionContainer>
      <BusinessFaq />
    </main>
  );
}
