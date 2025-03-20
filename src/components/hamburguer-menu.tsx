import { Menu } from "lucide-react";
import { Link } from "react-router";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"; 
import { Button } from "@/components/ui/button";
import { Paths } from "@/lib/constants/paths";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface HamburgerMenuProps {
  className?: string;
  variant?: "secondary" | "destructive" | "link" | "default" | "outline" | "ghost" | null | undefined;
  onHandleLogOut?: () => void;
}

export function HamburgerMenu({ className = "", variant = "ghost", onHandleLogOut = () => {} }: HamburgerMenuProps) {
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    onHandleLogOut()
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={variant} className={cn(className)}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 mt-4">
          <Link className="hover:bg-secondary hover:text-primary p-2 rounded-lg" to={Paths.ADMIN_PRODUCTS}>
            Todos los productos
          </Link>
          <Link className="hover:bg-secondary hover:text-primary p-2 rounded-lg" to={Paths.MY_PRODUCTS}>
            Mis productos
          </Link>
          <Button variant={'secondary'} onClick={handleLogOut}>
            Cerrar sesión
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
