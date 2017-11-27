import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Categories extends Component {

    render(){
      const { categories ,posts} = this.props

      return(
        <div className="columns">

        {categories && categories.map((category,index) => {

          let numberOfPosts = posts.filter(post => post.category === category.name).length;

          return (
            <Link to={"/category/"+category.name} className="column">
              <p className={'notification is-centered-text'}>
              <span className="title">{category.name}</span>
              <br />
              {
                (numberOfPosts > 0) ?
                ((numberOfPosts > 1) ? numberOfPosts + "posts" : "1 posts")
                : "no post yet"
              }
              </p>

            </Link>
          )
        })}
        </div>
      )
    }

}

export default Categories
