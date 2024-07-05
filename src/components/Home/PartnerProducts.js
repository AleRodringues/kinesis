import React from 'react';
import './PartnerProducts.css';

const PartnerProducts = () => {
    const products = [
        { name: 'Calção Poker Male - Masculina', price: 'R$ 24,99', image: '/path/to/calçao.jpg', discount: '60%' },
        { name: 'Tênis Olympikus Eros - Adulto', price: 'R$ 199,99', image: '/path/to/tenis.jpg', discount: '50%' },
        { name: 'Bermuda Fila Fit Life Long - Feminina', price: 'R$ 68,34', image: '/path/to/bermuda.jpg', discount: '45%' },
        { name: 'Top Fitness com Bojo Olympikus - Feminino', price: 'R$ 139,99', image: '/path/to/top.jpg', discount: '30%' },
        { name: 'Chuteira Society Umbro Neo Swerve - Infantil', price: 'R$ 123,99', image: '/path/to/chuteira.jpg', discount: '38%' }
    ];

    return (
        <div className="partner-products">
            <h2>Produtos Parceiros</h2>
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

export default PartnerProducts;
