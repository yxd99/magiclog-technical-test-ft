import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const ProductPage = lazy(() => import('@/features/products/pages/product-list.page'));

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path='/' element={<ProductPage />} />
      {/* <Route path='login' element={<>Login</>} /> */}
      {/* <Route path='*' element={<Navigate to='/login' replace />} /> */}
    </Routes>
  );
}
