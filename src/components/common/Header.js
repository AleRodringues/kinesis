import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <p>Frete grátis para todo o Brasil</p>
            </div>
            <div className="header-main">
                <Link to="/" className="logo">Kinessis</Link>
                <input type="text" placeholder="Pesquise um produto..." className="search-bar" />
                <div className="icons">
                    <Link to="/login" className="icon">Entrar</Link>
                    <Link to="/cart" className="icon">Carrinho</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
