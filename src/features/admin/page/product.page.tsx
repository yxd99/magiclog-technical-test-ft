import { AdminProductTable } from "../components/admin-product-table.component";
import { ProductFiltersButton } from "../components/product-filters-button.component";
import { ProductFiltersSidebar } from "../components/product-filters-sidebar.component";

export default function ProductPage() {
  return (<div className="flex flex-col lg:grid lg:grid-cols-[1fr,4fr] gap-4 p-5">
      <ProductFiltersSidebar className="hidden lg:block" />
      <ProductFiltersButton className="lg:hidden" />
      <div>
      <AdminProductTable />
      </div>
    </div>);
}
