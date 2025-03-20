import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useProductFilters } from "../hooks/use-product-filters";
import { AdminProductRowItem } from "./admin-product-row-item.component";
import { useAdminProducts } from "../hooks/use-admin-products";

interface AdminProductTableProps {
  className?: string;
}

export const AdminProductTable = ({ className = '' }: AdminProductTableProps) => {
  const { filters } = useProductFilters();
  const { products, handleChangeInView, isFetching } = useAdminProducts(filters);

  const { ref } = useInView({
    threshold: 0.4,
    onChange: handleChangeInView,
  })

  return (
    <Table className={cn('bg-slate-50 rounded-sm', className)}>
      <TableHeader>
        <TableRow>
          <TableHead className="p-4">Producto</TableHead>
          <TableHead className="p-4">SKU</TableHead>
          <TableHead className="p-4">Stock</TableHead>
          <TableHead className="text-right p-4">Precio</TableHead>
          <TableHead className="text-center p-4">Dueño</TableHead>
          <TableHead className="text-right p-4">Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          products.map((product, index) => (
            <AdminProductRowItem ref={products.length - 1 === index ? ref : undefined} key={product.id} product={product} />
          ))
        }
        {
          isFetching && (<TableRow className="p-4"><TableCell colSpan={5}>Loading...</TableCell></TableRow>)
        }
        {
          !isFetching && products.length === 0 && (<TableRow className="p-4"><TableCell colSpan={5}>No hay productos</TableCell></TableRow>)
        }
      </TableBody>
    </Table>
  )
}
