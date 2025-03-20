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

import { useCreateProduct } from "../hooks/use-create-product";
import { type CreateProduct } from "../interfaces/create-product";

import { ProductForm } from "./product-form.component";

export function CreateProductButton() {
  const { mutate: createProduct, isPending } = useCreateProduct({
    onSuccess: () => {
      handleCloseModal();
    },
  });

  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSubmit = (values: CreateProduct) => {
    createProduct(values);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Crear Producto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Crear Producto</DialogTitle>
          <DialogDescription>Crear un nuevo producto</DialogDescription>
        </DialogHeader>
        <ProductForm
          initialValues={{ name: "", sku: "", stock: 0, price: 0 }}
          isPending={isPending}
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
