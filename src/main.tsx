import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./contexts/UserProvider.tsx";
import { BrowserRouter } from "react-router-dom";


import ThemeProvider from "./contexts/ThemeProvider.tsx";

import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <Toaster
            position="bottom-center"
            reverseOrder={false}
          />
          <App />
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
