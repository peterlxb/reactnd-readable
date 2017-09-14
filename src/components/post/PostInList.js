import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FaArrowUp from 'react-icons/lib/fa/angle-up'
import FaArrowDown from 'react-icons/lib/fa/angle-down'
import {
  setPostsComments
} from './../../actions'
import * as ReadableAPI from './../../utils/api'
import VoteScore from './VoteScore'

class PostInList extends Component {
  componentWillMount() {
    this.props.setPostsComments(this.props.postId)
  }

  render() {
    const { post ,comments} = this.props

    let postComments = false
    if (comments) {
      if (comments[post.id])
        postComments = comments[post.id].filter(
          comment => comment.deleted === false
        )
    }

    return(
      <div className="post-content">

        <div className="content">

          <VoteScore post={post} />

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
        <div className="category">
        <Link to={'/category/' + post.category} className="tag">
                    {post.category}
        </Link>
        &nbsp;
        {postComments && postComments.length
            ? postComments.length === 1
            ? '1 comment'
            : postComments.length + ' comments'
            : ' 0 comments'}
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
