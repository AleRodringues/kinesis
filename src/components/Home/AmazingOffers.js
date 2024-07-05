import React from 'react';
import './AmazingOffers.css';

const AmazingOffers = () => {
    const offers = [
        { category: 'Casual', discount: 'até 60% OFF', image: '/path/to/casual.jpg' },
        { category: 'Acessórios', discount: 'até 55% OFF', image: '/path/to/acessorios.jpg' },
        { category: 'Chuteiras', discount: 'até 55% OFF', image: '/path/to/chuteiras.jpg' },
        { category: 'Suplementos', discount: 'até 60% OFF', image: '/path/to/suplementos.jpg' }
    ];

    return (
        <div className="amazing-offers">
            <h2>Ofertas Imperdíveis</h2>
            <div className="offers-container">
                {offers.map((offer, index) => (
                    <div key={index} className="offer">
                        <img src={offer.image} alt={offer.category} />
                        <div className="offer-details">
                            <p>{offer.category}</p>
                            <p>{offer.discount}</p>
                            <button>Comprar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AmazingOffers;
