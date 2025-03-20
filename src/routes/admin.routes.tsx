import { Route } from "react-router";

import { AdminProductTable } from "@/features/admin/components/admin-product-table.component";
import { Roles } from "@/features/auth/enums/roles";
import { Paths } from "@/lib/constants/paths";

import { ProtectedRoute } from "./protected.routes";

export function AdminRoutes() {
  return (
    <Route element={<ProtectedRoute allowedRoles={[Roles.ADMIN]} />}>
      <Route element={<AdminProductTable />} path={Paths.ADMIN_PRODUCTS} />
    </Route>
  );
}
