import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const HOME_IMPACT_CHIPS = ["chip0", "chip1", "chip2", "chip3"];

export async function ImpactSection() {
  const t = await getTranslations("sections.impact");
  return (
    <>
      <PatternDivider pattern="kente" thickness="bold" eyebrow={t("dividerEyebrow")} />
      <MotionSection id="impact" className="bg-cream-100 py-20 sm:py-28">
        <SectionContainer size="wide">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
            <h2 className="font-display text-display-1 font-black leading-tight">
              {t("headline")}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-body-lg leading-relaxed text-charcoal-700">
              {t("description")}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_IMPACT_CHIPS.map((chipKey, index) => (
              <ScrollReveal
                as="article"
                key={chipKey}
                delay={0.05 * index}
                className="rounded-2xl border border-cream-200 bg-white p-6 shadow-card"
              >
                <h3 className="font-display text-heading-2 font-black text-charcoal-900">
                  {t(chipKey)}
                </h3>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact" variant="secondary" size="lg">
              {t("cta")}
            </Button>
          </div>
        </SectionContainer>
      </MotionSection>
    </>
  );
}
