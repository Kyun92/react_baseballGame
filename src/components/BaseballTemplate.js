import React from 'react';

const BaseballTemplate = ({ form, children, startGame }) => {
  return (
    <div>
      <h1>baseball</h1>
      <button onClick={startGame}>시작</button>
      {form}
      {children}
    </div>
  );
};

export default BaseballTemplate;
