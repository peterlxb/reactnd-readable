import React from 'react';
import CategoryInfo from './CategoryInfo'

const Categories = props =>
    <div className="container">
        <h3 className="title">Category</h3>
        <div className="container">
        <div className="columns">
          {console.log("get categories: ", props.categories)}
          {console.log("get posts: ", props.posts)}
          {props.categories !== '' &&
            props.categories.map((category, index) => {
              

              return (
                <CategoryInfo
                  linkTo={'/category/' + category.path}
                  key={index}
                  title={category.name}

                />
              )
            })}
        </div>
        </div>
      </div>


export default Categories;
