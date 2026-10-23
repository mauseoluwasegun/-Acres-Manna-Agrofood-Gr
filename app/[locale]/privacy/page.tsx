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
  const t = await getTranslations({ locale, namespace: "pages.privacy" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function PrivacyPage() {
  const t = await getTranslations("pages.privacy");

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
              {t("whoWeAreHeading")}
            </h2>
            <p>{t("whoWeAreBody")}</p>
            <p>
              {t.rich("whoWeAreContact", {
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

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("collectHeading")}
            </h2>
            <p>{t("collectIntro")}</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>{t("collectItem1")}</li>
              <li>{t("collectItem2")}</li>
              <li>{t("collectItem3")}</li>
              <li>{t("collectItem4")}</li>
              <li>{t("collectItem5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("whyHeading")}
            </h2>
            <p>{t("whyIntro")}</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>{t("whyItem1")}</li>
              <li>{t("whyItem2")}</li>
              <li>{t("whyItem3")}</li>
              <li>{t("whyItem4")}</li>
              <li>{t("whyItem5")}</li>
            </ul>
            <p className="mt-4">{t("whyBasis")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("shareHeading")}
            </h2>
            <p>{t("shareBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("transfersHeading")}
            </h2>
            <p>{t("transfersBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("retentionHeading")}
            </h2>
            <p>{t("retentionBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("securityHeading")}
            </h2>
            <p>{t("securityBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("rightsHeading")}
            </h2>
            <p>
              {t.rich("rightsBody", {
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

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("complaintsHeading")}
            </h2>
            <p>
              {t.rich("complaintsBody", {
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

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("cookiesHeading")}
            </h2>
            <p>
              {t.rich("cookiesBody", {
                link: (chunks) => (
                  <a
                    href="/cookies"
                    className="font-bold text-purple-700 underline underline-offset-4"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("changesHeading")}
            </h2>
            <p>{t("changesBody")}</p>
          </section>
        </div>
      </SectionContainer>
    </main>
  );
}
