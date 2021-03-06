import React from 'react';

import './inputField.css';

let lastGeneratedId = 0;

const InputField = (props) => {
  const id = lastGeneratedId++;

  return (
    <span className={`input-field ${props.className || ''}`}>
      <input
        type="text"
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        id={`input-field-${id}`}
      />

      <label htmlFor={`input-field-${id}`} className="input-field-placeholder">
        {props.placeholder}
      </label>

      <div className={`input-field-error${props.error ? ' active' : ''}`}>
        <i className="fas fa-exclamation-triangle error-icon" />
        <div className="error-content">{props.error}</div>
      </div>
    </span>
  );
};

export default InputField;
