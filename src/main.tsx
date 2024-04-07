import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RootLayout } from "@/layouts";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";

import { HomePage, HistoryPage, AboutPage } from "@/pages";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <RootLayout>
              <Outlet />
            </RootLayout>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
