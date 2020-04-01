import {Button} from "react-bootstrap";
import React from "react";
import '../css/todos.css'
import PostForm from "./PostForm";
import PostList from "./PostList";
import FetchedList from "./FetchedList";

export const Todos = () => {
    return (
        <div className="todos-container">
            <div className="row">
                <div className="col">
                    <PostForm/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>Post List</h1>
                    <PostList/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>Fetched List</h1>
                    <FetchedList posts={[]}/>
                </div>
            </div>
        </div>
    );
};