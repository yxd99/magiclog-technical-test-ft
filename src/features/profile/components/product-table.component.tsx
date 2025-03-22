import { useInView } from "react-intersection-observer";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

import { useFetchMyProducts } from "../hooks/use-fetch-products";
import { useProductFilters } from "../hooks/use-product-filters";

import { ProductRowItem } from "./product-row-item.component";

interface ProductTableProps {
  className?: string;
}

export function ProductTable({ className = "" }: ProductTableProps) {
  const { filters } = useProductFilters();
  const { products, handleChangeInView, isFetching } =
    useFetchMyProducts(filters);

  const { ref } = useInView({
    threshold: 0.4,
    onChange: handleChangeInView,
  });

  return (
    <Table className={cn("bg-slate-50 rounded-sm", className)}>
      <TableHeader>
        <TableRow>
          <TableHead className="p-4">Nombre</TableHead>
          <TableHead className="p-4 text-center">SKU</TableHead>
          <TableHead className="p-4 text-center">Precio</TableHead>
          <TableHead className="p-4 text-center">Stock</TableHead>
          <TableHead className="p-4 text-center">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, index) => (
          <ProductRowItem
            key={product.id}
            ref={products.length - 1 === index ? ref : undefined}
            showActions
            product={product}
          />
        ))}
        {isFetching ? (
          <TableRow className="p-4">
            <TableCell colSpan={5}>Loading...</TableCell>
          </TableRow>
        ) : null}
        {!isFetching && products.length === 0 && (
          <TableRow className="p-4">
            <TableCell colSpan={5}>No hay productos</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
