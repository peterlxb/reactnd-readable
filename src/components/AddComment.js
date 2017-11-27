import React,{Component} from 'react'

class AddComment extends Component{
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

export default AddComment
