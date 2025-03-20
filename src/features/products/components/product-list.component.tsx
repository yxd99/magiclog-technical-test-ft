import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card.component";

export function ProductList() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      stock: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      stock: 20,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      stock: 30,
    },
  ];

  return (
    <div className='w-full'>
      <div
        className={cn('grid grid-cols-1 gap-4 m-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4')}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}

          />
        ))}
      </div>
  </div>
  );
}
