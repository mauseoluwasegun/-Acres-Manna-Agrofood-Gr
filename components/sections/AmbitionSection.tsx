import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { MotionSection } from "@/components/animations/MotionSection";
import { Eyebrow } from "@/components/ui/Eyebrow";

export async function AmbitionSection() {
  const t = await getTranslations("sections.ambition");
  return (
    <MotionSection className="bg-white py-16 sm:py-24">
      <SectionContainer size="wide">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-display-1 font-black">
            {t("headline")}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl font-sans text-body-lg leading-relaxed text-charcoal-700">
            {t("description")}
          </p>
        </div>
      </SectionContainer>
    </MotionSection>
  );
}
