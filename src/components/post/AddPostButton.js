import React from 'react'
import { Link } from 'react-router-dom'

const AddPostButton = () => (
  <Link className="button" to="/new">
    Add new post
  </Link>
)

export default AddPostButton
