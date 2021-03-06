import React,{ Component } from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { deletePosts,upVoteAction,downVoteAction,changeSortAction } from '../../actions/posts'
import { showDate ,sortByDate, sortByScore } from '../../utils/helpers'


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
    const { posts ,sortMethod,changeSort} = this.props
    sortMethod === 'date' ? posts.sort(sortByDate) : posts.sort(sortByScore)

    return(
      <div className="container has-top-margin">

      <div className="select right">
        {console.log(sortMethod)}
        <select
          value={sortMethod}
          onChange={(e) => {changeSort(e.target.value)}}
        >
          <option value="score">Top Score</option>
          <option value="date">Most recent</option>
        </select>
      </div>

      {posts.length > 0 && posts.map((post) => (
        <div
          style={{ marginBottom: '50px' }} key={post.id}>
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
                      <div className="button is-success is-outlined"
                        onClick={() => this.onClickUpVote(post.id)}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                      </div>
                      <div className="button is-danger is-outlined"
                        onClick={() => this.onClickDownVote(post.id)}>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true" />
                      </div>
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
                      <span
                      className="is-size-4"
                      >
                      <Link
                      to={'/' + post.category + '/' + post.id}
                      className="is-size-4"
                    >
                      {post.title}
                    </Link>
                      </span>
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

function mapStateToProps(state){
  return {
    sortMethod:state.sortMethod,
    categories:state.categories,
  }
}

function mapDispatchToProps(dispatch){
  return{
    deletePost: (id) => dispatch(deletePosts(id)),
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id)),
    changeSort: (value) => dispatch(changeSortAction(value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostInfo)
