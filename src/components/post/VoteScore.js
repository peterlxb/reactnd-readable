import React, { Component } from 'react'
import { connect } from 'react-redux'
import { applyVote } from './../../actions'
import * as ReadableAPI from './../../utils/api'
import { objectToArray } from '../../utils/utils'
import FaArrowUp from 'react-icons/lib/fa/angle-up'
import FaArrowDown from 'react-icons/lib/fa/angle-down'

class VoteScore extends Component {
    render() {
      const { post, applyVote } = this.props
      return(
        <div className="readable-vote">

          <a className="button"
              onClick={() => applyVote(post.voteScore,1)}
            >
            <FaArrowUp size={30}/>
          </a>
          {post.voteScore}
          <a className="button"
              onClick={() => applyVote(post.voteScore,-1)}
            >
            <FaArrowDown size={30}/>
          </a>
        </div>
      )
    }
}

function mapStateToProps(state,props){
  return{
    posts: objectToArray(state.posts)
  }
}

function mapDispatchToProps(dispatch,ownProps){
  return{
    applyVote: (newValue, diff) => {
      ReadableAPI.votePost(ownProps.post.id, diff)
      dispatch(applyVote(ownProps.post.id, newValue+diff))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteScore)
