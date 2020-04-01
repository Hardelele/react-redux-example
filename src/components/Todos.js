import {Button} from "react-bootstrap";
import React from "react";
import '../css/todos.css'

export const Todos = () => {
    return (
        <div className="todos-container">
            <Button variant="primary" id="todos-button">todos</Button>
        </div>
    );
};