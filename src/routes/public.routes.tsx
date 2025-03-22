import { Route, Routes } from "react-router";

import { ProductListPage } from "@/features/products/pages/product-list.page";

export function PublicRoutes() {
  return (
    <Routes>
      <Route element={<ProductListPage />} path="/" />
    </Routes>
  );
}
