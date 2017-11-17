import {
  getAllCategories,
} from '../utils/readableAPI'

export const GET_CATEGORIES = "GET_CATEGORIES"

function getCategories(categories){
  return{
    type:GET_CATEGORIES,
    categories
  }
}

export const fetchAllCategories = () => dispatch => (
  getAllCategories().then((categories) => (
    dispatch(getCategories(categories))
  ))
)
