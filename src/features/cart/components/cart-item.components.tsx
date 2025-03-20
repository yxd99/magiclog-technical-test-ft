import { Trash } from "lucide-react";
import { Product } from "../interfaces/product";
import { useCartStore } from "@/store/cart/cart";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export interface CartItemProps {
  product: Product;
}

export function CartItem({ product }: CartItemProps) {
  const { removeProductFromCart } = useCartStore();

  const handleRemoveProduct = () => {
    removeProductFromCart(product.id);
    toast.success('Producto eliminado del carrito');
  }

  return (
    <div
      className="grid grid-cols-[45%,1fr] gap-2 border-b border-gray-300 py-4"
    >
      <div className="w-full">
        <img
          alt={product.name}
          src={'https://placehold.co/600x600?text=Product+Image'}
          className="size-full object-cover"
          height={50}
          width={50}
        />
      </div>
      <div className="flex flex-col">
        <div className="mt-2 flex flex-col items-end justify-between gap-3">
          <p className="text-xl font-bold">{product.name}</p>
          <span className="text-sm">SKU: {product.sku}</span>
          <span className="text-sm">Precio: $ {Intl.NumberFormat('es-EC').format(product.price)}</span>
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