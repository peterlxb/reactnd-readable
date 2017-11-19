import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import LogoImg from '../images/readable-logo.png'

class AddPost extends Component {

  state = {
    title: '',
    category: '',
    author: '',
    body: '',
    notValid: false,
    success: false
  }

  render(){
    const { categories } = this.props
    return(

        <div>

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
              <hr />
              <div className="container has-top-margin has-bottom-margin">
                <div className="columns">
                  <div className="column is-half">
                    <form>

                        <div className="title">
                          Add a new Post
                        </div>

                        <div className="field">
                          <label className="label">Post Title</label>
                          <div className="control">
                            <input
                              className="input"
                              type="text"
                              placeholder="Text input"
                              onChange={() => {}}
                              />
                          </div>
                        </div>
                    </form>

                  </div>
                </div>


                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      placeholder="Input Username"
                      onChange={() => {}}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <p className="usernameMessageError help is-success is-hidden">This username is available</p>
                </div>


                <div className="field">
                  <label className="label">Category</label>
                  <div className="control">
                    <div className="select">
                      <select name="category" onChange={() => {}}>
                        <option value="0">Select category</option>
                        { categories && categories.map((category, index) =>
                                  <option
                                    key={index}
                                    value={category.path}>
                                      {category.name}
                                  </option>
                        )}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      name="textarea"
                      className="textarea"
                      placeholder="Textarea"
                      onChange={() => {}}>
                    </textarea>
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button type="submit" className="button is-link">
                      <span className="icon"><i className="fa fa-paper-plane"></i></span>
                            &nbsp; &nbsp;
                            Submit
                    </button>
                  </div>
                  <div className="control">
                    <button className="button is-text">Cancel</button>
                  </div>
                </div>
              </div>
            </div>


    )
  }
}

export default AddPost
