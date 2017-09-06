import React from 'react'
import { Link } from 'react-router-dom'

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
    </div>
  </div>
)

export default Header
