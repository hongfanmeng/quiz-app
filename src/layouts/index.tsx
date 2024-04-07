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
    <main className="h-screen w-full flex flex-col bg-base-300">
      <div className="flex-1 h-0 w-full">{children}</div>
      <div className="btm-nav relative">
        {tabs.map((tab) => (
          <button
            key={tab.path}
            className={clsx(
              pathname == tab.path && "active text-primary bg-base-200"
            )}
            onClick={() => navigate(tab.path)}
          >
            <tab.icon />
            <span className="btm-nav-label">{tab.title}</span>
          </button>
        ))}
      </div>
    </main>
  );
};
