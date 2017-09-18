import { combineReducers } from 'redux'
import { SHOW_MESSAGE } from '../actions'
import { categories } from './categories'
import { comments,newCommentData,editCommentForm } from './comments'
import { posts ,newPostForm,editPostForm,deletePostModal,postsAreLoading}  from './posts'

function showMessage(state='',action){
  switch(action.type){
    case SHOW_MESSAGE:
      const { message } = action
      return message
    default:
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  comments,
  newCommentData,
  editCommentForm,
  showMessage,
  newPostForm,
  editPostForm,
  deletePostModal,
  postsAreLoading
})
