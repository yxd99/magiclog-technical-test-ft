import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useProductFilters } from '../hooks/use-product-filters';
import { useState, useEffect } from 'react';

interface FilterSidebarProps {
  className?: string;
}

export function ProductFiltersSidebar({ className = '' }: FilterSidebarProps) {
  const { filters, setFilters } = useProductFilters();
  const [tempFilters, setTempFilters] = useState(filters);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilters(tempFilters);
    }, 500);

    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempFilters]);

  const handleFilterChange = (name: string, value: string) => {
    setTempFilters((prev) => ({
      ...prev,
      [name]: value || undefined,
    }));
  };

  return (
    <div className={cn('col-span-1', className)}>
      <h2 className='font-bold text-lg mb-4 border-b border-gray-400 pb-2'>Filtros</h2>

      <div className="my-4">
        <h2>Nombre</h2>
        <Input
          placeholder='Nombre de producto...'
          defaultValue={filters.name}
          onChange={(e) => handleFilterChange('name', e.target.value)}
          className='w-full'
        />
      </div>

      <div className='my-4'>
        <h2>SKU</h2>
        <Input
          placeholder='123ABC'
          defaultValue={filters.sku}
          onChange={(e) => handleFilterChange('sku', e.target.value)}
          className='w-full'
        />
      </div>

      <div className='my-4'>
        <h2>Rango de precios</h2>
        <div className='flex gap-2'>
          <Input
            placeholder='Mínimo'
            defaultValue={filters.minPrice}
            type='number'
            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            className='w-full'
          />
          {' - '}
          <Input
            placeholder='Máximo'
            defaultValue={filters.maxPrice}
            type='number'
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            className='w-full'
          />
        </div>
      </div>
    </div>
  );
}
