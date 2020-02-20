import React, { Component } from "react";

import "./styles.css";

import PostsApi from "../../api/posts";
import Post from "../Post";

class PostList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const posts = PostsApi.getPosts();
    this.setState({ posts });
  }

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
