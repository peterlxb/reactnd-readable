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
    txtComment: '',
    author:''
  }

  componentDidMount() {
    const { postId } =  this.props
    this.props.getPost(postId)
  }

  onInputAuthor = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  onInputBody = (e) => {
    this.setState({
      txtComment: e.target.value
    })
  }

  onCommentSubmit = (e) => {
    e.preventDefault();
    if(this.state.txtComment) {
      const newComment = {
        id:uuidv1(),
        timestamp: Date.now(),
        body: this.state.txtComment,
        author: this.state.author,
        parentId: this.props.postId,
      }

      this.props.addComment(newComment)
        .then(() => {
          this.setState({
            txtComment: '',
            author:''
          })
        })
    }
  }

  render() {
    const { postId } = this.props
    const { post } = this.props.post
    const { comments } = this.props.post.post

    return(
      <div className="newCommentWapper">
        {console.log(postId)}
        <h4>
          Add a comment:
        </h4>
        <input className="input has-bottom-margin"
          type="text"
          name="commentAuthor"
          placeholder="your username"
          value={this.state.author}
          onChange={this.onInputAuthor}/>
        <textarea
          className="textarea has-bottom-margin"
          type="text"
          name="newComment"
          value={this.state.txtComment}
          placeholder="add a comment..."
          onChange={this.onInputBody} />
        <div className="button has-bottom-mini-margin" onClick={this.onCommentSubmit}>Post Comment</div>


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
