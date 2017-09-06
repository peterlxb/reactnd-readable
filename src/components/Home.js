import React, { Component } from 'react'
import Categories from './categories/categories'
import Header from './Header'
import PostList from './post/PostList'

class Home extends Component {
  render() {
    const { categories ,posts} = this.props
    return(
      <div>
        <Header />
        <Categories
          categories={categories}
          posts={posts}
        />
        <PostList posts={posts} />
      </div>
    )
  }
}

export default Home
