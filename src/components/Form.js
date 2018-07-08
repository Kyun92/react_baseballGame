import React from 'react';
import './Form.css';
const Form = ({ onSubmit, value, onChange }) => {
  return (
    <form className="form-box">
      <input className="form-input" value={value} onChange={onChange} />
      <div className="form-button" onClick={onSubmit}>
        What?
      </div>
    </form>
  );
};

export default Form;
