import { combineReducers } from 'redux'

import {
  GET_ALL_POSTS,
  ADD_NEW_POST,
  DELETE_POST,
  DELETE_POSTS,
  GET_POST_CATEGORY,
  EDIT_POST,
  GET_POST,
} from '../actions/posts'

const initialPostState = {};

export const posts = (state=initialPostState,action) => {
  switch(action.type){
    case GET_ALL_POSTS:
      return {
        posts: action.posts
      }
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, action.post]
      }
    case DELETE_POSTS:
      return {
        posts:[]
      }
    case DELETE_POST:
      const currentPost = [...state.posts]
      const indexToDelete = currentPost.findIndex(post => post.id === action.id)
      return {
        ...state,
        posts: [...currentPost.slice(0, indexToDelete),
        ...currentPost.slice(indexToDelete + 1)]
      }
    case EDIT_POST:

    case GET_POST_CATEGORY:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}
