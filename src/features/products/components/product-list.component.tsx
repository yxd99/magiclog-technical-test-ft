import { useInView } from "react-intersection-observer";

import { cn } from "@/lib/utils";

import { useProductFilters } from "../hooks/use-product-filters";
import { useProducts } from "../hooks/use-products";

import { ProductCard } from "./product-card.component";

export function ProductList() {
  const { filters } = useProductFilters();
  const { products, handleChangeInView, isFetching } = useProducts(filters);

  const { ref } = useInView({
    threshold: 0.4,
    onChange: handleChangeInView,
  });

  return (
    <div className="w-full">
      <div
        className={cn(
          "grid grid-cols-1 gap-4 m-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        )}
      >
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            ref={products.length - 1 === index ? ref : undefined}
            product={product}
          />
        ))}
        {isFetching ? (
          <div className="flex justify-center">Loading...</div>
        ) : null}
        {!isFetching && products.length === 0 && (
          <div className="flex justify-center">No hay productos</div>
        )}
      </div>
    </div>
  );
}
