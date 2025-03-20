import { ProductFiltersButton } from "../components/product-filters-button.component";
import { ProductFiltersSidebar } from "../components/product-filters-sidebar.component";
import { ProductList } from "../components/product-list.component";

export default function ProductListPage() {
  return (<div className="flex flex-col lg:grid lg:grid-cols-[1fr,4fr] gap-4 p-5">
  <ProductFiltersSidebar className="hidden lg:block" />
  <ProductFiltersButton className="lg:hidden" />
  <ProductList />
  </div>);
}