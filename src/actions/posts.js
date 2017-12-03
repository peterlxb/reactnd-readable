import {
  getAllPosts,
  getPost,
  getComments,
  addNewPost,
  deletePost,
  editPost,
  getAllPostsForCategory,
  votePost,
  addComment,
  deleteComment,
  editComment,
  voteComment
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
export const VOTE_POST = 'VOTE_POST'
export const ADD_COMMENT ='ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
export const CHANGE_SORT = 'CHANGE_SORT'

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

export const addCommentAction = (comment) => dispatch => {
  return addComment(comment)
            .then(comment => {
              dispatch({
                type:ADD_COMMENT,
                comment
              })
            })
        }

  export const deleteCommentAction = (id) => dispatch => {
    return deleteComment(id)
              .then(() => {
                dispatch({
                  type:DELETE_COMMENT,
                  id
                })
              })
        }

  export const editCommentAction = (id,comment) => dispatch => {
    return editComment(id,comment)
              .then((comment) => {
                dispatch({
                  type:EDIT_COMMENT,
                  id,
                  comment
                })
              })
        }

  export const upVoteCommentAction = (id) => dispatch => (
    voteComment(id,"upVote")
      .then((comment) => {
        dispatch({
          type:UPVOTE_COMMENT,
          id: comment.id,
          parentId: comment.parentId,
          voteScore: comment.voteScore
        })
      })
  )


    export const downVoteCommentAction = (id) => dispatch => (
      voteComment(id,"downVote")
        .then((comment) => {
          dispatch({
            type:DOWNVOTE_COMMENT,
            id: comment.id,
            parentId: comment.parentId,
            voteScore: comment.voteScore
          })
        })
    )

    export const changeSortAction = (method) => {
      return {
        type:CHANGE_SORT,
        method
      }
    }
