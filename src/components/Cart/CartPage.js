import React from 'react';
import Header from '../common/Header';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import './CartPage.css';

const CartPage = () => {
    return (
        <div className="cart-page">
            <Header />
            <NavBar />
            <div className="cart-container">
                {/* Lista de produtos no carrinho */}
            </div>
            <Footer />
        </div>
    );
};

export default CartPage;
