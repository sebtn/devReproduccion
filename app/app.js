import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { HashRouter as Router } from 'react-router-dom'

import  './styles/app.scss' 
import Root from './router'
import reducers from './reducers'

const createMiddleware = applyMiddleware(thunk)(createStore)
const devExtension = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
const store = createMiddleware(reducers, devExtension)
const element = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>
, element)