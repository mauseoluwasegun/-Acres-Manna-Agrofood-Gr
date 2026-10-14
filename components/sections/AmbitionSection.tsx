import { SectionContainer } from "@/components/layout/SectionContainer";
import { MotionSection } from "@/components/animations/MotionSection";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function AmbitionSection() {
  return (
    <MotionSection className="bg-white py-16 sm:py-24">
      <SectionContainer size="wide">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow className="mb-5">Our ambition</Eyebrow>
          <h2 className="font-display text-display-1 font-black">
            Africa should capture more value from what it grows.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl font-sans text-body-lg leading-relaxed text-charcoal-700">
            Africa has immense agricultural resources. AcresxManna exists to
            help bridge the gap between agricultural production and the
            finished food products consumers and businesses need.
          </p>
        </div>
      </SectionContainer>
    </MotionSection>
  );
}
