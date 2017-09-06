import React from 'react'
import { Link } from 'react-router-dom'

const CategoryInfo = (props) => (
  <Link
    to={props.linkTo}
    className="column"
  >
  <p className={'notification is-centered-text ' + props.colorToApply}>
    <span className="title">{props.title}</span>
    <br />

  </p>
  </Link>
)

export default CategoryInfo
