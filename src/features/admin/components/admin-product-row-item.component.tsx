import { memo } from "react";

import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatCurrency } from "@/lib/utils";

import { type Product } from "../interfaces/product";

interface AdminProductRowItemProps {
  product: Product;
  className?: string;
  ref?: React.Ref<HTMLTableRowElement>;
}

export const AdminProductRowItem = memo(
  ({ product, className = "", ref }: AdminProductRowItemProps) => {
    const isDeleted = product.deletedAt !== null;

    return (
      <TableRow ref={ref} className={className}>
        <TableCell className="p-4 font-medium">{product.name}</TableCell>
        <TableCell className="p-4 text-center">
          {isDeleted ? "-" : product.sku}
        </TableCell>
        <TableCell className="p-4 text-center">{product.stock}</TableCell>
        <TableCell className="p-4 text-center">
          {formatCurrency(product.price)}
        </TableCell>
        <TableCell className="p-4 text-center">
          <div className="flex flex-col justify-center">
            <span>{product.user.name}</span>
            <small className="text-sm">({product.user.email})</small>
          </div>
        </TableCell>
        <TableCell className="p-4 text-center">
          <Badge variant={isDeleted ? "destructive" : "default"}>
            {isDeleted ? "Borrado" : "Activo"}
          </Badge>
        </TableCell>
      </TableRow>
    );
  },
);

AdminProductRowItem.displayName = "AdminProductItem";
