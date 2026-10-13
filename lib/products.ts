export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  badge?: string;
  status?: "Available now" | "Coming soon" | "In development";
  accentColor: "terracotta" | "mango" | "forest" | "indigo";
  ctaLabel?: string;
  origin?: string;
  terroir?: string;
  culturalNote?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "product-01",
    slug: "garri",
    name: "Garri",
    category: "GRAINS & FLOURS",
    description:
      "A staple with global potential, available in white, Ijebu and yellow varieties for retail, food service and diaspora markets.",
    imageUrl: "/images/product-flour.jpg",
    badge: "Available now",
    status: "Available now",
    accentColor: "terracotta",
    origin: "Nigeria · West Africa",
    terroir: "Cassava-growing regions",
    culturalNote: "A staple food with strong local and export appeal",
    ctaLabel: "Request Product Information",
  },
  {
    id: "product-02",
    slug: "cassava-flour",
    name: "Cassava Flour",
    category: "CASSAVA & STAPLES",
    description:
      "A versatile cassava-based flour for home cooking, baking and food businesses, packed to client requirements.",
    imageUrl: "/images/product-cocoa.jpg",
    badge: "Available now",
    status: "Available now",
    accentColor: "forest",
    origin: "Nigeria · West Africa",
    terroir: "Cassava supply regions",
    culturalNote: "Flexible ingredient for food service and retail applications",
    ctaLabel: "Request Product Information",
  },
  {
    id: "product-03",
    slug: "konkote",
    name: "Konkote",
    category: "CASSAVA & STAPLES",
    description:
      "A cassava derivative in flour form, packed to client requirements and suitable for food businesses and wholesale channels.",
    imageUrl: "/images/product-mango.jpg",
    badge: "Available now",
    status: "Available now",
    accentColor: "mango",
    origin: "Nigeria · West Africa",
    terroir: "Cassava processing regions",
    culturalNote: "A flexible ingredient for commercial and culinary applications",
    ctaLabel: "Request Product Information",
  },
  {
    id: "product-04",
    slug: "plantain-chips",
    name: "Plantain Chips",
    category: "SNACKS & READY TO EAT",
    description:
      "A familiar favourite for consumers who want a convenient, enjoyable snack made with dependable production and packaging quality.",
    imageUrl: "/images/product-shea.jpg",
    badge: "Available now",
    status: "Available now",
    accentColor: "forest",
    origin: "Nigeria · West Africa",
    terroir: "Plantain supply regions",
    culturalNote: "Suitable for retail, wholesale and food-service channels",
    ctaLabel: "Request Product Information",
  },
  {
    id: "product-05",
    slug: "groundnuts-peanuts",
    name: "Groundnuts & Peanuts",
    category: "NUTS & INGREDIENTS",
    description:
      "A valuable crop for packaged food and for further processing, with strong potential in both retail and industrial channels.",
    imageUrl: "/images/product-jollof.jpg",
    badge: "Available now",
    status: "Available now",
    accentColor: "terracotta",
    origin: "Nigeria · West Africa",
    terroir: "Groundnut growing regions",
    culturalNote: "Suitable for retail and commercial food applications",
    ctaLabel: "Request Product Information",
  },
  {
    id: "product-06",
    slug: "cashew-nuts",
    name: "Cashew Nuts",
    category: "NUTS & SNACKS",
    description:
      "A snack and ingredient people love, packed to client requirements and suitable for wholesale as well as retail distribution.",
    imageUrl: "/images/product-tea.jpg",
    badge: "Available now",
    status: "Available now",
    accentColor: "indigo",
    origin: "West Africa",
    terroir: "Cashew-growing regions",
    culturalNote: "Flexible ingredient and snack for diverse channels",
    ctaLabel: "Request Product Information",
  },
  {
    id: "product-07",
    slug: "hibiscus-and-teas",
    name: "Hibiscus and Teas",
    category: "BOTANICALS & BEVERAGES",
    description:
      "A recognisable African ingredient for teas and infusions with wider potential across beverage channels.",
    imageUrl: "/images/product-tea.jpg",
    badge: "Available now",
    status: "Available now",
    accentColor: "mango",
    origin: "West Africa",
    terroir: "Botanical growing regions",
    culturalNote: "A strong fit for wellness and beverage ranges",
    ctaLabel: "Request Product Information",
  },
  {
    id: "product-08",
    slug: "seasonings-and-spices",
    name: "Seasonings and Spices",
    category: "FLAVOUR & INGREDIENTS",
    description:
      "Flavour rooted in African food culture, created for convenience, consistency and everyday cooking needs.",
    imageUrl: "/images/product-tea.jpg",
    badge: "Coming soon",
    status: "Coming soon",
    accentColor: "forest",
    origin: "West Africa",
    terroir: "Regional spice and seasoning sources",
    culturalNote: "Planned product line, not yet on sale",
    ctaLabel: "Notify Me",
  },
];
