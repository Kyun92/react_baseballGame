import React, { Component } from "react";
import "./Result.css";

class Result extends Component {
  // strike, ball 갯수 만큼 ● 찍어주기
  dotCount = inputCount => {
    let dot = "";
    for (let i = 0; i < inputCount; i++) {
      dot += " ●";
    }
    return dot;
  };
  render() {
    const { value, strike, ball, count, finish } = this.props.input;

    const strikeCount = this.dotCount(strike);
    const ballCount = this.dotCount(ball);
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
  }
}

export default Result;
