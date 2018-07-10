import React, { Component } from 'react';
import './App.css';
import BaseballTemplate from './components/BaseballTemplate';
import Form from './components/Form';
import ResultList from './components/ResultList';

class App extends Component {
  state = {
    start: false,
    number: [],
    value: '',
    input: [],
    finish : false,
  };
  count = 1;
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
        count: this.count++,
      }),
    });

    // strike가 4개이면 state.finish = true
    if( strike === 4){
      this.setState({
        finish : true
      })
    }
  };

  handleKeyPress = e => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };


  //TODO strike 4개면 맞췄다는 표시

  render() {
    const { start, value, input, finish } = this.state;
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
        <ResultList data={input} count={input.count} finish={finish}/>
      </BaseballTemplate>
    );
  }
}

export default App;
