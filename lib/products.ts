export interface Product {
  id: string;
  slug: string;
  name: string;
  varieties?: string[];
  description: string;
  highlights?: string[];
  status?: "Available now" | "Coming soon" | "In development";
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
  },
  {
    id: "konkote",
    slug: "konkote",
    name: "Konkote",
    description:
      "A cassava derivative in flour form, packed to your requirements.",
    highlights: [
      "Cassava derivative in flour form",
      "Available for export",
      "Packed to each client's requirements",
    ],
    status: "Available now",
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
  },
  {
    id: "seasonings-spices",
    slug: "seasonings-and-spices",
    name: "Seasonings and Spices",
    description:
      "A planned range connecting agricultural ingredients with everyday cooking, with a focus on flavour, convenience and consistency. Not yet available.",
    status: "Coming soon",
  },
];
