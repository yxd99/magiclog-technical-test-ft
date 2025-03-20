'use client';

import { type Ref, memo, useMemo } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  ref?: Ref<HTMLDivElement>;
  className?: string;
}

export const ProductCard = memo(
  ({ className = '', ref }: ProductCardProps) => {

    const handleClick = () => {
      console.log('click')
    }

    const memoizedCard = useMemo(
      () => (
        <Card ref={ref} className='size-full overflow-hidden'>
        <CardHeader className='p-0'>
          <div className='relative h-60 w-full border-gray-200 border-b'>
            <img
              src={'https://placehold.co/600x400?text=Hello+World'}
              alt={''}
              className='fill-current object-cover size-full'
            />
            <Badge
              className='absolute top-2 left-2'
              variant={'secondary'}
            >
              {Math.random() > 0.5 ? 'En stock' : 'Agotado'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className='p-4'>
          <div className='flex justify-between items-start'>
            <CardTitle className='text-xl font-bold truncate'>{'Name'}</CardTitle>
          </div>
          <p className='text-lg'>{''}</p>
        </CardContent>
        <CardFooter className='p-4 pt-0 flex justify-end'>
          <Button onClick={handleClick}>
            <ShoppingCart />
          </Button>
        </CardFooter>
      </Card>
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps -- Not needed
      [],
    );

    return (
      <div className={cn('relative cursor-pointer', className)}>
        {memoizedCard}
      </div>
    );
  },
);

ProductCard.displayName = 'ProductCard';