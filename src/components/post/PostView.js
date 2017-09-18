import React, { Component } from 'react'
import Header from './../Header'
import { connect } from 'react-redux'
import { setPostsComments } from './../../actions'
import * as ReadableAPI from './../../utils/api'
import { objectToArray } from '../../utils/utils'
import Post from './Post'


class PostView extends Component{
  componentWillMount() {
    this.props.setPostComments(this.props.postId)
  }

  render() {
    const { posts, comments, postId,categoryUrl ,loadingPosts} = this.props
    let post = false
    let rightCategory = false
    let isActive = true

    if (posts) {
      post = posts.find(post => post.id === postId)
      if (post) {
        if (post.category === categoryUrl) {
             rightCategory = true
          if (post.deleted) isActive = false
        }
      }
    }

    return(
      <div>
        <Header />
        {rightCategory ?
          isActive ?
            <Post post={post} comments={comments} />
            : <section className="hero is-danger">
            <div className="hero-body">
      <div className="container">
  			<div className="container">
          <div className="title">
            <i className="fa fa-exclamation-triangle"></i>
            [Error] This post has been deleted.
          </div>
        </div>
      </div>
    </div>
  </section>
          : !loadingPosts && <div>bad option</div>
        }

      </div>
    )
  }
}

function mapStateToProps(state,props){
  return{
    posts: objectToArray(state.posts),
    comments: state.comments[props.postId],
    loadingPosts: state.postsAreLoading
  }
}

function  mapDispatchToProps(dispatch,ownProps){
  return {
    setPostComments: () =>
      ReadableAPI.getCommentsByPostId(ownProps.postId).then(comments =>
        dispatch(setPostsComments(ownProps.postId,comments))
      )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostView)
