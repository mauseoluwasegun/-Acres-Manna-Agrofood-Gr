import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";

const STEP_KEYS = ["source", "processAndManufacture", "packageAndBuildBrands", "connectToMarkets"];

export async function OperatingModelSection() {
  const t = await getTranslations("sections.operatingModel");
  return (
    <>
      <PatternDivider pattern="bogolan" thickness="medium" eyebrow={t("dividerEyebrow")} />
      <section className="bg-cream-50 py-16 sm:py-24">
        <SectionContainer size="wide">
          <div className="mb-10 max-w-3xl">
            <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
            <h2 className="font-display text-display-1 font-black">
              {t("headline")}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEP_KEYS.map((stepKey, index) => (
              <ScrollReveal
                key={stepKey}
                delay={0.05 * index}
                className="rounded-3xl border border-cream-200 bg-white p-6 shadow-card"
              >
                <div className="h-1.5 w-8 rounded-full bg-yellow-400" />
                <h3 className="mt-4 font-display text-heading-2 font-black">
                  {t(`steps.${stepKey}.title`)}
                </h3>
                <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {t(`steps.${stepKey}.description`)}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
