import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: "Terms of Use",
  description:
    "Terms governing the use of the AcresxManna website, including acceptable use, intellectual property and disclaimers.",
};

export default function TermsPage() {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide" className="max-w-3xl">
        <Eyebrow className="mb-5">Terms of Use</Eyebrow>
        <h1 className="font-display text-display-1 font-black">
          Terms of Use
        </h1>
        <p className="mt-6 font-sans text-body-md leading-relaxed text-charcoal-700">
          Last updated: October 2026. These terms govern your use of the{" "}
          {SITE_NAME} website. By accessing or using this site, you agree to these
          terms.
        </p>

        <div className="my-16">
          <PatternDivider pattern="woven" thickness="thin" />
        </div>

        <div className="space-y-12 font-sans text-body-md leading-relaxed text-charcoal-700">
          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Who can use the site
            </h2>
            <p>
              This website is intended for businesses and individuals interested in{" "}
              {SITE_NAME}&apos;s products, services and partnerships. You may
              use the site for lawful purposes only and in accordance with these
              terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Acceptable and prohibited use
            </h2>
            <p>You may not:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Use the site for any unlawful purpose or in a way that could
                damage, disable or impair the site.
              </li>
              <li>
                Attempt to gain unauthorised access to the site, its systems or
                data.
              </li>
              <li>
                Use automated tools to scrape, copy or reproduce content without
                permission.
              </li>
              <li>
                Submit false, misleading or harmful information through any
                form on the site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Intellectual property
            </h2>
            <p>
              All content on this website, including text, logos, images,
              graphics and software, is owned by {SITE_NAME} or its licensors and
              is protected by intellectual property laws. You may view and share
              content for personal, non-commercial use, but you may not
              reproduce, modify or distribute it without our written
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Accuracy of information
            </h2>
            <p>
              The content on this site is provided for general information
              purposes only and may change without notice. It is not an offer
              to sell or a guarantee of product availability. Product information,
              specifications and availability are indicative until confirmed in
              writing by {SITE_NAME}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Links to third-party websites
            </h2>
            <p>
              This site may contain links to third-party websites, including
              brand websites and social media. We are not responsible for the
              content or practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, {SITE_NAME} is not liable
              for any direct, indirect, incidental or consequential damages arising
              from your use of, or inability to use, this website. This does not
              exclude or limit liability where prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of Nigeria and the United
              Kingdom, as applicable. Disputes will be handled in the
              appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Contact
            </h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-bold text-purple-700 underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </SectionContainer>
    </main>
  );
}
