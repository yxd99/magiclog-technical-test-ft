'use client';

import { type Ref, memo, useMemo } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Product } from '../interfaces/product';
import { AddProductToCartButton } from '@/features/cart/components/add-product-to-cart-button.component';

interface ProductCardProps {
  ref?: Ref<HTMLDivElement>;
  className?: string;
  product: Product;
}

export const ProductCard = memo(
  ({ className = '', product, ref }: ProductCardProps) => {
    const memoizedCard = useMemo(
      () => (
        <Card ref={ref} className='size-full overflow-hidden'>
        <CardHeader className='p-0'>
          <div className='relative h-60 w-full border-gray-200 border-b'>
            <img
              src={'https://placehold.co/600x400?text=Product+Image'}
              alt={''}
              className='fill-current object-cover size-full'
            />
            <Badge
              className='absolute top-2 left-2'
              variant={'secondary'}
            >
              {product.stock > 0 ? 'En stock' : 'Agotado'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className='p-4'>
          <div className='flex flex-col items-start'>
            <CardTitle className='text-xl font-bold truncate'>{product.name}</CardTitle>
            <CardDescription className='text-sm text-gray-500'>
              <span>SKU: <small>${product.sku}</small></span>
              <span className='mx-2'>|</span>
              <span>Precio: <small>${product.price}</small></span>
            </CardDescription>
          </div>
          <p className='text-lg'>{''}</p>
        </CardContent>
        <CardFooter className='p-4 pt-0 flex justify-end'>
          <AddProductToCartButton product={product} />
        </CardFooter>
      </Card>
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps -- Not needed
      [],
    );

    return (
      <div className={cn('relative', className)}>
        {memoizedCard}
      </div>
    );
  },
);

ProductCard.displayName = 'ProductCard';