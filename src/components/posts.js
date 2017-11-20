import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link }from 'react-router-dom'
import { deletePosts } from '../actions/posts'

const objectToArray = obj => {
 if (obj) return Object.keys(obj).map(key => obj[key])
 else return []
}


class Posts extends Component {

  onDeleteClick = (id) => {
    this.props.deletePost(id)
  }

  render() {
    const {posts} = this.props
    return(
      <div className="readable-posts">
      {console.log(posts)}
      {posts.length > 0 && posts[0].map((post) => (
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
                        onClick={() => {}}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                      </a>
                      <a className="button is-danger is-outlined"
                        onClick={() => {}}>
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
                      {Date(post.timestamp)}
                      </small>
                      <br />
                      <a
                      className="is-size-4"
                      >
                      {post.title}
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

                  </div>
                </nav>

                </div>

              </article>
            </div>

            <div className="column" style={{ maxWidth: '100px' }}>
            <div className="button actionButtonFromPostList is-danger is-small is-outlined"
              onClick={() => this.onDeleteClick(post.id)}>
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
    posts:objectToArray(state.posts)
  }
}

function mapDispatchToProps(dispatch){
  return{
    deletePost: (id) => dispatch(deletePosts(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)
