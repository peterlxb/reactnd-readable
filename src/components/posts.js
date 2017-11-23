import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link }from 'react-router-dom'
import { deletePosts } from '../actions/posts'
import PostInfo from './PostInfo'

const objectToArray = obj => {
 if (obj) return Object.keys(obj).map(key => obj[key])
 else return []
}


class Posts extends Component {



  render() {
    const {posts} = this.props
    return(
      <div className="readable-posts">
        <PostInfo posts={posts[0]}/>
      </div>
    )
  }
}



export default Posts
