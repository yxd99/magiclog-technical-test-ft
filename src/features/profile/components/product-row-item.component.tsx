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
      <TableCell className="font-medium">{product.name}</TableCell>
      <TableCell>{product.sku}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell className="text-right">{product.price}</TableCell>
      {showActions && (
        <TableCell className="text-right">
          <UpdateProductButton product={product} className="rounded-r-none" />
          <DeleteProductButton productId={product.id} className="rounded-l-none bg-destructive" />
        </TableCell>
      )}
    </TableRow>
  );
});

ProductRowItem.displayName = 'ProductItem';