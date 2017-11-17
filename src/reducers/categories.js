
import {
  GET_CATEGORIES,

} from '../actions/categories'

const initialCategoryState = [];

export const categories = (state=initialCategoryState,action) => {
  switch(action.type){
    case GET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
