import { Product } from "@/features/cart/interfaces/product";

export interface CartActions {
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: string) => void;
  hasInCart: (productId: string) => boolean;
}
