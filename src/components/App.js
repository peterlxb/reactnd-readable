import React, { Component } from 'react';
import { Switch,Route} from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import '../App.css';
import { fetchAllCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'
import {
  getAllPosts,
  getPost,
} from '../utils/readableAPI'
import Home from './Home'
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
      <div>
        <Switch>
          <Route
            exact
            path ="/"
            render={() =>
              <Home
                categories={categories}
                posts={posts}
              />}
            />

              <Route
                path ="/new"
                render={() =>
                  <AddPost />}
                />
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
