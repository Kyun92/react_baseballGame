import React, { Component } from 'react';
import Result from './Result';

class ResultList extends Component {
  render() {
    const { data, count } = this.props;
    // TODO 5개 부터는 스크롤, 역방향 렌더링
    const list = data.map(info => <Result key={count} input={info} />);
    return <div>{list}</div>;
  }
}

export default ResultList;
