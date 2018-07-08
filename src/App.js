import React, { Component } from 'react';
import './App.css';
import BaseballTemplate from './components/BaseballTemplate';
import Form from './components/Form';

class App extends Component {
  state = {
    start: false,
    number: [],
    value: '',
    count: 1,
    input: [
      {
        inputValue: '',
        strike: 0,
        ball: 0,
        id: 1,
      },
    ],
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
      start: !this.state.start, // 시작버튼 누르면 리스트 화면 렌더링
    });
    console.log(this.state.number);
  };

  // Form에 input 값 컨트롤
  // todo - 4자리 이상 입력 X, 중복 X
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  // submit과 동시에 check 할지, 따로 check 함수 만들지 고민..
  handleSubmit = e => {
    const { value, count, number } = this.state;
    let strike = 0;
    let ball = 0;
    e.preventDefault();
    const inputArr = value.split('');
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
      count: count + 1,
      input: {
        inputValue: value,
      },
      value: '',
    });
    console.log(number);
    if (strike === 4) {
      console.log('홈런!!! ' + count + '번 만에 맞추셨습니다');
    } else {
      console.log(`strike : ${strike} ball : ${ball} count : ${count}`);
    }
  };

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
          />
        }
      />
    );
  }
}

export default App;
