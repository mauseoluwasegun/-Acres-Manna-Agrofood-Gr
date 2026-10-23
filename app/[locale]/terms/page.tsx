import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { CONTACT_EMAIL } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.terms" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function TermsPage() {
  const t = await getTranslations("pages.terms");

  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide" className="max-w-3xl">
        <Eyebrow className="mb-5">{t("eyebrow")}</Eyebrow>
        <h1 className="font-display text-display-1 font-black">
          {t("heading")}
        </h1>
        <p className="mt-6 font-sans text-body-md leading-relaxed text-charcoal-700">
          {t("intro")}
        </p>

        <div className="my-16">
          <PatternDivider pattern="woven" thickness="thin" />
        </div>

        <div className="space-y-12 font-sans text-body-md leading-relaxed text-charcoal-700">
          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("useHeading")}
            </h2>
            <p>{t("useBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("acceptableHeading")}
            </h2>
            <p>{t("acceptableIntro")}</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>{t("acceptableItem1")}</li>
              <li>{t("acceptableItem2")}</li>
              <li>{t("acceptableItem3")}</li>
              <li>{t("acceptableItem4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("ipHeading")}
            </h2>
            <p>{t("ipBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("accuracyHeading")}
            </h2>
            <p>{t("accuracyBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("linksHeading")}
            </h2>
            <p>{t("linksBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("liabilityHeading")}
            </h2>
            <p>{t("liabilityBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("governingLawHeading")}
            </h2>
            <p>{t("governingLawBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("contactHeading")}
            </h2>
            <p>
              {t.rich("contactBody", {
                link: (chunks) => (
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-bold text-purple-700 underline underline-offset-4"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </section>
        </div>
      </SectionContainer>
    </main>
  );
}
