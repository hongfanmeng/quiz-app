import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RootLayout } from "@/layouts";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";

import { HomePage, HistoryPage, AboutPage } from "@/pages";
import { QuestionPage } from "@/pages/exam";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
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
          <Route path="/exam/:subject" element={<QuestionPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
