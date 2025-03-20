import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Loading from './components/loading';
import { ThemeProvider } from './components/theme-provider';
import PublicRoutes from './routes/public.routes';
import PrivateRoutes from './routes/private.routes';
import { useProfileStore } from './store/profile/profile';
import { Header } from './components/header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });


const App: React.FC = () => {
  const { user } = useProfileStore();

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          {user && (
            <>
              <Routes>
                <Route path="*" element={<PrivateRoutes />} />
              </Routes>
            </>
          )}
            <Routes>
              <Route path="*" element={<PublicRoutes />} />
            </Routes>
          
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
  );
};

export default App;
