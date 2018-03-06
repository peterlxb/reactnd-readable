import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link,Redirect } from 'react-router-dom'
import LogoImg from '../../images/readable-logo.png'
import uuidv1 from 'uuid/v1'
import { addPost } from '../../actions/posts'
import Header from '../Header'
import {  getAllPosts } from '../../utils/readableAPI'

class AddPost extends Component {

  state = {
    title: '',
    category: '',
    author: '',
    body: '',
    notValid: false,
    success: false,
    submitted: false
  }

  handleSubmit() {

    const { title, category, author, body } = this.state

    if (title && category && author && body) {
      const newPost = {
        id: uuidv1(),
        timestamp: Date.now(),
        title,
        category,
        author,
        body
      }

      this.props.addPosts(newPost)
        .then(() => this.setState({
          success: true,
          title: '',
          category: '',
          author: '',
          body: '',
          notValid: false,
          submitted:true
        }))

        getAllPosts();
    } else {
      this.setState({
        notValid: true,
        success: false
      })
    }
  }

  onTitleChange = (e) => {
    this.setState({
      title:e.target.value
    })
  }

  onUsernameChange = (e) => {
    this.setState({
      author:e.target.value
    })
  }

  onCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  onBodyChange = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  render(){
    const { categories } = this.props;
    let redirect = null;
    if(this.state.submitted) {
      redirect = <Redirect to="/" />
    }
    return(

        <div>
            {redirect}
            <Header />

              <hr />
              <div className="container has-top-margin has-bottom-margin">
                <div className="columns">
                  <div className="column is-half">
                  <div>
                    {this.state.success && (
                      <h3>New Post added...</h3>
                    )}
                  </div>
                  <div>
                    {this.state.notValid && (
                      <h3>Please enter all values...</h3>
                    )}
                  </div>
                    <div>
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
                              onChange={(event) => this.onTitleChange(event)}
                              value={this.state.title}
                              />
                          </div>
                        </div>

                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="text"
                      placeholder="Input Username"
                      onChange={(event) => this.onUsernameChange(event)}
                      value={this.state.author}
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
                      <select name="category"
                        onChange={(e) => this.onCategoryChange(e)}
                        value={this.state.category}>

                        { categories && categories.map((category, index) =>
                                  <option
                                    key={index}
                                    value={category.name}>
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
                      onChange={(event) => this.onBodyChange(event)}
                      value={this.state.body}>
                    </textarea>
                  </div>
                </div>

                <div className="field is-grouped">

                  <div className="control">

                    <input
                      className="Post-Button"
                      type="button"
                      value="Post"
                      onClick={this.handleSubmit.bind(this)}
                       />

                  </div>

                  <div className="control">
                    <a onClick={() => window.history.back()} className="button is-link">Cancel</a>
                  </div>

                </div>

                </div>
              </div>
            </div>
          </div>
          </div>
    )
  }
}

function mapStateToProps({categories}) {
  return {
    categories: categories.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPosts: (post) =>  dispatch(addPost(post))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPost)
