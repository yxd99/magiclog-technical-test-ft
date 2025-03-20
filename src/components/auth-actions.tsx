import { Roles } from "@/features/auth/enums/roles";
import { Paths } from "@/lib/constants/paths";
import { useProfileStore } from "@/store/profile/profile";
import { LogOut } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface AuthActionsProps {
  onHandleLogOut?: () => void;
}

export function AuthActions({ onHandleLogOut = () => {} }: AuthActionsProps) {
  const { user } = useProfileStore();

  const rolePermissions = useMemo(() => ({
    isAdmin: user?.role === Roles.ADMIN,
    isSeller: user?.role === Roles.SELLER || user?.role === Roles.ADMIN,
  }), [user?.role]);

  return (
    <div className="gap-2 items-center hidden md:flex">
      {rolePermissions.isAdmin && (
        <Link className={cn("hover:bg-secondary hover:text-primary p-2 rounded-lg")} to={Paths.ADMIN_PRODUCTS}>
          Todos los productos
        </Link>
      )}
      {rolePermissions.isSeller && (
        <Link className={cn("hover:bg-secondary hover:text-primary p-2 rounded-lg")} to={Paths.MY_PRODUCTS}>
          Mis productos
        </Link>
      )}
      <button className="hover:bg-secondary hover:text-primary p-2 rounded-lg" onClick={onHandleLogOut}>
        <LogOut />
      </button>
    </div>
  );
}
