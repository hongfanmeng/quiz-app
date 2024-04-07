import { loadExam } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, CircleCheck, CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const QuestionPage: React.FC = () => {
  const { subject } = useParams();

  const { data: exam } = useQuery({
    queryKey: ["exam", subject],
    queryFn: () => loadExam(subject!),
    enabled: !!subject,
  });

  const navigate = useNavigate();

  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  const currentQuestion = exam?.questions[currentIdx];
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null);

  // save ans to array when ans change
  useEffect(() => {
    setAnswers((prev) => {
      prev[currentIdx] = currentAnswer;
      return prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAnswer]);

  const next = () => {
    setCurrentAnswer(answers[currentIdx + 1] || null);
    setCurrentIdx((prev) => prev + 1);
  };

  const prev = () => {
    setCurrentAnswer(answers[currentIdx - 1] || null);
    setCurrentIdx((prev) => prev - 1);
  };

  return (
    <div className="h-screen flex flex-col p-4 gap-4 container mx-auto max-w-[1280px]">
      <div className="flex gap-4 relative">
        <button onClick={() => navigate(-1)} className="absolute top-1">
          <ArrowLeft className="text-base-content" />
        </button>
        <span className="font-bold text-xl text-base-content mx-auto lg:text-2xl">
          {exam?.title ?? "加載中..."}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <progress
          className="progress progress-primary h-4 w-full"
          value={currentIdx + 1}
          max={exam?.questions.length}
        ></progress>
        <span className="text-content font-bold">
          {currentIdx + 1}/{exam?.questions.length}
        </span>
      </div>
      {currentQuestion && (
        <div className="p-4 bg-base-100 rounded-2xl flex-1 w-full lg:p-12">
          <div className="flex flex-col gap-12 h-full max-w-[800px] mx-auto">
            <span className="font-bold text-xl lg:text-2xl">
              {currentQuestion.question}
            </span>

            <div className="flex flex-col gap-6">
              {currentQuestion.choices.map((choice, idx) => {
                const letter = "ABCD"[idx];
                const correct = currentQuestion.ans === letter;
                const selected = currentAnswer === letter;
                return (
                  <div
                    key={letter}
                    className={twMerge(
                      "rounded-md flex gap-2 px-6 py-4 items-center shadow-md",
                      "shadow-md border dark:border-none dark:bg-base-content/10",
                      !currentAnswer && "cursor-pointer hover:bg-base-200",
                      selected && !correct && "text-white !bg-red-500",
                      currentAnswer &&
                        letter === currentQuestion.ans &&
                        "!bg-green-500 text-white"
                    )}
                    onClick={() => !currentAnswer && setCurrentAnswer(letter)}
                  >
                    <span className="text-lg font-semibold">{letter}.</span>
                    <span className="text-lg font-semibold">{choice}</span>
                    <div className="flex-grow" />
                    {selected && !correct && <CircleX />}
                    {selected && correct && <CircleCheck />}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4">
              <button
                className="btn text-base"
                disabled={currentIdx == 0}
                onClick={() => prev()}
              >
                上一題
              </button>
              <button
                className="btn text-base btn-primary text-primary-content mb-12"
                disabled={
                  currentIdx == exam!.questions.length - 1 || !currentAnswer
                }
                onClick={() => next()}
              >
                下一題
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
