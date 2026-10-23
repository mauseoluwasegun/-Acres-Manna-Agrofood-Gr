import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { MotionSection } from "@/components/animations/MotionSection";

export async function AboutSection() {
  const t = await getTranslations("sections.about");
  return (
    <>
      <PatternDivider pattern="woven" thickness="medium" eyebrow={t("dividerEyebrow")} />
      <MotionSection className="bg-white py-16 sm:py-24">
        <SectionContainer size="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
              <h2 className="font-display text-display-1 font-black leading-tight">
                {t("headline")}
              </h2>
            </div>
            <div>
              <p className="font-sans text-body-lg leading-relaxed text-charcoal-700">
                {t("description")}
              </p>
              <Button href="/about" variant="secondary" size="lg" className="mt-7">
                {t("cta")}
              </Button>
            </div>
          </div>
        </SectionContainer>
      </MotionSection>
    </>
  );
}
