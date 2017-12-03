import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import LogoImg from '../../images/readable-logo.png'
import PostInfo from '../Posts/PostInfo'
import Header from '../Header'

class CategoriesInfo extends Component {

  getCategory = (categories) => {
    if (categories) {
      const categoryFound = {
          data: categories.find((category) => (category.path === this.props.categoryPath)),
          index: categories.findIndex((category) => (category.path === this.props.categoryPath))
      }
      if (categoryFound.index === -1) return null
      else return categoryFound
    }
    return null
  }

  render() {
    const { categories, posts, categoryPath } = this.props
    const category = this.getCategory(categories)
    const allPosts = posts;

    let postOfTheCategory = []
    if(category && posts) {
      postOfTheCategory = allPosts.filter((post) => (post.category === category.data.name))
    }

    return(
      <div className="container">
        <Header />
        <hr />
        <div>
          {postOfTheCategory.length > 0 &&   <PostInfo posts={postOfTheCategory}/>}
        </div>
      </div>
    )
  }
}

export default CategoriesInfo
