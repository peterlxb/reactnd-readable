import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import LogoImg from '../images/readable-logo.png'

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

    let postOfTheCategory = []
    if(category && posts) {
      postOfTheCategory = posts.filter((post) => (post.category === category.data.name))
    }

    return(
      <div className="container">
          <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src={LogoImg} width="112" height="26" alt="This a logo of redux project"/>
              </Link>
          </div>
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
            
          </div>
    )
  }
}

export default CategoriesInfo
