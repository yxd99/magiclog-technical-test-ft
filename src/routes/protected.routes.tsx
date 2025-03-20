import { Navigate, Outlet } from "react-router";
import { useProfileStore } from "@/store/profile/profile";
import { Paths } from "@/lib/constants/paths";
import { Roles } from "@/features/auth/enums/roles";

interface ProtectedRouteProps {
  allowedRoles: Roles[]; 
}

export default function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { user } = useProfileStore();

  if (!user) {
    return <Navigate to={Paths.HOME} replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={Paths.HOME} replace />;
  }

  return <Outlet />;
}
