import React, { Component } from 'react'
import { connect } from 'react-redux'
import { controlEditCommentForm, setPostsComments } from '../../actions'
import {
  updateCommentById,
  getCommentsByPostId
} from './../../utils/api'
import { showDate } from '../../utils/utils'

class Comment extends Component {
  


  fieldsAreValid() {
    const form = this.props.editCommentForm
    if (
      form.commentAuthor &&
      form.commentAuthor !== '' &&
      form.commentBody &&
      form.commentBody !== ''
    )
      return true
    return false
  }

  render() {
    const { comment, editCommentForm, controlEditCommentForm } = this.props

    return(
      <section className="content">
        <div className="columns">
          <div className="column">
            {editCommentForm.id !== comment.id &&
              <div>
                <strong>{comment.author}</strong>
                &nbsp;
                <small>{showDate(comment.timestamp)}</small>
                &nbsp;
                <div>
                  {comment.body.split('\n',).map((item,key) => {
                    return(
                      <span key={key}>
                        {item}
                        <br />
                      </span>
                    )
                  })}
                </div>
              </div>
            }
            {editCommentForm.id === comment.id &&
              <div className="editComment">

              </div>
            }

          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state){
  return{
    editCommentForm: state.editCommentForm
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return{
    controlEditCommentForm: (name, value)=> {
      dispatch(controlEditCommentForm(name, value))
    },
    updateComment: (commentId,body, author) => {
      updateCommentById(commentId,body,author).then(() => {
        getCommentsByPostId(ownProps.comment.parentId).then(comments => {
          dispatch(setPostsComments(ownProps.comment.parentId,comments))
        })
        dispatch(controlEditCommentForm('id',0))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
