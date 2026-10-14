import type { Metadata } from "next";
import { EnquiryLandingPage } from "@/components/pages/EnquiryLandingPage";

export const metadata: Metadata = {
  title: "Business Enquiries",
  description:
    "Contact AcresxManna about manufacturing, partnerships, media and other business enquiries.",
};

export default function BusinessEnquiriesPage() {
  return (
    <EnquiryLandingPage
      eyebrow="Business enquiries"
      title="Let’s talk business."
      intro="For anything that isn’t a product, supply or distribution question, get in touch about manufacturing and private-label discussions, partnerships, media, or another idea."
      whatToKnow={[
        "Product enquiries: availability and product information.",
        "Supply or farming partnerships: agricultural commodities and seasonal volumes.",
        "Distribution or wholesale: channels, markets and products of interest.",
        "Manufacturing partnerships, investment enquiries and other business topics.",
      ]}
      steps={[
        "Introduce yourself or your organisation.",
        "Tell us the kind of conversation you would like to have.",
        "Our team will direct your enquiry to the right contact.",
      ]}
      enquiryType="other"
      submitLabel="Start the conversation"
      formIntro="Tell us what's on your mind."
    />
  );
}
