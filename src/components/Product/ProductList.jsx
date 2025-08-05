import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  { id: 1, name: '심플 반팔티', price: 19900, image: 'https://via.placeholder.com/200' },
  { id: 2, name: '청바지', price: 39900, image: 'https://via.placeholder.com/200' },
  { id: 3, name: '스니커즈', price: 59000, image: 'https://via.placeholder.com/200' }
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProductList;
