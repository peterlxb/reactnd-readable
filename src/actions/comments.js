import {
  getComments,
} from '../utils/readableAPI'

export const GET_COMMENTS = 'GET_COMMENTS'


function getCommentsAction(id,comments){
  return {
    type: GET_COMMENTS,
    id,
    comments,
  }
}


// export const fetchComments = (id) => dispatch => (
//   getpost(id)
//     .then(post => {
//       getComments(post.id)
//         .then(comments => {
//           dispatch(getCommentsAction(id,comments))
//         })
//     })
// )

// export const fetchPost = (id) => dispatch => (
//   getPost(id)
//     .then(post => {
//       getComments(post.id)
//         .then(comments => {
//           dispatch({
//             type:GET_POST,
//             post,
//             comments
//           })
//         })
//     })
//   )
