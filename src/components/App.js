import React, { Component } from 'react';
import * as api from '../utils/api'

class App extends Component {

  state = {
    post:[]
  }

  componentDidMount() {
    api.getPost().then((post) => {
      console.log(post)
    })
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to React</h2>

        </div>

      </div>
    );
  }
}

export default App;
