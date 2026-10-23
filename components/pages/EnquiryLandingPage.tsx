import { useTranslations } from "next-intl";
import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EnquiryForm, type EnquiryType } from "@/components/forms/EnquiryForm";

type EnquiryLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  whatToKnow: string[];
  steps: string[];
  enquiryType: EnquiryType;
  submitLabel: string;
  formIntro?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export function EnquiryLandingPage({
  eyebrow,
  title,
  intro,
  whatToKnow,
  steps,
  enquiryType,
  submitLabel,
  formIntro,
  image,
  imageAlt,
  imageCaption,
}: EnquiryLandingPageProps) {
  const t = useTranslations("enquiry");
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide">
        <div className={image ? "grid gap-12 lg:grid-cols-12 lg:items-center" : ""}>
          <div className={image ? "lg:col-span-7" : ""}>
            <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
            <h1 className="max-w-5xl font-display text-display-1 font-black">
              {title}
            </h1>
            <p className="mt-8 max-w-3xl font-sans text-body-lg leading-relaxed text-charcoal-700">
              {intro}
            </p>
          </div>
          {image && (
            <div className="lg:col-span-5">
              <figure className="overflow-hidden rounded-3xl border border-cream-200 bg-white p-3 shadow-card">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream-100">
                  <LazyImage
                    src={image}
                    alt={imageAlt || title}
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 42vw"
                    className="object-cover"
                    wrapperClassName="absolute inset-0"
                  />
                </div>
                {imageCaption && (
                  <figcaption className="p-3 text-center font-sans text-body-sm text-charcoal-600">
                    {imageCaption}
                  </figcaption>
                )}
              </figure>
            </div>
          )}
        </div>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <section>
            <Eyebrow className="mb-5">{t("whatToInclude")}</Eyebrow>
            <ul className="space-y-3">
              {whatToKnow.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-cream-200 bg-white p-5 font-sans text-body-md leading-relaxed text-charcoal-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <Eyebrow className="mb-5">{t("howItWorks")}</Eyebrow>
            <ol className="space-y-3">
              {steps.map((step) => (
                <li
                  key={step}
                  className="rounded-2xl border border-cream-200 bg-cream-50 p-5 font-sans text-body-md leading-relaxed text-charcoal-700"
                >
                  {step}
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="mb-5">{t("apply")}</Eyebrow>
            <h2 className="font-display text-display-2 font-black">
              {formIntro || t("startConversation")}
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-body-md leading-relaxed text-charcoal-700">
              {t("formIntroBody")}
            </p>
          </div>
          <div className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card">
            <EnquiryForm
              enquiryType={enquiryType}
              submitLabel={submitLabel}
              showCompany
            />
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
