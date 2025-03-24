import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/index.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <img src="/src/assets/logo.jpg" alt="Bootstrap" width="60"
                         height="60"/>
                </span>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                            >
                                Strona główna
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/products"
                                className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                            >
                                Produkty
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                            >
                                O nas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                            >
                                Kontakt
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/addperfume"
                                className={({isActive}) => "nav-link" + (isActive ? " active" : "")}
                            >
                                Dodaj produkt
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;