import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import './Item.css';

const Item = ({ id, title, description, price, pictureUrl, stock }) => {
  const [itemStock, setItemStock] = useState(stock);

  const handleAdd = (quantity) => {
    if (itemStock >= quantity) {
      setItemStock(itemStock - quantity);
      console.log(`Adicionado ${quantity} itens ao carrinho`);
    } else {
      console.log("Estoque insuficiente");
    }
  };

  return (
    <Card className="item" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Preço: R${price}</Card.Text>
        <Card.Text>Estoque disponível: {itemStock}</Card.Text>
        <ItemCount stock={itemStock} initial={1} onAdd={handleAdd} />
        <Button variant="primary" className="mt-2">Mais detalhes</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
