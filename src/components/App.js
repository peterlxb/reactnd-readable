import React, { Component } from 'react';
import LogoImg from '../images/readable-logo.png'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="readable-main">

        <div className="readable-header">
          <div className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <img src={LogoImg} width="112" height="36" alt="This a logo of redux project"/>
              </div>
              <div className="navbar-item">
                <p className="control">
                  <span className="icon"><i className="fa fa-plus"></i></span>
                  &nbsp; Add new post
                </p>
              </div>
            </nav>
          </div>
        </div>
        <hr />

        <div className="reabable-category">
          <h3>Categories</h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Udacity</li>
          </ul>
        </div>
        <hr />

        <div className="readable-post">
          <div className="columns">
            <div className="column">
              <article className="media">
                <div className="media-left">
                  <figure className="has-text-centered">
                    VoteScore
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>
                      <i
                      className="fa fa-user-circle-o"
                      aria-hidden="true"
                      />{' '}
                      Author
                      </strong>
                        &nbsp; · &nbsp;
                      <small>
                      <i className="fa fa-clock-o" aria-hidden="true" />{' '}
                      Date
                      </small>
                      <br />
                      <a
                      className="is-size-4"
                      >
                      title
                      </a>
                    </p>
                  </div>
                  <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="tag">
                      category
                    </a>
                    &nbsp;
                    <span className="icon is-small">
                      <i className="fa fa-comment-o" />
                    </span>
                    &nbsp;
                    comments
                  </div>
                </nav>
                </div>
              </article>
            </div>
          </div>
        </div>
        <hr />
        <div>footer</div>
      </div>
    );
  }
}

export default App;
