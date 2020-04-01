import React from 'react';
import {Button} from "react-bootstrap";
import '../css/auth.css'

export const Auth = () => {
    return (
        <div className="auth-container">
            <Button variant="primary" id="login-button">Login</Button>
        </div>
    );
};
