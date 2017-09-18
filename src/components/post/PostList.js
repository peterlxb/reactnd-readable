import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostInList from './PostInList'
import { objectToArray } from '../../utils/utils'

class PostList extends Component {
  render() {
    const { posts} = this.props
    return(
      <div>



            <div>
              <h3 className="title"></h3>
              {posts.length > 1 &&
              posts.map((post, index) =>
              <PostInList
                post={post}
                key={index}
              />
            )}
            </div>
          


      </div>
    )
  }
}

function mapStateToProps(state,props){
  return{
    posts: objectToArray(state.posts),

  }
}

export default connect(mapStateToProps)(PostList)
