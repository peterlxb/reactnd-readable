import React,{ Component } from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { deletePosts,upVoteAction,downVoteAction } from '../../actions/posts'
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
    const { posts } = this.props

    return(
      <div>
      {posts.length > 0 && posts.map((post) => (
        <div className="container content has-top-margin"
          style={{ marginBottom: '50px' }}>
          <div className="columns">

            <div className="column">
              <article className="media">

                <div className="media-left">
                  <figure className="has-text-centered">
                  <div className="column" style={{ maxWidth: '115px' }}>
                    <div className="readable-voteScore-wrapper">
                      <div className={'readable-voteScore-value notification '}>
                            {post.voteScore}
                        </div>
                      <a className="button is-success is-outlined"
                        onClick={() => this.onClickUpVote(post.id)}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                      </a>
                      <a className="button is-danger is-outlined"
                        onClick={() => this.onClickDownVote(post.id)}>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true" />
                      </a>
                    </div>
                   </div>
                   </figure>
                 </div>

                <div className="media-content">

                  <div className="content">
                    <p>
                      <strong>
                      <i
                      className="fa fa-user-circle-o"
                      aria-hidden="true"
                      />{' '}
                      {post.author}
                      </strong>
                        &nbsp; · &nbsp;
                      <small>
                      <i className="fa fa-clock-o" aria-hidden="true" />{' '}
                      {showDate(post.timestamp)}
                      </small>
                      <br />
                      <a
                      className="is-size-4"
                      >
                      <Link
                      to={'/' + post.category + '/' + post.id}
                      className="is-size-4"
                    >
                      {post.title}
                    </Link>
                      </a>
                    </p>
                  </div>

                  <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="tag">
                      {post.category}
                    </a>
                    &nbsp;
                    <span className="icon is-small">
                      <i className="fa fa-comment-o" />

                    </span>
                    &nbsp;
                    {post.comments && post.comments.length
                      ? post.comments.length === 1
                        ? '1 comment'
                        : post.comments.length + ' comments'
                      : ' 0 comments'}
                  </div>
                </nav>

                </div>

              </article>
            </div>

            <div className="column" style={{ maxWidth: '100px' }}>
            <div className="button actionButtonFromPostList is-danger is-small is-outlined"
              onClick={() =>this.onDeleteClick(post.id)}>
              <span className="icon is-small">
                <i className="fa fa-trash-o" />
              </span>
                &nbsp; delete
            </div>
            <br />
            <Link to={'/edit/' + post.id}
              className="button actionButtonFromPostList is-small is-info is-outlined">
              <span className="icon is-small">
                <i className="fa fa-edit" />
              </span>
              &nbsp; edit
            </Link>
            </div>

          </div>
        </div>


      ))}
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
