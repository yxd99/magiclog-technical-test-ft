import { CreateProductButton } from "../components/create-product-button.component";
import { ProductFiltersButton } from "../components/product-filters-button.component";
import { ProductFiltersSidebar } from "../components/product-filters-sidebar.component";
import { ProductTable } from "../components/product-table.component";

export default function MyProductsPage() {
  return (<div className="flex flex-col lg:grid lg:grid-cols-[1fr,4fr] gap-4 p-5">
    <ProductFiltersSidebar className="hidden lg:block" />
    <ProductFiltersButton className="lg:hidden" />
    <div>
    <div className="flex justify-end mb-2">
      <CreateProductButton />
    </div>
    <ProductTable />
    </div>
  </div>);
}
