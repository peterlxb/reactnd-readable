import {
  GET_ALL_POSTS,
  ADD_NEW_POST,
  DELETE_POST,
  DELETE_POSTS,
  GET_POST_CATEGORY,
  EDIT_POST,
  GET_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../actions/posts'

export const post = (state={post: {} },action) => {
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

    default:
      return state
  }
}
