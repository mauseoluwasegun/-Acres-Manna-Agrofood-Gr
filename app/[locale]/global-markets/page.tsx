import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { BusinessFaq } from "@/components/sections/BusinessFaq";
import { ScrollReveal } from "@/components/animations/MotionSection";

export const metadata = {
  title: "Global Markets",
  description:
    "We’re building a business that connects African food production with customers and opportunities in international markets.",
};

const marketSteps = [
  {
    title: "Market development",
    description: "Consider demand, competition, regulation and distribution across regional and overseas markets.",
    image: "/images/corporate/acresxmanna-office-purple-logo-wall.jpg",
    alt: "AcresxManna Ibadan headquarters office with branded purple logo wall",
  },
  {
    title: "Product readiness",
    description: "Confirm specifications, hermetic food packaging, and phytosanitary certificates for each trade lane.",
    image: "/images/processing/palm-oil-bottling-team.jpg",
    alt: "Team arranging and inspecting bottled palm oil production run",
  },
  {
    title: "Commercial partnerships",
    description: "Build relationships with importers, bulk buyers, supermarket chains, and food service companies.",
    image: "/images/logistics/loading-bottled-nuts-container.jpg",
    alt: "Team loading bottled peanut products into freight container for dispatch",
  },
  {
    title: "Supply reliability",
    description: "Develop scalable processing lines to supply recurring multi-container volume on strict schedules.",
    image: "/images/logistics/container-bottled-products-export.jpg",
    alt: "Export container packed wall-to-wall with bottled product ready for international dispatch",
  },
];

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

      {/* Export Freight Spotlight */}
      <SectionContainer size="wide" className="mt-16">
        <div className="overflow-hidden rounded-3xl bg-purple-700 text-white shadow-card lg:grid lg:grid-cols-12">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-6 bg-purple-900">
            <LazyImage
              src="/images/logistics/freight-container-truck-dispatch.jpg"
              alt="28-tonne freight container loaded for export delivery"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
              wrapperClassName="absolute inset-0"
            />
          </div>
          <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-center">
            <Eyebrow className="mb-4 text-yellow-400">Containerized Export</Eyebrow>
            <h2 className="font-display text-display-2 font-black leading-tight">
              Direct container dispatch from factory to port.
            </h2>
            <p className="mt-4 font-sans text-body-lg leading-relaxed text-white/90">
              Our Moniya processing facility is strategically positioned for containerized transport. Standard 20ft and 40ft freight containers (holding up to 28+ tonnes of packaged food items and commodities) are stuffed and sealed on-site for direct dispatch.
            </p>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-20">
        <div className="mb-10 max-w-3xl">
          <Eyebrow className="mb-4">How we build market access</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            Reliable trade takes more than shipping.
          </h2>
          <p className="mt-4 font-sans text-body-lg leading-relaxed text-charcoal-700">
            We are building an approach around market requirements, product
            readiness, commercial partnerships and reliable supply.
          </p>
        </div>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketSteps.map((step, index) => (
            <ScrollReveal
              as="li"
              key={step.title}
              delay={0.04 * index}
              className="group list-none overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card transition duration-300 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream-100">
                <LazyImage
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  wrapperClassName="absolute inset-0"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm backdrop-blur-sm">
                    Step {index + 1}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-heading-2 font-black text-charcoal-900">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-body-sm leading-relaxed text-charcoal-600">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
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
