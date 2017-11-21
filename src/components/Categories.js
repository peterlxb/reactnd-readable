import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid'
import Row  from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import {Link} from 'react-router-dom'

class Categories extends Component {

    render(){
      const { categories ,posts} = this.props
      const allPosts = posts[0];
      return(
        <div className="columns">
        { console.log(allPosts)}
        {categories && categories.map((category,index) => {
          let numberOfPosts = allPosts.filter(post => post.category === category.name).length;

          return (
            <Link to={"/category/"+category.name} className="column">
              <p className={'notification is-centered-text'}>
                {category.name}
              </p>
              <br />
              {
                (numberOfPosts > 0) ?
                ((numberOfPosts > 1) ? numberOfPosts + "posts" : "1 posts")
                : "no post yet"
              }
            </Link>
          )
        })}
        </div>
      )
    }

}

export default Categories
