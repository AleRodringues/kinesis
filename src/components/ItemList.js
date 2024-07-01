import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            {items.map(item => (
                <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    pictureUrl={item.pictureUrl}
                    stock={item.stock}
                />
            ))}
        </div>
    );
};

export default ItemList;
