import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_LOCATIONS,
} from "@/lib/constants";
import { BusinessFaq } from "@/components/sections/BusinessFaq";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export function ContactPageContent() {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow className="mb-5">Contact AcresxManna</Eyebrow>
            <h1 className="font-display text-display-1 font-black">
              Great partnerships start with a conversation.
            </h1>
            <p className="mt-8 max-w-lg font-sans text-body-lg leading-relaxed text-charcoal-700">
              Whether you want to buy our products, supply agricultural
              commodities, distribute our brands, explore manufacturing
              partnerships or discuss investment, we&apos;d love to hear from
              you. We reply within two working days.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="primary" size="lg">
                Email our team
              </Button>
              <Button
                href={`https://wa.me/${CONTACT_PHONE.replace(/\D/g, "")}`}
                variant="secondary"
                size="lg"
              >
                WhatsApp
              </Button>
            </div>
            <p className="mt-6 font-sans text-body-md text-charcoal-700">
              You can also call{" "}
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                className="font-bold text-purple-700 underline underline-offset-4"
              >
                {CONTACT_PHONE}
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-cream-200 bg-cream-50 p-6">
              <Eyebrow className="mb-3">Email</Eyebrow>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all font-sans text-body-lg font-bold text-purple-700 underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            {SITE_LOCATIONS.map(({ label, address }) => (
              <address
                key={label}
                className="rounded-3xl border border-cream-200 bg-white p-6 not-italic"
              >
                <Eyebrow className="mb-3">{label}</Eyebrow>
                <p className="font-sans text-body-md leading-relaxed text-charcoal-700">
                  {address}
                </p>
              </address>
            ))}
          </div>
        </div>
      </SectionContainer>

      <div className="my-24">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow className="mb-5">Send us a message</Eyebrow>
            <h2 className="font-display text-display-2 font-black">
              Tell us how we can help.
            </h2>
            <p className="mt-6 font-sans text-body-md leading-relaxed text-charcoal-700">
              Use the form to send your enquiry and we&apos;ll route it to the
              right person on our team. You can also reach us directly by email
              or WhatsApp using the details above.
            </p>
          </div>
          <div className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card">
            <EnquiryForm
              enquiryType="other"
              submitLabel="Send message"
              showEnquiryType
            />
          </div>
        </div>
      </SectionContainer>

      <div className="my-24">
        <PatternDivider pattern="kente" thickness="medium" />
      </div>
      <BusinessFaq />
    </main>
  );
}
