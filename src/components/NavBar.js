// src/components/NavBar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Kinesis</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/masculino">Masculino</Nav.Link>
                        <Nav.Link href="/feminino">Feminino</Nav.Link>
                        <Nav.Link href="/camisetas-de-futebol">Camisetas de Futebol</Nav.Link>
                        <Nav.Link href="/tenis">Tênis</Nav.Link>
                        <Nav.Link href="/academia">Academia</Nav.Link>
                        <Nav.Link href="/suplementos">Suplementos</Nav.Link>
                        <Nav.Link href="/gadgets">Gadgets</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
