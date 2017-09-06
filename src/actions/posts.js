export const SET_POSTS = 'SET_POSTS'
export const APPLY_VOTE = 'APPLY_VOTE'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

export function setPosts(posts){
  return {
    type:'SET_POSTS',
    posts
  }
}

export function applyVote(postId,newValue){
  return{
    type:'APPLY_VOTE',
    newValue
  }
}

export function addNewPost(formValues){
  return {
    type:'ADD_NEW_POST',
    title:formValues.title,
    category: formValues.category,
    username: formValues.username,
    message: formValues.message,
    id: formValues.id,
    timestamp: formValues.timestamp
  }
}

export const deletePost = postId => ({
  type: DELETE_POST,
  postId
})

export const  editPost = post => ({
  type: EDIT_POST,
  post

})