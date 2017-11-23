import { combineReducers } from 'redux'
import {categories} from './categories'
import {posts} from './posts'
import {comments} from './comment'
import {post} from './post'

export default combineReducers({
  categories,
  posts,
  post,
})
