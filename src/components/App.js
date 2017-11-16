import React, { Component } from 'react';
import LogoImg from '../images/readable-logo.png'
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid'
import Row  from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import { connect } from 'react-redux'
import '../App.css';
import { fetchAllCategories } from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {

    const {categories} = this.props
    return (
      <Grid>
      <div className="readable-main">
      <Row className="show-grid">
      {console.log(categories)}
        <Col xs={9} md={6}>
          <div className="navbar-brand">
            <img src={LogoImg} width="112" height="36" alt="This a logo of redux project"/>
          </div>
        </Col>
        <Col xs={9} md={6}>
            <Button bsStyle="primary">
              <p>
              <span className="icon"><i className="fa fa-plus"></i></span>
                &nbsp; Add new post
              </p>
            </Button>
         </Col>
        </Row>
        <hr />
        <Row className="show-grid">
        <div className="reabable-category">
          <h2>Categories</h2>

          {categories && categories.map((category,index) => (
            <Col xs={6} md={4}>
              <Button bsStyle="primary">
                {category.name}
              </Button>
            </Col>
          ))}

        </div>
        </Row>
        <hr />

        <div className="readable-post">
          <div className="columns">
            <div className="column">
              <article className="media">
                <div className="media-left">
                  <figure className="has-text-centered">
                    VoteScore
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>
                      <i
                      className="fa fa-user-circle-o"
                      aria-hidden="true"
                      />{' '}
                      Author
                      </strong>
                        &nbsp; · &nbsp;
                      <small>
                      <i className="fa fa-clock-o" aria-hidden="true" />{' '}
                      Date
                      </small>
                      <br />
                      <a
                      className="is-size-4"
                      >
                      title
                      </a>
                    </p>
                  </div>
                  <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="tag">
                      category
                    </a>
                    &nbsp;
                    <span className="icon is-small">
                      <i className="fa fa-comment-o" />
                    </span>
                    &nbsp;
                    comments
                  </div>
                </nav>
                </div>
              </article>
            </div>
          </div>
        </div>
        <hr />
        <div>footer</div>
      </div>
      </Grid>
    );
  }
}
function mapStateToProps(categories) {
  return {
    categories: categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(fetchAllCategories())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
