import { getTranslations } from "next-intl/server";
import { ContactPageContent } from "./ContactPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.contact" });

  return {
    title: t("metadataTitle"),
    description: t("metadataDescription"),
  };
}

export default function ContactPage() {
  return <ContactPageContent />;
}
