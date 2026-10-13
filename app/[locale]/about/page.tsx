"use client";

import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { HandDrawnIcon } from "@/components/ui/HandDrawnIcon";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";
import { PatternWatermark, FloatingPatternMotif, HandDrawnPlantLine } from "@/components/ui/DecorativePatterns";
import { DecorativeBlob } from "@/components/ui/DecorativeBlobs";
import { PatternFramedImage } from "@/components/ui/PatternFrame";
import { ScrollTypingText } from "@/components/animations/TypingText";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const BRANDS = [
  { key: "brand1", icon: "farmer" as const, color: "terracotta" as const, pattern: "kente" as const, corner: "terracotta" as const, href: "https://acresxmanna.com/staging/uncletobis-farmers/" },
  { key: "brand2", icon: "factory" as const, color: "forest" as const, pattern: "mudcloth" as const, corner: "forest" as const, href: "https://acresxmanna.com/staging/maluza-foods-co/" },
  { key: "brand3", icon: "cart" as const, color: "mango" as const, pattern: "ankara" as const, corner: "mango" as const, href: "https://acresxmanna.com/staging/happyman-foods/" },
  { key: "brand4", icon: "globe" as const, color: "indigo" as const, pattern: "bogolan" as const, corner: "indigo" as const, href: "https://africanfoodking.com/" },
];

const CERTIFICATIONS = [
  { key: "cert1", color: "terracotta" as const, logo: "/logos/certifications/nafdac.svg" },
  { key: "cert2", color: "forest" as const, logo: "/logos/certifications/son.svg" },
  { key: "cert3", color: "mango" as const, logo: "/logos/certifications/man.svg" },
  { key: "cert4", color: "indigo" as const, logo: "/logos/certifications/haccp.svg" },
  { key: "cert5", color: "terracotta" as const, logo: "/logos/certifications/non-gmo.svg" },
  { key: "cert6", color: "forest" as const, logo: "/logos/certifications/halal.svg" },
];

const FOCUS_AREAS = [
  { key: "focus1", icon: "farmer" as const, color: "terracotta" as const, pattern: "kente" as const, corner: "terracotta" as const, tag: "FARMING" },
  { key: "focus2", icon: "factory" as const, color: "forest" as const, pattern: "mudcloth" as const, corner: "forest" as const, tag: "PROCESSING" },
  { key: "focus3", icon: "briefcase" as const, color: "mango" as const, pattern: "ankara" as const, corner: "mango" as const, tag: "FINANCING" },
  { key: "focus4", icon: "truck" as const, color: "indigo" as const, pattern: "bogolan" as const, corner: "indigo" as const, tag: "DISTRIBUTION" },
  { key: "focus5", icon: "markets" as const, color: "terracotta" as const, pattern: "woven" as const, corner: "terracotta" as const, tag: "MEDIA" },
];

const WORK_SPANS = [
  { key: "workSpan1", icon: "farmer" as const, color: "terracotta" as const },
  { key: "workSpan2", icon: "factory" as const, color: "forest" as const },
  { key: "workSpan3", icon: "briefcase" as const, color: "mango" as const },
  { key: "workSpan4", icon: "truck" as const, color: "indigo" as const },
  { key: "workSpan5", icon: "markets" as const, color: "earth" as const },
];

const VALUES = [
  { key: "value1", icon: "handshake" as const, color: "terracotta" as const, pattern: "kente" as const },
  { key: "value2", icon: "communities" as const, color: "forest" as const, pattern: "mudcloth" as const },
  { key: "value3", icon: "briefcase" as const, color: "mango" as const, pattern: "ankara" as const },
  { key: "value4", icon: "products" as const, color: "indigo" as const, pattern: "bogolan" as const },
  { key: "value5", icon: "markets" as const, color: "terracotta" as const, pattern: "woven" as const },
  { key: "value6", icon: "capacity" as const, color: "forest" as const, pattern: "kente" as const },
];

