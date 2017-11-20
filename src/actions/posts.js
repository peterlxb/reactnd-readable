import {
  getAllPosts,
  getPost,
  getComments,
  addNewPost,
  deletePost,
} from '../utils/readableAPI'

export const GET_ALL_POSTS = "GET_ALL_POSTS"
export const GET_POST = "GET_POST"
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const DELETE_POST = 'DELETE_POST'

function getPosts(posts,comments){
  return {
    type: GET_ALL_POSTS,
    posts,
    comments,
  }
}

function addNewPostAction(post) {
  return{
    type:ADD_NEW_POST,
    post
  }
}

function deletePostAction(id){
  return{
    type:DELETE_POST,
    id
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

export const addPost = (post) => dispatch => (
  addNewPost(post)
    .then(post => {
      dispatch(addNewPostAction(post))
    })
)

export const deletePosts = (id) => dispatch => {
  deletePost(id)
    .then(() => {
      dispatch(deletePostAction(id))
    })
}
