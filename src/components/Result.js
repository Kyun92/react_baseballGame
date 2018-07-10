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
  // Todo : finish === true ? render finsish section : render strike & ball
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
        {
          this.props.finish && (<h1> Finish </h1>) 
        }

      </div>
    );
  }
}

export default Result;
