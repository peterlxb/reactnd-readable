import React, { Component } from 'react';
import LogoImg from '../images/readable-logo.png'
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid'
import Row  from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import { Link ,Switch,Route} from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css';
import { fetchAllCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'
import {
  getAllPosts,
  getPost,
} from '../utils/readableAPI'
import Categories from './Categories'
import AddPost from './AddPost'

 const objectToArray = obj => {
  if (obj) return Object.keys(obj).map(key => obj[key])
  else return []
}

class App extends Component {

  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }



  render() {

    const {categories,posts} = this.props
    return (

      <div className="container">
        <Row className="show-grid">
        {console.log(posts)}
        <Col xs={9} md={6}>
          <div className="navbar-brand">
            <img src={LogoImg} width="112" height="36" alt="This a logo of redux project"/>
          </div>
        </Col>
        <Col xs={9} md={6}>
            <Link className="button is-primary" to='/new'>
              <span className="icon"><i className="fa fa-plus"></i></span>
                &nbsp; Add new post
            </Link>

         </Col>
        </Row>
        <hr />
        <Row className="show-grid">
        <div className="reabable-category">
          <h2>Categories</h2>
          <Categories categories={categories}/>

        </div>
        </Row>

        <hr />

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

        <hr />
        <Switch>

          <Route exact path ='/new' component={AddPost} />

        </Switch>
        <div className="container">footer</div>
      </div>

    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: objectToArray(state.posts),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchAllCategories()),
    getPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
