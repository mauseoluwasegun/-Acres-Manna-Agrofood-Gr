import { PRODUCTS } from "@/lib/products";

const items = PRODUCTS.filter((product) => product.status === "Available now").map(
  (product) => product.name,
);

export function ProductTicker() {
  return (
    <div
      aria-label={`Products: ${items.join(", ")}`}
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
