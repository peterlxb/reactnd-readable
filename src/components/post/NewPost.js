import React, { Component } from 'react'
import Header from './../Header'
import { connect } from 'react-redux'
import { addPost, getAllPosts } from './../../utils/api'
import { controlNewPostForm ,addNewPost } from '../../actions'
import faker from 'faker'

class NewPost extends Component {



  handleSubmit = (event) => {
    event.preventDefault()

    if(this.fieldsAreValid()) {
      this.props.newPostForm.id = faker.random.uuid()
      this.props.newPostForm.timestamp = Date.now()
      this.props.addNewPost(this.props.newPostForm)
    }
    event.preventDefault()

  }

  fieldsAreValid = () => {
    const form = this.props.newPostForm
    if( form.title && form.title !== ''
        && form.category && form.category !== ''
        && form.username && form.username !== ''
        && form.message && form.message !== ''
        && form.category !== 0
      ) return true;
    return false
  }

  handleChange = (event) => {
     this.props.controlNewPostForm(event.target.name, event.target.value)
  }



  render() {
    const { categories , newPostForm, controlNewPostForm } = this.props
    
    return(
      <div>

        <Header />

        <div className="container">
          <div className="columns">
            <div className="column">
              <form onSubmit={this.handleSubmit}>

                <div className="title">
                  Add a New Post
                </div>

                <div className="field">
                  <label className="label">Post Title</label>
                  <div className="control">
                    <input className="input"
                      type="text"
                      name="title"
                      onChange={(event) => this.handleChange(event)}
                      placeholder="title" />
                  </div>
                </div>

                <div className="field">
                  <label className="label">UserName</label>
                  <div className="control">
                    <input
                      placeholder="username"
                      className="input"
                      type="text"
                      name="username"
                      onChange={(event) => this.handleChange(event)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Categories</label>
                  <div className="select">
                    <select
                      placeholder="title"
                      className="input"
                      type="text"
                      name="category"
                      onChange={(event) => this.handleChange(event)}
                    >
                      <option value="0">
                        Select Category
                      </option>

                      { categories && categories.map((category,index) =>
                          <option key={index} value={category.path}>
                            {category.name}
                          </option>
                      )}

                    </select>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      placeholder="message"
                      className="textarea"
                      name="message"
                      onChange={(event) => this.handleChange(event)}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button
                      type="submit"
                      className="button"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <a className="button">Cancel</a>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    categories: state.categories,
    newPostForm: state.newPostForm
  }
}

function mapDispatchToProps(dispatch,ownProps){
  return{
    controlNewPostForm: (name, value) => {
      dispatch(controlNewPostForm(name,value))
    },
    addNewPost: (formValues) => {
      addPost(formValues).then(() => {
        dispatch(addNewPost(formValues))

      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
