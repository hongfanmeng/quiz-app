import React from "react";
import { Home, History, Info } from "lucide-react";
import { clsx } from "clsx";
import { useNavigate, useLocation } from "react-router-dom";
export type LayoutProps = {
  children: React.ReactNode;
};

export const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  const tabs = [
    { title: "首頁", icon: Home, path: "/" },
    { title: "過去成績", icon: History, path: "/history" },
    { title: "關於", icon: Info, path: "/about" },
  ];

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <main className="h-full w-screen flex flex-col">
      <div className="flex-1 h-0">{children}</div>
      <div className="flex-0">
        <div className="btm-nav">
          {tabs.map((tab) => (
            <button
              key={tab.path}
              className={clsx(pathname == tab.path && "active text-primary")}
              onClick={() => navigate(tab.path)}
            >
              <tab.icon />
              <span className="btm-nav-label">{tab.title}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};
