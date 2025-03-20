import { Route, Routes } from "react-router";

import { ProductPage } from "@/features/admin/page/product.page";

export function PublicRoutes() {
  return (
    <Routes>
      <Route element={<ProductPage />} path="/" />
    </Routes>
  );
}
