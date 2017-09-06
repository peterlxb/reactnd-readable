import React from 'react';
import { Link } from 'react-router-dom'

const Categories = props =>
    <div className="container">
        <h3 className="title">Category</h3>
        <div className="container">
          <div className="column">
            <ul className="tabmeun">
            {props.caregories && props.categories.map((category, index) => {
              <li key={index} className="category-item">
                <Link
                  to={'/category/' + category.path}
                  key={index}>
                <span className="title">{category.name}</span>
                <br />
                </Link>
              </li>
            })}
            </ul>
          </div>
        </div>
      </div>


export default Categories;
