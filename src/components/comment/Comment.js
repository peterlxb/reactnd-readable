import React, { Component } from 'react'
import { showDate } from '../../utils/utils'
import { connect } from 'react-redux'
import {
  updateCommentById,
  getCommentsByPostId
} from './../../utils/api'

class Comment extends Component{

  render() {
    const { comment } = this.props
    return (
      <div>
        <strong>{comment.author}</strong>
        &nbsp;
        <small>{showDate(comment.timestamp)}</small>
        &nbsp; · &nbsp;
        <br />
        <div className="content">
        {comment.body.split('\n').map((item, key) => {
          return (
            <span key={key}>
                {item}
                <br />
                </span>
                  )
                })}
        </div>
      </div>
    )
  }

}

export default Comment
