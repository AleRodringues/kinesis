import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ categories }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {categories.map((category, index) => (
                    <li key={index} className="breadcrumb-item">
                        <Link to={category.path}>{category.name}</Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
