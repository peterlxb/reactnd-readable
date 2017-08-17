import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import * as api from '../utils/api'

class Category extends Component {

render() {
    //console.log(this.props.categories)
    return (
      <div>
          <ul className="tabmeun">
          {console.log(this.props.categories[Object.keys(this.props.categories)])}
          </ul>

      </div>
    );
  }
}

export default Category;
