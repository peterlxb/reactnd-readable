export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const SET_COMMENTS_TO_POST_ID = 'SET_COMMENTS_TO_POST_ID'
export const APPLY_VOTE_TO_COMMENT = 'APPLY_VOTE_TO_COMMENT'

export function addNewComment(postId,comments) {
  return {
    type: ADD_COMMENT,
    postId,
    comments
  }
}

export function setPostsComments(postId,comments){
  return {
    type: SET_COMMENTS_TO_POST_ID,
    postId,
    comments
  }
}

export function updateComment(id, parentId, author,body) {
  return {
    type:UPDATE_COMMENT,
    parentId,
    id,
    author,
    body
  }
}

export function applyVoteToComment(commentId, parentId,newValue){
  return {
    type: APPLY_VOTE_TO_COMMENT,
    commentId,
    parentId,
    newValue
  }
}
