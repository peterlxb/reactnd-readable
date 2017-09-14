import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Comment from './../comment/Comment'
import { connect } from 'react-redux'
import FaArrowUp from 'react-icons/lib/fa/angle-up'
import FaArrowDown from 'react-icons/lib/fa/angle-down'
import {
  showDate
} from '../../utils/utils'
import AddComment from './../comment/AddComment'
import VoteScore from './VoteScore'

class Post extends Component {
  render(){
    const { post,comments} = this.props
    let commentsToShow = []



    if(comments){
      commentsToShow = comments.filter(comment => comment.deleted === false)
    }
    return(
      <div>
      {post &&
        <div
         className="container"
         style={{ marginBottom: '50px' }}
         >
         {console.log("posts,",post)}

        <div className="columns">
          <div className="column" style={{ maxWidth: '115px' }}>
               <VoteScore voteScore={post.voteScore} post={post} />
          </div>
          <div className="column">
            <h1>{post.title}</h1>
            <blockquote>
              {post.body}
            </blockquote>
            <div>
            <i className="fa fa-user-circle-o" aria-hidden="true" />{' '}
                <strong>{post.author}</strong>
                &nbsp; · &nbsp;
                <i className="fa fa-clock-o" aria-hidden="true" />{' '}
                {showDate(post.timestamp)}
                &nbsp; · &nbsp; Category:{' '}
                <Link
                  className="tag is-small is-primary is-outlined"
                  to={'/category/' + post.category}
                >
                  {post.category}
                </Link>
                &nbsp; · &nbsp;

            </div>
            {commentsToShow && commentsToShow.length > 0
              &&
              <div>
                <h3>{ commentsToShow.length} comments</h3>
                {commentsToShow.map((comment,index) =>
                  <Comment position={index} key={index} comment={comment} />
                )}
              </div>
            }
            <AddComment postId={post.id} />
          </div>
        </div>
      </div>}
      </div>
    )
  }
}

export default Post
