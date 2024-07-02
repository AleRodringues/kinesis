import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    return (
        <Card className="item-detail" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Preço: R${item.price}</Card.Text>
                <Button variant="primary">Adicionar ao Carrinho</Button>
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;
