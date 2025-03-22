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

import { useAdminProducts } from "../hooks/use-admin-products";
import { useProductFilters } from "../hooks/use-product-filters";

import { AdminProductRowItem } from "./admin-product-row-item.component";

interface AdminProductTableProps {
  className?: string;
}

export function AdminProductTable({ className = "" }: AdminProductTableProps) {
  const { filters } = useProductFilters();
  const { products, handleChangeInView, isFetching } =
    useAdminProducts(filters);

  const { ref } = useInView({
    threshold: 0.4,
    onChange: handleChangeInView,
  });

  return (
    <Table className={cn("bg-slate-50 rounded-sm", className)}>
      <TableHeader>
        <TableRow>
          <TableHead className="p-4">Producto</TableHead>
          <TableHead className="p-4 text-center">SKU</TableHead>
          <TableHead className="p-4 text-center">Stock</TableHead>
          <TableHead className="p-4 text-center">Precio</TableHead>
          <TableHead className="p-4 text-center">Dueño</TableHead>
          <TableHead className="p-4 text-center">Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product, index) => (
          <AdminProductRowItem
            key={product.id}
            ref={products.length - 1 === index ? ref : undefined}
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
