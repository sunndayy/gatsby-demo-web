import React from 'react'
import { Link } from 'gatsby'
import {
  Row,
  Col
}
from 'reactstrap'

class Layout extends React.Component {
  render() {
    const {title, children } = this.props
    let header = (
        <div>
          <Row>
            <Col xs="4">
            <Link to={`/`}>
              <img src = {require('../images/logo.png')} alt = "logo" />
            </Link>
            </Col>
            <Col xs="2">
              <Link to="/">
                Docs Home
              </Link>
            </Col>
            <Col xs="2">
              <Link to="/">
                Getting started
              </Link>
            </Col>
            <Col xs="2">
              <Link to="/">
                Web in app
              </Link>
            </Col>
            <Col xs="2">
              <Link to="/">
                Web to app
              </Link>
            </Col>
          </Row>
        </div>
      )
    return (
      <div style={{paddingLeft: 20}}>
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
