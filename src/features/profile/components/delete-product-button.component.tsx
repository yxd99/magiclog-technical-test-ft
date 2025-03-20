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
import { Trash } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDeleteProduct } from '../hooks/use-delete-product';
import { Product } from '../interfaces/product';
import { Separator } from '@/components/ui/separator';

interface DeleteProductButtonProps {
  product: Product;
  className?: string;
}

export function DeleteProductButton({ product, className = '' }: DeleteProductButtonProps) {
  const { mutate: deleteProduct, isPending } = useDeleteProduct({
    onSuccess: () => {
      handleCloseModal(); 
    }
  })

  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    await deleteProduct(product.id);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className={cn(className)}><Trash /></Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px]'>
        <DialogHeader>
          <DialogTitle>Eliminar Producto</DialogTitle>
          <DialogDescription asChild>
            <div>
              <p>¿Seguro que quieres eliminar este producto?</p>
              <p>Esta acción no se puede deshacer.</p>
              <Separator orientation='horizontal' className='my-2' />
              <p><span className='font-bold'>Nombre:</span><span className='ml-2'>{product.name}</span></p>
              <p><span className='font-bold'>SKU:</span><span className='ml-2'>{product.sku}</span></p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <div className="flex gap-2">
              <Button type='button' variant='destructive' className='w-full' onClick={handleSubmit} disabled={isPending}> 
                Eliminar
              </Button>
              <Button type='button' variant='secondary' className='w-full' disabled={isPending}>
                Cancelar
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
