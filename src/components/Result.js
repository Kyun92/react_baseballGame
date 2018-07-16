import React from "react";
import "./Result.css";

const Result = ({ input }) => {
  const { strike, ball, finish, value, count } = input;
  // strike, ball 갯수 만큼 ● 찍어주기
  const dotCount = inputCount => {
    let dot = "";
    for (let i = 0; i < inputCount; i++) {
      dot += " ●";
    }
    return dot;
  };
  let strikeCount = dotCount(strike);
  let ballCount = dotCount(ball);

  return (
    <div className={`result ${finish && "finish"}`}>
      <div className="result-count">{count}) </div>
      <div className="result-value">{value}</div>

      {finish ? (
        <section className="result-finish">
          <div>Finish</div>
        </section>
      ) : (
        <section className="result-section-count">
          <div className="result-strike">
            Strike : <span className="strikeCount">{strikeCount}</span>
          </div>
          <div className="result-ball">
            ball : <span className="ballCount">{ballCount}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default Result;
