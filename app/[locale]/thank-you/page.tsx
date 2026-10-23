import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.thankYou" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
    robots: { index: false, follow: false },
  };
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; product?: string }>;
}) {
  const { type, product } = await searchParams;
  const t = await getTranslations("pages.thankYou");

  const TYPE_LABELS: Record<string, string> = {
    product: t("typeLabels.product"),
    supply: t("typeLabels.supply"),
    distribution: t("typeLabels.distribution"),
    manufacturing: t("typeLabels.manufacturing"),
    investment: t("typeLabels.investment"),
    other: t("typeLabels.other"),
    supplier: t("typeLabels.supplier"),
    distributor: t("typeLabels.distributor"),
    investor: t("typeLabels.investor"),
  };
  const typeLabel = TYPE_LABELS[type || ""] || t("typeLabels.fallback");
  const body = product
    ? t("bodyWithProduct", { type: typeLabel, product })
    : t("body", { type: typeLabel });

  return (
    <main id="main" className="py-32">
      <SectionContainer className="text-center">
        <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
        <h1 className="mx-auto max-w-3xl font-display text-display-1 font-black">
          {t("heading")}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          {body}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/products" variant="primary" size="lg">
            {t("browseProducts")}
          </Button>
          <Button href="/about" variant="secondary" size="lg">
            {t("readOurStory")}
          </Button>
          <Button href="/news-insights" variant="ghost" size="lg">
            {t("followOurNews")}
          </Button>
        </div>
      </SectionContainer>
    </main>
  );
}
