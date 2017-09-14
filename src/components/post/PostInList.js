import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FaArrowUp from 'react-icons/lib/fa/angle-up'
import FaArrowDown from 'react-icons/lib/fa/angle-down'
import {
  setPostsComments,
  displayDeleteModal,
  setPostIdToDeleteModal
} from './../../actions'
import * as ReadableAPI from './../../utils/api'
import VoteScore from './VoteScore'
import { objectToArray } from '../../utils/utils'
import DeletePost from './DeletePost'

class PostInList extends Component {
  componentWillMount() {
    this.props.setPostsComments(this.props.postId)
  }

  render() {
    const { post ,
      comments,
      deletePostModal,
      displayDeleteModal,
      setPostIdToDeleteModal} = this.props

    let postComments = false
    if (comments) {
      if (comments[post.id])
        postComments = comments[post.id].filter(
          comment => comment.deleted === false
        )
    }

    return(
      <div className="box">

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
        <div className="column" style={{ maxWidth: '100px' }}>
            <div
              className="button"
              onClick={() => {
                setPostIdToDeleteModal(post.id)
                displayDeleteModal(true)
              }}
            >
            delete
            </div>

          

          </div>


        <DeletePost deletePostModal={deletePostModal} />
      </div>
    )
  }
}

function mapStateToProps(state,props){
  return {
    comments: state.comments,
    deletePostModal: state.deletePostModal
  }
}

function mapDispatchToProps(dispatch,ownProps){
  return{
    setPostsComments: () => {
      ReadableAPI.getCommentsByPostId(ownProps.post.id).then(comments => {
        dispatch(setPostsComments(ownProps.post.id,comments))
      })
    },
    displayDeleteModal: bool => {
      dispatch(displayDeleteModal(bool))
    },
    setPostIdToDeleteModal: postId => {
      dispatch(setPostIdToDeleteModal(postId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostInList)
