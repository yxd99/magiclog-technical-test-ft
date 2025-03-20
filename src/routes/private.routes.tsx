import { Paths } from '@/lib/constants/paths';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const MyProducts = lazy(() => import('@/features/profile/pages/my-products.page'));

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route path={Paths.MY_PRODUCTS} element={<MyProducts />} />
    </Routes>
  );
}
