import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Paths } from "@/lib/constants/paths";
import { cn } from "@/lib/utils";
import { useProfileStore } from "@/store/profile/profile";

interface HamburgerMenuProps {
  className?: string;
  variant?:
    | "secondary"
    | "destructive"
    | "link"
    | "default"
    | "outline"
    | "ghost"
    | null
    | undefined;
  onHandleLogOut: () => void;
}

export function HamburgerMenu({
  className = "",
  variant = "ghost",
  onHandleLogOut,
}: HamburgerMenuProps) {
  const { isAdmin, isSeller } = useProfileStore();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className={cn(className)} variant={variant}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-2">
          <Link
            to={Paths.HOME}
            className={cn(
              "rounded-lg p-2 hover:bg-secondary hover:text-primary",
            )}
          >
            Inicio
          </Link>
          {isAdmin ? (
            <Link
              className="rounded-lg p-2 hover:bg-secondary hover:text-primary"
              to={Paths.ADMIN_PRODUCTS}
            >
              Todos los productos
            </Link>
          ) : null}
          {isSeller ? (
            <Link
              className="rounded-lg p-2 hover:bg-secondary hover:text-primary"
              to={Paths.MY_PRODUCTS}
            >
              Mis productos
            </Link>
          ) : null}
          <Button variant="secondary" onClick={onHandleLogOut}>
            Cerrar sesión
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
