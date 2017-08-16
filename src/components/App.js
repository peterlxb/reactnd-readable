import React, { Component } from 'react';
import * as api from '../utils/api'
import Post from './Post'
class App extends Component {

  state = {
    post:[]
  }

  componentDidMount() {
    api.getPost().then((post) => {
      this.setState({ post })
    })
  };

  
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to React</h2>
          <ul className="tabmeun">
            <li>react</li>
            <li>redux</li>
            <li>udacity</li>
          </ul>
        </div>
        <Post posts={this.state.post}/>
      </div>
    );
  }
}

export default App;
