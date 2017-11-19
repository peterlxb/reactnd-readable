
import {
  GET_ALL_POSTS,
  ADD_NEW_POST
} from '../actions/posts'

const initialPostState = {};

export const posts = (state=initialPostState,action) => {
  switch(action.type){
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.posts,
        comments: action.comments
      }
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.post]
      }
    default:
      return state
  }
}
