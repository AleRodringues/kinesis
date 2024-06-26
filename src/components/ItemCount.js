import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAdd = () => {
        if (stock > 0 && count <= stock) {
            onAdd(count);
        }
    };

    return (
        <div className="item-count">
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={handleDecrement}>-</Button>
                <span className="count">{count}</span>
                <Button variant="secondary" onClick={handleIncrement}>+</Button>
            </ButtonGroup>
            <Button variant="primary" onClick={handleAdd}>Adicionar ao Carrinho</Button>
        </div>
    );
};

export default ItemCount;
