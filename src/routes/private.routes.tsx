import { Navigate, Outlet } from "react-router";

import { Paths } from "@/lib/constants/paths";
import { useProfileStore } from "@/store/profile/profile";

export function PrivateRoutes() {
  const { user } = useProfileStore();

  if (!user) {
    return <Navigate replace to={Paths.HOME} />;
  }

  return <Outlet />;
}