export default function AboutPage() {
  const t = useTranslations("about");
  const tNav = useTranslations("nav");

  return (
    <main id="main" className="pt-32 pb-24">
      {/* ========== HEADER / PURPOSE ========== */}
      <MotionSection className="relative bg-cream-50 overflow-hidden">
        <PatternWatermark pattern="woven" opacity={0.05} />
        <DecorativeBlob color="mango" size="lg" opacity={0.12} top="-8%" right="-4%" />
        <DecorativeBlob color="terracotta" size="md" opacity={0.1} bottom="-6%" left="8%" />
        <SectionContainer size="wide" className="relative py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal noBlur>
              <Eyebrow accent="mango" className="mb-5">{t("headerEyebrow")}</Eyebrow>
            </ScrollReveal>
            <ScrollReveal noBlur delay={0.1}>
              <p className="font-display font-black text-display-1 leading-[1.05] text-balance text-charcoal-900">
                {t("headerText")}
              </p>
            </ScrollReveal>
          </div>
        </SectionContainer>
      </MotionSection>

      <div className="my-16">
        <PatternDivider pattern="kente" thickness="medium" eyebrow={t("dividerEyebrow")} eyebrowAccent="forest" />
      </div>

      {/* ========== ORIGIN STORY ========== */}
      <MotionSection className="relative bg-cream-50 overflow-hidden">
        <PatternWatermark pattern="woven" opacity={0.04} />
        <DecorativeBlob color="forest" size="lg" opacity={0.06} top="-6%" right="-4%" />
        <DecorativeBlob color="terracotta" size="md" opacity={0.1} bottom="-4%" left="10%" />

        <SectionContainer size="wide" className="relative py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <ScrollReveal as="div" className="lg:col-span-5 relative" noBlur delay={0.05}>
              <div className="relative">
                <PatternFramedImage
                  src="/images/farm-origin.jpg"
                  alt="African farm fields at sunrise with a farmer walking the rows"
                  width={700}
                  height={900}
                  thickness="bold"
                  pattern="kente"
                  cornerAccent="terracotta"
                  className="aspect-[4/5]"
                />
                <div className="absolute -bottom-8 -right-8 w-[55%] z-20">
                  <PatternFramedImage
                    src="/images/processing-facility.jpg"
                    alt="Food manufacturing and processing facility"
                    width={420}
                    height={420}
                    thickness="medium"
                    pattern="ankara"
                    cornerAccent="mango"
                    className="aspect-square"
                  />
                </div>
                <HandDrawnPlantLine
                  variant="rice"
                  size={140}
                  className="absolute -left-10 bottom-8 text-forest-700/50"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal as="div" className="lg:col-span-7 lg:pl-6" noBlur delay={0.15}>
              <Eyebrow accent="forest" className="mb-5">{t("originEyebrow")}</Eyebrow>
              <h1 className="font-display font-black text-display-1 leading-[0.98] text-balance">
                <ScrollTypingText text={t("originHeadlineL1")} speed={25} />
                <br />
                <ScrollTypingText text={t("originHeadlineL2")} speed={25} delay={0.1} />
                <br />
                <ScrollTypingText text={t("originHeadlineL3")} speed={25} delay={0.2} />
              </h1>

              <p className="mt-8 font-sans text-body-lg text-charcoal-700 leading-relaxed max-w-2xl">
                {t("originParagraph1")}
              </p>

              <p className="mt-5 font-sans text-body-md text-charcoal-700 leading-relaxed max-w-2xl">
                {t("originParagraph2")}
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                <div>
                  <p className="font-mono text-micro uppercase tracking-[0.12em] text-terracotta-700 mb-2">
                    {t("visionEyebrow")}
                  </p>
                  <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">
                    {t("visionText")}
                  </p>
                </div>
                <div className="sm:border-l sm:border-charcoal-900/10 sm:pl-6">
                  <p className="font-mono text-micro uppercase tracking-[0.12em] text-forest-700 mb-2">
                    {t("missionEyebrow")}
                  </p>
                  <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">
                    {t("missionText")}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/what-we-do" variant="dark" size="md">
                  {t("readStory")}
                </Button>
                <Button href="/impact" variant="secondary" size="md">
                  {t("seeImpact")}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </SectionContainer>
      </MotionSection>

      {/* ========== OUR BRANDS ========== */}
      <div className="my-20">
        <PatternDivider pattern="ankara" thickness="medium" eyebrow={t("brandsEyebrow")} eyebrowAccent="mango" />
      </div>

      <MotionSection className="relative bg-cream-100 overflow-hidden">
        <PatternWatermark pattern="ankara" opacity={0.04} />
        <DecorativeBlob color="terracotta" size="md" opacity={0.08} top="5%" left="-3%" />
        <DecorativeBlob color="indigo" size="lg" opacity={0.06} bottom="-8%" right="-5%" />

        <SectionContainer size="wide" className="relative py-16 sm:py-24">
          <div className="text-center mb-14 sm:mb-18 max-w-3xl mx-auto">
            <ScrollReveal noBlur>
              <Eyebrow accent="mango" className="mb-5">{t("brandsEyebrow")}</Eyebrow>
            </ScrollReveal>
            <ScrollReveal noBlur delay={0.1}>
              <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance">
                Our <em className="not-italic text-terracotta-600">collective</em> of companies.
              </h2>
            </ScrollReveal>
            <ScrollReveal noBlur delay={0.15}>
              <p className="mt-6 font-sans text-body-lg text-charcoal-700">
                Each brand serves a distinct role across the agrofood value chain — from farm to global shelf.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BRANDS.map((b, i) => (
              <ScrollReveal
                as="article"
                key={b.key}
                delay={0.05 * i}
                className={cn(
                  "relative group h-full rounded-soft-lg p-7 sm:p-8 bg-white/70 border border-cream-100 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1.5",
                  i === 1 && "md:mt-10",
                  i === 3 && "md:mt-10",
                )}
              >
                <FloatingPatternMotif
                  pattern={b.pattern}
                  size={120}
                  rotate={-18 + i * 14}
                  top="2%"
                  right="2%"
                  className="opacity-80"
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <HandDrawnIcon name={b.icon} size={46} color={b.color} withFrame />
                  </div>
                  <Eyebrow accent={b.corner} className="mb-3">{t(`${b.key}Name`)}</Eyebrow>
                  <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">
                    {t(`${b.key}Desc`)}
                  </p>
                  <div className="mt-7">
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans font-bold uppercase tracking-[0.08em] text-sm text-terracotta-600 hover:text-terracotta-700 transition-colors"
                    >
                      Learn More
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                  <div className="mt-7 h-[2px] bg-woven opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </SectionContainer>
      </MotionSection>

      {/* ========== CERTIFICATIONS / BACKING ========== */}
      <div className="my-20">
        <PatternDivider pattern="mudcloth" thickness="medium" eyebrow="— WE HAVE THE BACKING" eyebrowAccent="terracotta" />
      </div>

      <MotionSection className="relative bg-cream-50 overflow-hidden">
        <PatternWatermark pattern="mudcloth" opacity={0.04} />
        <SectionContainer size="wide" className="relative py-16 sm:py-24">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <ScrollReveal noBlur>
              <div className="inline-block mb-5">
                <img
                  src="/logos/vintage/concept2-badge-vertical.svg"
                  alt="Acres & Manna Badge"
                  className="w-24 h-28 mx-auto"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal noBlur>
              <Eyebrow accent="terracotta" className="mb-5">{t("certificationsEyebrow")}</Eyebrow>
            </ScrollReveal>
            <ScrollReveal noBlur delay={0.1}>
              <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance">
                We have the <em className="not-italic text-forest-700">backing.</em>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {CERTIFICATIONS.map((c, i) => (
              <ScrollReveal
                as="div"
                key={c.key}
                delay={0.05 * i}
                className="relative rounded-soft-lg bg-white/60 border border-cream-100 p-6 sm:p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
              >
                <span className="inline-block font-sans font-bold text-body-sm text-indigo-700 mb-4">
                  Pending
                </span>
                <div className="inline-flex items-center justify-center w-24 h-24 mb-4">
                  <img
                    src={c.logo}
                    alt={t(`${c.key}Name`)}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-display font-black text-heading-2 leading-tight text-charcoal-900">
                  {t(`${c.key}Name`)}
                </h3>
                <p className="mt-2 font-sans text-body-sm text-charcoal-700 leading-relaxed">
                  {t(`${c.key}Desc`)}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </SectionContainer>
      </MotionSection>

      {/* ========== OUR FOCUS ========== */}
      <div className="my-20">
        <PatternDivider pattern="bogolan" thickness="medium" eyebrow={t("focusEyebrow")} eyebrowAccent="indigo" />
      </div>

      <MotionSection className="relative bg-cream-100 overflow-hidden">
        <PatternWatermark pattern="bogolan" opacity={0.04} />
        <DecorativeBlob color="forest" size="lg" opacity={0.06} top="-6%" left="-4%" />

        <SectionContainer size="wide" className="relative py-16 sm:py-24">
          <div className="text-center mb-14 sm:mb-18 max-w-3xl mx-auto">
            <ScrollReveal noBlur>
              <Eyebrow accent="indigo" className="mb-5">{t("focusEyebrow")}</Eyebrow>
            </ScrollReveal>
            <ScrollReveal noBlur delay={0.1}>
              <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance">
                {t("focusHeadline")}
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FOCUS_AREAS.map((f, i) => (
              <ScrollReveal
                as="article"
                key={f.key}
                delay={0.05 * i}
                className={cn(
                  "relative group h-full rounded-soft-lg p-7 sm:p-8 bg-white/70 border border-cream-100 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1.5",
                  i === 1 && "lg:mt-10",
                  i === 3 && "lg:mt-10",
                )}
              >
                <FloatingPatternMotif
                  pattern={f.pattern}
                  size={110}
                  rotate={-18 + i * 14}
                  top="2%"
                  right="2%"
                  className="opacity-80"
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <HandDrawnIcon name={f.icon} size={46} color={f.color} withFrame />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full bg-cream-100/80 text-charcoal-700/80 border border-charcoal-900/10">
                      {f.tag}
                    </span>
                  </div>
                  <Eyebrow accent={f.corner} className="mb-3">{t(f.key)}</Eyebrow>
                  <p className="font-sans text-body-md text-charcoal-700 leading-relaxed">
                    {t(`${f.key}Desc`)}
                  </p>
                  <div className="mt-7 h-[2px] bg-woven opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </SectionContainer>
      </MotionSection>

      {/* ========== OUR WORK SPANS ACROSS ========== */}
      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" eyebrow={t("workSpansEyebrow")} eyebrowAccent="mango" />
      </div>

      <MotionSection className="relative bg-charcoal-900 text-cream-100 overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-ankara pattern-watermark opacity-[0.08]" />
        <DecorativeBlob color="mango" size="lg" opacity={0.2} top="-20%" right="-6%" />
        <DecorativeBlob color="terracotta" size="md" opacity={0.25} bottom="-8%" left="-4%" />

        <SectionContainer size="wide" className="relative py-16 sm:py-24">
          <div className="max-w-2xl mb-14">
            <ScrollReveal noBlur>
              <Eyebrow accent="mango" className="mb-5">{t("workSpansEyebrow")}</Eyebrow>
            </ScrollReveal>
            <ScrollReveal noBlur delay={0.1}>
              <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance">
                {t("workSpansHeadline")}
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {WORK_SPANS.map((w, i) => (
              <ScrollReveal
                as="div"
                key={w.key}
                delay={0.05 * i}
                className="relative rounded-soft-lg bg-cream-50/5 border border-cream-50/10 p-6 backdrop-blur-sm hover:bg-cream-50/10 transition-colors duration-500"
              >
                <HandDrawnIcon name={w.icon} size={40} color={w.color} withFrame />
                <h3 className="mt-4 font-display font-bold text-body-lg text-cream-50">
                  {t(`${w.key}Name`)}
                </h3>
                <p className="mt-2 font-sans text-body-sm text-cream-100/70 leading-relaxed">
                  {t(`${w.key}Desc`)}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </SectionContainer>
      </MotionSection>

      {/* ========== CREATING LONG TERM VALUE ========== */}
      <div className="my-20">
        <PatternDivider pattern="kente" thickness="medium" eyebrow={t("valueEyebrow")} eyebrowAccent="terracotta" />
      </div>

      <MotionSection className="relative bg-cream-50 overflow-hidden">
        <PatternWatermark pattern="kente" opacity={0.04} />
        <DecorativeBlob color="terracotta" size="md" opacity={0.1} top="8%" right="5%" />
        <DecorativeBlob color="forest" size="lg" opacity={0.06} bottom="-6%" left="-4%" />

        <SectionContainer size="wide" className="relative py-16 sm:py-24">
          <div className="text-center mb-14 sm:mb-18 max-w-3xl mx-auto">
            <ScrollReveal noBlur>
              <Eyebrow accent="terracotta" className="mb-5">{t("valueEyebrow")}</Eyebrow>
            </ScrollReveal>
            <ScrollReveal noBlur delay={0.1}>
              <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance">
                Principles that <em className="not-italic text-terracotta-600">drive us.</em>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <ScrollReveal
                as="article"
                key={v.key}
                delay={0.05 * i}
                className="relative group h-full rounded-soft-lg p-7 sm:p-8 bg-white/70 border border-cream-100 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1.5"
              >
                <FloatingPatternMotif
                  pattern={v.pattern}
                  size={100}
                  rotate={-16 + i * 12}
                  top="3%"
                  right="3%"
                  className="opacity-70"
                />
                <div className="relative">
                  <HandDrawnIcon name={v.icon} size={42} color={v.color} withFrame />
                  <h3 className="mt-5 font-display font-black text-heading-2 leading-tight text-charcoal-900">
                    {t(v.key)}
                  </h3>
                  <p className="mt-3 font-sans text-body-md text-charcoal-700 leading-relaxed">
                    {t(`${v.key}Desc`)}
                  </p>
                  <div className="mt-6 h-[2px] bg-woven opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </SectionContainer>
      </MotionSection>

      {/* ========== BEYOND THE HARVEST CTA ========== */}
      <div className="my-20">
        <PatternDivider pattern="mudcloth" thickness="medium" eyebrow={t("beyondHarvestEyebrow")} eyebrowAccent="forest" />
      </div>

      <MotionSection className="relative overflow-hidden">
        <SectionContainer size="wide" className="relative py-16 sm:py-24">
          <div className="relative rounded-soft-lg overflow-hidden bg-charcoal-900 text-cream-100 py-16 sm:py-20 lg:py-24">
            <div aria-hidden className="absolute inset-0 bg-kente pattern-watermark opacity-[0.1]" />
            <DecorativeBlob color="mango" size="lg" opacity={0.25} top="-30%" right="-8%" />
            <DecorativeBlob color="terracotta" size="md" opacity={0.3} bottom="-10%" left="-4%" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center px-7 sm:px-12 lg:px-16">
              <div className="lg:col-span-7">
                <Eyebrow accent="mango" className="mb-5">{t("beyondHarvestEyebrow")}</Eyebrow>
                <h2 className="font-display font-black text-display-1 leading-[0.98] text-balance">
                  {t("beyondHarvestHeadline")}
                </h2>
                <p className="mt-6 font-sans text-body-lg text-cream-100/80 max-w-xl leading-relaxed">
                  Explore our full ecosystem of expressions — from farms and foods to storytelling and social impact.
                </p>
                <div className="mt-10">
                  <Button href="/products" variant="primary" size="lg">
                    {t("beyondHarvestCta")}
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <PatternFramedImage
                  src="/images/hero-culture-harvest.jpg"
                  alt="African culture and harvest celebration"
                  width={600}
                  height={500}
                  thickness="medium"
                  pattern="ankara"
                  cornerAccent="mango"
                  className="aspect-[6/5] w-full"
                />
              </div>
            </div>
          </div>
        </SectionContainer>
      </MotionSection>

      {/* ========== BACK HOME ========== */}
      <div className="my-16">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer className="text-center pb-8">
        <Button href="/" variant="secondary" size="lg">
          ← {tNav("home")}
        </Button>
      </SectionContainer>
    </main>
  );
}
