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
import { useCreateProduct } from '../hooks/use-create-product';
import { CreateProduct } from '../interfaces/create-product';

export function CreateProductButton() {
  const { mutate: createProduct, isPending } = useCreateProduct({
    onSuccess: () => {
      handleCloseModal(); 
    }
  })

  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSubmit = async (values: CreateProduct) => {
    await createProduct(values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Crear Producto</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px]'>
        <DialogHeader>
          <DialogTitle>Crear Producto</DialogTitle>
          <DialogDescription>Crear un nuevo producto</DialogDescription>
        </DialogHeader>
        <ProductForm initialValues={{ name: '', sku: '', stock: 0, price: 0 }} isPending={isPending} onHandleSubmit={handleSubmit} />
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
