import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Posts from './Posts/Post'
import Categories from './Categories/Categories'
import LogoImg from '../images/readable-logo.png'
import { fetchAllCategories } from '../actions/categories'
import { fetchPosts ,fetchPost} from '../actions/posts'
import SinglePost from './SinglePost'
import {
  getAllPosts,
  getPost,
} from '../utils/readableAPI'
import Header from './Header'

class PostView extends Component{

  componentDidMount() {

    this.props.getPost(this.props.postId);
  }

  render() {
    const {categories, posts,postId} = this.props
    const allPosts = posts
    let postOfTheCategory = []
    if(posts) {
      postOfTheCategory = allPosts.filter((post) => (post.id === postId))
    }
    return(
      <div className="container">
            <Header />
            <hr />
            <div className="readable-posts">
            {postOfTheCategory.length > 0 &&   <SinglePost post={postOfTheCategory}/>}
            </div>
      </div>
    )
  }
}

function mapStateToProps({posts}) {
  return {
    posts: posts.posts,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchAllCategories()),
    getPosts: () => dispatch(fetchPosts()),
    getPost: (id) => dispatch(fetchPost(id))

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostView);
