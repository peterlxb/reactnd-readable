import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import * as api from '../utils/api'
import Post from './Post'
import Category from './Category'

class App extends Component {

  state = {
    post:[],
    categories:[]
  }

  componentDidMount() {
    api.getPost().then((post) => {
      this.setState({ post })
    });

    api.getCategory().then((categories) => {
      console.log("From api:", categories)
      this.setState({categories: categories})
    })
  };



  render() {
    return (

        <Category categories={this.state.categories}/>

    );
  }
}

export default App;
