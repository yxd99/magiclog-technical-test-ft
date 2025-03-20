import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { ProductFiltersSidebar } from "./product-filters-sidebar.component";
import { cn } from "@/lib/utils";

interface ProductFiltersButtonProps {
  className?: string;
}

export function ProductFiltersButton({ className = '' }: ProductFiltersButtonProps) {
  return (
    <div className={cn("flex w-full justify-end border-b-2 border-gray-300 px-4 pb-2", className)}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <SlidersHorizontal />
            Filtros
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <ProductFiltersSidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}