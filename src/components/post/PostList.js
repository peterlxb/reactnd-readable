import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostInList from './PostInList'
import { objectToArray } from '../../utils/utils'

class PostList extends Component {
  render() {
    const { posts, loadingPosts} = this.props
    return(
      <div>




  {loadingPosts
    ? <div />
    : <div>
        <h3 className="title is-3 is-spaced">

        </h3>
        <div>
          {posts.length > 0 &&
            posts.map((post, index) =>
              <PostInList

                key={index}
                post={post}
                
              />
            )}
        </div>
      </div>}



      </div>
    )
  }
}

function mapStateToProps(state,props){
  return{
    posts: objectToArray(state.posts),
    loadingPosts: state.postsAreLoading
  }
}

export default connect(mapStateToProps)(PostList)
