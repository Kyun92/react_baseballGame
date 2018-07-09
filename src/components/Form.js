import React from "react";
import "./Form.css";
const Form = ({ onCreate, value, onChange, onKeyPress }) => {
  return (
    <div className="form-box">
      {/* 길이 제한 4, 중복시 input border: red */}
      {/* input styleing */}
      <input
        className="form-input"
        value={value}
        onChange={onChange}
        maxLength="4"
        onKeyPress={onKeyPress}
      />
      <div className="form-button" onClick={onCreate}>
        What?
      </div>
    </div>
  );
};

export default Form;
