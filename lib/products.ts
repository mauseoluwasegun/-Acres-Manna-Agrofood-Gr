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
    image: "/images/products/happyman-foods-commodity-sacks.jpg",
    imageAlt: "50kg commercial food commodity bags packaged by HappyMan Foods, a subsidiary of AcresxManna Ltd.",
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
    image: "/images/logistics/container-loading-commodity-sacks.jpg",
    imageAlt: "Logistics team loading export sacks of premium flour into freight containers",
    caption: "Export-grade flour loaded directly into containers for international dispatch.",
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
    image: "/images/logistics/freight-container-truck-dispatch.jpg",
    imageAlt: "Container freight truck loaded to maximum capacity with high-grade agro-commodities",
    caption: "Direct containerized delivery from our processing plant to global ports.",
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
    image: "/images/processing/peanuts-deskinning-grading-table.jpg",
    imageAlt: "Golden roasted peanuts undergoing skin-separation and uniform grading on sanitary tables",
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
    image: "/images/processing/hygienic-nut-sorting-team.jpg",
    imageAlt: "Quality assurance personnel in sterile protective gear hand-sorting freshly roasted nuts",
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
    image: "/images/products/packaged-snacks-jars.jpg",
    imageAlt: "Retail-ready jars of crunchy agro-snacks sealed with tamper-evident lids",
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
    id: "seasonings-spices",
    slug: "seasonings-and-spices",
    name: "Seasonings and Spices",
    description:
      "A planned range connecting agricultural ingredients with everyday cooking, with a focus on flavour, convenience and consistency. Not yet available.",
    status: "Coming soon",
    image: "/images/products/overhead-palm-oil-bottles-array.jpg",
    imageAlt: "Bottled natural oils and seasonings in synchronized formation",
    caption: "Expanding our value-added range with pure natural seasonings and oils.",
  },
];
