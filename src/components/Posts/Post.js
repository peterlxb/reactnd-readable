import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link }from 'react-router-dom'
import { deletePosts } from '../../actions/posts'
import PostInfo from './PostInfo'

class Posts extends Component {

  render() {
    const {posts} = this.props
    return(
      <div className="readable-posts">
        <PostInfo posts={posts}/>
      </div>
    )
  }
}

export default Posts
