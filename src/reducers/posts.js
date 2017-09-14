import {
  SET_POSTS,
  ADD_NEW_POST,
  EDIT_POST,
  APPLY_VOTE,
  DELETE_POST,
  CONTROL_NEW_POST_FORM,
  CONTROL_EDIT_POST_FORM
} from  '../actions'

export const posts = (state ={}, action) => {
  switch(action.type){
    case DELETE_POST:
      const postIdToDelete = action.postId
      return {
        ...state,
        [postIdToDelete]:{
          ...state[postIdToDelete],
          deleted:true
        }
      }

    case SET_POSTS:
      const { posts } = action
      let stateWithPosts = []
      posts.forEach(post => {
        stateWithPosts = {
          ...stateWithPosts,
          [post.id]: post
        }
      })
      return stateWithPosts

    case EDIT_POST:
      const postEdited = action.post
      return {
        ...state,
        [postEdited.id]: {
          ...state[postEdited.id],
          title: postEdited.title,
          body: postEdited.body,
          author: postEdited.author,
          category: postEdited.category
        }
      }

    case APPLY_VOTE:
      const { postId, newValue } = action
      return {
        ...state,
        [postId]: {
          ...state[postId],
          voteScore: newValue
        }
      }

    case ADD_NEW_POST:
      const { title, username, message, category, id, timestamp } = action

      return {
        ...state,
        [id]:{
          author: username,
          body: message,
          category,
          deleted:false,
          id,
          timestamp,
          title,
          voteScore:1
        }
      }

    default:
      return state

  }
}

export const newPostForm = (state={},action) => {
  switch (action.type) {
    case CONTROL_NEW_POST_FORM:
      const { name, value } = action
      return{
        ...state,
        [name]:value
      }
    default:
      return state
  }
}

export const editPostForm = (state = {}, action) => {
  switch (action.type) {
    case CONTROL_EDIT_POST_FORM:
      const { name, value } = action
      return {
        ...state,
        [name]: value
      }
    default:
      return state
  }
}
