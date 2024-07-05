import React from 'react';
import './ProductFilter.css';

const ProductFilter = ({ filters, setFilters }) => {
    const handleCategoryChange = (e) => {
        setFilters({ ...filters, category: e.target.value });
    };

    return (
        <div className="product-filter">
            <h4>Filtros</h4>
            <div className="filter-category">
                <label>Categoria</label>
                <select value={filters.category} onChange={handleCategoryChange}>
                    <option value="">Todas</option>
                    <option value="categoria1">Categoria 1</option>
                    <option value="categoria2">Categoria 2</option>
                </select>
            </div>
        </div>
    );
};

export default ProductFilter;
