import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Posts from './posts'
import Categories from './Categories'
import LogoImg from '../images/readable-logo.png'
import { fetchAllCategories } from '../actions/categories'
import { fetchPosts } from '../actions/posts'
import SinglePost from './SinglePost'

const objectToArray = obj => {
 if (obj) return Object.keys(obj).map(key => obj[key])
 else return []
}

class PostView extends Component{

  render() {
    const {categories, posts,postId} = this.props
    const allPosts = posts[0]
    let postOfTheCategory = []
    if(posts) {
      postOfTheCategory = allPosts.filter((post) => (post.id === postId))
    }
    return(
      <div className="container">
          <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src={LogoImg} width="112" height="26" alt="This a logo of redux project"/>
              </Link>
          </div>
          {console.log(postOfTheCategory)}
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
            <div className="readable-posts">
            {postOfTheCategory.length > 0 &&   <SinglePost post={postOfTheCategory}/>}
            </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: objectToArray(state.posts),

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchAllCategories()),
    getPosts: () => dispatch(fetchPosts()),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostView);