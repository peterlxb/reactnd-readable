import React, { Component } from 'react';

class Post extends Component {



  render() {
    console.log("get post" ,this.props.posts[0])
    return (
      <div>
        <ul>
          {this.props.posts.map((post) => (
            Object.keys(post).map((item) => (
              <li>{item}: {post[item]}</li>
            ))
          ))}
        </ul>
      </div>
    )
  }
}

export default Post
