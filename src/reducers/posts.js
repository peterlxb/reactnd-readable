
import {
  GET_ALL_POSTS,
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
    default:
      return state
  }
}
