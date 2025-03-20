import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Loading from './components/loading';
import { AppSidebar } from './components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { ThemeProvider } from './components/theme-provider';
import PublicRoutes from './routes/public.routes';
import PrivateRoutes from './routes/private.routes';
import { useProfileStore } from './store/profile/profile';

const App: React.FC = () => {
  const { user } = useProfileStore();
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider defaultOpen={false}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            {user ? (
              <>
                <AppSidebar />
                <SidebarTrigger />
                <Routes>
                  <Route path="*" element={<PrivateRoutes />} />
                </Routes>
              </>
            ) : (
              <Routes>
                <Route path="*" element={<PublicRoutes />} />
              </Routes>
            )}
          </Suspense>
        </BrowserRouter>
      </SidebarProvider>
  </ThemeProvider>
  );
};

export default App;
