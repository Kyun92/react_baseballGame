import React, { Component } from "react";
import "./App.css";
import BaseballTemplate from "./components/BaseballTemplate";
import Form from "./components/Form";

class App extends Component {
  state = {
    start: false,
    number: [],
    value: "",
    count: 1,
    input: []
  };
  startGame = () => {
    let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let number = [];
    for (let i = 0; i < 4; i++) {
      var select = Math.floor(Math.random() * list.length);
      number[i] = list.splice(select, 1)[0];
    }
    this.setState({
      number,
      start: !this.state.start // 시작버튼 누르면 리스트 화면 렌더링
    });
    console.log(this.state.number);
  };

  // Form에 input 값 컨트롤
  // todo - 4자리 이상 입력 X, 중복 X
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  // submit
  handleSubmit = e => {
    e.preventDefault();
    this.checkInputData();
    this.setState({
      value: ""
    });
  };
  // input 값과 number 비교하고 state.input에 객체 추가
  checkInputData = () => {
    const { value, count, number, input } = this.state;

    const inputArr = value.split("");
    let strike = 0;
    let ball = 0;

    for (var j = 0; j < 4; j++) {
      for (var k = 0; k < 4; k++) {
        if (number[j] == inputArr[k]) {
          if (j === k) {
            strike++;
          } else {
            ball++;
          }
        }
      }
    }

    this.setState({
      input: input.concat({
        value: value,
        strike: strike,
        ball: ball,
        count: count + 1
      })
    });

    console.log(number);
    if (strike === 4) {
      console.log("홈런!!! " + count + "번 만에 맞추셨습니다");
    } else {
      console.log(`strike : ${strike} ball : ${ball} count : ${count}`);
    }
  };
  // TODO Form에서 엔터키 눌렀을때 페이지 새로고침 안되게 잡아야함
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleSubmit 호출
    if(e.key === 'Enter') {
      this.checkInputData();
    }
  }

  render() {
    const { start, value } = this.state;
    return (
      <BaseballTemplate
        startGame={this.startGame}
        start={start}
        form={
          <Form
            onSubmit={this.handleSubmit}
            value={value}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        }
      />
    );
  }
}

export default App;
