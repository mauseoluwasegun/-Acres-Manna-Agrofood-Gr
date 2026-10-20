export interface Product {
  id: string;
  slug: string;
  name: string;
  varieties?: string[];
  description: string;
  highlights?: string[];
  status?: "Available now" | "Coming soon" | "In development";
  image?: string;
  imageAlt?: string;
  caption?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "garri",
    slug: "garri",
    name: "Garri",
    varieties: ["White", "Ijebu", "Yellow"],
    description:
      "An important staple in many African communities, with opportunities across retail, food service and international African food markets. We process it in white, Ijebu and yellow varieties.",
    highlights: [
      "Three varieties: white, Ijebu and yellow",
      "Available for export",
      "Packed to each client's requirements",
    ],
    status: "Available now",
    image: "/images/logistics/warehouse-racking-branded-sacks.jpg",
    imageAlt: "Garri sacks stored in warehouse for storage and distribution",
    caption: "Bulk packaged commodities under the HappyMan Foods brand at our central processing hub.",
  },
  {
    id: "cassava-flour",
    slug: "cassava-flour",
    name: "Cassava Flour",
    description:
      "A cassava-based flour for home cooking, bakers and food businesses, packed to your requirements.",
    highlights: [
      "Cassava-based flour",
      "For home cooking and food businesses",
      "Packed to each client's requirements",
    ],
    status: "Available now",
    image: "/images/products/happyman-foods-branded-sacks.jpg",
    imageAlt: "Branded cassava flour sacks packaged for distribution",
    caption: "Export-grade flour loaded directly into containers for international dispatch.",
  },
  {
    id: "plantain-flour",
    slug: "plantain-flour",
    name: "Plantain Flour",
    description:
      "A plantain-based flour for home cooking, bakers and food businesses, packed to your requirements.",
    highlights: [
      "Plantain-based flour",
      "For home cooking and food businesses",
      "Packed to each client's requirements",
    ],
    status: "Available now",
    image: "/images/farms/plantain flour 12.png",
    imageAlt: "Close-up of plantain flour with scoop",
    caption: "Plantain flour processed from fresh plantains at our facility.",
  },
  {
    id: "groundnuts-peanuts",
    slug: "groundnuts-peanuts",
    name: "Groundnuts and Peanuts",
    description:
      "A versatile agricultural product with potential as packaged food and as a raw material for further processing. We do not list products such as peanut butter unless commercially available.",
    highlights: [
      "Available for export",
      "Packed to each client's requirements",
      "No unlaunched product extensions are listed",
    ],
    status: "Available now",
    image: "/images/products/bulk-bottled-peanuts-warehouse-stacked.jpg",
    imageAlt: "Bulk packaged groundnuts and peanuts in warehouse",
    caption: "Meticulously roasted and sorted peanuts meeting export quality standards.",
  },
  {
    id: "cashew-nuts",
    slug: "cashew-nuts",
    name: "Cashew Nuts",
    description:
      "A snack and ingredient people love, packed to your requirements.",
    highlights: [
      "Available for export",
      "Suitable for food retail and business enquiries",
      "Packed to each client's requirements",
    ],
    status: "Available now",
    image: "/images/farms/Cashew Harvest from Orchard to Table.png",
    imageAlt: "Cashew nuts and cashew apples harvested from orchard to table",
    caption: "Hand-graded quality assurance to ensure zero impurities.",
  },
  {
    id: "plantain-chips",
    slug: "plantain-chips",
    name: "Plantain Chips",
    description:
      "A familiar, convenient African snack for people looking for enjoyable food. Product enquiries can discuss packaging and distribution requirements.",
    highlights: [
      "Ready-to-eat snack",
      "Retail and wholesale enquiries welcome",
      "Custom packing can be discussed",
    ],
    status: "Available now",
    image: "/images/farms/WhatsApp Image 2026-10-17 at 06.58.05.jpeg",
    imageAlt: "HappyMan Plantain Chips packaged in clear plastic bag",
    caption: "Freshly sliced, crispy plantain chips packed for retail shelves and export.",
  },
  {
    id: "hibiscus-teas",
    slug: "hibiscus-and-teas",
    name: "Hibiscus and Teas",
    description:
      "A recognisable African botanical for teas, infusions and beverages. Contact us to discuss available products and requirements.",
    highlights: [
      "Hibiscus and tea products available for export",
      "For tea, infusion and beverage enquiries",
      "Packed to each client's requirements",
    ],
    status: "Available now",
    image: "/images/products/african-food-king-hibiscus-tea.jpg",
    imageAlt: "African Food King premium herbal tea collection featuring Hibiscus, Ginger, Clove & Cinnamon pyramid tea bags",
    caption: "African Food King herbal tea line, 100% natural and caffeine-free.",
  },
  {
    id: "kuli-kuli",
    slug: "kuli-kuli",
    name: "Kuli Kuli",
    varieties: ["Crunchy Strips", "Spiced Bites"],
    description:
      "An iconic West African crunchy snack crafted from roasted groundnuts, seasoned and crisped to perfection. High in plant protein and packed for retail freshness and export.",
    highlights: [
      "100% premium roasted groundnuts",
      "Available for export",
      "Packed to client requirements in tamper-evident jars",
    ],
    status: "Available now",
    image: "/images/products/packaged-snack-jars-green-lids.jpg",
    imageAlt: "Authentic crunchy Kuli Kuli snack packaged in tamper-evident retail jars with green lids",
    caption: "Freshly roasted, seasoned peanut Kuli Kuli packed in retail-ready jars and wholesale cartons.",
  },
  {
    id: "palm-oil",
    slug: "palm-oil",
    name: "Pure Palm Oil",
    varieties: ["Grade A Culinary", "Bulk Processing Grade"],
    description:
      "Sustainably sourced, pure unrefined red palm oil processed under strict hygienic conditions. Essential for authentic African cooking, food service, and commercial manufacturing.",
    highlights: [
      "Naturally rich in carotenoids and nutrients",
      "Hygienically bottled and sealed for export",
      "Available in retail bottles and bulk industrial packaging",
    ],
    status: "Available now",
    image: "/images/products/palm-oil-bottles-overhead-view.jpg",
    imageAlt: "Overhead view of sealed pure red palm oil bottles ready for distribution and export",
    caption: "Premium pure red palm oil, hygienically bottled and quality-graded for international markets.",
  },
  {
    id: "seasonings-spices",
    slug: "seasonings-and-spices",
    name: "Seasonings and Spices",
    description:
      "A planned range connecting agricultural ingredients with everyday cooking, with a focus on flavour, convenience and consistency. Not yet available.",
    status: "Coming soon",
    image: "/images/farms/Seasoning Coming Soon_ Rustic Spice Still Life (1).png",
    imageAlt: "Rustic spice still life with garlic, chili peppers, peppercorns, curry powder, and fresh herbs on wooden surface",
    caption: "Coming soon: A curated range of premium seasonings and spices connecting agricultural ingredients with everyday cooking.",
  },
];
