import { Route } from "react-router";

import { Roles } from "@/features/auth/enums/roles";
import { MyProductsPage } from "@/features/profile/pages/my-products.page";
import { Paths } from "@/lib/constants/paths";

import { ProtectedRoute } from "./protected.routes";

export function SellerRoutes() {
  return (
    <Route
      element={<ProtectedRoute allowedRoles={[Roles.SELLER, Roles.ADMIN]} />}
    >
      <Route element={<MyProductsPage />} path={Paths.MY_PRODUCTS} />
    </Route>
  );
}
