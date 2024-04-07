import React from "react";
import { LibraryBig, BookA, Sigma } from "lucide-react";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";

const exams = [
  { title: "中國文化常識", icon: LibraryBig, total: 200, key: "chinese" },
  { title: "英文完形填空", icon: BookA, total: 100, disabled: true },
  { title: "一元微積分", icon: Sigma, total: 100, disabled: true },
];

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col">
      <div className="navbar bg-primary px-6 items-center">
        <img alt="icon" src="/icon.png" className="w-8 h-8" />
        <a className="font-bold text-2xl text-white ml-4">複習問答</a>
        <div className="flex-1" />
        <img alt="avatar" src="/avatar.png" className="w-10 rounded-full" />
      </div>
      <div className="flex flex-col gap-4 p-4 flex-1">
        {exams.map((exam) => (
          <div
            className={clsx(
              "rounded shadow-md w-full p-4 bg-base-100 ",
              exam.disabled && "opacity-50",
              !exam.disabled && "active:bg-base-200"
            )}
            onClick={() => !exam.disabled && navigate(`/exam/${exam.key}`)}
          >
            <div className="flex items-center gap-4">
              <exam.icon width={36} height={36} strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{exam.title}</span>
                <span>共 {exam.total} 題</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
