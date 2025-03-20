import { Pencil } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { useUpdateProduct } from "../hooks/use-update-product";
import { type CreateProduct } from "../interfaces/create-product";
import { type Product } from "../interfaces/product";

import { ProductForm } from "./product-form.component";

interface ProductFormProps {
  product: Product;
  className?: string;
}

export function UpdateProductButton({
  product,
  className = "",
}: ProductFormProps) {
  const { mutate: updateProduct, isPending } = useUpdateProduct({
    onSuccess: () => {
      handleCloseModal();
    },
  });

  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSubmit = (values: CreateProduct) => {
    updateProduct({
      productId: product.id,
      product: values,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={cn(className)} onClick={() => setOpen(true)}>
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Editar Producto</DialogTitle>
          <DialogDescription>Editar un producto existente</DialogDescription>
        </DialogHeader>
        <ProductForm
          isPending={isPending}
          initialValues={{
            name: product.name,
            sku: product.sku,
            stock: product.stock,
            price: product.price,
          }}
          onHandleSubmit={handleSubmit}
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full" type="button" variant="secondary">
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
