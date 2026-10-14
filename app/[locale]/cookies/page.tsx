import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Cookie Policy",
  description:
    "Information about the cookies and similar technologies used on the AcresxManna website and how to manage them.",
};

export default function CookiesPage() {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide" className="max-w-3xl">
        <Eyebrow className="mb-5">Cookie Policy</Eyebrow>
        <h1 className="font-display text-display-1 font-black">
          Cookies and similar technologies.
        </h1>
        <p className="mt-6 font-sans text-body-md leading-relaxed text-charcoal-700">
          Last updated: October 2026. This policy explains what cookies are,
          which ones we use and how you can manage them.
        </p>

        <div className="my-16">
          <PatternDivider pattern="woven" thickness="thin" />
        </div>

        <div className="space-y-12 font-sans text-body-md leading-relaxed text-charcoal-700">
          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              What are cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help the website remember your preferences and
              understand how the site is used. Similar technologies include
              local storage and pixel tags.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              The cookies we use
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-cream-200">
                    <th className="py-3 pr-4 font-bold text-charcoal-900">
                      Name
                    </th>
                    <th className="py-3 pr-4 font-bold text-charcoal-900">
                      Purpose
                    </th>
                    <th className="py-3 pr-4 font-bold text-charcoal-900">
                      Type
                    </th>
                    <th className="py-3 pr-4 font-bold text-charcoal-900">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-200">
                  <tr>
                    <td className="py-3 pr-4 align-top">
                      Essential cookies
                    </td>
                    <td className="py-3 pr-4 align-top">
                      Required for the site to function, such as remembering
                      your cookie consent choice and locale.
                    </td>
                    <td className="py-3 pr-4 align-top">Essential</td>
                    <td className="py-3 pr-4 align-top">1 year</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 align-top">
                      Analytics cookies
                    </td>
                    <td className="py-3 pr-4 align-top">
                      Used to understand how visitors use the site, including
                      pages visited and traffic sources. Only set after you
                      consent.
                    </td>
                    <td className="py-3 pr-4 align-top">Analytics</td>
                    <td className="py-3 pr-4 align-top">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Essential vs optional cookies
            </h2>
            <p>
              Essential cookies are required for the website to work and cannot
              be switched off. Optional analytics cookies are only used when you
              give consent through our cookie banner.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              How we handle consent
            </h2>
            <p>
              When you first visit the site, you will see a cookie banner. You
              can choose to accept all cookies, accept only essential cookies,
              or manage your settings. You can change your choice at any time
              using the Cookie settings link in the footer.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              How to block or delete cookies
            </h2>
            <p>
              You can block or delete cookies through your browser settings.
              Please note that blocking essential cookies may affect the
              functionality of the website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-heading-1 font-black text-charcoal-900">
              Contact
            </h2>
            <p>
              For questions about this Cookie Policy, contact us at{" "}
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
