import React from 'react';

const CardNumberInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="카드 번호 (16자리)"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={19}
      style={{ width: '100%', padding: '10px', marginBottom: '10px', fontSize: '16px' }}
    />
  );
};

export default CardNumberInput;
