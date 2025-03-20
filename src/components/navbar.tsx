import { useQueryClient } from "@tanstack/react-query";
import { redirect } from "react-router";

import { Paths } from "@/lib/constants/paths";
import { useProfileStore } from "@/store/profile/profile";

import { AuthActions } from "./auth-actions";
import { HamburgerMenu } from "./hamburguer-menu";

export function Navbar() {
  const { setUser } = useProfileStore();
  const queryClient = useQueryClient();
  const handleLogOut = () => {
    queryClient.clear();
    setUser(null);
    redirect(Paths.HOME);
  };

  return (
    <>
      <HamburgerMenu
        className="hover:rounded-lg hover:bg-secondary hover:text-primary md:hidden"
        onHandleLogOut={handleLogOut}
      />
      <AuthActions onHandleLogOut={handleLogOut} />
    </>
  );
}
