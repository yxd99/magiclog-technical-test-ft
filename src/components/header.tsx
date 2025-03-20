import { AuthModal } from "@/features/auth/components/auth-modal.component";
import { CartButton } from "@/features/cart/components/cart-list.component";
import { useProfileStore } from "@/store/profile/profile";
import { Separator } from "@radix-ui/react-separator";
import { Navbar } from "./navbar";

export function Header() {
  const { user } = useProfileStore();
  return (<div className='flex justify-end items-center text-font-bold p-5 border-b-slate-600 border-b bg-blue-700 text-white sticky top-0 z-10'>
    <CartButton variant={'ghost'} className="hover:bg-secondary hover:text-primary hover:rounded-lg" />
    <Separator className="h-6 w-px bg-gray-300" />
    {user ? <Navbar /> : <AuthModal variant={'ghost'} className="hover:bg-secondary hover:text-primary hover:rounded-lg" />} 
  </div>)
}
