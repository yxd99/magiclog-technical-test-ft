import * as React from "react";
import { Route } from "react-router";
import ProtectedRoute from "./protected.routes";
import { Paths } from "@/lib/constants/paths";
import { Roles } from "@/features/auth/enums/roles";

const MyProducts = React.lazy(() => import("@/features/profile/pages/my-products.page"));

export default function SellerRoutes() {
  return (
    <Route element={<ProtectedRoute allowedRoles={[Roles.SELLER, Roles.ADMIN]} />}>
      <Route path={Paths.MY_PRODUCTS} element={<MyProducts />} />
    </Route>
  );
}
