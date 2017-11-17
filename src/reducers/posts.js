
import {
  GET_ALL_POSTS,
} from '../actions/posts'

const initialPostState = {};

export const posts = (state=initialPostState,action) => {
  switch(action.type){
    case GET_ALL_POSTS:
      return action.posts
    default:
      return state
  }
}
