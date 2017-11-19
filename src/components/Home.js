import React, { Component } from 'react'
import { Route, Switch,Link } from 'react-router-dom'
import LogoImg from '../images/readable-logo.png'
import Categories from './Categories'
import AddPost from './AddPost'
import Posts from './posts'


class Home extends Component{
  render(){
    const {categories,posts} = this.props
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

          <div className="container">
            <h2 className="title is-3 is-spaced">Categories</h2>
            <Categories categories={categories} />
          </div>
          <hr />
          <Posts posts={posts}/>
      </div>
    )
  }
}

export default Home
