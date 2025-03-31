import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/index.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const fetchCartCount = async () => {
            try {
                const response = await axios.get('http://localhost:5000/koszyk');
                setCartCount(response.data.length);
            } catch (err) {
                console.error('Błąd podczas pobierania liczby produktów w koszyku:', err);
            }
        };

        fetchCartCount();
    }, []);

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <span className="navbar-brand d-flex align-items-center">
                    <img 
                        src="/src/assets/logo.jpg" 
                        alt="Logo" 
                        width="60"
                        height="60"
                        className="rounded-circle"
                    />
                </span>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                onClick={() => setIsOpen(false)}
                            >
                                Strona główna
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/products"
                                className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                onClick={() => setIsOpen(false)}
                            >
                                Produkty
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                onClick={() => setIsOpen(false)}
                            >
                                O nas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                onClick={() => setIsOpen(false)}
                            >
                                Kontakt
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/addperfume"
                                className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                onClick={() => setIsOpen(false)}
                            >
                                Dodaj produkt
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/koszyk"
                                className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                                onClick={() => setIsOpen(false)}
                            >
                                Koszyk
                                {cartCount > 0 && (
                                    <span className="badge bg-primary ms-2">{cartCount}</span>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;