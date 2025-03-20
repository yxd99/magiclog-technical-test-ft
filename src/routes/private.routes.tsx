import { Paths } from '@/lib/constants/paths';
import { Navigate, Outlet } from 'react-router';
import { useProfileStore } from '@/store/profile/profile';

export default function PrivateRoutes() {
  const { user } = useProfileStore();

  if (!user) {
    return <Navigate to={Paths.HOME} replace />;
  }

  return <Outlet />;
}
