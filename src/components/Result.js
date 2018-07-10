import React, { Component } from "react";
import "./Result.css";

class Result extends Component {
  // strike, ball 갯수 만큼 ● 찍어주기
  // Todo : defaultProps 설정, 함수형 컴포넌트로 변경
  dotCount = inputCount => {
    let dot = "";
    for (let i = 0; i < inputCount; i++) {
      dot += " ●";
    }
    return dot;
  };
  // Todo : finish === true ? render finsish section : render strike & ball styleing
  render() {
    const { value, strike, ball, count, finish } = this.props.input;

    const strikeCount = this.dotCount(strike);
    const ballCount = this.dotCount(ball);

    //! section tag 때문에 flex 깨짐
    return (
      <div className="result">
        <div className="result-count">{count}) </div>
        <div className="result-value">{value}</div>
        {finish ? (
          <section>
            <div className="result-finish">Finish</div>
          </section>
        ) : (
          <section>
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
