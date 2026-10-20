import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { PatternDivider } from "@/components/animations/PatternDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SITE_LOCATIONS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/MotionSection";

export const metadata = {
  title: "Infrastructure",
  description:
    "How AcresxManna is building production, quality assurance and supply chain capacity for African food manufacturing.",
};

const facilityGallery = [
  {
    title: "Stainless Steel Mixing & Sifting",
    caption: "Food-grade industrial processing tanks, motorized blenders, and mechanical sifters operating at our central processing hub.",
    image: "/images/processing/large-stainless-mixing-vats.jpg",
  },
  {
    title: "Commercial Multi-Deck Bakery Ovens",
    caption: "Master bakers crafting golden loaves and baked items using high-capacity commercial digital deck ovens.",
    image: "/images/processing/bakery-staff-industrial-oven.jpg",
  },
  {
    title: "Hygienic Sorting & Quality Control",
    caption: "Skilled quality assurance personnel in sterile protective gear meticulously hand-sorting produce to export grade.",
    image: "/images/processing/full-facility-sorting-hall.jpg",
  },
  {
    title: "Palm Oil Bottling Line",
    caption: "Hygienic bottling operators arranging and inspecting hundreds of palm oil bottles before packing for dispatch.",
    image: "/images/processing/palm-oil-bottling-team.jpg",
  },
  {
    title: "Nut Sorting — Long Table Operations",
    caption: "A large team of skilled sorters separating roasted peanuts to premium grade across our extended sorting line.",
    image: "/images/processing/nut-sorting-long-table-team.jpg",
  },
  {
    title: "Industrial Rotary Cooker",
    caption: "Operators running the motorised stainless rotary cooker used for even roasting across batch production runs.",
    image: "/images/processing/rotary-cooker-operators.jpg",
  },
  {
    title: "High-Bay Pallet Logistics Racking",
    caption: "State-of-the-art warehouse racking system with computerized barcode tracking at our central agro-logistics hub.",
    image: "/images/logistics/highbay-racking-warehouse-logistics.jpg",
  },
  {
    title: "Container Loading & Dispatch",
    caption: "Supervised container loading operations ensuring safe transit for high-capacity regional and global export orders.",
    image: "/images/logistics/loading-bottled-nuts-container.jpg",
  },
  {
    title: "Export-Ready Container Sealed",
    caption: "A fully loaded freight container, sealed and prepared for customs clearance and international dispatch.",
    image: "/images/logistics/sealed-container-gcnu-sacks.jpg",
  },
];

export default function InfrastructurePage() {
  return (
    <main id="main" className="pb-24 pt-32">
      <SectionContainer size="wide">
        <Eyebrow className="mb-5">Our operations</Eyebrow>
        <h1 className="max-w-5xl font-display text-display-1 font-black">
          Building the capacity behind African food.
        </h1>
        <p className="mt-8 max-w-3xl font-sans text-body-lg leading-relaxed text-charcoal-700">
          Our ambition needs more than agricultural supply. It needs
          production infrastructure, people, systems and partnerships to turn
          raw materials into consistent, market-ready food. AcresxManna Ltd
          manufactures and exports from Nigeria; we are building further
          capability as demand, investment and readiness allow.
        </p>
      </SectionContainer>

      <div className="my-20">
        <PatternDivider pattern="woven" thickness="medium" />
      </div>

      <SectionContainer size="wide">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Production and processing",
              status: "Operating today",
              image: "/images/processing/nut-sorting-wide-team.jpg",
              description:
                "AcresxManna Ltd manufactures food products at its factory and headquarters in Moniya, Ibadan. Further production capacity and process improvements are part of our development ambitions.",
            },
            {
              title: "Quality information",
              status: "Built into the work",
              image: "/images/processing/hygienic-nut-sorting-team.jpg",
              description:
                "Quality requirements are product- and market-specific. We confirm specifications and compliance details for each enquiry, and do not publish unverified certification claims.",
            },
            {
              title: "Supply chain and warehousing",
              status: "Operating today",
              image: "/images/logistics/warehouse-racking-branded-sacks.jpg",
              description:
                "Our confirmed locations include the factory and headquarters in Moniya, the Nigerian office in Lagos, and the UK warehouse and office in Hertford.",
            },
            {
              title: "Infrastructure for growth",
              status: "Building next",
              image: "/images/processing/industrial-tilting-cooker-station.jpg",
              description:
                "Planned development includes additional production capacity, more efficient processing and packaging, improved storage and inventory control, and wider product capability.",
            },
          ].map((item, index) => (
            <ScrollReveal
              as="article"
              key={item.title}
              delay={0.05 * index}
              className="group overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card transition duration-300 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm backdrop-blur-sm">
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h2 className="font-display text-heading-2 font-black">
                  {item.title}
                </h2>
                <p className="mt-3 font-sans text-body-md leading-relaxed text-charcoal-700">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Facility Visual Showcase */}
      <SectionContainer size="wide" className="mt-20">
        <div className="mb-10 max-w-3xl">
          <Eyebrow className="mb-4">Inside the facility</Eyebrow>
          <h2 className="font-display text-display-2 font-black">
            Active processing, testing and packaging in Moniya, Ibadan.
          </h2>
          <p className="mt-4 font-sans text-body-lg leading-relaxed text-charcoal-700">
            A glimpse into the daily operations that convert harvested commodities into market-ready, hygienically packaged food products.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" id="facility-gallery">
          {facilityGallery.map((item, index) => (
            <ScrollReveal
              as="figure"
              key={item.title}
              delay={0.04 * index}
              className="group overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 shadow-card transition hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <h3 className="font-display text-heading-3 font-bold text-charcoal-900">
                  {item.title}
                </h3>
                <p className="mt-2 font-sans text-body-sm leading-relaxed text-charcoal-600">
                  {item.caption}
                </p>
              </figcaption>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer size="wide" className="mt-16">
        <div className="grid gap-4 md:grid-cols-3">
          {SITE_LOCATIONS.map(({ label, address }) => (
            <address
              key={label}
              className="rounded-3xl border border-cream-200 bg-white p-6 not-italic shadow-card"
            >
              <Eyebrow className="mb-4">{label}</Eyebrow>
              <p className="font-sans text-body-md leading-relaxed text-charcoal-700">
                {address}
              </p>
            </address>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer className="mt-16 text-center">
        <Button href="/contact?type=visit" variant="primary" size="lg">
          Enquire about visiting
        </Button>
      </SectionContainer>
    </main>
  );
}
