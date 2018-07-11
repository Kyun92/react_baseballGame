import React from 'react';
import Result from './Result';

const ResultList = ({ data }) => {
  // TODO 5개 부터는 스크롤, 역방향 렌더링
  const list = data.map(input => <Result key={input.count} input={input} />);
  return <div>{list}</div>;
};

export default ResultList;
