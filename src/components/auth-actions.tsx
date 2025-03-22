import { LogOut } from "lucide-react";
import { Link } from "react-router";

import { Paths } from "@/lib/constants/paths";
import { cn } from "@/lib/utils";
import { useProfileStore } from "@/store/profile/profile";

import { Button } from "./ui/button";

interface AuthActionsProps {
  onHandleLogOut: () => void;
}

export function AuthActions({ onHandleLogOut }: AuthActionsProps) {
  const { isAdmin, isSeller } = useProfileStore();
  return (
    <div className="hidden items-center gap-2 md:flex">
      <Link
        className={cn("hover:bg-secondary hover:text-primary p-2 rounded-lg")}
        to={Paths.HOME}
      >
        Inicio
      </Link>
      {isAdmin ? (
        <Link
          className={cn("hover:bg-secondary hover:text-primary p-2 rounded-lg")}
          to={Paths.ADMIN_PRODUCTS}
        >
          Todos los productos
        </Link>
      ) : null}
      {isSeller ? (
        <Link
          className={cn("hover:bg-secondary hover:text-primary p-2 rounded-lg")}
          to={Paths.MY_PRODUCTS}
        >
          Mis productos
        </Link>
      ) : null}
      <Button
        className="rounded-lg p-2"
        variant="secondary"
        onClick={onHandleLogOut}
      >
        <LogOut />
      </Button>
    </div>
  );
}
