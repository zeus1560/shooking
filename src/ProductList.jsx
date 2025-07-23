import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const products = [
  {
    id: 1,
    title: "심플 반팔티",
    price: 19900,
    image: "https://via.placeholder.com/200x200.png?text=T-Shirt"
  },
  {
    id: 2,
    title: "청바지",
    price: 39900,
    image: "https://via.placeholder.com/200x200.png?text=Jeans"
  },
  {
    id: 3,
    title: "스니커즈",
    price: 59000,
    image: "https://via.placeholder.com/200x200.png?text=Sneakers"
  }
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
