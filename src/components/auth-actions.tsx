import { LogOut } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router";

import { Roles } from "@/features/auth/enums/roles";
import { Paths } from "@/lib/constants/paths";
import { cn } from "@/lib/utils";
import { useProfileStore } from "@/store/profile/profile";

interface AuthActionsProps {
  onHandleLogOut?: () => void;
}

export function AuthActions({ onHandleLogOut = () => {} }: AuthActionsProps) {
  const { user } = useProfileStore();

  const rolePermissions = useMemo(
    () => ({
      isAdmin: user?.role === Roles.ADMIN,
      isSeller: user?.role === Roles.SELLER || user?.role === Roles.ADMIN,
    }),
    [user?.role],
  );

  return (
    <div className="hidden items-center gap-2 md:flex">
      {rolePermissions.isAdmin ? (
        <Link
          className={cn("hover:bg-secondary hover:text-primary p-2 rounded-lg")}
          to={Paths.ADMIN_PRODUCTS}
        >
          Todos los productos
        </Link>
      ) : null}
      {rolePermissions.isSeller ? (
        <Link
          className={cn("hover:bg-secondary hover:text-primary p-2 rounded-lg")}
          to={Paths.MY_PRODUCTS}
        >
          Mis productos
        </Link>
      ) : null}
      <button
        className="rounded-lg p-2 hover:bg-secondary hover:text-primary"
        onClick={onHandleLogOut}
      >
        <LogOut />
      </button>
    </div>
  );
}
