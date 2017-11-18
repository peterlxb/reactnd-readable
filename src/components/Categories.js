import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid'
import Row  from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

class Categories extends Component {

    render(){

      return(
        <div>
        {this.props.categories && this.props.categories.map((category,index) => (
          <Col xs={6} md={4} key={index}>
            <Button bsStyle="info" bsSize="large">
              {category.name}
            </Button>
          </Col>
        ))}
        </div>
      )
    }

}

export default Categories
