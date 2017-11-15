import React from 'react'
import { Link } from 'react-router-dom'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Button from 'react-bootstrap/lib/Button'

const CategoryInfo = (props) => (
  <Link
    to={props.linkTo}
    className="column"
  >
  <ButtonToolbar>
    <Button>
      <p className={'notification is-centered-text ' + props.colorToApply}>
      <span className="title">{props.title}</span>
      <br />
      { (props.numberOfPosts > 0 ) ?
          ((props.numberOfPosts > 1 ) ?
            props.numberOfPosts + ' posts' : '1 post')
          : 'No posts yet' }
      </p>
    </Button>
  </ButtonToolbar>

  </Link>
)

export default CategoryInfo
