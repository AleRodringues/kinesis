import React from 'react';
import './DiscountOffers.css';

const DiscountOffers = () => {
    const offers = [
        { name: 'Chuteiras', code: 'CHUTE15', discount: '15% OFF' },
        { name: 'Tênis Infantis', code: 'PEZINHO15', discount: '15% OFF' },
        { name: 'Suplementos', code: 'SUPLE15', discount: '15% OFF' },
        { name: 'Tênis', code: 'MAIS15', discount: '15% OFF' }
    ];

    return (
        <div className="discount-offers">
            {offers.map((offer, index) => (
                <div key={index} className="offer">
                    <p>{offer.name}</p>
                    <p>Cupon: {offer.code}</p>
                    <p>{offer.discount}</p>
                    <button>Comprar</button>
                </div>
            ))}
        </div>
    );
};

export default DiscountOffers;
