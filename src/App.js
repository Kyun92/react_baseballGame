import React, { Component } from 'react';
import './App.css';
import BaseballTemplate from './components/BaseballTemplate';
import Form from './components/Form';
import ResultList from './components/ResultList';

class App extends Component {
  state = {
    // ? 한번 쓰고 안쓰는 start, finish를 state에 보관하는게 맞을까?
    start: false,
    number: [],
    value: '',
    input: [],
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
      start: !this.state.start, // 시작버튼 누르면 리스트 화면 렌더링
    });
    console.log(this.state.number);
  };

  // Form에 input 값 컨트롤
  // todo - 중복 X
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  // input 배열 생성
  handleCreate = e => {
    this.checkInputData();
    this.setState({
      value: '',
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
        finish :  strikeCount === 4 ? true : false
      }),
    });
  };

  handleKeyPress = e => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };


  //TODO strike 4개면 맞췄다는 표시

  render() {
    const { start, value, input} = this.state;
    return (
      <BaseballTemplate
        startGame={this.startGame}
        start={start}
        form={
          <Form
            onCreate={this.handleCreate}
            value={value}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        }>
        <ResultList data={input} count={input.count}/>
      </BaseballTemplate>
    );
  }
}

export default App;
