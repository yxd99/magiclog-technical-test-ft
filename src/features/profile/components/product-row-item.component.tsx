import { TableCell, TableRow } from "@/components/ui/table";
import { memo } from "react";
import { Product } from "../interfaces/product";
import { UpdateProductButton } from "./update-product-button.component";
import { DeleteProductButton } from "./delete-product-button.component";

interface ProductRowItemProps {
  product: Product;
  showActions?: boolean;
  className?: string;
  ref?: React.Ref<HTMLTableRowElement>;
}

export const ProductRowItem = memo(({ product, showActions = false, className = '', ref }: ProductRowItemProps) => {
  return (
    <TableRow className={className} ref={ref}>
      <TableCell className="font-medium p-4">{product.name}</TableCell>
      <TableCell className="p-4">{product.sku}</TableCell>
      <TableCell className="p-4">{product.stock}</TableCell>
      <TableCell className="text-right p-4">{product.price}</TableCell>
      {showActions && (
        <TableCell className="text-right p-4">
          <UpdateProductButton product={product} className="rounded-r-none" />
          <DeleteProductButton product={product} className="rounded-l-none bg-destructive" />
        </TableCell>
      )}
    </TableRow>
  );
});

ProductRowItem.displayName = 'ProductItem';