import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Main from '../components/Main'

const Root = props => (
  <div>
    <Route exact path="/main" component={Main} />
  </div>
)

export default connect()(Root)