const api = 'http://localhost:5001'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const postPosts = () =>
  fetch(`${api}/posts`,{
    methos: 'POST',
    headers:{
      ...headers,
      'Content-Type':'application/json'
    }
  })
  .then(
    console.log("test")
  )

export const getPost = () =>
  fetch(`${api}/posts`,{headers})
  .then(res => res.json())

export const getComment = (id) =>
  fetch(`${api}/comments/id`,{headers})
  .then(res => res.json())

export const getCategory = () =>
  fetch(`${api}/categories`,{
    method:'GET',
    headers
  })
  .then(res => res.json())
