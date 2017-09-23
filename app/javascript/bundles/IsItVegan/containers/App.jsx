import React from 'react'
import { Route, IndexRoute, Router, browserHistory, Redirect } from 'react-router'
import NavBar from '../components/NavBar'
import Homepage from '../components/Homepage'

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
        <IndexRoute component={Homepage} />
      </Route>
    </Router>
  )
}

export default App
