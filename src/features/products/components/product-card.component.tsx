"use client";

import { type Ref, memo, useMemo } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddProductToCartButton } from "@/features/cart/components/add-product-to-cart-button.component";
import { cn, formatCurrency } from "@/lib/utils";

import { type Product } from "../interfaces/product";

interface ProductCardProps {
  ref?: Ref<HTMLDivElement>;
  className?: string;
  product: Product;
}

export const ProductCard = memo(
  ({ className = "", product, ref }: ProductCardProps) => {
    const memoizedCard = useMemo(
      () => (
        <Card ref={ref} className="size-full overflow-hidden">
          <CardHeader className="p-0">
            <div className="relative h-60 w-full border-b border-gray-200">
              <img
                alt=""
                className="size-full fill-current object-cover"
                src="https://placehold.co/600x400?text=Product+Image"
              />
              <Badge className="absolute left-2 top-2" variant="secondary">
                {product.stock > 0 ? "En stock" : "Agotado"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex flex-col items-start">
              <CardTitle className="truncate text-xl font-bold">
                {product.name}
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                <span>
                  SKU: <small>{product.sku}</small>
                </span>
                <span className="mx-2">|</span>
                <span>
                  Precio: <small>{formatCurrency(product.price)}</small>
                </span>
              </CardDescription>
            </div>
            <p className="text-lg" />
          </CardContent>
          <CardFooter className="flex justify-end p-4 pt-0">
            <AddProductToCartButton product={product} />
          </CardFooter>
        </Card>
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps -- Not needed
      [],
    );

    return <div className={cn("relative", className)}>{memoizedCard}</div>;
  },
);

ProductCard.displayName = "ProductCard";
