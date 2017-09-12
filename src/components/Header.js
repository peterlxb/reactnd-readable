import React from 'react'
import { Link } from 'react-router-dom'
import AddPostButton from './post/AddPostButton'

const Header = () => (
  <div className="readable-Header">
    <div className="container">
      <div className="navbar">
        <Link
          className="navbar-main"
          to="/"
        >
        Home page
        </Link>
      </div>
      <div className="navbar-item">
        <p className="control">
          <AddPostButton />
        </p>
      </div>
    </div>
  </div>
)

export default Header
