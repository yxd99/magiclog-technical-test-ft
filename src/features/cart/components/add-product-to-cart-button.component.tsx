import { useCartStore } from "@/store/cart/cart";
import { Product } from "../interfaces/product";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddProductToCartButtonProps {
  className?: string;
  product: Product;
}

export function AddProductToCartButton({ className = '', product }: AddProductToCartButtonProps) {
  const { addProductToCart, hasInCart } = useCartStore();

  const handleAddProductToCart = () => {
    addProductToCart(product);
    toast.success('Producto agregado al carrito');
  }

  return (
    <Button onClick={handleAddProductToCart} disabled={hasInCart(product.id)} className={cn(className)}>
      <ShoppingCart />
    </Button>
  );
}
