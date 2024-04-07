export type Question = {
  question: string;
  choices: string[];
  ans: string;
};

export type Exam = {
  title: string;
  total: number;
  questions: Question[];
};

export const loadExam = async (subject: string): Promise<Exam> => {
  switch (subject) {
    case "chinese":
      return {
        title: "中國文化常識",
        total: 200,
        questions: await fetch("/exams/chinese.json").then((res) => res.json()),
      };
    default:
      throw new Error("Invalid subject");
  }
};
