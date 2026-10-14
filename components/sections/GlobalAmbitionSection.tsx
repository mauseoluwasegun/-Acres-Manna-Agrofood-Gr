import { SectionContainer } from "@/components/layout/SectionContainer";
import { MotionSection } from "@/components/animations/MotionSection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SITE_LOCATIONS } from "@/lib/constants";

export function GlobalAmbitionSection() {
  return (
    <MotionSection className="bg-white py-20 sm:py-28">
      <SectionContainer size="wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow className="mb-5">Where we operate</Eyebrow>
            <h2 className="font-display text-display-1 font-black">
              Built in Africa. Designed to compete globally.
            </h2>
            <p className="mt-6 font-sans text-body-lg leading-relaxed text-charcoal-700">
              We&apos;re building the processing capability, product
              portfolio and commercial relationships needed to compete in
              African and international food markets. AcresxManna Ltd
              manufactures, signs customer contracts and exports from
              Nigeria; Nigerian retail is planned.
            </p>
          </div>
          <div className="grid gap-4">
            {SITE_LOCATIONS.map(({ label, address }) => (
              <address
                key={label}
                className="rounded-2xl border border-cream-200 bg-cream-50 p-5 not-italic"
              >
                <p className="font-mono text-label font-bold uppercase tracking-[0.1em] text-purple-700">
                  {label}
                </p>
                <p className="mt-2 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {address}
                </p>
              </address>
            ))}
          </div>
        </div>
      </SectionContainer>
    </MotionSection>
  );
}
