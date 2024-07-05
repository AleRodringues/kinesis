import React from 'react';
import Header from '../common/Header';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import './CheckoutPage.css';

const CheckoutPage = () => {
    return (
        <div className="checkout-page">
            <Header />
            <NavBar />
            <div className="checkout-container">
                {/* Formulário de informações de entrega e pagamento */}
            </div>
            <Footer />
        </div>
    );
};

export default CheckoutPage;
