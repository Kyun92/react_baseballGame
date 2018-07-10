import React, { Component } from 'react';
import './App.css';
import BaseballTemplate from './components/BaseballTemplate';
import Form from './components/Form';
import ResultList from './components/ResultList';
import Homerun from './components/Homerun';
// Todo Homerun render...

class App extends Component {
  state = {
    // ? 한번 쓰고 안쓰는 start, finish를 state에 보관하는게 맞을까?
    start: false,
    number: [],
    value: '',
    input: [],
    overlap: false,
    homerun: false,
  };
  count = 1;

  // ? 모든 함수를 부모 컴포턴트인 App에 다 넣어야 되는건가?

  startGame = () => {
    let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let number = [];
    for (let i = 0; i < 4; i++) {
      var select = Math.floor(Math.random() * list.length);
      number[i] = list.splice(select, 1)[0];
    }
    this.setState({
      number,
      start: true, // 시작버튼 누르면 리스트 화면 렌더링
    });
  };

  // Form에 input 값 컨트롤, 중복체크
  handleChange = e => {
    this.setState({
      value: e.target.value,
      overlap: this.checkOverlap(e.target.value),
    });
  };

  // input 배열 생성
  handleCreate = e => {
    const { value, overlap } = this.state;
    // ? if문 두개 쓰지 않고 논리연산자로 처리할 수 없나?
    // 중복 or 4자리아닌 경우 정지
    if (value.length !== 4) return;
    if (overlap) return;
    this.checkInputData();
    this.setState({
      value: '',
      overlap: false,
    });
  };
  // input 값과 number 비교하고 state.input에 객체 추가
  checkInputData = () => {
    const { value, number, input } = this.state;
    const inputArr = value.split('');

    let strikeCount = 0;
    let ballCount = 0;
    for (var j = 0; j < 4; j++) {
      for (var k = 0; k < 4; k++) {
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
        finish: strikeCount === 4 ? true : false,
      }),
      homerun: strikeCount === 4 ? true : false,
    });
  };

  handleKeyPress = e => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    const { overlap, value } = this.state;
    if (e.key === 'Enter') {
      // ? if문 두개 쓰지 않고 논리연산자로 처리할 수 없나?
      // 중복 or 4자리아닌 경우 정지
      if (value.length !== 4) return;
      if (overlap) return;
      this.handleCreate();
    }
  };
  //중복 체크 함수
  // ? 1202 처럼 2, 4 번째 중복 체크가 안됌
  checkOverlap = value => {
    const checkArr = value.split('');
    if (checkArr.length < 2) {
      return false;
    }
    for (let i = 0; i < checkArr.length; i++) {
      let temp = checkArr[i];
      for (let j = i + 1; j < checkArr.length; j++) {
        if (temp === checkArr[j]) return true;
      }
    }

    // let result = [];

    // checkArr.forEach(function(element, index) {
    //   if (checkArr.indexOf(element, index + 1) > -1) {
    //     if (result.indexOf(element) !== -1) {
    //       result.push(element);
    //     }
    //   }
    // });
    // if (result.length > 0) {
    //   return false;
    // }
    return false;
  };

  // ? 이게 왜 안돼?
  // ! state reset!
  resetState = () => {
    console.log('reseeeet');
  };

  render() {
    const { start, value, input, overlap, homerun } = this.state;
    return (
      <BaseballTemplate
        startGame={this.startGame}
        start={start}
        checkHomerun={homerun}
        homerun={<Homerun reset={this.resetState} />}
        form={
          <Form
            onCreate={this.handleCreate}
            value={value}
            overlap={overlap}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        }>
        <ResultList data={input} count={input.count} />
      </BaseballTemplate>
    );
  }
}

export default App;
