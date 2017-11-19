import React, { Component } from 'react';

import { Link ,Switch,Route} from 'react-router-dom'
import { connect } from 'react-redux'
import '../App.css';
import { fetchAllCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'
import {
  getAllPosts,
  getPost,
} from '../utils/readableAPI'
import Home from './Home'

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
      <Switch>
        <Route
          exact
          path ='/'
          render={() =>
            (<Home
              categories={categories}
              posts={posts}
            />)}/>
      </Switch>
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
