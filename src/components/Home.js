import React, { Component } from 'react'
import { Route, Switch,Link } from 'react-router-dom'
import LogoImg from '../images/readable-logo.png'
import Categories from './Categories/Categories'
import AddPost from './NewPost/AddPost'
import Posts from './Posts/Post'
import Header from './Header'


class Home extends Component{
  render(){
    const {categories,posts} = this.props
    return(
      <div className="container">

            <Header />
            <hr />

          <div className="container">
            <h2 className="title is-3 is-spaced">Categories</h2>
            <Categories categories={categories} posts={posts}/>
          </div>
          <hr />
          <Posts posts={posts}/>
      </div>
    )
  }
}

export default Home
