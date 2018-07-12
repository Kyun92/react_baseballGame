import React, { Component } from 'react';
import './App.css';
import BaseballTemplate from './components/BaseballTemplate';
import Form from './components/Form';

// start
class App extends Component {
  state = {
    number: [],
    input: '',
    count: 1,
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
    });
  };

  handleChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = e => {
    const { input, count, number } = this.state;
    let strike = 0;
    let ball = 0;
    e.preventDefault();
    const inputArr = input.split('');
    console.log(number);
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
      input: '',
      count: count + 1,
    });

    if (strike === 4) {
      console.log('홈런!!! ' + count + '번 만에 맞추셨습니다');
    } else {
      console.log(`strike : ${strike} ball : ${ball} count : ${count}`);
    }
  };

  render() {
    return (
      <BaseballTemplate
        startGame={this.startGame}
        form={
          <Form
            onSubmit={this.handleSubmit}
            value={this.state.input}
            onChange={this.handleChange}
          />
        }
      />
    );
  }
}

export default App;
