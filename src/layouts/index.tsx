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
    <main className="h-screen w-full flex flex-col">
      <div className="bg-primary">
        <div className="container max-w-[1280px] mx-auto flex px-6 py-2 items-center">
          <img alt="icon" src="/icon.png" className="w-8 h-8" />
          <a className="font-bold text-2xl text-white ml-4">複習問答</a>
          <div className="flex-1" />
          <img alt="avatar" src="/avatar.png" className="w-10 rounded-full" />
        </div>
      </div>

      <div className="flex-1 h-0 w-full container mx-auto max-w-[1280px]">
        {children}
      </div>

      <div className="bg-base-100">
        <div className="btm-nav relative container mx-auto max-w-[1280px]">
          {tabs.map((tab) => (
            <button
              key={tab.path}
              className={clsx(
                pathname == tab.path && "active text-primary bg-base-200",
                "hover:bg-base-200"
              )}
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
