import React, { Component } from 'react';
import FaArrowUp from 'react-icons/lib/fa/angle-up'
import FaArrowDown from 'react-icons/lib/fa/angle-down'

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
              <form>

                <button>
                <FaArrowUp size={30}/>
                {post.voteScore}
                <FaArrowDown size={30}/>
                </button>
                <button>{post.deleted} DELETE</button>
              </form>
              <div>
                <ul>
                  comment
                </ul>
              </div>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default Post
