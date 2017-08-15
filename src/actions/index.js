export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function addPost({cagegoty, id, timestamp,title, body, author,voteScore,deleted}) {
  return {
    type:ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    voteScore,
    category,
    deleted,
  }
}

export function addComment({id,timestamp,body, author,voteScore, deleted,parentDeleted}) {
  return {
    type:ADD_COMMENT,
    id,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted,
  }
}
