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
    posts:[],
    categories:[],
    comments:[]
  }

  componentDidMount() {
    api.getPost().then((posts) => {
      console.log("get post when mount", posts)
      this.setState({ posts })
    });

    

    api.getCategory().then((categories) => {
      //console.log("From api:", categories)
      this.setState({categories: categories})
    })
  };



  render() {
    return (
      <div>
        <Category categories={this.state.categories}/>
        <Post posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
