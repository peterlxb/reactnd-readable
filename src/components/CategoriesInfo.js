import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import LogoImg from '../images/readable-logo.png'

class CategoriesInfo extends Component {

  getCategory = (categories) => {
    if (categories) {
      const categoryFound = {
          data: categories.find((category) => (category.path === this.props.categoryPath)),
          index: categories.findIndex((category) => (category.path === this.props.categoryPath))
      }
      if (categoryFound.index === -1) return null
      else return categoryFound
    }
    return null
  }

  render() {
    const { categories, posts, categoryPath } = this.props
    const category = this.getCategory(categories)
    const allPosts = posts[0];

    let postOfTheCategory = []
    if(category && posts) {
      postOfTheCategory = allPosts.filter((post) => (post.category === category.data.name))
    }

    return(
      <div className="container">
          <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src={LogoImg} width="112" height="26" alt="This a logo of redux project"/>
              </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link className="button is-info" to='/new'>
                      <span className="icon"><i className="fa fa-plus"></i></span>
                        &nbsp; Add new post
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <hr />
            {console.log(postOfTheCategory)}

            <div className="readable-posts">

            {postOfTheCategory.length > 0 && postOfTheCategory.map((post) => (
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
                          {post.comments.length } comments
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
        </div>
    )
  }
}

export default CategoriesInfo
