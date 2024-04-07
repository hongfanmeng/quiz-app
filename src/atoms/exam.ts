import { atom } from "jotai";

type ExamRecord = {
  subject: string;
  answers: (string | null)[];
};

const examRecordAtom = atom<ExamRecord[]>([]);

const examReadWriteAtom = atom(
  (get) => get(examRecordAtom),
  (_get, set, record: ExamRecord) =>
    set(examRecordAtom, (prev) => [...prev, record])
);

export { examReadWriteAtom as examRecordAtom };
