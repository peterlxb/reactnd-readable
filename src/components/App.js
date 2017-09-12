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
import { objectToArray } from './../utils/utils'
import Categories from './categories/categories'
import Category from './categories/mainCategories'
import PostView from './post/PostView'
import Home from './Home'
import NewPost from './post/NewPost'

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
          <Route
            path="/category/:url"
            render={({ match }) =>
              <Category
                categories={categories}
                categoryPath={match.params.url}
                posts={posts}
              />
          }/>
          <Route
            path="/:category/:postId"
            render={({match}) =>
              <PostView
              postId={match.params.postId}
              categoryUrl={match.params.category}
              />
            }/>

            <Route exact path="/new" component={NewPost} />
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    categories: state.categories,
    posts: objectToArray(state.posts).filter(post => post.deleted === false),
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
