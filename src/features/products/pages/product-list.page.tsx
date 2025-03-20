import { ProductFiltersButton } from "../components/product-filters-button.component";
import { ProductFiltersSidebar } from "../components/product-filters-sidebar.component";
import { ProductList } from "../components/product-list.component";
import { useProductFilters } from "../hooks/use-product-filters";

export default function ProductListPage() {
  const { filters, setFilters } = useProductFilters();
  return (<div className="flex flex-col lg:grid lg:grid-cols-[1fr,4fr] gap-4 p-5">
  <ProductFiltersSidebar filters={filters} setFilters={setFilters} className="hidden lg:block" />
  <ProductFiltersButton className="lg:hidden" />
  <ProductList />
  </div>);
}