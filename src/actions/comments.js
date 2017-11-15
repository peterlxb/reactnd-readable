export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const SET_COMMENTS_TO_POST_ID = 'SET_COMMENTS_TO_POST_ID'
export const APPLY_VOTE_TO_COMMENT = 'APPLY_VOTE_TO_COMMENT'
export const CONTROL_NEW_COMMENT = 'CONTROL_NEW_COMMENT'
export const CONTROL_EDIT_COMMENT_FORM = 'CONTROL_EDIT_COMMENT_FORM'

export function addNewCommentData(postId,comment) {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  }
}

export function controlNewComment(name, value){
  return{
    type: CONTROL_NEW_COMMENT,
    name,
    value
  }
}

export function controlEditCommentForm(name, value){
  return{
    type: CONTROL_EDIT_COMMENT_FORM,
    name,
    value
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
