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
import AddPost from './NewPost/AddPost'
import CategoriesInfo from './Categories/CategoriesInfo'
import EditPost from './Posts/EditForm'
import PostView from './PostDetail/PostView'
import NotFound from './NotFound'

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
              <AddPost/>}
              />

              <Route
                path="/edit/:id"
                component={EditPost}
              />

            <Route
              path="/category/:url"
              render={({match}) =>
                <CategoriesInfo
                  categoryPath={match.params.url}

                />}
              />

              <Route
                path="/:category/:postId"
                render={({ match }) =>
                <PostView
                  postId={match.params.postId}
                  categoryUrl={match.params.category}
                  />}
                />

                <Route path="*" component={NotFound} />
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
    getPosts: () => dispatch(fetchPosts()),

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
