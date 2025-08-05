import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price.toLocaleString()}원</p>
      <button>장바구니</button>
    </div>
  );
};

export default ProductCard;
