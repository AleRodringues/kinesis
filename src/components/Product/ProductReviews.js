import React, { useState } from 'react';
import './ProductReviews.css';

const ProductReviews = ({ reviews }) => {
    const [newReview, setNewReview] = useState('');
    const [newRating, setNewRating] = useState(0);

    const handleAddReview = () => {
        // Lógica para adicionar uma nova avaliação
    };

    return (
        <div className="product-reviews">
            <h3>Avaliações</h3>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <div>{'⭐'.repeat(review.rating)}</div>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
            <div className="add-review">
                <h4>Adicionar Avaliação</h4>
                <select
                    value={newRating}
                    onChange={(e) => setNewRating(parseInt(e.target.value, 10))}
                >
                    <option value={0}>Selecione uma Avaliação</option>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                            {num} Estrela{num > 1 ? 's' : ''}
                        </option>
                    ))}
                </select>
                <textarea
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Escreva seu comentário"
                />
                <button onClick={handleAddReview}>Adicionar Avaliação</button>
            </div>
        </div>
    );
};

export default ProductReviews;
