/* eslint-disable unicorn/filename-case -- is a named export */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Header } from "./components/header";
import { Loading } from "./components/loading";
import { ThemeProvider } from "./components/theme-provider";
import { AdminRoutes } from "./routes/admin.routes";
import { PrivateRoutes } from "./routes/private.routes";
import { PublicRoutes } from "./routes/public.routes";
import { SellerRoutes } from "./routes/seller.routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route element={<PublicRoutes />} path="*" />
              <Route element={<PrivateRoutes />}>
                {AdminRoutes()}
                {SellerRoutes()}
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

// eslint-disable-next-line import/no-default-export -- is a named export
export default App;
