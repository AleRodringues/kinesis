import React from 'react';
import { Card } from 'react-bootstrap';
import './Item.css';

const Item = ({ id, title, description, price, pictureUrl }) => {
    return (
        <Card className="item" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Preço: R${price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Item;
