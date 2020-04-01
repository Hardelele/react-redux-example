import React from 'react';
import '../css/header.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className="header-container">
            <NavLink className="nav-link" to="/register" exact>Sign-up</NavLink>
            <NavLink className="nav-link" to="/auth">Sign-in</NavLink>
            <NavLink className="nav-link" to="/todos">Todos</NavLink>
        </div>
    );
};