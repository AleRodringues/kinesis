import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Kinesis Sports. Todos os direitos reservados.</p>
            <div className="footer-links">
                <Link to="/about">Sobre</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/privacy">Política de Privacidade</Link>
            </div>
        </footer>
    );
};

export default Footer;
