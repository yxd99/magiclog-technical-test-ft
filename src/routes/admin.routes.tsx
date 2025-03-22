import { Route } from "react-router";

import { AdminProductsPage } from "@/features/admin/page/admin-products.page";
import { Roles } from "@/features/auth/enums/roles";
import { Paths } from "@/lib/constants/paths";

import { ProtectedRoute } from "./protected.routes";

export function AdminRoutes() {
  return (
    <Route element={<ProtectedRoute allowedRoles={[Roles.ADMIN]} />}>
      <Route element={<AdminProductsPage />} path={Paths.ADMIN_PRODUCTS} />
    </Route>
  );
}
