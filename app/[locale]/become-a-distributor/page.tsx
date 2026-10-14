import type { Metadata } from "next";
import { EnquiryLandingPage } from "@/components/pages/EnquiryLandingPage";

export const metadata: Metadata = {
  title: "Become a Distributor",
  description:
    "Discuss distribution of AcresxManna food products with our team.",
};

export default function BecomeDistributorPage() {
  return (
    <EnquiryLandingPage
      eyebrow="Stock the flavour"
      title="Bring African-made food to your shelves."
      intro="We welcome enquiries from retailers, wholesalers, distributors and importers interested in African food products and long-term commercial partnerships."
      whatToKnow={[
        "Tell us who you serve, where you operate and the channels you sell through.",
        "Let us know which products interest you and your expected order sizes.",
        "Product information, availability, logistics and any sampling are confirmed individually.",
      ]}
      steps={[
        "Introduce yourself and your business.",
        "We share product information.",
        "We discuss fit, volumes and logistics.",
        "We agree a way to work together.",
      ]}
      enquiryType="distributor"
      submitLabel="Apply to become a distributor"
      formIntro="Tell us about your business."
    />
  );
}
