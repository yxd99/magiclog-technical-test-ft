import { create } from "zustand";
import { CartActions } from "./cart-actions.interface";
import { CartState } from "./cart-state.interface";
import { persist } from "zustand/middleware";
import { Product } from "@/features/cart/interfaces/product";

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>()(
  persist((set, get) => ({
    products: [],
    addProductToCart: (product: Product) => set((state) => ({ products: [...state.products, product] })),
    removeProductFromCart: (productId: string) => set((state) => ({ products: state.products.filter((product) => product.id !== productId) })),
    hasInCart: (productId: string) => get().products.some((product) => product.id === productId),
  }),
  {
    name: btoa('cart'),
    version: Number(import.meta.env.VITE_VERSION_STORE),
  }
));