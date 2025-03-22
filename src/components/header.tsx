import { Separator } from "@radix-ui/react-separator";
import { Link } from "react-router";

import { AuthModal } from "@/features/auth/components/auth-modal.component";
import { CartButton } from "@/features/cart/components/cart-list.component";
import { Paths } from "@/lib/constants/paths";
import { useProfileStore } from "@/store/profile/profile";

import { Navbar } from "./navbar";

export function Header() {
  const { user } = useProfileStore();
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-b-slate-600 bg-blue-700 p-5 font-bold text-white">
      <div className="">
        <Link to={Paths.HOME}>MagicLog MartketPlace</Link>
      </div>
      <div className="flex items-center gap-2">
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
    </div>
  );
}
