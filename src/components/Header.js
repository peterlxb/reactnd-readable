import React from 'react'
import { Link } from 'react-router-dom'
import AddPostButton from './post/AddPostButton'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'

const Header = () => (
  <div className="readable-Header">
    <ButtonToolbar>
      <Button bsStyle="primary">
        <Link
          className="navbar-main"
          to="/"
        >
          Home page
        </Link>
      </Button>
      <Button bsStyle="primary">
        <AddPostButton />
      </Button>
  </ButtonToolbar>
</div>
)

export default Header
