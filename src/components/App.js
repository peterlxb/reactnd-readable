import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux'
import * as readableApi from '../utils/api'
import { withRouter } from 'react-router'
import {
  setCategories,setPosts,
} from './../actions'
import * as ReadableAPI from './../utils/api'
import Categories from './categories/categories'
import Home from './Home'

class App extends Component {

  componentWillMount() {
    this.props.getAllCategories()
    this.props.getAllPosts()
  }

  render() {
    const { categories, posts } = this.props

    return(
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={( {match} ) =>
              <Home
              categories={categories}
              posts={posts}
              />}
          />
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    categories: state.categories,
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch){
  return{
    getAllCategories: () => {
      ReadableAPI.getAllCategories().then(categories => {
        dispatch(setCategories(categories))
      })
    },
    getAllPosts: () => {
      ReadableAPI.getAllPosts().then(posts => {
        dispatch(setPosts(posts))
      })
    }
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
