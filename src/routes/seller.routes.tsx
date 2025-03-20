import * as React from "react";
import { Route } from "react-router";

import { Roles } from "@/features/auth/enums/roles";
import { Paths } from "@/lib/constants/paths";

import ProtectedRoute from "./protected.routes";

const MyProducts = React.lazy(
  () => import("@/features/profile/pages/my-products.page"),
);

export default function SellerRoutes() {
  return (
    <Route
      element={<ProtectedRoute allowedRoles={[Roles.SELLER, Roles.ADMIN]} />}
    >
      <Route element={<MyProducts />} path={Paths.MY_PRODUCTS} />
    </Route>
  );
}
