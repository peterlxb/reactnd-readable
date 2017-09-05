import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import * as api from '../utils/api'

class Category extends Component {



render() {
    const { categories } = this.props
    return (

      <div className="Category">
          <ul className="tabmeun">
          
            {(categories.categories !== undefined) &&
              categories.categories.map((item) =>
              <li key={item.name} className="category-item">{item.name}</li>
              )
            }
          </ul>

      </div>
    );
  }
}

export default Category;
