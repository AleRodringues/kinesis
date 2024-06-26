import React from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
    const handleAdd = (quantity) => {
        console.log(`Adicionado ${quantity} itens ao carrinho`);
    };

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <ItemCount stock={10} initial={1} onAdd={handleAdd} />
        </div>
    );
};

export default ItemListContainer;
