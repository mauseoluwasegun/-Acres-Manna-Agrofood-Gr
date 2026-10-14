import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Thank you",
  description:
    "Thanks for reaching out to AcresxManna. A member of our team will read your message and reply.",
  robots: { index: false, follow: false },
};

const TYPE_LABELS: Record<string, string> = {
  product: "product enquiry",
  supply: "supply or farming partnership",
  distribution: "distribution or wholesale enquiry",
  manufacturing: "manufacturing partnership enquiry",
  investment: "investment enquiry",
  other: "business enquiry",
  supplier: "supplier application",
  distributor: "distributor application",
  investor: "investor enquiry",
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; product?: string }>;
}) {
  const { type, product } = await searchParams;
  const typeLabel = TYPE_LABELS[type || ""] || "enquiry";

  return (
    <main id="main" className="py-32">
      <SectionContainer className="text-center">
        <Eyebrow className="mb-5">Message received</Eyebrow>
        <h1 className="mx-auto max-w-3xl font-display text-display-1 font-black">
          Yay, message received!
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          Thanks for reaching out to AcresxManna about your {typeLabel}
          {product ? ` (${product})` : ""}. A member of our team will read your
          message and reply.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/products" variant="primary" size="lg">
            Browse our products
          </Button>
          <Button href="/about" variant="secondary" size="lg">
            Read our story
          </Button>
          <Button href="/news-insights" variant="ghost" size="lg">
            Follow our news
          </Button>
        </div>
      </SectionContainer>
    </main>
  );
}
