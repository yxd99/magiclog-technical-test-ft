import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Loading from './components/loading';
import { ThemeProvider } from './components/theme-provider';
import PublicRoutes from './routes/public.routes';
import PrivateRoutes from './routes/private.routes';
import { Header } from './components/header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Paths } from '@/lib/constants/paths';
import MyProducts from '@/features/profile/pages/my-products.page';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path="*" element={<PublicRoutes />} />
              <Route element={<PrivateRoutes />}>
                <Route path={Paths.MY_PRODUCTS} element={<MyProducts />} />
              </Route>
            </Routes>
          </React.Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
