
import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import { products } from './Data';

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        fetchItems
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar os produtos: ", error);
            });
    }, []);

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
