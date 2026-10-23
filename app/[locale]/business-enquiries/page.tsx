import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { EnquiryLandingPage } from "@/components/pages/EnquiryLandingPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "pages.businessEnquiries",
  });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default async function BusinessEnquiriesPage() {
  const t = await getTranslations("pages.businessEnquiries");

  return (
    <EnquiryLandingPage
      eyebrow={t("eyebrow")}
      title={t("title")}
      intro={t("intro")}
      whatToKnow={t.raw("whatToKnow") as string[]}
      steps={t.raw("steps") as string[]}
      enquiryType="other"
      submitLabel={t("submitLabel")}
      formIntro={t("formIntro")}
      image="/images/corporate/executive-consultation-showroom-office.jpg"
      imageAlt={t("imageAlt")}
      imageCaption={t("imageCaption")}
    />
  );
}
