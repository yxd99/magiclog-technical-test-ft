import { Separator } from "@radix-ui/react-separator";

import { AuthModal } from "@/features/auth/components/auth-modal.component";
import { CartButton } from "@/features/cart/components/cart-list.component";
import { useProfileStore } from "@/store/profile/profile";

import { Navbar } from "./navbar";

export function Header() {
  const { user } = useProfileStore();
  return (
    <div className="sticky top-0 z-10 flex items-center justify-end border-b border-b-slate-600 bg-blue-700 p-5 font-bold text-white">
      <CartButton
        className="hover:rounded-lg hover:bg-secondary hover:text-primary"
        variant="ghost"
      />
      <Separator className="h-6 w-px bg-gray-300" />
      {user ? (
        <Navbar />
      ) : (
        <AuthModal
          className="hover:rounded-lg hover:bg-secondary hover:text-primary"
          variant="ghost"
        />
      )}
    </div>
  );
}
