import React from "react";
import Post from "./Post";

export default ({posts}) => {
    if (!posts.length) {
        return (<h6>Have no posts yet!</h6>);
    }
    return posts.map(post => <Post post={post} key={post}/>);
}