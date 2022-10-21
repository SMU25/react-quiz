import { Question } from "../types/types";

export const questions: Question[] = [
  {
    title: "React - це ... ?",
    variants: ["бібліотека", "фреймворк", "додаток"],
    correct: 0,
  },
  {
    title: "Компонент - це ... ",
    variants: ["додаток", "частина додатку чи сторінки", "тег HTML"],
    correct: 1,
  },
  {
    title: "Що таке JSX?",
    variants: [
      "Це звичайний HTML",
      "Це функція",
      "Це тей же HTML, але з можливістю виконувати JS-код.",
    ],
    correct: 2,
  },
];
