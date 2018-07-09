import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  // strike, ball 갯수 만큼 ● 찍어주기
  dotCount = inputCount => {
    let dot = '';
    for (let i = 0; i < inputCount; i++) {
      dot += ' ●';
    }
    return dot;
  };

  render() {
    const { value, strike, ball, count } = this.props.input;

    const strikeCount = this.dotCount(strike);
    const ballCount = this.dotCount(ball);

    console.log(strikeCount);
    return (
      <div className="result">
        <div className="result-count">{count}) </div>
        <div className="result-value">{value}</div>
        <div className="result-strike">
          Strike : <span className="strikeCount">{strikeCount}</span>
        </div>
        <div className="result-ball">
          ball : <span className="ballCount">{ballCount}</span>
        </div>
      </div>
    );
  }
}

export default Result;
