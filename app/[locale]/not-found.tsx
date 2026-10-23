import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export default async function LocaleNotFound() {
  const t = await getTranslations("pages.notFound");

  return (
    <main id="main" className="py-32">
      <SectionContainer className="text-center">
        <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
        <h1 className="font-display text-display-1 font-black">
          {t("heading")}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-body-lg text-charcoal-700">
          {t("body")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            {t("backHome")}
          </Button>
          <Button href="/products" variant="secondary" size="lg">
            {t("exploreProducts")}
          </Button>
          <Button href="/contact" variant="ghost" size="lg">
            {t("contactUs")}
          </Button>
        </div>
      </SectionContainer>
    </main>
  );
}
