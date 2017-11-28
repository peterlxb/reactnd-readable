import React,{Component} from 'react'
import {connect} from 'react-redux'
import { deleteCommentAction,editCommentAction ,fetchPost} from '../../actions/posts'


class Comments extends Component {

  state = {
    edit: false,
    editId: '',
    body:'',
    author:''
  }

  onDeleteClick = (id) => {
    this.props.deleteComment(id)
  }

  onEditButton = (id, editId) => {
    this.setState({
      edit: !this.state.edit,
      editId:id
    })
  }

  onEdit = (id) => {
    const {editId, body, author} = this.state

      this.props.editComment(editId, {
        author,
        body,
      })

    this.setState({
      edit: !this.state.edit,
      editId:id
    })
  }

  onChangeComment = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  onChangeAuthor = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  render() {
    const {comment} = this.props
    const {post} = this.props
    return(
      <section className="content readable-comment">
        <div className="columns is-mobile">
          {console.log(comment)}
          <div className="column" style={{ maxWidth: '115px' }}>
            <div className="readable-voteScore-wrapper">
              <div className={'readable-voteScore-value notification '}>
                  {comment.voteScore}
              </div>
                  <a className="button is-success is-outlined"
                    onClick={() => {}}>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                  </a>
                  <a className="button is-danger is-outlined"
                    onClick={() => {}}>
                    <i className="fa fa-thumbs-o-down" aria-hidden="true" />
                  </a>
              </div>
            </div>


              { this.state.edit ?

                (<div className="editCommentArea">
                <input
                  type="text"
                  className="input"
                  name="commentAuthor"
                  defaultValue={comment.author}
                  onChange={this.onChangeAuthor}
                />
                <textarea
                  className="textarea has-bottom-margin"
                  name="commentBody"
                  defaultValue={comment.body}
                  onChange={this.onChangeComment}
                />
                <div
                  className="button is-success is-small"
                  onClick={() => this.onEdit(comment.id)}
                >
                  Update
                </div>
                &nbsp;
                <div
                  className="button is-small"
                  onClick={() => this.onEditButton(comment.id)}
                >
                  Cancel
                </div>
              </div>
            )
            : (
              <div className="column">
              <div>
                 <strong>{comment.author}</strong>
                 &nbsp;
                 <small>{comment.timestamp}</small>
                 &nbsp; · &nbsp;
                 <span>
                  <div onClick={() => this.onDeleteClick(comment.id)} className="button is-small is-danger is-outlined">
                    delete
                  </div>
                  &nbsp;
                  <div onClick={() => this.onEditButton(comment.id)} className="button is-small is-info is-outlined">
                  edit
                  </div>
                  </span>
                 <br/>
                 <div className="content">
                  {comment.body.split('\n').map((item, key) => {
                    return (
                      <span key={key}>
                      {item}
                      <br />
                      </span>
                )
                  })}
                </div>
                </div>
                </div>
            )
          }




        </div>
      </section>
    )
  }
}

function mapStateToProps({post}) {
  return{
    post:post.post
  }

}

function mapDispatchToProps(dispatch){
  return{
    deleteComment:(id) => dispatch(deleteCommentAction(id)),
    editComment: (id,body,author) => dispatch(editCommentAction(id,body,author)),
    getPost: (id) => dispatch(fetchPost(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments)
