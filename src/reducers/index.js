import {
  GET_CATEGORIES
} from '../actions'

const initialCategoryState = [];

const categories = (state=initialCategoryState,action) => {
  switch(action.type){
    case GET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}

export default categories
