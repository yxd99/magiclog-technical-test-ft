import * as React from "react";
import { Route } from "react-router";
import ProtectedRoute from "./protected.routes";
import { Paths } from "@/lib/constants/paths";
import { Roles } from "@/features/auth/enums/roles";

const AdminProductsPage = React.lazy(() => import("@/features/admin/page/product.page"));

export default function AdminRoutes() {
  return (
    <Route element={<ProtectedRoute allowedRoles={[Roles.ADMIN]} />}>
      <Route path={Paths.ADMIN_PRODUCTS} element={<AdminProductsPage />} />
    </Route>
  );
}
