import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Our Brands",
  description:
    "Meet HappyMan Foods, Maluza Foods Co. and UncleTobi, and learn each brand's role and status.",
};

const BRANDS = [
  {
    name: "HappyMan Foods",
    status: "Active",
    description:
      "The brand AcresxManna uses to sell all of its products.",
  },
  {
    name: "Maluza Foods Co.",
    status: "Live",
    description:
      "A bakery developing new products and opening new stalls in and around Ibadan.",
  },
  {
    name: "UncleTobi",
    status: "Coming soon",
    description:
      "An online grocery concept aggregating suppliers for retail. Launch date to be announced.",
  },
];

export default function OurBrandsPage() {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide">
        <Eyebrow className="mb-5">Our brands</Eyebrow>
        <h1 className="max-w-5xl font-display text-display-1 font-black">
          One platform. Different ways to bring African food to market.
        </h1>
        <p className="mt-8 max-w-3xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          AcresxManna&apos;s wider ecosystem includes food brands, a bakery
          and an online grocery concept, each with a distinct purpose in the
          food value chain.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-5 md:grid-cols-3">
          {BRANDS.map((brand) => (
            <article
              key={brand.name}
              className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card"
            >
              <Eyebrow className="mb-4">{brand.status}</Eyebrow>
              <h2 className="font-display text-heading-1 font-black">
                {brand.name}
              </h2>
              <p className="mt-4 font-sans text-body-md leading-relaxed text-charcoal-700">
                {brand.description}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <div className="rounded-3xl bg-purple-700 p-8 text-white sm:p-10">
          <Eyebrow className="mb-4 text-yellow-400">How the roles fit</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            Different roles across the food value chain.
          </h2>
          <p className="mt-5 max-w-3xl font-sans text-body-lg leading-relaxed text-white/90">
            HappyMan Foods is the brand AcresxManna uses to sell its products.
            Maluza Foods Co. is a bakery developing products and stalls in and
            around Ibadan. UncleTobi is an online grocery concept that will
            aggregate suppliers for retail and is coming soon.
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="mt-16 text-center">
        <p className="mx-auto max-w-2xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          Interested in our products, brands or a commercial partnership?
          We&apos;d love to hear from you.
        </p>
        <Button href="/contact" variant="primary" size="lg" className="mt-6">
          Contact Our Team
        </Button>
      </SectionContainer>
    </main>
  );
}
