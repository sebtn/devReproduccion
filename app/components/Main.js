import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Main extends Component {
  render() {
    return (
      <die>
        <h1>This is Main using store and provider!</h1>
        <h2>Local pizza Montreal</h2>
        <h2>Main piazza store</h2>
        <h2>Main piazza store</h2>
      </die>
    )
  }
}

export default connect()(Main)