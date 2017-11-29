import React,{ Component } from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { deletePosts ,upVoteAction,downVoteAction} from '../../actions/posts'
import Comments from './Comments'
import AddComment from './AddComment'
import { showDate } from '../../utils/helpers'


class PostInfo extends Component {

  onDeleteClick = (id) => {
    this.props.deletePost(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
  }

  render() {
    const { post ,postId} = this.props
    const commentsToShow = post[0].comments;
    return(
      <div>
      {post &&
        <div className="container content has-top-margin"
          style={{ marginBottom: '50px' }}>
          <div className="columns is-mobile">

              {console.log(postId)}
              <div className="column" style={{ maxWidth: '115px' }}>
                <div className="readable-voteScore-wrapper">
                  <div className={'readable-voteScore-value notification '}>
                      {post[0].voteScore}
                  </div>
                      <a className="button is-success is-outlined"
                        onClick={() => this.onClickUpVote(post[0].id)}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                      </a>
                      <a className="button is-danger is-outlined"
                        onClick={() => this.onClickDownVote(post[0].id)}>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true" />
                      </a>
                  </div>
                </div>


            <div className="column">
              <h1>
                {post[0].title}
              </h1>
              <blockquote>
                {post[0].body}
              </blockquote>

              <div className="has-bottom-margin">
                <i className="fa fa-user-circle-o" aria-hidden="true" />{' '}
                <strong>{post[0].author}</strong>
                &nbsp; · &nbsp;
                <i className="fa fa-clock-o" aria-hidden="true" />{' '}
                {showDate(post[0].timestamp)}
                &nbsp; · &nbsp; Category:{' '}
                <Link
                  className="tag is-small is-primary is-outlined"
                  to={'/category/' + post[0].category}
                >
                  {(post[0].category)}
                </Link>
                &nbsp; · &nbsp;
                <span
                  className="notifcation is-danger is-outlined is-small button"
                  onClick={() =>this.onDeleteClick(post[0].id)}
                >
                  delete
                </span>
                &nbsp;
                <Link
                  to={'/edit/' + post[0].id}
                  className="notifcation is-info is-outlined is-small button"
                >
                  edit
                </Link>
              </div>
              {commentsToShow &&
                  commentsToShow.length > 0 &&
                  <div>
                    {commentsToShow.length > 1
                      ? <div>
                          <div className="select right">

                          </div>
                          <h3>
                            {commentsToShow.length} comments:
                          </h3>
                        </div>
                      : <h3>
                          {commentsToShow.length} comment:
                        </h3>}
                    {commentsToShow.map((comment, index) =>(
                      <Comments comment={comment} key={index}/>
                      )
                    )}

                  </div>}
                  <br/>
                  <AddComment postId={postId}/>

            </div>
            </div>
          </div>}

        </div>
      )
  }
}

function mapStateToProps({categories}){
  return {
    categories:categories.categories
  }
}

function mapDispatchToProps(dispatch){
  return{
    deletePost: (id) => dispatch(deletePosts(id)),
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostInfo)
