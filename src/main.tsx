import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { Toaster } from "./components/ui/sonner";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- main
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>,
);
