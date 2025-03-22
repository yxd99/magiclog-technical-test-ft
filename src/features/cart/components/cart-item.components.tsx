import { Trash } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/cart/cart";

import { type Product } from "../interfaces/product";

export interface CartItemProps {
  product: Product;
}

export function CartItem({ product }: CartItemProps) {
  const { removeProductFromCart } = useCartStore();

  const handleRemoveProduct = () => {
    removeProductFromCart(product.id);
    toast.success("Producto eliminado del carrito");
  };

  return (
    <div className="grid grid-cols-[45%,1fr] gap-2 border-b border-gray-300 py-4">
      <div className="w-full">
        <img
          alt={product.name}
          className="size-full object-cover"
          height={50}
          src="https://placehold.co/600x600?text=Product+Image"
          width={50}
        />
      </div>
      <div className="flex flex-col">
        <div className="mt-2 flex flex-col items-end justify-between gap-3">
          <p className="text-xl font-bold">{product.name}</p>
          <span className="text-sm">SKU: {product.sku}</span>
          <span className="text-sm">
            Precio: $ {formatCurrency(product.price)}
          </span>
          <div>
            <Button
              className=""
              variant="destructive"
              onClick={handleRemoveProduct}
            >
              <Trash />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
