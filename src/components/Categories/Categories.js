import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Categories extends Component {

    render(){
      const { categories,posts} = this.props

      return(
        <div className="columns">

        {categories && categories.map((category,index) => {

          if(posts) {
            var numberOfPosts = posts.filter(post => post.category === category.name).length;
          } else {
            var numberOfPosts = 0
          }

          return (
            <Link to={"/category/"+category.name} className="column" key={category.name}>
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
