"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";

const FAQ_KEYS = [
  "faq0",
  "faq1",
  "faq2",
  "faq3",
  "faq4",
  "faq5",
  "faq6",
  "faq7",
  "faq8",
  "faq9",
  "faq10",
  "faq11",
  "faq12",
];

export function BusinessFaq() {
  const t = useTranslations("sections.businessFaq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_KEYS.map((key) => ({
      "@type": "Question",
      name: t(`${key}Question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`${key}Answer`),
      },
    })),
  };

  return (
    <section className="py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SectionContainer size="wide">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Eyebrow className="mb-4">{t("eyebrow")}</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            {t("heading")}
          </h2>
        </div>
        <div className="mx-auto max-w-4xl divide-y divide-purple-700/15 border-y border-purple-700/15">
          {FAQ_KEYS.map((key, index) => {
            const isOpen = openIndex === index;
            const answerId = `business-faq-answer-${index}`;

            return (
              <div key={key} className="py-2">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex min-h-14 w-full items-center justify-between gap-5 py-3 text-left font-display text-heading-2 font-bold text-charcoal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700"
                  >
                    {t(`${key}Question`)}
                    <span
                      aria-hidden="true"
                      className={`text-2xl font-normal text-purple-700 transition-transform ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <p
                  id={answerId}
                  hidden={!isOpen}
                  className="max-w-3xl pb-4 font-sans text-body-md leading-relaxed text-charcoal-700"
                >
                  {t(`${key}Answer`)}
                </p>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
