import {
  getAllPosts,
  getPost,
  getComments,
  addNewPost,
  deletePost,
  editPost,
  getAllPostsForCategory,
  votePost,
} from '../utils/readableAPI'

export const GET_ALL_POSTS = "GET_ALL_POSTS"
export const GET_POST_CATEGORY = 'GET_POST_CATEGORY'
export const GET_POST = "GET_POST"
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_POSTS = 'DELETE_POSTS'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const DOWN_VOTE = 'DOWN_VOTE'
export const UP_VOTE = 'UP_VOTE'

function getPosts(post,comments){
  return {
    type: GET_ALL_POSTS,
    post,
    comments
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
    .then(posts => {
      posts.map(post => {
        getComments(post.id)
          .then(comments => {
            dispatch(getPosts(post,comments))
          })
      })
    }
))

// export const fetchPosts = () => dispatch => (
//   getAllPosts()
//     .then((posts) => {
//       dispatch(getPosts(posts))
//     })
// )

export const fetchPost = (id) => dispatch => (
  getPost(id)
    .then(post => {
      getComments(post.id)
        .then(comments => {
          dispatch({
            type:GET_POST,
            post,
            comments
          })
        })
    })
  )

export const addPost = (post) => dispatch => (
  addNewPost(post)
    .then(post => {
      dispatch(addNewPostAction(post))
    })
  )

export const editPostAction = (id,post) => dispatch => (
  editPost(id,post)
    .then((post) => {
      dispatch({
        type:EDIT_POST,
        id,
        post
      })
    })
  )

export const deletePosts = (id) => dispatch => {
  deletePost(id)
    .then(() => {
      dispatch(deletePostAction(id))
    })
}

export const removePostAction = (id) => dispatch =>(
  deletePost(id)
    .then(() => {
      dispatch({
        type:REMOVE_POST,
        id
      })
    })
  )

export const getAllPostsCategoryAction = (category) => dispatch => (
  getAllPostsForCategory(category)
    .then((posts) => {
      dispatch({
        type:GET_POST_CATEGORY,
        posts
      })
    })
  )

export const downVoteAction = (id) => dispatch => (
  votePost(id,'downVote')
    .then(() => {
      dispatch({
        type: DOWN_VOTE,
        id
      })
    })
  )

export const upVoteAction = (id) => dispatch => (
  votePost(id,'upVote')
    .then(() => {
      dispatch({
        type: UP_VOTE,
        id
      })
    })
  )
