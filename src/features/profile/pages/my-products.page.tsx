import { CreateProductButton } from "../components/create-product-button.component";
import { ProductTable } from "../components/product-table.component";

export default function MyProductsPage() {
  return (<div className="p-5">
    <div className="flex justify-end mb-2">
    <CreateProductButton />
    </div>
    <ProductTable />
  </div>);
}
