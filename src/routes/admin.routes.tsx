import * as React from "react";
import { Route } from "react-router";

import { Roles } from "@/features/auth/enums/roles";
import { Paths } from "@/lib/constants/paths";

import ProtectedRoute from "./protected.routes";

const AdminProductsPage = React.lazy(
  () => import("@/features/admin/page/product.page"),
);

export default function AdminRoutes() {
  return (
    <Route element={<ProtectedRoute allowedRoles={[Roles.ADMIN]} />}>
      <Route element={<AdminProductsPage />} path={Paths.ADMIN_PRODUCTS} />
    </Route>
  );
}
