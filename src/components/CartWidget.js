import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={30} />
    </div>
  );
};

export default CartWidget;
