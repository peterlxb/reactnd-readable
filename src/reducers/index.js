import { combineReducers } from 'redux'
import {categories} from './categories'
import {posts} from './posts'
import {comments} from './comment'

export default combineReducers({
  categories,
  posts,
})
