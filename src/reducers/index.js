import { combineReducers } from 'redux'
import {categories} from './categories'
import {posts} from './posts'
import {post} from './post'

import { CHANGE_SORT } from '../actions/posts'

function sortMethod(state = 'score', action) {
  switch (action.type) {
    case CHANGE_SORT:
      return action.method
    default:
      return state
  }
}

export default combineReducers({
  categories,
  posts,
  post,
  sortMethod
})
