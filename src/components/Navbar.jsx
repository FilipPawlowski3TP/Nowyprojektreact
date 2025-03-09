import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Moja aplikacja</span>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            >
                                Strona główna
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/posts"
                                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            >
                                Wpisy
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/files"
                                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            >
                                Pliki
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;