import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How AcresxManna collects, uses, stores and protects personal data from contact forms, enquiries and newsletter sign-ups.",
};

export default function PrivacyPage() {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide" className="max-w-3xl">
        <Eyebrow className="mb-5">Privacy Policy</Eyebrow>
        <h1 className="font-display text-display-1 font-black">
          How we look after your information.
        </h1>
        <p className="mt-6 font-sans text-body-md leading-relaxed text-charcoal-700">
          Last updated: October 2026. This policy explains how{" "}
          {SITE_NAME} handles personal information collected through this
          website. It is written in plain language and applies to visitors in
          Nigeria, the United Kingdom and elsewhere.
        </p>

        <div className="my-16">
          <PatternDivider pattern="woven" thickness="thin" />
        </div>

        <div className="space-y-12 font-sans text-body-md leading-relaxed text-charcoal-700">
          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Who we are
            </h2>
            <p>
              {SITE_NAME} Ltd is the Nigerian entity that manufactures, signs
              customer contracts and exports products. UncleTobi.Shop is the
              UK-facing entity that invoices buyers and operates a warehouse
              and office in Hertford, United Kingdom. Together, we are the data
              controllers for information submitted through this site.
            </p>
            <p>
              For any privacy question, contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-bold text-purple-700 underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              What we collect
            </h2>
            <p>We collect only the information you choose to share with us:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Contact-form submissions: name, email, company or organisation,
                enquiry type and message.
              </li>
              <li>
                Supplier and distributor applications: name, business or farm
                name, location, commodities, estimated volumes and season, and
                message.
              </li>
              <li>Product enquiries: name, email, company and message.</li>
              <li>Newsletter sign-ups: email address only.</li>
              <li>
                Technical data such as IP address, device type and browser,
                collected automatically by analytics tools only after you give
                consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Why we collect it and on what basis
            </h2>
            <p>We use your information to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Reply to your enquiry or application.</li>
              <li>Manage commercial and supply partnerships.</li>
              <li>
                Send newsletter updates only when you have asked to receive
                them.
              </li>
              <li>Improve the website and understand how it is used.</li>
              <li>Meet legal and regulatory obligations.</li>
            </ul>
            <p className="mt-4">
              We process this information based on your consent (for newsletter
              and analytics), our legitimate interest in responding to business
              enquiries, and our legal obligations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Who we share it with
            </h2>
            <p>
              We do not sell personal data. We share it only with service
              providers acting on our behalf, including hosting, email, CRM and
              analytics providers. We may also share information with
              professional advisers or authorities where required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              International transfers
            </h2>
            <p>
              Your information may be processed in Nigeria, the United Kingdom
              and other countries where our service providers operate. We use
              appropriate safeguards to protect your information when it is
              transferred across borders.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              How long we keep it
            </h2>
            <p>
              We keep enquiry and application records for as long as needed to
              manage the relationship and meet legal obligations. Newsletter
              records are kept until you unsubscribe. We review and delete
              personal data on a regular schedule when it is no longer needed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Security
            </h2>
            <p>
              We use reasonable technical and organisational measures to
              protect your information, including secure hosting, access
              controls and regular reviews. No method of transmission over the
              internet is completely secure, but we work to protect your data to
              the best of our ability.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Your rights
            </h2>
            <p>
              Depending on where you live, you may have the right to access,
              correct, delete, object to or restrict the processing of your
              personal data, and to withdraw consent at any time. To exercise
              these rights, contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-bold text-purple-700 underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Complaints
            </h2>
            <p>
              If you are not satisfied with how we handle your information, you
              can contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-bold text-purple-700 underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
              . You may also have the right to complain to a data protection
              authority in your country.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Cookies and children
            </h2>
            <p>
              For information about cookies, see our{" "}
              <a
                href="/cookies"
                className="font-bold text-purple-700 underline underline-offset-4"
              >
                Cookie Policy
              </a>
              . This website is not aimed at children and we do not knowingly
              collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Changes to this policy
            </h2>
            <p>
              We may update this policy from time to time. When we do, we will
              update the date at the top of this page and, where appropriate,
              notify you by email or through the website.
            </p>
          </section>
        </div>
      </SectionContainer>
    </main>
  );
}
