import React from 'react';
import './Brands.css';

const Brands = () => {
    const brands = [
        { name: 'Under Armour', logo: '/path/to/under-armour-logo.png' },
        { name: 'Everlast', logo: '/path/to/everlast-logo.png' },
        { name: 'Lacoste', logo: '/path/to/lacoste-logo.png' },
        { name: 'Reebok', logo: '/path/to/reebok-logo.png' },
        { name: 'Spalding', logo: '/path/to/spalding-logo.png' },
        { name: 'Jordan', logo: '/path/to/jordan-logo.png' },
        { name: 'Joma', logo: '/path/to/joma-logo.png' },
        { name: 'Uhlsport', logo: '/path/to/uhlsport-logo.png' },
    ];

    return (
        <div className="brands">
            <h2>Marcas</h2>
            <div className="brands-container">
                {brands.map((brand, index) => (
                    <img key={index} src={brand.logo} alt={brand.name} />
                ))}
            </div>
        </div>
    );
};

export default Brands;
