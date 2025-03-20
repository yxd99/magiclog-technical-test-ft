import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ProductForm } from './product-form.component';
import { CreateProduct } from '../interfaces/create-product';
import { useUpdateProduct } from '../hooks/use-update-product';
import { Product } from '../interfaces/product';
import { Pencil } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductFormProps {
  product: Product;
  className?: string;
}

export function UpdateProductButton({ product, className = '' }: ProductFormProps) {
  const { mutate: updateProduct, isPending } = useUpdateProduct({
    onSuccess: () => {
      handleCloseModal(); 
    }
  })

  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSubmit = async (values: CreateProduct) => {
    await updateProduct({
      productId: product.id,
      product: values
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className={cn(className)}><Pencil /></Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px]'>
        <DialogHeader>
          <DialogTitle>Editar Producto</DialogTitle>
          <DialogDescription>Editar un producto existente</DialogDescription>
        </DialogHeader>
        <ProductForm initialValues={{ name: product.name, sku: product.sku, stock: product.stock, price: product.price }} isPending={isPending} onHandleSubmit={handleSubmit} /> 
        <DialogFooter>
          <DialogClose asChild>
            <Button type='button' variant='secondary' className='w-full'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
