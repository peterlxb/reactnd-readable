import {
  GET_CATEGORIES,
} from '../actions/categories'

export const categories = (state=[],action) => {
  switch(action.type){
    case GET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
