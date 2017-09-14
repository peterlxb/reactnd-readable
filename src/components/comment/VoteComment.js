import React, { Component } from 'react'
import { connect } from 'react-redux'
import { applyVoteToComment } from './../../actions'
import {voteComment} from './../../utils/api'
import { objectToArray } from '../../utils/utils'

class VoteComment extends Component {
  render() {
    const { comment, applyVoteToComment } = this.props
    return(
      <div className="readable-vote">

        <a className="button"
            onClick={() => applyVoteToComment(comment.voteScore,1)}
          >
          Upvote
        </a>
        {comment.voteScore}
        <a className="button"
            onClick={() => applyVoteToComment(comment.voteScore,-1)}
          >
          DownVote
        </a>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    posts: objectToArray(state.posts)
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return{
    applyVoteToComment: (newValue, diff) => {
      voteComment(ownProps.comment.id, diff).then(
        dispatch(applyVoteToComment(ownProps.comment.id, ownProps.comment.parentId, newValue + diff))
      )
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(VoteComment)
