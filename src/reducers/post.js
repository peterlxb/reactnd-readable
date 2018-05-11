import {
  GET_ALL_POSTS,
  ADD_NEW_POST,
  DELETE_POST,
  DELETE_POSTS,
  GET_POST_CATEGORY,
  EDIT_POST,
  GET_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT
} from '../actions/posts'

export const post = (state={},action) => {
  switch(action.type){
    case GET_POST:
      action.post.comments = action.comments
     return {
       ...state,
       post:action.post
     }
    case ADD_COMMENT:
      return {
        ...state,
        post:{
          ...state.post,
          comments:[...state.post.comments,action.comments]
        }
      }
    case DELETE_COMMENT:
      const comments = [...state.post.comments]
      const CommentIndex = comments.findIndex(comment => comment.id === action.id)
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...comments.slice(0,CommentIndex),
          ...comments.slice(CommentIndex + 1)]
        }
      }
    case EDIT_COMMENT:
      const editComments = [...state.post.comments]
      const indexEditComment = editComments.findIndex(comment => comment.id === action.id)
      const {body, timestamp, author} = action.comment
      const newCommentToEdit = Object.assign({}, editComments[indexEditComment], {
        body,
        timestamp,
        author
      })
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...editComments.slice(0, indexEditComment),
          newCommentToEdit, ...editComments.slice(indexEditComment + 1)]
        }
      }
    case UPVOTE_COMMENT:
      const upVoteComments = [...state.post.comments]
      const indexUpComment = upVoteComments.findIndex(comment => comment.id === action.id)
      const upScore = action.voteScore
      const newUpScore = Object.assign({}, upVoteComments[indexUpComment], {
        voteScore: upScore
      })
      return {
        ...state,
        comments: [...upVoteComments.slice(0,indexUpComment),
          newUpScore, ...upVoteComments.slice(indexUpComment + 1)]
      }
    case DOWNVOTE_COMMENT:
      const downVoteComments = [...state.post.comments]
      const indexDownComment = downVoteComments.findIndex(comment => comment.id === action.id)
      const downScore = action.voteScore
      const newDownScore = Object.assign({}, downVoteComments[indexDownComment], {
        voteScore: downScore
      })
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...downVoteComments.slice(0, indexDownComment),
          newDownScore, ...downVoteComments.slice(indexDownComment + 1)]
        }
      }
    default:
      return state
  }
}
