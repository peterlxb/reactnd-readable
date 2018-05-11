import {
  GET_ALL_POSTS,
  ADD_NEW_POST,
  DELETE_POST,
  DELETE_POSTS,
  GET_POST_CATEGORY,
  EDIT_POST,
  GET_POST,
  UP_VOTE,
  DOWN_VOTE,
  CHANGE_SORT
} from '../actions/posts'



export const posts = (state=[],action) => {
  switch(action.type) {
    case GET_ALL_POSTS:
      action.post.comments = action.comments
      return [
          ...state,
          action.post
      ]
    case ADD_NEW_POST:
      return {
        ...state,
        posts:[...state.posts, action.post]
      }
    case DELETE_POSTS:
      return {
        posts:[]
      }
    case DELETE_POST:
      const currentPost = [...state.posts]
      const indexToDelete = currentPost.findIndex(post => post.id === action.id)
      return {
        ...state,
        posts: [...currentPost.slice(0, indexToDelete),
        ...currentPost.slice(indexToDelete + 1)]
      }
    case EDIT_POST:
      const currentEditPost = [...state.posts]
      const indexEdit = currentEditPost.findIndex(post => post.id === action.id)
      const { title, category, body, author } = action.post
      const newPostToEdit = Object.assign({}, currentEditPost[indexEdit], {
        title,
        category,
        body,
        author
      })
      return {
        posts: [...currentEditPost.slice(0, indexEdit),
        newPostToEdit, ...currentEditPost.slice(indexEdit + 1)]
      }
    case UP_VOTE:
      const currentPostUpVote = [...state.posts]
      const indexUp = currentPostUpVote.findIndex(post => post.id === action.id)
      currentPostUpVote[indexUp].voteScore = currentPostUpVote[indexUp].voteScore + 1
      return {
        posts: [...currentPostUpVote]
      }
    case DOWN_VOTE:
      const currentPostDownVote = [...state.posts]
      const indexDown = currentPostDownVote.findIndex(post => post.id === action.id)
      currentPostDownVote[indexDown].voteScore = currentPostDownVote[indexDown].voteScore - 1
      return {
        posts: [...currentPostDownVote]
      }
    case GET_POST_CATEGORY:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}
