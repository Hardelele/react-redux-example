import {CREATE_POST, FETCHED_POSTS} from "./types";
import axios from "axios";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return async dispatch => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        dispatch({type: FETCHED_POSTS, payload: response.data})
    }
}