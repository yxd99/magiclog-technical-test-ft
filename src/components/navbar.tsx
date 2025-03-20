import { Paths } from "@/lib/constants/paths";
import { useProfileStore } from "@/store/profile/profile";
import { useQueryClient } from "@tanstack/react-query";
import { redirect } from "react-router";
import { HamburgerMenu } from "./hamburguer-menu";
import { AuthActions } from "./auth-actions";



export function Navbar() {
  const { setUser } = useProfileStore();
  const queryClient = useQueryClient();
  const handleLogOut = () => {
    queryClient.clear();
    setUser(null);
    redirect(Paths.HOME);
  }

  return (<>
    <HamburgerMenu onHandleLogOut={handleLogOut} className="hover:bg-secondary hover:text-primary hover:rounded-lg md:hidden" />
    <AuthActions onHandleLogOut={handleLogOut} />
  </>)
}
