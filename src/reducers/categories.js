import {
  GET_CATEGORIES,
} from '../actions/categories'

const initialCategoryState = [];

export const categories = (state={categories:[] },action) => {
  switch(action.type){
    case GET_CATEGORIES:
      return{
        ...state,
        categories: action.categories
      }
    default:
      return state
  }
}
