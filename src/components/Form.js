import React from 'react';
import './Form.css';
const Form = ({ onCreate, value, onChange, onKeyPress, overlap }) => {
  return (
    <div className="form-box">
      {/* 길이 제한 4, 중복시 input border: red */}
      {/* input styleing */}
      <div className="form-text">{overlap ? 'This' : 'Is it'}</div>
      <input
        className={`form-input ${overlap ? 'overlap' : ''}`}
        value={value}
        onChange={onChange}
        maxLength="4"
        onKeyPress={onKeyPress}
      />
      {overlap ? (
        <span className="form-overlap">overlap !</span>
      ) : (
        <div className="form-button" onClick={onCreate}>
          ?
        </div>
      )}
    </div>
  );
};

export default Form;
