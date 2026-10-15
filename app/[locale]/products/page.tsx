import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/products";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { Link } from "@/i18n/routing";
import { BusinessFaq } from "@/components/sections/BusinessFaq";

export const metadata = {
  title: "Products",
  description:
    "Explore AcresxManna's products on sale for export, product varieties, and planned Nigerian retail.",
};

export default function ProductsPage() {
  const availableProducts = PRODUCTS.filter(
    (product) => product.status === "Available now",
  );
  const plannedProducts = PRODUCTS.filter(
    (product) => product.status !== "Available now",
  );

  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">Our products</Eyebrow>
        <h1 className="mx-auto max-w-4xl font-display text-display-1 font-black">
          African agricultural products, transformed into everyday food.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          From traditional staples to snacks, ingredients and beverages,
          we&apos;re developing products that connect Africa&apos;s
          agricultural resources with evolving consumer needs. Export is our
          focus today, with Nigerian retail planned.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {availableProducts.map((product, index) => (
            <ScrollReveal
              as="article"
              key={product.id}
              delay={0.04 * index}
              className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card transition duration-300 hover:shadow-card-hover"
            >
              {product.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream-100">
                  <Image
                    src={product.image}
                    alt={product.imageAlt || product.name}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm backdrop-blur-sm">
                      On sale now · Export
                    </span>
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col p-7">
                <h2 className="font-display text-heading-1 font-black">
                  {product.name}
                </h2>
                {product.varieties && (
                  <p className="mt-2 font-sans text-body-sm font-semibold text-purple-700">
                    Varieties: {product.varieties.join(", ")}
                  </p>
                )}
                <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {product.description}
                </p>
                {product.highlights && (
                  <ul className="mt-4 space-y-1.5 font-sans text-body-sm text-charcoal-700">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-700">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto pt-6">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex min-h-11 items-center font-sans font-bold text-purple-700 underline underline-offset-4"
                  >
                    Request product information
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {plannedProducts.length > 0 && (
          <section className="mt-16">
            <Eyebrow className="mb-4">Planned</Eyebrow>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {plannedProducts.map((product) => (
                <ScrollReveal
                  as="article"
                  key={product.id}
                  className="rounded-3xl border border-cream-200 bg-cream-50 p-7"
                >
                  <Eyebrow className="mb-4">Coming soon</Eyebrow>
                  <h2 className="font-display text-heading-1 font-black">
                    {product.name}
                  </h2>
                  <p className="mt-4 font-sans text-body-md leading-relaxed text-charcoal-700">
                    {product.description}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-6 inline-flex min-h-11 items-center font-sans font-bold text-purple-700 underline underline-offset-4"
                  >
                    Notify me
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        <div className="mt-16 text-center">
          <p className="mx-auto mb-6 max-w-2xl font-sans text-body-md text-charcoal-700">
            Export destinations and standard pack sizes are not published.
            Contact us to discuss your requirements.
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="max-w-full whitespace-normal px-5 text-center"
          >
            Request product info
          </Button>
        </div>
      </SectionContainer>
      <BusinessFaq />
    </main>
  );
}
