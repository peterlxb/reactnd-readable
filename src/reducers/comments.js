import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  SET_COMMENTS_TO_POST_ID,
  APPLY_VOTE_TO_COMMENT,
  CONTROL_NEW_COMMENT ,
  CONTROL_EDIT_COMMENT
} from '../actions'


export const comments = (state={}, action) => {
  switch(action.type) {
    case SET_COMMENTS_TO_POST_ID:
      const { postId, comments } = action
      return {
        ...state,
        [postId]: comments
      }

    case APPLY_VOTE_TO_COMMENT:
      return {
        ...state,
        [action.parentId]: state[action.parentId].map(
          content =>
                  content.id === action.commentId
                  ? {...content, voteScore: action.newValue}
                  : content
        )
      }

    case ADD_COMMENT:
      const { comment } = action
      const parentId = action.postId

      const newComment = {
        author: comment.commentAuthor,
        body: comment.newComment,
        deleted: false,
        id: comment.id,
        parentDeleted: false,
        parentId: parentId,
        timestamp: comment.timestamp,
        voteScore: 1

      }

      return {
        ...state,
        [parentId]: state[parentId].cancat(newComment)
      }

    case UPDATE_COMMENT:
      return {
        ...state,
        [action.parentId]: state[action.parentId].map(
          content =>
              content.id === action.id
              ? {...content, body: action.body, author: action.author}
              : content
        )
      }

    default:
      return state
  }
}

export const newCommentData = (state={}, action) => {
  switch(action.type){
    case CONTROL_NEW_COMMENT:
      const { name, value } = this.props
      return {
        ...state,
        [name]:value
      }
    default:
      return state
  }
}

export const editCommentForm = (state={id: 0}, action) => {
  switch(action.type){
    case CONTROL_EDIT_COMMENT:
      const { name, value } = this.props
      return {
        ...state,
        [name]:value
      }
    default:
      return state
  }
}
