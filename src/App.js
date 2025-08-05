import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/Product/ProductList';
import PaymentForm from './components/Payment/PaymentForm';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>쇼핑몰</h2>
        <div>
          <Link to="/" className="nav-link">상품</Link>
          <Link to="/payment" className="nav-link">결제</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/payment" element={<PaymentForm />} />
      </Routes>
    </div>
  );
}

export default App;
