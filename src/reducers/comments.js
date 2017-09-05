import {
  ADD_COMMENT,
  UPDATE_COMMENT,
  SET_COMMENTS_TO_POST_ID,
  APPLY_VOTE_TO_COMMENT
} from '../actions'


export const comments = (state={}, action) => {
  switch(action.type) {
    case SET_COMMENTS_TO_POST_ID:
      const { postId, comment } = action
      return {
        ...state,
        [postId]: comment
      }

    case APPLY_VOTE_TO_COMMENT:
      return {
        ...state,
        [action.parentId]: state[action.parentId].map(
          content =>
                  content.id === action.commentId
                  ? {...content, voteScore: newValue}
                  : content
        )
      }

    case ADD_COMMENT:
      const { comment } = action
      const parentId = action.parentId

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
        [action.parentId]:state[action.parentId].map(
          content =>
              content.id === action.id
              ? {...content, body: acton.body, author: action.author}
              : content
        )
      }

    default:
      return state
  }
}
