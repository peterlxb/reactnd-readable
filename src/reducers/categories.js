import { GET_CATEGORIES } from '../actions'

const initialState = [];

const categories = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      const { categories } = action
      return categories
    default:
      return state
  }
}

export default categories
