import React from 'react';
import './Homerun.css';

const Homerun = reset => {
  console.log(reset);
  return (
    <div className="homerun">
      <span className="title">Homerun!</span>
      <div className="homerun-reset-button" onClick={reset}>
        reset
      </div>
    </div>
  );
};

export default Homerun;
