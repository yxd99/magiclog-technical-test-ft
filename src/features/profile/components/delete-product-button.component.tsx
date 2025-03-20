import { Trash } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { useDeleteProduct } from "../hooks/use-delete-product";
import { type Product } from "../interfaces/product";

interface DeleteProductButtonProps {
  product: Product;
  className?: string;
}

export function DeleteProductButton({
  product,
  className = "",
}: DeleteProductButtonProps) {
  const { mutate: deleteProduct, isPending } = useDeleteProduct({
    onSuccess: () => {
      handleCloseModal();
    },
  });

  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    await deleteProduct(product.id);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={cn(className)} onClick={() => setOpen(true)}>
          <Trash />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Eliminar Producto</DialogTitle>
          <DialogDescription asChild>
            <div>
              <p>¿Seguro que quieres eliminar este producto?</p>
              <p>Esta acción no se puede deshacer.</p>
              <Separator className="my-2" orientation="horizontal" />
              <p>
                <span className="font-bold">Nombre:</span>
                <span className="ml-2">{product.name}</span>
              </p>
              <p>
                <span className="font-bold">SKU:</span>
                <span className="ml-2">{product.sku}</span>
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <div className="flex gap-2">
              <Button
                className="w-full"
                disabled={isPending}
                type="button"
                variant="destructive"
                onClick={handleSubmit}
              >
                Eliminar
              </Button>
              <Button
                className="w-full"
                disabled={isPending}
                type="button"
                variant="secondary"
              >
                Cancelar
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
