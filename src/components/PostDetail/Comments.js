import React,{Component} from 'react'
import {connect} from 'react-redux'
import { deleteCommentAction,editCommentAction ,fetchPost} from '../../actions/posts'


class Comments extends Component {

  onDeleteClick = (id) => {
    this.props.deleteComment(id)
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
              <div onClick={() =>{}} className="button is-small is-info is-outlined">
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
    editComment: (id,comment) => dispatch(editCommentAction(id,comment)),
    getPost: (id) => dispatch(fetchPost(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments)
