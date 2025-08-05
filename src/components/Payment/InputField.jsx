import React from 'react';

const InputField = ({ placeholder, value, onChange, maxLength }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      style={{ width: '100%', padding: '10px', marginBottom: '10px', fontSize: '16px' }}
    />
  );
};

export default InputField;
