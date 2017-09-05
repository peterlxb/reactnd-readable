import { combineReducers } from 'redux'
import { SHOW_MESSAGE } from '../actions'
import { categories } from './categories'
import { comments } from './comments'
import { posts }  from './posts'

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
  showMessage
})
