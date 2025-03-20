import { TableCell, TableRow } from "@/components/ui/table";
import { memo } from "react";
import { Product } from "../interfaces/product";
import { Badge } from "@/components/ui/badge";

interface AdminProductRowItemProps {
  product: Product;
  className?: string;
  ref?: React.Ref<HTMLTableRowElement>;
}

export const AdminProductRowItem = memo(({ product, className = '', ref }: AdminProductRowItemProps) => {
  const isDeleted = product.deletedAt !== null;
  
  return (
    <TableRow className={className} ref={ref}>
      <TableCell className="font-medium p-4">{product.name}</TableCell>
      <TableCell className="p-4">{isDeleted ? '-' : product.sku}</TableCell>
      <TableCell className="p-4">{product.stock}</TableCell>
      <TableCell className="text-right p-4">{product.price}</TableCell>
      <TableCell className="text-center p-4"><div className="flex flex-col justify-center">
        <span>{product.user.name}</span><small className="text-sm">({product.user.email})</small>
        </div>
        </TableCell>
      <TableCell className="text-right p-4"><Badge variant={isDeleted ? 'destructive' : 'default'}>{isDeleted ? 'Borrado' : 'Activo'}</Badge></TableCell>
    </TableRow>
  );
});

AdminProductRowItem.displayName = 'AdminProductItem';