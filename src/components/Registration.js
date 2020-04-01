import React from 'react';
import {Button} from "react-bootstrap";
import '../css/registration.css'

export const Registration = () => {
    return (
        <div className="registration-container">
            <Button variant="primary" id="register-button">Register</Button>
        </div>
    );
};
