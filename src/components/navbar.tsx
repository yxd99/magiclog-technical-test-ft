import { useLogout } from "@/features/profile/hooks/use-logout";

import { AuthActions } from "./auth-actions";
import { HamburgerMenu } from "./hamburguer-menu";

export function Navbar() {
  const logout = useLogout();
  const handleLogOut = () => {
    logout();
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
