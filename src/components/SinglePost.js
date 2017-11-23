import React,{ Component } from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { deletePosts } from '../actions/posts'

const objectToArray = obj => {
 if (obj) return Object.keys(obj).map(key => obj[key])
 else return []
}

class SinglePost extends Component {

  onDeleteClick = (id) => {
    this.props.deletePost(id)
  }

  render() {
    const { post } = this.props

    return(
      <div>
      {post &&
        <div className="container content has-top-margin"
          style={{ marginBottom: '50px' }}>
          <div className="columns is-mobile">


              <div className="column" style={{ maxWidth: '115px' }}>
                <div className="readable-voteScore-wrapper">
                  <div className={'readable-voteScore-value notification '}>
                      {post[0].voteScore}
                  </div>
                      <a className="button is-success is-outlined"
                        onClick={() => {}}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                      </a>
                      <a className="button is-danger is-outlined"
                        onClick={() => {}}>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true" />
                      </a>
                  </div>
                </div>
            

            <div className="column">
              <h1>
                {post[0].title}
              </h1>
              <blockquote>
                {post[0].body}
              </blockquote>

              <div className="has-bottom-margin">
                <i className="fa fa-user-circle-o" aria-hidden="true" />{' '}
                <strong>{post[0].author}</strong>
                &nbsp; · &nbsp;
                <i className="fa fa-clock-o" aria-hidden="true" />{' '}
                {post[0].timestamp}
                &nbsp; · &nbsp; Category:{' '}
                <Link
                  className="tag is-small is-primary is-outlined"
                  to={'/category/' + post[0].category}
                >
                  {(post[0].category)}
                </Link>
                &nbsp; · &nbsp;
                <span
                  className="notifcation is-danger is-outlined is-small button"
                  onClick={() =>this.onDeleteClick(post[0].id)}
                >
                  delete
                </span>
                &nbsp;
                <Link
                  to={'/edit/' + post[0].id}
                  className="notifcation is-info is-outlined is-small button"
                >
                  edit
                </Link>
              </div>
            </div>
            </div>
          </div>
          }
        </div>
      )
  }
}

function mapStateToProps(state){
  return {
    categories:state.categories
  }
}

function mapDispatchToProps(dispatch){
  return{
    deletePost: (id) => dispatch(deletePosts(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SinglePost)
