import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useFetchMyProducts } from "../hooks/use-fetch-products"
import { ProductRowItem } from "./product-row-item.component";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface ProductTableProps {
  className?: string;
}

export const ProductTable = ({ className = '' }: ProductTableProps) => {
  const { products, handleChangeInView } = useFetchMyProducts({});

  const { ref } = useInView({
    threshold: 0.4,
    onChange: handleChangeInView,
  })

  return (
    <Table className={cn('bg-slate-50 rounded-sm', className)}>
      <TableHeader>
        <TableRow>
          <TableHead className="p-4">Nombre</TableHead>
          <TableHead className="p-4">SKU</TableHead>
          <TableHead className="p-4">Precio</TableHead>
          <TableHead className="text-right p-4">Stock</TableHead>
          <TableHead className="text-right p-4">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          products.map((product, index) => (
            <ProductRowItem showActions ref={products.length - 1 === index ? ref : undefined} key={product.id} product={product} />
          ))
        }
      </TableBody>
    </Table>
  )
}
