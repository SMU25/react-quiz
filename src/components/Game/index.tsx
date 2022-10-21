import React, { useState, useCallback, FC } from "react";
import { Question } from "src/types/types";

interface Props {
  progress: number;
  question: Question;
  onClickVariant: (index: number) => void;
}

export const Game: FC<Props> = ({ progress, question, onClickVariant }) => {
  const { title, variants, correct } = question;

  const [currentVariant, setCurrentVariant] = useState<number>(null);

  const onClickAnswer = useCallback(
    (index: number) => {
      setCurrentVariant(index);
      setTimeout(() => {
        onClickVariant(index);
        setCurrentVariant(null);
      }, 500);
    },
    [onClickVariant]
  );

  const styleProgress = { width: `${progress}%` };

  return (
    <>
      <div className="progress">
        <div style={styleProgress} className="progress__inner"></div>
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map((answer: string, index) => (
          <li
            style={{
              background:
                index === currentVariant &&
                (index === correct ? "green" : "red"),
            }}
            onClick={() => onClickAnswer(index)}
            key={answer}
          >
            {answer}
          </li>
        ))}
      </ul>
    </>
  );
};
