import { getTranslations } from "next-intl/server";
import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MotionSection, ScrollReveal } from "@/components/animations/MotionSection";

type ManufacturingCapability = {
  image: string;
  position?: string;
};

const capabilities: ManufacturingCapability[] = [
  {
    image: "/images/farms/cassava.jpg",
  },
  {
    image: "/images/products/coated-peanut-jars-snack-warehouse.jpg",
    position: "object-[center_60%]",
  },
  {
    image: "/images/processing/manufacturing-kettle-operator.jpg",
    position: "object-[center_20%]",
  },
  {
    image: "/images/processing/industrial-mixing-sifter-tanks.jpg",
  },
  {
    image: "/images/farms/tomato-farm-team-branded-uniforms.jpg",
  },
  {
    image: "/images/logistics/container-full-bottled-cooking-oil.jpg",
    position: "object-[center_45%]",
  },
];

export async function ManufacturingSection() {
  const t = await getTranslations("sections.manufacturing");
  return (
    <MotionSection className="bg-purple-700 py-16 text-white sm:py-24">
      <SectionContainer size="wide">
        <div className="max-w-3xl">
          <Eyebrow className="mb-5 text-yellow-400">{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-display-1 font-black leading-tight">
            {t("headline")}
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-body-lg leading-relaxed text-white/85">
            {t("description")}
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <ScrollReveal
              as="li"
              key={index}
              delay={0.05 * index}
              className="group list-none overflow-hidden rounded-3xl border border-white/20 bg-white/5 transition duration-300 hover:border-yellow-400/50 hover:bg-white/10"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-purple-900/40">
                <LazyImage
                  src={capability.image}
                  alt={t(`cap${index}Alt`)}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${capability.position ?? ""}`}
                  wrapperClassName="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-heading-2 font-black">
                  {t(`cap${index}Title`)}
                </h3>
                <p className="mt-3 font-sans text-body-md leading-relaxed text-white/85">
                  {t(`cap${index}Description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ul>
      </SectionContainer>
    </MotionSection>
  );
}
