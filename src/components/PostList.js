import React from "react";
import Post from "./Post";
import {connect} from "react-redux";

const PostList = ({posts}) => {
    if (!posts.length) {
        return (<h6>Have no posts yet!</h6>);
    }
    return posts.map(post => <Post post={post} key={post.id}/>);
};

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
};

export default connect(mapStateToProps, null)(PostList);