import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid'
import Row  from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import { connect } from 'react-redux'

class Posts extends Component {
  render() {
    const {posts} = this.props
    return(
      <div className="readable-posts">
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
                    {posts[1].map(comment => (
                      <p>{comment.author}</p>
                    ))}
                  </div>
                </nav>

                </div>

              </article>
            </div>

            <div className="column" style={{ maxWidth: '100px' }}>
            <div className="button actionButtonFromPostList is-danger is-small is-outlined"
              onClick={() => {}}>
              <span className="icon is-small">
                <i className="fa fa-trash-o" />
              </span>
                &nbsp; delete
            </div>
            <br />
            <a className="button actionButtonFromPostList is-small is-info is-outlined">
              <span className="icon is-small">
                <i className="fa fa-edit" />
              </span>
              &nbsp; edit
            </a>
            </div>

          </div>
        </div>


      ))}
        </div>
    )
  }
}

export default Posts
