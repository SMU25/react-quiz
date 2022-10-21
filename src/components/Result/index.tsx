import React, { FC } from "react";

interface Props {
  correctCount: number;
  questionsLength: number;
}

const DATA_SALUTE_IMG = {
  url: "https://cdn-icons-png.flaticon.com/512/2278/2278992.png",
  alt: "salute image",
};

const BUTTON_NAME_TRY_AGAIN = "Спробувати знову";

export const Result: FC<Props> = ({ correctCount, questionsLength }) => (
  <div className="result">
    <img src={DATA_SALUTE_IMG.url} alt={DATA_SALUTE_IMG.alt} />
    <h2>
      Ви відповіли вірно на {correctCount} із {questionsLength} відповідей
    </h2>
    <a href="/">
      <button>{BUTTON_NAME_TRY_AGAIN}</button>
    </a>
  </div>
);
