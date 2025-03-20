import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart/cart";

import { type Product } from "../interfaces/product";

interface AddProductToCartButtonProps {
  className?: string;
  product: Product;
}

export function AddProductToCartButton({
  className = "",
  product,
}: AddProductToCartButtonProps) {
  const { addProductToCart, hasInCart } = useCartStore();

  const handleAddProductToCart = () => {
    addProductToCart(product);
    toast.success("Producto agregado al carrito");
  };

  return (
    <Button
      className={cn(className)}
      disabled={hasInCart(product.id)}
      onClick={handleAddProductToCart}
    >
      <ShoppingCart />
    </Button>
  );
}
