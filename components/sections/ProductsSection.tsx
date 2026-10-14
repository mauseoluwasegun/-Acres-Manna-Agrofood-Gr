import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/products";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { Link } from "@/i18n/routing";

export function ProductsSection() {
  return (
    <>
      <PatternDivider pattern="woven" thickness="medium" eyebrow="The range" />
      <section className="bg-white py-20 sm:py-28">
        <SectionContainer size="wide">
          <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Eyebrow className="mb-5">Our portfolio</Eyebrow>
              <h2 className="font-display text-display-1 font-black">
                African ingredients. Everyday food. Global opportunity.
              </h2>
            </div>
            <Button href="/products" variant="secondary" size="lg">
              Full product range
            </Button>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <ScrollReveal
                as="li"
                key={product.id}
                className="list-none"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="block h-full rounded-3xl border border-cream-200 bg-cream-50 p-6 transition hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700"
                >
                  <p className="font-mono text-label font-bold uppercase tracking-[0.1em] text-purple-700">
                    {product.status === "Available now"
                      ? "Available now"
                      : "Coming soon"}
                  </p>
                  <h3 className="mt-3 font-display text-heading-2 font-black">
                    {product.name}
                  </h3>
                  {product.varieties && (
                    <p className="mt-2 font-sans text-body-md text-charcoal-700">
                      {product.varieties.join(" · ")}
                    </p>
                  )}
                  <span className="mt-5 inline-flex min-h-11 items-center font-sans font-bold text-purple-700 underline underline-offset-4">
                    Request product information
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </ul>
          <p className="mt-7 font-sans text-body-md text-charcoal-700">
            Nigerian retail is planned. Pack sizes are client-specific; export
            destinations are not published.
          </p>
        </SectionContainer>
      </section>
    </>
  );
}
