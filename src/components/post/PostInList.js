import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  setPostsComments
} from './../../actions'
import * as ReadableAPI from './../../utils/api'

class PostInList extends Component {
  componentWillMount() {
    this.props.setPostsComments(this.props.postId)
  }

  render() {
    const { post ,comments} = this.props
    return(
      <div className="post-content">
        <div className="content">
          <p>
            <strong>
              {post.author}
            </strong>
            &nbsp; · &nbsp;
            <small>
              {post.timestamp}
            </small>
            <br />
            <Link
              to={'/' + post.category + '/' + post.id}
              className="is-size-4"
              >
              {post.title}
            </Link>
          </p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state,props){
  return {
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch,ownProps){
  return{
    setPostsComments: () => {
      ReadableAPI.getCommentsByPostId(ownProps.post.id).then(comments => {
        dispatch(setPostsComments(ownProps.post.id,comments))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostInList)
