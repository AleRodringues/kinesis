import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartProvider from './components/Cart/CartContext';
import HomePage from './components/Home/HomePage';
import CartPage from './components/Cart/CartPage';
import CheckoutPage from './components/Cart/CheckoutPage';
import ProductDetailPage from './components/Product/ProductDetailPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
