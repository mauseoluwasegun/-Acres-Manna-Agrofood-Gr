import Image from "next/image";
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
              <p className="mt-4 font-sans text-body-md text-charcoal-700">
                Nigerian retail is planned. Pack sizes are client-specific; export
                destinations are not published.
              </p>
            </div>
            <Button href="/products" variant="secondary" size="lg">
              Full product range
            </Button>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <ScrollReveal
                as="li"
                key={product.id}
                className="list-none"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700"
                >
                  {product.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream-200">
                      <Image
                        src={product.image}
                        alt={product.imageAlt || product.name}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm backdrop-blur-sm">
                          {product.status === "Available now"
                            ? "Available now"
                            : "Coming soon"}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-heading-2 font-black">
                      {product.name}
                    </h3>
                    {product.varieties && (
                      <p className="mt-2 font-sans text-body-sm text-charcoal-700">
                        {product.varieties.join(" · ")}
                      </p>
                    )}
                    <p className="mt-2 line-clamp-2 font-sans text-body-sm text-charcoal-600">
                      {product.description}
                    </p>
                    <span className="mt-auto pt-4 inline-flex min-h-11 items-center font-sans font-bold text-purple-700 underline underline-offset-4">
                      Request product information
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </ul>
        </SectionContainer>
      </section>
    </>
  );
}
