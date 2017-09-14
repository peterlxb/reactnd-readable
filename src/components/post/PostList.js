import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostInList from './PostInList'
import { objectToArray } from '../../utils/utils'

class PostList extends Component {
  render() {
    const { posts } = this.props
    return(
      <div>
        <h3 className="title"></h3>
        <div>
          {console.log(posts)}
          {posts.length > 0 &&
            posts.map((post, index) =>
            <PostInList
              post={post}
              key={index}
            />
          )}
        </div>
      </div>
    )
  }
}



export default PostList
