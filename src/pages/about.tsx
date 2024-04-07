import React from "react";
import { Ban } from "lucide-react";

export const AboutPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center gap-2">
        <Ban width={28} height={28} />
        <h1 className="text-2xl font-bold">暫未開放</h1>
      </div>
    </div>
  );
};
