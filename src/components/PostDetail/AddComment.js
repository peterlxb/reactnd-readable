import React,{Component} from 'react'
import uuidv1 from 'uuid/v1'
import { connect } from 'react-redux'
import { fetchPosts ,fetchPost,addCommentAction} from '../../actions/posts'
import {
  getAllPosts,
  getPost,
} from '../../utils/readableAPI'

class AddComment extends Component{

  state = {
    txtComment: ''
  }

  render() {
    return(
      <div className="newCommentWapper">
        <h4>
          Add a comment:
        </h4>
        <input className="input has-bottom-margin"
          type="text"
          name="commentAuthor"
          placeholder="your username"
          onChange={() => {}} />
        <textarea
          className="textarea has-bottom-margin"
          r
          type="text"
          name="newComment"
          placeholder="add a comment..."
          onChange={() => {}} />
        <div className="button has-bottom-mini-margin">Post Comment</div>


      </div>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id)),
    addComment: (comment) => dispatch(addCommentAction(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)
