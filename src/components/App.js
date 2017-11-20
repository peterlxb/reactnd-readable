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
import CategoriesInfo from './CategoriesInfo'
import EditPost from './EditForm'

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

              />}
             />
            <Route
              path ="/new"
              render={() =>
              <AddPost

              />}
              />
              <Route
                path="/edit/:id"
                component={EditPost}
              />
            <Route
              path="/category/:url"
              render={({match}) =>
                <CategoriesInfo
                  categories={categories}
                  categoryPath={match.params.url}
                  posts={posts}
                />}
              />
        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchAllCategories()),
    getPosts: () => dispatch(fetchPosts())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
