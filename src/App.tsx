import React, { useState } from "react";
import { Game } from "./components/Game";
import { Result } from "./components/Result";
import { Question } from "./types/types";

import { questions } from "./constants/questions";
import "./index.scss";

function App() {
  const [step, setStep] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);

  const progress = (100 * step) / questions.length;

  const question: Question = questions[step];

  const onClickVariant = (index: number) => {
    setStep((prev) => prev + 1);

    if (index === question.correct) setCorrectCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          progress={progress}
          question={question}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result
          correctCount={correctCount}
          questionsLength={questions.length}
        />
      )}
    </div>
  );
}

export default App;
