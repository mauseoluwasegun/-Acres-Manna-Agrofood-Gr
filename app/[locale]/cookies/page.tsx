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
  const t = await getTranslations({ locale, namespace: "pages.cookies" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function CookiesPage() {
  const t = await getTranslations("pages.cookies");

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
              {t("whatAreCookiesHeading")}
            </h2>
            <p>{t("whatAreCookiesBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("tableHeading")}
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-cream-200">
                    <th className="py-3 pr-4 font-bold text-charcoal-900">
                      {t("tableName")}
                    </th>
                    <th className="py-3 pr-4 font-bold text-charcoal-900">
                      {t("tablePurpose")}
                    </th>
                    <th className="py-3 pr-4 font-bold text-charcoal-900">
                      {t("tableType")}
                    </th>
                    <th className="py-3 pr-4 font-bold text-charcoal-900">
                      {t("tableDuration")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-200">
                  <tr>
                    <td className="py-3 pr-4 align-top">
                      {t("essentialName")}
                    </td>
                    <td className="py-3 pr-4 align-top">
                      {t("essentialPurpose")}
                    </td>
                    <td className="py-3 pr-4 align-top">{t("essentialType")}</td>
                    <td className="py-3 pr-4 align-top">{t("essentialDuration")}</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 align-top">
                      {t("analyticsName")}
                    </td>
                    <td className="py-3 pr-4 align-top">
                      {t("analyticsPurpose")}
                    </td>
                    <td className="py-3 pr-4 align-top">{t("analyticsType")}</td>
                    <td className="py-3 pr-4 align-top">{t("analyticsDuration")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("essentialVsOptionalHeading")}
            </h2>
            <p>{t("essentialVsOptionalBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("consentHeading")}
            </h2>
            <p>{t("consentBody")}</p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              {t("blockDeleteHeading")}
            </h2>
            <p>{t("blockDeleteBody")}</p>
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
