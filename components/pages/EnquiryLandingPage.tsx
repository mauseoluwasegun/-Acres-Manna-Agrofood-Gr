import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EnquiryForm, type EnquiryType } from "@/components/forms/EnquiryForm";

type EnquiryLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  whatToKnow: string[];
  steps: string[];
  enquiryType: EnquiryType;
  submitLabel: string;
  formIntro?: string;
};

export function EnquiryLandingPage({
  eyebrow,
  title,
  intro,
  whatToKnow,
  steps,
  enquiryType,
  submitLabel,
  formIntro,
}: EnquiryLandingPageProps) {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide">
        <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
        <h1 className="max-w-5xl font-display text-display-1 font-black">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          {intro}
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <section>
            <Eyebrow className="mb-5">What to include</Eyebrow>
            <ul className="space-y-3">
              {whatToKnow.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-cream-200 bg-white p-5 font-sans text-body-md leading-relaxed text-charcoal-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <Eyebrow className="mb-5">How it works</Eyebrow>
            <ol className="space-y-3">
              {steps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-cream-200 bg-cream-50 p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-mono font-bold text-purple-700">
                    {index + 1}
                  </span>
                  <span className="pt-1 font-sans text-body-md leading-relaxed text-charcoal-700">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="mb-5">Apply</Eyebrow>
            <h2 className="font-display text-display-2 font-black">
              {formIntro || "Start a conversation"}
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-body-md leading-relaxed text-charcoal-700">
              Share a little about your enquiry and our team will direct it to
              the right person. We do not promise prices, order volumes,
              minimums or terms before confirming them with you.
            </p>
          </div>
          <div className="rounded-3xl border border-cream-200 bg-white p-7 shadow-card">
            <EnquiryForm
              enquiryType={enquiryType}
              submitLabel={submitLabel}
              showCompany
            />
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
