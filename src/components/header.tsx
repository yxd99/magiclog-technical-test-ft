import { AuthModal } from "@/features/auth/components/auth-modal.component";
import { Roles } from "@/features/auth/enums/roles";
import { Paths } from "@/lib/constants/paths";
import { useProfileStore } from "@/store/profile/profile";
import { LogOut } from "lucide-react";
import { Link, redirect } from "react-router";

function AuthActions() {
  const { setUser, user } = useProfileStore();
  const handleLogOut = () => {
    setUser(null);
    redirect(Paths.HOME);
  }

  return (<div className="flex gap-2 items-center">
    {user?.role === Roles.ADMIN && (
    <Link to={'#'}>Todos los productos</Link>
    )}
    {user?.role === Roles.SELLER && (
    <Link to={Paths.MY_PRODUCTS}>Mis productos</Link>
    )}
    <Link to={'#'} onClick={handleLogOut}><LogOut /></Link>
  </div>)
}

export function Header() {
  const { user } = useProfileStore();
  return (<div className='flex justify-end text-font-bold p-5 border-b-slate-600 border-b bg-blue-700 text-white sticky top-0 z-10'>
      {user ? <AuthActions /> : <AuthModal />} 
    </div>)
}
