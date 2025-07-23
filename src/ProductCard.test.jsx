// src/ProductCard.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  const product = {
    id: 1,
    title: '테스트 상품',
    price: 15000,
    image: 'https://via.placeholder.com/200x200.png?text=Test'
  };

  test('상품 제목, 가격, 이미지가 렌더링되는지 확인', () => {
    render(<ProductCard product={product} />);

    // 상품 제목이 화면에 표시되는지
    expect(screen.getByText('테스트 상품')).toBeInTheDocument();

    // 상품 가격이 화면에 표시되는지 (천 단위 쉼표 주의)
    expect(screen.getByText('15,000원')).toBeInTheDocument();

    // 이미지가 올바른 src로 렌더링되는지
    const image = screen.getByAltText('테스트 상품');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', product.image);
  });
});
