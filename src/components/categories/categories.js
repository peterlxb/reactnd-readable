import React from 'react';
import CategoryInfo from './CategoryInfo'

const Categories = props =>
    <div className="container">
        <h3 className="title">Category</h3>
        <div className="container">
        <div className="columns">
        
          {props.categories  &&
            props.categories.map((category, index) => {
              let  numberOfPosts = props.posts.filter(
                  post => post.category === category.path
                ).length

              return (
                <CategoryInfo
                  linkTo={'/category/' + category.path}
                  key={index}
                  title={category.name}
                  numberOfPosts={numberOfPosts}
                />
              )
            })}
        </div>
        </div>
      </div>


export default Categories;
