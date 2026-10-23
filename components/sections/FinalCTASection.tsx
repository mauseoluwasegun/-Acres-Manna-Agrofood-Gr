import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { MotionSection } from "@/components/animations/MotionSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CONTACT_PHONE } from "@/lib/constants";

export async function FinalCTASection() {
  const t = await getTranslations("sections.finalCta");
  return (
    <MotionSection className="bg-purple-700 py-20 text-white sm:py-28">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5 text-yellow-400">{t("eyebrow")}</Eyebrow>
        <h2 className="mx-auto max-w-4xl font-display text-display-1 font-black">
          {t("headline")}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-body-lg leading-relaxed text-white/85">
          {t("description")}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button
            href="/business-enquiries"
            variant="primary"
            size="lg"
            className="!bg-yellow-400 !text-purple-700 !shadow-none hover:brightness-95"
          >
            {t("partnerWithUs")}
          </Button>
          <Button
            href="/become-a-supplier"
            variant="secondary"
            size="lg"
            className="!border-white !text-white hover:!bg-white/10"
          >
            {t("becomeSupplier")}
          </Button>
          <Button
            href="/products"
            variant="secondary"
            size="lg"
            className="!border-white !text-white hover:!bg-white/10"
          >
            {t("exploreProducts")}
          </Button>
        </div>
        <p className="mt-6 font-sans text-body-md text-white/80">
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="underline underline-offset-4">
            {CONTACT_PHONE}
          </a>
        </p>
      </SectionContainer>
    </MotionSection>
  );
}
