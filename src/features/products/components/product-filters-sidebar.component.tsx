import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type FilterStructure = Record<string, string | undefined>;

interface FilterSidebarProps {
  className?: string;
  filters: FilterStructure;
  setFilters: (filters: FilterStructure) => void;
}

export function ProductFiltersSidebar({
  filters,
  setFilters,
  className = '',
}: FilterSidebarProps) {
  const toggleFilter = (name: string, value: string) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className={cn('col-span-1', className)}>
      <h2 className='font-bold text-lg mb-4 border-b border-gray-400 pb-2'>
        Filters
      </h2>
      <div className="my-4">
        <h2>
          Name
        </h2>
        <Input placeholder='Some...' onBlur={(e) => toggleFilter('name', e.target.value)} className='w-full' />
      </div>
      <div className='my-4'>
        <h2>SKU</h2>
        <Input placeholder='SKU' onBlur={(e) => toggleFilter('sku', e.target.value)} className='w-full' />
      </div>
      <div className='my-4'>
        <h2>Price</h2>
        <Input placeholder='Price' onBlur={(e) => toggleFilter('price', e.target.value)} className='w-full' />
      </div>
      <div className='my-4'>
        <h2>Range of Price</h2>
        <div className='flex gap-2'>
          <Input placeholder='Min Price' onBlur={(e) => toggleFilter('minPrice', e.target.value)} className='w-full' />
          {' - '}
          <Input placeholder='Max Price' onBlur={(e) => toggleFilter('maxPrice', e.target.value)} className='w-full' />
        </div>
      </div>
    </div>
  );
}