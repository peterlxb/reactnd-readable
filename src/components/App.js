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
import Posts from './posts'

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
        <Posts posts={posts}/>
        <hr />
        <Switch>
          <Route exact path ='/new' component={AddPost} />
        </Switch>
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
