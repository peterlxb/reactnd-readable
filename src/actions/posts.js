import {
  getAllPosts,
  getPost,
} from '../utils/readableAPI'

export const GET_ALL_POSTS = "GET_ALL_POSTS"
export const GET_POST = "GET_POST"

function getPosts(posts){
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

export const fetchPosts = () => dispatch => (
  getAllPosts().then((posts) => (
    dispatch(getPosts(posts))
  ))
)
