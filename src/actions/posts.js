import {
  getAllPosts,
  getPost,
  getComments
} from '../utils/readableAPI'

export const GET_ALL_POSTS = "GET_ALL_POSTS"
export const GET_POST = "GET_POST"

function getPosts(posts,comments){
  return {
    type: GET_ALL_POSTS,
    posts,
    comments,
  }
}

export const fetchPosts = () => dispatch => (
  getAllPosts()
    .then((posts) => {
      posts.map(post => {
        getComments(post.id)
          .then(comments =>{
            dispatch(getPosts(posts,comments))
          })
      })
    }
))
