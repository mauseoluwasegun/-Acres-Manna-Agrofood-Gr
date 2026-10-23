import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Our Brands",
  description:
    "Meet HappyMan Foods, Maluza Foods Co., UncleTobi, and IJGB Foods, and learn each brand's role and status.",
};

const BRANDS = [
  {
    name: "African Food King",
    status: "Active",
    description:
      "Authentic African food products bringing vibrant culinary traditions and premium tea lines to global consumers.",
    image: "/images/brands/african-food-king-logo.png",
    alt: "African Food King official brand logo",
    fit: "contain",
  },
  {
    name: "HappyMan Foods",
    status: "Active",
    description:
      "The brand AcresxManna uses to sell all of its products.",
    image: "/images/brands/happyman-foods-logo.svg",
    alt: "HappyMan Foods logo",
    fit: "contain",
  },
  {
    name: "Maluza Foods Co.",
    status: "Live",
    description:
      "A bakery developing new products and opening new stalls in and around Ibadan.",
    image: "/images/brands/maluza-foods-logo.svg",
    alt: "Maluza Foods Co. logo",
    fit: "contain",
  },
  {
    name: "UncleTobi",
    status: "Coming soon",
    description:
      "An online grocery concept aggregating suppliers for retail. Launch date to be announced.",
    image: "/images/brands/uncletobi-logo.png",
    alt: "UncleTobi online grocery concept logo",
    fit: "contain",
  },
  {
    name: "IJGB Foods",
    status: "Active",
    description:
      "African snacks with global swagger — facilitating trade and connecting quality commodities across markets.",
    image: "/images/brands/ijgb-foods-logo.png",
    alt: "IJGB Foods brand logo",
    fit: "contain",
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((brand) => (
            <article
              key={brand.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card transition duration-300 hover:shadow-card-hover"
            >
              <div
                className={`relative aspect-[16/10] w-full overflow-hidden ${
                  brand.fit === "contain" ? "bg-white" : "bg-cream-100"
                }`}
              >
                <LazyImage
                  src={brand.image}
                  alt={brand.alt}
                  fill
                  unoptimized={brand.image.endsWith(".svg")}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className={`transition-transform duration-500 group-hover:scale-105 ${
                    brand.fit === "contain"
                      ? "object-contain p-6"
                      : "object-cover"
                  }`}
                  wrapperClassName="absolute inset-0"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm backdrop-blur-sm">
                    {brand.status}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-heading-1 font-black">
                  {brand.name}
                </h2>
                <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {brand.description}
                </p>
              </div>
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
