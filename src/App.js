import React, { Component } from "react";
import "./App.css";
import BaseballTemplate from "./components/BaseballTemplate";
import Form from "./components/Form";
import ResultList from "./components/ResultList";
import Homerun from "./components/Homerun";

class App extends Component {
  state = {
    number: [],
    value: "",
    input: [],
    overlap: false,
    checkHomerun: false
  };
  // key 값으로 사용
  count = 1;
  // 시작화면 조건
  start = false;

  startGame = () => {
    let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let number = [];
    for (let i = 0; i < 4; i++) {
      var select = Math.floor(Math.random() * list.length);
      number[i] = list.splice(select, 1)[0];
    }
    this.setState({
      number // 시작버튼 누르면 리스트 화면 렌더링
    });
    this.start = true;
  };

  // Form에 input 값 컨트롤, 중복체크
  handleChange = e => {
    const { value } = e.target;
    // ? 이게 최선일까

    if (value.length - 1 === -1) {
      this.setState({
        value
      });
      return;
    } else if (!value[value.length - 1].match(/[0-9]/gi)) {
      return;
    } else {
      this.setState({
        value,
        overlap: this.checkOverlap(value)
      });
    }
  };

  // input 배열 생성
  handleCreate = () => {
    const { value, overlap } = this.state;
    // 중복 or 4자리아닌 경우 정지
    if (overlap || value.length !== 4) return;
    this.checkInputData();
    this.setState({
      value: ""
    });
  };
  // input 값과 number 비교하고 state.input에 객체 추가
  checkInputData = () => {
    const { value, number, input } = this.state;
    const inputArr = value.split("");

    let strikeCount = 0;
    let ballCount = 0;
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (number[j] == inputArr[k]) {
          if (j === k) {
            strikeCount++;
          } else {
            ballCount++;
          }
        }
      }
    }

    this.setState({
      input: input.concat({
        value: value,
        strike: strikeCount,
        ball: ballCount,
        count: this.count++,
        // strike가 4개이면 state.finish = true
        finish: strikeCount === 4 ? true : false
      }),
      checkHomerun: strikeCount === 4 ? true : false
    });
  };

  handleKeyPress = e => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    const { overlap, value } = this.state;

    if (e.key === "Enter") {
      // 중복 or 4자리아닌 경우 정지
      if (overlap || value.length !== 4) return;
      this.handleCreate();
    }
  };
  //중복 체크 함수
  checkOverlap = value => {
    const checkArr = value.split("");
    if (checkArr.length < 2) {
      return false;
    }
    for (let i = 0; i < checkArr.length; i++) {
      let temp = checkArr[i];
      for (let j = i + 1; j < checkArr.length; j++) {
        if (temp === checkArr[j]) return true;
      }
    }
    return false;
  };
  
  // 새로운 number set, state 초기 상태로
  resetState = () => {
    this.startGame();
    this.setState({
      value: "",
      input: [],
      overlap: false,
      checkHomerun: false
    });
    this.count = 1;
  };

  render() {
    const { value, input, overlap, checkHomerun } = this.state;
    return (
      <BaseballTemplate
        startGame={this.startGame}
        start={this.start}
        checkHomerun={checkHomerun}
        homerun={<Homerun reset={this.resetState} />}
        form={
          <Form
            onCreate={this.handleCreate}
            value={value}
            overlap={overlap}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        }
      >
        <ResultList data={input} count={input.count} />
      </BaseballTemplate>
    );
  }
}

export default App;
