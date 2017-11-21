import {
  GET_COMMENTS,

} from '../actions/comments'

const initialCommentsState = [];

export const comments = (state=initialCommentsState,action) => {
  switch(action.type){
    case GET_COMMENTS:
      return action.comments
    default:
      return state
  }
}
