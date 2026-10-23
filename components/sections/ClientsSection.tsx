import { getTranslations } from "next-intl/server";
import { LazyImage } from "@/components/ui/LazyImage";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ScrollReveal } from "@/components/animations/MotionSection";
import { Eyebrow } from "@/components/ui/Eyebrow";

const clients: {
  name: string;
  description: string;
  location?: string;
  image?: string;
  monogram?: string;
}[] = [
  {
    name: "SEG Group",
    location: "Hertford",
    description:
      "Retail and wholesale partner stocking HappyMan Foods products for its customers.",
    image: "/images/clients/seg-group.jpeg",
  },
  {
    name: "Ali Baba Foods Ltd",
    location: "Hertford",
    description:
      "Food business supplying African grocery products to retail customers.",
    image: "/images/clients/ali-baba-foods.jpeg",
  },
  {
    name: "Ades Cash and Carry",
    description:
      "Cash-and-carry outlet giving local retailers and shoppers access to everyday African food staples.",
    image: "/images/clients/ades-cash-and-carry.jpeg",
  },
  {
    name: "Wosiwosi Cash and Carry",
    description:
      "Cash-and-carry outlet serving its community with trusted African food brands.",
    monogram: "W",
  },
];

export async function ClientsSection() {
  const t = await getTranslations("sections.clients");

  return (
    <section className="bg-cream-50 py-16 sm:py-24">
      <SectionContainer size="wide">
        <div className="mb-10 max-w-3xl">
          <Eyebrow className="mb-5">{t("heading")}</Eyebrow>
          <h2 className="font-display text-display-1 font-black">
            Some of our clients.
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-body-lg leading-relaxed text-charcoal-700">
            Retailers, distributors and cash-and-carry partners who bring our
            products to customers.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, index) => (
            <ScrollReveal
              as="li"
              key={client.name}
              delay={0.05 * index}
              className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card transition duration-300 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                {client.image ? (
                  <LazyImage
                    src={client.image}
                    alt={`${client.name} logo`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    wrapperClassName="absolute inset-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      aria-hidden="true"
                      className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-700/10 font-display text-4xl font-black text-purple-700"
                    >
                      {client.monogram}
                    </span>
                  </div>
                )}
                {client.location && (
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm backdrop-blur-sm">
                      {client.location}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-heading-2 font-black">
                  {client.name}
                </h3>
                <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {client.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ul>
      </SectionContainer>
    </section>
  );
}
