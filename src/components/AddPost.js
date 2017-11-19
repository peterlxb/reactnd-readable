import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import LogoImg from '../images/readable-logo.png'

class AddPost extends Component {
  render(){
    return(
      <div className="container has-top-margin has-bottom-margin">
        <div className="container">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                  <img src={LogoImg} width="112" height="26" alt="This a logo of redux project"/>
                </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                  <div className="field is-grouped">
                    <p className="control">
                      <Link className="button is-info" to='/new'>
                        <span className="icon"><i className="fa fa-plus"></i></span>
                          &nbsp; Add new post
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
        <div className="columns">
          <div className="column is-half">
            <form>

                <div className="title">
                  Add a new Post
                </div>

                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input" type="text" placeholder="Text input"/>
                  </div>
                </div>
            </form>

          </div>
        </div>


        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="Text input" value="bulma"/>
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check"></i>
            </span>
          </div>
          <p className="help is-success">This username is available</p>
        </div>


        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div clclassNameass="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>
      </div>
            )
  }
}

export default AddPost
