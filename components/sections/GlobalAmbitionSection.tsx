import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { MotionSection } from "@/components/animations/MotionSection";
import { Eyebrow } from "@/components/ui/Eyebrow";

export async function GlobalAmbitionSection() {
  const t = await getTranslations("sections.globalAmbition");
  return (
    <MotionSection className="bg-white py-20 sm:py-28">
      <SectionContainer size="wide">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-display-1 font-black">
            {t("headline")}
          </h2>
          <p className="mt-6 font-sans text-body-lg leading-relaxed text-charcoal-700">
            {t("description")}
          </p>
        </div>
      </SectionContainer>
    </MotionSection>
  );
}
