import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>{product.price.toLocaleString()}원</p>
      <button>장바구니</button>
    </div>
  );
};

export default ProductCard;
