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
    <div className="flex flex-col gap-4 p-4 flex-1">
      {exams.map((exam) => (
        <div
          className={clsx(
            "rounded-md shadow-md w-full p-4 bg-neutral",
            exam.disabled && "opacity-30",
            !exam.disabled &&
              "active:bg-base-200 hover:bg-base-100 cursor-pointer"
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
  );
};
