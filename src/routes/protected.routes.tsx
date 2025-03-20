import { Navigate, Outlet } from "react-router";

import { type Roles } from "@/features/auth/enums/roles";
import { Paths } from "@/lib/constants/paths";
import { useProfileStore } from "@/store/profile/profile";

interface ProtectedRouteProps {
  allowedRoles: Roles[];
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { user } = useProfileStore();

  if (!user) {
    return <Navigate replace to={Paths.HOME} />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate replace to={Paths.HOME} />;
  }

  return <Outlet />;
}
