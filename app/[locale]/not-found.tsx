import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export default function LocaleNotFound() {
  return (
    <main id="main" className="py-32">
      <SectionContainer className="text-center">
        <Eyebrow className="mb-5">Page not found</Eyebrow>
        <h1 className="font-display text-display-1 font-black">
          Oops! This page took a detour.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-body-lg text-charcoal-700">
          The page you’re looking for has moved or doesn’t exist. Let’s get you
          back to something delicious.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            Back to home
          </Button>
          <Button href="/products" variant="secondary" size="lg">
            Explore our products
          </Button>
          <Button href="/contact" variant="ghost" size="lg">
            Contact us
          </Button>
        </div>
      </SectionContainer>
    </main>
  );
}
