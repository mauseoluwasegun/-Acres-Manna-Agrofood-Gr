"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";

const FAQS = [
  {
    question: "What does AcresxManna do?",
    answer:
      "We turn Africa’s agricultural resources into quality food products through sourcing, processing, manufacturing, brand development and distribution for African and international markets.",
  },
  {
    question: "Where do you operate?",
    answer:
      "Our factory and headquarters are in Moniya, Ibadan, Oyo State, Nigeria. We also have an office in Victoria Island, Lagos, and a warehouse and office in Hertford, United Kingdom.",
  },
  {
    question: "Which products do you make?",
    answer:
      "Garri (white, Ijebu and yellow), cassava flour, plantain flour, groundnuts and peanuts, cashew nuts, plantain chips, kuli kuli, pure palm oil, and hibiscus and teas are on sale now. Seasonings and spices are planned.",
  },
  {
    question: "Can I buy your products?",
    answer:
      "We’re export focused today, so please send us an enquiry. Nigerian retail is planned through shops and the UncleTobi online grocery concept.",
  },
  {
    question: "Are products available in standard pack sizes?",
    answer:
      "Products are packed to each client’s requirements, so standard pack sizes are not published.",
  },
  {
    question: "Do you work with distributors and retailers?",
    answer:
      "Yes. We welcome enquiries from retailers, wholesalers, distributors and importers through our Become a Distributor page.",
  },
  {
    question: "Do you export?",
    answer:
      "Yes. Export is our current focus. Contact us to discuss product availability and destination requirements; specific export destinations are not published.",
  },
  {
    question: "Do you offer private label or contract manufacturing?",
    answer:
      "Where operationally suitable, we’re happy to explore it. Capabilities, minimum order quantities and lead times depend on the product, so please send us the details.",
  },
  {
    question: "Are your products certified?",
    answer:
      "We do not publish unverified certification claims. Product-specific compliance details can be confirmed as part of an enquiry.",
  },
  {
    question: "How do you make sure products are safe and consistent?",
    answer:
      "Product-specific quality and compliance details are confirmed as part of an enquiry. We do not publish certification claims that have not been verified.",
  },
  {
    question: "I’m a farmer or supplier. How can I work with you?",
    answer:
      "Use the Become a Supplier page and tell us what you grow or trade, where, and in what volumes.",
  },
  {
    question: "I’m an investor. Who do I talk to?",
    answer:
      "Use the Investors and Partners page to start a conversation. We don’t publish fundraising details online.",
  },
  {
    question: "What are the brands?",
    answer:
      "HappyMan Foods is the brand we sell our products under, Maluza Foods Co. is our bakery, and UncleTobi is our online grocery concept, coming soon. See the Our Brands page for more information.",
  },
];

export function BusinessFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
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
          <Eyebrow className="mb-4">Quick answers</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            Frequently asked questions
          </h2>
        </div>
        <div className="mx-auto max-w-4xl divide-y divide-purple-700/15 border-y border-purple-700/15">
          {FAQS.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const answerId = `business-faq-answer-${index}`;

            return (
              <div key={question} className="py-2">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex min-h-14 w-full items-center justify-between gap-5 py-3 text-left font-display text-heading-2 font-bold text-charcoal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700"
                  >
                    {question}
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
                  {answer}
                </p>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
