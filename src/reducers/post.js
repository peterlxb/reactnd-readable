import {
  GET_ALL_POSTS,
  ADD_NEW_POST,
  DELETE_POST,
  DELETE_POSTS,
  GET_POST_CATEGORY,
  EDIT_POST,
  GET_POST,
} from '../actions/posts'

export const post = (state={},action) => {
  switch(action.type){
    case GET_POST:
      action.post.comments = action.comments
     return {
       ...state,
       post:action.post
     }
    default:
      return state
  }
}
