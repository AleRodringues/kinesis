import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { products } from './data';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundItem = products.find(product => product.id === parseInt(id));
        resolve(foundItem);
      }, 2000);
    });

    fetchItem
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar o item: ", error);
      });
  }, [id]);

  return (
    <div className="item-detail-container">
      {item ? <ItemDetail item={item} /> : <p>Carregando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
