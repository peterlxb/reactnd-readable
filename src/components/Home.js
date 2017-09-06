import React, { Component } from 'react'
import Categories from './categories/categories'

class Home extends Component {
  render() {
    const { categories ,posts} = this.props
    return(
      <div>
        <Categories
          categories={categories}
          posts={posts}
        />
      </div>
    )
  }
}

export default Home
