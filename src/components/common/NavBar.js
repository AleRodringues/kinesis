import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><Link to="/masculino">Masculino</Link></li>
                <li><Link to="/feminino">Feminino</Link></li>
                <li><Link to="/futebol">Futebol</Link></li>
                <li><Link to="/esportes">Esportes</Link></li>
                <li><Link to="/calcados">Calçados</Link></li>
                <li><Link to="/academia">Academia</Link></li>
                <li><Link to="/suplementos">Suplementos</Link></li>
                <li><Link to="/gadgets">Gadgets</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
