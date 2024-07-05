import React from 'react';
import './TrainingProducts.css';

const TrainingProducts = () => {
    const products = [
        { name: 'Kit 3 Pares de Meias Atoalhadas', price: 'R$ 18,99 no Pix', image: '/path/to/meias.jpg', discount: '42%' },
        { name: 'Tênis Nike Revolution 2 Easy', price: 'R$ 299,99', image: '/path/to/tenis-nike.jpg', discount: '25%' },
        { name: 'Calça Masculina ASICS Tecidos', price: 'R$ 66,49 no Pix', image: '/path/to/calça.jpg', discount: '50%' },
        { name: 'Jaque Feminina Farm sem manga', price: 'R$ 166,24 no Pix', image: '/path/to/jaqueta.jpg', discount: '45%' },
        { name: 'Camiseta Masculina ASICS', price: 'R$ 71,24 no Pix', image: '/path/to/camiseta.jpg', discount: '25%' },
        { name: 'Mala ASICS', price: 'R$ 128,24 no Pix', image: '/path/to/mala.jpg', discount: '48%' }
    ];

    return (
        <div className="training-products">
            <h2>Corrida e treino</h2>
            <div className="products-container">
                {products.map((product, index) => (
                    <div key={index} className="product">
                        <img src={product.image} alt={product.name} />
                        <div className="product-details">
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p>{product.discount}</p>
                            <button>Comprar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrainingProducts;
