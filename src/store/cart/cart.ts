import { create } from "zustand";
import { persist } from "zustand/middleware";

import { type Product } from "@/features/cart/interfaces/product";

import { type CartActions } from "./cart-actions.interface";
import { type CartState } from "./cart-state.interface";

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],
      addProductToCart: (product: Product) =>
        set((state) => ({ products: [...state.products, product] })),
      removeProductFromCart: (productId: string) =>
        set((state) => ({
          products: state.products.filter(
            (product) => product.id !== productId,
          ),
        })),
      hasInCart: (productId: string) =>
        get().products.some((product) => product.id === productId),
    }),
    {
      name: btoa("cart"),
      version: Number(import.meta.env.VITE_VERSION_STORE),
    },
  ),
);
