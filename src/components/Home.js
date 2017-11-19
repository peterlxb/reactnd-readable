import React, { Component } from 'react'
import { Route, Switch,Link } from 'react-router-dom'
import LogoImg from '../images/readable-logo.png'
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid'
import Row  from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Categories from './Categories'
import AddPost from './AddPost'
import Posts from './posts'


class Home extends Component{
  render(){
    const {categories,posts} = this.props
    return(
      <div className="container">
        <Row className="show-grid">
          <Col xs={9} md={6}>
            <div className="navbar-brand">
              <img src={LogoImg} width="112" height="36" alt="This a logo of redux project"/>
            </div>
          </Col>
          <Col xs={9} md={6}>
            <Link className="button is-primary" to='/new'>
              <span className="icon"><i className="fa fa-plus"></i></span>
                &nbsp; Add new post
            </Link>
          </Col>
        </Row>
        <hr />
        <Row className="show-grid">
          <div className="reabable-category">
            <h2>Categories</h2>
            <Categories categories={categories} />
          </div>
        </Row>
        <hr />
        <Row className="show-grid">
          <Posts posts={posts}/>
        </Row>
        <hr />

      </div>
    )
  }
}

export default Home
