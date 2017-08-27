import React, { Component } from 'react';

class Post extends Component {



  render() {
    const { posts } = this.props
    console.log("get post" ,posts)

    return (
      <div>
        <ul>
          {posts.map((post) => (
            <div className="Post-Area" key={post.id}>
              <h2 className="Post-title">{post.title}</h2>
              <div className="Post-Body">
                {post.body}
              </div>
              <p>{post.category}</p>
              <h3>{post.author} : <span>{Date.now()}</span></h3>
              <button>{post.voteScore}</button>
              <button>{post.deleted}</button>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default Post
