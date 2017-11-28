import React, { Component } from 'react'
import LogoImg from '../../images/readable-logo.png'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
          <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src={LogoImg} width="112" height="26" alt="This a logo of redux project"/>
              </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link className="button is-info" to='/new'>
                      <span className="icon"><i className="fa fa-plus"></i></span>
                        &nbsp; Add new post
                    </Link>
                  </p>
                </div>
              </div>
            </div>
        </div>
    )
  }
}

export default Header;
