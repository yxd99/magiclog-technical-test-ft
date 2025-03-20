import { ShoppingCart } from "lucide-react";
import { memo, useMemo } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart/cart";

import { CartItem } from "./cart-item.components";

interface CartButtonProps {
  className?: string;
  variant?:
    | "secondary"
    | "destructive"
    | "link"
    | "default"
    | "outline"
    | "ghost"
    | null
    | undefined;
}

export const CartButton = memo(
  ({ className, variant = "secondary" }: CartButtonProps) => {
    const { products } = useCartStore();

    const cartProducts = useMemo(
      () => products.map((product) => ({ ...product })),
      [products],
    );

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button className={cn(className)} variant={variant}>
            <ShoppingCart />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-4">
          <SheetHeader>
            <SheetTitle>Mi carrito</SheetTitle>
            <SheetDescription>
              Aquí están los productos que tienes en tu carrito.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <ScrollArea className="h-[75vh] w-full pr-4 md:h-[80vh]">
              {cartProducts.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </ScrollArea>
          </div>
          <SheetFooter className="gap-2">
            <div className="flex w-full flex-col justify-end gap-2 md:flex-row md:items-center md:justify-between">
              <p className="mr-1 text-end lg:text-start">
                Total: ${" "}
                {Intl.NumberFormat("es-EC").format(
                  products.reduce((a, b) => a + b.price, 0),
                )}
              </p>
              <div className="flex justify-end gap-2">
                <SheetClose asChild>
                  <Button variant="secondary">Cerrar</Button>
                </SheetClose>
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
);

CartButton.displayName = "CartButton";
