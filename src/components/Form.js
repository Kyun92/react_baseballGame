import React from "react";
import "./Form.css";
const Form = ({ onSubmit, value, onChange, onKeyPress }) => {
  return (
    <form className="form-box">
      {/* 길이 제한 4, 중복시 input border: red */}
      {/* TODO 엔터키 눌렀을때 새로 고침 되는 것 잡아야함 */}
      <input
        className="form-input"
        value={value}
        onChange={onChange}
        maxLength="4"
        onKeyPress={onKeyPress}
      />
      <div className="form-button" onClick={onSubmit}>
        What?
      </div>
    </form>
  );
};

export default Form;
