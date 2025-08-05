import React, { useState } from 'react';
import CardNumberInput from './CardNumberInput';
import InputField from './InputField';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [name, setName] = useState('');
  const [cvc, setCvc] = useState('');

  const handleCardNumberChange = (value) => {
    const onlyNumbers = value.replace(/\D/g, '');
    const formatted = onlyNumbers.match(/.{1,4}/g)?.join('-') || '';
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e) => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.length > 4) input = input.slice(0, 4);
    if (input.length > 2) {
      input = input.slice(0, 2) + '/' + input.slice(2);
    }
    setExpiry(input);
  };

  const handleCvcChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    if (input.length <= 3) setCvc(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`등록 완료!\n카드번호: ${cardNumber}\n이름: ${name}\n유효기간: ${expiry}\nCVC: ${cvc}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '30px auto', padding: '20px', background: 'white', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>결제 정보</h2>
      <CardNumberInput value={cardNumber} onChange={handleCardNumberChange} />
      <InputField placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
      <InputField placeholder="유효기간 (MM/YY)" value={expiry} onChange={handleExpiryChange} maxLength={5} />
      <InputField placeholder="CVC" value={cvc} onChange={handleCvcChange} maxLength={3} />
      <button type="submit" style={{ marginTop: '15px', width: '100%', padding: '12px', background: '#3498db', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px' }}>등록</button>
    </form>
  );
};

export default PaymentForm;
