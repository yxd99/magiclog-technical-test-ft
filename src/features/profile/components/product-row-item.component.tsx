import { memo } from "react";

import { TableCell, TableRow } from "@/components/ui/table";

import { type Product } from "../interfaces/product";

import { DeleteProductButton } from "./delete-product-button.component";
import { UpdateProductButton } from "./update-product-button.component";

interface ProductRowItemProps {
  product: Product;
  showActions?: boolean;
  className?: string;
  ref?: React.Ref<HTMLTableRowElement>;
}

export const ProductRowItem = memo(
  ({
    product,
    showActions = false,
    className = "",
    ref,
  }: ProductRowItemProps) => {
    return (
      <TableRow ref={ref} className={className}>
        <TableCell className="p-4 font-medium">{product.name}</TableCell>
        <TableCell className="p-4">{product.sku}</TableCell>
        <TableCell className="p-4">{product.stock}</TableCell>
        <TableCell className="p-4 text-right">{product.price}</TableCell>
        {showActions ? (
          <TableCell className="p-4 text-right">
            <UpdateProductButton className="rounded-r-none" product={product} />
            <DeleteProductButton
              className="rounded-l-none bg-destructive"
              product={product}
            />
          </TableCell>
        ) : null}
      </TableRow>
    );
  },
);

ProductRowItem.displayName = "ProductItem";
