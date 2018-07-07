import React from 'react';

const Form = ({ onSubmit, value, onChange }) => {
  return (
    <form>
      <input value={value} onChange={onChange} />
      <button onClick={onSubmit}>What?</button>
    </form>
  );
};

export default Form;
