import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import Loading from "./components/loading";
import { ThemeProvider } from "./components/theme-provider";
import PublicRoutes from "./routes/public.routes";
import PrivateRoutes from "./routes/private.routes";
import AdminRoutes from "./routes/admin.routes";
import SellerRoutes from "./routes/seller.routes";
import { Header } from "./components/header";

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
                {AdminRoutes()}
                {SellerRoutes()}
              </Route>
            </Routes>
          </React.Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
