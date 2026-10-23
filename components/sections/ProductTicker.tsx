import { getTranslations } from "next-intl/server";
import { PRODUCTS } from "@/lib/products";

const PRODUCT_IDS = PRODUCTS.filter(
  (product) => product.status === "Available now",
).map((product) => product.id);

export async function ProductTicker() {
  const t = await getTranslations("sections.productTicker");
  const tp = await getTranslations("sections.products");
  const items = PRODUCT_IDS.map((id) => tp(`items.${id}.name`));
  return (
    <div
      aria-label={t("ariaLabel", { products: items.join(", ") })}
        role="region"
      className="overflow-hidden border-y border-purple-700/10 bg-purple-700 py-4 text-yellow-400"
    >
      <div aria-hidden="true" className="product-ticker-track flex w-max">
        {[...items, ...items].map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="flex items-center gap-6 px-5 font-display text-heading-2 font-bold"
          >
            {name}
            <span className="text-white/70">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
