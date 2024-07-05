import React from 'react';
import './OfferOfTheDay.css';

const OfferOfTheDay = () => {
    return (
        <div className="offer-of-the-day">
            <h2>Oferta do dia</h2>
            <div className="offer">
                <img src="/path/to/offer-image.jpg" alt="Oferta do dia" />
                <div className="offer-details">
                    <p>Chuteira de Campo - Neymar Jr. Future Play</p>
                    <p>De R$ 499,99 por R$ 319,99</p>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    );
};

export default OfferOfTheDay;
