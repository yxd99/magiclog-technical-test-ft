import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { useProductFilters } from "../hooks/use-product-filters";

interface FilterSidebarProps {
  className?: string;
}

export function ProductFiltersSidebar({ className = "" }: FilterSidebarProps) {
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
    <div className={cn("col-span-1", className)}>
      <h2 className="mb-4 border-b border-gray-400 pb-2 text-lg font-bold">
        Filtros
      </h2>

      <div className="my-4">
        <h2>Nombre</h2>
        <Input
          className="w-full"
          defaultValue={filters.name}
          placeholder="Nombre de producto..."
          onChange={(e) => handleFilterChange("name", e.target.value)}
        />
      </div>

      <div className="my-4">
        <h2>SKU</h2>
        <Input
          className="w-full"
          defaultValue={filters.sku}
          placeholder="123ABC"
          onChange={(e) => handleFilterChange("sku", e.target.value)}
        />
      </div>

      <div className="my-4">
        <h2>Nombre del dueño</h2>
        <Input
          className="w-full"
          defaultValue={filters.sku}
          placeholder="Jhon Doe"
          onChange={(e) => handleFilterChange("user_name", e.target.value)}
        />
      </div>

      <div className="my-4">
        <h2>Correo del dueño</h2>
        <Input
          className="w-full"
          defaultValue={filters.sku}
          placeholder="jhon@doe.com"
          onChange={(e) => handleFilterChange("user_email", e.target.value)}
        />
      </div>

      <div className="my-4">
        <h2>Rango de precios</h2>
        <div className="flex gap-2">
          <Input
            className="w-full"
            defaultValue={filters.minPrice}
            placeholder="Mínimo"
            type="number"
            onChange={(e) => handleFilterChange("minPrice", e.target.value)}
          />
          {" - "}
          <Input
            className="w-full"
            defaultValue={filters.maxPrice}
            placeholder="Máximo"
            type="number"
            onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
