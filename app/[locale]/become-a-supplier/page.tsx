import type { Metadata } from "next";
import { EnquiryLandingPage } from "@/components/pages/EnquiryLandingPage";

export const metadata: Metadata = {
  title: "Become a Supplier",
  description:
    "Tell AcresxManna about the agricultural commodities you grow, aggregate or trade.",
};

export default function BecomeSupplierPage() {
  return (
    <EnquiryLandingPage
      eyebrow="Grow with us"
      title="Let’s source Africa’s harvest together."
      intro="A dependable processing business needs dependable agricultural supply. If you grow, aggregate or trade agricultural commodities, we’d love to hear from you."
      whatToKnow={[
        "We are interested in cassava, plantain, groundnuts and peanuts, hibiscus, and spice and seasoning ingredients.",
        "Tell us about quality, origin, handling and the volumes you can supply through the season.",
        "Prices, guaranteed volumes and payment terms are agreed only after we review the opportunity.",
      ]}
      steps={[
        "Tell us what you supply.",
        "We review quality, volume and timing.",
        "We agree specifications and terms.",
        "We build the supply relationship step by step.",
      ]}
      enquiryType="supplier"
      submitLabel="Apply to become a supplier"
      formIntro="Tell us what you grow or trade."
    />
  );
}
