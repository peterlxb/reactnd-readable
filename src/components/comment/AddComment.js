import React, { Component } from 'react';
import { connect } from 'react-redux';
import faker from 'faker'
import { controlNewComment, addNewCommentData } from '../../actions'
import { addNewComment, getCommentsByPostId } from './../../utils/api'

class AddComment extends Component {
  constructor(props){
    super(props)

  }



  handleChange = (event) => {
    this.props.controlNewComment(event.target.name, event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.fieldsAreValid()) {
      this.props.newCommentData.id = faker.random.uuid()
      this.props.newCommentData.timestamp = Date.now()
      this.props.addNewComment(this.props.newCommentData)
    }

    event.preventDefault()
  }

  fieldsAreValid = () => {
    const form = this.props.newCommentData
    if (form.commentAuthor && form.commentAuthor !== ''
      && form.newComment && form.newComment !== ''
      ) return true;
    return false;
  }

  render (){
    const {newCommentData, controlNewComment } = this.props
    
    return (
      <div>
        <h4>Add a Comment:</h4>
        <input className="input"
          type="text"
          name="commentAuthor"
          placeholder="your username"
          onChange={(event) => this.handleChange(event)}
        />
        <textarea
          className="textarea"
          type="text"
          name="newComment"
          onChange={(event) => this.handleChange(event)}
        />
        <div className="button" onClick={this.handleSubmit}>
          Post Comment
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    newCommentData: state.newCommentData
  }
}
function mapDispatchToProps(dispatch,ownProps){
  return {
    controlNewComment: (name,value) =>
      dispatch(controlNewComment(name,value)),
    addNewComment: (commentData) => {
      addNewComment(ownProps.postId,commentData).then(() => {
        getCommentsByPostId(ownProps.postId).then((comments) => {
          dispatch(addNewCommentData(ownProps.postId,commentData))
        })
      })
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddComment)
