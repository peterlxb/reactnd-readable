import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchPost,editPostAction } from '../actions/posts'

const objectToArray = obj => {
 if (obj) return Object.keys(obj).map(key => obj[key])
 else return []
}

class EditPost extends Component {

  state = {
    id:'',
    title:'',
    author:'',
    body:'',
    category:'',
    notValid: false,
    success: false,
    edited: false
  }

  componentWillMount() {
    const { id } = this.props.match.params
    console.log(this.props.getPost)
    this.props.getPost(id)
      .then(() => {
        const { title, author, body, category, voteScore } = this.props.post
        this.setState({
          id,
          title,
          author,
          body,
          category
        })
      })
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onBodyChange = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  onAuthorChange = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  onCategoryChange = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  onEditClick = () => {
    const { id, title, category, body, author } = this.state
    this.props.editPost(id, {
      title,
      category,
      body,
      author
    })
    .then(() => {
        this.setState({
          success: true
        })
    })
  }

  render() {

    const { categories,posts } = this.props
    const {id,category} = this.state

    return(
      <div className="container has-top-margin has-bottom-margin">
      {this.state.success && (
        <Redirect
          from={`/edit/${id}`}
          to={`/`}  />
      )}
        <div className="title">
          Edit this post: <i></i>
        </div>

        <div className='columns'>
          <div className='column is-half'>
            <form>
              <div className="field">
                <label className="label">Post Title</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={event => this.onTitleChange(event)}
                    placeholder="Title"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    name="author"
                    onChange={event => this.onAuthorChange(event)}
                    placeholder="your username"
                    value={this.state.author}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-user" />
                  </span>
                </div>
                <p className="usernameMessageError help is-success is-hidden">
                  This username is not valid
                </p>
              </div>


              <div className="field">
                <label className="label">Category</label>
                <div className="control">
                  <div className="select">
                    <select
                      name="category"
                      value={this.state.category}
                      onChange={this.onCategoryChange}
                    >
                      <option value="0">Select category</option>
                      {categories &&
                        categories.map((category, index) =>
                          <option key={index} value={category.name}>
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
                    name="body"
                    onChange={event => this.onBodyChange(event)}
                    className="textarea"
                    value={this.state.body}
                    placeholder="Your message"
                  />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <input
                    className="Post-Button"
                    type="button"
                    value="Edit"
                    onClick={this.onEditClick.bind(this)}
                     />
                </div>
                <div className="control">
                  <a
                    onClick={() => window.history.back()}
                    className="button is-link"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({posts, categories,post}){
  return{
    posts:posts.posts,
    categories:categories.categories,
    post:post.post
  }
}

function mapDispatchToProps(dispatch){
  return{
    editPost: (id, post) => dispatch(editPostAction(id,post)),
    getPost: (id) => dispatch(fetchPost(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditPost)
