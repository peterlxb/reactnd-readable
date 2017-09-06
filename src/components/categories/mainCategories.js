import React, { Component } from 'react'
import Header from './../Header'
import PostList from './../post/PostList'

class Category extends Component {
  getCategory = (categories) => {
    if(categories){
      const categoriesFound = {
        data: categories.find((category) => (category.path === this.props.categoryPath)),
        index: categories.findIndex((category) => (category.path === this.props.categoryPath)),
      }
      if (categoriesFound.index === -1) return null
      else return categoriesFound
    }
    return null
  }

  render() {
    const { categories, posts,  categoryPath } = this.props
    const category = this.getCategory(categories)
    let postsToDisplay = []
    if (category && posts) {
      postsToDisplay = posts.filter( (post) => (post.category === category.data.name))
    }

    return(
      <div>
        <Header />

           <div style={{marginBottom: '50px'}}>
             <PostList posts={postsToDisplay}/>
           </div>
      </div>
    )
  }
}

export default Category
