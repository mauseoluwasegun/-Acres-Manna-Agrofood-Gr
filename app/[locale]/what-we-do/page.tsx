import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FARM_TO_FOOD_STAGES } from "@/lib/constants";
import { useTranslations } from "next-intl";

export default function WhatWeDoPage() {
  const t = useTranslations("farmToFood");
  const tNav = useTranslations("nav");

  return (
    <main id="main" className="pt-32 pb-24">
      <SectionContainer size="wide" className="text-center">
        <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
        <h1
          className="font-display font-black text-display-1 text-balance mx-auto max-w-4xl"
          dangerouslySetInnerHTML={{ __html: t.raw("headline") }}
        />
        <p className="mt-8 font-sans text-body-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
          {FARM_TO_FOOD_STAGES.map((stage, index) => {
            const stageKey = `s${index + 1}` as "s1" | "s2" | "s3" | "s4" | "s5" | "s6";

            return (
              <article
                key={stage.num}
                className="group relative rounded-soft-lg bg-white/70 border border-cream-100 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center mb-6">
                  <img src={stage.icon} alt="" aria-hidden="true" className="w-16 h-16" />
                </div>
                <Eyebrow className="mb-3" accent={stage.accent as any}>
                  {t(`stages.${stageKey}.eyebrow`)}
                </Eyebrow>
                <h2
                  className="font-display font-black text-heading-1 mb-3"
                  dangerouslySetInnerHTML={{ __html: t.raw(`stages.${stageKey}.headline`) }}
                />
                <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">
                  {t(`stages.${stageKey}.description`)}
                </p>
              </article>
            );
          })}
        </div>
      </SectionContainer>

      <SectionContainer className="text-center mt-16">
        <Button href="/" variant="secondary" size="lg">
          ← {tNav("home")}
        </Button>
      </SectionContainer>
    </main>
  );
}
