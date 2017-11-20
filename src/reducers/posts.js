
import {
  GET_ALL_POSTS,
  ADD_NEW_POST,
  DELETE_POST
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
    case DELETE_POST:
      const currentPost = [...state.posts]
      const Post = currentPost.filter(post => post.id !== action.id)
      return {
        posts: Post
      }
    default:
      return state
  }
}
